---
name: improve-my-pack
description: The coach loop that makes the my-story/ pack compound. Diffs drafts against what the user actually published, re-fingerprints recent posts against voice-model.md, folds in what-worked weights, and proposes an evidenced pack changeset for line-by-line approval. Use when a month has passed or 10 pieces have shipped since the last pack update, when the same edits keep recurring across drafts, or when the user says "update my pack" or "the drafts still don't sound like me".
---

# Improve My Pack

The user's edits are the highest-signal training data that exists. Every edit is the user saying "this is not me." This skill harvests that signal on a cycle (monthly, or every 10 published pieces), checks the pack against reality, and proposes changes the user approves line by line. `voice-pack` builds version 1; this skill is every version after.

## Hard rules

1. Propose, never overwrite. The output is a changeset awaiting approval, not an edited pack. Never auto-apply, even for a change the user "obviously" wants.
2. Every proposal cites 3 or more evidence instances, named specifically ("you replaced 'leverage' in 4 of 6 drafts", with dates). One-off edits are noise; a pattern of 3+ is signal. Two instances is a watch item for next cycle, not a proposal.
3. Distinguish "the pack is wrong" from "the user is drifting". When a fresh fingerprint disagrees with `voice-model.md`, either the pack is stale or the user has changed. You cannot know which from the data; ask before proposing the update.
4. Never propose changes to `narrative.md` or `pillars.md` from style evidence alone. Vocabulary, rhythm, and structure edits are voice signal, not strategy signal. Strategy changes need the user's explicit intent; surface the observation and ask.
5. After approval, apply only the accepted lines, exactly as approved, and append a dated changelog line to each touched pack file. Rejected proposals get recorded as watch items so they are not re-proposed from the same evidence next cycle.
6. Evidence is verbatim. Quote the draft line and the published line; never paraphrase an edit you are using as proof.

## Procedure

1. Collect the cycle's material: (a) each draft paired with what the user actually published, (b) the latest weights block from `my-story/what-worked.md` (run `what-worked` first if it is older than the cycle), (c) any posts that were rejected outright or heavily reworked, with the user's stated reason if one exists. Fewer than 5 draft/published pairs: run anyway, but say the evidence is thin and expect mostly watch items.
2. Diff every draft against its published version. Classify each edit:
   - Vocabulary swap (word replaced or deleted): lexicon gap.
   - Rhythm change (sentences split, merged, or paragraphs re-broken): voice-model gap.
   - Cut section (a beat or block removed): structure preference.
   - Softened or hardened claim: register gap.
   - Added specific (exact number, name, or artifact inserted): proof preference.
   Tally recurrences across the cycle. Discard anything seen fewer than 3 times.
3. Diff the pack against reality. Fingerprint the last 10 published pieces with voice-pack's script:
   ```bash
   node skills/voice-pack/scripts/fingerprint.mjs published/*.txt
   ```
   Compare every number against `voice-model.md`. Flag drift in either direction and apply hard rule 3: ask whether the pack is stale or the user is moving, then propose accordingly.
4. Fold in `what-worked`. If a hook pattern, format, or length band over-performs in the latest weights block and `hooks.md` or `voice-model.md` does not carry it, propose adding it, citing the weight and sample size. Performance evidence proposes additions; it never deletes a voice fact.
5. Read the rejected and reworked posts for what survived contact with the user least. A fully rejected post usually carries a topic or register the pack should warn about; propose an `anti-patterns.md` entry only when 3+ rejections share the cause, otherwise ask the user why.
6. Output the proposed changeset, file by file, each change on its own line with its evidence count and instances, plus the open questions from steps 3 to 5. Format below. Then stop and wait.
7. On approval, apply the accepted changes and append to each touched pack file, under a `## Changelog` heading at the bottom (create it if absent), one line per change: `- 2026-07-11 improve-my-pack: added "incredible" to never-says (cut in 4 of 6 drafts, Jun cycle)`. Carry rejected proposals and 2-instance patterns into a watch list at the end of your report.

## Changeset format

```
PROPOSED CHANGESET, nothing applied. Approve, reject, or edit each line.

lexicon.md
- [ ] never-says: add "incredible". Cut in 4 of 6 drafts (Jun 12, 19, Jul 1, 8); kept 0 times.

voice-model.md
- [ ] QUESTION first: pack says median sentence 12 words; last 10 published measure 18.
      Stale pack or new habit? Your answer decides the proposal.

narrative.md
- no changes proposed (style evidence only this cycle; strategy needs your explicit intent)
```

Every pack file appears, even with "no changes proposed", so the user sees the whole surface was checked. See [references/bakeoff.md](references/bakeoff.md) for a full worked example against a generic baseline.

## Personalization

Reads every file in `my-story/`: `voice-model.md`, `lexicon.md`, `anti-patterns.md`, `hooks.md`, `pillars.md`, `narrative.md`, `icp.md`, `what-worked.md`, and `examples/`.

Proposes writes to every one of them: fingerprint updates and register notes to `voice-model.md`; never-says and signature phrases to `lexicon.md`; new bans and exemptions to `anti-patterns.md`; proven opener patterns to `hooks.md`; new gold posts into `examples/`; `pillars.md`, `narrative.md`, and `icp.md` only with the user's explicit intent per hard rule 4. All writes land only after line-by-line approval, each with a changelog line.

With an empty pack there is nothing to improve: redirect to `voice-pack` to build version 1 first. With a `status: stub` pack, run anyway; the cycle's published posts are exactly the corpus the stub was missing, so propose promoting the stub alongside the diff findings.

## Examples

Bad proposal: "Your published posts are tighter than the drafts. The pack should be stricter about corporate language and filler."
Better: "lexicon.md never-says: add 'articulate'. You swapped it for 'explain' in 3 of 6 drafts this cycle (Jun 12, Jun 26, Jul 8) and it appears 0 times in your last 33 published posts."
Why: the better one names the file, the change, and 3 dated instances, so the user can verify it in one glance and approve or reject it; the vague one cannot be acted on or falsified.

Bad drift handling: "Your recent posts average 18-word sentences but voice-model.md says 12. Updating the pack to 18."
Better: "Fresh fingerprint says 18-word median sentences; the pack, measured in March, says 12. Either the pack is stale or your voice is moving. Which is it? If the March number still feels like you, the fix is in the drafts, not the pack."
Why: the same data supports two opposite proposals; only the user knows which. Silently re-measuring bakes drift into the pack and every future draft inherits it.

Bad strategy move: "You cut the product-update section from 4 drafts, so I removed the product pillar from pillars.md."
Better: "You cut the product-update section from 4 of 6 drafts. That is a structure signal, so I propose an anti-patterns entry against mid-post product detours. If you also want the pillar itself retired, that is a strategy call: say so and I will propose it separately."
Why: style evidence can reshape how posts are built, never what the company is about; hard rule 4 exists because a deleted pillar silently redirects every future content cycle.

Bad apply: user approves 3 of 5 proposals, and the pack gets all 5 plus a "minor cleanup" of an old entry.
Better: the 3 approved lines land exactly as written, each touched file gets its dated changelog line, and the 2 rejected proposals move to the watch list with a note not to re-propose on the same evidence.
Why: the pack is the user's voice on file; an unapproved edit there corrupts every downstream skill at once.

## Self-check

- Does every proposal cite 3 or more dated, verbatim instances?
- Did anything get applied before the user approved it? (The answer must be no.)
- For every fingerprint mismatch, did you ask "stale pack or drifting user" instead of picking silently?
- Are `narrative.md` and `pillars.md` untouched unless the user stated strategy intent?
- Does every pack file appear in the changeset, even as "no changes proposed"?
- After approval, does every touched file carry a dated changelog line, and are rejections on the watch list?

## Related skills

- `voice-pack` builds the pack's version 1 from a corpus; this skill evolves it from live edits. Empty pack: go there first.
- `what-worked` supplies the performance weights folded in at step 4; refresh it before running this skill.
- `draft-qa` and `voice-match` enforce the current pack on every draft; this skill is how the pack they enforce stays true.
- `hooks` reads `hooks.md`; proven opener patterns you add here change what it generates next cycle.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
The full Agentic Marketing System runs this against your real calls with a human editor and a per-post learning loop; narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
