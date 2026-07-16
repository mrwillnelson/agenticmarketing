# Bake-off: chat scrollback vs the ledger

Read this to see what the skill changes over a realistic three-week stretch. Same six candidate ideas, two worlds: the baseline leaves them where they landed, in chat scrollback; the with-skill world banks them and runs one withdraw and one prune.

All six candidates, their calls, and their quotes are invented for demonstration; they match themes Will Nelson has published under his own name at 64stories. One published post cited below is real and quoted verbatim from Will's LinkedIn, with its real engagement numbers.

## The three weeks

- Jul 1: `transcript-ideas` runs on a podcast recording and outputs two keepers, C1 (scored 82) and C2 (scored 76).
- Jul 3: `meeting-to-post` ships a post from a discovery call and parks its runner-up, C3.
- Jul 8: `transcript-ideas` runs on a second podcast: C4 (scored 66) and C5.
- Jul 10: a discovery call raises C3's tension again under a different title.
- Jul 15: `meeting-to-post` parks another runner-up, C6, which waits on a number that closes at end of July.
- Jul 21: the user asks "what should I write today", and the monthly prune is due.

## Baseline: without the skill

The six candidates live as messages in three chat threads. On Jul 21:

- The user scrolls, finds C6 first because it is freshest, and writes it early. The post goes out without the number it was waiting for and lands flat. The wake condition existed only in Will's head.
- C5's angle gets rewritten from memory. Nobody remembers it already shipped in February, so the feed gets a paler rerun of a post that earned 141 reactions.
- C1 and C2 are two threads back. Their verbatim quotes are gone; what survives is "something about acquisition cost" and a paraphrase with no receipts.
- C3 came up on two separate calls, so it exists as two half-remembered fragments. Neither gets written, because neither looks like a whole idea.
- Nothing is killed. Everything is vaguely "still on the list", and the list is in four places.

Score for three weeks of good mining: one mistimed post, one accidental rerun, four ideas rotting.

## With the skill: the ledger

State of `my-story/idea-bank.md` on Jul 21, before the withdraw. The first block is a seed from before the window; the second records Will's real published post.

```markdown
### Conference takeaways thread
- Banked: 2026-03-30
- Source: user, 2026-03-30
- Angle: null, never sharpened past the topic
- Pillar: null
- Quote: none
- Score: unscored
- Status: parked

### Your story is your strategy
- Banked: 2026-02-20
- Source: essay draft session, 2026-02-20
- Angle: a founder who cannot explain the company does not have a communication problem, the strategy itself is unclear
- Pillar: Narrative alignment
- Quote: "If you can't clearly explain what your company does, you probably don't have a clear strategy. The two problems are the same problem."
- Score: 84/100
- Status: published 2026-02-26

### Impressions are a cost lever
- Banked: 2026-07-01
- Source: podcast recording, 2026-07-01, 00:41:12
- Angle: founder content is measured wrong; reach is only interesting for what it does to acquisition cost
- Pillar: Story Engineering
- Quote: "nobody cares about the impressions, I care that our cost to acquire keeps dropping the whole time the posts are running"
- Score: 82/100
- Status: parked

### The first draft belongs on a call
- Banked: 2026-07-01
- Source: podcast recording, 2026-07-01, 01:03:55
- Angle: founders who cannot write can talk; drafting from a transcript beats drafting from a blank page
- Pillar: Founder-led distribution
- Quote: "every time I sit down to write I produce mush, but you just watched me say the whole post out loud without trying"
- Score: 76/100
- Status: parked

### Approval is where founder content dies
- Banked: 2026-07-03
- Source: parked by meeting-to-post, 2026-07-03
- Angle: the bottleneck is rarely the writing; it is drafts aging in a founder's inbox past the moment they were written for
- Pillar: Story Engineering
- Quote: "the drafts were fine, they sat in my inbox for nine days, that's the real reason we missed the window"
- Score: unscored
- Status: parked
- Also surfaced: 2026-07-10, discovery call 2026-07-10, 00:14:20

### Repetition is a feature
- Banked: 2026-07-08
- Source: podcast recording, 2026-07-08, 00:27:40
- Angle: the teller gets bored of the story long before the audience has even heard it; boredom is the wrong stop signal
- Pillar: Narrative alignment
- Quote: "I was bored of saying it, and that was about the time strangers started saying it back to me"
- Score: 66/100
- Status: parked

### The 90-day number post
- Banked: 2026-07-15
- Source: parked by meeting-to-post, 2026-07-15
- Angle: milestone posts land hardest inside the news window; build the frame now, drop the number in the day it closes
- Pillar: Founder-led distribution
- Quote: "when that number closes end of month I want the post out the same day, not two weeks later"
- Score: unscored
- Status: parked
- Wake: when the 90-day account growth number closes (end of July)
```

Three operations shaped this file:

1. Dedupe, Jul 10. The second call pitched "Why your posting cadence is a red herring", a new title on C3's angle. One `Also surfaced` line, no new block. The idea now carries a two-call signal.
2. Self-plagiarism check, Jul 8. C5 arrived as "Founders who point at their marketing team", angle: outsourcing storytelling to marketing proves the strategy is unclear. Near-duplicate of the published "Your story is your strategy" block, so it was linked with a `Resurfaced: 2026-07-08` line under that block and never banked. The user was told it shipped on 2026-02-26 and pulled 141 reactions and 35 comments; a follow-up would need a new angle and its own quote.
3. Bank, five times, quotes untouched.

## The withdraw, Jul 21

Pillar targets from `my-story/pillars.md` (invented for this demo): Narrative alignment 40%, Story Engineering 35%, Founder-led distribution 25%. The last 30 days of drafted and published work skewed Narrative alignment, so the widest gap is Story Engineering.

Ranking of the five parked blocks:

1. Impressions are a cost lever. Gap pillar plus the highest score in the bank (82). Draft this one.
2. Approval is where founder content dies. Gap pillar, and it has surfaced on two separate calls in one week; unscored, but the resurfacing signal outweighs C2's 76 from a single mention.
3. The first draft belongs on a call. Solid 76, but its pillar is not the gap.
Deferred: The 90-day number post. Wake condition has not fired; it jumps the queue the day the number closes, and not before.
Deferred: Repetition is a feature. Lowest score, non-gap pillar; it keeps.

The winner goes to a drafting skill with its verbatim quote attached. Status flips to drafted only when the draft exists.

## The prune, Jul 21

One parked block is older than 90 days with no wake condition:

```markdown
- Status: killed 2026-07-21: 113 days parked, no wake condition, never got past a topic
```

The block stays in the ledger as dedupe memory. The next "conference takeaways" impulse will hit it and either die again or arrive with an actual angle.

## Why the ledger wins

1. The wake condition beat the recency instinct. The baseline shipped C6 early because fresh felt urgent; the ledger held it until the number it needed exists.
2. The rerun never happened. The self-plagiarism check caught C5 against a published block on the day it surfaced, not after the feed noticed.
3. Quotes survived three weeks verbatim. The winning draft opens on the speaker's exact line, not a reconstruction with no receipts.
4. Two mentions became one strong candidate. Dedupe by angle turned C3's scattered fragments into the second-ranked idea; the baseline had two fragments and zero posts.
5. The withdraw answered a different question. Scrollback answers "what do I remember"; the ranking answers "what does the mix need", using pillar gap, score, and wake freshness.
6. One kill kept the bank a bank. The 113-day topic died with a recorded reason instead of padding every future ranking.
