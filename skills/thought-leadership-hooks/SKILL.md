---
name: thought-leadership-hooks
description: Open belief-change posts, covering opinion pieces, analysis, and contrarian takes that crack a belief the reader actually holds. Use when writing the first line of a post that argues against received wisdom, when a draft opens like a hot take with no receipts behind it, or when an opinion post starts by saying the obvious thing. Layers on the hooks skill.
---

# Thought Leadership Hooks

A belief-change post asks the reader to drop something they currently think is true. The opener's job is not to announce your position; it is to make the reader's current position feel unstable. Two forms do that: name the belief the reader holds and show the crack in it, or show a specific observed reality that contradicts received wisdom and let the belief break on its own. Load `hooks` first; this skill changes what counts as voltage when the source is an opinion.

## Hard rules

1. All `hooks` rules apply, especially source discipline, the single curiosity gap, the fold check, and the hard `anti-ai` gate. Where the two conflict, this skill wins for belief-change content.
2. Never open with the obvious. If the target reader already agrees before reading line two, the post changes nothing. Say what the reader believes and does not want disturbed, or say nothing.
3. Earned contrarianism only. The crack must trace to something the author actually saw or did: a client result, a pattern observed across real work, a mistake with a cost. Check `my-story/narrative.md` and ask the user for the receipt if the pack lacks one. A take without a trace is attitude, and attitude is not a source.
4. The premise trap is a hard fail. An opener that states the belief AND the correction is a premise, a closed loop with nothing left to read. Crack the belief in line one; the replacement belief arrives in the body, after the reader has been walked there.
5. No fake-contrarian bait. "Unpopular opinion", "Hot take", "Nobody wants to say this", "I'll probably get flamed for this" and every other bravery label are banned. A take that needs a warning sticker to sound bold has no crack in it.
6. No strawmen. State the belief in its strongest form, as its smartest holder would state it. An opener that beats a caricature persuades nobody who matters and flatters everyone who already agreed.
7. Run the standing check before wording anything. Standing means at least one of: firsthand experience doing the thing, data you produced, or receipts in the pack. No standing means no take; offer the honest alternative (a question you are sitting with, an observation you cannot yet explain) or a different belief where standing exists.
8. Never invent experience, numbers, or observations to manufacture standing. A fabricated receipt is worse than a boring opener.

## Procedure

1. Run the `hooks` procedure with the opinion material as the source. Before mining for voltage, write the received wisdom in one sentence, steelmanned: the version a smart, successful holder of the belief would sign.
2. Run the standing check against that sentence. List what the author has actually done or seen that speaks to it, pulling from `my-story/narrative.md` and the source material. If the list is empty, stop and say so; propose the nearest belief where standing exists.
3. Find the crack: the specific observed moment where the belief failed. A crack is a scene, a behavior, or a number, never a conclusion. "Founders point to their marketing team when asked about storytelling" is a crack. "Storytelling reveals strategy gaps" is a conclusion; save it for the body.
4. Choose the opener form. Belief-and-crack: name the belief the reader holds, then show the fracture, withholding what it means. Reality-first: state the observed reality flat, with no belief named, and let the contradiction do the work. Reality-first is stronger when the observation is sharp enough to stand alone.
5. Sweep for the premise trap. If any candidate contains both the belief and the correction, cut the correction and check what remains still opens a loop.
6. Run the obviousness test. Ask which specific reader disagrees with the opener. If no one does, the take is a platitude in a leather jacket; return to step 3 for a sharper crack.
7. Run the standard `hooks` gates: fold check, emotion named, one open question, anti-ai scan.

## Personalization

Reads from `my-story/`:

- `narrative.md`: the bet section lists the beliefs the author has publicly committed to defend; takes should trace to one of them, and the positioning supplies standing.
- `pillars.md`: pillar theses are pre-cleared belief-change territory. A take outside every pillar needs a stated reason to exist.
- `anti-patterns.md`: banned openers and structures; hard rejects for candidates, including any fake-contrarianism ban.
- `hooks.md`: approved past openers; match their register, especially past observation and opinion hooks.

With an empty pack the skill still works, but the standing check runs by interviewing the user for receipts, and the takes will read like anyone's. Run `voice-pack` once to fix that.

## Examples

Bad: "Unpopular opinion: most content advice is wrong."
Better: "I audited 40 posts that followed the standard playbook line by line. The playbook was not the problem."
Why: the bad one wears a bravery label over a vague swing; the better one shows work actually done and leaves open what the problem was.

Bad: "Everyone thinks the problem is reach. The real problem is trust."
Better: "Our reach tripled in a quarter. Inbound did not move."
Why: the bad one states the belief and the correction, a closed loop; the better one shows the reality flat and leaves the cause open.

Bad: "People who chase vanity metrics don't understand marketing."
Better: "Impressions were the number I defended hardest in every review. Then I traced a quarter of pipeline back and our ten biggest posts were nowhere in it."
Why: the bad one beats a caricature nobody would sign; the better one takes the belief at its strongest, held by the author himself, and cracks it with a receipt.

Bad: "Agencies won't tell you this, but outsourcing your content is risky."
Better: "I run an agency, so read this however you want. Half of what we sold two years ago I would now tell a founder to keep in-house."
Why: the bad one claims insider bravery without standing; the better one discloses the conflict and spends real standing on a confession that costs the author something.

One belief-change idea opened both ways with Will Nelson's real published posts and numbers: read [references/bakeoff.md](references/bakeoff.md) before your first run, or when a take feels earned but you cannot say why.

## Self-check

- Write the steelmanned belief in one sentence. Would its smartest holder sign it?
- What did the author actually see or do that cracks it? Name the receipt and where it lives.
- Does the opener contain the correction? If yes, it is a premise; cut the correction.
- Which specific reader disagrees with line one? If nobody, it is obvious; find a sharper crack.
- Any bravery labels or fake-contrarian framing left?
- Did every finalist pass the full `hooks` self-check: emotion named, one open question, fold, anti-ai?

## Related skills

- `hooks` is the parent. Load it first; this skill only changes what counts as voltage for opinions.
- `newsjacking` owns time-bound takes reacting to a breaking story; use it when the belief-change rides a news window.
- `milestone-hooks` owns openers when the source is company news rather than an opinion.
- `linkedin-post`, `newsletter`, and `short-form-script` consume this skill when drafting belief-change content in full.
- `draft-qa` re-checks the opener in the context of the finished post.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
