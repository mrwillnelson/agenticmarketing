---
name: script-style-operator
description: The numbers-and-receipts style for short-form scripts. One real metric spoken in the first 3 seconds, the mechanism that moved it, the math walked plainly, the catch named. Use when a script should be built on a real number the user owns, when a draft brags about results without receipts, or when the user asks for a results video, a case-study short, or an operator-style breakdown. A style module that loads with short-form-script, never alone.
---

# Script Style: Operator

A style module for `short-form-script`. The parent owns the frame: hook timing, length bands, retention dips, payoff, hard cut, output format. This module sets what the beats carry when the script is a numbers story: a real metric, the operational change that moved it, math a viewer can redo, and the tradeoff. Operators trust content that names the tradeoff, and they discount everything that doesn't.

Read `references/bakeoff.md` before your first script in this style: the same metric story handled as a vague brag and as shown math, annotated.

## Hard rules

1. This module loads on top of `short-form-script`. Every parent hard rule still applies; this skill fills the beats, it never changes the frame.
2. One metric per script. A second number is allowed only if it is an input to the same calculation. A second result is a second script: note it, cut it.
3. The user's own numbers only, with the unit and the time window spoken. No industry benchmarks as the spine, no invented figures, no number the user could not defend in a comment thread.
4. No rounding into lies. Round for the mouth only in the direction that weakens the claim: gains round down, costs round up. The exact figure goes in the overlay.
5. Show the working. Speak the inputs, the lever, and the output so a viewer could redo the math on a napkin. If the math cannot be redone from what is said and shown, it is a brag, not a receipt.
6. Name the catch. Every script says what the number cost or where the mechanism breaks. No exceptions for good months.
7. Translate jargon the first time it is spoken. "CAC, what it costs us to land one customer." A viewer who has to look up the metric already left.

## The arc

Inside the parent's beat structure, the execution runs four beats in order:

1. **The metric.** One real number, spoken inside the parent's 3-second hook window, unit and window attached. The number is the hook.
2. **The mechanism.** The operational change that moved it, named as an action someone could copy. "We got more consistent" is a virtue. "We moved the price question to the first call" is a mechanism.
3. **The math.** Inputs, the lever, the output, walked plainly in one breath-sized pieces. The viewer should finish the division before you do.
4. **The catch.** What it cost (time, money, a metric that got worse) or where it breaks (scale, segment, season). Place it at the last retention dip; it is the beat that makes the other three believable.

## Procedure

1. Pick the metric. First stop is the latest dated block in `my-story/what-worked.md`; otherwise ask the user for one number they can defend: value, unit, time window, how it was measured. Never draft around a placeholder.
2. Apply the credibility inversion: an unimpressive real number with a clear mechanism beats an impressive vague one. Given "up 400%" with no story or "12 replies from 40 emails" with a lever, take the 12.
3. Write the metric beat as the spoken hook, per the parent's fold check: about 8 words, mid-thought. Digits in the overlay, words in the mouth.
4. Write the mechanism beat. One change, one action verb, before and after behavior. If the user made three changes, the script is about the biggest one and says so.
5. Write the math beat. State the inputs, name the lever, land the output. Check every spoken figure against hard rule 4 and put the exact numbers in the overlay column.
6. Write the catch beat. Ask the user directly what the number cost if the source does not say. A catch that flatters ("we were almost too successful") fails; rewrite until it stings a little.
7. Hand the draft back to the parent's pacing, payoff, and read-aloud steps. The payoff line is usually the output restated with the catch attached, because that is the sentence a viewer repeats to someone else.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: sentence rhythm, and how the user handles numbers out loud. Some founders say "six hundred sixty nine thousand", some say "about six seventy". Match them.
- `lexicon.md`: the user's own names for their metrics and process steps. Use their term, then translate it; never swap in a textbook synonym.
- `what-worked.md`: the latest dated block is the first source of real, already-verified numbers. Written by the `what-worked` skill; this module only reads it.

With an empty pack the skill still works, but every number must come from the user in the current conversation, and the voice will be generic operator instead of theirs. Filling the pack with `voice-pack` and running `what-worked` once removes both gaps.

## Examples

Bad (vague brag hook): "We had an absolutely insane month for growth."
Better (metric hook): "Forty demo calls in March, from one change."
Why: the bad hook spends the 3-second window on adjectives; the better one spends it on a number with a unit and a window, and opens the mechanism loop.

Bad (math nobody can redo): "Through consistent effort and smart optimization, conversions basically tripled."
Better (working shown): "A thousand visitors a week. Twelve bought before. Thirty one buy now. Same traffic, one page changed."
Why: the better one hands over inputs and outputs, so a viewer can compute 1.2% to 3.1% themselves; "basically tripled" asks to be trusted instead.

Bad (no catch): "And that's how we doubled output with zero downside."
Better (catch named): "Output doubled. Refunds doubled too for the first two weeks. That's the trade, and we'd take it again."
Why: zero-downside claims read as sales copy; naming the cost is what makes the doubling believable to anyone who has run anything.

Bad (rounding into a lie): "Almost three quarters of a million impressions" for a real 669,000.
Better (rounding against yourself): "Six hundred sixty nine thousand impressions", overlay 669,000, and the daily rate spoken as "about 23,000 a day" when the division gives 23,892.
Why: the bad version rounds up 12% and invites the one commenter who checks; the better version speaks the exact figure and rounds only the derived rate, downward.

## Self-check

Run the parent's self-check, then:

- Is there exactly one metric, with unit and time window, spoken inside the first 3 seconds?
- Could the user defend the number if a commenter asked how it was measured?
- Can a viewer redo the math from the spoken words plus the overlay?
- Does every rounded figure move against the speaker, with the exact value in the overlay?
- Is the mechanism an action someone could copy tomorrow, not a virtue?
- Is the catch specific and a little uncomfortable, not a humblebrag?
- Is every metric name translated at first use?

## Related skills

- `short-form-script`: the parent frame. This module never runs without it.
- `data-hooks`: number-led opening lines across formats; use it to pressure-test the metric beat as a hook.
- `what-worked`: produces the dated metric blocks this module pulls real numbers from; run it when `my-story/what-worked.md` is stale or missing.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
