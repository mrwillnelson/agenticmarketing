#!/usr/bin/env node
// Pull comment candidates from public, scriptable listening sources.
// Zero dependencies. Public JSON and RSS endpoints only; never scrapes
// LinkedIn or X (those have no good public API; the user pastes them).
//
// Usage:
//   node pull-sources.mjs [--reddit SUB]... [--hn "query"]... [--bluesky "query"]... [--rss <url-or-local-path>]... [--limit N]
//
// Examples:
//   node pull-sources.mjs --reddit marketing --limit 15
//   node pull-sources.mjs --hn "founder content" --bluesky "founder led"
//   node pull-sources.mjs --rss "https://news.google.com/rss/search?q=%22founder-led%22&hl=en-US&gl=US&ceid=US:en"
//   node pull-sources.mjs --rss ./fixtures/feed.xml   (local path, for testing)
//
// Output: one normalized block per item: [source] age | engagement | author,
// then title or text snippet, then url. Exit 0 on success, 2 on usage error
// or when any source fails to pull.

const UA = 'agenticmarketing-pull-sources/1.0 (github.com/mrwillnelson/agenticmarketing)';
const TIMEOUT_MS = 15000;

function usage(msg) {
  if (msg) console.error(`Error: ${msg}\n`);
  console.error(
    'Usage: node pull-sources.mjs [--reddit SUB] [--hn "query"] [--bluesky "query"] [--rss <url-or-local-path>] [--limit N]\n' +
      '  --reddit SUB     hot posts from reddit.com/r/SUB (public JSON)\n' +
      '  --hn "query"     newest matching stories via HN Algolia search_by_date\n' +
      '  --bluesky "q"    post search via the public Bluesky API\n' +
      '  --rss <src>      RSS or Atom feed by URL, or a local file path\n' +
      '  --limit N        max items per source (default 20)\n' +
      'Flags repeat: --reddit marketing --reddit SaaS pulls both.\n' +
      'LinkedIn and X are not pulled here; paste or export what you saw there.'
  );
  process.exit(2);
}

function parseArgs(argv) {
  const jobs = [];
  let limit = 20;
  for (let i = 0; i < argv.length; i++) {
    const flag = argv[i];
    const val = argv[i + 1];
    switch (flag) {
      case '--reddit':
      case '--hn':
      case '--bluesky':
      case '--rss':
        if (!val || val.startsWith('--')) usage(`${flag} needs a value`);
        jobs.push({ mode: flag.slice(2), value: val });
        i++;
        break;
      case '--limit':
        limit = Number(val);
        if (!Number.isInteger(limit) || limit < 1) usage('--limit needs a positive integer');
        i++;
        break;
      case '--help':
      case '-h':
        usage();
        break;
      default:
        usage(`unknown flag: ${flag}`);
    }
  }
  if (jobs.length === 0) usage('no sources given');
  return { jobs, limit };
}

async function fetchUrl(url, accept) {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, Accept: accept },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} from ${new URL(url).host}`);
  return res;
}

const fetchJson = async (url) => (await fetchUrl(url, 'application/json')).json();
const fetchText = async (url) => (await fetchUrl(url, 'application/rss+xml, application/atom+xml, text/xml, */*')).text();

function age(ms) {
  if (!ms || Number.isNaN(ms)) return 'age unknown';
  const mins = Math.max(0, Math.round((Date.now() - ms) / 60000));
  if (mins < 60) return `${mins}m ago`;
  if (mins < 48 * 60) return `${Math.round(mins / 60)}h ago`;
  return `${Math.round(mins / 1440)}d ago`;
}

function snippet(text, max = 160) {
  const flat = String(text || '').replace(/\s+/g, ' ').trim();
  return flat.length > max ? flat.slice(0, max - 3) + '...' : flat;
}

function decodeEntities(s) {
  return String(s)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

async function pullReddit(sub, limit) {
  const data = await fetchJson(`https://www.reddit.com/r/${encodeURIComponent(sub)}/hot.json?limit=${limit + 5}&raw_json=1`);
  return (data?.data?.children || [])
    .map((c) => c.data)
    .filter((p) => p && !p.stickied)
    .slice(0, limit)
    .map((p) => ({
      source: `reddit r/${p.subreddit}`,
      title: p.title,
      author: `u/${p.author}`,
      ageMs: p.created_utc * 1000,
      url: `https://www.reddit.com${p.permalink}`,
      engagement: `${p.score} points, ${p.num_comments} comments`,
    }));
}

async function pullHN(query, limit) {
  const data = await fetchJson(
    `https://hn.algolia.com/api/v1/search_by_date?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=${limit}`
  );
  return (data?.hits || []).slice(0, limit).map((h) => ({
    source: `hn "${query}"`,
    title: h.title || snippet(h.story_text),
    author: h.author,
    ageMs: Date.parse(h.created_at),
    url: `https://news.ycombinator.com/item?id=${h.objectID}`,
    engagement: `${h.points ?? 0} points, ${h.num_comments ?? 0} comments`,
  }));
}

async function pullBluesky(query, limit) {
  const data = await fetchJson(
    `https://public.api.bsky.app/xrpc/app.bsky.feed.searchPosts?q=${encodeURIComponent(query)}&limit=${Math.min(limit, 100)}`
  );
  return (data?.posts || []).slice(0, limit).map((p) => {
    const rkey = String(p.uri || '').split('/').pop();
    return {
      source: `bluesky "${query}"`,
      title: snippet(p.record?.text),
      author: `@${p.author?.handle || 'unknown'}`,
      ageMs: Date.parse(p.record?.createdAt || p.indexedAt),
      url: `https://bsky.app/profile/${p.author?.handle}/post/${rkey}`,
      engagement: `${p.likeCount ?? 0} likes, ${p.replyCount ?? 0} replies, ${p.repostCount ?? 0} reposts`,
    };
  });
}

async function pullRss(src, limit) {
  let xml;
  if (/^https?:\/\//i.test(src)) {
    xml = await fetchText(src);
  } else {
    const { readFileSync } = await import('node:fs');
    xml = readFileSync(src, 'utf8');
  }
  const feedTitle = decodeEntities(
    xml.match(/<(?:channel|feed)[^>]*>[\s\S]*?<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || src
  ).trim();
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>|<entry[\s>][\s\S]*?<\/entry>/gi) || [];
  return blocks.slice(0, limit).map((b) => {
    const title = decodeEntities(b.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '(no title)').trim();
    const link =
      b.match(/<link[^>]*href="([^"]+)"/i)?.[1] ||
      decodeEntities(b.match(/<link[^>]*>([\s\S]*?)<\/link>/i)?.[1] || '').trim();
    const dateStr =
      b.match(/<(?:pubDate|published|updated|dc:date)[^>]*>([\s\S]*?)<\/(?:pubDate|published|updated|dc:date)>/i)?.[1] || '';
    const author = decodeEntities(
      b.match(/<(?:dc:creator|author)[^>]*>(?:\s*<name[^>]*>)?([\s\S]*?)(?:<\/name>\s*)?<\/(?:dc:creator|author)>/i)?.[1] || ''
    ).trim();
    return {
      source: `rss ${snippet(feedTitle, 40)}`,
      title,
      author: author || 'unknown',
      ageMs: Date.parse(dateStr.trim()),
      url: link,
      engagement: 'n/a',
    };
  });
}

const PULLERS = { reddit: pullReddit, hn: pullHN, bluesky: pullBluesky, rss: pullRss };

const { jobs, limit } = parseArgs(process.argv.slice(2));
let failures = 0;
let total = 0;

for (const job of jobs) {
  let items;
  try {
    items = await PULLERS[job.mode](job.value, limit);
  } catch (err) {
    failures++;
    const chain = [];
    for (let e = err; e && chain.length < 4; e = e.cause) if (e.message) chain.push(e.message);
    const reason = chain.join(' <- ') || String(err);
    console.error(`PULL FAILED ${job.mode} ${job.value}: ${reason}`);
    console.error('  Check the network, the value, or pull this source manually.');
    continue;
  }
  for (const it of items) {
    total++;
    console.log(`[${it.source}] ${age(it.ageMs)} | ${it.engagement} | ${it.author}`);
    console.log(`  ${snippet(it.title)}`);
    console.log(`  ${it.url}`);
  }
}

console.log(`\nItems: ${total} from ${jobs.length} source(s)${failures ? `, ${failures} failed` : ''}`);
if (failures > 0) process.exit(2);
