# Changelog

## Unreleased

- v1.1: 17 new skills (46 total): the hooks family (thought-leadership, story, data), four script styles plus talking-head shot sheets, LinkedIn carousels, two newsletter styles, post-to-thread, pillar-gap-finder, idea-bank, posting-cadence, lead-magnet-cta, and competitor-listening, the anchor of System 2 (Agentic Competitive Intelligence), which composes from existing skills and the shared pack.
- Product experience: examples/demo-call.md for a zero-config first run, scripts/doctor.mjs one-command health check, scripts/render-brief.mjs self-contained HTML briefs, and a CI-enforced live scoreboard in the README (scripts/sync-readme.mjs).
- Docs and community: CONCEPTS.md, CONFIGURATION.md, CONTRIBUTING.md, VERSIONS.md, docs/agents-for-marketers.md, docs/loops.md, issue and PR templates, a dependency map, and expanded install options.

- Repositioned from a skills repo to an agentic marketing SYSTEMS library. Agentic Executive Comms is now framed as System 1 (the reference implementation); the README leads with the systems thesis, a skills-vs-systems distinction, the five-layer definition, and a future-systems roadmap. Skills stay flat; the change is conceptual. Footers, plugin manifests, and AGENTS updated to the new name and the open-source-vs-managed-layer framing.

- Privacy pass: the my-story/ pack no longer ships 64stories' internal strategy. icp.md, pillars.md, narrative.md, and listening-sources.md are pure templates; only Will Nelson's public story remains (measured fingerprint, published posts, public engagement numbers). Retired "Story Engineering" from all teaching content. Added TOOLS.md, the real stack the skills run alongside.

- Four earned-attention skills: newsjacking, press-quotes, founder-pitch, comment-strategy (29 total), each with a bake-off, plus two new tested pull scripts (trends and listening sources) and a `my-story/listening-sources.md` template.
- Repo pointers updated: built by Will Nelson, founder of 64stories.com; narrative intelligence via the TalkStories plugin at talkstories.ai; executive communications and GTM via 64stories.com.

- Eight new skills: content-audit, brief-writer, outlier-analysis, engagement-to-pipeline, linkedin-article-keywords, improve-my-pack, cross-transcript-synthesis, meeting-to-post (25 total).
- Real receipts: flagship skills carry `references/receipts.md` with Will Nelson's real published posts and engagement numbers; the `my-story/` worked example is now his real measured pack.
- Bake-offs: every new skill ships `references/bakeoff.md` showing baseline vs with-skill output on the same input.
- Quickstart: "Try it in five minutes" README path; `one-recording-everything` now delivers one artifact defined by an output template.
- Initial library: 17 skills across Listening, Narrative, and Demand, plus the `my-story/` template pack, `platforms/` constraint modules, and plugin packaging.
- Seven tested deterministic scripts: anti-AI scanner with voice exemptions, voice fingerprint measurer, transcript timestamp parser, LinkedIn connections parser, format overlap checker, hook fold checker, performance weights calculator.
- Eval harness: script-bearing skills carry `evals/evals.json`, executed by `scripts/run-evals.mjs` in CI.
