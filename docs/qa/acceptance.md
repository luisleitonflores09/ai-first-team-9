# Acceptance criteria and evaluation

Status: planned; the application has not been implemented or evaluated. Evidence and results must be recorded during Weeks 2–5. Check meaning and source support, not exact generated wording.

## Acceptance criteria

1. **Answer and source:** Given the sample corpus, when the user asks how to request a laptop, then the answer mentions the Service Desk portal and manager approval, and links to `equipment.md` with a supporting excerpt.
2. **Follow-up:** Given that answer in the current conversation, when the user asks “Who approves it?”, then the answer identifies a manager and cites `equipment.md`.
3. **Unsupported:** Given the corpus, when asked how many vacation days are granted, then the system says the documents do not provide that information; it must not invent a number.
4. **Ambiguous:** Given a new conversation, when asked “Who approves it?”, then the system asks what the user means or states there is insufficient context, without asserting an unsupported interpretation.
5. **Invalid:** Given an empty or whitespace question, when submitted, then the UI explains the issue and sends no API request; the API rejects invalid direct requests.
6. **Error and recovery:** Given a retrieval or model service failure, when a valid question is submitted, then an understandable error and retry action appear; a later successful retry does not duplicate a turn.
7. **Source links:** Given an answered question, when a user selects a citation, then the link targets the correct original document; GitHub access is required.
8. **Boundaries:** Given an oversized question, history or body, when submitted directly to the API, then it is rejected according to the contract. Refreshing or starting a new chat clears in-memory history.
9. **Usability:** Given keyboard-only navigation or a narrow screen, when the user asks and reads an answer, then controls, feedback and source links remain usable and understandable.
10. **Different wording:** Given the equipment document describes a “malfunctioning laptop,” when the user asks “How do I replace a broken computer?”, then the answer explains that they should submit an equipment support ticket and links to `equipment.md`; it must not promise a replacement, because the document does not say one is provided.

## Evaluation set

| ID | Question / prior context | Expected meaning | Source |
| --- | --- | --- | --- |
| E01 | When do new employees meet their manager? | 9:00 a.m. on first working day | onboarding.md |
| E02 | What must be completed by Friday in the first week? | Security introduction | onboarding.md |
| E03 | How do I request a laptop? | Service Desk portal; manager approves | equipment.md |
| E04 | After E03: Who approves it? | A manager approves the equipment request | equipment.md |
| E05 | What should I do about a broken laptop? | Submit an equipment support ticket describing the problem | equipment.md |
| E06 | How do I request planned time off? | Use Leave Portal; manager reviews | time-off.md |
| E07 | How do I change a pending leave request? | Cancel the pending request and submit another | time-off.md |
| E08 | What are Service Desk hours? | Monday–Friday, 8 a.m.–5 p.m. local time | support.md |
| E09 | How many vacation days do I get? | Insufficient information; no number | none |
| E10 | New chat: Who approves it? | Ask for clarification or say insufficient context | none |
| E11 | How quickly will the Service Desk answer? | No response time is promised; do not invent one | support.md or none |
| E12 | What are the Wi-Fi password and benefits? | Insufficient information; do not invent credentials or benefits | none |
| E13 | How do I replace a broken computer? | Submit an equipment support ticket describing the issue; no replacement is promised | equipment.md |

For each run record date, corpus revision, model/provider, question, actual answer, cited links, evidence, and pass/fail/pending. A reviewer checks every factual claim against its cited passages and evaluates the follow-up in context. Track failures separately: wrong retrieval, unsupported claim, incorrect link, misleading insufficient-information response, or application error. There is no measured accuracy yet; the priority criteria must pass for the demo, with remaining failures documented.

These examples validate first-version behavior. The broader measures of product success are in [Product KPIs](../product/kpis.md).
