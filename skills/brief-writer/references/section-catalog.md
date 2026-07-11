# Brief section catalog

Every section of the brief: what it is for, what good looks like, and how each one fails. Required sections appear in every brief. Optional sections appear only when they change what the drafter does.

Contents: required sections, optional sections, output template.

## Required sections

### Thesis

Purpose: the one belief the reader should leave with, stated as a change from what they believe now.
Good: "You think your storytelling problem is a communication problem; it is your strategy problem wearing different clothes."
Fails when: it is a topic label ("founder storytelling"), a value statement ("storytelling matters"), or two sentences pretending to be one.

### Audience

Purpose: the specific reader, what they currently believe, and why they will stop scrolling for this.
Good: "Seed to Series B technical founder who has delegated 'messaging' to marketing and believes his own explanation problem is a personality trait."
Fails when: it names a category ("founders", "marketers") or describes demographics without a current belief.

### Reader tension

Purpose: the fear, doubt, or contradiction this piece enters. A person and a fear, never a topic.
Good: "The founder who hears five different company descriptions from five leaders and fears the drift means he never actually decided what the company is."
Fails when: it restates the topic with emotional adjectives, or the fear belongs to no one in particular. Test: underline the person and underline the fear. Two underlines or rewrite.

### Hook direction

Purpose: 2 to 3 candidate angles for the opener. Each is one line: what the first line points at, and the emotion it should trigger (recognition, dread, curiosity, relief).
Good: "Angle A: the deflection itself as the tell ('ask a founder about storytelling and watch where they point'), recognition. Angle B: the diagnosis reversal (the messaging complaint is the strategy symptom), dread."
Fails when: it contains finished hook lines (that forecloses the `hooks` skill's job), or the angles are three phrasings of the same angle.

### Source truth

Purpose: the whitelist. Every verbatim quote, number, name, date, and fact the draft may use, each with provenance. The draft may use nothing outside this list.
Good: each entry as `Quote (source, location, speaker): "exact words"` or `Fact (source): statement`.
Fails when: quotes are paraphrased, provenance is missing, or the section quietly omits that the source is thin. When no verbatim source exists, the section must say exactly that: "No verbatim source material exists for this piece." That sentence is a feature; it tells the drafter and `draft-qa` what the proof trace will look like.

### Shape

Purpose: the editorial arc in 3 to 5 beats: how the piece opens, develops, turns, proves the point, and lands. Plus the structure family it borrows: confession, breakdown, receipt-led, argument, story-then-lesson.
Good: "Open on the deflection. Name the pattern from repeated observation. Turn: the two problems are the same problem. Prove with the scale consequence. Land on the compressed restatement."
Fails when: it lists sections generically ("intro, body, conclusion") or commits to two shapes at once.

### Platform and length target

Purpose: where this ships and how long it runs, as a word range from the user's measured range in `my-story/voice-model.md`.
Good: "LinkedIn. 150 to 220 words: this is an argument piece, upper half of the measured range."
Fails when: the range is a platform cliche ("keep it short for LinkedIn") instead of the user's own data. With an empty pack, use the platform default and label it as a default.

### Voice rules for this piece

Purpose: the 3 to 5 rules from the voice model this specific piece will be most tempted to break, given its shape and subject.
Good: "This is an argument piece, so the risk is polish: keep the deliberately uneven rhythm, keep sentences long enough to carry reasoning, end a beat early, no rhetorical questions even though the thesis invites them."
Fails when: it pastes the whole voice model, or lists rules no piece of this shape would break anyway.

### Avoid-list for this piece

Purpose: the traps this exact thesis invites: predictable framings, overused references in this niche, claims the source cannot support, resolutions that contradict the thesis.
Good: "Do not resolve by recommending better messaging; the thesis says messaging is not the problem."
Fails when: it restates global bans from `my-story/anti-patterns.md`. Test: would this avoid-list make sense attached to a different post? If yes, rewrite.

### CTA decision

Purpose: an explicit decision, usually "none". The default ending stops on the strongest beat with nothing performing after it.
Good: "None. The last line is the landing; a CTA would soften it." Or, when earned: "One line offering the full essay, because the post is an excerpt argument and the essay exists."
Fails when: a CTA appears by habit, or the decision is omitted so the drafter improvises one.

### Success signal

Purpose: the one observable outcome that says this piece worked.
Good: "Comments from founders describing their own version of the five-stories problem, rather than generic agreement."
Fails when: it is a vanity target with no number and no behavior ("good engagement").

### Brief quality score

Purpose: the 8-axis score from SKILL.md, the weakest axis named, and the handoff decision. Below 70 the brief does not hand off; the score block states what is missing and what would raise it.

## Optional sections

### Media

Only when a visual changes the piece: a chart that is the proof, a clip the post exists to carry. Name the asset and why. Absent means text only.

### Sequencing

Only when order matters: this piece sets up a launch post, overlaps a running series, or needs a permission before a name or number can ship.

### Open questions

Questions only the author can answer, each blocking a named section. If an open question blocks source truth or thesis, the score must reflect it and the brief does not hand off until answered.

## Output template

```markdown
# Brief: {working title}

- Thesis: {one sentence, belief change}
- Audience: {who exactly; what they believe now}
- Reader tension: {the person and the fear}
- Hook direction:
  - {angle A: what the opener points at, emotion}
  - {angle B: ...}
- Source truth:
  - Quote ({source}, {location}, {speaker}): "{verbatim}"
  - Fact ({source}): {statement}
  - {or: No verbatim source material exists for this piece.}
- Shape: {3 to 5 beats; structure family}
- Platform and length: {platform; word range and why}
- Voice rules for this piece: {3 to 5 rules}
- Avoid for this piece: {piece-specific traps}
- CTA decision: {usually none, with reason}
- Success signal: {one observable outcome}

## Brief quality: {NN}/100, {hand off | do not hand off}
Axes: source truth {NN}, thesis clarity {NN}, reader tension {NN}, hook potential {NN}, originality {NN}, narrative fit {NN}, audience clarity {NN}, completeness {NN}
Weakest axis: {axis}. {If below 70: what is missing and what would raise it.}
```
