# Configuration

Everything configurable in this repo, honestly. It is a short list.

## The pack

All personalization lives in one place: the `my-story/` directory at the repo root of your project. No config files, no dotfiles, no settings UI. Build it with the `voice-pack` skill, evolve it with `improve-my-pack`. Every skill declares which pack files it reads in its Personalization section, and every skill works with an empty pack.

`skills/story-context/scripts/check-pack.mjs` reports which pack files are filled, empty, or missing:

```bash
node skills/story-context/scripts/check-pack.mjs [path-to-my-story]
```

The path argument defaults to the `my-story/` next to the skills.

## Environment variables and API keys

None required. No skill needs an API key, a token, or a login. The only environment variables anywhere are two optional overrides in `pull-trends.mjs`, used by offline evals to point at a local fixture server:

- `PULL_TRENDS_HN_BASE` (default `https://hn.algolia.com`)
- `PULL_TRENDS_REDDIT_BASE` (default `https://www.reddit.com`)

You never need to set them in normal use.

## Script flags

Every deterministic check is a zero-dependency Node script. Exit code 0 means pass, 1 means the check failed, 2 means usage or environment error.

### skills/anti-ai/scripts/scan.mjs

```bash
node scan.mjs <file> [--exemptions <path/to/my-story/anti-patterns.md>]
cat draft.md | node scan.mjs [--exemptions ...]
```

`--exemptions` loads your personal exemptions so authentic quirks never flag. Exit 1 when ban-severity tells are found.

### skills/hooks/scripts/check-fold.mjs

```bash
node check-fold.mjs <linkedin|x|email-subject|email-preview|video> "hook text"
```

Checks the hook against the platform fold: 210 characters on LinkedIn mobile, 280 on X, 50 for email subjects, 90 for preview text, roughly 8 words in a video's first 3 seconds.

### skills/voice-pack/scripts/fingerprint.mjs

```bash
node fingerprint.mjs <file> [file...]
```

Measures the rhythm fingerprint of any set of files: sentence lengths, paragraph shape, contraction rate, person. Run it on approved posts, then on a draft, and compare.

### skills/draft-qa/scripts/check-length.mjs

```bash
node check-length.mjs <file> --min 120 --max 250
node check-length.mjs <file> --platform linkedin
```

Pass `--min`/`--max` from your measured range in `my-story/voice-model.md`. With an empty pack, pass `--platform` for the default band: linkedin 80 to 300 words, newsletter 300 to 1500, short-video 40 to 220, x 15 to 60.

### skills/clip-finder/scripts/parse-transcript.mjs

```bash
node parse-transcript.mjs <transcript-file> [--gap-threshold <seconds>]
```

Normalizes timestamped transcripts into parseable segments.

### skills/connections-icp-match/scripts/parse-connections.mjs

```bash
node parse-connections.mjs <Connections.csv> [--json] [--keywords "founder,ceo,vp"]
```

`--json` emits a normalized JSON array; `--keywords` keeps only positions matching any keyword. Flags combine.

### skills/what-worked/scripts/compute-weights.mjs

```bash
node compute-weights.mjs posts.csv
```

Expects columns date, hook, pillar, format, length, impressions, reactions, comments (order free, extras ignored). Scores each post as a ratio to your own median, never as an absolute.

### skills/format-remix/scripts/check-overlap.mjs

```bash
node check-overlap.mjs <original-file> <remix-file>
```

Fails when a remix copies the original's language instead of its format.

### skills/newsjacking/scripts/pull-trends.mjs

```bash
node pull-trends.mjs --hn "AI agents" [--limit N]
node pull-trends.mjs --reddit marketing
node pull-trends.mjs --rss <url or local file path>
```

One mode per run. `--limit` defaults to 15.

### skills/comment-strategy/scripts/pull-sources.mjs

```bash
node pull-sources.mjs [--reddit SUB]... [--hn "query"]... [--bluesky "query"]... [--rss <url-or-local-path>]... [--limit N]
```

Flags repeat to pull multiple sources in one run. `--limit` caps items per source (default 20).

### Repo root

```bash
node scripts/validate-skills.mjs   # every SKILL.md against the house standard
node scripts/run-evals.mjs         # every skills/*/evals/evals.json case
```

## Network

Exactly two scripts touch the network: `pull-trends.mjs` (Hacker News, Reddit, RSS) and `pull-sources.mjs` (Reddit, Hacker News, Bluesky, RSS). Both hit public endpoints; no authentication.

Offline, `pull-trends.mjs` prints the failing URL and exits 2. `pull-sources.mjs` reports each failed source with `PULL FAILED`, keeps pulling the rest, prints whatever it got, and exits 2 if anything failed. Both accept a local file path for `--rss`, so you can run them fully offline against saved feeds. Every other script is pure local file processing.

## Where loop state lives

Recurring workflows accumulate in one ledger: `my-story/what-worked.md`. `what-worked` writes the dated weights block (and is the only skill that writes weights); `comment-strategy`, `engagement-to-pipeline`, `press-quotes`, and `founder-pitch` append their dated roll-ups; `hooks`, `linkedin-post`, `format-remix`, and `improve-my-pack` read it. Newest block at the top. Delete a block and the system simply forgets that cycle; nothing else breaks.
