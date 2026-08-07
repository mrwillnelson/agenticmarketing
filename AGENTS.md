# Agent map

This repository is a library of agentic marketing systems. The first system, Agentic Executive Comms, is built from the skills below, organized by workflow layer: Listening (find the raw truth), Narrative (make it public language), and Demand (turn it into pipeline). A skill does one task; a system chains skills with shared context, quality gates, and human approval. Route by job:

## Setup

| Job | Skill |
|---|---|
| Any writing task in this system | Load `skills/story-context` first |
| Set up or refresh the user's voice pack | `skills/voice-pack` |
| Evolve the pack from the user's edits and performance | `skills/improve-my-pack` |
| Write a new skill for this repo | `skills/skill-author` |

## Listening

| Job | Skill |
|---|---|
| Find post ideas in a transcript | `skills/transcript-ideas` |
| Find patterns across many transcripts over time | `skills/cross-transcript-synthesis` |
| Find clip-worthy timestamps in a recording | `skills/clip-finder` |
| Analyze top posts from the user's niche | `skills/outlier-analysis` |

## Narrative

| Job | Skill |
|---|---|
| Write a content brief before drafting | `skills/brief-writer` |
| Turn one call into one post, same day | `skills/meeting-to-post` |
| Write or fix an opening line | `skills/hooks` (product news: `skills/milestone-hooks`) |
| Place keywords in a long-form article without taxing it | `skills/linkedin-article-keywords` |
| Write a LinkedIn post | `skills/linkedin-post` |
| Write a short-form video script | `skills/short-form-script` |
| Build a Fable + HyperFrames product launch video | `skills/fable-hyperframes-launch-video` |
| Write a newsletter issue | `skills/newsletter` |
| Adapt a proven post format to the user's story | `skills/format-remix` |
| React to a trending story with the user's earned angle | `skills/newsjacking` |
| Turn one recording into a full content set | `skills/one-recording-everything` |
| Scan a draft for AI tells | `skills/anti-ai` |
| Check a draft against the user's voice | `skills/voice-match` |
| Final gate before publishing | `skills/draft-qa` |

## Demand

| Job | Skill |
|---|---|
| Rank LinkedIn connections against the user's ICP | `skills/connections-icp-match` |
| Turn post engagers into warm conversations | `skills/engagement-to-pipeline` |
| Analyze what content performed | `skills/what-worked` |
| Run the 90-day content teardown | `skills/content-audit` |
| Build today's comment queue from the user's listening sources | `skills/comment-strategy` |
| Answer a journalist source request | `skills/press-quotes` |
| Pitch the user's story to podcasts, newsletters, journalists | `skills/founder-pitch` |

## The my-story pack

`my-story/` holds the user's data: voice model, anti-patterns, lexicon, hooks, pillars, narrative, ICP, and approved examples. Skills read from it and say which files they use. When the pack is empty, skills still work but output is generic; suggest running `voice-pack` once.

## Tools

`TOOLS.md` lists the stack these skills run alongside (capture, memory, tasks, CRM, signals). Skills stay tool-agnostic; suggest equivalents when the user names different tools.

## Platform modules

`platforms/` holds shared constraints (LinkedIn fold, email subject and preview, X compression, video hook timing). Output skills reference these instead of restating them.
