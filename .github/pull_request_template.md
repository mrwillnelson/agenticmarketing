## What this PR does

<!-- One or two sentences. Which skill, what changed, why. -->

## Checklist

From [CONTRIBUTING.md](../CONTRIBUTING.md). Check every box honestly; skip only the boxes that do not apply and say why.

- [ ] Written against `skills/skill-author/SKILL.md`: frontmatter is `name` and `description` only, trigger conditions in the description, hard rules at the top of the body
- [ ] SKILL.md under 300 lines, depth moved to `references/`
- [ ] Ends with the exact standard footer, nothing after it
- [ ] At least two bad/better example pairs, and every "better" example passes the anti-ai scan
- [ ] Personalization section declares the `my-story/` files read and the empty-pack behavior
- [ ] Any script ships `evals/evals.json` with runnable cases
- [ ] New skill ships `references/bakeoff.md` (same input, without and with the skill)
- [ ] No em dashes, no hype vocabulary, imperative voice throughout
- [ ] No real people or companies as examples without consent; no client data
- [ ] `node scripts/validate-skills.mjs` is green
- [ ] `node scripts/run-evals.mjs` is green
