---
name: newsletter-style-operator-letter
description: Style module on top of the newsletter skill for the weekly in-the-trenches operator letter, one lesson from the founder's own week with the real numbers behind it, the decision rule extracted from it, and one open loop for next week. Use when the issue is the weekly letter about the founder's own week, when a weekly update draft reads like a roundup of everything that happened, or when the user asks for the operator letter or this week's lesson email.
---

# Newsletter Style: Operator Letter

The weekly letter a founder writes to peer operators about their own week. It carries exactly four things: the one lesson the week charged for, the numbers on the invoice, the decision rule extracted from it, and the one thing being watched next week. This is a style module: `newsletter` still owns subject, preview, ending craft, and gates. This skill only sets the shape and stance of the weekly letter.

## Hard rules

1. One lesson per letter, always. The week produced ten; pick the one with a cost or gain attached in verifiable units. The runner-up is next week's letter, so bank it, never blend it in. A letter with two lessons is two half-letters.
2. The numbers are load-bearing. State what the lesson cost or earned in units someone could check: dollars spent, hours lost, replies received, a multiple against the user's own median. A lesson without a number is an opinion; find the number or pick a different lesson.
3. "What I would do differently" is a decision rule, not reflection. Write it as a condition and an action another operator could run next week, then test it against the event itself: the rule must have prevented the loss or captured the gain. "Be more careful" is not a rule.
4. The letter carries exactly one open loop for next week: a pending number, an experiment mid-flight, a rule on its first live run. Specific enough that next week's letter is obligated to report the result. This is the material the parent's ending step works with.
5. Write from inside the week, in the tense of the day after. Name the day it happened and what was believed before the number arrived. If the draft reads like a quarterly recap, the dates and the residue of the moment are missing.
6. The reader is a peer operator, not an audience. Report the week the way you would to someone running the same race: no teaching voice, no "here's what you can learn from this", no positioning the mistake as content.
7. When the week offers a loss and a win of similar weight, take the loss. A miss with the math teaches more than a win with applause, and it is the letter a peer cannot get anywhere else.
8. Everything else is inherited from `newsletter`: the two-part hook, the reply-worthy ending, the one-lesson letter band of 300 to 800 words, the `anti-ai` and `draft-qa` gates. Do not rebuild any of it here.

## Procedure

1. List the week's candidate lessons from the raw material: the latest dated block in `my-story/what-worked.md`, this week's call notes or `meeting-to-post` output, anything shipped or shelved. For each candidate write one line: what happened, what it cost or earned, in what unit. Strike every candidate with no unit.
2. Pick one. Prefer the largest attached cost; at similar magnitude prefer the loss (rule 7). Bank the runner-up with one line and its number as next week's opening candidate.
3. Reconstruct the moment day-after: which day it happened, what was assumed before, when the number landed and what it read. This ordering is the spine of the letter; the reader should meet the number when the writer did.
4. Write the numbers paragraph with the actual figures: the spend or hours, the base it compares against, the delta. Pull actuals from `what-worked.md` rather than memory, and never round into vagueness; "a chunk of budget" is a deleted number.
5. Extract the decision rule. State the condition, state the action, then replay the week against it in one sentence: the rule holds back the mistake or catches the win, on the record, in the letter.
6. Set the watch item: the one thing resolving next week and when the number arrives. If nothing is genuinely open, the honest move is to put the new rule's first live run on watch.
7. Hand the assembled draft to the `newsletter` procedure for subject, preview, ending, length check against the 300 to 800 word band, and both gates.

Read [references/bakeoff.md](references/bakeoff.md) to see the same invented week written as a roundup and as an operator letter, with the delta traced line by line.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: the measured rhythm the letter is written in; the letter band stretches sentences longer than posts, but the fingerprint still rules.
- `lexicon.md`: the founder's own terms for their process and metrics; the rule in step 5 is written in their words, not the industry's.
- `narrative.md`: the running story the lesson should land inside. A lesson that contradicts the narrative is worth flagging to the user, not silently reframing.
- `what-worked.md`: the source of the week's numbers, newest dated block first. When it is missing or stale, ask the user for this week's actual figures; never invent or estimate them (rule 2 has no fallback).

With an empty pack the skill still works: the shape holds and the stance holds, but voice defaults to warm generic and every number must come from the user in the conversation. Run `voice-pack` and keep `what-worked` current to fix that.

## Examples

Bad opening: "Quick update on everything that happened this week: three client calls, two posts, a new experiment, and some thoughts on where things are heading."
Better opening: "On Tuesday I boosted a post before reading who had engaged with it. The invoice for that lesson was $412, and it arrived Thursday morning."
Why: the bad one is a table of contents for a week nobody asked to tour; the better one commits to the single lesson, names the day, and puts the cost in the first breath.

Bad "differently": "Next time I'll slow down and be more thoughtful about which posts we put budget behind."
Better "differently": "New rule in the runbook: no boost goes live until the organic run shows at least three A-tier engagers in its first 48 hours. That rule would have held Tuesday's boost back."
Why: the bad one is a mood, unfalsifiable and unusable; the better one is a condition and an action another operator could adopt Monday, tested against the very event that produced it.

Bad numbers: "The campaign underperformed and burned through a decent chunk of the budget before we caught it."
Better numbers: "$412 spent, 41,000 paid impressions, zero A-tier engagers. The organic post next to it pulled 11 A-tier engagers for free."
Why: the bad one rounds the cost into fog; the better one gives the spend, the output, and the base to compare against, so the reader can check the lesson's math themselves.

Bad close: "Lots more happening next week, including some exciting news I can't share yet. Stay tuned!"
Better close: "The same $412 is now behind the post that earned it. Same window, same report. Next Friday's letter has the delta, whichever way it goes."
Why: the bad one teases nothing measurable and could sit under any issue; the better one opens a loop with a number and a date, which obligates the next letter and gives the reader a reason to expect it.

## Self-check

- Is there exactly one lesson, and did the runner-up get banked instead of smuggled in?
- Does the cost or gain appear in verifiable units against a stated base, sourced from `what-worked.md` or the user, never invented?
- Is "what I would do differently" a condition-plus-action rule, replayed against the event on the record?
- Does the letter name the one thing resolving next week and when its number arrives?
- Does it read written the day after, with the day named, rather than summarized at quarter end?
- Would a peer operator take the rule, or does the letter perform the lesson for an audience?
- If the week offered a loss, did the loss win the slot?
- Did the draft go back through `newsletter` for subject, preview, ending, the 300 to 800 word band, and both gates?

## Related skills

- `newsletter`: the parent. This module shapes the body; the parent owns the hook pair, the ending, length policing, and the gates.
- `what-worked`: writes the dated numbers block this letter draws on; run it before the letter when the block is older than the week.
- `meeting-to-post`: the week's call moments and verbatim anchors often surface the candidate lessons for step 1.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
