# Five-week project plan

This five-week plan takes the knowledge assistant from product definition through a working, evaluated first version. The AI provider, access and budget are dependencies for generated answers.

| Week | Work and dependencies | Deliverable and exit condition |
| --- | --- | --- |
| 1 | Discovery and research; product brief, synthetic sources and evaluations; design screen, API, data and architecture; prepare monorepo context and six skills. Provider choice remains pending. | Discovery record, scope, plan and design; reusable examples; clear setup and open constraints. |
| 2 | After contract review, add dependency-pinned workspace, source ingestion, retrieval, API and UI in small increments. Provider access is needed for a live answer. | Small reviewable changes tied to criteria, with meaningful checks and human review; integration gaps recorded. |
| 3 | Connect real UI, API, document loading and provider. Load the canonical synthetic documents from a fresh clone; ensure links reach originals. | A repeatable integrated build and one real end-to-end conversation, with checks recorded. Synthetic documents are the actual demo corpus, not mocked API responses. |
| 4 | Run acceptance and evaluation cases, keyboard and small-screen checks; log discrepancies, fix priority defects, rerun relevant checks. | Evidence matrix with pass/fail/pending, defects and residual limitations. These checks do not measure real-world adoption. |
| 5 | Verify startup from a clean clone, rehearse the demonstration and explain evidence, limitations and next steps. | Demo script, reproducible repo, final evidence and handoff. |

After the initial delivery, use an appropriate deployment and real-user feedback to measure product adoption, successful answers, answer reliability, and time to verified information against the targets in `docs/product/kpis.md`.

## Initial implementation increments

1. Workspace/tooling and commands; depends on Bun availability. 2. Read bounded fixed documents, with source mapping. 3. Match questions to information even when wording differs, and handle insufficient evidence. 4. Validated chat API and bounded history. 5. Provider adapter and grounded answers. 6. UI states and source links. 7. End-to-end checks and evaluation. These are candidate increments; adjust based on findings, not fixed staffing assignments.

## Coordination and risks

Product/QA, frontend, backend, and data are review focuses, not fixed lanes. Each feature plan must trace to a criterion; changes to contracts need cross-area review. Protect `main`, use pull requests, and set up CI for lint, tests, and build when tooling exists, subject to repository permissions. Provider access, credentials, and spend are dependencies. Prioritize a reliable answer with sources over additional capabilities. Record actual validation results and unresolved defects.
