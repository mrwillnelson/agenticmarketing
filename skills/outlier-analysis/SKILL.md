---
name: outlier-analysis
description: Extract why 10 to 20 top-performing posts from the user's niche worked, cluster them into recurring engines, and build a format library ranked by fit to the user's voice and pillars. Use when the user pastes outlier posts they admire or keep seeing in their feed, asks why these posts work or what is worth stealing, or wants formats to remix. Analyzes OTHER people's posts; structure gets extracted, voice never does.
---

# Outlier Analysis

An outlier post is evidence, not a template. This skill takes 10 to 20 top performers the user pasted from their niche, extracts the machinery each one runs on, proves every claim with a quoted line, clusters the machinery into 3 to 5 recurring engines, and keeps only the engines that fit the user's voice. What comes out is a format library `format-remix` can consume directly. What never comes out is another person's wording, story, or borrowed credibility.

## Hard rules

1. Never attribute why a post worked without quoting the evidence line from the post itself. "It is relatable" with no quote is a guess wearing a conclusion.
2. Separate what is copyable from what is not, in every card and every entry. Copyable: hook pattern, beat order, rhythm profile, engine. Not copyable: wording, voice, the author's story, their results, their credibility. Only the first list enters the library.
3. A post that worked because of WHO posted it gets flagged authority-dependent, not template-able. The test: would the same text from an unknown account with 400 followers still work? If the honest answer is no, the engine is the author, and the author cannot be copied.
4. Engagement bait engines get named and rejected, never laundered into the library under a flattering label. Comment-gates with nothing behind them, manufactured outrage, curiosity loops that never pay off, tag-a-friend mechanics: identify, label, exclude.
5. An engine needs 3 or more unflagged posts behind it to enter the library as proven. Below 3 it is listed as an untested lead, never as a pattern.
6. Fit is judged against the user's measured voice, not against taste. A staccato-heavy engine is a bad fit for a long-sentence voice; say so plainly and rank it down instead of quietly including it.
7. This skill outputs analysis and skeletons only. It never rewrites or imitates a source post; drafting belongs to `format-remix`, behind its overlap gate.

## Procedure

1. Collect the pasted posts, 10 to 20 of them, each with whatever context exists: author's rough follower count, whether the author is a recognized name in the niche, and engagement if known. Below 10 posts, proceed but say the clusters will be thin and rule 5 will bite.
2. Write an extraction card per post. Every field cites a quoted line from the post:
   - Hook pattern: the emotional lens the first line pulls (Aha, Oh shit, WTF, Hell yeah, Me too) and the one specific question it leaves open.
   - Structural engine: confession arc, teardown, receipts-led, list-with-a-spine, identity mirror, or name a new one by its job.
   - Rhythm profile: paragraph sizes in order, sentence length arc, where the shortest sentence sits.
   - Proof type: numbers, story, authority, demonstration.
   - Psychological driver: recognition, status, fear of missing a shift, permission.
   See [references/bakeoff.md](references/bakeoff.md) for three fully worked cards and what a shallow take misses.
3. Run the flag pass on every card: authority-dependent (rule 3 test) and engagement bait (rule 4 list). Flagged posts stay visible in the analysis with the flag stated; they never seed a library entry.
4. Cluster the unflagged posts into 3 to 5 recurring engines. Cluster on engine plus driver, never on topic; two posts about hiring can run completely different machinery.
5. Rank each engine by fit, on two axes: pillars (does the engine suit what the user actually talks about, per `my-story/pillars.md`) and voice (the engine's rhythm profile against `my-story/voice-model.md`). Give every engine a fit call: good, workable with adaptation, or bad fit. State bad fits out loud with the conflicting numbers; do not drop them silently.
6. Write one library entry per viable engine in the format below, and append the dated block to `my-story/format-library.md`, newest block at the top. Create the file if it does not exist. `format-remix` reads these entries directly.

## The library entry

```markdown
## Library as of 2026-07-11

Source: 14 posts from the user's niche. 2 flagged authority-dependent, 1 rejected as bait.

### Receipts-led process reveal
- Engine: permission ("this is attainable"), proof by numbers.
- Skeleton: hook is a bare result with no adjectives; beats: result, method claim, the one secret, named precedents, numbered process, open invitation.
- Rhythm: one-line paragraphs throughout, one list, no landing flourish.
- When to use: you hold a real number the reader would envy and a process you actually follow.
- Risk: without a real number it collapses into a pitch. Never estimate one.
- Fit: good (one-line paragraphs match the voice model). Seen in 4 of 14 posts.
```

Keep each entry under 10 lines. The skeleton must contain zero phrases from any source post; if a beat can only be described by quoting, abstract it until it could describe a hundred posts.

## Personalization

Reads from `my-story/`:

- `pillars.md`: the subject-matter axis of the fit ranking in step 5.
- `voice-model.md`: the measured rhythm the engines are scored against; the source of every "bad fit" call.
- `anti-patterns.md`: an engine whose skeleton requires a banned move gets capped at bad fit, with the banned move named.

Writes to `my-story/`:

- `format-library.md`: the dated block from step 6, newest first. This is the only skill that writes it; `format-remix` reads it.

With an empty pack, extraction, flagging, and clustering all work, but step 5 degrades: every engine gets "fit unknown" and the ranking is by recurrence only. Say so in the output and suggest running `voice-pack` once.

## Examples

Bad: "Post 4 worked because it is relatable and punchy. Founders love authenticity."
Better: "Post 4 runs on recognition. The evidence line: 'Ask five leaders to explain what the company does. You’ll hear five different stories.' The reader has lived that meeting. Driver: recognition. Proof: demonstration, the reader can run the test today."
Why: the bad one is adjectives with no quote, so it cannot be checked or reused; the better one pins the claim to the line that does the work.

Bad: "Entry: the founder flex. Skeleton: state that your company just hit a huge number, then share one lesson from the ride."
Better: "Flag: authority-dependent. The load-bearing line is the author's own result, and the proof type is authority plus a number the reader cannot borrow. From an unknown account this text is a claim, not a hook. Not template-able; the lesson-after-result beat order is noted as an untested lead."
Why: the bad one launders someone's credibility into a template that will fail everyone who lacks it; the better one applies the rule 3 test and salvages only the structure, honestly labeled.

Bad: "Entry: community activation loop. Skeleton: promise a resource, ask readers to comment a keyword to receive it."
Better: "Flag: engagement bait. The engine is the comment-gate itself; strip the gate and nothing in the body earns a read. Rejected from the library. If the user wants distribution mechanics, that is a different conversation than format."
Why: renaming bait does not change what it trains the audience to expect; rule 4 exists so the library stays something a founder can run for years.

Bad: "The staccato teardown is the strongest recurring engine in the niche. Add it to the library at the top."
Better: "The staccato teardown recurred in 5 of 14 posts, the strongest cluster. It is also a bad fit: its rhythm runs 4-to-7-word sentences, and this voice model averages 18 words per sentence with long sentences outnumbering short. Ranked last, kept in the library with the conflict stated, usable only if the beat order is carried in longer sentences."
Why: recurrence in the niche and fit to the user are different questions; the better one answers both and says what adaptation would cost.

## Self-check

- Does every why-it-worked claim quote its evidence line?
- Does every card and entry separate copyable from not copyable?
- Did every post face the authority test and the bait check, and are flags stated, not hidden?
- Is every proven library engine backed by 3 or more unflagged posts, with thinner ones marked untested?
- Is every fit call made against the measured voice model, with bad fits stated in numbers?
- Could every skeleton describe a hundred posts, with zero phrases from any source?
- Did the dated block land at the top of `my-story/format-library.md`?

## Related skills

- `format-remix` consumes the library: hand it one entry plus the user's own story to draft with. This skill supplies skeletons; that skill writes.
- `what-worked` analyzes the user's OWN posts and produces weights; this skill analyzes OTHER people's. Run both: what-worked weights sharpen the fit ranking here.
- `hooks` pressure-tests first lines once drafting begins; the hook patterns extracted here are inputs to it, not finished hooks.
- `voice-pack` fills `voice-model.md` and `pillars.md`, which the fit ranking depends on.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
