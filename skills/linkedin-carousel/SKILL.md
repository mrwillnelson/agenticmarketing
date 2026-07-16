---
name: linkedin-carousel
description: Plan and write a LinkedIn carousel (document post) from a framework, sequence, or source material. Use when the user asks for a carousel, a document post, a slide post, or when an idea steps naturally (a numbered framework, a before/after sequence) and a text post would flatten it. Produces the cover, the per-slide text, a design notes column, and the caption.
---

# LinkedIn Carousel

Turn one steppable idea into a carousel a reader swipes to the end: a cover that stops the scroll as a thumbnail, one idea per slide, a payoff slide that lands what the cover promised, a caption that works as a post on its own, and a design notes column so whoever builds the visuals never has to guess. This skill owns the slide plan; visual production is someone else's job and gets everything it needs from the plan.

## Hard rules

1. The cover slide is a hook under the same law as a text-post hook: one claim, roughly 12 words max, one open question it refuses to answer. It must read at thumbnail size in the feed, which is smaller and more crowded than a text fold. Cover craft belongs to the `hooks` skill; load it, do not improvise covers here.
2. One idea per slide. A slide carrying two ideas becomes two slides or loses one. A slide carrying half an idea merges into its neighbor.
3. 8 to 12 slides, counting cover and payoff. Under 8 means the idea did not need a carousel; hand it to `linkedin-post`. Over 12 means it is two carousels; ship one, bank the other.
4. The slide arc is fixed: the cover opens the gap, slides 2 to N-1 each advance exactly one beat, and the payoff slide lands the promise the cover made. The payoff slide is never a CTA slide. A "follow me" or "get in touch" slide after the payoff is the carousel ending on an ad; cut it.
5. Text per slide must read on a phone held at arm's length: roughly 25 words max. Count the words on every slide. A slide over the ceiling is either two ideas (split it) or one idea padded (cut it).
6. The caption is a mini text post in its own right: hook first, body that stands alone, ending that stops. Never "swipe to see", never "full breakdown in the slides", never a summary of the deck. A reader who never opens the carousel still got a complete post.
7. Deliver a design notes column: for every slide, the exact text and the visual beat (what the slide shows, not how to style it). No slide ships as text with "designer's choice" attached.
8. Build a carousel only when the idea steps. Steppable frameworks, before/after sequences, ranked lists where the order argues something, anything with a natural slide rhythm. One strong claim with proof is a text post. A story with one turn is a text post. Do not stretch a post into a deck to look substantial.
9. Every claim, number, and quote traces to the source. Never invent proof to fill a slide.
10. The full slide text plus the caption pass the `anti-ai` scan and the `draft-qa` gate before the user sees anything. Platform mechanics live in `platforms/linkedin.md`; do not re-derive them here.

## Procedure

1. Check format fit before anything else. Write the idea's beats as a flat list. If the beats do not step (each one setting up the next), stop and route to `linkedin-post`. Rule 8 is a gate, not a preference.
2. Name the promise in one sentence: what the reader holds at the last slide that they lacked at the cover. Every slide will serve this sentence.
3. Build the cover with the `hooks` skill. Then test it as a thumbnail: shrink it in your head to a small square between two other posts. If it needs a second line, a subtitle, or context to work, it is not a cover yet.
4. Map beats to slides, one beat per slide, and count. Under 8: this is a text post, route it. Over 12: find the seam and split into two carousels with their own covers. Merging two thin beats is allowed; cramming two full beats is not.
5. Write the slide text top to bottom, holding the 25-word ceiling. Each slide states its one idea plus the minimum support. Front-load the claim; a reader mid-swipe reads the first line and decides.
6. Write the payoff slide last and make it the second-strongest slide in the deck after the cover. It resolves the cover's open question with the sharpest concrete beat available. Then stop; no CTA slide follows it.
7. Assemble the design notes column: a table of slide number, exact text, and visual beat. The visual beat is one line naming what the slide shows (the number huge, the two columns side by side, the step counter). Whoever builds the visuals should never need to read the source.
8. Write the caption as a mini text post using `linkedin-post` craft with a `hooks` opener. The caption argues the same thesis from a different angle than the slides; it never narrates them.
9. Run the `anti-ai` scan on all slide text and the caption, then `draft-qa` on the full package. Only a passing package goes to the user.

## Personalization

Reads from `my-story/`:

- `voice-model.md`: sentence rhythm for slide lines and the caption's length band; slides written in the user's cadence, not slide-deck-speak.
- `anti-patterns.md`: banned words, openers, and closers; hard rejects on every slide and the caption, not just the cover.
- `pillars.md`: which content pillar this carousel serves; checked when naming the promise in step 2.

With an empty pack the skill still works: standard rhythm, no hashtags, caption in the default 80 to 300 word band. The deck will be craft-correct but generic to the user's voice. Run `voice-pack` once to fix that.

## Examples

Covers.

Bad cover: "My Complete 5-Step Framework for Building a Founder-Led Content Engine That Drives Pipeline"
Better cover: "669,000 impressions in 28 days. From one founder's voice."
Why: the bad one is a report title with three claims and zero gap, unreadable at thumbnail size; the better one is one claim, ten words, and the how is the open question.

Slide text.

Bad slide: "Measurement is critical because without tracking performance data across all your posts you can never know which stories resonate with your audience, which means your amplification budget gets wasted on content that was never going to convert anyway."
Better slide: "Publish, then wait. Most posts are experiments. A few are signals. You cannot tell which is which on day one."
Why: the bad one is 38 words of reasoning chained into one breath; the better one is one idea, 21 words, readable at arm's length.

Payoff slides.

Bad payoff: "Want results like these? Follow me for more frameworks, and DM me the word STORY to get the full playbook."
Better payoff: "The secret was never writing tricks. It was everyone rowing toward the same target. Craft. Capture. Create. Measure. Amplify."
Why: the bad one spends the deck's last beat on an ad; the better one lands the cover's promise and lets the reader sit with it.

Captions.

Bad caption: "Swipe through for my full 5-step process! Slide 7 is the one most people miss. Which step are you on?"
Better caption: "669,000 impressions in 28 days from founder content. We didn't post more. We captured stories that already existed inside the company and the founder shared them in his voice. The writing was never the hard part."
Why: the bad one is a tour guide for the slides plus engagement bait; the better one is a post that stands on its own and gives a reader who never swipes a complete thought.

A full worked run on real material: see [references/bakeoff.md](references/bakeoff.md).

## Self-check

- Does the cover make one claim in roughly 12 words, and does it survive as a thumbnail with no subtitle?
- Does every slide carry exactly one idea in 25 words or fewer, counted?
- Is the deck 8 to 12 slides, and did anything under 8 get routed to `linkedin-post`?
- Does the payoff slide land the cover's promise, with no CTA slide after it?
- Does every slide in the design notes have exact text plus a one-line visual beat?
- Does the caption work as a standalone post, hook first, with no "swipe" language and no slide summary?
- Does every number and quote trace to the source?
- Did the slides and caption pass the `anti-ai` scan and `draft-qa`?

## Related skills

- `hooks`: generates and pressure-tests the cover; always loaded in step 3, and again for the caption opener.
- `linkedin-post`: caption craft, and the destination for any idea that turned out not to step.
- `one-recording-everything`: when the carousel is one piece of a set from a recording, that skill plans the set and passes verbatim material here.
- `anti-ai` and `draft-qa`: mandatory gates before the user sees the package.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
