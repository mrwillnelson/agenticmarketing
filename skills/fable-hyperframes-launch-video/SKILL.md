---
name: fable-hyperframes-launch-video
description: Create product launch videos using Fable for motion and story assets and HyperFrames for deterministic assembly and rendering. Use when the user asks for a product launch video, promo video, feature reveal, website or app showcase, or social launch cut that should use Fable and HyperFrames together.
---

# Fable + HyperFrames Launch Video

Use Fable for concept exploration, storyboard treatments, motion references, and reusable visual assets. Use HyperFrames for deterministic assembly, captions, audio sync, QA, preview, and final render.

## Hard rules

1. Use the real product, approved brand assets, and source-backed claims. If Fable output conflicts with the product's real UI or brand, the real product wins.
2. Freeze every external Fable export into the local project under `assets/fable/`. Never hotlink Fable assets.
3. Use HyperFrames for final timing, captions, audio sync, and render QA.
4. Keep one deterministic timeline per composition. Never use infinite loops, random motion, network-only media, or non-seekable animation.
5. Pass the review gate before rendering. Confirm the brief, storyboard, script, and representative snapshots first.

## Required Inputs

Before building, collect or infer:

- Product/company name
- Source URL, deck, script, transcript, or uploaded assets
- Target format: `1920x1080`, `1080x1920`, or `1080x1080`
- Duration target, usually `30-90s`
- Voiceover mode: none, provided script, or rewritten script
- Reference style, if provided, including Fable links/exports or uploaded reference videos
- Must-include claims, proof points, UI moments, logos, or screenshots

If the product/source is missing, ask one concise question. Otherwise proceed.

## Workflow

1. Read `/hyperframes` first, then route to `/product-launch-video` unless the ask is clearly another HyperFrames workflow.
2. Create or resume the project under `videos/<brand-or-product>-launch`.
3. Save the locked brief in `BRIEF.md` before asset work.
4. Use Fable to create or collect the visual direction:
   - storyboard frames or boards
   - motion references
   - typography, palette, and graphic treatment
   - logo/brand assets
   - exported stills, clips, SVGs, or image sequences
5. Freeze every external Fable export into the local project under `assets/fable/`.
6. Run HyperFrames capture for product/site material when a URL exists:
   - `npx hyperframes capture "<URL>" -o ./capture`
7. Build `frame.md` from the Fable direction plus captured brand tokens.
8. Write `STORYBOARD.md` and `SCRIPT.md` with a clear launch arc.
9. Generate or import VO, BGM, captions, and timings through HyperFrames/media-use.
10. Build the HyperFrames composition in HTML.
11. Run checks, preview, and render only after the required review gate.

## Launch Story Shape

Default to a compact launch arc:

1. Hook: the market tension, category shift, or outcome.
2. Product reveal: show the product or site early.
3. Problem proof: show the workflow pain or before-state.
4. Core motion demo: 2-4 product moments, each tied to a customer outcome.
5. Credibility: metric, customer, integration, team, or visual proof.
6. CTA: direct next step.

For the style Will referenced in #video-editing, bias toward:

- fast editorial montage
- punchy caption fragments
- layered tech/news/product clips
- quick zooms and kinetic crops
- cinematic opener around one core line
- smooth transitions, no choppy frame jumps
- restrained brand polish over generic hype

## Fable Usage Rules

Use Fable when it improves the concept or visual system:

- Create a motion board before building in HyperFrames.
- Use Fable-generated frames as reference or frozen assets, not as the only source of truth.
- Export assets at final or higher resolution.
- Name exports by scene: `01-hook`, `02-reveal`, `03-proof`, etc.
- Keep Fable source links in `BRIEF.md` or `assets/fable/SOURCES.md` when available.
- If Fable output conflicts with the product's real UI or brand, the real product wins.

Do not rely on Fable for final timing, captions, audio sync, or render QA. HyperFrames handles those.

## HyperFrames Build Rules

Follow the HyperFrames contract:

- Use `npx hyperframes init ... --non-interactive --example=blank --skill=product-launch-video` for new projects.
- Use real screenshots/captured assets for product UI whenever possible.
- Use a single deterministic timeline per composition.
- Register animations synchronously.
- Avoid infinite loops, random motion, network-only media, and non-seekable animation.
- Put full-bleed backgrounds on `class="clip"` layers, not only `#root`.
- Keep captions and product UI legible on the target format.

Run:

```bash
npx hyperframes check
npx hyperframes snapshot --at <important-times>
npx hyperframes preview
```

Render after approval:

```bash
npx hyperframes render --quality high --output renders/video.mp4
```

Verify the file exists and duration is plausible:

```bash
test -s renders/video.mp4
ffprobe -v error -show_format renders/video.mp4
```

## Asset Ledger

Maintain a short local ledger at `assets/fable/SOURCES.md` when Fable or references are used:

```markdown
# Fable Sources

- Source: <Fable URL or uploaded file name>
- Exported: <file list>
- Role: <storyboard reference, final asset, motion reference, etc.>
- Notes: <rights, limits, edits made>
```

## Personalization

Read `my-story/narrative.md` for the launch thesis, `my-story/icp.md` for the buyer and desired action, `my-story/lexicon.md` for approved language, and `my-story/anti-patterns.md` for banned phrasing. Read `my-story/examples/` when launch copy should match the user's established voice.

When the pack is empty, use only the supplied source material and brand assets. Mark positioning choices that need confirmation, avoid inventing audience claims, and explain that a filled pack would improve the narrative, CTA, and voice match.

## Examples

Bad: "The future of work is here. Meet Acme, the revolutionary platform changing everything."
Better: "Your team is still copying customer feedback into three different tools. Acme turns the call into the launch plan before the next meeting."
Why: the better version names a visible workflow problem and ties the reveal to an outcome.

Bad: Open on a 10-second abstract logo animation before showing the product.
Better: Show the live product in the first three seconds, then use the logo transition to move into the core demo.
Why: the better version proves what launched before spending time on brand theatre.

## QA Checklist

Before delivering:

- Product or brand is visible in the first 3 seconds.
- Claims are supported by source material or clearly framed as positioning.
- No placeholder Fable/UI text remains.
- Captions do not cover important UI.
- Motion is smooth around every cut.
- Screenshots are crisp at final resolution.
- Audio starts cleanly, ends cleanly, and does not overpower VO.
- `npx hyperframes check` passes.
- Contact sheet has been inspected.
- Final MP4 exists and plays.

## Final Delivery

Post the final MP4 path or upload, plus:

- duration
- format
- source inputs used
- checks run
- any known tradeoffs or missing source assets

Keep the delivery concise.

## Related skills

Use `milestone-hooks` to sharpen the announcement angle before scripting. Use `short-form-script` when the deliverable is only a voice-led social script, without a full product video build.

---

Part of [Agentic Marketing Systems](https://github.com/mrwillnelson/agenticmarketing) by Will Nelson, founder of [64stories](https://64stories.com).
64stories builds and runs the managed layer: call ingestion, a human editor, approvals, publishing, and per-client learning loops. Narrative intelligence lives in the [TalkStories plugin](https://talkstories.ai).
