# What to Say Brief Contract

Use this structure for the final decision artifact.

The order is intentional. Put the decision first, then the evidence, then the creation guidance.

## Decision

Write one sentence:

`The company should say: [core message]. [E###]`

Then assign one decision state:

- `SHIP` — strong enough to pursue now.
- `DEFER` — direction is strong but required proof, permission, timing, or inputs are not ready.
- `REDIRECT` — underlying signal is useful but the proposed company, speaker, or framing is wrong.
- `KILL` — do not pursue this message.

If the evidence does not support a strong direction, write:

`No strong What to Say decision yet.`

Do not bury uncertainty later in the brief.

## What to say

State the message in plain language.

Include:

- one primary message
- 2 to 5 supporting points
- evidence IDs beside every non-obvious claim

Do not write final copy here.

## Why now

Explain the timing signal.

Useful evidence can include:

- a repeated current buyer question
- a product or company change
- a market shift
- a competitor change
- a search pattern
- a performance pattern
- a belief the company has recently earned the right to express

If timing evidence is absent, say so.

## Why buyers should care

Connect the message to a buyer tension, decision, risk, desire, or unresolved question.

Name what the evidence actually shows. Do not substitute a generic ICP description for current buyer evidence.

## Candidate check

Show the winning direction against all eight decision dimensions.

| Dimension | Assessment | Evidence |
|---|---|---|
| Buyer pull | strong / mixed / weak / unknown | E### |
| Company right to say | strong / mixed / weak / unknown | E### |
| Messenger fit | strong / mixed / weak / unknown | E### |
| Why now | strong / mixed / weak / unknown | E### |
| Proof completeness | strong / mixed / weak / unknown | E### |
| Distinctiveness | strong / mixed / weak / unknown | E### |
| Novelty / coverage | strong / mixed / weak / unknown | E### |
| Permission safety | strong / mixed / weak / unknown | E### |

Do not average away a fatal weakness. A message with strong buyer pull can still fail because the speaker is wrong, the proof is incomplete, the idea is already exhausted, or the evidence cannot be used publicly.

If a losing candidate was close, name it in one line and say which dimension caused it to lose.

## Evidence ledger

Use one row per meaningful signal.

| ID | Class | Status | Permission | Source | Observation | Implication |
|---|---|---|---|---|---|---|
| E001 | customer | FACT | public / approved / restricted / unknown | customer call | ... | ... |

Allowed classes:

- `company`
- `customer`
- `market`
- `search`
- `performance`

Allowed statuses:

- `FACT`
- `INFERENCE`
- `HYPOTHESIS`
- `UNKNOWN`

Permission states are descriptive, not a substitute for legal review:

- `public` — already public in the supplied evidence.
- `approved` — user/source explicitly says it may be used.
- `restricted` — supplied evidence says it should not be used publicly.
- `unknown` — no permission information is present.

Keep observation and implication separate. If a source supports only the observation, do not write the implication as fact.

## Search demand and language

Include this section even when the answer is unknown.

Structure:

- known query or search language
- known demand evidence
- useful exact phrases
- conflicts with customer/company evidence
- unknowns
- smallest searches or datasets that would resolve them

Never invent volume, ranking, or demand.

## How to say it

Specify editorial direction, not prose.

Include:

- speaker or voice
- angle
- proof that must appear
- level of specificity
- recommended format
- tone or posture

The format is downstream of the message.

If messenger fit is weak, name the better messenger or leave the speaker `UNKNOWN` rather than forcing the requested person.

## What not to claim

List statements the company should avoid because they are:

- unsupported
- too broad
- causally unproven
- generic enough that any competitor could say them
- dependent on missing evidence
- assigned to the wrong messenger
- confidential, unapproved, or otherwise not established as publishable

This section is mandatory.

## Unknowns

List the 1 to 5 missing facts that could materially change the decision.

For each:

- what is unknown
- why it matters
- smallest way to resolve it

Prioritize novelty, permission, proof, buyer evidence, and messenger evidence when one of those could reverse the decision.

Do not fill the section with nice-to-have research.

## Secondary directions

Optional. Maximum two.

For each secondary direction include:

- message
- strongest supporting evidence
- why it ranks below the primary decision

Delete this section when the alternatives are weak.

## Creation handoff

End with:

```yaml
decision_state:
message:
audience:
speaker:
format:
proof_required:
permission_required:
forbidden_claims:
search_language:
novelty_check:
unknowns:
```

Default final line for `SHIP`:

`Decision made. Brief ready for creation.`

For `DEFER`:

`Decision deferred. Gather the named evidence before creation.`

For `REDIRECT`:

`Direction retained. Change the messenger or framing before creation.`

For `KILL`:

`Decision closed. Do not create from this direction.`
