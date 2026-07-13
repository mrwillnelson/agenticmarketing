#!/usr/bin/env node
// pull-trends.mjs: surface trending-story candidates for the newsjacking skill.
// Zero dependencies. Node 18+ (built-in fetch).
//
// Modes:
//   node pull-trends.mjs --hn "AI agents"          newest Hacker News stories matching a query
//   node pull-trends.mjs --reddit marketing        hot posts from a subreddit
//   node pull-trends.mjs --rss <url or file path>  items from an RSS or Atom feed
//
// Age leads every line because the posting window is the whole point.
// Exits 0 on success, 2 on usage or network errors.

import { readFileSync } from 'node:fs';

const UA = 'agenticmarketing-pull-trends/1.0 (founder-content trend scan)';
// Overridable so offline evals can point at a local fixture server.
const HN_BASE = process.env.PULL_TRENDS_HN_BASE || 'https://hn.algolia.com';
const REDDIT_BASE = process.env.PULL_TRENDS_REDDIT_BASE || 'https://www.reddit.com';

function fail(msg) {
  console.error(msg);
  process.exit(2);
}

function usage() {
  console.error(
    [
      'Usage: node pull-trends.mjs <mode> [--limit N]',
      '',
      'Modes (pick one):',
      '  --hn "query"            newest Hacker News stories matching the query',
      '  --reddit <subreddit>    hot posts from a subreddit',
      '  --rss <url or file>     items from an RSS or Atom feed; a local file path works too',
      '',
      'Options:',
      '  --limit N               maximum items to print (default 15)',
      '',
      'Examples:',
      '  node pull-trends.mjs --hn "AI agents"',
      '  node pull-trends.mjs --reddit marketing',
      '  node pull-trends.mjs --rss "https://news.google.com/rss/search?q=founder+led+content"',
      '',
      'Exit codes: 0 ok, 2 usage or network error.',
    ].join('\n'),
  );
  process.exit(2);
}

// Argument parsing.
const argv = process.argv.slice(2);
let mode = null;
let target = null;
let limit = 15;
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--hn' || a === '--reddit' || a === '--rss') {
    if (mode) fail('Pick one mode per run.');
    mode = a.slice(2);
    target = argv[++i];
    if (!target) fail(`${a} needs a value.`);
  } else if (a === '--limit') {
    limit = Number(argv[++i]);
    if (!Number.isInteger(limit) || limit < 1) fail('--limit needs a positive integer.');
  } else {
    usage();
  }
}
if (!mode) usage();

// Helpers.
function ageLabel(ts) {
  const mins = Math.max(0, Math.round((Date.now() - ts) / 60000));
  if (mins < 60) return `${mins}m ago`;
  const hours = mins / 60;
  if (hours < 48) return `${Math.round(hours)}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}

function windowLabel(ts) {
  const h = (Date.now() - ts) / 3.6e6;
  if (h < 24) return 'open';
  if (h <= 48) return 'closing';
  return 'stale';
}

function decode(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');
}

function cleanTitle(s) {
  return decode(s).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

async function getText(url, accept) {
  let res;
  try {
    res = await fetch(url, {
      headers: { 'User-Agent': UA, Accept: accept },
      redirect: 'follow',
    });
  } catch (err) {
    fail(
      `Network error fetching ${url}\n` +
        `  ${err.cause?.message || err.message}\n` +
        '  Check your connection (and any proxy or egress policy), then retry.',
    );
  }
  if (!res.ok) {
    fail(`Request to ${url} failed with HTTP ${res.status}. If it persists, the endpoint may be rate limiting or blocking this network.`);
  }
  return res.text();
}

function parseJson(text, url) {
  try {
    return JSON.parse(text);
  } catch {
    fail(`Response from ${url} was not JSON. The endpoint may be blocking automated requests.`);
  }
}

function render(header, items) {
  console.log(header);
  if (items.length === 0) {
    console.log('\nNo items found.');
    return;
  }
  console.log('');
  items.slice(0, limit).forEach((it, i) => {
    const age = it.ts ? ageLabel(it.ts) : 'undated';
    const win = it.ts ? windowLabel(it.ts) : 'unknown';
    const meta = it.meta ? ` (${it.meta})` : '';
    console.log(`${String(i + 1).padStart(2)}. [${age} | window ${win}] ${it.title}${meta}`);
    if (it.link) console.log(`    ${it.link}`);
  });
  console.log('\nWindow guide: open = under 24h, closing = 24 to 48h, stale = past 48h (decline stale candidates).');
}

// Modes.
async function runHn(query) {
  const url = `${HN_BASE}/api/v1/search_by_date?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=30`;
  const data = parseJson(await getText(url, 'application/json'), url);
  const items = (data.hits || []).map((h) => {
    const ts = (h.created_at_i || 0) * 1000;
    const points = h.points || 0;
    const hoursOld = Math.max(0, (Date.now() - ts) / 3.6e6);
    return {
      title: h.title || '(untitled)',
      link: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`,
      ts,
      meta: `${points} points`,
      // Freshness-weighted rank: recent traction beats old totals.
      score: points / Math.pow(hoursOld + 2, 1.5),
    };
  });
  items.sort((a, b) => b.score - a.score);
  render(`Hacker News stories for "${query}" (${items.length} found, ranked by points weighted for freshness)`, items);
}

async function runReddit(subreddit) {
  const sub = subreddit.replace(/^\/?(r\/)?/i, '').replace(/\/+$/, '');
  const url = `${REDDIT_BASE}/r/${sub}/hot.json?limit=30&raw_json=1`;
  const data = parseJson(await getText(url, 'application/json'), url);
  const items = (data?.data?.children || [])
    .map((c) => c.data)
    .filter((p) => p && !p.stickied)
    .map((p) => ({
      title: p.title || '(untitled)',
      link: p.permalink ? `https://www.reddit.com${p.permalink}` : p.url || '',
      ts: (p.created_utc || 0) * 1000,
      meta: `${p.score ?? 0} points, ${p.num_comments ?? 0} comments`,
    }));
  render(`r/${sub} hot posts (${items.length} found, in subreddit hot order)`, items);
}

async function runRss(source) {
  let xml;
  if (/^https?:\/\//i.test(source)) {
    xml = await getText(source, 'application/rss+xml, application/atom+xml, text/xml, */*');
  } else {
    try {
      xml = readFileSync(source, 'utf8');
    } catch (err) {
      fail(`Cannot read feed file ${source}: ${err.message}`);
    }
  }
  const items = parseFeed(xml);
  if (items.length === 0) {
    fail(`No RSS or Atom items found in ${source}. Is this actually a feed?`);
  }
  items.sort((a, b) => (b.ts || 0) - (a.ts || 0));
  render(`Feed items from ${source} (${items.length} found, newest first)`, items);
}

function parseFeed(xml) {
  const blocks = [];
  const re = /<(item|entry)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(xml))) blocks.push(m[2]);
  return blocks.map((b) => {
    const title = cleanTitle(b.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)?.[1] ?? '(untitled)');
    const dateRaw = b.match(/<(?:pubDate|published|updated|dc:date)(?:\s[^>]*)?>([\s\S]*?)<\/(?:pubDate|published|updated|dc:date)>/i)?.[1];
    const ts = dateRaw ? Date.parse(decode(dateRaw).trim()) : NaN;
    let link =
      b.match(/<link\b[^>]*rel="alternate"[^>]*href="([^"]+)"/i)?.[1] ||
      b.match(/<link\b[^>]*href="([^"]+)"/i)?.[1];
    if (!link) {
      const text = b.match(/<link(?:\s[^>]*)?>([\s\S]*?)<\/link>/i)?.[1];
      if (text) link = text.trim();
    }
    return {
      title,
      link: link ? decode(link).trim() : '',
      ts: Number.isFinite(ts) ? ts : 0,
    };
  });
}

try {
  if (mode === 'hn') await runHn(target);
  else if (mode === 'reddit') await runReddit(target);
  else await runRss(target);
} catch (err) {
  fail(`Unexpected error: ${err.message}`);
}
