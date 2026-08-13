---
name: anti-ai
description: The gate that keeps AI tells out of published content, in two layers. A deterministic scanner flags banned phrases, toggle reveals, staccato runs, engagement bait, and the rest of the machine-tell catalog, honoring per-voice exemptions. A judgment pass then catches what no regex can. Use when any draft, hook, or rewrite is about to be shown to a human, when text reads AI-written, or when another skill calls for its anti-ai scan.
---

# Anti-AI

AI writing tries to impress; human writing tries to be understood. This skill is the hard gate between the two. Layer one is a scanner that catches the mechanical tells and cannot forget. Layer two is a judgment pass over what the scanner cannot see. A draft clears the gate only when it clears both.

## Hard rules

1. No draft is returned to a human without a clean scan. Exit code 0 from `scripts/scan.mjs`, on the final text, every time. The gate is hard, not advisory.
2. Run the scanner. Never eyeball the deterministic checks and never claim a scan you did not run.
3. A clean scan is the floor. The judgment pass in step 4 runs after every clean scan, because the worst tells are structural and invisible to regex.
4. Honor exemptions. When `my-story/anti-patterns.md` exempts a pattern, keep it. The gate exists to remove machine tells, never to sand off an authentic voice.
5. Rewrite flagged lines from the source material. Swapping the flagged phrase for a synonym keeps the machine structure and hides the evidence.
6. Never trade truth for cleanliness. If a rewrite changes a fact, a number, or a quote, go back to the source instead.

## Procedure

1. Scan the draft:

   ```bash
   node scripts/scan.mjs draft.md
   node scripts/scan.mjs draft.md --exemptions my-story/anti-patterns.md
   ```

   Use the second form whenever the pack file exists. The script also reads stdin. Each flag prints line number, severity, the matched text, and a fix. Severities are `ban` (rewrite required, fails the scan), `warn` (judgment call), and `note` (exempted, informational). Exit code 1 means bans were found.

2. Rewrite every ban line, working from the source material, then rescan. Repeat until the scan exits 0.

3. Decide each warn on purpose. Keep it only when the source or the voice justifies it, and say why. A warn kept by silence is a warn ignored.

4. Run the judgment pass. Read the clean draft once, checking for the seven catches no regex sees:
   - Fake punchline ending. A tidy bow that would fit any post. If the last line still works pasted onto a different draft, it was never earned.
   - Performed insight. An obvious statement delivered with gravitas. If the reader already believed it before the post, cut it or find the non-obvious layer under it.
   - Symmetric rhythm. Every paragraph the same shape and length, every sentence the same cadence. Human writing has lopsided paragraphs.
   - Premise-as-hook. An opener that states the point and its explanation, leaving no question open. Hand it to the `hooks` skill.
   - Vague attribution the regexes missed. A claim resting on an unnamed crowd or "a recent study". Name the source or cut it.
   - Hedged voice. Words like "arguably", "in many ways", "one could argue", "to some extent". Commit to the claim or drop it.
   - Summary ending. A close that restates what the body already said. End on the consequence, the cost, or the next open question instead.

5. Rewrite anything the judgment pass caught, then rescan. Any edit can introduce a new tell, so the last action before returning the draft is always a scan that exits 0.

6. Return the clean draft. Report the final scan summary and every warn you chose to keep, with the reason.

The full pattern catalog, with the reasoning behind each detection and the exemption format, is in [references/banned-patterns.md](references/banned-patterns.md). Read it when a flag needs context or before proposing a new pattern.

## Personalization

Reads from `my-story/`:

- `anti-patterns.md`. Two things come from this file. The user's own banned phrases, which the judgment pass treats as hard rejects on top of the universal list. And the four exemption flags (`allowColons`, `allowStaccato`, `allowEngagementBait`, `allowEmDash`), which `--exemptions` passes to the scanner so detections that match the user's real voice downgrade to notes. `voice-pack` writes each exemption with two or more verbatim corpus quotes as evidence.

With an empty pack the skill still works at full strength. Every universal check runs at full severity and no exemptions apply, which is the safe default. The cost is precision, since a founder whose real voice uses staccato fragments will see warns on authentic lines until `voice-pack` records the exemption.

## Examples

Bad: `Here's the thing: most founders never delve into their own customer calls.`
Better: "I pulled ten of our sales calls this week. The objection we plan for came up once. The one we never mention came up nine times."
Why: the bad line stacks a wind-up, a generic crowd, and the signature AI verb; the better one makes a specific, checkable observation.

Bad: `Marketing isn't about volume. It's about trust.`
Better: "We cut our posting in half last quarter and replies doubled."
Why: the toggle stages a fake reveal; the better line gives the evidence and lets the reader reach the claim themselves.

Bad: `And that, ultimately, is what building in public really means.`
Better: "We still lose two deals a month to a spreadsheet. The next post is about the one we lost this morning."
Why: the bad ending scans clean and is still a tell, a bow that fits any post; the better ending is a judgment-layer catch, closing on a cost only this post could own.

Bad: rewriting a founder's line "Minute 12. The import screen. That pause." because the scanner warned about staccato.
Better: confirm `allowStaccato` in their `anti-patterns.md`, keep the line, and let the scan report it as a note.
Why: the fragments are the voice; a gate that removes them ships a cleaner post by a different person.

Real worked examples with real numbers: see [references/receipts.md](references/receipts.md).

## Self-check

- Did the scanner run on the exact final text, and did it exit 0?
- Was `--exemptions` passed whenever `my-story/anti-patterns.md` exists?
- Is every kept warn justified out loud, not by silence?
- Did the judgment pass cover all seven catches, ending and opener included?
- Did every rewrite come from the source material, with no fact, number, or quote drifting?
- Would the last line still make sense pasted onto a different post? If yes, it is not done.

## Related skills

- `draft-qa`: the pre-publish composite gate; it runs this skill as its first check.
- `hooks` and `milestone-hooks`: every candidate they show a human must pass this scan first.
- `linkedin-post`, `newsletter`, `short-form-script`: every draft they produce requires a clean scan before the user sees it.
- `voice-pack`: builds the `anti-patterns.md` exemptions this skill honors; run it when authentic lines keep getting flagged.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories runs the managed GTM system for companies that want this operated for them.
