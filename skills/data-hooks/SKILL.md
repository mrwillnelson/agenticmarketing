---
name: data-hooks
description: Open content with a verifiable number instead of a claim, and know when a claim should lead instead. Use when the source contains real metrics and you are writing a number-led first line, when a draft opens with vague scale words like "massive growth" or "huge results", or when deciding whether the number or the mechanism behind it carries the hook. Layers on the hooks skill.
---

# Data Hooks

A data hook is a number doing the work a claim usually fakes. "Massive growth" asks to be believed; "669,000 impressions in 28 days" asks to be checked, and a reader who could check a number trusts it without checking. This skill governs when a number leads the opener, which number, and how naked it stands. Load `hooks` first; this skill changes what the first line is made of when the source is measured.

## Hard rules

1. All `hooks` rules apply, especially source discipline, the single curiosity gap, the fold check, and the hard `anti-ai` gate. Where the two conflict on a number-led opener, this skill wins.
2. Verifiable units law. Every number in a hook carries a unit a stranger could audit: impressions, days, dollars, rows, demos, workspaces. "669,000 impressions in 28 days" qualifies because both parts are checkable units. "Massive growth" is not a data hook; it is a claim wearing a costume. A number without a unit ("we 10x'd") is a claim too.
3. One number per hook. Two numbers split the curiosity gap in half and the reader follows neither. A ratio or a delta counts as one number ("500%", "down 40 points"), and a timeframe attached to a number is part of its unit, not a second number ("in 28 days" is the denominator, not a rival).
4. Provenance law. Every number traces to a real source the user can produce on request: a dashboard, an export, an invoice, a transcript. Never rounded into a lie. Round toward the source's precision or down, never up past what was measured; 669,412 may become 669,000, it never becomes "nearly a million". Never invented, never an extrapolation presented as a measurement.
5. The so-what gate. A true number with no implication for the reader fails. If the reader cannot finish "which means I should...", the number is trivia, however impressive it looks on your dashboard.
6. Vague scale words are banned wherever a real number exists: massive, huge, exploded, skyrocketed, insane, countless, "a ton of". If no real number exists, do not fake one; write a claim-led hook through `hooks` instead.

## Procedure

1. Inventory every number in the source. For each, record value, unit, timeframe, and provenance. Discard anything that fails the provenance law before ranking begins.
2. Run the surprise test on each survivor: does this number violate the model the reader walked in with? Write down what the reader would have guessed. If the number and the guess are close, the number is unremarkable.
3. Decide number-led or claim-led using the section below. This is the fork; do not default to the number just because you have one.
4. If number-led, draft with the naked number pattern: the number opens the line, framing stays out of line one, context lands in line two.
5. Run the so-what gate, then the standard `hooks` gates: fold check, emotion named, one open question, anti-ai scan.

## When a number beats a claim

The number leads when it is surprising: it violates the reader's model of what is normal, possible, or proportionate. The gap between the number and the reader's guess is the curiosity gap; the bigger the violation, the harder the hook pulls. A founder audience guesses a good month of organic founder content is maybe 50,000 impressions; 669,000 in 28 days breaks that model, so the number needs no adjective.

The claim leads when the number is unremarkable but the mechanism is not. Growing 12% in a quarter surprises nobody; doing it after firing your only marketer might. In that case the mechanism, reversal, or contradiction is the hook and the modest number becomes supporting proof in the body. Forcing an ordinary number into line one produces a shrug at the exact moment you needed a double take.

Two quick tells: if you feel the urge to add an adjective to the number ("an incredible 12%"), the number is not carrying the hook and the claim should lead. If you feel the urge to explain the number before showing it, you have the naked number pattern backwards.

## The naked number pattern

Number first. No warm-up, no "I want to share some results", no company name, no adjectives. The number and its unit stand alone as the first thing the eye hits, and line two supplies the context that makes it land.

The pattern works because framing is a spoiler: every word before the number tells the reader how to feel, which closes the gap the number was about to open. A naked number forces the reader to react before they know whose number it is. Line two answers the first question the reaction raises, and only that one.

Order of information: line one, the number with its unit and timeframe. Line two, whose number and from what. Line three onward, the mechanism. Inverting this order turns a data hook back into an announcement.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: does this user actually open with numbers? Check rhythm and register; some voices state numbers dryly, some cannot open cold. Match how naked their numbers go.
- `hooks.md`: approved past hooks; if number-led openers are already in there, match their pattern and precision level.
- `anti-patterns.md`: banned openers and structures; hard rejects for candidates.

With an empty pack the skill still works, but it cannot tell whether a naked number sounds like the user or like a stranger's dashboard. Run `voice-pack` once to fix that.

## Examples

Bad: "We're seeing massive growth for one of our newest clients."
Better: "669,000 impressions in 28 days from founder content on LinkedIn"
Why: the bad one is a claim in a costume; the better one, from 64stories' own published material, is two checkable units and no adjectives, and the reader's next question ("how?") is the post.

Bad: "669,000 impressions and 1,200 new followers in 28 days across 22 posts."
Better: "669,000 impressions in 28 days."
Why: three numbers split the curiosity gap three ways; one number with its timeframe leaves exactly one question open.

Bad: "Our pipeline grew an incredible 9% last quarter!"
Better: "Our pipeline grew 9% the quarter we stopped doing outbound entirely."
Why: 9% is unremarkable, so the adjective is doing fake work; the mechanism is the surprise, and the modest number becomes honest proof instead of a failed hook.

Bad: "We processed 4.2 million rows of engagement data last night."
Better: "4.2 million engagement rows say the same thing: your buyers comment before they book."
Why: the bad one passes provenance and fails the so-what gate; the better one attaches the number to something the reader should do differently.

Bad: "Nearly a million impressions in a single month."
Better: "669,000 impressions in 28 days."
Why: the bad one rounds up past what was measured and blurs both units; the better one keeps the source's precision, which is what makes it feel checkable.

Full bake-off with the baseline and with-skill openers side by side: see [references/bakeoff.md](references/bakeoff.md) when you want the whole delta on one real idea.

## Self-check

- Does every number in the finalist carry a unit and provenance the user could produce on request?
- Exactly one number? (Ratios and deltas count as one; timeframes belong to their number.)
- Did the number pass the surprise test, or should the mechanism lead instead?
- Is line one naked: no framing, no adjectives, no company name before the number?
- Does the number pass the so-what gate for this specific reader?
- Any vague scale word surviving where a real number exists?
- Did every finalist pass the full `hooks` self-check: emotion named, one open question, fold, anti-ai?

## Related skills

- `hooks` is the parent. Load it first; this skill only governs number-led openers.
- Company announcements: `milestone-hooks` wins for launches, funding, hires, and growth milestones. There the number enters as the resolution, not the opener; its exact-numbers rule still applies to every scale word.
- `what-worked` turns your own post metrics into performance numbers; its output is the cleanest provenance source this skill can draw from.
- `brief-writer` holds proof discipline upstream: its source-truth whitelist is the provenance record, and a number absent from the brief does not enter the hook.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
