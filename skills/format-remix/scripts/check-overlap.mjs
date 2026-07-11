#!/usr/bin/env node
// Diff gate for format-remix: proves a remix borrowed structure, not wording.
// Usage: node check-overlap.mjs <original-file> <remix-file>
//
// Fails (exit 1) when:
//   1. Any phrase of 4 or more consecutive words appears in both texts.
//   2. The two hooks (first non-empty line of each text) share any content word.
// Passes (exit 0) otherwise. Standing alone for a cold reader is a human read,
// not a script; this only proves the wording is clean.

import { readFileSync } from 'node:fs';

const [, , originalPath, remixPath] = process.argv;
if (!originalPath || !remixPath) {
  console.error('Usage: node check-overlap.mjs <original-file> <remix-file>');
  process.exit(2);
}

const original = readFileSync(originalPath, 'utf8');
const remix = readFileSync(remixPath, 'utf8');

const STOPWORDS = new Set(
  ('a an and are as at be but by did do done for from had has have he her his i in is it its me my no not of on ' +
   'or our she so than that the their them then they this to us was we were what when with you your').split(' ')
);

const words = (text) =>
  text.toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9'\s]/g, ' ').split(/\s+/).filter(Boolean);

// 1. Shared runs of 4+ consecutive words. Report each maximal run once.
const N = 4;
const origWords = words(original);
const remixWords = words(remix);
const origGrams = new Set();
for (let i = 0; i + N <= origWords.length; i++) origGrams.add(origWords.slice(i, i + N).join(' '));

const sharedRuns = [];
let i = 0;
while (i + N <= remixWords.length) {
  if (origGrams.has(remixWords.slice(i, i + N).join(' '))) {
    let end = i + N;
    while (end < remixWords.length && origGrams.has(remixWords.slice(end - N + 1, end + 1).join(' '))) end++;
    sharedRuns.push(remixWords.slice(i, end).join(' '));
    i = end;
  } else i++;
}

// 2. Hook content-word overlap. Hook = first non-empty line.
const hookLine = (text) => text.split('\n').map((l) => l.trim()).find(Boolean) || '';
const hookContent = (text) => new Set(words(hookLine(text)).filter((w) => !STOPWORDS.has(w)));
const origHook = hookContent(original);
const sharedHookWords = [...hookContent(remix)].filter((w) => origHook.has(w));

let failed = false;
if (sharedRuns.length) {
  failed = true;
  console.error(`FAIL: ${sharedRuns.length} shared phrase(s) of ${N}+ consecutive words:`);
  for (const run of [...new Set(sharedRuns)]) console.error(`  "${run}"`);
}
if (sharedHookWords.length) {
  failed = true;
  console.error(`FAIL: hooks share content word(s): ${sharedHookWords.join(', ')}`);
}

if (failed) {
  console.error('\nThe remix copied wording. Rewrite the flagged beats from the skeleton, not the source.');
  process.exit(1);
}
console.log('OK: no shared phrase of 4+ words; hook wording fully different.');
console.log('Still read the remix cold: it must stand alone for a reader who never saw the original.');
