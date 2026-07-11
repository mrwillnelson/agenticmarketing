---
name: voice-match
description: Make a draft sound like the user, verifiably, by calibrating rhythm and vocabulary against their approved pieces. Use when revising any draft into the user's voice, when a draft is factually right but reads like someone else wrote it, or when running a final voice check before delivery. Covers the rhythm fingerprint, the skeptical-reader pass, and the calibration diff.
---

# Voice Match

A draft is on-voice when a reader who knows the user cannot pick it out of a lineup with their real posts. Voice lives in rhythm and vocabulary more than in opinions: sentence lengths, paragraph shape, contraction rate, the words the user reaches for, and the words they never would. Match those, measurably, and the opinions take care of themselves.

## Hard rules

1. Approved pieces outrank any guide. If `my-story/voice-model.md` claims "punchy" but the approved posts average 22-word sentences, trust the posts. Measured beats claimed, every time.
2. Voice is rhythm and vocabulary before it is opinions. A draft that states the user's exact views in someone else's cadence fails this skill.
3. Never use a word from the "never says" list in `my-story/lexicon.md`. Hard reject, no exceptions for a word that "fits better here."
4. Never sand off the user's authentic quirks to satisfy generic writing rules. The exemptions in `my-story/anti-patterns.md` (fragments, "And" openers, plain endings, whatever they are) are part of the voice. Protecting them is the job.
5. A voice rewrite changes rhythm and vocabulary only. Facts, numbers, quotes, and claims stay exactly as they were. If a fact looks wrong, flag it for the `proof` step; do not fix it here.
6. Do not return a draft that fails the calibration diff. Iterate until a paragraph of the draft and a paragraph of a real approved piece are hard to tell apart by rhythm alone.

## Procedure

1. Read `my-story/voice-model.md` AND the 3 to 5 most recent approved pieces in `my-story/examples/`. Both, not either. When the guide and the posts disagree, the posts win.
2. Extract or confirm the rhythm fingerprint from the approved pieces:
   - sentence-length distribution (share of short, medium, long)
   - sentences per paragraph
   - contraction rate
   - person: I, we, or you, and in what mix
   - register: how formal, how warm, how blunt
   - signature moves: how pieces open, how they end, the habits that repeat
   If `voice-model.md` already carries measured numbers, verify them against the examples instead of trusting them.
3. Measure instead of estimating when the `voice-pack` skill is installed. Its script reports the numbers above for any set of files:

   ```bash
   node skills/voice-pack/scripts/fingerprint.mjs my-story/examples/*
   node skills/voice-pack/scripts/fingerprint.mjs draft.txt
   ```

   Run it on the approved pieces, then on the draft, and compare the two reports line by line. Without the script, count by hand on one representative paragraph from each.
4. Draft or revise against the fingerprint. Pull live vocabulary from `my-story/lexicon.md`: the user's own terms for their concepts, not the industry's synonyms. Check every reach-for phrase against the "never says" list.
5. Run the skeptical-reader pass. Imagine a reader who knows the user well and is looking for the seam. List every line they would flag as "they would not say this," each with a named reason:
   - wrong rhythm (sentence length or paragraph shape off the fingerprint)
   - wrong vocabulary (a word or phrase outside their lexicon)
   - too polished (smoothed grammar where the user writes rough)
   - performed insight (a lesson announced as a revelation the user would state plainly)
   - wrong register (more formal, warmer, or safer than they are)
   Rewrite every flagged line. A line with no flag and no reason passes; a line you defend with "it is fine" gets a second look.
6. Run the calibration diff. Put one paragraph of the draft directly next to one paragraph of a real approved piece. Read both cold. If you can instantly tell which is which from rhythm alone, name what gives the draft away, fix it, and diff again. Repeat until the tell disappears.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: the claimed fingerprint; the starting hypothesis that step 2 verifies.
- `examples/`: approved pieces; the ground truth the fingerprint is measured from and the calibration diff runs against.
- `lexicon.md`: words the user actually uses and the "never says" list; vocabulary source and hard rejects.
- `anti-patterns.md`: the user's banned phrases and their exemptions from generic rules; both are binding.

With an empty pack this skill degrades to generic-clean writing: no fingerprint to match, no lexicon to pull from, no diff to run. Say so plainly in the output ("no voice pack found; this reads clean but not like you") and recommend running `voice-pack` once to fix it.

## Examples

Assume a user whose approved posts run short, contracted, first person singular, endings plain.

Bad: "We ultimately determined that onboarding was the primary driver of churn, and that addressing it would require rethinking our activation strategy."
Better: "Onboarding was the churn problem. We'd spent two quarters fixing pricing instead."
Why: same facts, wrong rhythm; one 24-word formal sentence against a fingerprint of short contracted ones.

Bad: "That failure taught me the most valuable lesson of my career: distribution is everything."
Better: "We shipped it and nobody came. I still think about that launch."
Why: the bad line performs an insight; this user states things plainly and lets the reader draw the lesson.

Bad: "This unlocked a step-change in our growth motion."
Better: "Signups doubled the week we changed it."
Why: "unlocked," "step-change," and "growth motion" are nobody's spoken vocabulary; the fix uses the number and plain words.

Bad edit: rewriting the user's "Which was dumb. But it worked." into "That decision was unwise, but it ultimately worked out."
Better: leave the fragment alone.
Why: the fragment is a signature move exempted in `anti-patterns.md`; smoothing it satisfies a grammar rule and erases the person.

## Self-check

- Did the approved pieces, not the guide, set the fingerprint, and did I verify any claimed numbers against them?
- Does the draft match the measured fingerprint: sentence-length mix, paragraph shape, contraction rate, person, register?
- Is every skeptical-reader flag rewritten, with its named reason actually addressed?
- Is the final draft clean of every "never says" word?
- Did the rewrite preserve every fact, number, and quote exactly?
- Did I keep the user's quirks, or did I polish them away?
- Did the calibration diff pass: draft paragraph and approved paragraph indistinguishable by rhythm alone?

## Related skills

- `voice-pack` builds the inputs this skill consumes (`voice-model.md`, `lexicon.md`, `anti-patterns.md`, `examples/`) and ships the fingerprint script.
- `draft-qa` runs its voice-drift check using this skill as the final gate before delivery.
- `anti-ai` removes the AI tells any reader would spot; this skill handles identity. A draft can pass `anti-ai` and still sound like nobody in particular; run both.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by [64stories](https://64stories.co).
The full Agentic Marketing System runs this against your real calls, with a human editor and a per-post learning loop.
