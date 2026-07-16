# Versions

Versioning convention: repo-level semver tags (`v1.0.0`), one tag per release. [CHANGELOG.md](CHANGELOG.md) is the source of truth for what changed; this file is the short index of releases.

## Unreleased

Work on the next release lives at the top of [CHANGELOG.md](CHANGELOG.md) under Unreleased: the systems repositioning (Agentic Executive Comms framed as System 1), the my-story privacy pass, and TOOLS.md. See the changelog for detail.

## v1.0.0

The launch of Agentic Marketing Systems as a complete first system, not a pile of prompts:

- 29 skills across Setup, Listening, Narrative, and Demand.
- System 1: Agentic Executive Comms, the LISTENING to NARRATIVE to DEMAND workflow.
- 11 tested deterministic scripts: anti-AI scanner with voice exemptions, voice fingerprint, transcript parser, connections parser, length checker, overlap checker, fold checker, performance weights, pack checker, and two network pull scripts (trends and listening sources).
- 40 eval cases in `skills/*/evals/evals.json`, run by `scripts/run-evals.mjs` in CI on every change.
- Receipts: flagship skills carry real published posts with real engagement numbers.
- Bake-offs: new skills show the same input run without and with the skill, side by side.
- The `my-story/` pack: the persistent context layer every skill reads, with a real measured worked example.

Full detail in [CHANGELOG.md](CHANGELOG.md).
