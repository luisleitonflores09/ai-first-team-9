# Screen flow

One chat screen: title and description of the fictional corpus, message list, multiline question field, Send, and New conversation. Each completed answer has source titles linking to their GitHub originals and supporting excerpts. A link may require GitHub sign-in and repository permission.

| State | Visible behavior |
| --- | --- |
| Initial | Explain the demo and invite a first question. |
| Invalid | Empty or whitespace-only question shows an inline message; no request is sent. |
| Loading | Show progress, prevent duplicate submission and keep prior turns visible. |
| Answer | Show question, grounded answer, source titles, excerpts and clickable original URLs. |
| Insufficient or ambiguous | Explain that the documents lack enough information or ask a clarifying question; avoid invented citations. |
| Error | Explain that the answer could not be completed; allow retry without duplicating a turn. |
| Follow-up | Submit the next question with the bounded prior turns; retain visible context. New conversation clears browser memory. |

Send and reset controls must be keyboard accessible, status changes announced to assistive technology, and the screen usable on a narrow viewport. The API response fields correspond to `docs/api/contract.md`.
