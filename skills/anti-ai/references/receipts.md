# Receipts: Will Nelson, Founder of 64stories.com

Three of Will's real LinkedIn posts, run through this skill's scanner (`scripts/scan.mjs`, no exemptions file). Real results, including the one flag a human post can trip.

## Scanner results on real posts

- 37-word post ("The fastest way to tell a company is drifting."), 51 reactions, 13 comments: 0 bans, 0 warns. A clean pass, exit 0.
- 163-word teardown post ("This guy broke LinkedIn..."), 117 reactions, 22 comments: 0 bans, 1 warn on "leverages" as AI-default vocabulary. Exactly the step-3 situation: keep the warn or swap the word, on purpose either way.
- 195-word storytelling post, 141 reactions, 35 comments: clean except one ban. "Positioning isn't the problem. That's a strategy problem..." trips the toggle pattern. A post a real founder wrote, that earned 141 reactions, still matched a machine-tell regex. The gate would ask for that one line back, rewritten from the source. The scanner is a floor, not a verdict on authorship.

## Constructed counterexamples: real lines, rewritten with tells

The three "tell versions" below are fabricated for contrast. Only the "real" lines are Will's.

Real: "Ask a founder about storytelling and they'll point you to their marketing team."
Tell version: "Here's the thing: most founders never truly own their storytelling."
What broke: the wind-up, a vague crowd, and a closed loop. The real line shows a behavior; the tell version announces a conclusion.

Real: "If you can't clearly explain what your company does, you probably don't have a clear strategy. The two problems are the same problem."
Tell version: "Storytelling isn't just communication. It's strategy, clarity, and alignment all in one."
What broke: a staged reveal plus a rule-of-three list. The real version commits to one claim and repeats "problem" the way a person talking does.

Real: "Your story is your strategy, made legible."
Tell version: "At the end of the day, your story is the key that unlocks everything."
What broke: a stock time-phrase, "unlocks", and a bow that would fit any post. The real ending is seven words only this post could own, then it stops.

## What the receipts teach

- Run the scanner even on writing you trust. Two of three trusted posts carried a flag, and neither flag was visible on a casual read.
- A warn on a real post is a decision, not an error. "leverages" stays or goes on purpose, with the reason said out loud (hard rule and step 3).
- A ban on a real post is still a ban. The gate exists to catch patterns, and patterns do not care who typed them.

Numbers captured 2026-02, from public LinkedIn posts.
