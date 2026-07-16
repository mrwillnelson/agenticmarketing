#!/usr/bin/env node
// Recomputes the README scoreboard from live repo contents and rewrites the
// block between the <!-- scoreboard:start --> and <!-- scoreboard:end -->
// markers in README.md.
//
// Usage:
//   node scripts/sync-readme.mjs           rewrite the block in place
//   node scripts/sync-readme.mjs --check   exit 1 if the block is stale (CI mode)
//
// Counting rules (the scoreboard counts user-facing surface, not plumbing):
//   skills          directories under skills/
//   tested scripts  every *.mjs under skills/*/scripts/, plus repo-level tools
//                   in scripts/ (doctor.mjs, render-brief.mjs, and any future
//                   tool). Infrastructure is excluded: validate-skills.mjs,
//                   run-evals.mjs, and this file, because they test the
//                   scripts rather than being the product.
//   eval cases      sum of cases[] across every skills/*/evals/evals.json,
//                   plus evals/repo-evals.json at the repo root
//   receipts files  skills/*/references/receipts.md
//   bake-offs       skills/*/references/bakeoff.md

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');

const skillsDir = join(root, 'skills');
const skillDirs = readdirSync(skillsDir).filter((d) => statSync(join(skillsDir, d)).isDirectory());

const INFRA = new Set(['validate-skills.mjs', 'run-evals.mjs', 'sync-readme.mjs']);
let scripts = 0;
for (const skill of skillDirs) {
  const dir = join(skillsDir, skill, 'scripts');
  if (!existsSync(dir) || !statSync(dir).isDirectory()) continue;
  scripts += readdirSync(dir).filter((f) => f.endsWith('.mjs')).length;
}
scripts += readdirSync(join(root, 'scripts')).filter((f) => f.endsWith('.mjs') && !INFRA.has(f)).length;

let evalCases = 0;
const evalPaths = skillDirs.map((s) => join(skillsDir, s, 'evals', 'evals.json'));
evalPaths.push(join(root, 'evals', 'repo-evals.json'));
for (const p of evalPaths) {
  if (!existsSync(p)) continue;
  try {
    const suite = JSON.parse(readFileSync(p, 'utf8'));
    if (Array.isArray(suite.cases)) evalCases += suite.cases.length;
  } catch {
    console.error(`Warning: cannot parse ${p}; not counted.`);
  }
}

let receipts = 0;
let bakeoffs = 0;
for (const skill of skillDirs) {
  if (existsSync(join(skillsDir, skill, 'references', 'receipts.md'))) receipts++;
  if (existsSync(join(skillsDir, skill, 'references', 'bakeoff.md'))) bakeoffs++;
}

const line = `**${skillDirs.length} skills · ${scripts} tested scripts · ${evalCases} eval cases · ${receipts} receipts files · ${bakeoffs} bake-offs**`;

const readmePath = join(root, 'README.md');
const readme = readFileSync(readmePath, 'utf8');
const blockRe = /(<!-- scoreboard:start -->)([\s\S]*?)(<!-- scoreboard:end -->)/;
const m = readme.match(blockRe);
if (!m) {
  console.error('README.md has no <!-- scoreboard:start --> ... <!-- scoreboard:end --> markers; add them first.');
  process.exit(1);
}

if (m[2] === line) {
  console.log(`README scoreboard is up to date: ${line}`);
  process.exit(0);
}

if (check) {
  console.error('README scoreboard is stale.');
  console.error(`  current:  ${m[2]}`);
  console.error(`  expected: ${line}`);
  console.error('Run: node scripts/sync-readme.mjs');
  process.exit(1);
}

writeFileSync(readmePath, readme.replace(blockRe, `$1${line}$3`));
console.log(`README scoreboard updated: ${line}`);
