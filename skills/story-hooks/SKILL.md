---
name: story-hooks
description: Open personal-narrative and confession posts mid-action instead of with setup. Use when the source is the author's own story, a mistake, a hard call, or a turning point, when a draft opens with backstory ("Last year...", "A few months ago..."), or when a confession reads like a humble-brag. Layers on the hooks skill.
---

# Story Hooks

Personal stories die in the first line more than anywhere else, because the writer starts where the story started instead of where it hurts. Nobody was there for the setup, so the setup earns nothing. Load `hooks` first; this skill changes where the opener lands when the source is the author's own story or confession.

## Hard rules

1. All `hooks` rules apply, especially source discipline, the single curiosity gap, the fold check, and the hard `anti-ai` gate. Where the two skills conflict, this one wins for personal-narrative and confession content.
2. Start mid-action, never with setup. "We were three weeks from missing payroll" beats "Last year we had a cash crisis." Dates, backstory, and context enter only after the first line has planted the reader inside the moment.
3. One small artifact carries the emotion: the note in the debrief, the deleted draft, the 2am Slack message. Name the artifact and let it do the work. Never name the feeling it is supposed to produce.
4. Confession discipline: a confession names a real cost the author paid. If the failure secretly flatters ("I cared too much", "we grew too fast", "I could not stop working"), it is a humble-brag. Discard it, do not reword it.
5. Vulnerability has a floor. Never open with anything the author would plausibly regret in a year: health, family, unresolved legal or personnel matters, or a wound still open. If the material is raw, ask the user before using it. When in doubt, park it.
6. Tense and person. Mid-action openers run in past tense; this happened, it is not a hypothetical ("Imagine you are..."). Confessions say I, never we. A shared pronoun spreads the blame until nothing is confessed.
7. Never sharpen the story beyond the source. No invented artifacts, dialogue, timestamps, or costs. A story with no usable moment is not ready to be a post.

## Procedure

1. Run the `hooks` procedure with the personal story as the source. Before mining, name the shape: narrative (something happened to the author) or confession (the author did something that cost them).
2. Find the peak, not the beginning. Locate the beat where the most was at stake or the belief broke. The post opens there. Chronology is for the body, and often not even there.
3. Hunt the artifact. Comb the source for the smallest concrete thing that was actually there: a message, a line in a doc, a number on a screen, a thing someone said verbatim. One artifact per opener. Two artifacts split the image.
4. Generate through Me too and Oh shit first; they dominate personal stories. Me too fires when the reader has privately lived the same moment. Oh shit fires when the reader watches a cost land in real time. Try other lenses only if these two produce nothing, and see the parent's references/hook-emotions.md when a lens is unclear.
5. For confessions, run the cost test: write the cost in one plain sentence before drafting. "I lost the client." "The launch slipped a quarter." If the sentence flatters the author or no such sentence exists, reshape as narrative or park the idea.
6. Check the floor from rule 5. If any candidate touches raw material, stop and ask the user before it goes further.
7. Verify tense and person against rule 6, then run the standard `hooks` gates: fold check, emotion named, one open question, anti-ai scan.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: sentence rhythm and person defaults the opener must carry.
- `anti-patterns.md`: banned openers and structures; setup phrasings the author has already rejected are hard rejects.
- `hooks.md`: approved past hooks; match the register of past story openers, especially how blunt past confessions were allowed to be.
- `examples/`: full published posts; study where past personal stories entered the action and how much context they withheld.

With an empty pack the skill still works, but the openers will guess at how much vulnerability the author tolerates. Run `voice-pack` once to fix that.

## Examples

Bad: "Last year we went through a cash crisis that taught me a lot about resilience."
Better: "We were three weeks from missing payroll and I still had not told the team."
Why: the bad one announces a story and pre-chews the lesson; the better one drops the reader mid-crisis with one open question and the tension of the withheld truth.

Bad: "I was devastated when we lost our biggest deal."
Better: "The 2am Slack message from our champion said to call him before I signed anything."
Why: the bad one names the feeling and leaves nothing to feel; the artifact makes the reader feel it and asks what the champion knew.

Bad: "My biggest flaw as a founder? I care too much about the product."
Better: "I rewrote our landing page eleven times while the two features customers kept asking for sat in the backlog."
Why: the bad one is a humble-brag wearing a confession's clothes; the better one admits a choice with a price, and the reader wants to know what it cost.

Bad: "We made some mistakes with our first key hire."
Better: "I skipped the last two reference calls because I was tired of interviewing."
Why: "we" and "some mistakes" spread the blame into fog; "I" plus one concrete shortcut owns the confession and leaves the consequence open.

For a full worked comparison on one story idea, a setup-first baseline against the mid-action rewrite, see [references/bakeoff.md](references/bakeoff.md).

## Self-check

- Does the first line start inside the moment, with every piece of setup pushed below the fold or cut?
- Is there exactly one artifact, and does it exist in the source?
- For a confession: does the one-sentence cost statement exist, and does it flatter no one?
- Would the author still stand behind this line in a year? If the material was raw, did you ask before using it?
- Past tense for the mid-action opener, and I rather than we for the confession?
- Which lens fired, Me too or Oh shit, and what one question stays open?
- Did every finalist pass the full `hooks` self-check: emotion named, fold, source, anti-ai?

## Related skills

- `hooks` is the parent. Load it first; this skill only moves the opener from setup to the moment.
- `meeting-to-post`: confessions usually surface on calls. Use it to pull the moment and verbatim lines out of a transcript before this skill shapes the opener.
- `short-form-script` consumes this skill when the story will be spoken; the mid-action line must survive being said aloud in the first three seconds.
- `milestone-hooks` is the sibling for company news. If the story's payoff is a launch, round, or growth number, that skill takes over.
- `draft-qa` re-checks the opener in the context of the full post.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
