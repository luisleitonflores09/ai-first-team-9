# Product KPIs

These metrics measure whether the product helps people find trustworthy information and whether they use it. Targets are proposals for an initial period of real use; they are not current results or promises.

| KPI | Definition | Proposed target |
| --- | --- | --- |
| **Successful answer rate** | Percentage of sampled information needs where a person receives a correct, sufficiently complete answer supported by the source. Count a question and its follow-ups as one need. A correct “not enough information” response is safe but does not count as an answered need. | At least **90%**. |
| **Time to a verified answer** | Median time from starting a task to finding and checking a correct answer. Compare ordinary document search with the assistant using comparable tasks; include source-checking time and record failed tasks separately. | At least **20% faster**, without reducing answer correctness. |
| **Weekly adoption** | Unique people who ask at least one question during a week divided by people eligible to use the product that week. | At least **30%** of eligible people, tracked over four weeks. |
| **Unsupported answer rate** | Percentage of sampled substantive answers containing at least one factual claim that the cited sources do not support, including an incorrect or inaccessible source link. | **0%**; investigate each failure. |

The targets are starting points for review and should be refined using actual usage and a baseline. For a fair time comparison, use comparable questions, alternate the order of search methods, and avoid asking the same person the exact same question twice. Report sample size and failed tasks alongside the median.

## Measuring the first version

The example questions in `docs/qa/acceptance.md` check the proposed behavior before wider use: correct answers, usable source links, follow-ups, and responses when information is absent. These checks support product quality; they are not the product adoption or time-saving results.

The local first version has no user accounts, production analytics, or real-company documents, so it cannot yet measure eligible-user adoption or actual workplace impact. Once deployed to a real user group, collect the minimum appropriate usage and review data, with access controls and retention appropriate for that environment.

