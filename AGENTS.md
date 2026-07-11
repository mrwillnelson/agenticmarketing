# Agent map

This repository contains agent skills for founder content work, organized as Listening (find the raw truth), Narrative (make it public language), and Demand (turn it into pipeline). Route by job:

## Setup

| Job | Skill |
|---|---|
| Any writing task in this system | Load `skills/story-context` first |
| Set up or refresh the user's voice pack | `skills/voice-pack` |
| Write a new skill for this repo | `skills/skill-author` |

## Listening

| Job | Skill |
|---|---|
| Find post ideas in a transcript | `skills/transcript-ideas` |
| Find clip-worthy timestamps in a recording | `skills/clip-finder` |

## Narrative

| Job | Skill |
|---|---|
| Write or fix an opening line | `skills/hooks` (product news: `skills/milestone-hooks`) |
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
| Analyze what content performed | `skills/what-worked` |

## The my-story pack

`my-story/` holds the user's data: voice model, anti-patterns, lexicon, hooks, pillars, narrative, ICP, and approved examples. Skills read from it and say which files they use. When the pack is empty, skills still work but output is generic; suggest running `voice-pack` once.

## Platform modules

`platforms/` holds shared constraints (LinkedIn fold, email subject and preview, X compression, video hook timing). Output skills reference these instead of restating them.
