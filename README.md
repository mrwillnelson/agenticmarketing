# Content-Skills

Open-source systems for turning repeatable marketing workflows into agentic workflows.

A prompt produces an output. A system runs the workflow.

This repo provides the skills, context packs, quality gates, examples, scripts, and operating loops required to make marketing work agentic: source-aware, context-aware, judgment-driven, human-reviewable, and able to learn from performance.

Built by Will Nelson of [64stories](https://64stories.com). If you want a team to build this system for you, or run it on top of your own marketing, [get in touch](https://64stories.com). We have 20 years of experience building founder brands and executive thought leadership for companies like Bolt, Woo, Loom, Buffer, and more.

The first complete system is **Agentic Executive Comms**. It turns company signal into executive content and demand:

```
LISTENING ──────────▶ NARRATIVE ──────────▶ DEMAND
find the raw truth    make it public         turn attention
in what you already   language that sounds   into pipeline
say and do            like you
```

Most companies already have the raw material for a year of executive content sitting inside calls, customer conversations, product meetings, sales notes, podcasts, webinars, and internal debates. Most AI content tools skip straight to writing. Agentic Executive Comms starts earlier: it listens to the source material, finds what is worth saying, turns it into voice-matched content, checks the output, routes judgment to humans, and learns from what the market does next.

## What makes a marketing workflow agentic

A marketing workflow becomes agentic when it can ingest source material, understand company context, make judgment calls, produce useful work, check its own output, route exceptions to humans, and learn from what happens next.

Every system in this repo has five layers:

1. **Inputs** the system listens to: calls, transcripts, analytics, social activity, CRM notes, customer feedback, competitor movement.
2. **Context** it needs before it acts: company, audience, positioning, voice, offers, market beliefs, constraints, examples. This lives in your `my-story/` pack.
3. **Judgment**: the scoring, routing, and decision rules that determine what happens next.
4. **Production**: the briefs, drafts, analyses, and assets the system creates.
5. **Learning**: the performance data, human edits, approvals, and rejections that improve the next run.

## Skills vs systems

A skill helps an agent perform one task. A system helps an agent run a workflow. This repo contains both.

The individual skills work on their own: write a hook, find a clip, mine a transcript, draft a LinkedIn post, check for AI tells, match a voice. The real value comes from chaining them into systems with shared context, source material, quality gates, human approval, and learning loops. That is the difference between an assistant that writes marketing copy and a workflow that improves how marketing work gets done.

Systems are complete workflows. Skills are reusable components. Gates are quality checks. Packs are persistent context. Loops are recurring workflows.

## System 1: Agentic Thought Leadership

Thought leadership is the first complete system in this repo because it is one of the highest-leverage marketing workflows a company can make agentic. The ingredients are ideal: lots of unused source material, a high need for voice accuracy, real strategic judgment, high commercial leverage, a repeated workflow, a clear human approval gate, and a measurable market response.

Most companies already have the raw material:

- founder calls, customer conversations, product meetings, sales calls
- podcasts, webinars, internal debates
- competitor positioning, market reactions, buyer objections
- proof hidden inside the business

But that signal rarely turns into consistent public narrative. It stays scattered across recordings, notes, docs, Slack threads, and the heads of the people closest to the customer. Agentic Executive Comms turns that workflow into a system, along the LISTENING to NARRATIVE to DEMAND chain: it finds the strongest source material, turns it into voice-matched executive content, checks the output against quality gates, routes judgment to humans where needed, and feeds performance back into the next cycle.

## Install

```bash
npx skills add mrwillnelson/agenticmarketing            # everything
npx skills add mrwillnelson/agenticmarketing --skill hooks   # one skill
```

Or add as a Claude Code plugin, or clone and copy `skills/` into your project.

## Start with the first system

Nothing to configure. Pick a path, paste one message into your agent.

**Path A: learn your voice.**

```
Use the voice-pack skill on these posts:

[paste 10 to 30 of your LinkedIn posts]
```

The skill learns your voice from your own posts and builds your `my-story/` pack. Then every writing skill sounds like you, not the default AI register. Same idea, written both ways:

Generic AI:

> Time and again, I've observed the same pattern. Founders don't struggle with storytelling because they're too technical. They struggle because they haven't done the hard work of deciding who they are, what they stand for, and what they're willing to say no to.

The voice pack, matching Will Nelson (Founder of 64stories.com) to his own posts:

> I've seen this dozens of times. A founder struggles to tell their story. They blame it on being "too technical." But dig deeper and the real issue surfaces. They haven't made the hard decisions about what they are and what they're not.

Same facts. The first is generic AI: a "Time and again" wind-up, a staged reveal, a rule of three. The second is the paragraph Will actually posted. The skills learn from your real writing, so your posts stay yours.

**Path B: turn one call into a content set.**

```
Use the one-recording-everything skill on this transcript:

[paste any call, webinar, or podcast transcript]
```

You get one artifact back: a plan table, full post drafts, clip timestamps with verbatim opening lines, and a newsletter section, every claim traced to a transcript line.

**Path C: audit your last 90 days.**

```
Use the content-audit skill on these posts:

[paste your last 90 days of posts, with metrics if you have them]
```

You get a graded teardown: pillar drift, voice drift, hook entropy, AI-tell creep, each grade tied to evidence, plus the three highest-leverage fixes.

**Path D: find who to talk to.**

```
Use the connections-icp-match skill on my LinkedIn connections export.
```

You get every contact scored against your ICP into ranked tiers, and who to engage first.

## Usage

Once installed, just tell your agent what you want. It picks the skill.

| You say | Skill |
|---|---|
| "Find the best post idea in this call" | `transcript-ideas` |
| "Turn this webinar into a week of content" | `one-recording-everything` |
| "Write a LinkedIn post from these notes" | `linkedin-post` |
| "This hook sounds generic, fix it" | `hooks` |
| "Find the clip-worthy moments in this recording" | `clip-finder` |
| "Which of my posts actually worked?" | `what-worked` |
| "Score my LinkedIn connections against my ICP" | `connections-icp-match` |
| "Check this draft before I post it" | `draft-qa` |

Or invoke one directly: `/hooks`, `/linkedin-post`, `/draft-qa`.

## The skills, by layer

Agentic Executive Comms is built from these skills, grouped by the layer of the workflow they serve.

### Setup

| Skill | What it does |
|---|---|
| [`voice-pack`](skills/voice-pack/SKILL.md) | Builds your entire `my-story/` pack from 10 to 30 of your own posts plus a transcript or two: voice, lexicon, anti-patterns, hooks |
| [`story-context`](skills/story-context/SKILL.md) | Loads your pack and resolves platform, output type, and pillar before any writing starts. Every other skill loads this first |
| [`improve-my-pack`](skills/improve-my-pack/SKILL.md) | The monthly coach loop: diffs your drafts against what you actually published, folds in performance, and proposes evidenced pack updates |

### Listening: find the raw truth

| Skill | What it does |
|---|---|
| [`transcript-ideas`](skills/transcript-ideas/SKILL.md) | Transcript in, scored idea candidates out: title, hook direction, angle, pillar, verbatim supporting quote, rubric score |
| [`clip-finder`](skills/clip-finder/SKILL.md) | Given a timestamped transcript, find the 30 to 90 second segments with a self-contained tension arc and clean in and out points |
| [`cross-transcript-synthesis`](skills/cross-transcript-synthesis/SKILL.md) | Patterns across months of calls: recurring themes, position evolution, contradictions, and the ideas no single call contains |
| [`outlier-analysis`](skills/outlier-analysis/SKILL.md) | Paste 10 to 20 top posts from your niche, get the why behind each and a format library, fit-ranked to your voice |

### Narrative: make it sound like you

| Skill | What it does |
|---|---|
| [`hooks`](skills/hooks/SKILL.md) | The core craft: mine the source for voltage, generate through emotional lenses, engineer one curiosity gap, check the platform fold |
| [`milestone-hooks`](skills/milestone-hooks/SKILL.md) | Product updates, launches, funding, hiring. Announcement without hype |
| [`linkedin-post`](skills/linkedin-post/SKILL.md) | Fold-aware hook, mobile line-break rhythm, your natural length, no engagement bait, no fake punchline ending |
| [`short-form-script`](skills/short-form-script/SKILL.md) | 15 to 90 second scripts: hook in 3 seconds, foreshadow, execution, payoff, hard cut |
| [`newsletter`](skills/newsletter/SKILL.md) | Subject and preview as a two-part hook, essay arc, your email register, reply-worthy ending |
| [`format-remix`](skills/format-remix/SKILL.md) | Take a proven post's format, strip its content, inject your story. Format borrowed, voice and substance yours |
| [`one-recording-everything`](skills/one-recording-everything/SKILL.md) | One recording becomes a post, clips, a newsletter section, and an article. Each native, all verbatim-grounded |
| [`anti-ai`](skills/anti-ai/SKILL.md) | The gate: a deterministic scanner for AI tells plus the judgment layer for what no regex catches. Supports your personal exemptions |
| [`voice-match`](skills/voice-match/SKILL.md) | Learns your rhythm from your approved posts, then a line-by-line "would you actually say this" check |
| [`draft-qa`](skills/draft-qa/SKILL.md) | The pre-publish composite gate: anti-AI scan, voice drift, hook check, length, proof trace. Pass or fail with line-level fixes |
| [`brief-writer`](skills/brief-writer/SKILL.md) | The full content brief before drafting: thesis, tension, source truth, hook direction, avoid-list, with an 8-axis quality gate that refuses weak briefs |
| [`meeting-to-post`](skills/meeting-to-post/SKILL.md) | The daily rep: one call, one moment, one post shipped the same day, anchored on the verbatim spoken line |
| [`linkedin-article-keywords`](skills/linkedin-article-keywords/SKILL.md) | Keyword placement in long-form articles so elegant a reader never notices. The thought leadership always wins the conflict |
| [`newsjacking`](skills/newsjacking/SKILL.md) | A story is trending in your space. Your earned angle, traced to real experience, posted while the window is open. Refuses empty takes and tragedy-jacking |

### Demand: turn attention into pipeline

| Skill | What it does |
|---|---|
| [`connections-icp-match`](skills/connections-icp-match/SKILL.md) | Parse your exported LinkedIn connections, score every contact against your ICP, get ranked segments and who to engage first |
| [`what-worked`](skills/what-worked/SKILL.md) | Your last 90 days of posts: which hooks, pillars, and formats over-performed, as weights you feed back into the writing skills |
| [`engagement-to-pipeline`](skills/engagement-to-pipeline/SKILL.md) | Who engaged with what, scored against your ICP, routed into conversations that reference the content. Never a pitch first |
| [`content-audit`](skills/content-audit/SKILL.md) | The 90-day teardown: pillar drift, voice drift, hook entropy, AI-tell creep, graded with evidence and three fixes |
| [`comment-strategy`](skills/comment-strategy/SKILL.md) | The daily listening loop: pull your sources, score against your ICP, get the 10 comments worth leaving today, drafted in your voice |
| [`press-quotes`](skills/press-quotes/SKILL.md) | Get quoted by answering journalist source requests well: honest ROI gate, 15-minute daily triage, quote-first responses in your voice |
| [`founder-pitch`](skills/founder-pitch/SKILL.md) | Earned media for founders: podcasts and newsletters first, six pitch angles from your real numbers, under 150 words, one follow-up max |

Meta: [`skill-author`](skills/skill-author/SKILL.md) is the house standard every skill here is written against. Read it first if you want to contribute.

## The quality bar

- Skills ship scripts where the check is deterministic. Scanners are code, not vibes.
- Script-bearing skills carry `evals/evals.json`: runnable cases CI executes on every change.
- Every skill carries good and bad examples, because examples steer harder than rules.
- Voice comes from your real posts, not a formula. Your own writing sets the register; `voice-match` holds the rule: when the guide and the posts disagree, the posts win.
- Flagship skills carry `references/receipts.md`: real posts by Will Nelson, Founder of 64stories.com, with real engagement numbers, dissected by the skill that teaches the craft.
- New skills carry `references/bakeoff.md`: the same input run without and with the skill, side by side, so you can judge the difference yourself.
- Every gate supports exemptions in `my-story/anti-patterns.md`, so it never sands off a real voice.
- Skills degrade gracefully: they work with an empty `my-story/` pack and tell you what filling it would improve.

## Future systems

Agentic Executive Comms is the first system because it is the workflow we know best. The same architecture, inputs to context to judgment to production to learning, can make other marketing workflows agentic:

- **Agentic Competitive Intelligence**: monitor competitors, extract positioning shifts, find the open narrative space, brief the team.
- **Agentic Customer Proof**: turn customer calls, support threads, reviews, and case studies into proof assets and sales-ready stories.
- **Agentic Launch Marketing**: turn product changes, customer pain, and competitive context into launch narratives and campaign assets.
- **Agentic Sales Enablement**: turn objections, deal notes, call moments, and content engagement into follow-up and enablement material.
- **Agentic Website Optimization**: turn visitor data, customer language, sales objections, and competitor pages into page tests and copy improvements.

The goal is not a pile of disconnected marketing prompts. It is the operating patterns for agentic marketing work.

## Open-source layer and managed layer

This repo is the open-source layer: agent skills, context packs, quality gates, operating loops, examples, evals, and workflow patterns. Use it to build the system yourself.

The managed 64stories layer adds automatic call and transcript ingestion, human editorial judgment, executive approvals, content calendars, publishing operations, performance review, per-client learning loops, pipeline interpretation, and a team to run the system for you.

Use the repo if you want to build the system yourself. Work with [64stories](https://64stories.com) if you want it built or operated for you.
