# ADR 001: Demo stack and document storage

**Status:** Proposed for implementation; provider access and budget remain unverified.

**Context:** The first version needs a simple web interface, an API, a reproducible local document collection, AI integration, and links to original documents.

**Decision:** Use the recommended stack; keep fictional Markdown originals under `knowledge/`; provide the bounded small corpus to the model so it can identify relevant passages even when wording differs. Use an AI SDK provider adapter and preserve source IDs and GitHub links. Keep conversation history in browser memory only.

**Alternatives:** A full external knowledge service adds setup and approval dependencies; a vector database or embeddings adds complexity for this small corpus. A remote provider is convenient but requires approval and may cost money; a local model requires available hardware and integration. Provider selection remains open.

**Consequences:** Easy review, version history and repeatable example content; repository access is needed to open source links and all demo users have the same corpus. Sending the full small corpus increases model input and may increase cost; enforce a corpus size limit and evaluate retrieval quality. A future production system needs a managed content source, access control, indexing lifecycle and operational decisions; no claim of production readiness.
