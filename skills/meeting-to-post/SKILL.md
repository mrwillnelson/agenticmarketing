---
name: meeting-to-post
description: Turn today's call into today's post. Single-pass mine a transcript for the one highest-voltage moment, anchor a draft on the verbatim spoken lines, and ship or park it within minutes. Use when a call just ended and one post should go out the same day, when the user asks for a quick post from a meeting, or as the daily posting rep. For a full content set use one-recording-everything; for every candidate scored use transcript-ideas.
---

# Meeting to Post

One call ends, one post ships the same day, while the moment is hot. This is the speed path: where `one-recording-everything` plans a full set and `transcript-ideas` scores every candidate, this skill finds THE one moment and drafts THE one post in a single pass. The deliverable is either a shippable draft or an honest "no post today". Both are wins.

## Hard rules

1. One post, one idea, one pass. Scope discipline IS the skill. If you catch yourself comparing five candidates or planning a clip, you have drifted into a sibling skill; stop and hand off.
2. Verbatim law. The anchor quote is character for character from the transcript, filler words included. When the speaker's phrasing is sharper than yours, the spoken line becomes the hook or the spine. Never paraphrase the anchor, never stitch two lines into one.
3. Never publish anything said in confidence or anything about a named third party without their consent. Drop the moment, do not sanitize the quote. Take the runner-up or take "no post today".
4. If the call had no real moment, output "No post today" plus the parked runner-up. That is a success, not a failure. A forced daily post trains the audience to skip you.
5. One revision pass, maximum. If the draft is not clearly good after that pass, park it in the idea bank with its verbatim quote and move on.
6. Same-day gates only: the `anti-ai` scan and a 60-second voice read-aloud check. Skip the full `draft-qa` ceremony; this is a daily rep, not a flagship piece.
7. Total time budget from transcript to draft: minutes, not an afternoon. An hour in means you picked the wrong moment or the wrong skill.

## Procedure

1. Single-pass mine. Read the transcript once, marking only high-voltage moments: the sharpest opinion stated without hedging, a mistake confessed, an exact number revealed, a common belief challenged. Take the top ONE. Note the runner-up as one line plus its verbatim quote for the idea bank, then stop mining. Do not rank the rest.
2. Verbatim anchor. Extract the exact spoken lines around the chosen moment: the line itself plus the two to four lines before and after it. The post is built ON these lines. The founder's actual phrasing beats any rewrite you would produce.
3. Fast draft. Hook from the moment itself; the spoken line is often the hook, quoted or lightly framed. Body in the user's measured voice: one beat per paragraph, specifics from the anchor lines carrying the proof. End on the strongest concrete beat and stop a beat early. Target the user's median length from `my-story/voice-model.md`, not their maximum. A daily post is a rep, not a monument.
4. Same-day gates. Run the `anti-ai` scan and rewrite anything it flags. Then read the draft aloud once, about 60 seconds: any line the user would not say on a call gets rewritten in words they would use, checked against `my-story/lexicon.md` and `my-story/anti-patterns.md`.
5. Ship or park. Make at most one revision pass from what the gates surfaced. Clearly good: deliver the draft with the anchor quote and the parked runner-up noted beneath it. Not clearly good: park the draft and the runner-up in the idea bank, working title plus verbatim quote each, and say so plainly.

Read [references/bakeoff.md](references/bakeoff.md) to see a moment post beat a summary post on the same call, step by step.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: the measured median word count (the target, per step 3), sentence rhythm, and whether endings may be questions.
- `anti-patterns.md`: the user's banned words, openers, and closers; hard rejects during the revision pass.
- `lexicon.md`: words the user actually says and words they never would; the read-aloud check swaps vocabulary against it.

With an empty pack the skill still works: target roughly 80 to 120 words, standard rhythm, no question endings, no hashtags. The draft will be craft-correct but generic to the user's voice, and the read-aloud check loses most of its teeth. Run `voice-pack` once to fix that.

## Examples

Summary post vs moment post, from the same sales call.

Bad (summary of the whole call):
> Great conversation with a founder today about content strategy. We covered posting cadence, leadership alignment, and why consistency alone does not move pipeline. Key takeaway: content problems are usually strategy problems in disguise. What has your experience been?

Better (built on the one moment):
> "You don't have a content problem. You have five people telling five different stories."
>
> I said this to a founder twenty minutes into a call about his posting cadence.
>
> He'd published three times a week for six months. Nothing moved.
>
> The cadence was never the issue.

Why: the summary covers four topics and lands none, then begs for comments; the moment post has one thesis, a spoken line as the hook, and stops early.

Paraphrased anchor vs verbatim anchor. The founder said: "we turned off the whole outbound motion for three weeks and pipeline didn't drop a dollar, which nobody wants to hear."

Bad anchor: "We paused outbound for a few weeks and pipeline stayed stable."
Better anchor: "We turned off the whole outbound motion for three weeks and pipeline didn't drop a dollar, which nobody wants to hear."

Why: the paraphrase sands off the confession, the exact number, and the spoken cadence; the verbatim line already reads like a hook and needs no rewrite.

## Self-check

- Did I draft exactly one post from exactly one moment, in one pass?
- Is the anchor quote character for character from the transcript, and would the speaker be comfortable seeing it public?
- Does the post expose nothing said in confidence and no named third party without consent?
- Is the length near the user's median, not stretched toward their maximum?
- Did the draft pass the anti-ai scan and survive the 60-second read-aloud in the user's own words?
- Did I stop at one revision pass, and park instead of forcing?
- Is the runner-up logged in the idea bank with its verbatim quote?
- If there was no real moment, did I say "no post today" instead of manufacturing one?

## Related skills

- `one-recording-everything`: the recording deserves a full content set of posts, clips, and a newsletter section, not one fast post.
- `transcript-ideas`: you want every candidate mined and scored, not just the top one taken on judgment.
- `anti-ai`: the mandatory scan in step 4.
- The idea bank receives every parked runner-up and parked draft; log a working title plus the verbatim quote so a later session can pick it up cold.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
