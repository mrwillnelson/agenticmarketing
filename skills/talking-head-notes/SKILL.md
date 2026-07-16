---
name: talking-head-notes
description: Build a one-card shot sheet of bullet prompts for a talking-head take, in place of a word-for-word script. One memorized spoken hook, 3 to 5 beat bullets carrying the specifics, a landing direction, and a pickup list for retakes. Use when a founder sounds wooden reading a teleprompter, asks for filming notes or bullet points instead of a script, or wants to talk a video instead of reciting one. For a full word-for-word script, use short-form-script.
---

# Talking-Head Notes

Some founders read a script and die on camera. The words are fine; the delivery is embalmed. This skill produces the alternative to a script, not a style layered on top of one: a one-card shot sheet where the founder memorizes exactly one line, the spoken hook, and talks the rest from bullets that hold the specifics. Rambling is cheap because the edit removes it. Wooden is expensive because nothing removes it.

## Hard rules

1. The spoken hook is the only memorized line. Word for word, roughly 8 words, mid-thought, drilled until it comes out automatically. Everything after it is bullets.
2. Never write a full sentence after the hook. A full sentence on the card gets read, and reading is the failure mode this skill exists to prevent. Trigger phrases and fragments only.
3. Every beat bullet carries a specific: the number, the name, the moment. "CAC math: 1,900 to 640", never "talk about efficiency". A topic bullet makes the founder improvise the substance; a specific bullet makes them improvise only the wording, which is the part their mouth is good at.
4. 3 to 5 beats. One idea per take, same as a scripted take. A sixth beat is a second video.
5. The landing line is a direction, not words: "end on what the mistake cost". A memorized closer goes stiff exactly when the take should feel most alive.
6. One card. If the shot sheet cannot be read at arm's length in one glance per beat, cut beats, not font size.
7. Never invent numbers, names, results, or moments the source does not support. Bullets compress truth; they do not manufacture it.
8. The founder says the whole sheet out loud twice before the camera rolls. Any beat that stalls both times gets a rewritten trigger phrase, not a rehearsal note.

## Procedure

1. Decide notes versus script before anything else.
   - Notes win when: the founder reads stiffly on camera, the content is a story or emotional and plays better improvised, or the founder knows the material cold because they lived it.
   - A script wins when: it is a demo or walkthrough with exact steps, the wording carries claims that must be precise, or the founder is a genuinely strong reader. In those cases hand off to `short-form-script` and stop.
2. Extract the one idea and its specifics from the source (transcript, post, notes): every number, name, date, and scene attached to it. If the source holds two ideas, pick one and bank the other as its own take.
3. Write the spoken hook with the `hooks` skill: about 8 words, spoken inside 3 seconds, opening mid-thought on the tension. Mark it on the card as the only line to memorize.
4. Write 3 to 5 beat bullets. Each is a trigger phrase plus the concrete detail to hit, in the order the founder would tell it to a friend. The trigger phrase is a recall key, so build it from the founder's own vocabulary, not yours.
5. Write the landing direction: what the last sentence should do, not what it should say. "End on the number you started paying instead." "End on what the five different answers cost."
6. Build the pickup list: each beat boundary is a legal re-entry point. A flub inside a beat means going back to that beat's trigger phrase and re-speaking the beat, never restarting the take from the top. The edit joins beats at these seams.
7. Assemble the card and attach the two-pass instruction: say the whole sheet out loud twice, fix any beat that stalled, then film. One take per idea; extra material becomes pickups, not a longer video.

Card shape:

```
HOOK (memorize, word for word):
"We cut CAC by two thirds in one quarter."

BEATS (glance, then eyes back to the lens):
- CAC math: 1,900 down to 640
- the Tuesday we paused the paid channel
- what sales said when the leads kept coming
- the one number we check now instead

LAND: end on what the old CAC was costing every month.

PICKUPS: re-enter at any beat line. Flub mid-beat, return to that
trigger phrase, not the top.
```

## Personalization

Reads from `my-story/`:

- `voice-model.md`: the fingerprint there is measured from written posts, and spoken voice usually diverges: looser, more contractions, shorter clauses. If the pack contains a note on spoken versus written divergence, follow it when shaping the hook and trigger phrases. If it does not, treat the written fingerprint as directional only and trust the founder's mouth to supply the rhythm; that is the point of not scripting.
- `lexicon.md`: trigger phrases must use words the founder actually says, because a trigger phrase in someone else's vocabulary fails to fire recall on camera. "Never says" entries are hard rejects in the hook too.

With an empty pack the skill still works, and degrades more gracefully than a scripted approach: the bullets leave the wording to the founder, so their voice shows up regardless. Filling the pack mainly improves the hook and the recall strength of the trigger phrases.

## Examples

Bad (topic bullet): "- talk about customer acquisition efficiency"
Better (specific bullet): "- CAC math: 1,900 down to 640"
Why: the topic bullet hands the founder a blank to fill under pressure; the specific bullet hands them a fact their mouth can dress in the moment.

Bad (full sentence after the hook): "- We realized our onboarding emails were the real reason trials were converting."
Better (trigger phrase plus detail): "- onboarding emails, the real reason trials converted"
Why: the sentence version gets recited off the card in written English; the fragment forces the founder to say it, and said beats read every time.

Bad (scripted closer): "Close with: 'And that is why your story is your strategy.'"
Better (landing direction): "LAND: end on what the five different answers were costing the roadmap."
Why: a memorized last line lands wooden at the exact second the video needs conviction; a direction lets the closer arrive in whatever words the take earned.

Bad (hook treated like a beat): "- open on the CAC drop somehow"
Better (hook memorized word for word): "HOOK: 'We cut CAC by two thirds in one quarter.'"
Why: the first 3 seconds cannot be improvised; they are the one place this skill demands a script, and the only one.

Read `references/bakeoff.md` when you want the full contrast on one real post: the teleprompter script a founder would read stiffly next to the shot sheet this skill builds.

## Self-check

- Is the hook the only complete sentence on the card, about 8 words, marked memorize?
- Does every beat bullet carry a number, a name, or a moment, with zero topic bullets?
- Are there 3 to 5 beats serving one idea?
- Is the landing a direction with no quoted words in it?
- Does the pickup list mark every beat boundary as a re-entry point?
- Does the card include the say-it-twice instruction?
- Are all specifics supported by the source, with any invented detail removed?
- Honestly: would this content be better fully scripted? If it is a demo or the wording carries precise claims, hand off to `short-form-script` instead of shipping notes.

## Related skills

- `short-form-script`: the word-for-word alternative. Use it for demos, precise claims, and founders who read well; this skill is what you reach for when that one produces wooden takes.
- `hooks`: writes and pressure-tests the single memorized line.
- `meeting-to-post`: a call moment it surfaces can become the take; feed the verbatim moment in as this skill's source.
- `clip-finder`: if footage of the founder saying it already exists, cut that instead of filming notes.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
