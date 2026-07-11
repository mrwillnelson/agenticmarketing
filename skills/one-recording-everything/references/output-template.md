# Output Template: the single deliverable

One recording produces one artifact. Everything the set contains lives in this one document, in this order. Never scatter the outputs across separate messages, files, or follow-ups. If a section has no content in this set, keep the heading and write "none in this set" so the reader knows it was considered, not forgotten.

## Filling rules

- Every quote is verbatim from the transcript, with a timestamp. Never paraphrase inside quotation marks.
- Post drafts appear in full, exactly as they would publish. No outlines or summaries standing in for drafts.
- Every clip entry carries in and out timestamps plus the verbatim opening line inside the cut, so an editor can cut without watching the recording.
- The source-trace appendix is exhaustive: every claim, number, and named result in every piece maps to a transcript line. A claim with no row does not ship.
- Statuses in the plan table are one of: `planned`, `drafted, QA passed`, `timestamps delivered`, `outline delivered`, `cut`.

## The template

````markdown
# Content set: <recording title>

Recording: <what it was: webinar, podcast, customer call, founder riff>
Date: <recording date>
Thesis of the set: <one plain sentence every piece serves>

## Plan

| Piece | Channel | Source quotes (timestamps) | Status |
|---|---|---|---|
| Post 1: <working title> | LinkedIn | "<verbatim quote>" (MM:SS) | drafted, QA passed |
| Clip 1: <working title> | Short video | "<verbatim quote>" (MM:SS to MM:SS) | timestamps delivered |
| Newsletter: <working title> | Newsletter | "<verbatim quote>" (MM:SS to MM:SS) | drafted, QA passed |
| Article outline: <working title> | Blog | "<verbatim quote>" (MM:SS), "<verbatim quote>" (MM:SS) | outline delivered |

Sequencing: <which piece ships on which day, in order>

## Posts

### Post 1: <working title>
Source: MM:SS to MM:SS

<the full post draft, publish-ready>

## Clips

### Clip 1: <working title>
In: MM:SS. Out: MM:SS.
Opening line (verbatim): "<the exact first words inside the cut>"
Why this cut: <one sentence on the tension arc and why the out point lands>

## Newsletter section

### <working title>
Source: MM:SS to MM:SS

<the full section draft, publish-ready>

## Article outline (only when a mechanism moment earned it)

### <working title>
<section-by-section outline, each section anchored to a transcript timestamp>

## Source trace

| Claim | Piece(s) | Transcript line (timestamp) |
|---|---|---|
| <the claim as written in the piece> | Post 1 | "<verbatim transcript line>" (MM:SS) |
````

## Example

Bad delivery: the plan table in one message, two post drafts in a second, clip timestamps in a third, and a promise to trace sources "on request".

Better delivery: one document with the header, the plan table, both post drafts in full, the clip list with verbatim opening lines, the newsletter section, and a source-trace row for every claim, including a row like:

| Claim | Piece(s) | Transcript line (timestamp) |
|---|---|---|
| The refund went out before the customer asked | Post 1, Clip 1 | "We refunded him before he asked" (14:22) | 

Why: the bad delivery makes the user reassemble the set and takes the grounding on faith; the better delivery is auditable in one read.
