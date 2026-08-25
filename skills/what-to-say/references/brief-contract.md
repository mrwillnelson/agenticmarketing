# What to Say Brief Contract

Use this structure for the final decision artifact.

The order is intentional. Put the decision first, then the evidence, then the creation guidance.

## Decision

Write one sentence:

`The company should say: [core message]. [E###]`

If the evidence does not support a strong decision, write:

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

Show the winning direction against the five decision dimensions.

| Dimension | Assessment | Evidence |
|---|---|---|
| Buyer pull | strong / mixed / weak / unknown | E### |
| Right to say | strong / mixed / weak / unknown | E### |
| Why now | strong / mixed / weak / unknown | E### |
| Proof | strong / mixed / weak / unknown | E### |
| Distinctiveness | strong / mixed / weak / unknown | E### |

If a losing candidate was close, name it in one line and say which dimension caused it to lose.

## Evidence ledger

Use one row per meaningful signal.

| ID | Class | Status | Source | Observation | Implication |
|---|---|---|---|---|---|
| E001 | customer | FACT | customer call | ... | ... |

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

## What not to claim

List statements the company should avoid because they are:

- unsupported
- too broad
- causally unproven
- generic enough that any competitor could say them
- dependent on missing evidence

This section is mandatory.

## Unknowns

List the 1 to 5 missing facts that could materially change the decision.

For each:

- what is unknown
- why it matters
- smallest way to resolve it

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
message:
audience:
speaker:
format:
proof_required:
forbidden_claims:
search_language:
unknowns:
```

Default final line:

`Decision made. Brief ready for creation.`

If the decision was refused, replace it with:

`Decision deferred. Gather the named evidence before creation.`