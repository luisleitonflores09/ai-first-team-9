# ADR 001: Demo stack and document storage

**Status:** Proposed for implementation; provider access and budget remain unverified.

**Context:** The program recommends React/TypeScript, Vike, Bun/Hono, Drizzle with SQL, AI SDK and Zod. The project needs a small reproducible local corpus and original document links.

**Decision:** Use the recommended stack; keep fictional Markdown originals under `knowledge/`; build a disposable local SQLite passage index; use lexical retrieval first and an AI SDK provider adapter. Preserve source IDs and GitHub links across retrieval. Keep conversation history in browser memory only.

**Alternatives:** A full external knowledge service adds setup and approval dependencies; a vector database or embeddings adds complexity before lexical search is evaluated. A remote provider is convenient but requires approval and may cost money; a local model requires available hardware and integration. Neither provider type is assumed approved.

**Consequences:** Easy review, version history and repeatable example content; repository access is needed to open source links and all demo users have the same corpus. Local index must be rebuilt when documents change. A future production system needs a managed content source, access control, indexing lifecycle and operational decisions; no claim of production readiness.
