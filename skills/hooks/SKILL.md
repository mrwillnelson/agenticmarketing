---
name: hooks
description: Generate and pressure-test opening lines for posts, scripts, newsletters, and emails. Use when writing or fixing the first line of any content, when a draft's opener reads generic, or when choosing between hook candidates. Covers source mining, emotional lenses, curiosity-gap engineering, and platform fold checks.
---

# Hooks

A hook is not a sentence. A hook is the strongest truthful signal in the source, framed so the right person feels something and needs to keep reading.

## Hard rules

1. Respect the source. If a transcript, call, interview, post, or notes exist, hooks come from that source. Prefer exact source language when it is sharper than invented phrasing.
2. Never invent proof, numbers, results, stakes, quotes, or drama the source does not support.
3. A hook cannot close its own loop. If it states the contradiction and also explains the cause, consequence, or reveal, it is a premise, not a hook.
4. Every finalist must name the emotion it triggers and the one specific question it leaves open. A hook that does neither fails even when it is clean, on-voice, and true.
5. The user's voice rules outrank this skill. Check `my-story/anti-patterns.md` and `my-story/hooks.md` before showing candidates.
6. Every candidate passes the `anti-ai` skill's scan before a human sees it. The gate is hard, not advisory.
7. Do not start from formulas. Start by finding what is actually interesting.

## Procedure

1. Identify the task: source type, target audience, platform, desired action, voice rules. If something is missing, proceed on the strongest reasonable assumption.
2. Mine the source for voltage, not summary. Extract the top 3 hookable signals: contradiction, costly mistake, hidden cause, confession, sharp opinion, specific number, surprising consequence, before-and-after, audience-belief mirror, source-only phrase, or unresolved tension.
3. Select the highest-voltage signal, not the most complete or most educational one. Weigh relevance, emotional force, curiosity, specificity, consequence, and deliverability.
4. Build a one-sentence frame before wording: hidden cause, contradiction, confession, consequence, identity mirror, specific lesson, or outcome reversal.
5. Generate through emotional lenses, not templates: Aha, Oh shit, WTF, Hell yeah, Me too. Write two private candidates per lens, then keep the best 3. See [references/hook-emotions.md](references/hook-emotions.md) when a lens is unclear.
6. Engineer exactly one curiosity gap per finalist: why did that happen, what changed, what did they miss, what happened next, how did they get that result?
7. Check the platform fold with `scripts/check-fold.mjs` (see below). The visible characters must work alone.
8. Run the deployment gate on each finalist: relevant, curious, emotional, sharp, human, deliverable. Rewrite or discard anything that misses one.

## Fold check

```bash
node scripts/check-fold.mjs linkedin "Your hook text here"
```

Platforms: `linkedin` (210 visible chars), `x` (280), `email-subject` (50), `email-preview` (90), `video` (spoken words in 3 seconds, ~8 words). The script reports what shows above the fold and whether it stands alone as a hook. Deeper platform constraints live in `platforms/` at the repo root.

## Personalization

Reads from `my-story/`:

- `anti-patterns.md`: banned openers and structures; hard rejects for candidates.
- `hooks.md`: your approved past hooks; match their register and patterns.
- `voice-model.md`: sentence rhythm the finalists should carry.

With an empty pack the skill still works, but candidates will be generic to your voice. Run `voice-pack` once to fix that.

## Examples

Bad: "The future of marketing belongs to companies that understand their buyers."
Better: "Our best customer could not explain what we do. That cost us three referrals before we noticed."
Why: the bad one is a thesis with no gap; the better one has a confession, a cost, and one open question.

Bad: "Here is what I learned about hiring."
Better: "I rejected the candidate who later built our best product. Here is the note I wrote in the debrief."
Why: the bad one promises a lesson generically; the better one names a specific reversal and a source-only artifact.

Bad: "Everyone thinks consistency is the problem. Actually, it's relevance."
Better: "We doubled our posting for a quarter and pipeline did not move a dollar."
Why: the bad one closes its own loop; the better one leaves the cause open.

Bad: "Unlock better content ideas from your team."
Better: "Your team already said the post. Nobody wrote it down."
Why: the bad one is marketing copy; the better one is a recognition hit with a Me too trigger.

## Self-check

- Which emotion does each finalist trigger, by name?
- What one question does it leave open?
- Does it survive the fold alone?
- Does it come from the source, and would the user actually say it?
- Did every finalist pass the anti-ai scan?

## Related skills

- Product news, launches, funding, hiring: use `milestone-hooks` on top of this skill.
- Full drafts: `linkedin-post`, `short-form-script`, and `newsletter` load this skill for their openers.
- Final gate: `draft-qa` re-checks the hook in context.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by [64stories](https://64stories.co).
The full Agentic Marketing System runs this against your real calls, with a human editor and a per-post learning loop.
