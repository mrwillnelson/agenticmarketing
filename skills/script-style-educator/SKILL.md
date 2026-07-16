---
name: script-style-educator
description: The teach-one-thing style for short-form video scripts. Use when the script's job is to leave the viewer able to do one concrete thing, such as a how-to, a tactic, a process walkthrough, or a mistake to avoid, phrased like "teach", "show how", "explain how I do X", or "make a tutorial-style video". Loads on top of short-form-script, which owns structure and pacing; this module owns the teaching arc.
---

# Script Style: Educator

Make the viewer able to do one thing they could not do 60 seconds ago. `short-form-script` owns the frame: hook, foreshadow, execution, payoff, length bands, retention pacing, output format. This module shapes those beats into a teaching arc: promise, steps, proof, takeaway. Do not restate or override the parent; where this skill is silent, the parent decides.

## Hard rules

1. One lesson per script, ruthlessly. If the outline contains "and also", cut at the "and". The second lesson is its own script; note it and move on.
2. Teach from scars, not manuals. The lesson must come from something the founder actually did: a project shipped, a mistake paid for, a result measured. Generic best practices the founder has not lived are out of scope for this style.
3. 2 to 4 steps, maximum. Needing five or more steps means the lesson is too big. Shrink the lesson until it fits; never compress by making steps vaguer.
4. No throat-clearing. "Today I want to talk about", "in this video", "let's dive in", "before we get started" are banned. The promise is the first thing out of the mouth.
5. Proof is real or absent. Show the thing working on screen, or cite the founder's own measured result. Never invent numbers, and never borrow someone else's result as if it were yours. A script with no honest proof drops the proof beat rather than faking one.
6. Demo beats description. Any step that can be shown on screen gets shown, with the spoken line narrating the action. Describing a process you could have demonstrated is a downgrade.

## The arc, mapped onto the parent's frame

- Promise (parent's hook plus foreshadow): what the viewer will be able to do by the end, stated as an ability, not a topic. "How to X" is a topic; "you'll be able to X in one take" is a promise.
- Steps (parent's execution): 2 to 4 beats, one step per beat. Each step is an action with a visible finish line, not a principle.
- Proof (late execution): the step sequence shown working, or the founder's own real result attached to it. Proof placed after the steps also serves the parent's retention dip.
- Takeaway (parent's payoff): the lesson compressed to one line a viewer could repeat to a colleague tomorrow without the video. Then hard cut, per the parent.

## Procedure

1. Find the scar. Ask what the founder actually did that produced this lesson: the project, the client, the failure, the number. If no lived source exists, this style is the wrong one; stop and say so.
2. Size the lesson to fit 2 to 4 steps. If honest steps run past four, split the lesson and bank the rest as future scripts.
3. Write the promise as an ability with a deadline: what the viewer can do, by when. Check it against the video fold with the `hooks` skill.
4. Draft the steps as actions. Then run the curse of knowledge check on each: would a smart outsider execute step 2 with only step 1 behind them, or is there a step 1.5 living in your head? Every gap gets either a spoken half-line that closes it or a simpler step that removes it.
5. Choose the proof. Prefer a demo the camera can see. Otherwise cite one real, measured result from the founder's own work, with the number exact. If neither exists, cut the proof beat; do not pad.
6. Compress the takeaway until it survives being repeated secondhand. If it needs a sentence of setup, it is not compressed yet.
7. Hand back to the parent: length band, retention pacing, read-aloud pass, and output format all follow `short-form-script`.

## Choosing this style

- Educator: the source is something the founder did that a viewer can replicate. The viewer leaves with an ability.
- Storyteller: the source is something that happened, and the value is living through it. The viewer leaves with a feeling and a lesson implied, not stepped.
- Contrarian: the source is a belief the audience holds that the founder's experience disproves. The viewer leaves with a changed mind.
- Operator: the source is how the founder runs the business, shown from inside with real numbers. The viewer leaves with trust, not a to-do list.

If the draft keeps reaching for "step one" language, it wants to be educator. If the steps keep turning into scenes, hand it to storyteller.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: sentence rhythm and register for the spoken lines, especially how the founder states instructions.
- `lexicon.md`: the founder's own names for tools, steps, and processes. Teach in their vocabulary; renamed steps get rewritten on camera.
- `pillars.md`: the content pillars. Pick lessons that sit inside a pillar so the teaching compounds instead of scattering.

With an empty pack the skill still works from the source material, but lessons may drift off-pillar and the steps will sound like a generic tutorial channel. Run `voice-pack` once to fix that.

## Examples

Bad (throat-clearing topic): "Hey everyone. Today I want to talk about how we approach LinkedIn content for CEOs and why it matters so much."
Better (ability promise): "We grew a CEO's LinkedIn 500% in 90 days. The system takes three steps and you can run it Monday."
Why: the bad one burns the first 3 seconds on a banned opener and promises a topic; the better one opens on a real result and promises an ability with a deadline.

Bad (manual, no scar): "Best practice is to post consistently, engage authentically, and provide value to your audience over time."
Better (scar): "We shaped every post on a call with the CEO until it sounded like him. The ones he would not say out loud, we killed."
Why: the bad one is advice from nowhere that anyone could paste; the better one is a step the founder actually ran, with the judgment call included.

Bad (curse of knowledge): "Step two, pull the strongest story out of the call."
Better (gap closed): "Step two, reread the call notes and mark every place he corrected himself or lowered his voice. That is where the strongest story hides."
Why: the bad step assumes the viewer already knows what strong looks like; the better one hands over the founder's private heuristic, which was the actual step 1.5.

Bad (description where a demo fits): "Our process makes it really fast to turn one call into a week of posts."
Better (demo narrated): "Watch this. I paste the call transcript, mark the three sharpest moments, and that first one is Monday's post."
Why: the bad line claims speed; the better one spends the same seconds proving it on screen.

## Self-check

- Is there exactly one lesson, and does it come from something the founder actually did?
- Are there 2 to 4 steps, each an action a smart outsider could execute in order, with every step 1.5 spoken or removed?
- Is the promise an ability, stated before anything else, with zero throat-clearing?
- Is the proof shown or measured, with the number exact, or honestly absent?
- Was every showable step shown instead of described?
- Could a viewer repeat the takeaway to a colleague tomorrow, in one line, without the video?
- Did the script pass the parent's own self-check, including the read-aloud timing?

## Related skills

- `short-form-script`: the parent. It owns structure, length bands, pacing, and format; load it with this module, always.
- `hooks`: pressure-test the promise line against the video fold.
- `talking-head-notes`: when the founder riffs from bullets instead of reading a script, convert the arc to notes with that skill.
- Sibling style modules (`script-style-storyteller`, `script-style-contrarian`, `script-style-operator`): hand off per the selector above when the source is a story, a belief, or an inside look.

For a full worked comparison of a lecture-style baseline against this skill's output on the same lesson, see [references/bakeoff.md](references/bakeoff.md).

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
