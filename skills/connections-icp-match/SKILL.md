---
name: connections-icp-match
description: Turn an exported LinkedIn connections list into a ranked audience map against your ICP. Use when the user has a Connections.csv export (or wants to get one), asks who in their network fits their ICP, who to re-engage, or how to plan first touches to their existing connections. Covers the export steps, local parsing, tiered A/B/C/D scoring, and a no-pitch first-touch plan.
---

# Connections ICP Match

Your existing network is the cheapest audience you will ever reach. This skill maps every LinkedIn connection against the ICP in `my-story/icp.md`, tiers them honestly, and turns the top tier into a first-touch plan that opens conversations instead of burning them.

## Hard rules

1. The export stays local. Never send the CSV, any row of it, or any contact's name, email, or URL to an external service, API, enrichment tool, or web search. Parse and score entirely in-session.
2. The data in this file belongs to the user's connections, not just the user. Remind the user of that once per run: handle it respectfully, no bulk exports to other tools, no cold email lists.
3. Scoring is tiered, not fake-precise. Four tiers only: A, B, C, D. No numeric scores, no percentages, no confidence decimals. A row supports a tier or it does not.
4. An A requires both signals: the title matches the ICP role AND the company name or position implies the ICP company type. One strong signal is a B, never an A.
5. Infer only what the row supports. Company type and size come from the company name and position text alone. When unsure, tier down. A contact with empty Company and Position caps at C.
6. Never a pitch as the first touch. Every suggested message references shared context or their work and asks nothing for the sender.
7. Scoring requires `my-story/icp.md`. If it is empty or missing, draft it with the user first (see Personalization). Do not score against an ICP you invented.

## Procedure

1. Get the export. Walk the user through it if they do not have the file: LinkedIn > Settings & Privacy > Data privacy > Get a copy of your data > select Connections > Request archive. LinkedIn emails a zip, usually within about 10 minutes, containing `Connections.csv`.
2. Load `my-story/icp.md`. Extract three things: target titles and roles, company type and size signals, and disqualifiers. If the file is empty or missing, run the 5-question draft in Personalization before touching the CSV.
3. Parse the file locally:

   ```bash
   node scripts/parse-connections.mjs path/to/Connections.csv          # summary sanity check
   node scripts/parse-connections.mjs path/to/Connections.csv --json   # normalized array for scoring
   ```

   The script skips LinkedIn's preamble notes, handles quoted commas, and tolerates empty Company or Position fields. On very large exports, pre-filter with `--keywords "founder,ceo,vp"` to pull likely matches first, then still scan the remainder for B and C candidates the keywords missed.
4. Score every contact into a tier:
   - A: clear ICP. Title matches AND company type matches. Nothing hits a disqualifier.
   - B: likely. One strong signal: the title matches but the company is unreadable from its name, or the company is clearly ICP-type but the title is adjacent to the buyer.
   - C: adjacent, worth keeping warm. Influences the buyer, held an ICP role recently, or works at an ICP-type company in an unrelated function. Empty Company and Position lands here at best.
   - D: not ICP, or hits a disqualifier. Disqualifiers override everything else; check them first.
5. Output three things:
   - Counts per tier, plus how many rows were unscoreable and why.
   - The A-list as a table: name, title, company, connected-on date. Sort by connected-on, newest first.
   - A first-touch plan for the A-list, split by recency:
     - Connected within roughly the last 90 days: a context-reference message. Name where or why you connected, or something specific and recent about their company, and ask a question about their work.
     - Dormant A-tier (older than that): comment-first re-engagement. Comment on two or three of their posts over a week or two before any direct message. The DM, when it comes, references the thread, not an offer.
6. Close with the privacy reminder from hard rule 2 and suggest a next step: draft content the A-tier would engage with, or revisit the B-list after the user confirms a few tier calls.

## Personalization

Reads from `my-story/`:

- `icp.md`: the scoring rubric. Titles and roles, company type and size, buying trigger, disqualifiers.

When `icp.md` is empty or missing, draft it FIRST. Ask these five questions, one at a time, then write the answers into `my-story/icp.md` and confirm before scoring:

1. Who buys from you? Exact titles, not categories.
2. What kind of company are they at? Industry, stage, headcount band.
3. What pain are they in when they come looking for you?
4. What event triggers them to buy?
5. Who is never a fit, even when they look close?

Write only what the user says; leave gaps as questions in the file. A sharper `icp.md` moves contacts out of B and C and into confident A or D calls.

## Examples

Bad ICP line: "Marketing leaders at growing companies."
Better: "Head of Growth, VP Marketing, or a founder still running marketing themselves, at B2B SaaS companies between 10 and 100 people, post-revenue. Never agencies, never enterprise."
Why: the better one names titles, a company type, a size band, and disqualifiers, so any CSV row can be scored against it; the bad one matches half of LinkedIn.

Bad first touch: "Hi, congrats on all the growth! I help founders turn their sales calls into content that converts. Do you have 15 minutes this week?"
Better: "Saw your team just opened the second office. We connected after that ops meetup last spring. How is the new market treating you compared to the first?"
Why: the bad one asks for time before earning attention; the better one references shared context, shows the sender actually looked, and asks about the contact, not a meeting.

Bad tier call: "A contact with no position listed, company name only: A, because the name sounds like a startup."
Better: "A contact with no position listed, company name only: C. The name alone cannot confirm company type or role; flag the row for the user to confirm."
Why: the better call tiers down on missing evidence instead of guessing, which keeps the A-list trustworthy.

## Self-check

- Did any contact data leave the machine? The answer must be no.
- Is every A backed by both a title match and a company-type signal from the row itself?
- Did disqualifiers get checked before positive signals?
- Did unclear rows get tiered down rather than rounded up?
- Does every suggested first touch reference context and ask for nothing?
- If `icp.md` was empty, was it drafted with the user before any scoring?
- Did the output include tier counts, the A-list table, and the recency-split touch plan?

## Related skills

- The ICP definition lives in `my-story/icp.md`: `voice-pack` builds the initial skeleton, and this skill sharpens it through the 5 questions when it is empty.
- `what-worked` tells you which content the A-tier actually engages with; use it to choose what to post before the comment-first window opens.
- `linkedin-post` drafts the content the A-list should see while you warm them up.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
The full Agentic Marketing System runs this against your real calls with a human editor and a per-post learning loop; narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
