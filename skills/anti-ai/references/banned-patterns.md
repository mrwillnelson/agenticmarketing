# Banned patterns catalog

The complete pattern list behind `scripts/scan.mjs`. Read this when a flag needs context, when deciding whether a warn should stay, or when proposing a new pattern. Patterns are cited in backticks so this file itself scans clean; the scanner skips code spans, code fences, and headings.

Contents

1. Severities
2. Banned phrases
3. Banned words
4. Banned structures
5. Warn-level structures
6. AI vocabulary
7. Computed checks
8. Exemption flags

## 1. Severities

- ban. Rewrite required. Any ban fails the scan (exit code 1).
- warn. Judgment call. Reported, never fails the scan. Keep a warn only on purpose.
- note. A detection downgraded by a pack exemption. Informational.

## 2. Banned phrases

Literal, case-insensitive. Each one is scaffolding, a generic opener, or performed drama.

Wind-ups and scaffolding. `Here's the thing`, `Here is the thing`, `Here's the problem`, `Here's the truth`, `The reality is`, `Simply put`, `Put simply`, `At the end of the day`, `Let's dive in`. The sentence after the wind-up is the real sentence. Start there.

Essay openers. `In today's world`, `In today's fast-paced world`, `In an era where`, `In a world where`. Start with a specific observation, quote, or moment instead.

Generic crowds. `Most founders`, `Many leaders`, `Everyone knows`. Replace the crowd with a specific person, moment, or number.

Performed drama. `Let that sink in`, `Unpopular opinion:`, `Hot take:`, `The future belongs to`, `This is just the beginning`, `What separates the best`, `Excited to announce`. Drama that has to announce itself is not drama.

## 3. Banned words

- `delve` (all forms). The signature AI verb. Name the actual action.
- `game-changer`, `game-changing`. Say what specifically changed.

## 4. Banned structures

Regex-level detections. Each fakes a reveal or borrows authority the text did not earn.

- Em dash (the U+2014 character). Exemptible via `allowEmDash`. Use a comma, period, parenthesis, or a rewrite.
- Toggles. `X isn't Y. It's Z.` and the comma form `It's not just X, it's Y`, plus the variants `Not X. But Y.`, `Not X, not Y, not Z`, `Not X. Not Y. Just Z.`, `You don't X. You Y.`, `Didn't X. Did Y.`, `I don't mean X. I mean Y.`, and the repeated-subject form `The A is not X. The A is Y.` All of them stage a denial to fake a reveal. Make the point once, with evidence.
- Vague attribution. `Research shows`, `Studies show`, `Studies suggest`, `Experts say`, `Experts agree`, `Science says`, `Data shows`, `Many believe`, `Industry leaders agree`. Name the source or cut the claim.
- Engagement bait. `Agree?`, `Thoughts?`, `Who else...?` as closing lines, `What do you think?`, `Drop a comment`, `Share this if`, `Tag someone`, `Let me know in the comments`, `I'd love to hear your thoughts`. Exemptible via `allowEngagementBait`. End on the last real point.
- Significance claims. `This represents`, `This marks`, `This underscores`, `This highlights`, `This stands as`, `This speaks to`. Show the consequence instead of labeling the importance.
- Stacked rhetorical questions. Three or more sentences in a row ending in `?`. A question stack dodges making a point. Answer one, cut the rest.

## 5. Warn-level structures

- Colon pivot. A mid-sentence `: ` used to tee up a reveal, as in `The fix: rewrite the page.` Exemptible via `allowColons`. The scanner skips URLs, timestamps, and ratios, plus list items, tables, single-word line labels, and blockquote lines.
- Trailing -ing analysis clause. A comma followed by `highlighting`, `showcasing`, `underscoring`, `reinforcing`, `enabling`, `demonstrating`, `signaling`, `cementing`, `solidifying`, `ensuring`, `reflecting`, or `positioning`. Machine narration bolted onto a fact. End the sentence at the fact.
- Inflated verbs. `serves as`, `acts as`, `functions as`, `stands as`, `boasts`. Use the plain verb.
- Rule-of-three flourish. Three lowercase items closing a sentence, as in `speed, clarity, and momentum.` Keep the one that matters, or make each item concrete. The scanner only matches lowercase triads that end a sentence, so ordinary mid-sentence lists and proper-noun lists pass.

## 6. AI vocabulary

Warn severity, because any of these can be a verbatim quote from a source. In generated prose, swap for the plain word.

`tapestry`, `intricate`, `pivotal`, `crucial`, `cornerstone`, `robust`, `holistic`, `seamless`, `testament`, `landscape`, `paradigm`, `synergy`, `cutting-edge`, `revolutionary`, `transformative`, `world-class`, `disruptive`, `groundbreaking`, `unprecedented`, `unlock`, `leverage`, `optimize`, `underscore`, `showcase`, `elevate`, `empower`, `supercharge` (inflected forms included).

## 7. Computed checks

- Staccato run (warn, exemptible via `allowStaccato`). Three or more consecutive sentences of five words or fewer. Real writers vary rhythm; the fix is one longer reasoning sentence in the run.
- Hashtag block (warn). Any line carrying two or more hashtags.
- Emoji density (warn). Three or more emoji in the text, or two or more in a piece under 120 words.

## 8. Exemption flags

Some real voices legitimately use patterns on this list, and the gate must never sand off an authentic voice. `my-story/anti-patterns.md` can carry four flags, each backed by corpus evidence (the `voice-pack` skill requires two or more verbatim occurrences per exemption):

- `allowEmDash` downgrades the em dash ban to a note.
- `allowColons` downgrades the colon pivot warn to a note.
- `allowStaccato` downgrades the staccato warn to a note.
- `allowEngagementBait` downgrades the engagement bait ban to a note.

A flag counts as set when it appears anywhere in the file, plain or as `allowEmDash: true`; write `allowEmDash: false` to disable an entry without deleting its evidence. Pass the file with `--exemptions`:

```bash
node scripts/scan.mjs draft.md --exemptions my-story/anti-patterns.md
```

Exemptions change severity only. Every detection still prints, so a human can see the pattern and confirm it is the voice, not the model.
