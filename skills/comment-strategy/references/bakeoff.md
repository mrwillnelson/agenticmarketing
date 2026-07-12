# Bake-off: feed-scroll vs scored queue

One morning's candidates handled two ways. All six posts below are invented for this exercise; the ICP and the voice are real: Will Nelson, founder of 64stories.com, whose `icp.md` targets B2B founders and CEOs plus marketing leaders at founder-led companies, and whose `listening-sources.md` lists r/marketing, r/Entrepreneur, r/SaaS, keywords like "founder led content" and "LinkedIn ghostwriter", and a do-not-engage entry for competitor agencies' promo threads.

## The candidates (synthetic)

| # | Source | Post | Author | Signals |
|---|--------|------|--------|---------|
| 1 | r/Entrepreneur, 3h old | "Thinking of hiring a LinkedIn ghostwriter for my B2B startup. $3k/mo. Everyone says my posts sound like a press release. Worth it or a scam?" | Founder, seed-stage B2B | 40 upvotes, 31 comments, still rising |
| 2 | LinkedIn (pasted by user), 2h old | VP Marketing at a founder-led Series B: "Our CEO finally agreed to post weekly. Six weeks in: impressions up, pipeline flat. Starting to think exec content is a vanity channel." | VP Marketing, ICP secondary | 85 reactions, 19 comments, rising |
| 3 | X (pasted by user), 5h old | Viral meme about a celebrity's product launch fail. Nothing to do with B2B, content, or founders. | Meme account | 41,000 likes |
| 4 | HN, 6h old | Story: "AI-generated LinkedIn posts are eating the platform" with a technical thread on detection and slop | Engineer-founder | 212 points, 140 comments |
| 5 | Bluesky, 1h old | Post from a marketing lead Will has been warming: "Realizing our sales deck, website, and CEO's talk track tell three different stories. Fun week ahead." | Content lead at a B2B startup | 9 likes, 3 replies |
| 6 | LinkedIn (pasted by user), 4h old | A competing founder-content agency announcing a client win, comments full of congratulations | Competitor agency founder | 300 reactions |

## Baseline: the feed-scroll

No sources, no scoring. The user opens the feed, sees candidate 3 first because 41,000 likes is what feeds surface, and comments there "because it is big":

> "Haha this is why marketing matters!"

Then, low on time, drops the same reply on candidates 1 and 2:

> "Great question! Founder-led content is definitely the way to go."

What happens: the meme comment reaches 41,000 people, none of whom buy founder content, and reads as reach-chasing to anyone who checks the profile. The two generic comments land in front of actual buyers and say nothing; the founder in candidate 1 upvotes the commenter who shared real numbers instead. Three comments, zero conversations, and the competitor thread got a congratulations too, which its author will happily screenshot.

## With the skill: the scored queue

Candidate 6 never reaches scoring: competitor promo threads are on the do-not-engage list. The rest, scored 0 to 3 per dimension, weights ICP 2x, intent 2x, opportunity 2x, reach 1x, recency 1x:

| # | ICP fit | Intent | Opportunity | Reach | Recency | Total /24 | Call |
|---|---------|--------|-------------|-------|---------|-----------|------|
| 1 | 3 | 3 | 3 (real numbers, disclosure) | 1 | 3 | 22 | Tier 1, comment now |
| 2 | 3 | 3 | 3 (he has the counter-case) | 2 | 3 | 23 | Tier 1, comment now |
| 5 | 2 | 3 | 2 (build-on, keep it light) | 0 | 3 | 17 | Tier 3, quick reply |
| 4 | 1 | 2 | 2 (practitioner angle, high bar) | 3 | 2 | 15 | Tier 2 only if the angle survives HN scrutiny |
| 3 | 0 | 0 | 0 | 3 | 2 | 5 | Ranked out. Opportunity 0 drops it regardless |

Queue of four, not ten. Nothing else earned a slot, so nothing else got one.

## Tier 1 draft for candidate 1, in Will's voice

> I run a founder content shop, so weigh that however you want. In every "sounds like a press release" case I've seen, the founder outsourced the thinking along with the typing, and the writer gets blamed for both. When we grew a CEO's account 500% in 90 days, the CEO still spent an hour every two weeks shaping posts with us, arguing about which milestones were true enough to tell. That hour is the product. A $3k ghostwriter who never gets that hour will give you polished posts that sound like nobody. Ask any writer you're vetting how much of your time they demand. If the answer is "almost none," that's your press release machine.

## What changed, annotated

- The meme scored highest on reach and still ranked out, because opportunity is 0 and a 0 there drops the candidate. Reach without a real contribution is spectacle, not distribution.
- The competitor thread was excluded before scoring, not after. The do-not-engage list is a gate, not a dimension.
- The tier 1 draft discloses the conflict up front, which is what Reddit requires to hear anything else. It spends a real number (500% in 90 days, from Will's published post of 2026-03-12), names a mechanism, and ends with a usable vetting question. No link, no "DM me".
- The draft is on-fingerprint: long reasoning sentences mixed with fragments, I/we from inside the work, no exclamation points, no em dashes, ends a beat early on something the reader can do.
- Candidate 5 gets one true sentence, not an essay. She is being warmed; the goal is presence, and her thread only needs a build-on: the reply can point at the pattern (three stories means a strategy gap, not a messaging gap) in one line.
- Candidate 4 is conditional. HN will test any claim, so the comment only ships if it can cite firsthand practice without marketing flavor. If that version does not materialize, the queue stays at three.
- The log after the morning: four names, tiers, and threads. If the founder from candidate 1 replies, next week's roll-up hands the thread to `engagement-to-pipeline`.
