<!--
my-story/listening-sources.md
Where you listen for conversations worth joining, so commenting replaces
feed-scrolling. Skills that read it: comment-strategy (builds the daily
comment queue from these sources and refuses to run without them).
How to fill: list the people and places where your ICP already talks. Split by
how the source is pulled: LinkedIn and X have no good public API, so you paste
or export what you saw there; Reddit, HN, Bluesky, and RSS are pulled by
skills/comment-strategy/scripts/pull-sources.mjs. Never scrape.
The lines below show the expected format only.
-->

# Listening sources

## Target accounts

### LinkedIn and X (paste-based: you supply what you saw)

List 10 to 20 named people you want a real relationship with, one line each:
name, why they matter to your ICP, and what you can genuinely add to their
threads.

### Reddit, HN, Bluesky, RSS (scriptable)

- [platform]: [the accounts or searches worth pulling, e.g. authors who
  repeatedly post about your space]

## Intent keywords

Each keyword earns its slot with one example of a post it should catch:

- "[keyword]": [the post it should catch, written the way your buyer would
  phrase it]

## Subreddits and communities

- r/[subreddit relevant to your ICP]

## Saved-search URLs and pulls

Run the scriptable set in one line each morning, for example:

```bash
node skills/comment-strategy/scripts/pull-sources.mjs \
  --reddit YOURSUBREDDIT --hn "your keyword" \
  --bluesky "your phrase" \
  --rss "https://news.google.com/rss/search?q=your+query"
```

## Do-not-engage

Never comment here, whatever the score. Include the reason so the skill can
generalize:

- [e.g. direct competitors' threads: helpful comments still read as predatory]
- [e.g. accounts mid-negotiation: they stay with sales]
- [e.g. politics, layoffs gossip, personal drama: off-pillar, all downside]
