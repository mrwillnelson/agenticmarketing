---
name: cross-transcript-synthesis
description: Mine patterns across three or more of a founder's transcripts spanning weeks or months, producing a synthesis memo of recurring themes, position evolution arcs, a private contradiction list, repeated inbound questions, and accumulated proof, plus idea candidates no single call contained. Use when multiple dated transcripts (or transcript-ideas outputs) are available and the question is what the founder keeps saying, how their thinking changed over time, or what their call history adds up to.
---

# Cross-Transcript Synthesis

One transcript tells you what a founder said. A stack of them tells you what a founder believes, what they have stopped believing, and what their audience keeps demanding. Single calls belong to `transcript-ideas`. This skill works the space between calls: what repeats, what shifted, what contradicts, what people keep asking, and what the scattered numbers add up to.

## Hard rules

1. Minimum three transcripts from separate calls spanning weeks or months. With fewer, stop and run `transcript-ideas` on each transcript instead.
2. Every claim in the memo cites at least two transcripts. An insight supported by one call is not synthesis; move it to the handoff list for `transcript-ideas` and keep it out of the memo body.
3. Verbatim quote law. Evidence is character for character from the transcript, filler words included. Never paraphrase into evidence, never clean up grammar, never stitch two lines into one. Every quote names its call and carries its date.
4. The contradiction list is for the founder's eyes only. Mark it PRIVATE at the section header. Contradictions are strategy signal, never public content without the founder's explicit consent. Never fold a contradiction into an idea candidate or any public-facing section.
5. Never manufacture an evolution arc from noise. Two mentions is coincidence. A pattern needs three or more appearances across separate calls, and an arc needs a dated before-quote and a dated after-quote where the shift is visible in the founder's own words, not in your interpretation. Absence of a mention is not evidence of anything.
6. An empty memo is valid. If nothing crosses two transcripts, say so plainly and hand every voltage moment to `transcript-ideas`.

## Procedure

1. Inventory the inputs: for each transcript record the date, call type (investor, customer, prospect, podcast, internal), and who else was on it. Sort chronologically. Confirm hard rule 1 before going further.
2. Read the entire set before extracting anything. A pattern only exists against the whole corpus.
3. Mine five lanes, tagging every hit with call and date:
   - Recurring themes. The thing the founder explains on every call is their best content pillar candidate, and the exact recurring phrasing is their natural lexicon. Capture that phrasing verbatim, not your summary of it.
   - Position evolution. What they believed in the earliest calls versus what they say now. The shift is the story: "I was wrong about X" is the highest-trust format that exists, and it can only be built from dated endpoints.
   - Contradictions. Different answers to different audiences, like one number for an investor and another for a customer. These go to the private list under hard rule 4.
   - Inbound demand. Questions other people keep asking the founder. A question repeated across calls by different people is proof of audience demand for that topic.
   - Proof accumulation. Numbers and outcomes scattered across calls that combine into a receipts-led claim no single call contained.
4. Apply the thresholds: three or more separate calls to call something a pattern or arc, two or more transcripts behind every memo claim, a date on every quote.
5. Write the memo in the format below. Rank themes by recurrence count, highest first.
6. Build 3 to 5 idea candidates that only cross-transcript vision could produce: an evolution arc, an accumulated receipt, a demand-validated topic, a pillar the founder proves on every call. Score and format each with the `transcript-ideas` rubric and candidate block, with one change: the quote field carries quotes from at least two transcripts, each dated.
7. Close with the handoff list: single-call voltage moments this skill could not use, pointed at `transcript-ideas`.

To see this procedure beat per-call summaries on the same inputs, read [references/bakeoff.md](references/bakeoff.md).

## Memo format

```markdown
# Synthesis memo: {founder}, {date range}, {N} transcripts

## Themes by recurrence
1. {theme}: {k} of {N} calls. Recurring phrasing: "{verbatim}" ({call}, {date}); "{verbatim}" ({call}, {date})

## Evolution arcs
- {arc name}
  - Before: "{verbatim}" ({call}, {date})
  - After: "{verbatim}" ({call}, {date})
  - Story it suggests: {one sentence}

## Contradictions (PRIVATE: for {founder} only, never public without consent)
- {what was said to whom versus whom}: "{verbatim}" ({call}, {date}) versus "{verbatim}" ({call}, {date})

## Demand signals
- "{the question}" asked on {call}, {date} and {call}, {date}

## Proof ledger
- {number or outcome} ({call}, {date}) plus {number or outcome} ({call}, {date}) adds up to: {the receipts-led claim}

## Idea candidates
{transcript-ideas candidate blocks, each quoting 2+ transcripts}

## Handoff to transcript-ideas
- {single-call moment} ({call}, {date})
```

## Personalization

Reads from `my-story/`:

- `pillars.md`: recurring themes are matched against declared pillars. A theme that recurs across calls but matches no pillar is flagged as a missing-pillar candidate, which is often the most valuable line in the memo.
- `narrative.md`: evolution arcs are checked against the larger arc the founder is telling; an arc that advances the narrative outranks an equally sharp one that does not.
- `lexicon.md`: recurring phrasing is compared against the recorded lexicon; phrases the founder uses on three or more calls that are not in the file are proposed as additions.

With an empty pack the skill still works: rank themes by recurrence alone, set pillar to null in candidates, and turn the lexicon comparison into a seed list of proposed entries. Filling the pack turns theme ranking and candidate scoring from counting into strategy.

## Examples

Bad: theme evidence written as "he often says storytelling and strategy are basically the same thing."
Better: theme evidence written as: "if you can't clearly explain what your company does, you probably don't have a clear strategy" (customer kickoff, 2026-02-10); "the gaps in the narrative are usually gaps in the strategy, that's the whole thing" (podcast recording, 2026-03-02).
Why: the bad one paraphrases and cites nothing, so it cannot be verified or drafted from; the better one is verbatim, dated, and cites two calls.

Bad: "Evolution arc: in January he said cadence matters, and in March he never mentioned cadence, so he has clearly moved on from consistency."
Better: "Evolution arc, volume to narrative: 'the founders who win just post more, volume is the whole game' (prospect call, 2026-01-14); 'we doubled posting for a quarter and pipeline did not move, that one's been bugging me' (podcast, 2026-02-19); 'I was wrong about volume, cadence was never the lever' (internal strategy, 2026-03-26)."
Why: the bad one builds an arc from two points, one of which is an absence; the better one has three dated appearances and the reversal is in the founder's own words.

Bad: idea candidate "He told his investor churn was flat but admitted to a customer it spiked in Q1. Vulnerability posts perform, so draft this."
Better: a PRIVATE contradiction entry: both quotes, both dates, both audiences, and one line noting the messaging gap the founder should reconcile before it surfaces on its own.
Why: a contradiction is a strategy signal for the founder, not content; publishing it without consent burns the exact trust this skill exists to build.

## Self-check

- Does every claim in the memo cite at least two transcripts, with every quote verbatim and dated?
- Is every pattern and arc backed by three or more separate calls, or did I promote a coincidence?
- Is the contradiction section marked PRIVATE, and did none of its material leak into candidates or themes?
- For each idea candidate: could a single transcript have produced it? If yes, it belongs on the handoff list.
- Do the rubric scores vary honestly across axes and candidates?
- If the memo came back empty, did I say why and hand everything off instead of padding?

## Related skills

- `transcript-ideas` works one call at a time; this skill works across calls. Route every single-transcript insight there via the handoff list, and accept its candidate outputs as inputs here.
- Idea candidates feed the brief writer, drafting skills (`linkedin-post`, `short-form-script`), and the idea bank; `hooks` sharpens each candidate's hook direction before drafting.
- `voice-pack` benefits from the lexicon proposals: recurring phrasing found here is raw material for `my-story/lexicon.md`.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
The full Agentic Marketing System runs this against your real calls with a human editor and a per-post learning loop; narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
