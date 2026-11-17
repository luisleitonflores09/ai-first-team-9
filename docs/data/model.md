# Data and retrieval model

| Entity | Required fields | Rules |
| --- | --- | --- |
| Document | id, title, relative path, original URL | IDs are unique stable slugs; path and GitHub URL are from a fixed allowlist; canonical text is the Markdown file. |
| Passage | id, document ID, section, text | Belongs to exactly one document; index is regenerated when content changes; passage text and title are nonempty. |
| Conversation turn | user question, assistant result | Ordered, browser memory only; last 10 complete turns are allowed in API requests; not persisted by backend. |
| Source citation | document ID, title, original URL, excerpt | Must reference a retrieved document and contain a supporting excerpt; no arbitrary model-provided URL. |

The four files in `knowledge/` are synthetic repeatable sources. Index sections as passages and preserve their section heading. Regenerate on setup and source changes; never check the derived SQLite database into Git. A fresh clone with the same source files must reconstruct the corpus and source IDs. The model gets retrieved passages, not unrestricted instructions from documents.
