---
name: voice-pack
description: Build the user's entire my-story/ pack from 10 to 30 of their own approved posts plus optional speaking transcripts. Use when onboarding a new user, when my-story/ is empty or stale, when other skills produce generic output, or when the user says "learn my voice" or "set up my pack". Produces a measured voice fingerprint, lexicon, anti-patterns with AI-tell exemptions, hook inventory, pillars, narrative draft, ICP skeleton, and verbatim gold examples.
---

# Voice Pack

Turn a corpus of the user's own writing into the `my-story/` pack that every other skill reads. The pack is evidence, not opinion: every claim about the user's voice traces to a measurement or a verbatim quote from their corpus.

## Hard rules

1. Measure, never claim. Every number in `voice-model.md` comes from running `scripts/fingerprint.mjs` on the actual posts. Claimed fingerprints ("writes short punchy sentences") are usually wrong. If you did not measure it, do not write it.
2. Never invent a voice from thin inputs. With fewer than 10 approved posts, build only what the evidence supports, put `status: stub` at the top of every generated file, and list exactly what is missing and how to fix it. Do not extrapolate a personality from 3 posts.
3. Examples are verbatim. Copy gold posts into `my-story/examples/` character for character, line breaks included. Never trim, fix, or improve them. Verbatim examples steer a model harder than any rule you can write.
4. Inputs must be the user's own approved words. Confirm the posts are theirs and still represent them. Exclude anything ghostwritten in someone else's voice, anything they now disown, and anything they flag as off-brand.
5. Every anti-pattern entry needs evidence: either zero occurrences across the corpus or an explicit user ban. Every exemption needs 2 or more verbatim corpus occurrences quoted next to it.
6. Mark everything inferred. Pillar names, narrative claims, and ICP guesses get a `[CONFIRM]` tag and a question for the user. Never present a derived fact as a stated one.
7. Do not fabricate `icp.md`. Fill only what the user has said; leave the rest as questions.

## Procedure

1. Collect inputs. Ask for 10 to 30 of the user's best approved posts, one post per file (paste order works too; split on clear boundaries and confirm the split). Optionally take 1 to 3 transcripts of them speaking. Ask them to drop anything they would not publish today.
2. Count the corpus. 10 or more posts: full pack. 4 to 9: partial pack, `status: stub` everywhere, name the gap. Under 4: stop, write only a stub `voice-model.md` explaining what to collect, and tell the user the fastest path (export their last quarter of posts, or record one 20 minute voice memo answering "what do you keep repeating to customers").
3. Fingerprint the posts (not the transcripts):

   ```bash
   node scripts/fingerprint.mjs posts/*.txt
   ```

   Capture median and range of post length, sentence-length buckets, sentences per paragraph, contraction rate per 100 words, person mix, and question rate.
4. Write `my-story/voice-model.md`. Record the measured numbers with the date and post count, then add what the script cannot see: register (how they address the reader), how they handle numbers and proof, how posts end. Quote one corpus sentence as evidence for each qualitative claim. If transcripts exist, fingerprint them separately and note where spoken voice diverges from written.
5. Write `my-story/lexicon.md`. Scan the corpus for recurring words and phrases (3 or more occurrences), signature constructions, and how they name their product, customers, and competitors. Add a "never uses" list: check candidate corporate vocabulary ("leverage", "delve", "excited to announce") against the corpus and list only confirmed absences with the count `0 of N posts`.
6. Write `my-story/anti-patterns.md` in two parts. Banned: structures and phrases absent from the corpus or explicitly rejected by the user. Exemptions: places where the user's authentic voice uses a pattern that generic AI-tell rules ban (staccato fragments, colon tee-ups, one-line paragraphs). Quote 2 or more corpus occurrences per exemption so `anti-ai` can honor it.
7. Write `my-story/hooks.md`. Copy the first line of every post verbatim, then tag each with its pattern: confession, contrarian claim, specific number, story cold open, question, direct address. Note which patterns dominate and which never appear.
8. Write `my-story/pillars.md`. Cluster the posts by underlying theme into 3 to 5 pillars. Name each pillar in the user's own vocabulary, list which posts support it, and mark any pillar backed by fewer than 3 posts as `[CONFIRM] thin evidence`.
9. Write `my-story/narrative.md`. Draft the company story only from what the user provided: founding moment, the problem, who it serves, what changed. Tag every fact the corpus does not directly state with `[CONFIRM]` and end the file with the open questions.
10. Write `my-story/icp.md` as a skeleton: role, company stage, pain, watering holes, buying trigger. Fill only user-stated facts; phrase the rest as direct questions for them to answer inline.
11. Copy 3 to 5 gold posts into `my-story/examples/`, one file each, chosen for spread: different pillars, different hook patterns, different lengths. Verbatim.
12. Report back: pack status (complete or stub), the headline fingerprint numbers, the list of `[CONFIRM]` items awaiting the user, and what adding transcripts or more posts would improve.

## Fingerprint script

```bash
node scripts/fingerprint.mjs post1.txt post2.txt ...
```

Prints median and range of words per file, sentence-length distribution in buckets, sentences per paragraph, contraction rate per 100 words, person mix, and question rate. Run it once on posts and once on transcripts; never merge the two corpora in one run.

## Personalization

This skill writes the pack the other skills read:

- `my-story/voice-model.md`, `my-story/anti-patterns.md`, `my-story/lexicon.md`, `my-story/hooks.md`, `my-story/pillars.md`, `my-story/narrative.md`, `my-story/icp.md`, and `my-story/examples/`.

On a refresh run, read the existing pack first, re-measure against the new corpus, and update numbers in place. Keep user-confirmed facts and resolved `[CONFIRM]` answers; replace only what the new measurement contradicts. With an empty pack and no inputs, do not generate anything: ask for the posts.

## Examples

Bad voice-model entry: "Writes in a short, punchy, conversational style."
Better: "Median post 82 words (range 41 to 156, n=22). 38% of sentences are 5 words or fewer. 6.4 contractions per 100 words. Measured 2026-07-09 with fingerprint.mjs."
Why: the better one is falsifiable and reproducible; the bad one is a claim any writer could carry.

Bad anti-patterns entry: "Never uses one-line paragraphs (generic AI tell)."
Better: "Exemption: one-line paragraphs are authentic here. 14 of 22 posts contain at least one, e.g. 'Minute 12. The import screen.' Do not flag them in anti-ai scans."
Why: the corpus outranks the generic rule; banning the user's real habit erases their voice.

Bad thin-input move: 4 posts in, a confident full pack out, complete with invented pillars and a polished narrative.
Better: "status: stub. Fingerprint measured on 4 posts (too few for stable ranges). Pillars withheld: need 10+ posts. Missing: transcripts, founding story. Fastest fix: export last quarter's posts."
Why: a fabricated pack poisons every downstream skill; a stub tells the user exactly how to finish it.

Bad example handling: copying a gold post but fixing its typo and tightening two sentences.
Better: copying it byte for byte, typo included, and noting the typo in the report instead.
Why: edited examples teach the editor's voice, not the user's.

## Self-check

- Does every number in `voice-model.md` come from a script run on this corpus, with date and post count?
- Does every exemption in `anti-patterns.md` quote 2 or more verbatim occurrences?
- Would a diff of `my-story/examples/` against the source posts be empty?
- Is every inferred fact tagged `[CONFIRM]` with a question the user can answer inline?
- If inputs were thin, does every generated file say `status: stub` and name the gap?
- Did you avoid writing anything into `icp.md` the user never said?

## Related skills

- `story-context` loads the finished pack before any writing task; point users there after setup.
- `anti-ai` consumes the exemptions from `anti-patterns.md`; keep the exemption format quotable.
- `voice-match` re-measures drafts against `voice-model.md`; your numbers are its baseline.
- `hooks` reads `hooks.md` and `anti-patterns.md` when generating openers.
- `what-worked` feeds refresh runs: fold its winners back into `examples/` and `pillars.md`.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
The full Agentic Marketing System runs this against your real calls with a human editor and a per-post learning loop; narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
