---
name: newsletter
description: Write a founder newsletter issue with a subject and preview that work as a two-part hook, a body built on one thesis, and an ending worth replying to. Use when drafting, restructuring, or fixing an email newsletter issue, or when a subject line and preview text read like a table of contents.
---

# Newsletter

A newsletter issue is a letter to one reader, not a broadcast to a list. The subject and preview earn the open, one thesis earns the read, and the ending earns the reply.

## Hard rules

1. Subject and preview are one two-part hook. The subject opens a gap in about 50 visible characters; the preview widens it in about 90 more without closing it. They never repeat each other. Inbox clients show them side by side, so a repeat wastes half the fold.
2. One thesis per issue. Every section moves it forward or gets cut. An issue that staples unrelated thoughts together is not an issue.
3. Write to one reader. Use "you" and stay in first person throughout. The email register is usually warmer and more direct than LinkedIn; check `my-story/` for overrides before assuming.
4. Claims trace to real material. Verbatim phrases from the user's transcripts beat invented ones. Never invent numbers, results, or drama the source does not support.
5. The ending must be reply-worthy: a genuine question, a specific ask, or a concrete tease of the next issue. Never "that's all for this week!" or any sign-off that closes the conversation.
6. One CTA maximum, and only when the issue genuinely feeds it. Most issues carry none. A CTA bolted onto an unrelated issue reads as the reason the email was sent.
7. Every draft passes the `anti-ai` scan and the `draft-qa` gate before a human sees it.

## Procedure

1. Identify the task: the source material (transcript, call notes, a prior post to expand), the audience, and the one thesis this issue argues. If the source offers two theses, pick one and bank the other for a future issue.
2. Pick the body structure to fit the material, not a template:
   - **One-lesson letter** (300 to 800 words): a single throughline from a real moment to what it taught. The shape of most issues.
   - **Short essay issue** (800 to 1500 words): an argument arc with stakes, proof, and the strongest objection answered on the record. Only when the idea earns the length.
   - **Curation with a spine**: a handful of picks where every pick earns its commentary, and the spine says why these picks belong together now. Skip any pick you can only describe, not argue with.
3. Draft the body first. Pull the sharpest verbatim phrases from the source and build around them. Keep the register warm and direct: contractions, plain verbs, sentences you would actually send one person.
4. Format for scannability without listicle energy: paragraphs of 1 to 3 sentences, an occasional bolded turning point where the argument pivots, no wall of bullets. Subheads only when they carry meaning; a 500-word letter usually needs none.
5. Write the subject and preview last, once you know what the issue actually proved. Use the `hooks` skill discipline, then check both folds:
   ```bash
   node skills/hooks/scripts/check-fold.mjs email-subject "Your subject here"
   node skills/hooks/scripts/check-fold.mjs email-preview "Your preview here"
   ```
   The subject must stand alone; the preview must add information the subject lacks and still leave the loop open.
6. Write the ending before polishing the middle. Ask one question the issue earned, make one specific ask, or tease the next issue with a concrete detail. If the ending could sit under any issue, it is not an ending yet.
7. If the issue genuinely feeds a CTA, place exactly one, after the ending has done its work. Otherwise ship without.
8. Run the word count against the band for the chosen structure, then gate through `anti-ai` and `draft-qa`.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: sentence rhythm and warmth. Note any email register overrides; some founders write email exactly as direct as their LinkedIn, and the pack rules the default.
- `lexicon.md`: the founder's own words for their concepts; use theirs, not the industry's.
- `anti-patterns.md`: banned openers, endings, and structures. Hard rejects for subjects, previews, and sign-offs.
- `narrative.md`: the running story and positioning. Each issue should sit inside it, and next-issue teases should pull from it.

With an empty pack the skill still works: default to a warm, direct, first-person register and invented-but-plausible voice. The output will read competent and generic. Run `voice-pack` once to fix that.

## Examples

Bad subject: "Newsletter #14: My thoughts on hiring and culture"
Bad preview: "Some thoughts on hiring, culture, and more inside this week's issue."
Better subject: "The hire I almost didn't make"
Better preview: "She failed our take-home. Six months later she rewrote how we ship."
Why: the bad pair labels the email and repeats itself; the better pair opens a gap in the subject and widens it in the preview without resolving either.

Bad ending: "That's all for this week! Like this issue? Share it with a friend and hit reply to let me know your thoughts!"
Better ending: "What's the interview signal you trust that nobody else rates? Reply with it. The best ones go in next month's issue on how we rebuilt our loop."
Why: the bad one closes the conversation with generic asks; the better one asks a question only this issue earned and teases the next with a concrete detail.

Bad body move: "Here are 7 hiring lessons: • Hire slow • Trust your gut • Check references..."
Better body move: "We ran the same take-home for two years before anyone asked what it measured. **Nobody could answer.** So we rebuilt it around the one thing the job actually requires."
Why: the bad one is a wall of bullets with no throughline; the better one is short paragraphs with a bolded turning point that carries the thesis.

## Self-check

- Does the preview add information the subject does not, and does the pair still leave the loop open?
- Can the thesis be stated in one sentence, and does every section move it?
- Would this read as a letter to one person, or as a broadcast? Count the "you"s.
- Could a reader answer the ending in one reply sentence?
- Is there at most one CTA, and did the issue feed it?
- Is the word count inside the band for the chosen structure?
- Do the sharpest phrases come from the source, verbatim where possible?
- Did the draft pass the anti-ai scan?

## Related skills

- `hooks`: the subject and preview are hooks; use its discipline and its `email-subject` and `email-preview` fold checks.
- `one-recording-everything`: feeds the source material issues get mined from.
- `anti-ai` and `draft-qa`: hard gates on every draft before a human sees it.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
