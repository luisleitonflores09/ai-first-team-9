# Discovery and research

## The problem

Employees often need answers that are spread across documents, knowledge bases, emails and other tools. Finding the right information can take time, especially when it is unclear where to look or which document is current.

Search can also be difficult when a person uses different words from the document. For example, someone might search for a “broken computer,” while an article refers to a “malfunctioning laptop.” They may try different searches, browse other documents or ask a colleague for help. Researchers call this a vocabulary mismatch. [Research on vocabulary mismatch](https://arxiv.org/abs/1711.06004)

## How people find information today

People use a combination of internal documents, search tools, emails and colleagues to answer workplace questions.

A study of seven university marketing professionals followed 101 work tasks and found that about 30% involved more than one type of information source. This small 2013 study illustrates how finding answers can involve moving between sources. [Workplace information behavior study](https://researchoutput.csu.edu.au/ws/portalfiles/portal/8860983/44728_full%20pub%20online%20article.pdf)

## Why the problem matters

- **Finding information can be difficult.** In a 2024 Panopto/NewtonX survey of large organizations, 71% of respondents said employees spent more time than necessary searching for information needed for their tasks. The report identifies scattered content, ineffective search and the amount of available information as challenges. Panopto sells training software and sponsored the research. [2024 Workforce Training Report](https://www.panopto.com/wp-content/uploads/2024/06/panopto-workforce-training-report-final.pdf)
- **Searching takes time.** An iManage survey of document-management decision makers in legal, accounting and financial services estimated that end users spend an average of 37 minutes a day finding information. iManage is a document-management vendor. [iManage Knowledge Work Benchmark Report 2026](https://imanage.com/media/01mjvh5r/imanage-knowledge-work-benchmark-report-2026.pdf)
- **AI can support information gathering.** In Gallup's 2026 U.S. employee survey, 52% of frequent workplace AI users reported spending less time searching for or gathering information since they began using AI. [Gallup workplace AI research](https://www.gallup.com/workplace/716585/ai-changing-employees-spend-time-work.aspx)

These findings describe particular groups and provide context; they are not a projected time saving for our product.

## Proposed product

An AI Knowledge Assistant will let a person ask a question in their own words, find relevant information in a knowledge base, and receive an answer with links to the original documents. It will support follow-up questions and say when the documents do not contain enough information.

The first version will be a local, English-language demo with a small collection of fictional documents about Northstar Labs. Everyone using the demo will have access to the same collection. User accounts, document permissions, uploads and connections to other systems are future work.

## Similar products

| Product | Relevant capability |
| --- | --- |
| [Atlassian Rovo](https://wac-cdn.atlassian.com/software/rovo/guides/end-user-guide/faq) | Searches connected sources, provides references and respects source permissions. |
| [Glean](https://docs.glean.com/user-guide/about/what-is-glean) | Searches workplace tools and provides answers with citations. |
| [Microsoft 365 Copilot](https://learn.microsoft.com/en-us/copilot/plan/copilot-overview) | Can use organizational content to answer questions, depending on license and configuration. |

These product descriptions come from the providers. They show that workplace knowledge search is an established use case. The first version focuses on a small document collection and source-linked answers.

## Why build it

The project addresses a common need: finding a reliable answer without having to search through several places or rely on remembering the exact words in a document. Source links give the person a way to check the answer.

The first version will bring relevant information together in one conversation, provide a link to each supporting source, and help people continue the conversation with follow-up questions. The research supports exploring the idea; the initial evaluation will assess how well the approach works.

## How the demo will be evaluated

The example questions in `docs/qa/acceptance.md` will check that the assistant finds relevant information, provides correct sources, understands follow-up questions and handles missing information. They also include a question that uses different wording from its source. These checks establish initial product behavior; product success will be measured using the broader outcomes in [Product KPIs](kpis.md).

A later comparison could measure the time to find and verify an answer by browsing documents and by using the assistant. It should also record incorrect answers and the time needed to check sources.

