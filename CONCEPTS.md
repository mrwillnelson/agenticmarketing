# Concepts

One canonical meaning per term. When a skill and this file disagree, fix one of them.

- [Skill](#skill)
- [System](#system)
- [Gate](#gate)
- [Pack](#pack)
- [Verbatim Law](#verbatim-law)
- [Drift](#drift)
- [Receipts](#receipts)
- [Bake-off](#bake-off)
- [Evals](#evals)
- [Exemptions](#exemptions)
- [Loop](#loop)
- [The five layers](#the-five-layers)

## Skill

One task an agent can perform: write a hook, scan a draft, mine a transcript. Lives in `skills/<name>/` as a SKILL.md plus optional `references/`, `scripts/`, and `assets/`. The frontmatter description carries what it does and when it triggers; the body loads only after triggering.

## System

A complete workflow built by chaining skills with shared context, quality gates, human approval, and learning. A skill does one task; a system runs the workflow. System 1 is Agentic Executive Comms: LISTENING to NARRATIVE to DEMAND.

## Gate

A quality check a draft must pass before it ships. Binary PASS or FAIL, never "mostly fine". Every finding is line-level: quote the line, name the gate, give the concrete fix. Gates report fixes, never apply them silently. `draft-qa` is the composite pre-publish gate; `anti-ai` and `voice-match` are its mechanical and identity layers.

## Pack

The `my-story/` directory at the root of your project: voice-model, lexicon, anti-patterns, hooks, pillars, narrative, icp, listening-sources, what-worked, and `examples/`. Persistent user context that every skill reads and declares in its Personalization section. Skills work with an empty pack and say what filling it would improve. Build it once with `voice-pack`.

## Verbatim Law

Evidence is character for character from the source, filler words included. Never paraphrase into evidence, never clean up grammar, never stitch two lines into one. Every quote names its source and carries its date. In `draft-qa` this appears as the proof trace: a claim that traces to nothing is treated as fabricated, even when plausible.

## Drift

The measured distance between output and the user's own baseline. Voice drift: lines the user would not have written, judged against `my-story/voice-model.md` and approved examples. Pillar, length, and hook drift: the same idea applied to topic mix, word count, and openers in `content-audit`. Drift is measured against the pack, not against taste.

## Receipts

`references/receipts.md` in flagship skills: real posts published by Will Nelson, founder of 64stories.com, with real engagement numbers, dissected by the skill that teaches the craft. Proof the technique shipped, not an invented example.

## Bake-off

`references/bakeoff.md` in newer skills: the same input run without and with the skill, side by side, so you judge the difference yourself. Required for every new skill.

## Evals

`evals/evals.json` in every script-bearing skill: runnable cases (script, args, input files, expected exit code, expected output substrings) that `scripts/run-evals.mjs` executes in CI on every change. A script without evals is untested the day after it merges.

## Exemptions

Patterns marked in `my-story/anti-patterns.md` as authentic to the user's real voice: fragments, "And" openers, setup colons, plain endings. Gates never flag an exempted pattern, because "fixing" it would sand the user into generic prose. The anti-ai scanner loads them with `--exemptions`.

## Loop

A workflow that runs on a cadence: the daily comment queue, the weekly what-worked review, the monthly pack improvement, the quarterly audit. Loops accumulate state in `my-story/what-worked.md` and resume where they left off. See [docs/loops.md](docs/loops.md).

## The five layers

Every system in this repo has these five layers.

### Inputs

What the system listens to: calls, transcripts, analytics, social activity, CRM notes, customer feedback, competitor movement.

### Context

What the system needs to know before it acts: company, audience, positioning, voice, offers, constraints, examples. Lives in the pack.

### Judgment

The scoring, routing, and decision rules that determine what happens next, including when to route a call to a human.

### Production

The work the system creates: briefs, drafts, analyses, queues, assets.

### Learning

The performance data, human edits, approvals, and rejections that improve the next run. The ledger is `my-story/what-worked.md`.
