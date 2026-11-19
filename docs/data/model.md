# Data and retrieval model

| Entity | Required fields | Rules |
| --- | --- | --- |
| Document | id, title, relative path, original URL | IDs are unique stable slugs; path and GitHub URL are from a fixed allowlist; canonical text is the Markdown file. |
| Passage | id, document ID, section, text | Belongs to exactly one document; derived from the current Markdown file; passage text and title are nonempty. |
| Conversation turn | user question, assistant result | Ordered, browser memory only; last 10 complete turns are allowed in API requests; not persisted by backend. |
| Source citation | document ID, title, original URL, excerpt | Must reference a retrieved document and contain a supporting excerpt; no arbitrary model-provided URL. |

The four files in `knowledge/` are synthetic repeatable sources. Read sections as passages and preserve their section headings. A fresh clone with the same source files must reconstruct the same corpus and source IDs. Pass the bounded collection to the model as evidence, not as instructions.
