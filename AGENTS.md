# Agent map

This repository contains agent skills for founder content work, organized as Listening (find the raw truth), Narrative (make it public language), and Demand (turn it into pipeline). Route by job:

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
| Write a newsletter issue | `skills/newsletter` |
| Adapt a proven post format to the user's story | `skills/format-remix` |
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

## The my-story pack

`my-story/` holds the user's data: voice model, anti-patterns, lexicon, hooks, pillars, narrative, ICP, and approved examples. Skills read from it and say which files they use. When the pack is empty, skills still work but output is generic; suggest running `voice-pack` once.

## Platform modules

`platforms/` holds shared constraints (LinkedIn fold, email subject and preview, X compression, video hook timing). Output skills reference these instead of restating them.
