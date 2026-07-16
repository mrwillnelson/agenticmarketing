---
name: competitor-listening
description: Monitor named competitors' public narrative, track how their positioning shifts over time, and map the open ground your story can credibly claim. Use when the user asks what competitors are saying, wants a weekly or monthly competitive review, notices a rival changing their message, or asks where their own positioning has room nobody else occupies.
---

# Competitor Listening

Watch what competitors say in public, in their own words, and read the change over time. A feature table tells you what they built; their language tells you where they are going and what they gave up on. The output is a private competitive brief: each competitor's current position with verbatim evidence, a shift log, a map of the narrative ground nobody occupies, and at most two recommended moves. The brief informs your narrative. It never attacks theirs.

## Hard rules

1. Public information only. Their posts, their site, their changelog, their podcast appearances. Never scrape logged-in surfaces; LinkedIn and X material is pasted or exported by the user, same law as `comment-strategy`.
2. Verbatim evidence law: never state a competitor's position without quoting their own words, dated. A paraphrase of what "they basically say" is a guess that will misdirect your whole map.
3. Never misrepresent. If a quote is ambiguous, say it is ambiguous. If the evidence is thin, say the read is provisional. A brief built on a strawman produces a narrative aimed at nothing.
4. Never disparage. The brief exists to sharpen YOUR positioning, not to draft attacks. No mocking quotes, no "they don't get it" lines, no takedown posts.
5. Competitor names stay in the private brief and out of published content, unless the user explicitly decides otherwise for a specific piece.
6. Open ground must be credible ground. Naming unclaimed territory you have no standing to occupy is fantasy, not strategy; check every claim against `my-story/pillars.md` and `narrative.md` before recommending it.
7. At most 2 recommended moves per brief. A brief with ten moves is a backlog, not a decision.

## Procedure

1. Load the watch list: the competitors section of `my-story/listening-sources.md`, maintained by the user. Each entry names the competitor and their public sources: blog or site pages, changelog, podcast appearances, RSS feeds, and which material arrives paste-based (LinkedIn, X) versus scriptable. If no competitors section exists, help the user add one before running; two to five competitors is plenty.
2. Pull the review window (weekly or monthly, whichever cadence the user runs):
   - Scriptable sources go through `skills/comment-strategy/scripts/pull-sources.mjs` (`--rss` for blogs and changelogs, `--hn`, `--reddit`, `--bluesky` for mentions). Reuse that script; never duplicate it.
   - Paste-based sources: ask the user for competitor posts they saw on LinkedIn or X this window. Missing paste-based material is a stated gap in the brief, not a reason to guess.
3. Extract each competitor's current positioning in their own words: 2 to 4 verbatim quotes with dates and sources. Who do they say they serve, what do they claim to be, what do they promise. The quote is the record; the change in quotes across reviews IS the signal.
4. Run shift detection against the previous brief's quotes:
   - New words: terms that entered their messaging this window.
   - New audiences: segments they started addressing.
   - Dropped claims: things they used to say and stopped saying. A dropped claim is the loudest signal; companies quietly stop saying what stopped being true or stopped selling.
   First review has no baseline, so the brief says "baseline established" and shift detection starts next cycle.
5. Map the open narrative: lay every competitor's position next to `my-story/narrative.md`. Name the ground nobody occupies, then apply rule 6: keep only the ground the user can credibly claim, with the pillar or narrative line that earns it. Occupied ground and non-credible ground are listed too, so the user sees why they were passed over.
6. Write the competitive brief:
   - Per competitor: a one-sentence position statement, its verbatim quotes with dates, and this window's shifts.
   - The shift log: dated, cumulative across reviews.
   - The open-ground map from step 5.
   - At most 2 recommended moves, each one of: a narrative post claiming open ground (drafted with the thought-leadership craft via `thought-leadership-hooks` and `linkedin-post`), or a newsjack when a competitor move opened a window in the live conversation (handed to `newsjacking`, whose gates apply in full).

For a full worked review, baseline versus with-skill, on two labeled synthetic competitors, read [references/bakeoff.md](references/bakeoff.md).

## Personalization

Reads from `my-story/`:

- `listening-sources.md`: the competitors section is the watch list; the do-not-engage list still applies (a competitor thread you monitor is usually one you never comment in).
- `narrative.md`: the fixed point the open-ground map is drawn against. Without it, step 5 can say what ground is empty but not what is yours.
- `pillars.md`: the credibility check on every open-ground claim, and keywords for the scriptable pulls.

With an empty pack the skill still extracts positions and detects shifts, because those depend only on the competitors' public words. But the open-ground map degrades to "unclaimed by them, unknown for you" and no moves are recommended, because rule 6 cannot be checked. Say so in the brief and run `voice-pack` to fill `narrative.md` and `pillars.md` first.

## Examples

Bad: "Northbeam Labs is basically pivoting to enterprise and abandoning SMBs."
Better: "Northbeam Labs, 2026-06-30, homepage hero: 'Built for revenue teams of 50 or more.' On 2026-04-02 the same page read 'For teams of any size.' The SMB claim was dropped between those dates. Read: an enterprise move, provisional until their next two posts confirm it."
Why: the bad one is a paraphrase with no evidence, so the map inherits a guess; the better one quotes both dates, names the dropped claim, and marks the read provisional.

Bad: "Recommended move: a post about how Cadence AI's 'fully autonomous' claim is snake oil and their customers are waking up."
Better: "Recommended move: Cadence AI stopped saying 'no human in the loop' this quarter. That vacates the human-plus-agent ground our narrative already claims. Draft a narrative post on why the editor stays in the loop, from our own production numbers. No competitor named in the post."
Why: the bad one disparages and publishes a competitor's name; the better one converts the same signal into a post about the user's own position.

Bad: "Open ground: nobody in the category is talking about enterprise security compliance. Claim it."
Better: "Enterprise compliance is unclaimed, and also not ours: no pillar covers it and nothing in narrative.md earns it. Passed over, with the reason stated. The unclaimed ground we CAN take is per-client learning loops, backed by the narrative's managed-layer bet."
Why: unclaimed and claimable are different tests; the better one applies rule 6 instead of chasing every empty space.

Bad: "Pulled their LinkedIn posts with a headless browser since there's no API."
Better: "LinkedIn has no public pull. Asked the user to paste the three competitor posts they saw this week, and logged the gap: 'no LinkedIn material for Cadence AI this window.'"
Why: the bad one scrapes a logged-in surface, which rule 1 bans outright; the better one uses the paste-based path and keeps the brief honest about what is missing.

## Self-check

- Is every position statement backed by verbatim quotes with dates and sources, none paraphrased?
- Did every source come from public surfaces, with LinkedIn and X material pasted by the user?
- Did shift detection check all three signals: new words, new audiences, dropped claims?
- Is every open-ground claim checked against pillars and narrative, with passed-over ground listed and reasoned?
- Does the brief contain zero disparagement, and do the recommended moves keep competitor names out of anything publishable?
- Are there at most 2 recommended moves, each routed to the right sibling skill?
- Is anything uncertain marked provisional instead of stated as fact?

## Related skills

- `outlier-analysis`: when a competitor's content performs, hand the posts there to learn why the format works; this skill tracks what they claim, that one extracts how their content earns attention.
- `newsjacking`: when a competitor move creates a live story, its window rules and narrative-fit gate govern the reactive post; this skill only spots the opening.
- `comment-strategy`: shares `my-story/listening-sources.md` and its `scripts/pull-sources.mjs` for every scriptable pull; the do-not-engage discipline carries over.
- `what-worked`: after a recommended move ships, its results feed back through here, so next cycle's brief knows which claimed ground actually moved anything.

Together these form the starter for System 2: Agentic Competitive Intelligence.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
