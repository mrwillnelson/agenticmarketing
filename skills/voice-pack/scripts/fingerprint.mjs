#!/usr/bin/env node
// Measures a voice fingerprint from one or more text files.
// Each file is one post (or one transcript). Paragraphs are blank-line separated.
//
// Usage: node fingerprint.mjs post1.txt post2.txt ...
//        node fingerprint.mjs posts/*.txt
//
// Prints, across all files:
//   - word count per file: median, min, max
//   - sentence length distribution in buckets (share of sentences)
//   - median sentence length and range
//   - sentences per paragraph: median and distribution
//   - contraction rate per 100 words
//   - person mix: first singular, first plural, second person (per 100 words)
//   - question rate (share of sentences ending in ?)

import { readFileSync } from 'node:fs';

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('Usage: node fingerprint.mjs <file> [file...]');
  process.exit(1);
}

const CONTRACTION = /\b[a-z]+['’](s|t|re|ve|ll|d|m|em)\b/gi;
const FIRST_SINGULAR = /\b(I|I['’](m|ve|ll|d)|me|my|mine)\b/g;
const FIRST_PLURAL = /\b(we|we['’](re|ve|ll|d)|us|our|ours)\b/gi;
const SECOND = /\b(you|you['’](re|ve|ll|d)|your|yours)\b/gi;

const BUCKETS = [
  { label: '1-5 words', min: 1, max: 5 },
  { label: '6-10 words', min: 6, max: 10 },
  { label: '11-15 words', min: 11, max: 15 },
  { label: '16-20 words', min: 16, max: 20 },
  { label: '21-25 words', min: 21, max: 25 },
  { label: '26+ words', min: 26, max: Infinity },
];

const words = (s) => s.split(/\s+/).filter((w) => /[a-zA-Z0-9]/.test(w));

function splitSentences(text) {
  // Protect common abbreviations and decimals from acting as split points.
  const MARK = '';
  const guarded = text
    .replace(/\b(e\.g|i\.e|vs|etc|Mr|Ms|Mrs|Dr|St|Jr|Sr|Inc|Co|No)\./gi, (m) => m.split('.').join(MARK))
    .replace(/(\d)\.(\d)/g, `$1${MARK}$2`);
  return guarded
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.split(MARK).join('.').trim())
    .filter((s) => words(s).length > 0);
}

const median = (arr) => {
  if (arr.length === 0) return 0;
  const a = [...arr].sort((x, y) => x - y);
  const mid = Math.floor(a.length / 2);
  return a.length % 2 ? a[mid] : (a[mid - 1] + a[mid]) / 2;
};

const fileWordCounts = [];
const sentenceLengths = [];
const sentencesPerParagraph = [];
let totalWords = 0;
let totalSentences = 0;
let questions = 0;
let contractions = 0;
let firstSingular = 0;
let firstPlural = 0;
let second = 0;

for (const file of files) {
  let text;
  try {
    text = readFileSync(file, 'utf8');
  } catch (e) {
    console.error(`Cannot read ${file}: ${e.message}`);
    process.exit(1);
  }
  const w = words(text);
  fileWordCounts.push(w.length);
  totalWords += w.length;
  contractions += (text.match(CONTRACTION) || []).length;
  firstSingular += (text.match(FIRST_SINGULAR) || []).length;
  firstPlural += (text.match(FIRST_PLURAL) || []).length;
  second += (text.match(SECOND) || []).length;

  const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  for (const p of paragraphs) {
    const sents = splitSentences(p);
    if (sents.length === 0) continue;
    sentencesPerParagraph.push(sents.length);
    for (const s of sents) {
      sentenceLengths.push(words(s).length);
      totalSentences++;
      if (s.endsWith('?')) questions++;
    }
  }
}

const per100 = (n) => (totalWords ? (n / totalWords) * 100 : 0);
const pct = (n, d) => (d ? ((n / d) * 100).toFixed(0) + '%' : 'n/a');
const fmt = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

console.log(`Files measured: ${files.length}`);
console.log(`Total words: ${totalWords}, total sentences: ${totalSentences}`);
console.log('');
console.log('Post length (words per file)');
console.log(`  median ${fmt(median(fileWordCounts))}, min ${Math.min(...fileWordCounts)}, max ${Math.max(...fileWordCounts)}`);
console.log('');
console.log('Sentence length distribution');
for (const b of BUCKETS) {
  const count = sentenceLengths.filter((l) => l >= b.min && l <= b.max).length;
  console.log(`  ${b.label.padEnd(12)} ${pct(count, totalSentences).padStart(4)}  (${count})`);
}
console.log(`  median ${fmt(median(sentenceLengths))} words, min ${Math.min(...sentenceLengths)}, max ${Math.max(...sentenceLengths)}`);
console.log('');
console.log('Sentences per paragraph');
const sppCounts = new Map();
for (const n of sentencesPerParagraph) sppCounts.set(n, (sppCounts.get(n) || 0) + 1);
for (const [n, c] of [...sppCounts.entries()].sort((a, b) => a[0] - b[0])) {
  console.log(`  ${String(n).padStart(2)} sentence(s): ${pct(c, sentencesPerParagraph.length).padStart(4)}  (${c})`);
}
console.log(`  median ${fmt(median(sentencesPerParagraph))}`);
console.log('');
console.log('Rates per 100 words');
console.log(`  contractions:    ${per100(contractions).toFixed(1)}`);
console.log(`  first singular:  ${per100(firstSingular).toFixed(1)}`);
console.log(`  first plural:    ${per100(firstPlural).toFixed(1)}`);
console.log(`  second person:   ${per100(second).toFixed(1)}`);
console.log('');
console.log(`Questions: ${pct(questions, totalSentences)} of sentences (${questions})`);
