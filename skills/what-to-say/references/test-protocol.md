# What to Say Test Protocol

Use this only when the user explicitly wants to test, benchmark, dogfood, or debug the skill.

The purpose is to measure whether the skill changes a real content decision. Do not contaminate the control by showing the evidence or the skill's framing before the user's baseline is recorded.

## Phase 1: capture the baseline

Before reading the evidence bundle, ask the user to fill in:

```yaml
CASE:
company:

BEFORE:
what_i_would_create:
core_message:
audience:
format:
why:
confidence_0_to_10:
```

Do not suggest options. Do not improve their answer. Record it as given.

## Phase 2: receive the raw evidence

After the baseline is locked, ask for the evidence bundle.

Good test inputs can include:

- customer calls
- sales objections
- support threads
- internal notes
- product changes
- competitor material
- search/query data
- market or community discussion
- performance data

Ask for raw material rather than a curated argument when possible.

Do not ask the user to label which evidence they think matters most.

## Phase 3: run What to Say normally

Run the normal `decide` procedure with no special knowledge of the baseline decision other than what was already captured.

Produce the full What to Say Brief.

Do not alter the recommendation to maximize difference from the baseline. A `SAME` result is valid.

## Phase 4: capture the after decision

Before discussing weaknesses in the brief, ask the user to fill in:

```yaml
AFTER:
what_i_would_create:
core_message:
audience:
format:
why:
confidence_0_to_10:

classification: SAME | REFINED | REPLACED | ABANDONED | NO-DECISION

decision_changer:
```

Definitions:

- `SAME`: the brief did not materially change the decision.
- `REFINED`: the core direction stayed, but the brief changed the message, audience, proof, timing, or format enough to matter.
- `REPLACED`: the user would now create a meaningfully different thing.
- `ABANDONED`: the user would now choose not to create the original thing.
- `NO-DECISION`: the brief correctly exposed that the evidence is too weak to decide.

`decision_changer` names the exact evidence, connection, or reasoning that changed the decision. Leave it empty for `SAME` when nothing did.

## Phase 5: debug the run

Now invite unstructured criticism.

Translate the criticism into one or more failure classes:

- `MISSED_SIGNAL`: important evidence was ignored or underrated.
- `OVERWEIGHTED_SIGNAL`: one source dominated without justification.
- `GENERIC_DECISION`: recommendation could apply to many companies.
- `TOPIC_LIST`: output drifted from one decision into brainstorming.
- `WEAK_BUYER_PULL`: recommendation lacks evidence the audience cares.
- `WEAK_RIGHT_TO_SAY`: company lacks authority or proof.
- `BAD_TIMING`: why-now reasoning is weak or invented.
- `SEARCH_OVERREACH`: search evidence was treated as command or fabricated.
- `CAUSAL_OVERREACH`: correlation or anecdote became causal fact.
- `HIDDEN_UNKNOWN`: missing evidence was concealed.
- `FORMAT_FIRST`: format drove the message.
- `NO_DECISION_LIFT`: output is accurate but does not improve the choice.
- `OTHER`: name the failure precisely.

For every real failure, propose the smallest change to the skill, reference, example set, or future eval that would make the failure less likely without overfitting the single case.

## Five-run gate

After five cases, summarize:

```text
SAME
REFINED
REPLACED
ABANDONED
NO-DECISION
```

Also count:

- runs where the brief surfaced an important signal the user had underrated
- runs where the recommendation was judged generic
- runs with evidence-boundary failures
- repeated failure classes

An early promotion signal is at least 3 of 5 runs producing a useful `REFINED`, `REPLACED`, `ABANDONED`, or evidence-correct `NO-DECISION` result, with at least two cases where the skill surfaced a material signal or connection the user had not weighted correctly.

This threshold is a learning gate, not a claim of product-market fit.