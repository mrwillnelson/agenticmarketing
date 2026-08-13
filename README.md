# Agentic Marketing Skills

Open-source agent skills for executive writing.

Give your AI a transcript or your posts. It finds the idea, writes in your voice, and checks the draft before you publish.

Built by Will Nelson of [64stories](https://64stories.com). This repo is the public writing-and-voice skills pack. If you want the full GTM system run for your company, 64stories is the managed version.

## Install

```bash
npx skills add mrwillnelson/agenticmarketing                 # everything
npx skills add mrwillnelson/agenticmarketing --skill hooks   # one skill
```

Or add as a Claude Code plugin, or clone and copy `skills/` into your project.

## Start here

**Path A: learn your voice.**

```text
Use the voice-pack skill on these posts:

[paste 10 to 30 of your LinkedIn posts]
```

The skill learns your voice from your own posts and builds your `my-story/` pack. Then every writing skill sounds like you, not the default AI register. Same idea, written both ways:

Generic AI:

> Time and again, I've observed the same pattern. Founders don't struggle with storytelling because they're too technical. They struggle because they haven't done the hard work of deciding who they are, what they stand for, and what they're willing to say no to.

The voice pack, matching Will Nelson, founder of 64stories.com, to his own posts:

> I've seen this dozens of times. A founder struggles to tell their story. They blame it on being "too technical." But dig deeper and the real issue surfaces. They haven't made the hard decisions about what they are and what they're not.

Same facts. The first is generic AI: a "Time and again" wind-up, a staged reveal, a rule of three. The second is the paragraph Will actually posted. The skills learn from your real writing, so your posts stay yours.

**Path B: turn one call into a content set.**

```text
Use the one-recording-everything skill on this transcript:

[paste any call, webinar, or podcast transcript]
```

You get one artifact back: a plan table, full post drafts, clip timestamps with verbatim opening lines, and a newsletter section, every claim traced to a transcript line.

**Path C: audit your last 90 days.**

```text
Use the content-audit skill on these posts:

[paste your last 90 days of posts, with metrics if you have them]
```

You get a graded teardown: pillar drift, voice drift, hook entropy, AI-tell creep, each grade tied to evidence, plus the three highest-leverage fixes.

## Usage

Once installed, tell your agent what you want. It picks the skill.

| You say | Skill |
|---|---|
| "Find the best post idea in this call" | `transcript-ideas` |
| "Turn this webinar into a week of content" | `one-recording-everything` |
| "Write a LinkedIn post from these notes" | `linkedin-post` |
| "This hook sounds generic, fix it" | `hooks` |
| "Find the clip-worthy moments in this recording" | `clip-finder` |
| "Which of my posts actually worked?" | `what-worked` |
| "Check this draft before I post it" | `draft-qa` |

Or invoke one directly: `/hooks`, `/linkedin-post`, `/draft-qa`.

## The skills

### Setup

| Skill | What it does |
|---|---|
| [`voice-pack`](skills/voice-pack/SKILL.md) | Builds your `my-story/` pack from 10 to 30 of your own posts plus a transcript or two: voice, lexicon, anti-patterns, hooks |
| [`story-context`](skills/story-context/SKILL.md) | Loads your pack and resolves platform, output type, and pillar before writing starts |
| [`improve-my-pack`](skills/improve-my-pack/SKILL.md) | Diffs drafts against what you actually published, folds in performance, and proposes evidenced pack updates |

### Listening

| Skill | What it does |
|---|---|
| [`transcript-ideas`](skills/transcript-ideas/SKILL.md) | Transcript in, scored idea candidates out: title, hook direction, angle, pillar, verbatim supporting quote, rubric score |
| [`clip-finder`](skills/clip-finder/SKILL.md) | Given a timestamped transcript, finds 30 to 90 second segments with a self-contained tension arc and clean in and out points |
| [`cross-transcript-synthesis`](skills/cross-transcript-synthesis/SKILL.md) | Patterns across months of calls: recurring themes, position evolution, contradictions, and ideas no single call contains |
| [`outlier-analysis`](skills/outlier-analysis/SKILL.md) | Paste 10 to 20 top posts from your niche, get the why behind each and a format library fit-ranked to your voice |

### Writing and quality

| Skill | What it does |
|---|---|
| [`hooks`](skills/hooks/SKILL.md) | Mines the source for voltage, generates through emotional lenses, engineers one curiosity gap, checks the platform fold |
| [`milestone-hooks`](skills/milestone-hooks/SKILL.md) | Product updates, launches, funding, hiring. Announcement without hype |
| [`linkedin-post`](skills/linkedin-post/SKILL.md) | Fold-aware hook, mobile line-break rhythm, natural length, no engagement bait, no fake punchline ending |
| [`short-form-script`](skills/short-form-script/SKILL.md) | 15 to 90 second scripts: hook in 3 seconds, foreshadow, execution, payoff, hard cut |
| [`newsletter`](skills/newsletter/SKILL.md) | Subject and preview as a two-part hook, essay arc, your email register, reply-worthy ending |
| [`format-remix`](skills/format-remix/SKILL.md) | Take a proven post's format, strip its content, inject your story. Format borrowed, voice and substance yours |
| [`one-recording-everything`](skills/one-recording-everything/SKILL.md) | One recording becomes a post, clips, a newsletter section, and an article. Each native, all verbatim-grounded |
| [`anti-ai`](skills/anti-ai/SKILL.md) | Deterministic scanner for AI tells plus the judgment layer for what no regex catches |
| [`voice-match`](skills/voice-match/SKILL.md) | Learns your rhythm from approved posts, then checks a draft line by line |
| [`draft-qa`](skills/draft-qa/SKILL.md) | Pre-publish gate: anti-AI scan, voice drift, hook check, length, proof trace. Pass or fail with line-level fixes |
| [`brief-writer`](skills/brief-writer/SKILL.md) | Full content brief before drafting: thesis, tension, source truth, hook direction, avoid-list, and quality gate |
| [`meeting-to-post`](skills/meeting-to-post/SKILL.md) | One call, one moment, one post shipped the same day, anchored on the verbatim spoken line |
| [`linkedin-article-keywords`](skills/linkedin-article-keywords/SKILL.md) | Keyword placement in long-form articles so the thought leadership still wins |
| [`newsjacking`](skills/newsjacking/SKILL.md) | A trending story becomes your earned angle, traced to real experience, posted while the window is open |

### Learn from your own posts

| Skill | What it does |
|---|---|
| [`what-worked`](skills/what-worked/SKILL.md) | Your last 90 days of posts: which hooks, pillars, and formats over-performed, as weights you feed back into writing |
| [`content-audit`](skills/content-audit/SKILL.md) | The 90-day teardown: pillar drift, voice drift, hook entropy, AI-tell creep, graded with evidence and three fixes |

Meta: [`skill-author`](skills/skill-author/SKILL.md) is the house standard every skill here is written against. Read it first if you want to contribute.

## The quality bar

- Skills ship scripts where the check is deterministic. Scanners are code, not vibes.
- Script-bearing skills carry `evals/evals.json`: runnable cases CI executes on every change.
- Every skill carries good and bad examples, because examples steer harder than rules.
- Voice comes from your real posts, not a formula. Your own writing sets the register; `voice-match` holds the rule: when the guide and the posts disagree, the posts win.
- Flagship skills carry `references/receipts.md`: real posts by Will Nelson, founder of 64stories.com, with real engagement numbers, dissected by the skill that teaches the craft.
- New skills carry `references/bakeoff.md`: the same input run without and with the skill, side by side, so you can judge the difference yourself.
- Every gate supports exemptions in `my-story/anti-patterns.md`, so it never sands off a real voice.
- Skills degrade gracefully: they work with an empty `my-story/` pack and tell you what filling it would improve.

## 64stories

This repo helps one person get better at finding something true and writing it in their voice.

64stories runs the full managed GTM system: listening cadence, editorial judgment, approvals, publishing operations, performance review, and sales signal handoff.

Use the repo to write better. Work with [64stories](https://64stories.com) if you want the system operated for your company.
