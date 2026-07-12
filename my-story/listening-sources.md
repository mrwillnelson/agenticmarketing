<!--
my-story/listening-sources.md
Where you listen for conversations worth joining, so commenting replaces feed-scrolling.
Skills that read it: comment-strategy (builds the daily comment queue from these
sources and refuses to run without them).
How to fill: list the people and places where your ICP already talks. Split by how
the source is pulled: LinkedIn and X have no good public API, so you paste or export
what you saw there; Reddit, HN, Bluesky, and RSS are pulled by
skills/comment-strategy/scripts/pull-sources.mjs. Never scrape.
The worked example below is Will Nelson's real starter list, founder of 64stories.com,
derived from his ICP and pillars. Replace it with yours.
-->

# Listening sources

## Target accounts

### LinkedIn and X (paste-based: you supply what you saw)

List 10 to 20 named people you want a real relationship with. Will's slots, fill with names:

- B2B founders and CEOs posting weekly about founder-led growth or company narrative.
- VP Marketing or Head of Marketing at funded, founder-led B2B companies.
- Content and social leads who run a founder's LinkedIn today and say it is stalling.

### Reddit, HN, Bluesky, RSS (scriptable)

- Bluesky: accounts posting under searches "founder led" and "content strategy".
- HN: authors who repeatedly submit or discuss marketing, storytelling, and AI content.

## Intent keywords

Each keyword earns its slot with one example of a post it should catch:

- "founder led content": a founder asking whether posting themselves actually drives pipeline or is vanity.
- "LinkedIn ghostwriter": a CEO asking if hiring one is worth it, or complaining theirs sounds generic.
- "content agency": a marketer asking how to evaluate agencies for exec content.
- "company narrative" / "positioning": a leader saying every exec tells the story differently.
- "CEO LinkedIn": a marketing lead tasked with making the founder's account work.

## Subreddits and communities

- r/marketing
- r/Entrepreneur
- r/SaaS
- r/startups
- r/agency

## Saved-search URLs and pulls

Run the scriptable set in one line each morning:

```bash
node skills/comment-strategy/scripts/pull-sources.mjs \
  --reddit marketing --reddit Entrepreneur --reddit SaaS \
  --hn "founder content" --hn "ghostwriter" \
  --bluesky "founder led" \
  --rss "https://news.google.com/rss/search?q=%22founder-led%22+content&hl=en-US&gl=US&ceid=US:en"
```

## Do-not-engage

Never comment here, whatever the score:

- Competitors' threads: other founder-content agencies and ghostwriting shops
  announcing wins or pitching. Commenting there looks predatory, even when helpful.
- Threads where a 64stories client or prospect is being criticized by name.
- Anything mid-negotiation: accounts currently in the sales pipeline stay with sales.
- Politics, layoffs gossip, and personal drama. Off-pillar, all downside.
