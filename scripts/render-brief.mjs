#!/usr/bin/env node
// Render a one-recording-everything content set (markdown, per
// skills/one-recording-everything/references/output-template.md) into one
// self-contained HTML file: inline CSS, no external assets, no JavaScript.
//
// Usage:
//   node scripts/render-brief.mjs <content-set.md> [-o out.html] [--stdout]
//
// Default output: same path as the input with the extension replaced by .html.
// --stdout prints the HTML to stdout instead of writing a file.
//
// Supported markdown subset (anything else renders as a plain paragraph):
//   - headings: # through ###### at line start
//   - pipe tables: header row, |---| separator row, body rows
//   - blockquotes: consecutive lines starting with ">"
//   - unordered lists: consecutive lines starting with "- "
//   - fenced code blocks: ``` ... ```
//   - horizontal rules: a line of --- (outside tables)
//   - paragraphs: consecutive non-blank lines joined with a space
//   - inline: **bold**, *italic*, `code`, and bare timestamps like 14:22 or
//     1:02:03, which get the mono timestamp style
// Not supported: links, images, nested lists, ordered lists, raw HTML
// (angle brackets are escaped, so raw HTML shows as text).

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const args = process.argv.slice(2);
let input = null;
let output = null;
let toStdout = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '-o') output = args[++i];
  else if (args[i] === '--stdout') toStdout = true;
  else if (!input) input = args[i];
}
if (!input) {
  console.error('Usage: node scripts/render-brief.mjs <content-set.md> [-o out.html] [--stdout]');
  process.exit(2);
}
if (!existsSync(input)) {
  console.error(`Input not found: ${input}`);
  process.exit(2);
}

const src = readFileSync(input, 'utf8').replace(/\r\n?/g, '\n');

// ---------- inline rendering ----------

const esc = (s) => s
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

function inline(s) {
  let out = esc(s);
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\*([^*\s][^*]*)\*/g, '<em>$1</em>');
  out = out.replace(/\b(\d{1,2}:\d{2}(?::\d{2})?)\b/g, '<span class="ts">$1</span>');
  return out;
}

const stripInline = (s) => s.replace(/[`*]/g, '');

// ---------- block parsing ----------

const lines = src.split('\n');
const body = [];
let title = null;
let para = [];

const flushPara = () => {
  if (para.length) {
    body.push(`<p>${inline(para.join(' '))}</p>`);
    para = [];
  }
};

const isTableLine = (l) => /^\s*\|.*\|\s*$/.test(l);
const isSeparatorRow = (l) => /^\s*\|?\s*:?-{3,}[-\s:|]*\|?\s*$/.test(l) && l.includes('-');
const cells = (l) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (/^```/.test(line)) {
    flushPara();
    const code = [];
    i++;
    while (i < lines.length && !/^```/.test(lines[i])) code.push(lines[i++]);
    body.push(`<pre><code>${esc(code.join('\n'))}</code></pre>`);
    continue;
  }

  const h = line.match(/^(#{1,6})\s+(.+?)\s*$/);
  if (h) {
    flushPara();
    const level = h[1].length;
    if (level === 1 && !title) title = stripInline(h[2]);
    body.push(`<h${level}>${inline(h[2])}</h${level}>`);
    continue;
  }

  if (isTableLine(line)) {
    flushPara();
    const rows = [];
    while (i < lines.length && isTableLine(lines[i])) rows.push(lines[i++]);
    i--;
    let html = '<table>';
    let start = 0;
    if (rows.length > 1 && isSeparatorRow(rows[1])) {
      html += `<thead><tr>${cells(rows[0]).map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead>`;
      start = 2;
    }
    html += '<tbody>';
    for (let r = start; r < rows.length; r++) {
      if (isSeparatorRow(rows[r])) continue;
      html += `<tr>${cells(rows[r]).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`;
    }
    html += '</tbody></table>';
    body.push(html);
    continue;
  }

  if (/^>\s?/.test(line)) {
    flushPara();
    const quote = [];
    while (i < lines.length && /^>\s?/.test(lines[i])) quote.push(lines[i++].replace(/^>\s?/, ''));
    i--;
    body.push(`<blockquote><p>${inline(quote.join(' '))}</p></blockquote>`);
    continue;
  }

  if (/^-\s+/.test(line)) {
    flushPara();
    const items = [];
    while (i < lines.length && /^-\s+/.test(lines[i])) items.push(lines[i++].replace(/^-\s+/, ''));
    i--;
    body.push(`<ul>${items.map((it) => `<li>${inline(it)}</li>`).join('')}</ul>`);
    continue;
  }

  if (/^-{3,}\s*$/.test(line)) {
    flushPara();
    body.push('<hr>');
    continue;
  }

  if (line.trim() === '') {
    flushPara();
    continue;
  }

  para.push(line.trim());
}
flushPara();

// ---------- document assembly ----------

if (!title) title = input.split('/').pop().replace(/\.md$/, '');

const css = `
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    font-family: Georgia, 'Times New Roman', serif;
    color: #1c1b18;
    background: #fbfaf7;
    line-height: 1.65;
    max-width: 46rem;
    margin: 0 auto;
    padding: 3rem 1.5rem 5rem;
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.25;
    letter-spacing: -0.01em;
    margin: 2.2em 0 0.6em;
  }
  h1 { font-size: 2rem; margin-top: 0; border-bottom: 3px double #1c1b18; padding-bottom: 0.4em; }
  h2 { font-size: 1.4rem; border-bottom: 1px solid #d8d4ca; padding-bottom: 0.25em; }
  h3 { font-size: 1.1rem; }
  p { margin: 0.9em 0; }
  blockquote {
    margin: 1.2em 0;
    padding: 0.2em 1.2em;
    border-left: 3px solid #1c1b18;
    background: #f2efe8;
    font-style: italic;
  }
  ul { padding-left: 1.4rem; }
  li { margin: 0.3em 0; }
  code, pre, .ts {
    font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
    font-size: 0.88em;
  }
  code { background: #f0ede5; padding: 0.1em 0.3em; border-radius: 3px; }
  pre { background: #f0ede5; padding: 1em; overflow-x: auto; border-radius: 4px; }
  pre code { background: none; padding: 0; }
  .ts { background: #efe9db; padding: 0.05em 0.35em; border-radius: 3px; white-space: nowrap; }
  table { border-collapse: collapse; width: 100%; margin: 1.2em 0; font-size: 0.92em; }
  th, td { border: 1px solid #d8d4ca; padding: 0.45em 0.65em; text-align: left; vertical-align: top; }
  th { background: #f2efe8; font-family: inherit; }
  tr:nth-child(even) td { background: #f8f6f1; }
  hr { border: 0; border-top: 1px solid #d8d4ca; margin: 2.5em 0; }
  @media print {
    body { max-width: none; padding: 0; background: #fff; }
    h2 { page-break-after: avoid; }
    table, blockquote, pre { page-break-inside: avoid; }
    .ts { background: none; padding: 0; }
  }
`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<style>${css}</style>
</head>
<body>
${body.join('\n')}
</body>
</html>
`;

if (toStdout) {
  process.stdout.write(html);
} else {
  const out = output || input.replace(/\.md$/, '') + '.html';
  writeFileSync(out, html);
  console.log(`Wrote ${out} (${html.length} bytes, ${body.length} blocks)`);
}
