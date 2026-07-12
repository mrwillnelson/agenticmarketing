#!/usr/bin/env node
// Validates every skills/*/SKILL.md against the house standard.
// Run from the repo root: node scripts/validate-skills.mjs

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = join(root, 'skills');

const FOOTER_LINK = 'https://64stories.com';
const MAX_BODY_LINES = 300;

let failures = 0;
const fail = (file, msg) => { failures++; console.error(`FAIL ${file}: ${msg}`); };

const skillDirs = readdirSync(skillsDir).filter((d) => statSync(join(skillsDir, d)).isDirectory());
if (skillDirs.length === 0) fail('skills/', 'no skills found');

for (const dir of skillDirs) {
  const path = join(skillsDir, dir, 'SKILL.md');
  const rel = `skills/${dir}/SKILL.md`;
  if (!existsSync(path)) { fail(rel, 'missing SKILL.md'); continue; }
  const text = readFileSync(path, 'utf8');

  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) { fail(rel, 'missing YAML frontmatter'); continue; }
  const name = fm[1].match(/^name:\s*(\S+)\s*$/m)?.[1];
  const desc = fm[1].match(/^description:\s*(.+)$/m)?.[1];
  if (!name) fail(rel, 'frontmatter missing name');
  else if (name !== dir) fail(rel, `name "${name}" does not match folder "${dir}"`);
  if (!desc) fail(rel, 'frontmatter missing description');
  else {
    if (desc.length < 60) fail(rel, 'description too short to route on (< 60 chars)');
    if (!/use when/i.test(desc)) fail(rel, 'description must say when to trigger ("Use when...")');
  }

  const body = text.slice(fm[0].length);
  const bodyLines = body.split('\n').length;
  if (bodyLines > MAX_BODY_LINES) fail(rel, `body is ${bodyLines} lines (max ${MAX_BODY_LINES}); move depth to references/`);
  if (!body.includes(FOOTER_LINK)) fail(rel, 'missing standard footer');
  if (!/##\s*(Examples|Personalization)/.test(body)) fail(rel, 'missing Examples or Personalization section');

  // Style law: repo prose obeys its own anti-patterns.
  for (const f of walkMarkdown(join(skillsDir, dir))) {
    const t = readFileSync(f, 'utf8');
    const frel = f.slice(root.length + 1);
    if (t.includes('—')) fail(frel, 'contains an em dash; the repo bans them');
  }
}

function walkMarkdown(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walkMarkdown(p));
    else if (entry.endsWith('.md')) out.push(p);
  }
  return out;
}

if (failures) {
  console.error(`\n${failures} problem(s) found.`);
  process.exit(1);
}
console.log(`OK: ${skillDirs.length} skills validated.`);
