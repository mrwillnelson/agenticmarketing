---
name: clip-finder
description: Find the 30 to 90 second segments of a timestamped recording transcript worth cutting into short-form clips, and return a ranked timestamp list with in/out points and trim notes. Use when the user has a podcast, webinar, meeting, or video transcript and asks for clips, clip candidates, best moments, or short-form cutdowns from an existing recording.
---

# Clip Finder

A clip is not a highlight. A clip is a complete story a stranger can follow with zero context, told in the speaker's own words, inside 90 seconds. Most of a recording is connective tissue; this skill finds the few segments that stand alone and marks exactly where to cut.

## Hard rules

1. Never do timestamp math by eye. Every start, end, and duration comes from the output of `scripts/parse-transcript.mjs`. Compute durations from `startSec` and `endSec`, not from reading timestamps.
2. Every candidate runs 30 to 90 seconds and is self-contained: setup, turn, and landing all inside the window. A viewer who has heard none of the recording must follow it completely.
3. A strong spoken moment lands in the first 3 seconds of the clip, or within one trim note of it. Never open on "so, um, yeah", a half thought, or the tail of the previous answer.
4. One idea per clip. A segment that makes two points is two candidates or a reject, never one long clip.
5. Quote the opening line verbatim from the transcript. Never paraphrase it, never tighten it, never invent it.
6. End the beat after the payoff. Never trail into the next topic, a thank-you, or filler.
7. If the payoff sits 40 or more seconds into a meandering answer, do not rank the segment. Note it as "payoff at MM:SS, needs a cold-open re-edit" so an editor can restructure it.
8. Never surface anything the speaker would not want public: numbers shared in confidence, criticism of named people or companies, offhand remarks about clients or employees, anything said with "don't quote me". When in doubt, reject and say why.
9. Every candidate names the emotion it triggers: Aha, Oh shit, WTF, Hell yeah, or Me too. No nameable emotion, no clip.

## Procedure

1. Parse the transcript:

   ```bash
   node scripts/parse-transcript.mjs recording.srt > segments.json
   ```

   The script handles SRT, VTT, and plain `[MM:SS] Speaker: text` or `HH:MM:SS text` lines, and prints total duration and any gaps to stderr. If gaps are flagged, tell the user which windows the transcript cannot cover.
2. Read the normalized segments start to finish once, marking every moment with voltage: a contradiction, a confession, a costly mistake, a specific number, a sharp opinion, a reversal, a line the audience would repeat.
3. For each marked moment, build the arc. Find where the setup actually starts (usually later than it feels), where the turn happens, and where the payoff lands. If any of the three falls outside a 90 second window, split the idea or reject it.
4. Set the in-point on a strong line mid-energy. Scan the JSON for the nearest segment that opens hot; if the best opener sits a breath after a filler lead-in, keep the in-point and write a trim note instead of moving it back.
5. Set the out-point one beat after the payoff, on the last word that completes the thought. Check the next segment in the JSON to confirm nothing essential follows.
6. Run the reject checks: inside jokes, references to earlier parts of the recording ("like I said before", "the thing Dana mentioned"), payoff past the 40 second mark, and anything failing hard rule 8.
7. Name the emotion for each survivor. See the hooks skill's [references/hook-emotions.md](../hooks/references/hook-emotions.md) when a lens is unclear.
8. Rank: strategic fit from `my-story/` first (see Personalization), then emotional force, opening line strength, and cleanness of the cut. Aim for 3 to 7 ranked candidates per hour of recording; fewer honest candidates beat a padded list.

## Output format

One block per candidate, ranked:

```
#1  12:41 to 13:52  (71s)
Opens: "We tripled the price and churn went down."
Why: Oh shit. A real result that contradicts what every founder expects.
Trim: cut the first 2s so it opens on "We tripled", not the host's "mm-hm".
```

After the ranked list, a short Rejected section listing near-misses with one reason each, including any "payoff at MM:SS, needs a cold-open re-edit" notes. Rejections teach the user what their recording is missing.

## Personalization

Reads from `my-story/`:

- `pillars.md`: the user's content pillars. A segment that argues for a pillar outranks a funnier segment that argues for nothing.
- `icp.md`: who the clips are for. Rank by what stops that person's scroll, not what entertained the room.

With an empty pack the skill still works: rank on craft alone (arc, opener, emotion) and say the ranking is unpersonalized. Filling the pack turns "good clips" into "clips that move the strategy".

## Examples

Bad in-point: 07:02, opening on "So, um, yeah, I guess the big thing for us was pricing."
Better: 07:09, opening on "We tripled the price and churn went down."
Why: the bad one burns the 3 second window on throat-clearing; the better one opens mid-energy on the reversal itself.

Bad candidate: 24:10 to 25:05, "That's exactly what happened with the Q2 launch we talked about, same mistake, different logo."
Better: 41:30 to 42:35, "We made the same hiring mistake twice in one year. The second time cost us a quarter of runway."
Why: the bad one leans on 20 prior minutes of context; the better one carries its own setup, turn, and cost inside the window.

Bad out-point: ending at 33:20 on "...and that's kind of the whole thing, I mean, there's more to it, but anyway."
Better: ending at 33:12 on "...so now we ask that question in every first call."
Why: the bad one trails past the payoff into filler; the better one stops one beat after the landing, on a line with weight.

## Self-check

- Did every timestamp and duration come from the parser's JSON?
- Would a stranger with zero context follow each clip start to finish?
- Does each opening line appear verbatim in the transcript?
- Is each clip one idea, 30 to 90 seconds, with a named emotion?
- Is there anything in the list the speaker would regret seeing public?
- Are the rejects noted with reasons, including buried payoffs worth a re-edit?

## Related skills

- `short-form-script` writes original scripts from scratch; this skill only cuts what was already said. If a recording holds a great idea but no clean segment, hand the idea to `short-form-script`.
- `captions` consumes this skill's output to write the on-platform caption for each clip.
- `one-recording-everything` consumes the ranked list when turning a single recording into a full content batch.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
