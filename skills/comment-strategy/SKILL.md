---
name: comment-strategy
description: The daily listening loop that replaces feed-scrolling. Surface the 10 best posts and threads to comment on this morning, draft each comment in the user's voice, and log what compounds. Use when the user asks what to comment on, wants a daily engagement queue, wants comments drafted for a thread they found, or wants to warm target accounts before outreach. Covers source pulling, weighted scoring, comment tiers, platform etiquette, and the weekly roll-up.
---

# Comment Strategy

Commenting is outbound attention: showing up in other people's threads, on purpose, with something real. Ten good comments a day beat an hour of scrolling because every one lands in front of someone chosen in advance. This skill pulls candidates from the user's listening sources, scores them, drafts the comments, and logs the reps so the warm list grows week over week.

## Hard rules

1. Never comment on anything in the do-not-engage list in `my-story/listening-sources.md`. A high score does not override the list; check it first.
2. If the thread is complete without you, skip it. The correct queue is sometimes 4 items, not 10. Filler comments are wasted reps; never pad the queue.
3. No links in tier 1 and tier 2 comments. No pitch, no offer, no "we do this at" in any tier. The comment gives; the profile sells.
4. Disagree with ideas, never with people. Quote the idea you are pushing on, concede what is right first, and keep the person's competence out of it.
5. LinkedIn and X are never scraped. The user pastes or exports what they saw there. The script pulls only public JSON and RSS endpoints (Reddit, HN, Bluesky, RSS).
6. Voice rules apply to comments exactly as to posts. `voice-model.md`, `lexicon.md`, and `anti-patterns.md` govern every draft, and every draft passes the `anti-ai` scan. "Great post!" is a wasted rep; an AI-sounding comment is worse than none.
7. Every claim in a comment comes from the user's real experience or real numbers. Never invent a stat or a war story to sound substantive.

## Procedure

1. Load `my-story/listening-sources.md`. If it is missing or empty, stop and fill it first (see Personalization).
2. Pull candidates:
   - Scriptable sources: `node scripts/pull-sources.mjs --reddit SUB --hn "query" --bluesky "query" --rss <url>`. Flags repeat; the output is a normalized list with source, snippet, author, age, url, and engagement. On a pull failure the script says which source failed and exits 2; continue with what pulled and tell the user what is missing.
   - LinkedIn and X: ask the user to paste posts they saw, or notifications from target accounts. Treat pasted items as candidates like any other.
3. Drop anything on the do-not-engage list before scoring.
4. Score every remaining candidate on five dimensions, each 0 to 3:
   - ICP fit, weight 2x: is the author or the audience of this thread the buyer in `icp.md`?
   - Intent signal, weight 2x: are they discussing the problem the user solves, not just the industry?
   - Comment opportunity, weight 2x: can the user add something real: a number, a lived experience, a correction, a build-on? A 0 here drops the candidate no matter the total.
   - Reach potential, weight 1x: audience size, velocity, or an early position on a rising post.
   - Recency, weight 1x: fresher threads have open conversations; a 5-day-old thread is usually closed.
   Weighted total out of 24. Ties break toward ICP fit.
5. Build the queue: the top candidates, 10 at most, each with its score, its tier, and a draft comment. Tiers:
   - Tier 1, the relationship rep: reserved for high-intent ICP and the accounts you are deliberately warming. A substantive comment from the user's real experience. No link, no pitch, ever.
   - Tier 2, visibility play: large-reach threads in the user's space. Add the insight the thread is missing, the one nobody has said yet. No link.
   - Tier 3, light touch: quick genuine reactions to people the user is warming. One true sentence beats three crafted ones.
6. Draft each comment in the user's measured voice and run the `anti-ai` scan on all of them before showing the queue.
7. Respect platform etiquette:
   - Reddit despises marketing-flavored comments. Contribute as a practitioner or stay out; disclose when commenting near your own trade.
   - HN has a high technical bar and no tolerance for fluff. Comment only with substance you could defend in the thread.
   - LinkedIn rewards early substantive comments on rising posts. Speed matters; generic speed does not.
   - Bluesky is conversation-first. Reply like a person joining a conversation, not an account building reach.
8. Log the reps: after the user comments, record a dated line per comment (person, platform, tier, thread) and note replies as they come in. Weekly, append a roll-up block to `my-story/what-worked.md`: who replied, who is warming, which sources produced the best threads. Hand the repliers to `engagement-to-pipeline` for its warm list.

For the whole loop run against a real morning's candidates, read [references/bakeoff.md](references/bakeoff.md): six candidates, the feed-scroll baseline, and the scored queue with a tier 1 draft.

## Personalization

Reads from `my-story/`:

- `listening-sources.md`: the sources, keywords, target accounts, and do-not-engage list. When missing or empty, do not improvise sources; help the user fill the template FIRST. Walk its sections in order: target accounts (paste-based vs scriptable), intent keywords with one example post each, subreddits, saved searches, do-not-engage. Then run the loop.
- `icp.md`: powers the ICP-fit dimension. If empty, run the 5-question draft from `connections-icp-match` before scoring.
- `voice-model.md`: rhythm and register for every draft comment.
- `lexicon.md`: the words the user actually says; swap synonyms for these.
- `anti-patterns.md`: hard rejects for comment drafts, same as for posts.

With only `listening-sources.md` filled, the skill still pulls and scores, but drafts come back generic to the user's voice and ICP fit falls back to "confirm with user".

## Examples

Bad comment: "Great post! So true, founder-led content is the future."
Better: "The 'too technical' excuse is the one I hear most. A founder I work with blamed that for a year. The real blocker was that he hadn't decided what the company was not. Once he cut two product lines from the story, the writing took twenty minutes."
Why: the bad one could be posted by anyone under anything and reads as AI; the better one adds a lived pattern, a specific cost, and gives the thread something to respond to.

Bad comment: "We wrote about exactly this, check it out: [link]."
Better: "We ran this test on a CEO account for 90 days. Milestones told in the CEO's voice, nothing else changed, and the account grew 500%. The surprising part was which milestones worked. Funding posts did nothing; process posts did the growing."
Why: the link-drop takes attention and gives nothing; the value-add spends a real number and an unexpected detail in the thread itself, and the profile click follows on its own.

Bad disagreement: "This is bad advice and shows you've never actually run founder content."
Better: "The consistency point holds for reach. It broke for us on pipeline. We doubled a founder's posting for a quarter and pipeline did not move a dollar. Volume was never the constraint; relevance to buyers was."
Why: the bad one attacks the person and closes the conversation; the better one concedes what is right, then pushes on the idea with evidence.

## Self-check

- Did anything from the do-not-engage list slip into the queue?
- Does every queued item have a real comment opportunity, or did filler creep in to reach 10?
- Do any tier 1 or 2 drafts contain a link, a pitch, or a soft offer?
- Would the user actually say each draft out loud? Did every draft pass the anti-ai scan?
- Is every number and story in the drafts from the user's real material?
- Do disagreements target ideas and concede what is right first?
- Are LinkedIn and X items all pasted by the user, none scraped?
- Is the log updated, and is the weekly roll-up scheduled or written?

## Related skills

- `engagement-to-pipeline` is the complement: it converts inbound engagement on the user's own posts; this skill generates outbound attention in other people's threads. Repliers from the weekly roll-up feed its warm list.
- `connections-icp-match` shares the tier discipline: score against `icp.md`, tier down when unsure, and draft `icp.md` with the user when it is empty.
- `what-worked` receives the weekly roll-up, so the next cycle weights the sources and comment styles that earned replies.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
