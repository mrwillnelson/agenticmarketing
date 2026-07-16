---
name: script-style-storyteller
description: The narrative-arc style module for short-form scripts. Cold open mid-action, tension built one concrete detail at a time, a turn told in the words used at the time, and a plain landing. Use when a short-form script draws on the user's real experience or calls, when short-form-script is working in its story band, or when a story draft reads like a chronological recap instead of a story.
---

# Script Style: Storyteller

A style module for `short-form-script`, not a standalone writer. The parent decides platform, length band, hook mechanics, and format; this skill governs how a true story moves inside that frame. The arc is fixed: a cold open that drops the viewer mid-action, tension that tightens one concrete detail at a time, a turn told in the words used at the time, and a landing that states what changed and stops. The craft is subtraction. Most story drafts fail by including everything that happened.

## Hard rules

1. True stories only, from the user's real experience, their calls, or `my-story/` material. Never invent a story or a result. If a connective beat must be constructed to make a draft readable, flag it to the user as constructed before anything ships.
2. All parent hard rules from `short-form-script` still apply: 3-second spoken hook, one idea, written for the mouth, hard cut, no invented numbers. Do not re-run the parent's procedure from scratch; shape its beats.
3. The spoken first line drops the viewer inside the moment. No date stamp, no "so a few months ago", no "let me tell you about". If the first line could open ten different stories, it is setup, not a cold open.
4. Chronology is not story. Every beat either raises tension or releases it. A beat that does neither gets cut, however true and however proud of it the user is.
5. One concrete detail per tension beat: a number, a named object, a time, a line someone said. Two details per beat blur each other; zero details is summary, and summary is where viewers leave.
6. Dialogue beats description. If words were actually said, quote them instead of describing them. "She said, 'I gave up on step two'" beats any paraphrase of her frustration.
7. The turn is the decision or discovery, told in the words used at the time, not in hindsight language. "We're reading the wrong column" is a turn; "we realized our metrics were misleading" is a postmortem.
8. The parent's 8 to 10 second retention rule applies hardest here. In other styles a flat beat costs attention; in a story it breaks the spell. A story beat with no new tension is the exact second viewers leave.
9. Land plainly and stop a beat early. Say what changed in one line the viewer could repeat, then cut. No moral, no "and that taught me", no lesson the viewer was about to draw themselves.

## Procedure

1. Get the seed and verify it. A real moment from the user's experience, a call transcript, or `my-story/examples/`. Confirm what actually happened, what was actually said, and which numbers are real before writing a word. If the seed came from a call, `meeting-to-post` has usually already found it.
2. Map the arc onto the parent's beat structure:
   - Cold open = the parent's spoken hook. Pick the single most tense instant in the story and start inside it, even if it happened in the middle.
   - Tension = the execution beats. What was at stake and what made it worse, one concrete detail per beat.
   - Turn = the decision or discovery. This is the open loop the cold open promised; it doubles as the parent's payoff setup.
   - Landing = the parent's payoff line and hard cut. What changed, stated plainly.
3. Run the tension cut. List every beat the full story contains. Mark each one: raises tension, releases tension, or neither. Cut every "neither", then reread; if the story still tracks, they were never beats, only chronology.
4. Swap description for dialogue wherever a real quote exists. Transcript phrases stay verbatim per the parent's rules; they are the strongest material in the script.
5. Check the turn's tense. If it reads like a lesson learned, rewrite it as the words used in the moment. When the user cannot recall the exact words, ask them; do not draft plausible ones silently (hard rule 1).
6. Cut the last line and reread. If the script still lands, keep the cut. Repeat until it stops landing, then restore one line. That line is the ending.
7. Hand back to the parent for the read-aloud timing pass and output formatting.

Read `references/bakeoff.md` when you want to see the tension cut applied end to end on a real seed, chronological baseline against arc version.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: sentence rhythm for the spoken beats, and how this user ends things. Will-style endings stop a beat early by default; other packs may land softer.
- `lexicon.md`: the user's actual words for the turn and the landing. A turn phrased in vocabulary the user never says stops sounding like something they said at the time.
- `examples/`: approved past material. The best source of story seeds already told in the user's voice, and the reference for how their landings sound.

With an empty pack the arc still works, but two things degrade: story seeds must come entirely from the user or their transcripts, and turns risk sounding written rather than remembered. A call transcript substitutes well; run `voice-pack` to fix the rest.

## Examples

Bad (setup open): "A while back, we were trying to hire our first engineer, and it was a really interesting experience."
Better (cold open mid-action): "Our first engineering hire quit in the parking lot."
Why: the bad line could open a hundred stories and spends the whole 3-second fold on nothing; the better one starts inside the moment with the tension already open.

Bad (chronology): "We posted the job, screened about forty resumes, ran six rounds of interviews, checked references, and finally made an offer."
Better (tension cut): "Forty resumes. The one that mattered, I almost archived."
Why: the bad beat is five true events and zero tension; the better one cuts to the single beat that raises a question the viewer needs answered.

Bad (described turn): "The customer expressed frustration about our onboarding flow and suggested we simplify the process."
Better (quoted turn): "She said, 'I gave up on step two.' Step two was our favorite part."
Why: the quote carries the exact tension the paraphrase smooths away, and the second line turns the knife with one concrete detail.

Bad (moral bow): "And that's when I learned that truly listening to your customers is the most important thing you can do as a founder."
Better (plain landing): "We cut onboarding to one step. She's still a customer."
Why: the moral announces the video is over and hands the viewer a lesson they were one second from drawing themselves; the plain landing states what changed and cuts.

## Self-check

- Does the spoken first line start inside the moment, and would it fail as the opener of any other story?
- Does every remaining beat raise or release tension? What did the tension cut remove, and was anything kept out of loyalty to what happened rather than to the story?
- Does each tension beat carry exactly one concrete detail?
- Is everything sayable quoted rather than described, with transcript lines verbatim?
- Is the turn in the words used at the time, and are those words real or user-confirmed?
- Is every quote and number true to the source, with any constructed connective beat flagged to the user?
- Does the ending state what changed and stop a beat early, with no moral after it?
- Did the draft go back through the parent's read-aloud, timing, and format steps?

## Related skills

- `short-form-script`: the parent. Always active; this module only styles its beats. Length bands, hook fold check, and output format live there.
- `story-hooks`: opener craft for story-led content. Use it to pressure-test the cold open line before locking it.
- `meeting-to-post`: stories surface on calls. When the seed is a moment from today's transcript, that skill finds and anchors it; this one shapes the script around it.
- `clip-finder`: if the user already told the story well on a recording, cutting the footage beats reshooting a script.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
