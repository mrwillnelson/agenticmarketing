---
name: content-audit
description: The 90-day teardown. Grade the user's last 60 to 90 days of posts against their own measured baseline across pillar mix, voice drift, hook entropy, length drift, engagement patterns, and AI-tell creep, every grade pinned to quoted evidence, then the three highest-leverage fixes. Use when the user pastes or points to a folder of recent posts and asks for an audit, a teardown, a content health check, or what to change before the next cycle.
---

# Content Audit

An audit is a diff between what the user set out to publish and what they actually published. Every dimension compares the recent window against the user's own pack, every grade carries evidence a reader can check, and the output ends in next week's calendar, not a dashboard.

## Hard rules

1. No evidence, no grade. Every grade cites a verbatim quote from a named post or a number from a script you ran in this audit. A grade standing alone is an opinion; do not print it.
2. Never invent, estimate, or backfill a metric. Audit what exists, and list what is missing next to the dimension it blocks.
3. Small samples get "insufficient data", never a grade. Floors: 5 posts to grade voice, hooks, or length (print n whenever it is under 8); 8 posts with metrics for engagement weights, which the script enforces itself; a declared target mix for pillar drift. Under 5 posts total, stop and say what to collect.
4. Reuse the sibling scripts, never re-derive them: `skills/voice-pack/scripts/fingerprint.mjs` for voice and length, `skills/what-worked/scripts/compute-weights.mjs` for engagement, `skills/anti-ai/scripts/scan.mjs` for tells. A prose re-implementation drifts from the code and produces numbers nobody can reproduce.
5. Drift is measured against the user's own baseline, never a generic ideal. Long sentences are a problem only for a writer whose corpus runs short. When `voice-model.md` has no number for a dimension, report the measurement and mark the grade "no baseline".
6. Every fix names its posts. Quote the evidence posts by date and say what next week's post does differently. A fix that would paste cleanly into anyone else's audit is a horoscope; cut it.
7. Audit, do not rewrite. When a fix needs new copy, route to `hooks`, `linkedin-post`, or `format-remix` instead of drafting inside the audit.

## Procedure

1. Collect the window: pasted posts or a folder, one post per file, dated where possible, with whatever metrics exist (impressions, reactions, comments; rough numbers are fine). Aim for 60 to 90 days. Audit a shorter window only with the shortfall named at the top of the output.
2. Pillar mix. Classify every post against `my-story/pillars.md` and compute each pillar's share of the window against its target mix. Name the starving pillar (largest shortfall) and the crowding one. With no declared target, report the shares and mark the grade "insufficient data: no target mix".
3. Voice drift. Run the fingerprint on the window:

   ```bash
   node skills/voice-pack/scripts/fingerprint.mjs window/*.txt
   ```

   Diff each number against the measured block in `my-story/voice-model.md` and name every drift in plain words: sentences halved from 18 to 8 words, contractions doubled from 1.8 to 3.7 per 100 words, questions appeared where the baseline has none. A drift is a delta with two numbers attached, not a vibe.
4. Hook entropy. Copy the verbatim first line of every post and tag its pattern: confession, number-led, contrarian, story-mid-action, question, announcement, direct address. Raise two flags: formula fatigue when one pattern exceeds half the openers, and closed loops when an opener states its own answer and leaves no question open. Closed loops go to `hooks` for rework.
5. Length drift. From the same fingerprint run, compare the window's median and range of words per post against the measured range in `voice-model.md`. Flag a shifted median and a collapsed range separately; losing the short post is a different failure from bloating the median.
6. Engagement patterns, only when metrics exist. Build the CSV (`date,hook,pillar,format,length,impressions,reactions,comments`) from the classifications above and run:

   ```bash
   node skills/what-worked/scripts/compute-weights.mjs window.csv
   ```

   Follow `what-worked` for reading weights and outliers; do not restate its method. Below its 8-post floor, report the refusal verbatim and list any lead worth testing (3 or more posts pointing the same way, named as a lead).
7. AI-tell creep. Scan every post, with exemptions when the pack has them:

   ```bash
   node skills/anti-ai/scripts/scan.mjs post.txt --exemptions my-story/anti-patterns.md
   ```

   Count bans and warns per post and report the trend across the window, older half against newer half. A flagged pattern that recurs in the user's approved corpus is an exemption candidate for `voice-pack`, not a fix.
8. Grade each dimension:
   - A: within the baseline; leave it alone.
   - B: measurable drift, no sign yet that it costs anything.
   - C: drift a reader can feel, or a formula-fatigue flag from step 4.
   - D: drift plus engagement evidence from the same window that it is costing reach.
   - insufficient data: sample under the floor, metrics absent, or no baseline to diff against.
9. Deliver in this order:
   - The scorecard: one row per dimension with grade and one line of evidence carrying the quote or the numbers.
   - The three highest-leverage fixes, each citing evidence posts by date with verbatim quotes, ranked by expected impact rather than by how bad the grade sounds.
   - "What to do next week": how many posts, which pillar, which opener pattern, what to log, written so the user can execute it without rereading the scorecard.
10. Feed forward. When step 6 produced weights, offer to run `what-worked` so the dated block lands in `my-story/what-worked.md`. When the user confirms a drift is deliberate evolution, send them to a `voice-pack` refresh so the baseline moves instead of the grade.

A worked audit on real posts, shown next to the generic critique it replaces, is in [references/bakeoff.md](references/bakeoff.md). Read it when unsure what the output should look like or how to grade a thin sample.

## Personalization

Reads from `my-story/`:

- `pillars.md`: pillar names and target mix for step 2. Empty: infer 3 to 5 clusters from the window, name them plainly, and mark pillar drift "insufficient data: no target mix".
- `voice-model.md`: the measured baseline for steps 3 and 5. Empty: this audit's fingerprint run becomes the first baseline; report the measurements, mark voice and length "no baseline", and point the user at `voice-pack`.
- `anti-patterns.md`: exemption flags for step 7's scans. Empty: scans run at full severity, so expect warns on authentic quirks until `voice-pack` records the exemptions.
- `what-worked.md`: the previous weights block, used to say whether this window confirms or reverses the last cycle. Read only; `what-worked` is the only skill that writes it.

The skill works with an empty pack: it still measures everything, but most grades come back "no baseline". Filling the pack turns measurements into grades.

## Examples

Bad: "Voice: B-. Your recent posts feel a bit more polished and less spontaneous than your earlier work."
Better: "Voice: C (n=5). Median sentence dropped from 18 words (baseline, 33 posts) to 8 in this window, and each of the 5 posts sits below baseline on its own. Contractions rose from 1.8 to 3.7 per 100 words. The long reasoning sentences, 29% of the baseline corpus, do not appear once."
Why: the better one is falsifiable and names each drift with two numbers; "feels more polished" fits every audit ever written.

Bad: "Engagement: C. With only 5 posts I estimate your median at around 20 reactions, so most posts underperform."
Better: "Engagement: insufficient data. compute-weights refuses below 8 posts, and no post has impressions. One lead, not a signal: the 3 number-led openers hold the bottom three reaction counts. Log metrics on 3 more posts and re-run."
Why: an estimated median is an invented metric; the honest version states the floor, the lead, and the path to a real grade.

Bad: "Fix: diversify your hooks and experiment with different opening styles to keep readers interested."
Better: "Fix: 3 of your last 5 openers are number-led ('669,000 impressions in 28 days...', 'In the last 90 days...', 'I spent the last seven days...'). Open next week's proof post mid-story and hold the number until line three."
Why: the bad fix pastes into anyone's audit; the better one quotes the pattern and changes one named next post.

## Self-check

- Does every grade sit next to a verbatim quote or a number from a script run in this session?
- Did any number come from memory or an eyeball instead of a script? If so, run the script or cut the number.
- Does every dimension under its floor say "insufficient data" instead of carrying a letter?
- Do the three fixes quote specific posts by date, and would each be useless in someone else's audit?
- Did the engagement dimension go through `what-worked` or its script rather than a restated method?
- Can the user execute "what to do next week" without rereading the scorecard?

## Related skills

- `what-worked`: the full engagement weighting pass and the only writer of `my-story/what-worked.md`; run it whenever step 6 clears 8 posts.
- `voice-pack`: rebuilds the baseline when the user says a measured drift is deliberate, and records exemptions for scanner flags that match the real voice.
- `hooks`: reworks the formula-fatigued and closed-loop openers found in step 4.
- `anti-ai`: gates individual future drafts; this skill only trends the scanner across the window.
- `draft-qa`: the per-draft gate before publishing; this audit is the per-quarter gate.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
The full Agentic Marketing System runs this against your real calls with a human editor and a per-post learning loop; narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
