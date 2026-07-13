---
name: format-remix
description: Deconstruct a proven post into a content-free format skeleton, then rewrite it with the user's own story and voice. Use when the user shares a viral post, an outperformer in their niche, or one of their own winners and wants one like it, or asks to reuse a structure that worked. Borrows structure only; wording and story stay the user's.
---

# Format Remix

A proven post is two things fused together: a structure that works and a story that belongs to someone. This skill separates them, keeps the structure, and injects the user's story into it. The line it holds: format is borrowed, voice and substance are never borrowed.

## Hard rules

1. Remix formats, never plagiarize wording, and never claim another person's story or results as the user's. Borrowing a structure is craft; borrowing sentences or experiences is theft.
2. The skeleton contains zero phrases from the original. If a beat can only be described by quoting the source, abstract it until it could describe a hundred different posts.
3. No genuine material, no remix. If nothing in the user's transcripts, ideas, or `my-story/examples/` truly fits the format's engine, refuse and say what kind of story would fit. A borrowed format with forced content reads hollow.
4. The diff gate is a script, not a judgment call. `scripts/check-overlap.mjs` must pass: no shared phrase of 4 or more consecutive words, hook wording fully different.
5. The finished post stands alone for a reader who never saw the original. No dependence on the source for meaning, no winking at it.
6. The user's voice rules outrank the format. When a beat or the rhythm profile conflicts with `my-story/voice-model.md` or `anti-patterns.md`, bend the format.
7. Every draft passes the `anti-ai` skill's scan before a human sees it.

## Procedure

1. Deconstruct the source post into a format skeleton with four parts:
   - Hook pattern: the move the first line makes (confession, status reversal, impossible number), never its words.
   - Beats in order: each structural unit named by its job, e.g. confession, cost, turn, mechanism, landing.
   - Rhythm profile: paragraph sizes in order, sentence length arc, where the shortest sentence sits.
   - Engine: the psychological reason it works. Recognition, status reversal, receipts, permission, vicarious risk.
   When a beat or engine is hard to name, see [references/format-anatomy.md](references/format-anatomy.md).
2. Strip every content word. Read the skeleton back; if any phrase could only have come from this source, it is still content. Rewrite until the skeleton is pure structure (rule 2).
3. Select the user's material that fits the engine, not just the topic. Hunt through transcripts, the idea backlog, and `my-story/examples/` for a story with the same emotional mechanics: a real sacrifice for a status reversal, real artifacts for receipts, a lived situation for recognition. If nothing genuine fits, stop and invoke rule 3.
4. Rewrite beat by beat with the user's substance. Use the user's lexicon, hold the rhythm profile where it agrees with the user's voice, and drop it where it does not. If the user's material cannot support a beat, change the beat; never invent material to fit the structure.
5. Run the diff check, then read the remix cold:

```bash
node scripts/check-overlap.mjs original.txt remix.txt
```

The script fails on any 4+ consecutive shared words and on any shared content word between the two hooks. The cold read checks what no script can: the post must make complete sense to someone who never saw the source. Fix or discard anything that fails either test.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: the register and rhythm the rewrite carries; outranks the source's rhythm profile on any conflict.
- `lexicon.md`: the user's words for their own concepts; every beat is rewritten in these.
- `anti-patterns.md`: hard rejects; a beat that requires a banned move gets changed, not excused.
- `examples/`: the user's past posts; the first hunting ground for material in step 3, and a supply of remix sources in their own right (the user's winners are the safest formats to reuse).

With an empty pack, skeleton extraction still works, but step 3 has nothing to search, so the skill asks the user for a story directly, and step 4 rewrites in a generic register. Run `voice-pack` once to fix that.

## Examples

Invented source post for both pairs:

> I fired our highest performer in March.
>
> He closed 40% of new revenue last year. He also drove out the two engineers who built what he sold.
>
> It took me three quarters to admit his number was costing more than it earned.
>
> You do not have a culture. You have a list of things you tolerate.

Bad skeleton: "Open with firing the top performer, then the 40% revenue stat, then the engineers quitting, then the culture line."
Better skeleton: "Hook: status reversal, undoing an envied asset. Beats: confession, the metric that justified keeping it, the hidden cost, the delayed admission, an earned one-line landing. Rhythm: four short paragraphs, landing split into two blunt sentences. Engine: status reversal plus recognition."
Why: the bad one smuggles the source's content into the skeleton; the better one could shape a hundred different posts.

Bad remix: "I fired our biggest client in March. They drove 40% of our revenue. It took me three quarters to admit their number was costing more than it earned. You do not have a client list. You have a list of things you tolerate."
Better remix: "Last spring I turned down the contract that would have doubled us. The buyer wanted our roadmap rebuilt around one company. Saying yes meant spending a year building someone else's product. I told the team it was a close call. It was not, and pretending cost us two planning cycles. Revenue that requires becoming a different company is not growth. It is a rebrand."
Why: the bad one swaps nouns and keeps the sentences (check-overlap flags three shared phrases and the hook); the better one keeps only the beat order and the engine, and passes clean.

Real worked examples with real numbers: see [references/receipts.md](references/receipts.md).

## Self-check

- Could this skeleton describe a hundred posts, or only the source?
- Did `check-overlap.mjs` pass on both counts, phrases and hook?
- Is the material genuinely the user's, a story they would tell unprompted?
- Does the post stand alone for a reader who never saw the original?
- Does it obey the voice pack, and did it pass the anti-ai scan?

## Related skills

- `what-worked` and `outlier-analysis` supply source posts worth remixing, from the user's own winners and from their niche.
- `hooks` pressure-tests the remixed first line on its own.
- `linkedin-post` finishes the draft: formatting, fold check, final polish.
- `anti-ai` is the hard gate before any human sees the result.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
