---
name: transcript-ideas
description: Extract scored post-idea candidates from a meeting, call, or podcast transcript, each with a working title, hook direction, angle, pillar, verbatim supporting quote, and a weighted rubric score. Use when turning a transcript or recording into content ideas, or when deciding whether a conversation contains anything worth posting.
---

# Transcript Ideas

A transcript is not a summary source. It is ore. Most of it is rock: logistics, status updates, polite agreement. The job is to find the few moments with voltage, turn each into a post-idea candidate a drafting skill can pick up, and score every candidate honestly so weak ones get filtered before anyone spends time drafting them.

## Hard rules

1. The supporting quote is verbatim from the transcript. Never paraphrase, never clean up grammar, never stitch two lines into one. Filler words stay. If no verbatim line of at least 40 characters supports the idea, score source truth at 30 or below or drop the candidate.
2. Zero candidates is a valid output. If the transcript has nothing post-worthy, say so plainly and stop. Never manufacture weak ideas to fill a quota.
3. Never surface anything the speaker would not want public: confidential specifics about third parties, private numbers attributed to a named company that is not the speaker's own, personal disclosures made in confidence, legal or HR matters. When the only sharp quote violates this, drop the candidate, do not sanitize the quote.
4. An angle is a belief change or a tension, never a topic. "Hiring is hard" is a topic. "Referral hires skip the exact screen that saves you" is an angle.
5. Score against the rubric, honestly. Low scores are useful signal for the filter downstream. Grade inflation defeats the entire point of scoring.
6. Read the whole transcript before extracting anything. Judge moments against each other. Two sharp candidates beat five thin ones.

## Procedure

1. Read the full transcript once without extracting. Note who is speaking, whose voice the content will carry, and what the conversation was actually about.
2. Mark voltage moments. Mine for: contradictions between what the speaker believes and what most people believe, costly mistakes with the cost named, confessions ("I was wrong about", "I almost", "I never told anyone"), sharp opinions stated without hedging, exact numbers and dates, unresolved tensions the speaker is still sitting with, and business outcomes hiding inside personal stories.
3. Skip without regret: scheduling and logistics, pleasantries and rapport talk, generic motivational takeaways, restatements of common advice, and anything hard rule 3 covers.
4. For each surviving moment, build a candidate: working title (punchy, specific), hook direction (what the opening line would point at, not the finished line), angle (the specific belief change or tension per hard rule 4), pillar it serves, audience (a specific reader segment, not "founders"), and the verbatim supporting quote.
5. Score each candidate on the rubric below. Name the weakest axis. When unsure what a 30 versus an 80 looks like on an axis, read [references/rubric-anchors.md](references/rubric-anchors.md).
6. Rank by score, keep the best few (rarely more than 5), and output them in the format below. If nothing survived, output the zero-candidate line with one sentence on why.

## Scoring rubric

Score each axis 0 to 100, then compute the weighted total and round.

- Thesis clarity (15%): one clear belief the reader should leave with. A topic is not a thesis.
- Source truth (20%): the quote is verbatim, at least 40 characters, and actually supports the thesis. Paraphrase or speculation scores low.
- Reader tension (15%): the idea enters a real fear, desire, contradiction, or surprise. Generic encouragement scores low.
- Hook potential (15%): the hook direction points at a concrete opening moment, not a topic label. Could a reader fail to keep scrolling?
- Originality (15%): a new angle versus the author's recent ideas and versus common platitudes in their niche.
- Narrative fit (10%): serves one of the author's pillars and advances their larger narrative.
- Audience clarity (10%): the reader segment is specific, like "seed-stage founders writing their first investor update", not "entrepreneurs".

## Output format

One block per candidate, in rank order:

```markdown
### Candidate 1: {working title}
- Hook direction: {what the opening line points at}
- Angle: {the belief change or tension, 1 to 2 sentences}
- Pillar: {pillar name, or null}
- Audience: {specific reader segment}
- Quote: "{verbatim from the transcript}"
- Score: {NN}/100 (weakest axis: {axis name})
- Axes: thesis clarity {NN}, source truth {NN}, reader tension {NN}, hook potential {NN}, originality {NN}, narrative fit {NN}, audience clarity {NN}
```

When nothing qualifies:

```markdown
No post-worthy candidates in this transcript. {One sentence on why, e.g. "It was a status sync: task updates and scheduling, no opinions or stories."}
```

## Personalization

Reads from `my-story/`:

- `pillars.md`: the author's content pillars; candidates are matched against these and narrative fit is scored against them.
- `narrative.md`: the larger arc the author is telling; candidates that advance it outrank equally sharp ones that do not.
- `icp.md`: who the reader is; sharpens both the audience field and the audience clarity score.

With an empty pack the skill still works: extract and score from the transcript alone, set pillar to null, and flag that narrative fit and audience clarity are provisional. Filling the pack turns those two axes from guesses into real filters.

## Examples

Bad: title "Thoughts on hiring from Tuesday's call", angle "hiring is hard for startups", quote "he said the hire took way longer than expected".
Better: title "The referral hire who cost us a quarter", angle "referral hires skip the exact screen that saves you", quote "I skipped the work trial because he came from a friend, and honestly that one call cost us the whole Q3 roadmap."
Why: the better one has a costly mistake, a belief change, and an untouched quote; the bad one is a topic wrapped around a paraphrase.

Bad: from a weekly status sync, candidate "5 lessons from shipping our new dashboard" with quote "yeah the dashboard shipped Friday, next up is the billing page."
Better: "No post-worthy candidates in this transcript. It was a status sync: task updates and scheduling, no opinions, mistakes, or stories."
Why: the bad one manufactures a listicle from logistics; zero candidates is the correct and more useful output.

Bad: candidate built on "our biggest customer told me their churn hit 40 percent and their board is panicking", a confidence about a named third party.
Better: from the same call, candidate on the speaker's own line "I realized I had been selling retention software while ignoring my own renewal emails for two months."
Why: the bad one publishes someone else's private trouble; the better one finds the speaker's own confession in the same conversation.

Real worked examples with real numbers: see [references/receipts.md](references/receipts.md).

## Self-check

- Is every quote character for character from the transcript, filler words included?
- Would the speaker be comfortable seeing each quote in public, and does no quote expose a third party?
- Is each angle a belief change or tension rather than a topic?
- Do the axis scores vary honestly, or did everything land suspiciously near 80?
- If the answer was zero candidates, did I say why instead of padding?

## Related skills

- Candidates feed `linkedin-post`, `short-form-script`, and `one-recording-everything` as their input briefs.
- `hooks` refines the hook direction into finished opening lines before drafting.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
