# Product brief

## Problem and user

Employees at fictional Northstar Labs need quick answers about onboarding, equipment, leave, and internal support. Today they would browse separate articles or ask a colleague. These are illustrative assumptions, not research findings. The demo user is a team member acting as a new employee.

## Objective

Demonstrate a local English chat that searches a fixed set of fictional documents, answers from retrieved evidence, links to original documents, and supports follow-up questions. Teach the team how to plan, build, integrate, and evaluate an AI-assisted application.

## Scope

Single local user; same access to all demo documents; one conversation held in browser memory; initial questions and follow-ups; answers with source links; insufficient-evidence and error handling. The source of truth is the Markdown collection in `knowledge/`. File changes require rebuilding the local search index; users cannot upload or edit documents through the application.

## Exclusions

Production or cloud deployment, accounts, document-specific permissions, HR and knowledge-system integration, user uploads, externally embedded chat, conversation persistence, and real personal or confidential data. The demo does not represent actual company policies and is not an HR advisor.

## Success

The priority acceptance scenarios in `docs/qa/acceptance.md` pass with recorded evidence. A person can launch the finished demo from a clean clone, ask an answerable question and a follow-up, open the cited originals, and see a clear insufficient-information response for an unsupported question. No numeric accuracy is claimed until evaluation is run.

## Assumptions and constraints

The program describes 3–4 participants and 2–8 hours weekly; actual team capacity and dates are unknown. Approved model/provider, credential access, and budget remain unknown. Source links target the repository's `main` branch once documents are uploaded and require GitHub access. These assumptions are not user research or evidence of approval.
