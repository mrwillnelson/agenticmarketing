---
name: one-recording-everything
description: Turn one recording (webinar, podcast, customer call, founder riff) into a full content set of LinkedIn posts, clip timestamps, a newsletter section, and optionally a long-form article outline. Use when the user has a transcript or recording and wants multiple pieces from it, asks to "repurpose" a call, or wants a content plan from a single conversation. Orchestrates transcript-ideas, clip-finder, linkedin-post, newsletter, and short-form-script.
---

# One Recording, Everything

One recording carries more than one piece, but never carries every piece. This skill plans and produces a content set from a single recording: each output native to its channel, every claim grounded in the transcript, all of it sharing one thesis without sharing sentences.

## Hard rules

1. The transcript is the source of truth for every claim in every piece. No number, quote, result, or stake appears anywhere in the set unless the transcript supports it. When the speaker's phrasing is sharper than yours, use it verbatim.
2. Never paste the same text across channels. A post, a clip caption, and a newsletter section built from the same moment must each be written for their channel from the transcript, not adapted from each other. If two pieces share a sentence, one of them is wrong.
3. Each piece must stand alone. A reader who sees only the newsletter, or only one clip, gets a complete thought with no reference to "the post" or "the full episode" required to understand it.
4. The set shares a thesis, not sentences. Decide the recording's one strongest through-line before producing anything; every piece serves it from a different angle.
5. Depth over coverage. Three great pieces beat eight mediocre ones. If a candidate idea does not clearly earn its channel, cut it; do not pad the set to look productive.
6. Each piece routes through its dedicated sibling skill. Do not draft a post, script, or newsletter section inline in this skill; pass the exact verbatim quotes and timestamps forward and let the specialist skill do its job.
7. Every written piece passes `draft-qa` before the user sees it. The gate is hard, not advisory.
8. Never publish near-identical framings on the same day. Sequencing is part of the deliverable, not an afterthought.
9. The deliverable is ONE artifact following [references/output-template.md](references/output-template.md), never scattered outputs.

## Procedure

1. Ingest the recording. Get the full transcript with timestamps. Skim once end to end before extracting anything; the strongest moment is often a throwaway line, not the prepared material.
2. Run `transcript-ideas` to get scored candidates. Keep the score, the exact verbatim quote, and the timestamp for each. Do not re-mine the transcript yourself; that skill owns extraction.
3. Map each surviving candidate to channels by its nature, not by quota:
   - A confession or reversal with an arc suits a LinkedIn post, and often a clip of the moment it was said.
   - A mechanism explanation (how something actually works, why something failed) suits the newsletter section or an article, where there is room to build it.
   - A sharp 20-second moment with no arc around it suits clips only. Do not stretch it into a post.
   - A take the speaker fumbled live but that deserves a clean delivery suits `short-form-script` as a re-spoken original.
   - A candidate that fits no channel well gets cut, whatever its score.
4. Plan the set and write the plan table (format below) before producing anything. A typical set from one recording: 1 to 3 posts, 2 to 5 clips, 1 newsletter section, and optionally 1 long-form article outline. Name the shared thesis in one plain sentence at the top of the plan. If two planned pieces would argue the same angle the same way, merge or cut one.
5. Execute each piece through its sibling skill, passing the exact verbatim quotes and timestamps forward as source:
   - Posts: `linkedin-post`, one candidate per post.
   - Clips: `clip-finder` for in/out timestamps and clip logic.
   - Newsletter section: `newsletter`, framed as the deeper look the feed pieces could not carry.
   - Re-spoken take: `short-form-script`.
   - Article outline: build from the mechanism candidates, section by section, each section anchored to a transcript moment.
6. Sequence the set. Clips and the strongest post ship first. The newsletter follows and can reference the public discussion those pieces started. The article goes last, when the thesis has been tested in shorter forms. Spread pieces with similar framings across different days.
7. Run `draft-qa` on every written piece (posts, newsletter section, scripts). Clips and outlines get a manual pass against the hard rules instead.
8. Deliver the updated plan table with statuses, the sequenced schedule, and each piece labeled with its source timestamps, assembled as one artifact per [references/output-template.md](references/output-template.md).

## Output format

Open the deliverable with the shared thesis, then the plan table:

```
Thesis: <one sentence>

| Piece | Channel | Source quote (timestamp) | Status |
|---|---|---|---|
| Post: the refund that wasn't | LinkedIn | "We refunded him before he asked" (14:22) | drafted, QA passed |
| Clip 1 | Short video | 14:10 to 14:35 | timestamps delivered |
| Newsletter: why we refund early | Newsletter | 13:50 to 16:05 | drafted, QA passed |
| Article outline | Blog | 13:50 to 16:05, 31:12 to 33:40 | outline delivered |
```

Follow the table with the sequencing plan: which piece ships on which day, in order.

Read [references/output-template.md](references/output-template.md) when assembling the final deliverable; it defines the full single-artifact structure, from header and plan table through inline pieces to the source-trace appendix.

## Personalization

Reads from `my-story/`:

- `pillars.md`: the user's content pillars. Candidates that serve a pillar outrank candidates that do not; a set should not leave every pillar untouched.
- `narrative.md`: the user's larger running story. The set's thesis should sit inside it, and the sequencing should build on what the user has already published.

With an empty pack the skill still works: pick the thesis purely on transcript strength and sequence on freshness alone. The set will be internally coherent but disconnected from the user's ongoing story. Run `voice-pack` once to fix that. The sibling skills read their own pack files (voice, lexicon, hooks) independently.

## Examples

Pasted text vs native adaptation.

Bad set (same moment, same words everywhere):
> Post: "We refunded him before he asked. That one decision saved the account."
> Clip caption: "We refunded him before he asked. That one decision saved the account."
> Newsletter: "As I said on the podcast: we refunded him before he asked. That one decision saved the account. Anyway, on to this week's links."

Better set (same moment, three natures):
> Post: opens on the moment of the decision, builds the arc of noticing the problem before the customer did, ends on the saved account.
> Clip: 14:10 to 14:35, the unscripted beat where the speaker admits he almost did not send the refund.
> Newsletter: the mechanism behind the moment, when preemptive refunds make sense and when they train customers to expect them, with the quote as one exhibit.

Why: the bad set is one sentence wearing three hats; the better set gives each channel the job it is built for.

Coverage greed vs depth.

Bad plan: 4 posts, 8 clips, 2 newsletter sections, an article, and a thread, all from one 40-minute customer call, including a post built from a pleasantry about scheduling.

Better plan: 2 posts from the two genuinely strong candidates, 3 clips, 1 newsletter section, article deferred because no mechanism moment earned it.

Why: the bad plan mistakes volume for value and ships filler under the user's name; the better plan cuts to what the recording actually supports.

## Self-check

- Is the thesis written as one sentence, and does every piece serve it from a distinct angle?
- Does every claim, number, and quote in every piece trace to a transcript timestamp?
- Would any two pieces survive a diff without shared sentences?
- Does each piece stand alone for a reader who sees nothing else in the set?
- Did anything make the plan to hit a quota rather than on merit?
- Does the sequence ship clips and post first, newsletter next, article last, with no near-identical framings on the same day?
- Did every written piece pass `draft-qa`?

## Related skills

- `transcript-ideas`: mines and scores the candidates; always the first call.
- `clip-finder`: finds in/out timestamps and clip logic for the video moments.
- `linkedin-post`: drafts each feed post from its assigned candidate.
- `newsletter`: builds the newsletter section that carries the deeper mechanism.
- `short-form-script`: writes a clean re-spoken take when the live delivery fumbled a strong idea.
- `draft-qa`: the mandatory final gate on every written piece in the set.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories runs the managed GTM system for companies that want this operated for them.
