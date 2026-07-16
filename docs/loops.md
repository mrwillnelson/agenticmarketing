# Loops

The recurring operating patterns. Skills are one-shot; loops are the same skill run on a cadence, with each run reading what the last one learned. All loop state accumulates in one ledger: `my-story/what-worked.md`, dated blocks, newest at the top.

One rule governs every loop: **a skipped day costs nothing**. Loops resume, never backfill. If you miss a week of comment queues, run today's queue; do not reconstruct last week's. The ledger keeps whatever was logged, and the next run continues from there.

## Daily: the comment queue

- **Cadence:** every working morning, 15 minutes.
- **Tell your agent:**

  ```
  Run comment-strategy and build today's comment queue.
  ```

- **What accumulates:** a dated line per comment (person, platform, tier, thread) as you go, and a weekly roll-up block in `my-story/what-worked.md`: who replied, who is warming, which sources produce the best threads. Repliers hand off to `engagement-to-pipeline`.
- **Skipped day:** nothing to catch up. Yesterday's threads are cold; today's queue is built from today's sources.

## Daily or per call: the meeting-to-post rep

- **Cadence:** once per day, or right after any call worth mining.
- **Tell your agent:**

  ```
  Use meeting-to-post on this transcript: [paste today's call]
  ```

- **What accumulates:** one shipped post per rep, anchored on the verbatim spoken line, or an honest "no post today" with the runner-up parked. Published posts and their numbers become input for the weekly review.
- **Skipped day:** the call is still in your transcript archive; the moment cools but the loop does not break. Run the next call fresh.

## Weekly: the what-worked review

- **Cadence:** once a week, same slot. Friday afternoon works.
- **Tell your agent:**

  ```
  Run what-worked on my posts from the last 60 to 90 days: [paste posts with impressions, reactions, comments]
  ```

- **What accumulates:** a dated weights block at the top of `my-story/what-worked.md`: which hooks, pillars, formats, and lengths over-performed, expressed as ratios to your own median. `hooks`, `linkedin-post`, and `format-remix` read the latest block automatically while drafting. `what-worked` is the only skill that writes the weights.
- **Skipped week:** the drafting skills read a slightly staler block. Run it when you return; one block covers the gap because the window is 60 to 90 days anyway.

## Monthly: the improve-my-pack cycle

- **Cadence:** monthly, or every 10 published pieces, whichever comes first.
- **Tell your agent:**

  ```
  Run improve-my-pack. Here are this cycle's drafts paired with what I actually published: [paste pairs]
  ```

- **What accumulates:** evidenced proposals to change your pack, each citing 3 or more instances of your own edits. You approve line by line. Accepted changes land in the pack files with a dated changelog line; rejected proposals become watch items so they are not re-proposed from the same evidence.
- **Skipped month:** the evidence pool just grows. The next cycle has more pairs and stronger proposals.

## Quarterly: the content audit

- **Cadence:** every 90 days.
- **Tell your agent:**

  ```
  Run content-audit on my last 90 days of posts: [paste or point at the folder, with metrics if you have them]
  ```

- **What accumulates:** a graded teardown (pillar drift, voice drift, hook entropy, length drift, AI-tell creep) pinned to quoted evidence, plus the three highest-leverage fixes. The audit reads the previous weights block to say whether this quarter confirms or reverses the last one, and offers to run `what-worked` so the new block lands in the ledger.
- **Skipped quarter:** audit the window you have. A 120-day audit with the shortfall named at the top beats no audit.

## How the loops connect

Daily loops generate material and warmth. The weekly review converts results into weights. The monthly cycle converts your edits into a sharper pack. The quarterly audit checks the whole system for drift. Each layer feeds the one below it through `my-story/what-worked.md` and the pack, which is why skipping a run never breaks anything: the ledger is append-only, and every skill reads whatever the latest block is.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
