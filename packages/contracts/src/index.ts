/** Proposed Week 1 contract. Runtime validation will be added with the API. */
export interface ConversationTurn {
  question: string;
  answer: string;
}

export interface ChatRequest {
  question: string;
  history: ConversationTurn[];
}

export interface SourceCitation {
  documentId: string;
  title: string;
  url: string;
  excerpt: string;
}

export interface ChatResponse {
  status: "answered" | "insufficient_information" | "clarification_needed";
  answer: string;
  sources: SourceCitation[];
}

export interface ApiError {
  error: { code: string; message: string };
}
