# Chat API contract

Proposed contract; no endpoint is implemented in Week 1. Shared TypeScript shapes are in `packages/contracts/src/index.ts`. Validate server-side with Zod in Week 2. JSON uses UTF-8.

`POST /api/chat` accepts a current nonempty question (maximum 2,000 characters) and an ordered list of at most 10 complete prior user/assistant turns, oldest first. Prior assistant messages are context, not evidence; source documents are retrieved anew. Cap each history question and answer at 2,000 characters and total request body at 32 KiB; reject invalid input rather than silently truncating it.

Request example:

```json
{"question":"Who approves it?","history":[{"question":"How do I request a laptop?","answer":"Use the Service Desk portal. A manager approves the request."}]}
```

`200 OK` answer example:

```json
{"status":"answered","answer":"A manager approves the equipment request.","sources":[{"documentId":"equipment","title":"Northstar Labs equipment","url":"https://github.com/luisleitonflores09/ai-first-team-9/blob/main/knowledge/equipment.md","excerpt":"A manager approves each request before the Service Desk prepares the equipment."}]}
```

`200 OK` with `status: "insufficient_information"` or `"clarification_needed"` returns a helpful `answer` and a `sources` array, which may be empty. The API only returns allowlisted original URLs for retrieved documents, never URLs invented by the model. History is not saved on the server.

`400` for invalid request, `413` for oversized request, `503` for retrieval or provider unavailable, and `500` for unexpected failures. All errors use the same envelope:

```json
{"error":{"code":"INVALID_REQUEST","message":"Enter a question of 1 to 2000 characters."}}
```

The browser displays a recoverable message and does not add a successful assistant turn on errors. Service errors do not expose credentials or raw provider responses.
