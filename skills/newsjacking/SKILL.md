---
name: newsjacking
description: React to a story trending in your space with a founder take that traces to real experience, while the window is still open. Use when news breaks in your industry, when the user shares a headline or link and wants a take, or when scanning for reactive post opportunities. Covers trend detection, the newsworthiness rubric, the narrative-fit gate, hard disqualifiers, and an optional journalist note.
---

# Newsjacking

A story is moving in your space and the window is short: hours for breaking tech news, a day or two for slower waves. The job is to inject an authentic founder take while people still care, not to summarize the news. The post for your own feed is the primary output; a short note to a journalist covering the story is the optional secondary. What makes a take publishable here is that it is earned: traced to your narrative and to something you actually did or saw.

## Hard rules

1. The window rules everything. Score recency first, and when the window is stale (past roughly 48 hours for tech news, sooner for true breaking stories), decline and say why. A late take is noise wearing a timestamp.
2. The narrative-fit gate is hard. The angle must trace to `my-story/narrative.md` and to something the user actually did or saw: a real experience, a real number, a real client moment. If the only take available is agreement or summary, that is an empty take, disqualified.
3. Tragedies and personal misfortunes are never marketing surfaces. Layoff waves, deaths, disasters, and scandals hurting real people are refused without exception, no matter how relevant or fresh.
4. Forced fits are disqualified. If connecting the story to the user needs a paragraph of setup, there is no connection.
5. Never invent experience, numbers, or standing to qualify a candidate. Manufactured receipts are worse than silence.
6. The hook references the story without restating the headline. Readers already saw the headline; give them the thing they have not seen.
7. The post is drafted through the `linkedin-post` skill's discipline and gates, in the user's measured voice, ending without a bow.
8. The journalist note, when written at all, stays under 60 words: their article, one quotable data point, availability today.

## Procedure

1. Detect. Run `scripts/pull-trends.mjs` against the user's space keywords (derive them from `my-story/pillars.md`, or ask):

   ```bash
   node scripts/pull-trends.mjs --hn "AI agents"
   node scripts/pull-trends.mjs --reddit marketing
   node scripts/pull-trends.mjs --rss "https://news.google.com/rss/search?q=founder+led+content"
   ```

   Output is ranked with the age of every item shown first, because the window matters most. `--rss` also accepts a local file path for a saved feed. Network failure exits 2 with a clear message. When the user brings a story directly, skip to step 2.
2. Score each candidate on the newsworthiness rubric. All five must pass:
   - Recency: the window is still open (use the script's window guide).
   - Relevance: the story sits inside a pillar from `my-story/pillars.md`.
   - Audience overlap: the people talking about this include the people the user wants to reach.
   - Standing: the user has done work that gives them the right to speak on it.
   - Angle: a contrarian or additive take is available, not just a reaction.
3. Apply the narrative-fit gate to the survivors. Write one line tracing the angle to `my-story/narrative.md`, and one line quoting the real experience or number that backs it, verbatim from the user's material. No trace, no post.
4. Check the hard disqualifiers: tragedy or personal misfortune, forced fit, stale window. Refuse those candidates explicitly, with the reason, so the user learns where the boundary sits.
5. Write the angle brief, three lines: the story in one sentence, the earned angle in one sentence, the verbatim experience or number that backs it.
6. Draft the post via `linkedin-post`, which loads `hooks` for the opener. The hook references the story without restating the headline, the body carries the take with its receipt, and it ends on the strongest concrete beat, without a bow.
7. Optional: the journalist note, only when a specific journalist is actively covering the story. Sixty words or fewer: name their article, offer the one quotable data point, state availability today. Deeper journalist work belongs to `founder-pitch`.

## Personalization

Reads from `my-story/`:

- `pillars.md`: keywords for detection in step 1 and the relevance check in step 2.
- `narrative.md`: the narrative-fit gate in step 3 traces every angle here.
- `voice-model.md`: the measured voice the drafted take carries.

With an empty pack the skill still works, but the gates go manual: ask the user for their space keywords before scanning, and for one real experience or number that backs the angle before drafting. Without that answer there is no post, because rule 2 still applies. Run `voice-pack` once to make the gates automatic.

## Examples

All stories below are invented for illustration.

Empty take vs earned angle.
Bad: "The new agent-reliability study confirms what many of us have been saying: trust is the real bottleneck for AI adoption."
Better: "That agent-reliability study matches what our own logs showed in March: 9 of the 40 workflows we automated were quietly switched back to manual within a month, and nobody filed a ticket about it."
Why: the bad one agrees with the headline and adds nothing a reader could not write themselves; the better one brings a number the study does not have, from work the founder actually did.

Forced fit vs natural fit.
Bad: "A social app hit 100M users this week. It got me thinking about invoicing software, because growth like that always comes back to fundamentals, and fundamentals are what we obsess over at our invoicing company."
Better: "The late-payment regulation everyone is debating? Our support inbox predicted it: chasing overdue invoices has been our users' top complaint for six straight quarters."
Why: the bad one needs a paragraph of setup to reach the founder's world; the better one connects in one line because the story already lives where the founder works.

The refusal is output too.
Bad: "The layoff wave hitting agencies this week proves what I have said for years about lean teams."
Better: no post, with the reason stated: "Declining this one. It is a layoff wave hurting real people, and rule 3 refuses those regardless of relevance."
Why: the bad one converts other people's bad week into reach; the better one is the skill working as designed.

Full worked comparison, baseline vs with-skill, plus a refused candidate: see [references/bakeoff.md](references/bakeoff.md).

## Self-check

- Is the window still open right now, at posting time, not just when the scan ran?
- Does the angle trace to `narrative.md` and to a named real experience or number, quoted verbatim in the angle brief?
- Delete the headline from the draft: does a take remain, or only agreement?
- Does the hook reference the story without restating the headline?
- Did any candidate trip a disqualifier, and was it refused explicitly with the reason?
- Does the post end without a bow, and did it pass the `linkedin-post` gates?
- If a journalist note exists: under 60 words, one quotable data point, availability stated?

## Related skills

- `linkedin-post`: drafts the post in step 6; its rules and gates apply in full.
- `hooks`: pressure-tests the opener; loaded by `linkedin-post`.
- `founder-pitch`: the journalist side at depth, with relationships and full pitches. This skill's 60-word note is only the fast touch while the story is live.
- `milestone-hooks`: when the news is your own company's announcement rather than the market's story.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
The full Agentic Marketing System runs this against your real calls with a human editor and a per-post learning loop; narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
