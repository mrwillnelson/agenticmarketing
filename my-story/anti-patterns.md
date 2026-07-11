<!--
my-story/anti-patterns.md
Structures and phrases this founder never uses, plus exemptions to generic AI-tell rules.
Skills that read it: anti-ai (the scanner treats the Exemptions flags below as hard config),
hooks, linkedin-post, short-form-script, newsletter, and draft-qa (all hard-reject against it).
How to fill: run the voice-pack skill. It derives bans from zero corpus occurrences or your
explicit rejections, and grants exemptions only with 2 or more verbatim quotes from your posts.
Everything below is placeholder content from an invented founder,
Maya Torres of Ledgerline. Replace all of it.
-->

# Anti-patterns

## Banned structures

- No em dashes. Rewrite around them.
- No "this isn't X, it's Y" contrast framing.
- No rule-of-three flourishes in prose (banned example: "faster, cheaper, and smarter").
- No advice endings. Posts end on what happened, not on what you should do.
- No setup paragraphs. If the first line is context, cut it.
- No rhetorical questions.
- No hashtags, no emoji.

## Banned phrases

Quoted as the thing to avoid, never as usable copy:

- "game-changer"
- "Unpopular opinion"
- "Let that sink in"
- "In today's economy"
- "cash flow is king" (Maya calls this the phrase every AR vendor hides behind)

## Exemptions

Machine-readable flags the anti-ai scanner honors. A false flag means the generic
AI-tell rule applies at full strength. Flip a flag to true only with 2 or more
verbatim quotes from approved posts listed directly under it as evidence.

```yaml
allowColons: false
allowStaccato: false
allowEngagementBait: false
allowEmDash: false
```

Maya has no exemptions granted. For format only, a granted exemption looks like this:

- allowStaccato: true
  Evidence: "Day 43. Still unpaid." (post 2026-02-11); "Sixty-one days. Our money." (post 2026-03-04)
