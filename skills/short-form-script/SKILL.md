---
name: short-form-script
description: Write original 15 to 90 second spoken scripts for short-form video (TikTok, Reels, Shorts, LinkedIn video) that a founder delivers to camera. Use when the user asks for a video script, a talking-head script, a Reel or Short, or wants an idea or transcript moment turned into something they can film. For cutting moments out of an existing recording, use clip-finder instead.
---

# Short-Form Script

A short-form script is spoken words that survive a thumb. Every second has to earn the next one, and the words have to come out of the founder's actual mouth sounding like them. Write for the ear, hold one idea, and stop the moment the value lands.

## Hard rules

1. The spoken hook lands inside the first 3 seconds: roughly 8 words. No greeting, no context, no "in this video". Open mid-thought, on the tension.
2. One idea per script. A script with two points is two scripts; write the first and note the second as its own script.
3. Write for the mouth, not the eye. Contractions, short clauses, sentences a person can say in one breath. No subordinate-clause pileups. Any line you would stumble over out loud gets rewritten.
4. Never invent numbers, results, stories, or quotes the source does not support.
5. When a transcript is the source, keep the founder's verbatim phrases and script around them. Never smooth them into written English.
6. End on the payoff, then hard cut. No outro, no recap, no "follow for more". CTAs only if the user's `my-story/` pack explicitly allows them.
7. The user's voice rules outrank this skill. Check `my-story/anti-patterns.md` before drafting; slop sounds worse out loud than it reads.

## Procedure

1. Identify the job: platform, source material, audience, and the one idea. If the source holds several ideas, pick the highest-voltage one and list the rest as future scripts.
2. Pick the length band, then stay inside it. Default to the shortest band the idea survives in:
   - 15 to 30 seconds: one beat. A single observation, reversal, or tip. About 40 to 75 spoken words.
   - 30 to 60 seconds: one story. Setup, turn, outcome. About 75 to 150 words.
   - 60 to 90 seconds: one argument. Claim, evidence, implication. About 150 to 220 words.
3. Write the spoken hook using the `hooks` skill and check it against the video fold (spoken words in 3 seconds, about 8 words). The verbal hook and the text-overlay hook can differ: the spoken line is built for the ear, the overlay can attack the same tension from a second angle. Never make them identical by default.
4. Foreshadow in one line: what the viewer gets if they stay. Sell the payoff without delivering it. In a 15 to 30 second script the hook itself can carry the foreshadow.
5. Write the execution as beats, one beat per line block. This is the substance: the story, the steps, the evidence. Cut every sentence that serves a second idea.
6. Pace against the retention dip. Viewers decide to leave roughly every 8 to 10 seconds, so place a new open loop, a turn, or a pattern break at each of those marks. A beat that coasts past 10 seconds without one is where the video dies. Pattern breaks can be verbal (a reversal, a blunt short sentence after long ones) or visual (a cut, an overlay, b-roll).
7. Land the payoff: the exact value the foreshadow promised, in a line the viewer could repeat to someone else. If the payoff does not match the promise, fix the foreshadow or the payoff, not the hook.
8. Hard cut. The last spoken word is the payoff line. Nothing after it.
9. Read the whole script aloud, timed. Cut until it fits the band and every line survives being spoken.
10. Format the output. Default is two columns:

    | Spoken | Visual |
    |---|---|
    | The hook line | Text overlay (may differ from spoken hook), framing note |
    | Beat 1 lines | B-roll or cut note |
    | Payoff line | Hold on camera, hard cut |

    When the user films talking-head only with no editing, drop the table and deliver a plain spoken script with beat markers.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: sentence rhythm and register. Match how long the user's spoken sentences run and where they break.
- `lexicon.md`: the words the user actually says. Prefer their terms over synonyms; a script that uses vocabulary the founder never uses will get rewritten on camera anyway.
- `anti-patterns.md`: banned phrases and structures. Hard rejects, in spoken words too.

With an empty pack the skill still works, but the script will sound like a competent generic creator instead of the user. Run `voice-pack` once to fix that. A transcript source partially substitutes: verbatim phrases carry the voice even without a pack.

## Examples

Bad (written for the eye): "In today's competitive hiring market, founders who fail to prioritize candidate experience often lose their strongest applicants before the first interview even happens."
Better (written for the mouth): "I lost my best candidate before we ever talked."
Why: the bad one is a 24-word written sentence with a clause pileup no mouth survives in 3 seconds; the better one is 9 spoken words with the tension already open.

Bad (two ideas): "Here's how I price my product, and while we're at it, the onboarding change that doubled our retention."
Better (one idea): "One onboarding change doubled our retention. It took an afternoon."
Why: the bad hook promises two videos and delivers neither well; the better one holds a single idea and banks the second as its own script.

Bad (soft ending): "So yeah, that's the framework. If this was helpful, make sure you follow for more founder content and drop a comment with your questions."
Better (hard cut): "We shipped it Friday. The refund requests stopped that week."
Why: the outro plays to viewers who already left; the better ending is the payoff itself, and the cut lands on it.

Bad (coasting middle, 30 to 60 band): "Then we kept iterating on the messaging, talked to more customers, refined the positioning, and gradually things started improving over the next few months."
Better (a turn at the dip): "Nothing worked for six weeks. Then one customer said four words that changed the whole pitch."
Why: the bad beat summarizes across the 8 to 10 second dip with no reason to stay; the better one opens a new loop right where viewers decide.

## Self-check

- Is the spoken hook about 8 words, mid-thought, inside 3 seconds?
- Is it one idea, and does the script fit its length band when read aloud and timed?
- Does every line survive being said out loud in one breath?
- Is there a new open loop, a turn, or a pattern break at every 8 to 10 second mark?
- Does the payoff deliver exactly what the foreshadow promised?
- Does the script end on the payoff line with nothing after it?
- Would the user say these words? Are transcript phrases kept verbatim, and does the script pass `anti-patterns.md`?

## Related skills

- `hooks`: write and pressure-test the 3-second open; use its video fold check for the spoken hook.
- `clip-finder`: cuts strong moments out of an existing recording. This skill writes originals to film; if the user already has footage, hand off.
- `voice-pack`: builds the `my-story/` pack this skill personalizes from.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories runs the managed GTM system for companies that want this operated for them.
