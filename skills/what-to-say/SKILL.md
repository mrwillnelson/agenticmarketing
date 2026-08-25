---
name: what-to-say
description: Decide what a company should say next from real customer, company, market, search, and performance signals before drafting begins. Use when the user asks what to talk about, write about, post about, which message or content direction deserves attention, what customers want to hear, or wants to compare or pressure-test ideas against evidence. Not for predetermined drafting, bulk topic lists, copy editing, or polishing finished content.
---

# What to Say

Make the editorial decision before content creation starts. Turn messy signals into one evidence-backed answer to the question: **what should this company say now?**

## Hard rules

1. Decide before drafting. Do not write the post, article, email, script, landing page, or campaign unless the user explicitly asks for the next step after the decision is complete.
2. Read the full source bundle before recommending anything. Do not let the first vivid quote or loudest source become the thesis by default.
3. Produce one primary decision. Include at most two secondary directions, and only when they are genuinely strong enough to compete.
4. Trace every non-obvious recommendation to evidence IDs. If a claim cannot be traced, mark it as inference, hypothesis, or unknown.
5. Use exactly four evidence statuses: `FACT`, `INFERENCE`, `HYPOTHESIS`, `UNKNOWN`. Never silently promote one into another.
6. Search is evidence, not an instruction. A high-volume term can still be a bad message. Missing search data stays `UNKNOWN`; never invent volume, ranking, or demand.
7. Buyer interest and company authority must both exist. A topic buyers care about but the company has nothing credible to add is weak. A company belief buyers do not care about is also weak.
8. Company authority and messenger fit are separate gates. A message can be right for the company and wrong for the proposed executive. Redirect it rather than forcing the wrong speaker.
9. Novelty is independent of source quality. Strong evidence for a story already told does not make it a fresh message. Check recent coverage when available.
10. Permission is independent of truth. A fact can be true and still be unusable publicly. Mark client, employee, partner, and confidential evidence accordingly.
11. Format comes after the message. Do not choose a post, article, customer story, launch, or video first and then reverse-engineer a reason for it.
12. Refusal is a valid result. When the evidence is too thin or contradictory, say `No strong What to Say decision yet.` and name the smallest evidence needed next.
13. Do not reward novelty for its own sake. The best decision may be a familiar issue with unusually strong evidence, timing, authority, or proof.

## Modes

Use the mode the request implies. If none is explicit, use `decide`.

- `decide`: choose the strongest message from the evidence.
- `compare`: compare two or more proposed messages against the evidence and choose one, refine one, redirect one, or reject all.
- `pressure-test`: test one existing message or content direction. Return `KEEP`, `REFINE`, `DROP`, `REDIRECT`, or `UNKNOWN` with reasons.
- `gaps`: identify what evidence is missing before a responsible decision can be made. Do not force a recommendation.
- `test`: dogfood this skill without contaminating the control. Read [references/test-protocol.md](references/test-protocol.md) and follow it exactly.

## Procedure

1. Clarify the decision question. Default to: `What should this company say next to the audience represented by the evidence?`
2. Resolve the proposed speaker when one exists. If none is given, keep speaker as `UNKNOWN` until the evidence suggests the right messenger.
3. Read the supplied sources in full. Typical inputs include customer calls, sales objections, support questions, internal discussions, executive notes, product changes, competitor activity, search queries, community discussion, and performance data.
4. Read the relevant `my-story/` files listed under Personalization. Treat them as context, not evidence that overrides current signals.
5. Build an evidence ledger with stable IDs: `E001`, `E002`, and so on. For each item record source, signal class, status, observation, implication, and permission state when relevant.
6. Separate observation from interpretation. A repeated customer phrase is an observation. What it means for positioning is an inference until supported.
7. Find the tensions that matter. Look for repeated pain, unresolved questions, changing behavior, objections, surprising language, market movement, search intent, performance patterns, and places where the company has unusual authority.
8. Form 2 to 5 candidate messages internally. Do not expose a brainstorm dump unless the user asked to compare candidates.
9. Evaluate the candidates on eight dimensions: buyer pull, company right-to-say, messenger fit, why-now timing, proof completeness, distinctiveness, novelty/coverage, and permission safety. Use the evidence, not aesthetic preference.
10. Choose one primary decision. If the message is strong but the proposed speaker is wrong, `REDIRECT`. If the message is strong but proof or permission is missing, `DEFER`. If no candidate clears the bar, return the refusal in hard rule 12.
11. Write the What to Say Brief using [references/brief-contract.md](references/brief-contract.md). Read that reference whenever producing a final brief.
12. Stop at the creation handoff. If the user wants a specific piece commissioned next, hand the decision to `brief-writer` rather than drafting from this skill.

## Decision standard

A strong message survives all eight checks:

- **Buyer pull:** evidence that the audience has the problem, question, desire, or decision.
- **Company right to say:** a credible reason this company can say something useful or distinctive about it.
- **Messenger fit:** the proposed speaker has enough experience, role, or personal stake to carry the message credibly.
- **Why now:** a timing reason, even if the reason is a repeated current customer pattern rather than news.
- **Proof completeness:** facts, examples, product evidence, customer language, or operating experience can carry the claim without writing around missing pieces.
- **Distinctiveness:** a point of view or evidence pattern that is more specific than category boilerplate.
- **Novelty / coverage:** the message is not merely a repeat of something the same speaker already published unless the new evidence materially changes it.
- **Permission safety:** the evidence needed to make the message land can be used publicly, or the brief clearly marks what must be anonymized or approved.

Do not average away a fatal weakness. Strong search demand cannot rescue weak authority. Strong evidence cannot rescue a wrong messenger. A true client fact cannot rescue missing permission.

## Personalization

Read these when present:

- `my-story/icp.md`: who the intended audience is and what they care about.
- `my-story/pillars.md`: existing topic territories. Use them as context, not a cage.
- `my-story/narrative.md`: beliefs and larger arcs already being built.
- `my-story/listening-sources.md`: where recurring signals normally come from and how fresh they are.
- `my-story/lexicon.md`: exact language the author or audience consistently uses.

With an empty pack, run from the provided evidence. State the audience and speaker assumptions you had to make. Do not lower the evidence standard just because the pack is empty. Suggest filling `icp.md` and `listening-sources.md` if repeated runs are too generic.

## Examples

Bad: `Customers mention onboarding, our competitor launched an AI feature, and SEO says automation is big. Give us 25 content ideas.`
Better: `The primary message is that implementation risk, not feature count, is blocking adoption. Three customer calls independently describe rollout anxiety, while the competitor launch is a market timing signal rather than proof that buyers want another AI-feature article. Talk about how teams reduce implementation risk, and use the AI launch only as context.`
Why: the bad output rewards source count and produces inventory. The better output makes one decision and explains how each signal contributes.

Bad: `The keyword has 40,000 searches, so we should write about it.`
Better: `Do not choose the keyword yet. Search demand is strong, but none of the customer evidence shows this audience using the problem language, and the company has no proof or experience attached to the topic. Mark buyer relevance and right-to-say as UNKNOWN and test those before committing.`
Why: search demand is useful evidence, but it cannot substitute for buyer relevance or company authority.

Bad: `Privacy content caused pipeline because our three top posts mentioned privacy.`
Better: `FACT: the three top-performing posts mentioned privacy. HYPOTHESIS: privacy may be contributing to resonance. UNKNOWN: whether privacy caused pipeline. Pressure-test privacy as a direction, but do not make the causal claim.`
Why: performance correlation is evidence; causality requires more.

Bad: `This is a great company story, so the Head of Marketing should post it.`
Better: `The underlying message is strong for the company, but the evidence comes from the founder's operating experience. REDIRECT the message to the founder unless the Head of Marketing has their own first-hand proof.`
Why: company fit and messenger fit are different decisions.

## Self-check

- Did I make one decision rather than hide behind a list of ideas?
- Can every important recommendation be traced to evidence IDs?
- Did I keep fact, inference, hypothesis, and unknown separate?
- Did I test buyer pull, company authority, and messenger fit separately?
- Did I check novelty and permission instead of assuming truthful evidence is publishable and fresh?
- Did search influence the decision without controlling it?
- Did I choose the message before the format?
- If the evidence is weak, did I refuse instead of filling gaps with plausible content strategy?
- Would a knowledgeable creator plausibly change what they planned to make after reading this?

## Related skills

- `cross-transcript-synthesis` can surface repeated patterns across many calls before this skill decides what they mean for content.
- `transcript-ideas` can mine one transcript for candidate raw material, but this skill owns the cross-signal decision about what deserves to be said.
- `outlier-analysis` can contribute performance and market evidence.
- `brief-writer` consumes the What to Say decision and turns it into a complete assignment for one piece.
- `linkedin-post`, `newsletter`, and `short-form-script` draft only after the decision and brief are ready.
- `draft-qa` verifies that the finished piece stayed faithful to the approved brief.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).