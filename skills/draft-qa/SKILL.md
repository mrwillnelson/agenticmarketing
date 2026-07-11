---
name: draft-qa
description: The composite pre-publish gate for any draft. Runs seven checks in order (anti-AI scan, voice drift, hook, word range, proof trace, brief fidelity, ending) and returns a binary PASS or FAIL with line-level fixes. Use when a draft is about to ship, when the user asks for QA, a final check, or a review of a finished draft, or as the last step of any drafting skill.
---

# Draft QA

Run every draft through one gate before a human ships it. The gate answers a single question: would an editor who knows this user's voice, this platform, and this source material sign their name to this draft? Seven checks, in order, and any one of them can fail the whole draft.

## Hard rules

1. The gate is binary. PASS or FAIL, nothing between. "Mostly fine" is FAIL with fixes. "Great draft, just tighten the ending" is FAIL with fixes.
2. Every finding is line-level: quote the offending line, name the gate it failed, and give the concrete fix. The fix is the rewritten line or the specific cut, never "improve the hook" or "make it punchier".
3. After fixes are applied, the full gate runs again from the top. Fixes introduce new tells; a rewritten hook can break the word range, a proof correction can flatten the ending. There is no partial re-check.
4. Run the gates in order and report every failure found, but never skip a later gate because an earlier one failed. The user fixes everything in one pass, not one finding per round trip.
5. Never fix the draft silently. Report findings and proposed fixes; the drafting skill or the user applies them. The gate that edits its own input cannot be trusted to judge it.
6. A claim that cannot be traced to the source material is treated as fabricated, even when it is plausible. Plausible is how fabrication ships.
7. If the same line fails the gate on three consecutive runs, stop looping and escalate to the user with the history of attempts. Some lines need a human decision, not a fourth rewrite.

## Procedure

Collect the inputs first: the draft, the platform, the source material (transcript, notes, links), and the brief if one exists. Then run the seven gates in order.

1. **Anti-AI scan.** Run the `anti-ai` skill's scanner when it is installed (`node skills/anti-ai/scripts/scan.mjs <draft-file>`); otherwise load the `anti-ai` skill and apply its checks manually. Any ban-severity flag fails the gate. Warn-severity flags become findings when they are not verbatim source quotes.
2. **Voice drift.** Run the `voice-match` skeptical-reader pass against the user's pack: read the draft next to `my-story/voice-model.md` and `my-story/examples/`, and flag every line the user would not have written. Up to 2 flagged lines: report them as findings. More than 2: the gate fails, because the draft needs a voice rewrite, not spot fixes. With an empty pack, skip this gate and say so in the report.
3. **Hook check.** Judge the opener by the `hooks` skill's criteria: the visible characters above the platform fold must work alone, and must leave exactly one specific question open. A hook that closes its own loop, buries the tension below the fold, or promises a lesson generically fails.
4. **Word range.** Check the count against the user's measured range from `my-story/voice-model.md` with `scripts/check-length.mjs`: `node scripts/check-length.mjs <draft-file> --min <n> --max <n>`. With an empty pack, use the platform default via `--platform linkedin|newsletter|short-video|x`. Outside the range fails; the fix names what to cut or which beat to deepen.
5. **Proof trace.** Take every factual claim, number, quote, name, and result in the draft and trace each one to the source material: the transcript line, the note, the named public source. Anything that traces to nothing fails, including claims that are probably true. The fix is the verbatim source language, the softened claim the source actually supports, or a question back to the user for the real number.
6. **Brief fidelity.** When the draft was commissioned with a brief, check it against the brief's thesis, angle, and avoid-list. A clean, on-voice draft about a different subject than its brief fails. A draft that argues the brief's thesis from a different angle is a finding, not an automatic failure; say what moved and let the user decide. Skip this gate when no brief exists and say so.
7. **Ending check.** Read the last three lines. No fake punchline, no summary of what the draft just said, no inspirational bow, no engagement bait. The last line must be the strongest concrete beat, with nothing performing after it. The fix for a bad ending is usually a cut, not a rewrite: name the line where the draft should have stopped.

## Output format

First line: `PASS` or `FAIL`. Then a numbered list of findings, each in three parts:

```
FAIL

1. Line 1: "I want to share some thoughts on hiring."
   Gate: hook check. Nothing survives the fold and no question is open.
   Fix: open with line 9 instead: "Our best engineer almost quit over a calendar invite."
2. Line 14: "Studies show most onboarding fails in week one."
   Gate: proof trace. No study exists in the source material.
   Fix: cut the sentence, or replace with the transcript's own claim: "Both churned customers stopped logging in during week one."

Not run: voice drift (empty pack), brief fidelity (no brief).
```

On PASS, still list any skipped gates and any warn-level observations, labeled as notes, not findings. After the user or the drafting skill applies fixes, rerun all seven gates from the top (hard rule 3).

## Personalization

Reads from `my-story/`:

- `voice-model.md`: the measured word range for gate 4 and the rhythm baseline for gate 2.
- `anti-patterns.md`: the user's personal banned words, structures, and closers, added to gate 1 as hard rejects. Honor its exemptions too: when the file marks a pattern as authentic to the user's real voice (setup colons, staccato runs, a direct closing ask), that pattern never produces a finding, because "fixing" it would sand the user into generic prose.
- `examples/`: approved past writing, the ground truth for gate 2 and the ending check.

With an empty pack the gate still runs: gates 1, 3, 5, 6, and 7 in full, gate 4 on the platform default band, gate 2 skipped and reported as not run. Filling the pack with `voice-pack` turns the two weakest gates, voice and length, into measured checks instead of defaults.

## Examples

A finding, written two ways.

Bad finding:
> 3. The hook feels weak and the post runs a bit long. Improve the hook and tighten the body.

Better finding:
> 3. Line 1: "Hiring is one of the hardest parts of building a company."
>    Gate: hook check. It is a thesis everyone already agrees with; no question is open.
>    Fix: open with the draft's own line 11: "The reference call I almost skipped saved us a $140k mistake."
> 4. Lines 18 to 20 restate lines 8 to 10 in different words.
>    Gate: word range (312 words, measured range 120 to 250).
>    Fix: cut lines 18 to 20; the count lands at 261, then trim the aside on line 6.

Why: the bad one makes the user do the diagnosis again; the better one quotes the lines, names the gates, and hands over the exact replacement and the exact cut.

A draft that passes six gates and still fails.

The draft: clean scan, on-voice, strong hook, 190 words in a 120 to 250 range, on-brief, ends on a concrete beat. Line 7 reads: "Churn dropped 40% in two months."

Bad verdict:
> PASS. The 40% figure looked high but the post reads great and the story holds together.

Better verdict:
> FAIL.
> 1. Line 7: "Churn dropped 40% in two months."
>    Gate: proof trace. The transcript says churn "came down a lot after the pricing change"; no number appears anywhere in the source.
>    Fix: use the verbatim quote, or ask the user for the real figure before this ships.

Why: six passing gates cannot outvote one fabricated number; a claim that traces to nothing fails no matter how good the draft reads.

## Self-check

- Did all seven gates run in order, with skipped gates named and explained?
- Is the verdict a bare PASS or FAIL, with no "mostly" softening it?
- Does every finding quote the line, name the gate, and give the rewritten line or the specific cut?
- Did every claim, number, and quote get traced to an actual source location, not judged on plausibility?
- If this is a re-run after fixes, did it start from gate 1, not from the gate that failed last time?
- Did the gate report fixes instead of silently applying them?

## Related skills

- `anti-ai`: gate 1. Its scanner and pattern list are the mechanical layer of this gate.
- `voice-match`: gate 2. Its skeptical-reader pass supplies the voice-drift judgment.
- `hooks`: gate 3. Its fold check and open-question criteria judge the opener in context.
- `voice-pack`: builds the `my-story/` files that turn gates 2 and 4 into measured checks.
- `linkedin-post`, `newsletter`, `short-form-script`: call this gate as their final step, after their own self-edit.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by [64stories](https://64stories.co).
The full Agentic Marketing System runs this against your real calls, with a human editor and a per-post learning loop.
