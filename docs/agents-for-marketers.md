# Agents for marketers

The 10-minute onramp. No coding required, and nothing here assumes you have used a coding agent before.

## What an agent is

An agent is an AI that can read files, run programs, and take multi-step actions on your computer, not just answer in a chat box. You give it a goal in plain English; it figures out the steps, does the work, and shows you the result. The skills in this repo are instruction sets that teach it your marketing workflows, so it works the way you would instead of the way a generic chatbot does.

Claude Code is the agent these skills are built for. It runs in your terminal. That sounds technical; in practice you type sentences at it, the same way you would brief a colleague.

## Step 1: install Claude Code (3 minutes)

Follow the official install guide at [docs.claude.com](https://docs.claude.com/en/docs/claude-code/overview). It is one command, then you sign in with your Claude account.

Open a terminal (Mac: press Cmd+Space, type "Terminal", press Enter), make a folder for your marketing work, and start the agent in it:

```bash
mkdir my-marketing && cd my-marketing
claude
```

## Step 2: install the skills (1 minute)

From your terminal:

```bash
npx skills add mrwillnelson/agenticmarketing
```

Or install as a Claude Code plugin from inside a Claude session:

```
/plugin marketplace add mrwillnelson/agenticmarketing
/plugin install agentic-marketing-skills@64stories
```

Either way, the agent now knows all 29 skills and picks the right one from what you ask.

## Step 3: first run, on the bundled sample (2 minutes)

The repo ships a sample call transcript at `examples/demo-call.md` so you can see the system work before you bring your own material. Tell your agent:

```
Use the one-recording-everything skill on examples/demo-call.md
```

You get back one artifact: a plan table, full post drafts, clip timestamps with verbatim opening lines, and a newsletter section, every claim traced to a transcript line. Read it. Notice that nothing is invented; every quote exists in the transcript.

## Step 4: first run, on your own writing (4 minutes)

This is the step that makes everything sound like you. Collect 10 to 30 of your own LinkedIn posts (copy and paste is fine), then tell your agent:

```
Use the voice-pack skill on these posts:

[paste your posts]
```

The skill measures your actual rhythm (sentence length, paragraph shape, contraction rate) and builds your `my-story/` pack. From then on, every writing skill drafts in your measured voice, and every quality gate checks drafts against your real baseline instead of a generic one.

Then try a real task:

```
Write a LinkedIn post from these notes: [paste rough notes from your week]
```

## What to expect

- The agent asks questions when the source material is thin. Answer them; do not let it guess.
- Drafts come back with the reasoning visible: which quote anchored the post, which gate it passed or failed.
- The first drafts are good, not perfect. Edit them. The `improve-my-pack` skill later learns from your edits, and the pack gets sharper every cycle.
- You approve everything. Nothing publishes itself; the system drafts, checks, and hands you the result.
- Expect an honest "no post today" sometimes. A forced post trains your audience to skip you.

## When something fails

Run the doctor:

```
node scripts/doctor.mjs
```

It checks your install, your pack, and your scripts, and tells you exactly what to fix. If a skill produces something that does not sound like you, say so plainly: "I would never write line 4, fix it" is a complete and useful instruction.

## Where to go next

- [docs/loops.md](loops.md): the recurring routines (daily, weekly, monthly) that compound.
- [CONCEPTS.md](../CONCEPTS.md): what the words in this repo mean.
- [CONFIGURATION.md](../CONFIGURATION.md): the honest list of everything configurable.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
