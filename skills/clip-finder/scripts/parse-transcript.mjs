#!/usr/bin/env node
// Parse a timestamped transcript (SRT, VTT, or plain timestamped lines) into
// normalized JSON segments so no timestamp math happens in prose.
// Usage: node parse-transcript.mjs <transcript-file> [--gap-threshold <seconds>]
// Stdout: JSON array of {start, end, seconds, speaker, text, startSec, endSec}
// Stderr: summary (segment count, total duration, gaps over the threshold)

import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
let file = null;
let gapThreshold = 5;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--gap-threshold') gapThreshold = Number(args[++i]);
  else if (!file) file = args[i];
}
if (!file || Number.isNaN(gapThreshold)) {
  console.error('Usage: node parse-transcript.mjs <transcript-file> [--gap-threshold <seconds>]');
  process.exit(2);
}

const raw = readFileSync(file, 'utf8').replace(/^﻿/, '').replace(/\r\n?/g, '\n');

// ---------- timestamp helpers ----------

const TS = /(?:(\d{1,2}):)?(\d{1,2}):(\d{2})(?:[.,](\d{1,3}))?/;

function toSeconds(match) {
  const [, h, m, s, ms] = match;
  return (h ? Number(h) * 3600 : 0) + Number(m) * 60 + Number(s) + (ms ? Number(ms.padEnd(3, '0')) / 1000 : 0);
}

function fmt(sec) {
  const s = Math.round(sec);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = s % 60;
  const mm = String(m).padStart(2, '0');
  const rr = String(r).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${rr}` : `${mm}:${rr}`;
}

function splitSpeaker(text) {
  const m = text.match(/^([A-Za-z][A-Za-z0-9 .'_-]{0,40}?):\s+(.+)$/s);
  if (m) return { speaker: m[1].trim(), text: m[2].trim() };
  return { speaker: null, text: text.trim() };
}

function cleanCueText(lines) {
  let joined = lines.join(' ').replace(/\s+/g, ' ').trim();
  let speaker = null;
  const v = joined.match(/^<v\s+([^>]+)>\s*(.*)$/);
  if (v) { speaker = v[1].trim(); joined = v[2]; }
  joined = joined.replace(/<[^>]+>/g, '').trim();
  if (speaker) return { speaker, text: joined };
  return splitSpeaker(joined);
}

// ---------- format detection ----------

function detectFormat(text) {
  if (/^WEBVTT/m.test(text)) return 'vtt';
  if (/-->/.test(text)) return 'srt';
  return 'plain';
}

// ---------- parsers ----------

function parseCues(text) {
  // Shared for SRT and VTT: find "start --> end" lines, take text until blank line.
  const lines = text.split('\n');
  const segments = [];
  const arrow = new RegExp(`^\\s*(${TS.source})\\s*-->\\s*(${TS.source})`);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(arrow);
    if (!m) continue;
    const startSec = toSeconds(m[1].match(TS));
    const endSec = toSeconds(m[6].match(TS));
    const textLines = [];
    for (let j = i + 1; j < lines.length && lines[j].trim() !== ''; j++) {
      textLines.push(lines[j]);
      i = j;
    }
    const { speaker, text: cueText } = cleanCueText(textLines);
    if (cueText) segments.push({ startSec, endSec, speaker, text: cueText });
  }
  return segments;
}

function parsePlain(text) {
  // Lines like "[MM:SS] Speaker: text", "HH:MM:SS text", "(01:23) text".
  // Lines without a timestamp continue the previous segment.
  const linePattern = new RegExp(`^\\s*[\\[(]?\\s*(${TS.source})\\s*[\\])]?\\s*[-:]?\\s+(.*)$`);
  const segments = [];
  for (const line of text.split('\n')) {
    if (!line.trim()) continue;
    const m = line.match(linePattern);
    if (m) {
      const startSec = toSeconds(m[1].match(TS));
      const { speaker, text: rest } = splitSpeaker(m[6]);
      segments.push({ startSec, endSec: null, speaker, text: rest });
    } else if (segments.length > 0) {
      segments[segments.length - 1].text += ' ' + line.trim();
    }
  }
  // No explicit end times: each segment ends where the next begins.
  for (let i = 0; i < segments.length; i++) {
    segments[i].endSec = i + 1 < segments.length ? segments[i + 1].startSec : segments[i].startSec;
  }
  return segments;
}

// ---------- run ----------

const format = detectFormat(raw);
const segments = format === 'plain' ? parsePlain(raw) : parseCues(raw);

if (segments.length === 0) {
  console.error(`No segments parsed from ${file} (detected format: ${format}).`);
  process.exit(1);
}

const out = segments.map((s) => ({
  start: fmt(s.startSec),
  end: fmt(s.endSec),
  seconds: Math.round((s.endSec - s.startSec) * 10) / 10,
  speaker: s.speaker,
  text: s.text,
  startSec: Math.round(s.startSec * 10) / 10,
  endSec: Math.round(s.endSec * 10) / 10,
}));

console.log(JSON.stringify(out, null, 2));

// Summary to stderr so stdout stays pipeable JSON.
const total = segments[segments.length - 1].endSec;
const speakers = [...new Set(out.map((s) => s.speaker).filter(Boolean))];
console.error(`Format: ${format}`);
console.error(`Segments: ${out.length}`);
console.error(`Total duration: ${fmt(total)} (${Math.round(total)}s)`);
if (speakers.length) console.error(`Speakers: ${speakers.join(', ')}`);

let gapCount = 0;
let disorder = 0;
for (let i = 1; i < segments.length; i++) {
  const gap = segments[i].startSec - segments[i - 1].endSec;
  if (gap >= gapThreshold) {
    gapCount++;
    console.error(`Gap: ${fmt(segments[i - 1].endSec)} to ${fmt(segments[i].startSec)} (${Math.round(gap)}s of silence or missing transcript)`);
  }
  if (segments[i].startSec < segments[i - 1].startSec) disorder++;
}
if (format === 'plain') {
  // Derived ends make explicit gaps impossible; flag suspiciously long segments instead.
  for (const s of out) {
    if (s.seconds >= 120) {
      gapCount++;
      console.error(`Gap?: segment at ${s.start} runs ${Math.round(s.seconds)}s to the next timestamp; likely missing transcript.`);
    }
  }
}
if (gapCount === 0) console.error(`Gaps over ${gapThreshold}s: none`);
if (disorder > 0) console.error(`Warning: ${disorder} segment(s) out of chronological order; check the source file.`);
if (format === 'plain') console.error('Note: plain format has no explicit end times; each end is the next segment start.');
