#!/usr/bin/env node
// The one health command for this repo. Run it from anywhere:
//
//   node scripts/doctor.mjs [--offline]
//
// Checks, each printed as PASS or FIX with a one-line prescription:
//   1. Node version is 18 or newer
//   2. my-story/ pack status, file by file (same rules as story-context's
//      check-pack.mjs, reimplemented here so doctor stays standalone)
//   3. every skills/*/scripts/*.mjs and scripts/*.mjs parses (node --check)
//   4. the two network scripts (pull-trends, pull-sources) can reach their
//      upstream hosts (skipped with --offline)
//   5. the eval suite passes (node scripts/run-evals.mjs)
//
// Exit code: 0 when there are no hard failures. Hard failures are: Node too
// old, a script that does not parse, evals failing. Pack gaps and network
// trouble are soft: an empty pack is a valid state (skills degrade
// gracefully), and both network scripts work offline with pasted data.
//
// Recursion guard: doctor sets AGENTIC_DOCTOR=1 when it spawns the eval
// runner, and skips the eval check when that variable is already set, so
// doctor-inside-evals-inside-doctor never loops.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const offline = process.argv.includes('--offline');

let hard = 0;
let soft = 0;
const pass = (msg) => console.log(`PASS ${msg}`);
const fix = (msg, isHard = false) => {
  console.log(`FIX  ${msg}`);
  if (isHard) hard++; else soft++;
};

// ---------- 1. Node version ----------

const major = Number(process.versions.node.split('.')[0]);
if (major >= 18) pass(`node v${process.versions.node} (need >= 18)`);
else fix(`node v${process.versions.node} is too old; install Node 18 or newer`, true);

// ---------- 2. my-story/ pack ----------

const packDir = join(root, 'my-story');
const CORE = ['voice-model.md', 'anti-patterns.md', 'lexicon.md', 'hooks.md'];
const FRAME = ['pillars.md', 'narrative.md', 'icp.md'];

if (!existsSync(packDir)) {
  fix('my-story/ is missing; run voice-pack to build it, or work generic with an empty pack');
} else {
  let coreReady = true;
  for (const file of [...CORE, ...FRAME]) {
    const p = join(packDir, file);
    if (!existsSync(p)) {
      if (CORE.includes(file)) coreReady = false;
      fix(`my-story/${file} is missing; run voice-pack to create it`);
      continue;
    }
    const text = readFileSync(p, 'utf8').trim();
    if (text.length === 0) {
      if (CORE.includes(file)) coreReady = false;
      fix(`my-story/${file} is empty; run voice-pack to fill it`);
    } else {
      pass(`my-story/${file} present (${text.split('\n').length} lines)`);
    }
  }
  const examplesDir = join(packDir, 'examples');
  const exampleCount = existsSync(examplesDir) && statSync(examplesDir).isDirectory()
    ? readdirSync(examplesDir).filter((f) => f.endsWith('.md')).length
    : 0;
  if (exampleCount > 0) pass(`my-story/examples/ has ${exampleCount} file(s)`);
  else fix('my-story/examples/ is empty; add 1 to 3 of your published posts so voice-match has a register to hold');
  if (coreReady) pass('pack status: voice-ready (all core files present)');
  else fix('pack status: not voice-ready; run voice-pack, or confirm generic output with the user');
}

// ---------- 3. every script parses ----------

const scriptFiles = [];
const skillsDir = join(root, 'skills');
if (existsSync(skillsDir)) {
  for (const skill of readdirSync(skillsDir)) {
    const dir = join(skillsDir, skill, 'scripts');
    if (!existsSync(dir) || !statSync(dir).isDirectory()) continue;
    for (const f of readdirSync(dir)) {
      if (f.endsWith('.mjs')) scriptFiles.push(join(dir, f));
    }
  }
}
for (const f of readdirSync(join(root, 'scripts'))) {
  if (f.endsWith('.mjs')) scriptFiles.push(join(root, 'scripts', f));
}
let parseFailures = 0;
for (const file of scriptFiles.sort()) {
  const res = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8', timeout: 15_000 });
  if (res.status !== 0) {
    parseFailures++;
    const firstLine = (res.stderr || 'unknown parse error').trim().split('\n')[0];
    fix(`${file.slice(root.length + 1)} does not parse; ${firstLine}`, true);
  }
}
if (parseFailures === 0) pass(`all ${scriptFiles.length} .mjs scripts parse (node --check)`);

// ---------- 4. network scripts reachable ----------

if (offline) {
  console.log('SKIP network checks (--offline)');
} else {
  const probes = [
    { name: 'pull-trends (newsjacking)', url: 'https://hn.algolia.com/api/v1/search?query=ping&hitsPerPage=1' },
    { name: 'pull-sources (comment-strategy)', url: 'https://www.reddit.com/robots.txt' },
  ];
  for (const probe of probes) {
    try {
      const res = await fetch(probe.url, { method: 'HEAD', signal: AbortSignal.timeout(5000), redirect: 'follow' });
      // Any HTTP response at all means the host is reachable; some hosts
      // answer HEAD with 4xx and that is fine for this check.
      pass(`${probe.name} upstream reachable (HTTP ${res.status})`);
    } catch {
      fix(`${probe.name} upstream unreachable from here; offline mode still works with pasted data (use --offline to silence this check)`);
    }
  }
}

// ---------- 5. evals ----------

if (process.env.AGENTIC_DOCTOR) {
  console.log('SKIP evals (recursion guard: already running under doctor or the eval runner)');
} else {
  const runner = join(root, 'scripts', 'run-evals.mjs');
  const res = spawnSync(process.execPath, [runner], {
    encoding: 'utf8',
    cwd: root,
    timeout: 300_000,
    env: { ...process.env, AGENTIC_DOCTOR: '1' },
  });
  const combined = (res.stdout || '') + (res.stderr || '');
  const summary = combined.match(/(\d+) cases: (\d+) passed, (\d+) failed/);
  if (res.status === 0 && summary) {
    pass(`evals: ${summary[2]} of ${summary[1]} cases passed`);
  } else if (summary) {
    fix(`evals: ${summary[3]} of ${summary[1]} cases failed; run node scripts/run-evals.mjs to see which`, true);
  } else {
    fix('evals: runner did not produce a summary; run node scripts/run-evals.mjs directly', true);
  }
}

// ---------- summary ----------

console.log('');
if (hard === 0) {
  console.log(soft === 0 ? 'DOCTOR: healthy' : `DOCTOR: healthy (${soft} soft finding(s) above, none blocking)`);
  process.exit(0);
}
console.log(`DOCTOR: ${hard} hard failure(s), ${soft} soft finding(s)`);
process.exit(1);
