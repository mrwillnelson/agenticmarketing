---
name: brief-writer
description: Produce a complete, scored content brief before any drafting starts, covering thesis, audience, reader tension, hook direction, source truth, shape, length, voice rules, avoid-list, CTA, and success signal. Use when commissioning a piece, turning an idea or transcript candidate into a drafting assignment, or when a draft went wrong because the assignment was one vague sentence.
---

# Brief Writer

The brief is the artifact that separates a content system from prompt-typing. A drafting skill given "write a post about positioning" produces a plausible post about nothing. A drafting skill given a thesis, a named reader with a named fear, a whitelist of verbatim source material, and a piece-specific avoid-list produces a draft an editor can actually judge. Write the brief, score it honestly, and only then hand off.

## Hard rules

1. This skill never drafts. It ends at handoff. If the user asks for the post, write the brief first and say so.
2. Source truth is verbatim or absent. Quotes are copied exactly from the source, with provenance. A brief with no verbatim source material states it explicitly: "No verbatim source material exists for this piece." Never paraphrase a line and present it inside quote marks.
3. Source truth is a whitelist. The draft may use what is listed and nothing else. Anything the drafter wants to add later goes back through the brief.
4. Reader tension names a person and a fear, not a topic. "Positioning" is a topic. "The seed-stage founder who suspects each of her five leaders tells a different company story, and fears the drift is her fault" is a tension.
5. The avoid-list is specific to this piece: the traps this exact thesis invites. Global bans in `my-story/anti-patterns.md` already apply everywhere; restating them is padding, not protection.
6. The thesis is one sentence and a belief change: what the reader believes now, replaced by what they should believe after. A topic label fails.
7. Hook direction is 2 to 3 candidate angles, never finished lines. Finished hooks are the `hooks` skill's job at draft time, with the whole brief in view.
8. Score the brief on the 8 axes below before handoff. Below 70, refuse to hand off and state exactly what is missing. A weak brief handed off politely is a weak post with extra steps.

## Procedure

1. Collect inputs: the idea (often a `transcript-ideas` candidate), all source material, the target platform, and the `my-story/` pack. Read the source in full before writing anything.
2. Thesis: one sentence, belief change (hard rule 6). If you cannot state it, the idea is not ready; say so and stop.
3. Audience: the specific reader, what they believe now, and why they will stop scrolling. Pull from `my-story/icp.md`. "Founders" is not an audience.
4. Reader tension: the person and the fear, doubt, or contradiction this piece enters (hard rule 4).
5. Source truth: extract every verbatim quote, number, name, and fact the draft may use, each with provenance (transcript line, note, public link). Apply hard rules 2 and 3.
6. Hook direction: 2 to 3 candidate angles, each one line naming what the opener points at and the emotion it should trigger.
7. Shape: the arc from open to landing in 3 to 5 beats, and the structure it borrows (confession, breakdown, receipt-led, argument). One shape, committed.
8. Platform and length target: platform, then a word range from the user's measured range in `my-story/voice-model.md`, not a platform cliche.
9. Voice rules for this piece: the 3 to 5 rules from the voice model this specific piece will be most tempted to break. Not the whole model restated.
10. Avoid-list for this piece (hard rule 5).
11. CTA decision: usually none. If one earns its place, name it and why. Default to the ending stopping on the strongest beat.
12. Success signal: the one observable outcome that says this worked (a comment pattern, a reply type, a metric with a number).
13. Score the brief (next section). At 70 or above, hand off to the drafting skill with the brief in full. Below 70, output the score, the missing axes, and what would raise them; do not hand off.

Section-by-section depth, optional sections (media, sequencing, open questions), and the output template live in [references/section-catalog.md](references/section-catalog.md). Read it on your first brief and whenever a section feels thin.

## Brief quality score

Score each axis 0 to 100, multiply by its weight, sum, and round.

- Source truth (20%): verbatim, provenanced, sufficient to carry the thesis. A brief that honestly declares no source scores this axis at 30 or below.
- Thesis clarity (15%): one sentence, one belief change.
- Reader tension (15%): a person and a fear, per hard rule 4.
- Hook potential (15%): the angles point at concrete openable moments, not topic labels.
- Originality (10%): distinct from the author's recent pieces and from the niche's platitudes.
- Narrative fit (10%): serves a pillar and advances the arc in `my-story/narrative.md`.
- Audience clarity (10%): a specific reader segment with a stated current belief.
- Completeness (5%): every required section filled, no placeholder text.

70 or above: hand off. Below 70: refuse, name the weakest axes, state what is missing. Never inflate a score to clear the bar; the score exists to protect the drafter.

## Personalization

Reads from `my-story/`:

- `pillars.md`: which pillar this piece serves; feeds the narrative fit axis.
- `narrative.md`: the larger arc the thesis must advance; feeds narrative fit.
- `voice-model.md`: measured length range and the piece-specific voice rules.
- `anti-patterns.md`: the global bans the avoid-list must not restate (hard rule 5).
- `icp.md`: the audience section's raw material.

With an empty pack the skill still runs: mark audience and voice rules as stated assumptions, cap narrative fit at 50, use platform-default length, and say in the brief that the pack is empty. Filling the pack (run `voice-pack`) is what turns those sections from guesses into constraints.

## Examples

Bad reader tension: "This post is about founder storytelling and why it matters for strategy."
Better: "The technical founder who blames his messaging problems on being too technical, and is starting to fear the real gap is that he has not made the hard strategy decisions yet."
Why: the bad one is a topic with a valence; the better one names a person, his current excuse, and the fear underneath it, which tells the drafter exactly whose chest the first line lands in.

Bad source truth: "The founder said something like storytelling forces you to get clear on strategy, and mentioned that misalignment shows up in roadmaps."
Better: "Quote (call transcript, 14:32, founder speaking): 'When you try to explain your strategy to someone who knows nothing about your space, you discover what you don't understand.' No other verbatim source material exists for this piece."
Why: the bad one is paraphrase wearing quote marks and hides how thin the source is; the better one is copy-exact with provenance and declares the boundary of what the draft may use.

Bad avoid-list: "No em dashes, no hashtags, no engagement bait, no rhetorical questions."
Better: "Do not open with a definition of storytelling. Do not cite the same three famous-company narratives every post in this niche cites. Do not resolve the tension by recommending a messaging workshop, because the thesis is that messaging is not the problem."
Why: the bad one restates global bans that already apply to everything; the better one names the traps this specific thesis invites.

## Self-check

- Can the thesis be said in one sentence, and does it change a belief rather than name a topic?
- Does the reader tension contain a person and a fear? Underline both; if either is missing, rewrite it.
- Is every quote in source truth copy-exact with provenance, or does the brief explicitly declare that no verbatim source exists?
- Would the avoid-list still make sense attached to a different post? If yes, it is global bans restated; rewrite it.
- Are the hook directions angles rather than finished lines?
- Is the score honest, and if it is below 70, did you refuse to hand off and say what is missing?

## Related skills

- `transcript-ideas` feeds this skill: its scored candidates are the raw input a brief is built from.
- `linkedin-post`, `newsletter`, and `short-form-script` consume the finished brief as their assignment.
- `hooks` runs at draft time to turn hook direction into finished openers.
- `draft-qa` checks the shipped draft against this brief in its brief fidelity gate; a sloppy brief makes that gate meaningless.

For a worked comparison of a lazy brief versus a full one, reconstructed from a real high-performing post, read [references/bakeoff.md](references/bakeoff.md).

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by [64stories](https://64stories.co).
The full Agentic Marketing System runs this against your real calls, with a human editor and a per-post learning loop.
