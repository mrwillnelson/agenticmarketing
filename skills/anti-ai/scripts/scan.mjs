#!/usr/bin/env node
// Deterministic scanner for AI writing tells. No dependencies.
//
// Usage:
//   node scan.mjs <file> [--exemptions <path/to/my-story/anti-patterns.md>]
//   cat draft.md | node scan.mjs [--exemptions ...]
//
// Severities:
//   ban  - rewrite required; any ban fails the scan
//   warn - judgment call; reported, never fails the scan
//   note - a detection downgraded by a pack exemption; reported for visibility
//
// Exit codes: 0 = no bans, 1 = bans found, 2 = usage or file error.
//
// Markdown handling: fenced code blocks, inline `code spans`, and heading
// lines are excluded from the scan, so pattern catalogs and quoted bad
// examples can cite tells verbatim without tripping the gate.

import { readFileSync } from 'node:fs';

// ── CLI ──────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
let file = null;
let exemptionsPath = null;
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--exemptions') {
    exemptionsPath = args[++i];
    if (!exemptionsPath) usage(2);
  } else if (a === '--help' || a === '-h') {
    usage(0);
  } else if (!file) {
    file = a;
  } else {
    usage(2);
  }
}

function usage(code) {
  const out = code === 0 ? console.log : console.error;
  out('Usage: node scan.mjs <file|-> [--exemptions <path/to/my-story/anti-patterns.md>]');
  out('Reads stdin when <file> is "-" or omitted.');
  process.exit(code);
}

let raw;
try {
  raw = !file || file === '-' ? readFileSync(0, 'utf8') : readFileSync(file, 'utf8');
} catch (err) {
  console.error(`scan: cannot read ${file || 'stdin'}: ${err.message}`);
  process.exit(2);
}

// ── Exemptions ───────────────────────────────────────────────────────────────
// my-story/anti-patterns.md can exempt patterns that are authentic to the
// user's voice. A flag counts as set when it appears anywhere in the file
// (optionally as "allowColons: true"); "allowColons: false" disables it.

const EXEMPT_FLAGS = ['allowColons', 'allowStaccato', 'allowEngagementBait', 'allowEmDash'];
const exemptions = {};
if (exemptionsPath) {
  let packText;
  try {
    packText = readFileSync(exemptionsPath, 'utf8');
  } catch (err) {
    console.error(`scan: cannot read exemptions file ${exemptionsPath}: ${err.message}`);
    process.exit(2);
  }
  for (const flag of EXEMPT_FLAGS) {
    const m = packText.match(new RegExp(`\\b${flag}\\b(?:\\s*[:=]\\s*(true|false|yes|no))?`, 'i'));
    if (m) exemptions[flag] = !m[1] || /^(true|yes)$/i.test(m[1]);
  }
}

// ── Text preparation ─────────────────────────────────────────────────────────
// Normalize curly quotes, blank out code fences / inline code / headings.
// Line count is preserved so reported line numbers match the input file.

function prepare(text) {
  const normalized = text
    .replace(/\r\n/g, '\n')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"');
  let inFence = false;
  let inFrontmatter = false;
  return normalized
    .split('\n')
    .map((line, i) => {
      if (i === 0 && line.trim() === '---') { inFrontmatter = true; return ''; }
      if (inFrontmatter) {
        if (line.trim() === '---') inFrontmatter = false;
        return '';
      }
      if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; return ''; }
      if (inFence) return '';
      if (/^#{1,6}\s/.test(line)) return '';
      return line.replace(/`[^`\n]*`/g, '');
    })
    .join('\n');
}

const LIST_LINE = /^\s*(?:[-*+>|]|\d+[.)]\s)/;

const body = prepare(raw);
const lowerBody = body.toLowerCase();
const wordCount = (body.match(/\S+/g) || []).length;

function lineNumberAt(index) {
  return body.slice(0, index).split('\n').length;
}

const flags = [];
function addFlag(check, match, index) {
  let { severity, fix } = check;
  if (check.flag && exemptions[check.flag]) {
    severity = 'note';
    fix = `Exempted by your pack (${check.flag}). Reported for visibility only.`;
  }
  flags.push({ severity, label: check.label, match: String(match).trim().slice(0, 70), line: lineNumberAt(index), fix });
}

function runRegex(check) {
  const regex = check.regex;
  regex.lastIndex = 0;
  let m;
  while ((m = regex.exec(body)) !== null) {
    addFlag(check, m[0], m.index);
    if (m.index === regex.lastIndex) regex.lastIndex++;
  }
}

// ── PATTERN DEFINITIONS ──────────────────────────────────────────────────────
// (The em dash character below is a regex target, not prose.)

// 1. Banned phrases: literal, case-insensitive. All bans.
const BANNED_PHRASES = [
  ["here's the thing", 'Cut the wind-up and open with the point itself.'],
  ['here is the thing', 'Cut the wind-up and open with the point itself.'],
  ["here's the problem", 'Cut the wind-up and state the problem directly.'],
  ["here's the truth", 'Cut the wind-up. If it is true, say it.'],
  ['the reality is', 'Delete the preamble; the sentence after it is the sentence.'],
  ['at the end of the day', 'Cut the filler phrase.'],
  ['simply put', 'Cut it and write the plain version directly.'],
  ['put simply', 'Cut it and write the plain version directly.'],
  ['let that sink in', 'Cut it. A line that lands does not need instructions.'],
  ["in today's fast-paced world", 'Cut the essay opener; start with a specific observation.'],
  ["in today's world", 'Cut the essay opener; start with a specific observation.'],
  ['in an era where', 'Cut the essay opener; start with a specific observation.'],
  ['in a world where', 'Cut the essay opener; start with a specific observation.'],
  ['most founders', 'Replace the generic crowd with a specific person, moment, or number.'],
  ['many leaders', 'Replace the generic crowd with a specific person, moment, or number.'],
  ['everyone knows', 'Either it is obvious (cut it) or it is a claim (own it).'],
  ['unpopular opinion:', 'State the opinion without the label.'],
  ['hot take:', 'State the take without the label.'],
  ['excited to announce', 'Say what shipped and why the reader should care.'],
  ['the future belongs to', 'Vague prophecy. State a concrete consequence instead.'],
  ['this is just the beginning', 'Say what actually happens next.'],
  ['what separates the best', 'Name the behavior and drop the ranking frame.'],
  ["let's dive in", 'Cut the transition; start the content.'],
];

for (const [phrase, fix] of BANNED_PHRASES) {
  const check = { severity: 'ban', label: 'Banned phrase', fix };
  let from = 0;
  let idx;
  while ((idx = lowerBody.indexOf(phrase, from)) !== -1) {
    addFlag(check, body.slice(idx, idx + phrase.length), idx);
    from = idx + phrase.length;
  }
}

// 2. Banned words (word-boundary). Bans.
const BANNED_WORDS = [
  { regex: /\bdelv(?:e|es|ed|ing)\b/gi, fix: 'The signature AI verb. Use "dig into", "look at", or name the action.' },
  { regex: /\bgame-?chang(?:er|ers|ing)\b/gi, fix: 'Inflated significance. Say what specifically changed.' },
];
for (const w of BANNED_WORDS) {
  runRegex({ severity: 'ban', label: 'Banned word', regex: w.regex, fix: w.fix });
}

// 3. Structural patterns.
const STRUCTURAL = [
  { severity: 'ban', label: 'Em dash', flag: 'allowEmDash',
    regex: /—/g,
    fix: 'Use a comma, a period, a parenthesis, or rewrite the sentence.' },
  { severity: 'ban', label: '"X isn\'t Y. It\'s Z." toggle',
    regex: /\b(?:\w+n't|not)\s+(?:about\s|just\s|only\s)?[^.!?\n]{1,60}[.!?]\s+(?:it's|it is|that's|this is)\s/gi,
    fix: 'A fake reveal. Make the point once, in one sentence.' },
  { severity: 'ban', label: '"It\'s not just X, it\'s Y" toggle',
    regex: /\b(?:it|this|that)(?:'s|\s+is)\s+not\s+(?:just\s|only\s|about\s)?[^,.!?\n]{1,60},\s+(?:it|this|that)(?:'s|\s+is)\b/gi,
    fix: 'A fake escalation. State the bigger claim directly and support it.' },
  { severity: 'ban', label: '"Not X. But Y." toggle',
    regex: /\bnot\s+[^.!?\n]{1,50}[.!?]\s+but\s/gi,
    fix: 'Negative contrast structure. Say what is true, once.' },
  { severity: 'ban', label: '"Not X, not Y, not Z" stack',
    regex: /\bnot\s+[^,\n]{1,30},\s+not\s+[^,\n]{1,30},\s+not\s/gi,
    fix: 'Triple-negative stack. Cut to the one thing that is true.' },
  { severity: 'ban', label: '"Not X. Not Y. Just Z." stack',
    regex: /\bnot\s+[^.!?\n]{1,40}[.!?]\s+not\s+[^.!?\n]{1,40}[.!?]\s+(?:just|only)\b/gi,
    fix: 'Denial stack with a reveal. Lead with the reveal and give evidence.' },
  { severity: 'ban', label: '"You don\'t X. You Y." toggle',
    regex: /\byou don't\s+[^.!?\n]{1,60}[.!?]\s+you\s/gi,
    fix: 'A fake reveal. Make the point once.' },
  { severity: 'ban', label: '"Didn\'t X. Did Y." toggle',
    regex: /\bdidn't\s+[^.!?\n]{1,60}[.!?]\s+did\s/gi,
    fix: 'A fake reveal. Make the point once.' },
  { severity: 'ban', label: '"I don\'t mean X. I mean Y." toggle',
    regex: /\b(?:i|we)\s+(?:don't|do not|didn't)\s+mean\b[^.!?\n]{1,80}[.!?]\s+(?:i|we)\s+(?:mean|meant)\b/gi,
    fix: 'Say the meant thing first and only.' },
  { severity: 'ban', label: 'Repeated-subject toggle',
    regex: /\b(the [\w' ]{2,40}?) is not\b[^.!?\n]{1,70}[.!?]\s+\1 is\b/gi,
    fix: 'Repeating the subject to fake a reveal. One sentence, one claim.' },
  { severity: 'ban', label: 'Vague attribution',
    regex: /\b(?:research shows|studies show|studies suggest|experts say|experts agree|science says|data shows|many believe|industry leaders agree)\b/gi,
    fix: 'Name the source or cut the claim.' },
  { severity: 'ban', label: 'Engagement bait', flag: 'allowEngagementBait',
    regex: /(?:what do you think\?|drop a comment|share this if|tag someone|let me know in the comments|i'd love to hear your thoughts|^agree\?\s*$|^thoughts\?\s*$|^who else\b[^?\n]{0,60}\?\s*$)/gim,
    fix: 'Cut the bait. End on the last real point.' },
  { severity: 'ban', label: 'Significance claim',
    regex: /\bthis\s+(?:represents|marks|underscores|highlights|stands as|speaks to)\b/gi,
    fix: 'Announced importance. Show the consequence instead of labeling it.' },
  { severity: 'warn', label: 'Trailing -ing analysis clause',
    regex: /,\s+(?:highlighting|showcasing|underscoring|reinforcing|enabling|demonstrating|signaling|cementing|solidifying|ensuring|reflecting|positioning)\b/gi,
    fix: 'Trailing narration. End the sentence at the fact.' },
  { severity: 'warn', label: 'Inflated verb',
    regex: /\b(?:serves as|acts as|functions as|stands as|boasts)\b/gi,
    fix: 'Use the plain verb: is, has, does.' },
  { severity: 'warn', label: 'Rule-of-three flourish',
    regex: /\b[a-z][a-z-]{3,}, [a-z][a-z-]{3,},? and [a-z][a-z-]{3,}[.!?]/g,
    fix: 'Three abstract items closing a sentence read as AI cadence. Keep the one that matters, or make each concrete.' },
];

for (const check of STRUCTURAL) runRegex(check);

// 4. Colon pivot: a mid-sentence colon used as a reveal. Skips URLs,
// timestamps, ratios, list items, tables, blockquotes, and single-word
// line-initial labels ("Bad:", "Usage:"), which are markdown convention
// rather than a reveal pivot.
{
  const check = { severity: 'warn', label: 'Colon pivot', flag: 'allowColons',
    fix: 'Colon tee-up. Keep colons for URLs, timestamps, and ratios; otherwise rewrite as one sentence.' };
  const lines = body.split('\n');
  let offset = 0;
  for (const line of lines) {
    if (!LIST_LINE.test(line)) {
      const labelEnd = (line.match(/^\s*[A-Za-z][\w'-]*:\s/) || [''])[0].length;
      const regex = /(?<!https?)(?<!\d):\s/g;
      let m;
      while ((m = regex.exec(line)) !== null) {
        if (m.index < labelEnd) continue;
        const start = Math.max(0, m.index - 30);
        addFlag(check, line.slice(start, m.index + 20), offset + m.index);
      }
    }
    offset += line.length + 1;
  }
}

// 5. AI vocabulary (word-boundary). Warns: may be a verbatim quote.
const AI_VOCAB = [
  'tapestry', 'intricate', 'pivotal', 'crucial', 'cornerstone', 'robust',
  'holistic', 'seamless', 'testament', 'landscape', 'paradigm', 'synergy',
  'cutting-edge', 'revolutionary', 'transformative', 'world-class',
  'disruptive', 'groundbreaking', 'unprecedented',
  'unlock(?:s|ed|ing)?', 'leverag(?:e|es|ed|ing)', 'optimiz(?:e|es|ed|ing)',
  'underscor(?:e|es|ed|ing)', 'showcas(?:e|es|ed|ing)', 'elevat(?:e|es|ed|ing)',
  'empower(?:s|ed|ing)?', 'supercharg(?:e|es|ed|ing)',
];
for (const stem of AI_VOCAB) {
  runRegex({ severity: 'warn', label: 'AI vocabulary',
    regex: new RegExp(`\\b${stem}\\b`, 'gi'),
    fix: 'AI-default vocabulary. Swap for the plain word, or keep only if it is a verbatim quote.' });
}

// 6 and 7. Rhythm checks over prose sentences. Markdown list items are
// excluded: a bulleted checklist is not prose rhythm. Sentences with no
// letters (leftovers from stripped code spans) reset the run.
const proseSentences = body
  .split('\n')
  .filter((line) => !LIST_LINE.test(line))
  .join('\n')
  .split(/(?<=[.!?])\s+/)
  .map((s) => s.trim())
  .filter(Boolean);

// 6. Staccato: 3+ consecutive sentences of 5 words or fewer.
{
  const check = { severity: 'warn', label: 'Staccato run', flag: 'allowStaccato',
    fix: '3+ very short sentences in a row read as AI rhythm. Mix in a longer reasoning sentence.' };
  let run = 0;
  for (let i = 0; i < proseSentences.length; i++) {
    const s = proseSentences[i];
    const wc = (s.match(/\S+/g) || []).length;
    run = /[a-z]/i.test(s) && wc > 0 && wc <= 5 ? run + 1 : 0;
    if (run === 3) {
      const snippet = proseSentences.slice(i - 2, i + 1).join(' ');
      addFlag(check, snippet, Math.max(0, body.indexOf(proseSentences[i - 2])));
    }
  }
}

// 7. Question stack: 3+ consecutive sentences ending in "?". Ban.
{
  const check = { severity: 'ban', label: 'Stacked rhetorical questions',
    fix: '3+ questions in a row dodge making a point. Answer one, cut the rest.' };
  let run = 0;
  for (let i = 0; i < proseSentences.length; i++) {
    run = proseSentences[i].endsWith('?') ? run + 1 : 0;
    if (run === 3) {
      const snippet = proseSentences.slice(i - 2, i + 1).join(' ');
      addFlag(check, snippet, Math.max(0, body.indexOf(proseSentences[i - 2])));
    }
  }
}

// 8. Hashtag block: any line carrying 2+ hashtags. Warn.
{
  const check = { severity: 'warn', label: 'Hashtag block',
    fix: 'Hashtag blocks read as automation. Cut them.' };
  let offset = 0;
  for (const line of body.split('\n')) {
    const tags = line.match(/(?:^|\s)#[A-Za-z][\w-]*/g) || [];
    if (tags.length >= 2) addFlag(check, line, offset);
    offset += line.length + 1;
  }
}

// 9. Emoji density. Warn.
{
  const check = { severity: 'warn', label: 'Emoji density',
    fix: 'Emoji clusters read as AI decoration. Keep at most one, or none.' };
  const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu;
  const matches = [...body.matchAll(emojiRegex)];
  if (matches.length >= 3 || (matches.length >= 2 && wordCount < 120)) {
    addFlag(check, `${matches.length} emoji in ${wordCount} words`, matches[0].index);
  }
}

// ── Report ───────────────────────────────────────────────────────────────────

flags.sort((a, b) => a.line - b.line);
const counts = { ban: 0, warn: 0, note: 0 };
for (const f of flags) counts[f.severity]++;

const active = EXEMPT_FLAGS.filter((f) => exemptions[f]);
if (active.length) console.log(`exemptions: ${active.join(', ')}`);

for (const f of flags) {
  console.log(`line ${f.line} [${f.severity}] ${f.label}: "${f.match}"`);
  console.log(`  fix: ${f.fix}`);
}

console.log(`summary: ${counts.ban} ban, ${counts.warn} warn, ${counts.note} note (${wordCount} words)`);
if (counts.ban > 0) {
  console.log('FAIL: rewrite every ban line from the source material, then rescan.');
  process.exit(1);
}
console.log(counts.warn > 0
  ? 'PASS: no bans. Review each warn; keep it only on purpose.'
  : 'PASS: clean scan.');
