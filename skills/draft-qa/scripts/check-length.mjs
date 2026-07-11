#!/usr/bin/env node
// Gate 4 helper: word count against a target range.
//
// Usage:
//   node check-length.mjs <file> --min 120 --max 250
//   node check-length.mjs <file> --platform linkedin
//   cat draft.txt | node check-length.mjs --platform newsletter
//
// Pass --min/--max from the user's measured range in my-story/voice-model.md.
// Pass --platform for the default band when the pack is empty.
// Markdown heading lines are excluded from the count, matching how a
// published body drops its working title.
//
// Exit code 0 = inside the range, 1 = outside, 2 = usage error.

import { readFileSync } from 'node:fs';

const PLATFORM_BANDS = {
  linkedin: { min: 80, max: 300 },
  newsletter: { min: 300, max: 1500 },
  'short-video': { min: 40, max: 220 },
  x: { min: 15, max: 60 },
};

const args = process.argv.slice(2);
const files = [];
let min = null;
let max = null;
let platform = null;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--min') min = Number(args[++i]);
  else if (args[i] === '--max') max = Number(args[++i]);
  else if (args[i] === '--platform') platform = String(args[++i]).toLowerCase();
  else files.push(args[i]);
}

if (platform) {
  const band = PLATFORM_BANDS[platform];
  if (!band) {
    console.error(`Unknown platform "${platform}". Known: ${Object.keys(PLATFORM_BANDS).join(', ')}`);
    process.exit(2);
  }
  if (min === null) min = band.min;
  if (max === null) max = band.max;
}

if (min === null || max === null || Number.isNaN(min) || Number.isNaN(max)) {
  console.error('Provide --min and --max (from voice-model.md) or --platform for the default band.');
  process.exit(2);
}

const raw = files.length
  ? files.map((f) => readFileSync(f, 'utf8')).join('\n')
  : readFileSync(0, 'utf8');

// Drop markdown heading lines; count the body the reader actually sees.
const body = raw
  .split('\n')
  .filter((line) => !/^#{1,6}\s/.test(line))
  .join('\n')
  .trim();

const words = (body.match(/\S+/g) || []).length;
const inside = words >= min && words <= max;

console.log(`${inside ? 'PASS' : 'FAIL'}: ${words} words (target ${min} to ${max})`);
if (!inside) {
  console.log(words < min
    ? `Short by ${min - words} words. Deepen the strongest beat; do not pad.`
    : `Over by ${words - max} words. Cut duplicate beats and setup lines; do not compress every sentence.`);
}
process.exit(inside ? 0 : 1);
