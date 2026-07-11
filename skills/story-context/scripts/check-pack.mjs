#!/usr/bin/env node
// Reports the state of the my-story/ pack: which files exist, which are empty,
// and an overall status. Run before any writing task.
//
// Usage: node check-pack.mjs [path-to-my-story]
// Default path: my-story/ at the repo root (three levels up from this script).

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const packDir = resolve(process.argv[2] ?? join(here, '..', '..', '..', 'my-story'));

const CORE = ['voice-model.md', 'anti-patterns.md', 'lexicon.md', 'hooks.md'];
const FRAME = ['pillars.md', 'narrative.md', 'icp.md'];

if (!existsSync(packDir)) {
  console.log(`PACK: missing (no directory at ${packDir})`);
  console.log('STATUS: empty');
  console.log('NEXT: run voice-pack to build the pack, or confirm generic output.');
  process.exit(0);
}

const report = (file) => {
  const p = join(packDir, file);
  if (!existsSync(p)) return 'missing';
  const text = readFileSync(p, 'utf8').trim();
  if (text.length === 0) return 'empty';
  return `present (${text.split('\n').length} lines)`;
};

let loaded = 0;
for (const file of [...CORE, ...FRAME]) {
  const state = report(file);
  if (state.startsWith('present')) loaded++;
  console.log(`${file}: ${state}`);
}

const examplesDir = join(packDir, 'examples');
let exampleCount = 0;
if (existsSync(examplesDir) && statSync(examplesDir).isDirectory()) {
  exampleCount = readdirSync(examplesDir).filter((f) => f.endsWith('.md')).length;
}
console.log(`examples/: ${exampleCount} file(s)`);

const total = CORE.length + FRAME.length;
const voiceReady = CORE.every((f) => report(f).startsWith('present'));
const status = loaded === 0 && exampleCount === 0 ? 'empty'
  : voiceReady ? 'ready'
  : 'partial';
console.log(`STATUS: ${status}`);
if (status !== 'ready') {
  console.log('NEXT: run voice-pack to fill the gaps, or confirm generic output with the user.');
}
