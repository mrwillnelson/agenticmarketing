# Bake-off: generic critique vs graded audit

The same five posts audited two ways. All five are real posts by Will Nelson, Founder of 64stories.com, published on LinkedIn between 2026-02-26 and 2026-03-25, with real captured engagement. His baseline is the measured fingerprint from his 33-post gold set: median post 79 words (range 18 to 2,410), median sentence length 18 words, 29% of sentences at 26 or more words, 1.8 contractions per 100 words, no rhetorical questions, no exclamation points, no hashtags. Every number in the with-skill audit below came from actually running the sibling scripts on these posts.

## The input

| Date | Opener (verbatim first line) | Words | Reactions | Comments |
|------|------------------------------|-------|-----------|----------|
| 2026-02-26 | "Ask a founder about storytelling and they'll point you to their marketing team." | 195 | 141 | 35 |
| 2026-03-03 | "669,000 impressions in 28 days from founder content on LinkedIn" | 240 | 17 | 3 |
| 2026-03-04 | "The fastest way to tell a company is drifting." | 37 | 51 | 13 |
| 2026-03-12 | "In the last 90 days, 64stories has grown an established CEO's LinkedIn account by 500% by doing something really simple." | 127 | 11 | 2 |
| 2026-03-25 | "I spent the last seven days breaking down how Notion's leadership used storytelling to build a $10 Billion brand." | 162 | 14 | 15 |

No impressions were logged, and `my-story/pillars.md` declares no target mix.

## Baseline: the critique without the skill

> Your content is in a good place overall, and your expertise clearly comes through. A few suggestions to level up: post more consistently, since gaps between posts hurt reach. Keep your sentences short and punchy, because LinkedIn rewards scannable writing. Your case studies (669k impressions, 500% growth) are impressive, so lead with numbers more often to build credibility. Add a clear call to action to every post. Engagement is a bit uneven, so consider posting at higher-traffic times and adding 3 to 5 relevant hashtags. Overall grade: B+.

## With the skill: the graded audit

Window: 5 posts, 2026-02-26 to 2026-03-25 (28 days; short of the 60-day target, so every grade prints its n).

### Scorecard

| Dimension | Grade | Evidence |
|-----------|-------|----------|
| Pillar mix | insufficient data | No target mix declared. Inferred shares: narrative-as-strategy 2 of 5, 64stories proof 2 of 5, founder breakdowns 1 of 5. |
| Voice drift | C (n=5) | fingerprint.mjs: median sentence 8 words vs 18 baseline, and every post sits below baseline on its own (8, 6, 9, 13, 10). Contractions 3.7 vs 1.8 per 100 words. Sentences of 26+ words: 0% vs 29%. |
| Hook entropy | C (n=5) | 3 of 5 openers are number-led (Mar 3, Mar 12, Mar 25 in the input table). Formula-fatigue flag at over half. No opener fully closes its loop. |
| Length drift | B (n=5) | Window median 155 words (fingerprint run) vs baseline 79; inside the measured range, but only one post runs under 80 words, and it took second place in reactions. |
| Engagement | insufficient data | compute-weights.mjs: "Only 5 scorable posts; need at least 8." No impressions logged. |
| AI-tell creep | B (n=5) | scan.mjs: 1 ban and 1 warn across 5 posts. The warn, "6 emoji in 162 words", is in the newest post (Mar 25). |

Scanner note: the one ban is a toggle in the Feb 26 post, `Positioning isn't the problem. That's a strategy problem`, which is also the window's top performer at 141 reactions. If that construction recurs across the approved corpus, record a `voice-pack` exemption; if it appears only here, it is a tell to watch, not a rewrite order.

### The three highest-leverage fixes

1. Break the number-led opener streak. Three of five openers lead with a stat: "669,000 impressions in 28 days from founder content on LinkedIn" (Mar 3, 17 reactions), "In the last 90 days, 64stories has grown an established CEO's LinkedIn account by 500% by doing something really simple." (Mar 12, 11 reactions), and "I spent the last seven days breaking down how Notion's leadership used storytelling to build a $10 Billion brand." (Mar 25, 14 reactions). Those three also hold the bottom three reaction counts; at 3 posts that is a lead, not a weight. Open the next proof post mid-story and hold the number until line three.
2. Put the reasoning sentences back. The baseline corpus carries 29% of its sentences at 26 or more words; this window has zero, and all five posts fingerprint below the 18-word baseline median. The window's top post (Feb 26, 141 reactions) is the one that still reasons in full sentences: "When you try to explain your strategy to someone who knows nothing about your space, you discover what you don't understand." Write next week's essay post at that cadence instead of stacking one-liners.
3. Get the engagement dimension a real grade. The weights script refuses below 8 posts and no post carries impressions. Log impressions for the live posts and for the next three; at 8 or more posts with metrics, the number-led lead in fix 1 gets a real weight instead of a hunch.

### What to do next week

Three posts. One narrative-as-strategy essay at the Feb 26 cadence, long sentences allowed. One short post under 40 words in the Mar 4 shape, since "The fastest way to tell a company is drifting." ran 51 reactions at 37 words. One proof post opened mid-story per fix 1. Log impressions on all three, then re-run this audit at 8 posts, once the weights script has enough to work with.

## Why the graded audit wins

The generic critique hands Will advice the measurements contradict: "short and punchy" when the shortening is the drift and his winners reason in long sentences, "lead with numbers more often" when his three number-led posts sit at the bottom of the window, hashtags his corpus has never used, and a B+ resting on nothing. The graded audit ran three scripts, pinned every claim to a number or a quoted line, refused to grade what 5 posts cannot support, and left a calendar he can execute on Monday. Every sentence in it can be checked against a script output or a named post, and that is what makes it actionable instead of agreeable.
