---
name: story-context
description: Load the user's my-story pack and resolve the task frame (platform, output type, pillar, source material, voice status) before any writing starts. Use when starting any content task in this system, before invoking any other writing skill, or when a request arrives without a clear platform, source, or voice.
---

# Story Context

Every piece of founder content sits inside one story. This skill loads that story and pins down what is actually being made before a single line gets drafted. It is the foundation layer: every other skill in this repo assumes it has already run.

## Hard rules

1. Load before you write. No sibling skill drafts anything until the pack is loaded and the frame is resolved.
2. Never guess a voice. If the pack is empty, thin, or self-contradictory, say so plainly and recommend running `voice-pack`. Proceed only if the user confirms, and label every downstream output `GENERIC VOICE` until the pack exists.
3. Never fabricate pack content. Do not infer a lexicon from the user's chat messages, invent pillars, or treat your own guesses as if they came from the pack. Pack data comes from pack files, nothing else.
4. Respect the source. If a transcript, call notes, or a prior post exists, the piece comes from that material. If no source exists, state that the draft will come from the prompt alone before anyone starts writing.
5. Every piece faces the narrative question: does this move the user's story, or is it just a good post? A piece can fail this check and still ship, but only after the user sees the flag.
6. Frame gaps are stated, not silently assumed. If platform, output type, or pillar is missing, either ask or name the assumption out loud in the frame block. Voice is the one thing that is never assumed.

## Procedure

1. Check the pack state:

   ```bash
   node scripts/check-pack.mjs
   ```

   The script reports each pack file as present, empty, or missing, counts `examples/`, and prints a status: `ready`, `partial`, or `empty`. Pass a path if the pack lives somewhere other than `my-story/` at the repo root.

2. Load what exists, in this order: `voice-model.md`, `anti-patterns.md`, `lexicon.md`, `hooks.md`, `pillars.md`, `narrative.md`, `icp.md`, then skim `examples/` for the two or three pieces closest to the current task.

3. Gate on voice. Status `ready` means write in the user's voice. Status `partial` means name exactly which files are missing and what that costs (no `anti-patterns.md` means no banned-phrase protection, no `hooks.md` means openers will not match their register). Status `empty` means stop: recommend `voice-pack`, and continue only on explicit confirmation with the `GENERIC VOICE` label.

4. Resolve the frame. Answer each of these from the request, the pack, and the source material:
   - Platform: LinkedIn, X, newsletter, short-form video, blog?
   - Output type: post, script, issue, thread, comment, rewrite of an existing draft?
   - Pillar: which entry in `pillars.md` does this piece serve? If none fits, that is a finding, not a formality.
   - Source: transcript, call notes, prior post, rough idea, or nothing? Name the file or link, not "the call".
   - Audience: which ICP segment from `icp.md` is this for?

5. Run the narrative check. Read the current arc in `narrative.md` and ask: does this piece advance it, repeat it, or wander off it? A sharp take that belongs to someone else's story is still a miss. If `narrative.md` is missing, skip the check and say the check was skipped.

6. Hand off a frame block. Downstream skills read this instead of re-deriving it:

   ```
   Frame
   - Platform / type: LinkedIn, single post
   - Pillar: [name from pillars.md, or "none, off-pillar by user choice"]
   - Source: [file or link, or "none, drafting from prompt"]
   - Audience: [ICP segment]
   - Voice status: ready | partial (missing: ...) | GENERIC VOICE (user confirmed)
   - Narrative fit: [how it moves the story, or the flag raised]
   ```

7. Route to the right sibling skill and get out of the way. This skill frames; it does not draft.

## Personalization

Reads every file in `my-story/`:

- `voice-model.md`: rhythm, person, register. The gate in step 3 keys off this file first.
- `anti-patterns.md`: the user's banned phrases and structures, passed downstream as hard rejects.
- `lexicon.md`: words the user actually uses and words they never would.
- `hooks.md`: approved openers, so downstream hook work matches register.
- `pillars.md`: the content pillars every piece must map to, or consciously not.
- `narrative.md`: the story arc the narrative check in step 5 runs against.
- `icp.md`: who the piece is for.
- `examples/`: approved past pieces, the ground truth for "would they say this".

With an empty pack the skill still resolves the frame (platform, type, source), but voice, pillar, and narrative checks all degrade to generic. It says so instead of hiding it, and it recommends `voice-pack` exactly once per session rather than nagging.

## Examples

Bad: pack is empty, so the agent drafts anyway in a confident founder voice it invented, and the post reads plausible.
Better: "Your my-story pack is empty, so I have no voice model to write from. Run voice-pack first (10 minutes), or I can draft in a generic voice, clearly labeled, for you to rewrite."
Why: an invented voice is the worst failure in this system because it looks like success; wrong words in the user's mouth.

Bad: user says "write something about our launch" and the agent starts typing a LinkedIn post.
Better: "Frame first: LinkedIn announcement post, build-in-public pillar, audience is your buyer ICP. Source: do launch notes or a changelog exist, or am I drafting from this sentence alone?"
Why: an unresolved frame turns into a full rewrite later; thirty seconds of framing is cheaper than a second draft.

Bad: the source is a strong contrarian take on hiring, the pack's narrative is about pricing expertise, and the agent ships the hiring post because it will perform.
Better: "This hiring take is strong but it does not move your pricing story. Option one: the pricing angle hiding in the same call. Option two: ship it as a deliberate off-pillar post. Your call."
Why: a good post that serves no pillar builds an audience for a story the user is not telling.

Bad: user mentions "yesterday's customer call" and the agent drafts the post from an imagined version of that call.
Better: "I do not have that call. Paste the transcript or your notes and the post comes from what was actually said. Without it I can only frame the piece, not draft it."
Why: source truth is a hard rule across this repo; imagined quotes and imagined stakes poison everything downstream.

## Self-check

- Did the pack actually load, and did I report its real status instead of a hopeful one?
- Is every line of the frame block traceable to the request, the pack, or the source, not to my assumptions?
- If the pack was empty or partial, did the user explicitly confirm before any generic drafting?
- Did I name the source file, and does one exist for a piece that claims one?
- Did the piece face the narrative question, and did the user see the flag if it failed?

## Related skills

- Empty or stale pack: run `voice-pack` before anything else.
- Source is a transcript with no chosen angle: `transcript-ideas` finds the candidates.
- Frame resolved and ready to draft: `linkedin-post`, `short-form-script`, or `newsletter`, which load `hooks` for their openers.
- Final gate before publishing: `draft-qa`.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by [64stories](https://64stories.co).
The full Agentic Marketing System runs this against your real calls, with a human editor and a per-post learning loop.
