# Contributing

Contributions are welcome: new skills, fixes to existing skills, better examples, sharper scripts. The house standard is [skills/skill-author/SKILL.md](skills/skill-author/SKILL.md). Read it first; every rule below comes from it.

## Before you start

- For a new skill, open a [skill request issue](.github/ISSUE_TEMPLATE/skill-request.yml) first and describe the workflow. Skills that duplicate an existing skill's job get closed with a pointer.
- For a fix, a small focused PR beats a broad one. One skill per PR.

## PR checklist

Every PR that adds or changes a skill must satisfy all of these:

- [ ] Written against `skills/skill-author/SKILL.md`: frontmatter is `name` and `description` only, trigger conditions live in the description, hard rules at the top of the body.
- [ ] SKILL.md is under 300 lines. Depth goes to `references/`, linked with one line saying when to read it.
- [ ] Ends with the exact standard footer from skill-author, nothing after it.
- [ ] At least two bad/better example pairs, each with one line on why. Every "better" example passes `node skills/anti-ai/scripts/scan.mjs`.
- [ ] Has a Personalization section declaring which `my-story/` files it reads and what it does when the pack is empty.
- [ ] Any script ships `evals/evals.json` with runnable cases. A script without evals is untested the day after it merges.
- [ ] New skills ship `references/bakeoff.md`: the same input run without and with the skill, side by side.
- [ ] No em dashes anywhere. No banned wind-up phrases from the anti-ai list, no rule-of-three flourishes, no engagement bait. Imperative voice.
- [ ] No real people or companies as examples without their consent. Invented examples or 64stories' own material only. No client data, ever.
- [ ] `node scripts/validate-skills.mjs` passes clean.
- [ ] `node scripts/run-evals.mjs` passes clean.

## Process

1. Fork, branch, build the skill or fix.
2. Test scripts by running them. Forward-test complex skills with a fresh agent and a realistic task, phrased the way a user would ask.
3. Run both repo scripts above until green.
4. Open the PR. The pull request template carries this checklist; check every box honestly.

A skill that violates its own anti-patterns teaches the violation. The bar is that another agent, cold, can execute the skill from the SKILL.md alone.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
