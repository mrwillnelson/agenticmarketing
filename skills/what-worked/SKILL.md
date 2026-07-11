---
name: what-worked
description: Turn your last 60 to 90 days of post metrics into performance weights and concrete writing guidance. Use when the user has recent posts with impressions, reactions, or comments and wants to know which hooks, pillars, formats, or lengths to do more of, when someone asks "what's working" or "why did that post do well", or when refreshing my-story/what-worked.md before a new content cycle.
---

# What Worked

Fifteen posts with rough numbers beat zero analysis. Classify every recent post on four dimensions, compare each against the user's own median, and turn repeated signals into weights the writing skills can act on. The output is not a dashboard; it is three things to do more of, three to do less of, and one test, each pinned to specific posts.

## Hard rules

1. Compare against the user's own median for the period, never against absolute numbers or anyone else's. A post at 2x their median is a winner at 400 followers or 40,000.
2. Never state a finding from fewer than 3 posts per dimension value. Below 3, say "not enough data" and name it as a test candidate. One good post is a lead, not a signal.
3. One viral outlier does not rewrite the strategy. Re-run the weights without the biggest outlier; only conclusions that survive its removal go in the summary.
4. Comments from peers are not pipeline. Treat comment counts as reach fuel, not buyer intent, unless the user says who commented. Never present engagement as revenue.
5. Never invent or estimate a missing metric. Score with what exists and say what is missing.
6. Weights bias future choices; they never ban a pattern. A 0.6x hook still gets used, just less often, and low weights on thin samples get retested before they harden.
7. Posting time, day of week, and algorithm mood add noise. Trust a pattern only when it repeats across the period, not when it spikes once.

## Procedure

1. Collect the posts: pasted in, exported from the platform, or listed by hand. Aim for 60 to 90 days. For each post get the text (or a summary), the date, and whatever metrics exist: impressions, reactions, comments. Rough numbers are fine. Below 8 scorable posts, stop and say the honest thing: not enough data yet, come back with more posts rather than guesses.
2. Classify every post on four dimensions:
   - Hook type: confession, number-led, contrarian, story-mid-action, question, announcement.
   - Pillar: match against `my-story/pillars.md`. With an empty pack, infer 3 to 5 topic clusters from the posts and name them.
   - Format: text, carousel, video, article.
   - Length band: short (under 80 words), medium (80 to 200), long (over 200).
   Show the classification table to the user before computing; a mislabeled hook poisons every downstream number.
3. Build a CSV with header `date,hook,pillar,format,length,impressions,reactions,comments` and run the scorer:
   ```bash
   node scripts/compute-weights.mjs posts.csv
   ```
   It scores on impressions when most posts have them, otherwise reactions plus comments; expresses every post as a ratio to the median; flags outliers above 1.5x and below 0.5x; and prints per-value weights (shrunk toward 1.0 for small samples, floored at 0.3x) only where 3 or more posts exist.
4. Read the weights: 1.2x and above is a do-more, 0.7x and below is a do-less, the band between is neutral. For each flagged outlier, check what it shares with the other winners; then delete the single biggest outlier row and re-run. Any bucket that flips from do-more to neutral was riding one post.
5. Look for interaction effects only when they are obvious, such as a pillar whose above-median posts are all one format, or a hook that only wins on one pillar. Do not build a crosstab; with under 30 posts, most cells are empty and every "interaction" is noise.
6. Deliver the output in this order:
   - The weights summary table from the script (including the "not enough data" rows).
   - Three do-more and three do-less recommendations, each citing its weight, sample size, and the specific evidence posts by date. Fewer than three is fine when the data only supports fewer; say so.
   - One deliberate test for next month: usually the most promising "not enough data" value. Name the experiment, the count needed to reach 3+ posts, and what result would confirm it.
7. Feed it forward: append a dated block to `my-story/what-worked.md` in the format below so `linkedin-post`, `hooks`, and `format-remix` read the latest weights. Newest block goes at the top of the file.

## The what-worked.md block

```markdown
## Weights as of 2026-07-09

Sample: 18 posts, 2026-05-02 to 2026-06-30. Metric: impressions. Median: 1175.

- Hooks: confession 1.9x (4 posts), number-led 0.73x (6). Not enough data: contrarian, question, story-mid-action, announcement.
- Pillars: founder-journey 2.28x (5), product-lessons 0.75x (5).
- Formats: text 1.25x (14), carousel 0.79x (3).
- Lengths: medium 1.41x (13), short 0.96x (3).
- Outlier note: one video ran 4.4x; excluded from conclusions, format untested at 1 post.
- Test next month: 3 story-mid-action hooks on founder-journey; confirm if they average 1.2x or better.
```

Keep the block under 15 lines. Writing skills load the top block only.

## Personalization

Reads from `my-story/`:

- `pillars.md`: the pillar names to classify against in step 2. With an empty pack, infer clusters from the posts themselves, name them plainly, and suggest running `voice-pack` so future runs classify consistently.

Writes to `my-story/`:

- `what-worked.md`: the dated weights block from step 7, newest first. Create the file if it does not exist. This is the only skill that writes it; `hooks`, `linkedin-post`, and `format-remix` only read it.

The skill works with an empty pack. Filling `pillars.md` makes the pillar weights meaningful across runs instead of resetting the cluster names each time.

## Examples

Bad: "Video is clearly your best format. Your June 12 video did 4.4x your median, so shift the calendar to two videos a week."
Better: "One video ran 4.4x your median. That is a lead, not a signal; one post cannot separate the format from the story it carried. Post 2 more videos this month. If they clear 1.2x, video earns a weight."
Why: the bad one rewrites the strategy from a single outlier; the better one buys the missing data before betting the calendar.

Bad: "Lean into authenticity. Your personal stories resonate, so post more of them."
Better: "Do more confession hooks on the founder-journey pillar: 1.9x your median across 4 posts (May 2, May 12, Jun 2, Jun 23), and every one of the four cleared 1.5x on its own."
Why: the better one names the dimension, the weight, the sample, and the evidence posts, so it can be acted on and falsified; the vague one cannot.

Bad: "Number-led hooks are dead for you. Drop them."
Better: "Number-led hooks ran 0.6x across 6 posts, a consistent do-less. Keep them for posts where the number IS the story, and cut them as a default opener."
Why: a low weight means use sparingly, not never; six posts justify rebalancing, not a ban.

Bad: "Comments doubled this period. Your engagement strategy is working; expect pipeline to follow."
Better: "Comments doubled, but on the top post 9 of 12 came from other founders, not buyers. Count that as reach and social proof. Before calling it pipeline, check profile views, DMs, or inbound over the same window."
Why: peer applause and buyer intent are different metrics; conflating them turns a reach win into a fake revenue claim.

## Self-check

- Does every stated finding rest on 3 or more posts, and does everything thinner say "not enough data"?
- Is every comparison a ratio to the user's own median, with no absolute-number judgments?
- Does each recommendation cite its evidence posts by date?
- Did the top conclusions survive re-running without the biggest outlier?
- Is there exactly one named test for next month, with a success threshold?
- Did the dated block land at the top of `my-story/what-worked.md` in the standard format?

## Related skills

- `format-remix` consumes the winning formats: hand it the top format and an evidence post when the user wants more like it.
- `hooks` and `linkedin-post` read the latest block of `my-story/what-worked.md` to bias hook and format choices while drafting.
- `voice-pack` refresh runs fold winners back into `my-story/examples/` and `pillars.md`.
- Analyzing OTHER people's viral posts is outlier analysis, a separate future skill. This skill only ever reads the user's own posts.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by [64stories](https://64stories.co).
The full Agentic Marketing System runs this against your real calls, with a human editor and a per-post learning loop.
