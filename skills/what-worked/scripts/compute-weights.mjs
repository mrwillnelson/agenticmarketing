#!/usr/bin/env node
// Compute performance weights from a CSV of the user's own posts.
//
// Usage:
//   node compute-weights.mjs posts.csv
//   cat posts.csv | node compute-weights.mjs
//
// Expected header (order free, extra columns ignored, case-insensitive):
//   date, hook, pillar, format, length, impressions, reactions, comments
//
// hook:   confession | number-led | contrarian | story-mid-action | question | announcement
// pillar: the user's pillar names from my-story/pillars.md
// format: text | carousel | video | article
// length: a band (short | medium | long) or a raw word count; counts are
//         banded as short < 80 words, medium 80-200, long > 200.
//
// Method: score each post by impressions when at least 60% of rows have one,
// otherwise by reactions + comments. Every post is expressed as a ratio to
// the user's own MEDIAN for the period, never as an absolute number. Per
// dimension value the weight is a shrunk mean of those ratios (one
// pseudo-observation at 1.0 pulls small samples toward neutral), clamped to
// [0.3, 3.0]. Values with fewer than MIN_SAMPLE posts print "not enough
// data" instead of a weight. Outliers above 1.5x and below 0.5x are listed
// so a human can decide whether a viral one-off is skewing a bucket.

import { readFileSync } from 'node:fs';

const MIN_SAMPLE = 3;        // posts per value before a weight is trusted
const MIN_POSTS = 8;         // below this, refuse to emit weights at all
const OUTLIER_HIGH = 1.5;    // x median
const OUTLIER_LOW = 0.5;     // x median
const WEIGHT_MIN = 0.3;
const WEIGHT_MAX = 3.0;
const RATE_COVERAGE = 0.6;   // share of rows needing impressions to score on them

// ── CSV ─────────────────────────────────────────────────────────────────────

function parseCsv(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((f) => f.trim() !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((f) => f.trim() !== '')) rows.push(row);
  return rows;
}

function toPosts(rows) {
  if (rows.length < 2) return [];
  const header = rows[0].map((h) => h.trim().toLowerCase());
  const col = (name) => header.indexOf(name);
  const idx = {
    date: col('date'), hook: col('hook'), pillar: col('pillar'),
    format: col('format'), length: col('length'),
    impressions: col('impressions'), reactions: col('reactions'), comments: col('comments'),
  };
  return rows.slice(1).map((r) => {
    const get = (i) => (i >= 0 && r[i] != null ? String(r[i]).trim() : '');
    const num = (i) => { const n = Number(get(i).replace(/[,\s]/g, '')); return Number.isFinite(n) ? n : null; };
    return {
      date: get(idx.date), hook: norm(get(idx.hook)), pillar: norm(get(idx.pillar)),
      format: norm(get(idx.format)), length: lengthBand(get(idx.length)),
      impressions: num(idx.impressions), reactions: num(idx.reactions), comments: num(idx.comments),
    };
  });
}

function norm(s) { return s.toLowerCase().replace(/\s+/g, '-'); }

function lengthBand(raw) {
  if (!raw) return '';
  const n = Number(raw.replace(/[,\s]/g, ''));
  if (!Number.isFinite(n)) return norm(raw);
  return n < 80 ? 'short' : n <= 200 ? 'medium' : 'long';
}

// ── Scoring ─────────────────────────────────────────────────────────────────

function median(nums) {
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

export function computeWeights(posts) {
  const withImpr = posts.filter((p) => p.impressions != null && p.impressions > 0);
  const useImpressions = withImpr.length >= posts.length * RATE_COVERAGE;
  const metricOf = useImpressions
    ? (p) => p.impressions
    : (p) => (p.reactions ?? 0) + (p.comments ?? 0);
  const scored = posts
    .map((p) => ({ ...p, metric: metricOf(p) }))
    .filter((p) => Number.isFinite(p.metric) && p.metric > 0);

  if (scored.length < MIN_POSTS) {
    return { error: `Only ${scored.length} scorable posts; need at least ${MIN_POSTS}. Add more posts or rougher numbers before trusting any weights.` };
  }

  const med = median(scored.map((p) => p.metric));
  if (!(med > 0)) return { error: 'Median is zero; check the metric columns.' };
  for (const p of scored) p.ratio = p.metric / med;

  const outliers = {
    high: scored.filter((p) => p.ratio > OUTLIER_HIGH).sort((a, b) => b.ratio - a.ratio),
    low: scored.filter((p) => p.ratio < OUTLIER_LOW).sort((a, b) => a.ratio - b.ratio),
  };

  const dimension = (key) => {
    const groups = new Map();
    for (const p of scored) {
      if (!p[key]) continue;
      if (!groups.has(p[key])) groups.set(p[key], []);
      groups.get(p[key]).push(p);
    }
    const out = [];
    for (const [value, members] of groups) {
      const count = members.length;
      if (count < MIN_SAMPLE) { out.push({ value, count, weight: null }); continue; }
      const sumRatio = members.reduce((s, p) => s + p.ratio, 0);
      let w = (sumRatio + 1) / (count + 1); // shrink toward 1.0
      w = Math.max(WEIGHT_MIN, Math.min(WEIGHT_MAX, w));
      out.push({ value, count, weight: Number(w.toFixed(2)) });
    }
    return out.sort((a, b) => (b.weight ?? 0) - (a.weight ?? 0));
  };

  return {
    posts: scored.length,
    metric: useImpressions ? 'impressions' : 'reactions + comments',
    median: med,
    outliers,
    hooks: dimension('hook'),
    pillars: dimension('pillar'),
    formats: dimension('format'),
    lengths: dimension('length'),
  };
}

// ── Report ──────────────────────────────────────────────────────────────────

function label(p) {
  return [p.date, p.hook, p.pillar, p.format].filter(Boolean).join(' / ') || 'unlabeled post';
}

function renderDimension(name, entries) {
  const lines = [`${name}:`];
  if (!entries.length) { lines.push('  (no labeled posts)'); return lines; }
  for (const e of entries) {
    lines.push(e.weight == null
      ? `  ${e.value.padEnd(18)} not enough data (${e.count} post${e.count === 1 ? '' : 's'}, need ${MIN_SAMPLE})`
      : `  ${e.value.padEnd(18)} ${e.weight}x  (${e.count} posts)`);
  }
  return lines;
}

function main() {
  const file = process.argv[2];
  const text = file ? readFileSync(file, 'utf8') : readFileSync(0, 'utf8');
  const posts = toPosts(parseCsv(text));
  const w = computeWeights(posts);
  if (w.error) { console.error(w.error); process.exit(1); }

  const out = [
    `Posts: ${w.posts}   Metric: ${w.metric}   Median: ${w.median}`,
    '',
    ...renderDimension('Hooks', w.hooks), '',
    ...renderDimension('Pillars', w.pillars), '',
    ...renderDimension('Formats', w.formats), '',
    ...renderDimension('Length bands', w.lengths), '',
    `Outliers above ${OUTLIER_HIGH}x median:`,
    ...(w.outliers.high.length
      ? w.outliers.high.map((p) => `  ${p.ratio.toFixed(1)}x  ${label(p)}`)
      : ['  none']),
    `Outliers below ${OUTLIER_LOW}x median:`,
    ...(w.outliers.low.length
      ? w.outliers.low.map((p) => `  ${p.ratio.toFixed(1)}x  ${label(p)}`)
      : ['  none']),
    '',
    'Weights are ratios to YOUR median, shrunk toward 1.0 for small samples.',
    'A weight only exists at 3+ posts. Re-run without a viral outlier row to see how much it moves the buckets.',
  ];
  console.log(out.join('\n'));
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) main();
