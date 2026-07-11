#!/usr/bin/env node
// Repo-level eval runner for skill scripts. Zero dependencies.
//
// Discovers every skills/*/evals/evals.json and runs each case:
//   1. writes declared input files into a fresh temp dir
//   2. substitutes the token $TMP in args with that dir
//   3. runs `node <skillDir>/<case.script> ...args` (optional stdin piped)
//   4. asserts expectExit (number) and expectContains (array of substrings
//      that must all appear in combined stdout + stderr)
//
// Schema per evals.json:
//   { "cases": [ { "name", "script", "args": [], "files": { "rel": "content" },
//                  "stdin": "optional", "expectExit": 0, "expectContains": [] } ] }
//
// Prints one PASS/FAIL line per case, a summary, exits 1 on any failure.

import { readFileSync, readdirSync, existsSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = join(repoRoot, 'skills');

const evalFiles = readdirSync(skillsDir)
  .map((name) => ({ skill: name, path: join(skillsDir, name, 'evals', 'evals.json') }))
  .filter((e) => existsSync(e.path))
  .sort((a, b) => a.skill.localeCompare(b.skill));

if (evalFiles.length === 0) {
  console.error(`No skills/*/evals/evals.json found under ${skillsDir}`);
  process.exit(1);
}

let passed = 0;
let failed = 0;

for (const { skill, path } of evalFiles) {
  const skillDir = join(skillsDir, skill);
  let suite;
  try {
    suite = JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    console.log(`FAIL ${skill}: cannot parse ${path}: ${err.message}`);
    failed++;
    continue;
  }
  const cases = Array.isArray(suite.cases) ? suite.cases : [];

  for (const c of cases) {
    const label = `${skill} :: ${c.name || 'unnamed case'}`;
    const tmp = mkdtempSync(join(tmpdir(), 'agentic-eval-'));
    const problems = [];
    try {
      for (const [rel, content] of Object.entries(c.files || {})) {
        const target = join(tmp, rel);
        mkdirSync(dirname(target), { recursive: true });
        writeFileSync(target, content);
      }

      const args = (c.args || []).map((a) => String(a).replaceAll('$TMP', tmp));
      const scriptPath = join(skillDir, c.script);
      if (!existsSync(scriptPath)) {
        problems.push(`script not found: ${scriptPath}`);
      } else {
        const res = spawnSync(process.execPath, [scriptPath, ...args], {
          input: c.stdin !== undefined ? String(c.stdin) : undefined,
          encoding: 'utf8',
          cwd: tmp,
          timeout: 30_000,
        });
        const combined = (res.stdout || '') + (res.stderr || '');
        if (res.error) problems.push(`spawn error: ${res.error.message}`);
        if (typeof c.expectExit === 'number' && res.status !== c.expectExit) {
          problems.push(`exit ${res.status}, expected ${c.expectExit}`);
        }
        for (const needle of c.expectContains || []) {
          if (!combined.includes(needle)) problems.push(`output missing: ${JSON.stringify(needle)}`);
        }
        if (problems.length) {
          problems.push(`--- output ---\n${combined.trim().split('\n').map((l) => '  ' + l).join('\n')}`);
        }
      }
    } catch (err) {
      problems.push(`runner error: ${err.message}`);
    } finally {
      rmSync(tmp, { recursive: true, force: true });
    }

    if (problems.length) {
      failed++;
      console.log(`FAIL ${label}`);
      for (const p of problems) console.log(`     ${p.split('\n').join('\n     ')}`);
    } else {
      passed++;
      console.log(`PASS ${label}`);
    }
  }
}

console.log(`\n${passed + failed} cases: ${passed} passed, ${failed} failed (${evalFiles.length} skills)`);
process.exit(failed > 0 ? 1 : 0);
