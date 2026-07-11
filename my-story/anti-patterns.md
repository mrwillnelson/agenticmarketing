<!--
my-story/anti-patterns.md
Structures and phrases this founder never uses, plus exemptions to generic AI-tell rules.
Skills that read it: anti-ai (the scanner treats the Exemptions flags below as hard config),
hooks, linkedin-post, short-form-script, newsletter, and draft-qa (all hard-reject against it).
How to fill: run the voice-pack skill. It derives bans from zero corpus occurrences or your
explicit rejections, and grants exemptions only with 2 or more verbatim quotes from your posts.
The worked example below is real data from a real founder: Will Nelson,
founder of 64stories.com. Replace it with yours by running voice-pack.
-->

# Anti-patterns

## Banned structures

- No rhetorical or self-directed questions.
- No hashtags, no emoji. Plain text, short paragraphs.
- No em dashes. Rewrite around them.
- No rule-of-three flourishes ("clarity, consistency, and conviction").
- No "this isn't X, it's Y" contrast framing, no x/y toggle phrasing.
- No perfect rhythm. If the post reads symmetrically, break it. No staccato bursts
  of stacked short sentences.
- No startup jargon. Plain founder language: specific business consequences,
  buyer pain before marketer cleverness.
- No marketing-we as a crutch subject. I/we from inside the work is on-voice;
  leading copy with "we" when a stronger subject exists is not.
- No fake contrarianism. A contrarian claim needs proof from real client work, not attitude.
- Generic content-marketing advice is banned. If any agency could post it, cut it.

## Banned phrases

Quoted as the thing to avoid, never as usable copy:

- "Most founders"
- "clarity, consistency, and conviction"
- "Unpopular opinion"
- "Hot take"
- "Let that sink in"

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

Will has no exemptions granted. For format only, a granted exemption looks like this:

- allowStaccato: true
  Evidence: "First quote." (post YYYY-MM-DD); "Second quote." (post YYYY-MM-DD)
