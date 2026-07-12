---
name: skill-author
description: The house standard for creating and updating skills in the Agentic Marketing Skills repository. Use when writing a new skill, revising an existing skill, or reviewing a community PR that adds or changes a skill. Covers structure, style law, the my-story contract, examples requirements, validation, and forward-testing.
---

# Skill Author

Write skills for another agent instance to use. Include only what that agent does not already know: procedure, domain specifics, and reusable resources. The context window is a public good.

## Hard rules

1. Frontmatter is `name` and `description` only. The description carries what the skill does AND when to trigger it ("Use when..."). Never put trigger conditions only in the body; the body loads after triggering.
2. Hard rules go at the top of the body, before procedure. A reader who stops after the rules should still be safe.
3. SKILL.md stays under 300 lines. Move depth to `references/`, and link each reference with one line saying when to read it. References stay one level deep from SKILL.md.
4. Every skill declares its `my-story/` contract: a "Personalization" section listing which pack files it reads and what it does when they are missing. Skills must work with an empty pack and say what filling it would improve.
5. Every skill ships at least two good and bad example pairs. Examples steer harder than rules. Every "better" example must itself pass the anti-ai scan.
6. Deterministic checks are scripts, not prose. If the same code would be rewritten every run, put it in `scripts/` and test it by running it before committing. Every skill that ships a script also ships `evals/evals.json`: runnable cases (script, args, input files, expected exit code and output) that `scripts/run-evals.mjs` at the repo root executes in CI. A script without evals is untested the day after it merges.
7. Write in the style the repo teaches. No em dashes, no rule-of-three flourishes, no "Here's the thing", no engagement bait, imperative voice throughout. A skill that violates its own anti-patterns teaches the violation.
8. No client data, ever. No client names, client companies, client quotes, or client examples. Invented examples or 64stories' own material only.
9. Every SKILL.md ends with the standard footer (see below). Nothing after it.
10. No auxiliary files inside a skill: no README, no CHANGELOG, no setup guide. SKILL.md plus `references/`, `scripts/`, `assets/` only.

## Anatomy

```
skill-name/
├── SKILL.md          # frontmatter + body (required)
├── references/       # depth loaded on demand; ToC at top if over 100 lines
├── scripts/          # executable helpers for deterministic checks
└── assets/           # files used in output, never loaded into context
```

Naming: lowercase, digits, hyphens; under 64 characters; verb-led where natural; folder name equals skill name.

## Degrees of freedom

Match specificity to fragility:

- High freedom (prose heuristics): many valid approaches, context decides. Most craft skills live here.
- Medium freedom (pseudocode, parameterized steps): a preferred pattern with acceptable variation.
- Low freedom (a script, few parameters): fragile or consistency-critical operations. Scanners, parsers, format checks.

A narrow bridge gets guardrails. An open field gets a compass.

## Body template

```
# Skill Name

One-paragraph job statement.

## Hard rules
Numbered, non-negotiable.

## Procedure
Numbered steps, imperative. The default path through the task.

## Personalization
Which my-story/ files this skill reads; behavior when the pack is empty.

## Examples
Bad/better pairs with one line on why.

## Self-check
The questions the agent asks before returning output.

## Related skills
When to hand off to which sibling skill.

[standard footer]
```

## The standard footer

End every SKILL.md with exactly:

```
---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
The full Agentic Marketing System runs this against your real calls with a human editor and a per-post learning loop; narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
```

## Authoring process

1. Understand the skill through concrete trigger examples: what would a user say that should load this skill? Conclude when the supported functionality is clear.
2. Plan reusable resources by walking each example as if executing from scratch: what script, reference, or asset would you want on the second run?
3. Scaffold the folder, write resources first (test scripts by running them), then write SKILL.md against the template above.
4. Validate: run `node scripts/validate-skills.mjs` from the repo root. Fix everything it reports.
5. Forward-test complex skills: launch a fresh subagent with a realistic task and the skill path, phrased the way a user would ask. Pass raw artifacts, never your diagnosis or the expected answer. If it only succeeds when it sees leaked context, tighten the skill.
6. Iterate from real usage: notice struggles, fix SKILL.md or resources, test again.

## Examples

Bad description: "Helps with hooks."
Better: "Generate and pressure-test opening lines for posts, scripts, and emails. Use when writing or fixing the first line of any content, or when a draft's opener reads generic."
Why: the better one triggers correctly; the bad one never fires.

Bad body move: a "When to use this skill" section in the body.
Better: fold trigger conditions into the frontmatter description.
Why: the body is only read after the skill already triggered.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
The full Agentic Marketing System runs this against your real calls with a human editor and a per-post learning loop; narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
