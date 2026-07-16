---
name: pillar-gap-finder
description: The weekly forward planner for pillar coverage. Measure the gap between the target mix in my-story/pillars.md and the last 3 to 6 weeks of actual posts, name the starving pillar, and turn the gap into one capture plan for the week, pointing at the call, demo, or decision that will produce the material and the one question to ask. Use when the user asks what to record or capture next, which pillar is falling behind, or how to plan this week's content before anything gets written.
---

# Pillar Gap Finder

`content-audit` tells you once a quarter how far you drifted. This skill answers the weekly question before the drift happens: which pillar starves next unless you capture something this week, and which real moment on the calendar will produce that material. The output is a plan to capture, never a prompt to write.

## Hard rules

1. Gaps are measured, never vibed. Every gap is a target share minus a counted actual share over a named window, and the classification table is shown before any gap is stated. No counted window, no gap.
2. A declared target mix is required. When `pillars.md` carries no targets, report the actual shares, mark the run "no target mix declared", and route to `voice-pack`. There is no starving pillar without a target.
3. A pillar can be deliberately paused. When the user says a pillar is on hold, record the pause with a date and reason and exclude it from the starving calculation. Never nag a paused pillar.
4. Never manufacture content for a pillar with no real material this week. When nothing on the calendar and nothing in the idea bank serves the pillar, the answer is "capture first" plus a plan to create the missing moment, not a writing prompt from air.
5. Check the idea bank before asking for new material. A parked candidate that already serves the starving pillar beats a fresh capture.
6. A capture plan points at a real moment: a named call, demo, decision, or review happening this week. "Write about X" is not a capture plan.
7. Classify posts by pillar the way `what-worked` step 2 does; do not re-derive or restate the method here or in the output.

## Procedure

1. Read the target mix from `my-story/pillars.md`. No targets: apply hard rule 2 and stop after reporting the actual shares.
2. Collect the last 3 to 6 weeks of posts, dated, pasted or listed by hand. Classify each by pillar per hard rule 7 and show the table before computing. A post serving two pillars counts for the one its hook serves.
3. Build the gap table, one row per pillar:
   - Target: the declared share.
   - Actual: posts on the pillar over total posts in the window, as "n of N" plus the percentage.
   - Gap: target minus actual, in points. Positive means under target.
   - Weeks starving: consecutive weeks, counting back from today, with no post on the pillar.
   - Status: paused (recorded), crowding (most over target), starving, or on mix.
4. Name the starving pillar. Starvation score = gap in points times weeks starving (minimum 1). Highest score wins; ties go to the pillar starving longer. Name exactly one. A table where everything is "slightly off" plans nothing.
5. Check for pauses before planning. A pillar silent for weeks gets one question: deliberate? Yes: record a dated pause note under that pillar in `pillars.md` and move to the next-highest score. No: it stays the target.
6. Open `my-story/idea-bank.md` if present and pull parked candidates that serve the starving pillar. List up to 3 with their scores and what each still needs. Absent: say the `idea-bank` skill maintains that file and move on.
7. Build one capture plan for the week. Scan what is actually happening: client calls, demos, sales conversations, internal decisions, metrics reviews. Pick the single moment most likely to yield material for the starving pillar and specify four things: the moment (named and dated), the one question to ask or the two minutes to record, how it gets captured (recording, note, a line in the idea bank), and where it goes next (`transcript-ideas` for a recording, the idea bank for a note). One plan. Five capture ideas is a backlog, not a plan.
8. When no moment this week serves the pillar and the idea bank has nothing for it, say "capture first". The plan becomes scheduling the missing moment: book the customer call, put the metrics review on the calendar. The pillar stays starving one more week and the next run's gap table carries that memory.
9. Deliver in this order: the gap table, the one capture plan, parked candidates to revive (or the honest "none parked"). Nothing else. Drafting from a revived candidate belongs to `linkedin-post` and `hooks`, not here.

A worked run against the generic "post more about X" advice is in [references/bakeoff.md](references/bakeoff.md). Read it when unsure what the gap table or the capture plan should look like.

## Personalization

Reads from `my-story/`:

- `pillars.md`: pillar names and target mix, required for any gap. Also where step 5 records dated pause notes. Empty: report shares only and route to `voice-pack`.
- `idea-bank.md`: parked candidates for step 6, when present. The `idea-bank` skill owns and maintains it. Absent: skip the revival check and say so.
- `narrative.md`: shapes the capture question so the material serves the arc, not just the topic. Empty: questions stay generic to the pillar thesis.
- `what-worked.md`: the latest weights bias what kind of moment to capture for the starving pillar, such as preferring a confession moment over an announcement when confessions weigh above 1.2x. Read only; `what-worked` writes it.

Writes to `my-story/`: only the dated pause note in `pillars.md`, and only when the user declares a pause.

With an empty pack the skill still classifies and reports shares, but it cannot name a starving pillar and says exactly that. Filling `pillars.md` with targets is what turns the weekly run on.

## Examples

Bad: "You have been neglecting your process pillar lately. Post more behind-the-scenes content this week to balance things out."
Better: "Story Engineering proof: 1 of 12 posts in 4 weeks (8%) against a 35% target, gap 27 points, no post in 19 days. Thursday's client kickoff is the moment: record the walkthrough segment and ask 'what did you try before this that did not work'."
Why: the bad one vibes a gap and prompts writing; the better one counts the gap and books a capture.

Bad: "Founder-journey is 5 weeks silent. Here are three founder-journey prompts to catch up on over the weekend."
Better: "Founder-journey scores highest on the gap table, but you said it is paused during the raise. Recorded in pillars.md dated today; it drops out of the calculation until you unpause it. Next-highest score is proof, so this week's plan targets proof."
Why: catch-up prompts manufacture content and nag a deliberate pause; the better one records the pause and plans for the real gap.

Bad: "No proof material this week? Write a reflective post about lessons from past client wins."
Better: "Nothing on this week's calendar produces proof material and the idea bank holds no proof candidates. Capture first: book the monthly metrics review before Friday and log one before-and-after number there. The pillar stays starving this week, and that is the honest state of it."
Why: the bad one writes from air; the better one creates the missing moment and lets the table say starving for another week.

Bad: "The narrative pillar is starving. What new stories do you have for me?"
Better: "Before asking for anything new: the idea bank parks two narrative candidates from the July 2 client call, both scored above 3.5. Revive the one with the verbatim quote attached first; it needs no new capture at all."
Why: a parked candidate that already serves the pillar beats requesting fresh material.

## Self-check

- Is every gap a subtraction of two counted shares over a named window, with the classification table shown first?
- Is exactly one pillar named starving, with its score printed?
- Is the capture plan pinned to a named, dated moment this week, with one question or one moment to record?
- Was the idea bank checked before any new material was requested?
- Is every paused pillar recorded with a date and excluded, rather than counted or nagged?
- Does the output contain zero writing prompts and zero draft copy?

## Related skills

- `what-worked`: owns the classification approach and the performance weights; run it when the question is what performed, not what is missing.
- `content-audit`: the quarterly teardown of drift that already happened, across voice, hooks, and length too; this skill runs weekly to prevent the pillar-mix part of that drift.
- `idea-bank`: sibling that owns `my-story/idea-bank.md`; every parked candidate revived here comes from it, and step 7's captured notes land back in it.
- `transcript-ideas`: where a capture plan's recording goes once it exists; it extracts and scores the candidates.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
