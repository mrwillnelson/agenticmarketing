---
name: idea-bank
description: The scored backlog that stops good ideas dying in chat scrollback. Bank post-idea candidates into my-story/idea-bank.md, withdraw the best parked idea when it is time to write, prune stale entries monthly, and block self-plagiarism against published work. Use when banking candidates from transcript-ideas or parked runner-ups from meeting-to-post, when the user asks "what should I write today", or when running the monthly prune.
---

# Idea Bank

Sibling skills mine ideas faster than anyone drafts them. `transcript-ideas` outputs five scored candidates and one gets written; `meeting-to-post` parks a runner-up on every call. Without a ledger those survivors die in chat scrollback, and three weeks later the user rewrites a worse version from memory. This skill maintains the ledger: one file, one block per idea, four operations. Bank, withdraw, prune, and check. The bank stores and resurfaces; it never mines and never drafts.

## Hard rules

1. Verbatim quotes are preserved through the bank. Copy each supporting quote character for character from the producing skill's output, filler words included. Never clean, trim, or stitch on the way in or the way out. A candidate that arrives without a quote is banked with `Quote: none`; never invent one.
2. The bank never contains invented entries. Every block traces to a real source: a transcript, a call timestamp, a sibling skill run, or the user saying the idea out loud. Never add filler entries to make the bank look healthy, and never invent a score for an unscored candidate.
3. Killed is a valid and healthy outcome. A graveyard is not a bank. Record every kill with a one-line reason, and never resurrect a killed entry silently; a killed angle only returns through a new source moment.
4. Dedupe by angle, not title. Two titles for the same belief change are one idea. Two blocks for one idea split its resurfacing signal.
5. Amend, never delete. Blocks change status; they do not disappear. Killed and published blocks are the memory that dedupe and the self-plagiarism check run against.

## The ledger

The ledger lives at `my-story/idea-bank.md`. On first run, create it with this header, then append entry blocks below it:

```markdown
# Idea bank

Maintained by the idea-bank skill. One block per idea, appended at the end.
Statuses: parked, drafted, published, killed. Blocks are amended, never deleted.
```

One block per idea, exactly this shape:

```markdown
### {working title}
- Banked: {YYYY-MM-DD}
- Source: {call or recording name, YYYY-MM-DD, timestamp HH:MM:SS} or: parked by {skill name}, {YYYY-MM-DD}
- Angle: {the belief change or tension, 1 to 2 sentences; never a topic}
- Pillar: {pillar name from my-story/pillars.md, or null}
- Quote: "{verbatim supporting quote}" or: none
- Score: {NN}/100 or: unscored
- Status: parked | drafted {YYYY-MM-DD} | published {YYYY-MM-DD} | killed {YYYY-MM-DD}: {one-line reason}
- Wake: {condition, e.g. "when we ship X" or "when this becomes news"; omit the line when there is none}
```

Two optional amendment lines, added under a block when events warrant:

- `- Also surfaced: {YYYY-MM-DD}, {source}` when a new candidate dedupes into an existing parked block.
- `- Resurfaced: {YYYY-MM-DD}, {source}` when the self-plagiarism check catches a new candidate matching a published block.

## Procedures

### Bank

1. Take candidates from a `transcript-ideas` output, a `meeting-to-post` parked runner-up or parked draft, or an idea the user states directly. Confirm each has a real source per hard rule 2.
2. Run the self-plagiarism check (below) first. Anything it catches is linked, not banked.
3. Dedupe against every existing parked and drafted block by angle: ignore titles, compare the belief change or tension. On a match, add an `Also surfaced` line to the existing block and stop; an idea that keeps coming up in different calls is the bank telling you to write it.
4. Fill the block. Map the pillar against `my-story/pillars.md`, carry the rubric score exactly as the producing skill reported it, copy the quote character for character, and record a wake condition only when the idea genuinely waits on something.
5. Append the block to the end of the ledger.

### Withdraw

1. When the user asks what to write today, collect every block with status parked.
2. Compute the pillar gap: compare `my-story/pillars.md` targets against the pillars of blocks marked drafted or published in the last 30 days. If `pillar-gap-finder` has produced a fresher answer, use its output instead of recomputing.
3. Rank the parked blocks: a wake condition that just fired outranks everything, because news windows close; then fit to the widest pillar gap; then rubric score; then banked date as the tiebreak. A block whose wake condition has not fired yet drops to the bottom regardless of score.
4. Return the top 3, each with one line on why it ranks where it does, and hand the winner to a drafting skill. Set status to drafted only once a draft actually exists; a withdrawal is not a draft.

### Prune

1. Run monthly. Find every parked block banked more than 90 days ago.
2. No wake condition: kill it. Wake condition that can still fire: it survives, any age. Wake condition whose moment has passed: kill it too.
3. Set each kill's status line with the date and a one-line reason, e.g. `killed 2026-07-21: 113 days parked, no wake condition, never got past a topic`. Report the kills to the user. The blocks stay in the ledger.

### Self-plagiarism check

1. Before banking anything, compare the candidate's angle against every block with status published, and secondarily drafted.
2. On a near-duplicate of a published block: do not bank. Add a `Resurfaced` line under the published block and tell the user this angle already shipped, with the publish date.
3. If the resurfacing suggests a genuine follow-up, that is a new candidate with a new angle and its own source quote, banked on its own merits. It is never a re-bank of the old one.

Read [references/bakeoff.md](references/bakeoff.md) to watch six candidates survive three weeks in the ledger while the same six die in chat scrollback.

## Personalization

Reads and writes in `my-story/`:

- `idea-bank.md`: the ledger itself. Created on first run; read and amended by every operation.
- `pillars.md`: read for pillar assignment at bank time and the pillar gap at withdraw time.

With an empty pack the skill still works: create the ledger, bank with `Pillar: null`, and rank withdrawals by wake freshness and score alone, flagging that pillar gap ranking is off until `pillars.md` is filled. Filling it turns withdraw from "the best idea" into "the best idea for what the mix is missing".

## Examples

Bad quote on the way in: `- Quote: "he said outbound wasn't really working and the pipeline stayed flat anyway"`
Better: `- Quote: "we turned off the whole outbound motion for three weeks and pipeline didn't drop a dollar, which nobody wants to hear"`
Why: the bad one is reported speech, a paraphrase that becomes a fabricated quote when a draft cites it two months later; the better one survives the bank untouched and still reads like a hook.

Bad dedupe: banking "Why your posting cadence is a red herring" as a new block when "The approval bottleneck" is already parked with the same underlying angle in different words.
Better: add `- Also surfaced: 2026-07-10, discovery call 2026-07-10, 00:14:20` to the existing block.
Why: titles differ cheaply, angles are the identity; one block with two surfacings is a signal, two blocks are noise.

Bad prune: leaving "Misc AI thoughts" parked for five months because killing it feels like losing work.
Better: `- Status: killed 2026-07-21: 150 days parked, no wake condition, a topic that never became an angle`
Why: stale blocks bury live ones at withdraw time; a recorded kill costs one line and keeps the ranking honest.

## Self-check

- Is every quote character for character from the producing skill's output, with `none` where none existed?
- Does every block trace to a real transcript, call, skill run, or user statement?
- Did the self-plagiarism check run against published blocks before anything was banked?
- Did dedupe compare angles, not titles?
- Are kills recorded with dates and one-line reasons, with no blocks deleted?
- Did the withdraw ranking use wake freshness, pillar gap, and score, not whichever idea was mentioned most recently?

## Related skills

- `transcript-ideas`: produces the scored candidates; bank every keeper that is not drafted the same day.
- `meeting-to-post`: parks its runner-up and its not-clearly-good drafts here on every run.
- `pillar-gap-finder`: computes the pillar gap the withdraw ranking uses; run it first when the mix feels off.
- `cross-transcript-synthesis`: when several banked blocks from different calls circle one tension, hand them over for a single bigger piece.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
