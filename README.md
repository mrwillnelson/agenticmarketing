# Agentic Marketing Skills

Open-source agent skills for founder content. The system from raw conversation to published post to pipeline, packaged as skills for Claude Code, Codex, Cursor, and any agent that reads the Agent Skills spec.

The thesis:

```
LISTENING ──────────▶ NARRATIVE ──────────▶ DEMAND
find the raw truth    make it public         turn attention
in what you already   language that sounds   into pipeline
say and do            like you
```

Most founders have the raw material for a year of content sitting in their calls, and most content tools skip straight to writing. These skills work the whole chain: listen to what you already said, shape it into language that sounds like you, and point the attention it earns at your ICP.

Most content skills also produce the same output for every user. These get better the more they know about you: a `my-story/` pack holds your voice model, your banned patterns, your pillars, and your ICP, and every skill reads from it. The `voice-pack` skill builds the pack for you from your own posts and transcripts in about ten minutes.

## Install

```bash
npx skills add mrwillnelson/agenticmarketing            # everything
npx skills add mrwillnelson/agenticmarketing --skill hooks   # one skill
```

Or add as a Claude Code plugin, or clone and copy `skills/` into your project.

## Try it in five minutes

Nothing to configure. Pick a path, paste one message into your agent.

**Path A: learn your voice.**

```
Use the voice-pack skill on these posts:

[paste 10 to 30 of your LinkedIn posts]
```

The skill studies how you actually write and builds your `my-story/` pack. Then every writing skill drafts in your voice instead of the default AI register. Here is the same idea, written both ways:

Generic AI:

> Time and again, I've observed the same pattern. Founders don't struggle with storytelling because they're too technical. They struggle because they haven't done the hard work of deciding who they are, what they stand for, and what they're willing to say no to.

The voice pack, matching Will Nelson (Founder of 64stories.com) to his own posts:

> I've seen this dozens of times. A founder struggles to tell their story. They blame it on being "too technical." But dig deeper and the real issue surfaces. They haven't made the hard decisions about what they are and what they're not.

Same facts. The first has the tells: a "Time and again" wind-up, a staged reveal, a rule of three, sentences so even they hum. The second is the paragraph Will actually posted, on the way to 141 reactions. The pack holds a measured fingerprint of your rhythm so the skills can catch that drift, but the real work is matching your own writing, never hitting a statistic.

**Path B: turn one call into a content set.**

```
Use the one-recording-everything skill on this transcript:

[paste any call, webinar, or podcast transcript]
```

You get one artifact back: a plan table, full post drafts, clip timestamps with verbatim opening lines, and a newsletter section, every claim traced to a transcript line.

## Start here

| Skill | What it does |
|---|---|
| [`voice-pack`](skills/voice-pack/SKILL.md) | Builds your entire `my-story/` pack from 10 to 30 of your own posts plus a transcript or two: measured voice fingerprint, lexicon, anti-patterns, hooks |
| [`story-context`](skills/story-context/SKILL.md) | Loads your pack and resolves platform, output type, and pillar before any writing starts. Every other skill loads this first |
| [`improve-my-pack`](skills/improve-my-pack/SKILL.md) | The monthly coach loop: diffs your drafts against what you actually published, folds in performance weights, and proposes evidenced pack updates |

## Listening

Find the raw truth in what you already say and do.

| Skill | What it does |
|---|---|
| [`transcript-ideas`](skills/transcript-ideas/SKILL.md) | Transcript in, scored idea candidates out: title, hook direction, angle, pillar, verbatim supporting quote, rubric score |
| [`clip-finder`](skills/clip-finder/SKILL.md) | Given a timestamped transcript, find the 30 to 90 second segments with a self-contained tension arc and clean in and out points |
| [`cross-transcript-synthesis`](skills/cross-transcript-synthesis/SKILL.md) | Patterns across months of calls: recurring themes, position evolution, contradictions, and the ideas no single call contains |
| [`outlier-analysis`](skills/outlier-analysis/SKILL.md) | Paste 10 to 20 top posts from your niche, get the why behind each and a format library, fit-ranked to your voice |

Coming: pillar gap analysis, idea banking, competitor listening.

## Narrative

Make it public language that sounds like you.

| Skill | What it does |
|---|---|
| [`hooks`](skills/hooks/SKILL.md) | The core craft: mine the source for voltage, generate through emotional lenses, engineer one curiosity gap, check the platform fold |
| [`milestone-hooks`](skills/milestone-hooks/SKILL.md) | Product updates, launches, funding, hiring. Announcement without hype |
| [`linkedin-post`](skills/linkedin-post/SKILL.md) | Fold-aware hook, mobile line-break rhythm, your measured word range, no engagement bait, no fake punchline ending |
| [`short-form-script`](skills/short-form-script/SKILL.md) | 15 to 90 second scripts: hook in 3 seconds, foreshadow, execution, payoff, hard cut |
| [`newsletter`](skills/newsletter/SKILL.md) | Subject and preview as a two-part hook, essay arc, your email register, reply-worthy ending |
| [`format-remix`](skills/format-remix/SKILL.md) | Take a proven post's format, strip its content, inject your story. Format borrowed, voice and substance yours |
| [`one-recording-everything`](skills/one-recording-everything/SKILL.md) | One recording becomes a post, clips, a newsletter section, and an article. Each native, all verbatim-grounded |
| [`anti-ai`](skills/anti-ai/SKILL.md) | The gate: a deterministic scanner for AI tells plus the judgment layer for what no regex catches. Supports your personal exemptions |
| [`voice-match`](skills/voice-match/SKILL.md) | Rhythm fingerprint from your approved posts, then a line-by-line "would you actually say this" check |
| [`draft-qa`](skills/draft-qa/SKILL.md) | The pre-publish composite gate: anti-AI scan, voice drift, hook check, word range, proof trace. Pass or fail with line-level fixes |
| [`brief-writer`](skills/brief-writer/SKILL.md) | The full content brief before drafting: thesis, tension, source truth, hook direction, avoid-list, with an 8-axis quality gate that refuses weak briefs |
| [`meeting-to-post`](skills/meeting-to-post/SKILL.md) | The daily rep: one call, one moment, one post shipped the same day, anchored on the verbatim spoken line |
| [`linkedin-article-keywords`](skills/linkedin-article-keywords/SKILL.md) | Keyword placement in long-form articles so elegant a reader never notices. The thought leadership always wins the conflict |
| [`newsjacking`](skills/newsjacking/SKILL.md) | A story is trending in your space. Your earned angle, traced to real experience, posted while the window is open. Refuses empty takes and tragedy-jacking |

Coming: thought-leadership, story, and data hooks; script style archetypes; carousels; newsletter styles.

## Demand

Turn the attention into pipeline.

| Skill | What it does |
|---|---|
| [`connections-icp-match`](skills/connections-icp-match/SKILL.md) | Parse your exported LinkedIn connections, score every contact against your ICP, get ranked segments and who to engage first |
| [`what-worked`](skills/what-worked/SKILL.md) | Your last 90 days of posts: which hooks, pillars, and formats over-performed, as weights you feed back into the writing skills |
| [`engagement-to-pipeline`](skills/engagement-to-pipeline/SKILL.md) | Who engaged with what, scored against your ICP, routed into conversations that reference the content. Never a pitch first |
| [`content-audit`](skills/content-audit/SKILL.md) | The 90-day teardown: pillar drift, voice drift, hook entropy, AI-tell creep, graded with evidence and three fixes |
| [`comment-strategy`](skills/comment-strategy/SKILL.md) | The daily listening loop: pull your sources, score against your ICP, get the 10 comments worth leaving today, drafted in your voice |
| [`press-quotes`](skills/press-quotes/SKILL.md) | Get quoted by answering journalist source requests well: honest ROI gate, 15-minute daily triage, quote-first responses in your voice |
| [`founder-pitch`](skills/founder-pitch/SKILL.md) | Earned media for founders: podcasts and newsletters first, six pitch angles from your real numbers, under 150 words, one follow-up max |

Coming: posting cadence, lead-magnet CTA discipline. Demand here stays content-first: skills that turn what you publish into conversations and pipeline, not general-purpose outbound tooling.

## The quality bar

- Skills ship scripts where the check is deterministic. Scanners are code, not vibes.
- Script-bearing skills carry `evals/evals.json`: runnable cases CI executes on every change.
- Every skill carries good and bad examples, because examples steer harder than rules.
- Voice comes from your real posts, not a formula. The measured fingerprint is a floor that catches AI drift; your own writing sets the register. `voice-match` holds the rule: when the guide and the posts disagree, the posts win.
- Flagship skills carry `references/receipts.md`: real posts by Will Nelson, Founder of 64stories.com, with real engagement numbers, dissected by the skill that teaches the craft.
- New skills carry `references/bakeoff.md`: the same input run without and with the skill, side by side, so you can judge the difference yourself.
- Every gate supports exemptions in `my-story/anti-patterns.md`, so it never sands off a real voice.
- Skills degrade gracefully: they work with an empty `my-story/` pack and tell you what filling it would improve.

Repo meta lives in [`skills/skill-author/SKILL.md`](skills/skill-author/SKILL.md), the standard every skill here is written against. Read it first if you want to contribute.

## About

Built by Will Nelson, founder of [64stories](https://64stories.com). These skills are the open-source layer of the Agentic Marketing System.

- Narrative intelligence: the TalkStories plugin at [talkstories.ai](https://talkstories.ai)
- Executive communications and GTM: [64stories.com](https://64stories.com), where the full system runs against your real calls, with a human editor, per-post learning loops, and someone else operating all of it for you
- The tool stack these skills run alongside: [TOOLS.md](TOOLS.md)
