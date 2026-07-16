---
name: post-to-thread
description: Turn a finished LinkedIn post into a native X thread, recut beat by beat instead of chopped at 280 characters. Use when the user wants a post adapted for X, asks to "thread this", or wants to cross-post to X without reposting. Covers beat extraction, the standalone first tweet, per-tweet compression, and re-landing the ending for X.
---

# Post to Thread

A LinkedIn post and an X thread are two performances of one argument, not one text in two boxes. This skill extracts the post's beat structure, then recuts each beat as a tweet that reads native to X. The chop test: if the thread could have been produced by splitting the post at 280 characters, the job is not done.

## Hard rules

1. Never post identical text to both platforms on the same day. Native adaptation is the point; this is `one-recording-everything`'s law applied to two channels. A single carried-over line is quotation; a carried-over post is a repost.
2. Tweet 1 obeys the full hook law and stands alone as a post. Most readers see only tweet 1; it must earn the expand on its own. No thread-announcing cliches: no "a thread", no thread emoji, no numbered teaser, no pointing back at LinkedIn.
3. One beat per tweet: one claim, one example, or one number. Never split a beat mid-sentence across tweets. Full mechanics live in `platforms/x.md`; read it, do not restate it.
4. Cutting is translation, not summary. An 18-word LinkedIn sentence often becomes a 9-word tweet that makes the same move harder. Never trade a specific for an abstraction to save characters; drop connective tissue instead.
5. Verbatim quotes stay verbatim through the recut. If a quote will not fit with room around it, give it its own tweet; never trim inside the quotation marks.
6. Numbers keep their units. "500% in 90 days" never becomes "5x fast"; "28 days" never becomes "a month".
7. Every tweet passes the standalone test: quoted out of context, it must not embarrass the argument.
8. The thread ends on the strongest claim. No recap tweet, no "follow me" tweet unless `my-story/` shows approved CTAs. Every thread passes the `anti-ai` scan and `draft-qa` before the user sees it.

## Procedure

1. Read the source post in full and extract its beat structure before touching a word: name the hook move, each turn, and the landing, one line per beat. Include trailing matter (link lines, sign-offs, CTAs) and mark it as distribution, not argument. If you cannot name a beat's job, you do not understand the post yet; reread, do not start cutting.
2. Write tweet 1. Load the `hooks` skill and hold its full law. Usually tweet 1 is the post's hook recut for X compression; sometimes the post's landing is the stronger opener and gets promoted. Test it as a standalone post first, as a thread opener second.
3. Recut the body, one beat per tweet, in the post's beat order. For each beat, keep the specific that carries it and the move it makes, and cut everything that only connected it to the previous paragraph. Read each tweet alone after writing it.
4. Re-land the ending. The arc mirrors the post's arc, but X endings run harder and shorter: the LinkedIn ending usually becomes one landing tweet and nothing after it. Trailing link lines and sign-offs from the source do not travel; a link costs reach, so if the user needs the link distributed, that is a separate post whose point is the link.
5. Check every tweet against `platforms/x.md`: length, line breaks as the only pacing tool, register consistency, thread constraints, spacing between beats.
6. Run the standalone test on every tweet, then the `anti-ai` scan, then `draft-qa`. Cut any tweet the arc does not need; a shorter thread that holds beats a longer one that sags.
7. Sequence. Schedule the thread on a different day than the LinkedIn post, or lead with whichever platform the user's pack prioritizes.

For a worked example on a real post, baseline chop against with-skill recut annotated beat by beat, see [references/bakeoff.md](references/bakeoff.md).

## Personalization

Reads from `my-story/`:

- `voice-model.md`: the user's measured register. The X register may differ from the LinkedIn register (capitalization, contraction rate, sentence length); where the pack only measures LinkedIn, keep the voice and adopt X compression, and tell the user which register choices were guesses.
- `anti-patterns.md`: banned words, structures, and closers; they apply per tweet, not per thread.
- `lexicon.md`: the user's words survive compression first; cut around them, not through them.

With an empty pack the skill still works: measured register, no CTAs anywhere, endings that stop on the claim. The recut will be craft-correct but generic to the user's voice. Run `voice-pack` once to fix that.

## Examples

Tweet 1.

Bad:
> Yesterday I posted on LinkedIn about why we killed our weekly demo. It resonated, so here it is as a thread. 1/9

Better:
> We ran the same weekly demo 40 weeks in a row. The week we killed it, signups went up.

Why: the bad one announces a thread, promises a length, and leans on another platform for its authority; the better one stands alone and earns the expand.

Compression.

Source sentence (18 words):
> We spent eleven weeks rebuilding the onboarding flow because we assumed new users were confused by the dashboard.

Bad recut:
> We made some wrong assumptions about onboarding and learned an expensive lesson.

Better recut:
> Eleven weeks rebuilding onboarding. The dashboard was never the problem.

Why: the bad one is a summary that loses the number and the specific; the better one is a translation that keeps both in half the words.

The landing.

Bad final tweets:
> So that's the full story. The big lesson: talk to users before you rebuild anything.
>
> Follow me for more breakdowns like this.

Better final tweet:
> The rebuild cost eleven weeks. The question that made it unnecessary took ten minutes.

Why: the bad one recaps what the thread just said and bolts on an unapproved CTA; the better one lands the argument's hardest contrast and stops.

## Self-check

- Does tweet 1 work as a standalone post, with no thread announcement and no dependence on LinkedIn?
- Can you name the one beat each tweet carries? Does any tweet carry two beats, or half of one?
- Did every verbatim quote survive untouched, and does every number keep its units?
- Would any tweet, screenshotted alone, embarrass the argument?
- Is the last tweet the strongest claim, with nothing performing after it?
- Is the thread text genuinely different from the post, and is it scheduled for a different day?
- Did the thread pass the `anti-ai` scan and `draft-qa`?

## Related skills

- `linkedin-post`: writes the source post; if the source draft is weak, fix it there before threading it.
- `hooks`: pressure-tests tweet 1 as a standalone opener; always loaded in step 2.
- `format-remix`: the same beat-extraction muscle pointed at someone else's post; use it when borrowing a structure, not translating your own.
- `one-recording-everything`: owns multi-channel sets from a recording; use it when X is one channel of several, and this skill for the X leg.
- `anti-ai` and `draft-qa`: mandatory gates before any thread reaches the user.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
