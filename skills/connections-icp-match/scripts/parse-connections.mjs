#!/usr/bin/env node
// Parse a LinkedIn Connections.csv export into normalized contacts.
// Handles the real export format: 2-3 preamble note lines before the header,
// quoted fields containing commas, and rows with empty Company/Position.
//
// Usage:
//   node parse-connections.mjs <path/to/Connections.csv>              summary (default)
//   node parse-connections.mjs <path> --json                          normalized JSON array
//   node parse-connections.mjs <path> --keywords "founder,ceo,vp"     keep only positions matching any keyword
//
// Flags combine: --keywords with --json emits the filtered array.
// No dependencies. Reads the file locally; sends nothing anywhere.

import { readFileSync } from 'node:fs';

const args = process.argv.slice(2);
const jsonMode = args.includes('--json');
const kwIndex = args.indexOf('--keywords');
const keywords = kwIndex !== -1 && args[kwIndex + 1]
  ? args[kwIndex + 1].split(',').map((k) => k.trim().toLowerCase()).filter(Boolean)
  : null;
const file = args.find((a, i) => !a.startsWith('--') && (kwIndex === -1 || i !== kwIndex + 1));

if (!file) {
  console.error('Usage: node parse-connections.mjs <Connections.csv> [--json] [--keywords "founder,ceo"]');
  process.exit(1);
}

let raw;
try {
  raw = readFileSync(file, 'utf8');
} catch (err) {
  console.error(`Cannot read ${file}: ${err.message}`);
  process.exit(1);
}
// Strip a UTF-8 BOM if present.
if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);

// Character-level CSV parser: handles quoted fields with commas, escaped
// quotes (""), and newlines inside quoted fields (the preamble note uses them).
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      rows.push(row); row = [];
    } else {
      field += c;
    }
  }
  if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

const rows = parseCsv(raw);

// LinkedIn prepends note lines. Find the real header row by "First Name".
const headerIndex = rows.findIndex((r) => r.some((cell) => cell.trim() === 'First Name'));
if (headerIndex === -1) {
  console.error('No header row found (expected a row containing "First Name"). Is this a LinkedIn Connections.csv export?');
  process.exit(1);
}

const header = rows[headerIndex].map((h) => h.trim());
const col = (name) => header.indexOf(name);
const idx = {
  firstName: col('First Name'),
  lastName: col('Last Name'),
  url: col('URL'),
  email: col('Email Address'),
  company: col('Company'),
  position: col('Position'),
  connectedOn: col('Connected On'),
};

// "Connected On" arrives as "12 Mar 2024". Parse to a sortable ISO date.
const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
function parseConnectedOn(s) {
  const m = /^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/.exec((s || '').trim());
  if (!m) return null;
  const month = MONTHS[m[2].toLowerCase()];
  if (month === undefined) return null;
  const d = new Date(Date.UTC(Number(m[3]), month, Number(m[1])));
  return Number.isNaN(d.getTime()) ? null : d;
}

const get = (row, i) => (i >= 0 && i < row.length ? (row[i] || '').trim() : '');

const contacts = rows
  .slice(headerIndex + 1)
  .filter((r) => r.length > 1 && r.some((cell) => cell.trim() !== ''))
  .map((r) => {
    const connectedOn = get(r, idx.connectedOn);
    const date = parseConnectedOn(connectedOn);
    return {
      firstName: get(r, idx.firstName),
      lastName: get(r, idx.lastName),
      url: get(r, idx.url),
      email: get(r, idx.email),
      company: get(r, idx.company),
      position: get(r, idx.position),
      connectedOn,
      connectedOnISO: date ? date.toISOString().slice(0, 10) : null,
    };
  });

const filtered = keywords
  ? contacts.filter((c) => {
      const pos = c.position.toLowerCase();
      return keywords.some((k) => pos.includes(k));
    })
  : contacts;

if (jsonMode) {
  console.log(JSON.stringify(filtered, null, 2));
  process.exit(0);
}

// Default: summary.
const withCompany = filtered.filter((c) => c.company !== '').length;
const withPosition = filtered.filter((c) => c.position !== '').length;
const dates = filtered.map((c) => c.connectedOnISO).filter(Boolean).sort();

console.log(`Contacts: ${filtered.length}${keywords ? ` (of ${contacts.length}, filtered by: ${keywords.join(', ')})` : ''}`);
console.log(`With company: ${withCompany}`);
console.log(`Without company: ${filtered.length - withCompany}`);
console.log(`With position: ${withPosition}`);
console.log(`Without position: ${filtered.length - withPosition}`);
if (dates.length > 0) {
  console.log(`Connected between: ${dates[0]} and ${dates[dates.length - 1]}`);
} else {
  console.log('Connected between: no parseable dates');
}
