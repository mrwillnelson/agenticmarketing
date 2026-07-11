---
name: linkedin-post
description: Draft a LinkedIn text post from a transcript quote, idea, brief, or raw notes. Use when writing, rewriting, or tightening a LinkedIn post, or when turning source material into a post for the feed. Covers the mobile fold, line-break rhythm, body craft, length calibration, and endings that land.
---

# LinkedIn Post

Turn one piece of source material into one LinkedIn text post: a hook that survives the fold, a body where every line earns its place, and an ending that stops instead of performing. The post argues one thesis with the source's own specifics, in the user's measured voice.

## Hard rules

1. One thesis per post. If the draft argues two things, it is two posts. Hand the spare to `format-remix`.
2. The first ~210 characters must work alone; that is all mobile shows before "...see more". Hook craft belongs to the `hooks` skill; load it, do not improvise openers here. Full fold and formatting constraints live in `platforms/linkedin.md`.
3. Every claim of proof traces to the source. Never invent numbers, results, quotes, or stakes. When the source phrase is sharper than your paraphrase, use the source phrase verbatim.
4. Paragraphs run 1 to 3 sentences. Readers see a narrow phone column; white space is pacing, not decoration.
5. Length comes from the user's measured range in `my-story/voice-model.md`, not from a universal rule. With an empty pack, calibrate to roughly 80 to 300 words and let the idea's weight pick the point inside that band.
6. End on the strongest concrete beat. No fake punchline, no inspirational bow, no summary of what the post just said. A genuine question may close the post only if `my-story/voice-model.md` or approved examples show the user ends on questions.
7. No engagement bait: no "Agree?", no "Thoughts?", no "Who else has felt this?". No hashtags unless the user's pack shows approved posts that use them.
8. Every draft passes the `anti-ai` scan and the `draft-qa` gate before the user sees it. The gate is hard, not advisory.

## Procedure

1. Read the source in full: transcript quote, idea, brief, or raw notes. Mark the sharpest specifics: numbers, named moments, verbatim phrases, costs, reversals.
2. Frame the post with the `story-context` skill: who this is for, which pillar it serves, what the reader should think or feel after. Write the thesis as one plain sentence before drafting anything.
3. Generate hook candidates with the `hooks` skill and pick the finalist that best serves this thesis. Confirm it survives the fold check.
4. Draft the body top to bottom:
   - Open with the hook, then pay it off fast. No throat-clearing between hook and substance.
   - Advance one beat per paragraph: the situation, the specific, the turn, the meaning. Order beats so each line creates the need for the next.
   - Carry the proof in specifics from the source: the real number, the actual sentence someone said, the concrete cost. Abstract restatement is where posts die.
   - Land the ending on the strongest concrete beat, then stop. If a line after it explains, summarizes, or inspires, that line goes.
5. Self-edit at phone width and cut 20 to 30% by word count. Kill setup sentences, duplicate beats, hedges, and any line that restates its neighbor. If cutting breaks the argument, the argument had filler load-bearing; restructure, do not pad back.
6. Check length against the user's measured range from `my-story/voice-model.md`. Trim or deepen based on what the idea needs, never to hit a number.
7. Run the `anti-ai` scan on the full draft. Rewrite anything it flags.
8. Run `draft-qa` as the final gate. Only a passing draft goes to the user.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: measured word-count range, sentence rhythm, whether question endings are allowed.
- `anti-patterns.md`: the user's banned words, structures, and closers; hard rejects during self-edit.
- `lexicon.md`: words the user actually uses and words they never would; swap vocabulary to match.
- `hooks.md`: approved past hooks; the finalist should sit naturally beside them.
- `pillars.md`: the content pillars this post should serve; used during framing in step 2.

With an empty pack the skill still works: default to the 80 to 300 word band, standard rhythm, no question endings, no hashtags. The output will be craft-correct but generic to the user's voice. Run `voice-pack` once to fix that.

## Examples

Endings.

Bad ending:
> ...So we rebuilt the onboarding email from scratch. At the end of the day, growth is about listening to your customers. Agree?

Better ending:
> ...So we rebuilt the onboarding email from scratch. Reply rate went from 2% to 19% in one send.

Why: the bad one bolts on an inspirational bow plus engagement bait; the better one stops on the strongest concrete beat and trusts it.

Line-break rhythm.

Bad rhythm:
> I spent three years thinking our churn problem was a product problem, so we shipped feature after feature while the number never moved, and it was only when I sat in on six cancellation calls in one week that I heard the same sentence four times, which was that nobody knew the report existed, and that is when I realized we had a discovery problem wearing a churn costume.

Better rhythm:
> I spent three years treating churn as a product problem.
>
> We shipped feature after feature. The number never moved.
>
> Then I sat in on six cancellation calls in one week. Four people said the same sentence: "I didn't know that report existed."
>
> We never had a churn problem. We had a discovery problem.

Why: the bad one is one breathless paragraph that dies at phone width; the better one gives each beat its own line and lets white space carry the turn.

## Self-check

- Do the first ~210 characters work alone, before "...see more"?
- Is there exactly one thesis, and does every paragraph advance it?
- Does every number, quote, and stake trace to the source?
- Is any paragraph longer than 3 sentences?
- Did the self-edit pass actually remove 20 to 30%?
- Is the last line the strongest line, with nothing performing after it?
- Does the length sit inside the user's measured range, or the default band if the pack is empty?
- Did the draft pass both the `anti-ai` scan and `draft-qa`?

## Related skills

- `hooks`: generates and pressure-tests the opening line; always loaded in step 3.
- `story-context`: frames audience, pillar, and intent before drafting; loaded in step 2.
- `anti-ai`: scans the draft for machine tells; mandatory before showing the user.
- `draft-qa`: the final quality gate on the full post; mandatory before showing the user.
- `format-remix`: turns a finished post, or a spare thesis cut from this one, into other formats.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by [64stories](https://64stories.co).
The full Agentic Marketing System runs this against your real calls, with a human editor and a per-post learning loop.
