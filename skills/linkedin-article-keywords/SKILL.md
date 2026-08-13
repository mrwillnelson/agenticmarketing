---
name: linkedin-article-keywords
description: Place target keywords into long-form LinkedIn articles and blog essays so a reader never notices, gaining search and AI-answer-engine discoverability without taxing the thought leadership. Use when a draft article needs keyword placement, when a piece must rank or get cited by AI answer engines, or when reviewing a draft that smells of SEO.
---

# LinkedIn Article Keywords

Take a finished long-form argument and give it search and answer-engine discoverability without a single sentence that reads like it was written for a crawler. The thought leadership is the product; the keywords ride along invisibly.

## Hard rules

1. Keywords adapt to the argument, never the reverse. If a placement would bend the argument, drop the placement.
2. No keyword stuffing. Never exceed roughly one intentional placement per 150 words, and prefer semantic variants over exact-match repetition.
3. No awkward exact-match insertions. Every placement must survive the read-aloud test: if the sentence sounds like it was written to contain the phrase, rewrite it or cut it.
4. No SEO-shaped subheads. A subhead that breaks the piece's voice to fit a query is a worse subhead, full stop.
5. If the target keyword genuinely does not fit the piece, say so and recommend a separate piece built for that keyword instead. Never force the marriage.
6. Platform mechanics come from the constraint modules, not from this skill. Read `platforms/blog.md` for title, subhead, meta description, and link rules; read `platforms/linkedin.md` when the piece publishes as a LinkedIn article. Do not restate or override them.

## Procedure

1. Build the keyword map.
   - One primary phrase: the single search intent the piece can honestly own.
   - Two to four secondaries: variants and adjacent phrases a reader would also type.
   - The natural-language questions people actually ask ("why can't founders explain what their company does", "what is founder storytelling"). These matter more for AI answer engines than exact-match keywords; answer engines retrieve passages that answer questions, not pages that repeat phrases.
2. Identify the placement slots that carry weight. Only these are load-bearing:
   - The title.
   - The first 100 words.
   - One or two subheads.
   - Image alt text, if the piece has images.
   - The closing paragraph.
   Everything else is optional. A body paragraph that happens to use a secondary is a bonus, never an assignment.
3. Run the elegance pass. For each planned placement, read the host sentence aloud. If it reads like it exists to contain the phrase, rewrite the sentence or drop the placement; the thought leadership always wins the conflict. Swap exact matches for semantic variants wherever the variant is what the author would actually say. Count intentional placements against the one-per-150-words ceiling.
4. Run the answer-engine pass. Make one section a direct, quotable answer to the primary question: a two-to-four sentence passage that defines or resolves the question so cleanly an AI can cite it standalone, with the key phrase in or near its first sentence. One passage, placed where the argument naturally lands there. Do not turn the piece into a FAQ or bolt on a Q-and-A block.
5. Run the integrity check. Read the piece start to finish while ignoring the keyword map. If any sentence exists only for search, cut it. If the piece got worse at any point since step 1, revert that change. The finished piece must read as if no keyword map ever existed.

See [references/bakeoff.md](references/bakeoff.md) for a stuffed baseline versus a with-skill version of the same argument, annotated placement by placement.

## Personalization

Reads from `my-story/`:

- `pillars.md`: which topics the account owns; primary keywords should sit inside a pillar, and a keyword outside every pillar is a signal to recommend a separate piece.
- `lexicon.md`: the author's own terms for their concepts; prefer a lexicon term as the semantic variant over a generic synonym.
- `voice-model.md`: sentence rhythm the placements must not break; the read-aloud test is calibrated against this voice, not a neutral one.

With an empty pack the skill still works: placements will pass a generic read-aloud test but may miss the author's actual phrasing, and pillar fit cannot be checked. Run `voice-pack` once to fix that.

## Examples

Bad (subhead): "Founder Storytelling Tips: How Founders Can Use Storytelling"
Better: "Storytelling forces clarity"
Why: the bad one is a query wearing a subhead costume and says nothing; the better one makes a claim, carries the argument's spine, and still contains the topic term a variant search would match.

Bad (first 100 words): "Founder storytelling is one of the most important skills for founders today. In this article about founder storytelling, I will explain why founder storytelling matters for your startup."
Better: "Ask a founder about storytelling and they'll point you to their marketing team. That tells you everything."
Why: the bad one spends the fold announcing the keyword three times and hooks no one; the better one opens mid-tension, and "founder" plus "storytelling" land inside the first sentence without either reading as placed.

Bad (closing paragraph): "In conclusion, founder storytelling is essential. Start improving your founder storytelling today."
Better: "Your story is your strategy, made legible."
Why: the bad one is a recap with a stuffed CTA; the better one ends on the piece's strongest plain sentence, and the closing slot still carries "story" and "strategy" as the semantic core the primary phrase resolves to.

Bad (answer passage): a bolted-on "FAQ: What is founder storytelling?" block at the end of the essay.
Better: a two-to-four sentence paragraph inside the argument that defines the idea in the author's own terms, quotable standalone, placed where the essay naturally pauses to say what it means.
Why: the FAQ block breaks the piece's form and signals SEO to every human reader; the inline passage gives answer engines the same citable unit without costing the essay anything.

## Self-check

- Does every intentional placement survive the read-aloud test in the author's voice?
- Is the count at or under one intentional placement per 150 words, with variants outnumbering exact matches?
- Are the load-bearing slots covered: title, first 100 words, one or two subheads, alt text, closing paragraph?
- Is there exactly one quotable answer passage for the primary question, inline, not a FAQ?
- Reading start to finish with the keyword map forgotten: does any sentence exist only for search?
- If the keyword never fit, did you say so and recommend a separate piece instead of forcing it?

## Related skills

- `essays` and `newsletter` craft the piece itself; run them first. This skill only handles discoverability placement on a piece that already works.
- `hooks` owns the title and the opening line. Hand the primary phrase to it as a constraint; do not write the title here.
- `draft-qa` runs last and will catch any placement that this skill's integrity check missed.

---

Part of [Agentic Marketing Skills](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories runs the managed GTM system for companies that want this operated for them.
