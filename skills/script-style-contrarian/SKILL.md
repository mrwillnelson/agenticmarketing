---
name: script-style-contrarian
description: The take-down-a-belief style module for short-form video scripts. Use when a script argues against a common belief, challenges accepted advice, or the user asks for a contrarian, myth-busting, or "everyone is wrong about X" video. Loads on top of short-form-script; it shapes the argument, the parent shapes the video.
---

# Script Style: Contrarian

Take down a belief on camera without becoming a rage account. This module supplies the argument arc and the craft checks for earned contrarianism; `short-form-script` still owns the hook, the length band, the pacing, and the format. Load both. Nothing here overrides a parent rule.

## Hard rules

1. Earned takes only. Every contrarian claim stands on a receipt from the speaker's own work: a number, a client moment, a thing they watched happen. No receipt, no script in this style. Offer a curiosity or reporting frame instead and say why.
2. Steelman the common take. State it the way its smartest defender would, in one spoken breath. Viewers smell a strawman instantly and the video dies with the credibility.
3. Disagree with ideas, never people. Attack the belief, the model, the incentive. Never a named person, a named company, a profession, or "your agency". The only names allowed are the speaker's own.
4. Both things can be true. If the common take is right 80% of the time, say so on camera and name the 20% where it breaks. All-or-nothing takes read as performance.
5. Heat without hedging and without rage-bait. Cut every hedge ("might be controversial", "just my opinion", "I could be wrong but"). Cut every rage marker ("they're lying to you", "wake up", "X is dead"). Conviction is the register between them.
6. The reframe must be usable, not just clever. One sentence a viewer can apply this week without hiring the speaker. A punchline that changes nothing is decoration.

## The arc

Four beats, dropped into the parent's frame (hook, foreshadow, execution beats, payoff):

1. The common take, stated fairly. One breath. The hook can open on the tension with it, but the belief itself gets its fair statement before the attack.
2. The crack. The specific observed reality that does not fit, from the speaker's experience, with a number or a moment attached. This is the receipt from the standing check, spoken plainly.
3. The reframe. The better model in one sentence. This is the line viewers repeat.
4. Monday morning. What to do differently this week, concrete enough to start without the speaker in the room.

The crack usually lands at the first retention dip and the reframe at the second; let the parent's pacing rules place them exactly.

## Procedure

1. Standing check. List what the speaker has actually earned against this belief: numbers from their own work, moments they witnessed, outcomes they produced. Pull from `my-story/` and the source material. If the list is empty, stop; rule 1 applies.
2. Write the belief as its holder would defend it. Test: would someone who holds this belief nod at your statement of it? If not, rewrite until they would.
3. Score the belief. Decide honestly how often the common take is right. If it is mostly right, draft the both-things-true line now: "that advice holds when X; here is where it breaks."
4. Pick one crack. The single strongest receipt: one number or one moment. Two receipts is a weaker script than one sharp one.
5. Write the reframe in one sentence. Usability test: could a viewer act on it with zero context about the speaker? If it only works as a slogan, keep drafting.
6. Write the Monday morning move. A step the viewer can take this week. If the reframe and the move say the same thing, the move is not concrete enough yet.
7. Hand the four beats to `short-form-script` for band selection, hook work, pacing against the dips, and output format. Takedowns usually need the 60 to 90 second argument band; a very sharp crack can carry 30 to 60.
8. Heat pass. Read the draft hunting hedges and rage markers per rule 5. Then check rule 3: is anything attacked that has a face?

## Personalization

Reads from `my-story/`:

- `narrative.md`: the take must serve a conviction in the bet. A contrarian take that serves no narrative line is noise with good production.
- `pillars.md`: the belief being cracked should sit inside a pillar thesis. A take outside every pillar scatters the voice; flag it and ask before drafting.
- `voice-model.md`: register and rhythm of the heat. Match how the speaker sounds at full conviction, not a generic debate voice.
- `anti-patterns.md`: hard rejects. Note that Will's pack bans fake contrarianism outright and bans "Unpopular opinion" and "Hot take" as phrases; treat equivalents in any user's pack the same way.

With an empty pack the arc and the craft rules still work, but the standing check has nothing to draw on, so receipts must come from the conversation or the source transcript. No receipts from anywhere means this style refuses; that behavior does not soften with an empty pack. Filling the pack with `voice-pack` improves the heat register and gives the standing check a permanent inventory.

## Examples

Bad (strawman): "Marketers think posting every single day magically builds pipeline."
Better (steelman): "Post every day is decent advice. Consistency compounds, and the people who show up daily do get seen more."
Why: nobody defends the bad version, so beating it proves nothing; the better one states the take a smart holder would sign, which makes the coming crack land.

Bad (borrowed receipt): "The data is clear that cold outreach is dead, everyone knows this."
Better (earned crack): "I sent 400 cold emails last quarter. The 30 that got replies broke every rule the templates teach."
Why: the bad line rents someone else's authority and attaches no experience; the better one has a number and a moment the speaker owns.

Bad (hedged): "This might be controversial, and I could totally be wrong here, but maybe follower count isn't the metric to chase?"
Better (heat without hedging): "Follower count is the wrong scoreboard. I'd take 200 people who buy over 20,000 who scroll."
Why: the hedges spend the viewer's first seconds apologizing; the better one commits, and the claim is still about an idea, not a person.

Bad (rage-bait): "Your agency is lying to you and they know it. Wake up."
Better (idea attack): "The monthly-report model rewards activity over outcomes. Nobody in it is lying. The scoreboard is just measuring the wrong thing."
Why: the bad one attacks people and manufactures outrage; the better one locates the fault in the model, keeps the heat, and both-things-true survives.

## Self-check

- Would someone who holds the belief agree I stated it fairly?
- Is the crack from the speaker's own experience, with a number or moment attached?
- Did the script say how often the common take is right, and name where it breaks?
- Can a viewer use the reframe and the Monday move without hiring the speaker?
- Is any person, company, or profession attacked? Any hedge left? Any rage marker?
- Does the script still pass every `short-form-script` rule and the pack's anti-patterns?

`references/bakeoff.md`: read when you want the full delta on one belief, a baseline rage-bait script against the with-skill script, traced step by step.

## Related skills

- `short-form-script`: the parent. This module never runs without it; the parent owns hook, band, pacing, and format.
- `hooks`: pressure-test the spoken open; a takedown hook must open the tension without strawmanning inside 3 seconds.
- `thought-leadership-hooks`: sibling style for authority-led opens; use it when the video asserts a position without taking down an opposing one.
- `newsjacking`: time-bound contrarianism. When the belief is attached to a story from this week, run its window and disqualifier checks first.
- `voice-pack`: builds the `my-story/` pack the standing check and heat register draw from.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
