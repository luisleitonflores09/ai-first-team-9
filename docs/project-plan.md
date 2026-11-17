# Five-week project plan

The [program](https://westmonroe-cloud.com/secure/apps/128/ai-first-training-program/) describes five weeks, 2–8 hours per week, and teams of 3–4. The team's actual headcount, available time, dates, provider access and budget are not confirmed. This is a delivery plan, not evidence that later work has happened. The program's example knowledge-base project excludes generated answers and embeddings; this project intentionally follows the user's requested generated-answer scope, adding delivery and evaluation risk.

| Week | Work and dependencies | Deliverable and exit condition |
| --- | --- | --- |
| 1 | Product brief, synthetic sources and evaluations; design screen, API, data and architecture; prepare monorepo context and six skills. Provider choice remains pending. | Reviewed scope, plan and design; reusable examples; clear setup and open constraints. |
| 2 | After contract review, add dependency-pinned workspace, source ingestion, retrieval, API and UI in small increments. Provider access is needed for a live answer. | Small reviewable changes tied to criteria, with meaningful checks and human review; integration gaps recorded. |
| 3 | Connect real UI, API, retriever and provider. Rebuild index from the canonical synthetic documents in a fresh clone; ensure links reach originals. | A repeatable integrated build and one real end-to-end conversation, with checks recorded. Synthetic documents are the actual demo corpus, not mocked API responses. |
| 4 | Run acceptance and evaluation cases, keyboard and small-screen checks; log discrepancies, fix priority defects, rerun relevant checks. | Evidence matrix with pass/fail/pending, defects and residual limitations; no invented results. |
| 5 | Verify startup from a clean clone, rehearse the demonstration and explain evidence, limitations and next steps. | Demo script, reproducible repo, final evidence and handoff. |

## Initial implementation increments

1. Workspace/tooling and commands; depends on Bun availability. 2. Read and index fixed documents, with source mapping. 3. Search and insufficient-evidence behavior. 4. Validated chat API and bounded history. 5. Provider adapter and grounded answers. 6. UI states and source links. 7. End-to-end checks and evaluation. These are candidate increments; adjust based on findings, not fixed staffing assignments.

## Coordination and risks

Product/QA, frontend, backend, and data are review focuses, not fixed lanes. Each feature plan must trace to a criterion; changes to contracts need cross-area review. Protect `main`, use pull requests, and set up CI for lint, tests, and build when tooling exists, subject to repository permissions. Provider approval, credentials and spend are a genuine dependency; do not purchase or enable services on an assumption. Generative scope may exceed the program's example: prioritize a reliable grounded single flow over extra capabilities. Actual delivery requires human review and real evidence.
