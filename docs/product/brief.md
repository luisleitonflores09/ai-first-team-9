# Product brief

## Problem and user

Employees need to find reliable answers across internal documents, knowledge bases, and other information sources. Finding the right information can take time, particularly when it is spread across locations or described using different words. The first version uses a fictional employee seeking answers about onboarding, equipment, leave, and support at Northstar Labs.

See [Discovery and research](discovery.md) for the evidence behind the design and the assumptions that remain to be checked.

## Objective

Help people find and verify information in a knowledge base. The first version will provide an English-language chat that answers from document evidence, links to original sources, supports follow-up questions, and clearly indicates when the available information is insufficient.

## Scope

Single local user; same access to all demo documents; one conversation held in browser memory; initial questions and follow-ups; answers with source links; insufficient-evidence and error handling. The source of truth is the Markdown collection in `knowledge/`, which the application reads as a bounded collection. Users cannot upload or edit documents through the application.

## Exclusions

Production or cloud deployment, accounts, document-specific permissions, HR and knowledge-system integration, user uploads, externally embedded chat, conversation persistence, and real personal or confidential data. The demo does not represent actual company policies and is not an HR advisor.

## Success

The product succeeds when people regularly use it to find correct, supported answers and can verify them faster than with their existing approach. [Product KPIs](kpis.md) define measures for successful answers, time to a verified answer, adoption, and unsupported claims.

The first version demonstrates the core flow. Its acceptance scenarios in `docs/qa/acceptance.md` check that an answerable question, follow-up, source link, and insufficient-information response work with the example documents. Those checks do not establish adoption or workplace time savings.

## Assumptions and constraints

The provider, credential access and budget must be settled before connecting the AI service. Source links target the repository's `main` branch once documents are uploaded and require GitHub access.
