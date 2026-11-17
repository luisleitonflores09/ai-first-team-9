# Northstar Knowledge Assistant

Week 1 planning package for an English-language local demo that answers questions about a fictional company's internal documentation. Answers cite original documents and support follow-up questions.

**Status:** Week 1 planning and example content; the application, dependency installation, automated checks, and live AI provider are not yet implemented. The repository is private, so source links require access to it.

## Start here

1. Read [the product brief](docs/product/brief.md), [project plan](docs/project-plan.md), and [architecture](docs/architecture.md).
2. Read the [screen flow](docs/product/screen-flow.md), [API contract](docs/api/contract.md), [data model](docs/data/model.md), and [acceptance and evaluation cases](docs/qa/acceptance.md).
3. Explore the fictional documents in [knowledge](knowledge/). These are the authoritative demo sources; the expected answers in the evaluation file are not search content.
4. Reusable agent workflows are in [.agents/skills](.agents/skills/). [AGENTS.md](AGENTS.md) contains project guidance.

## Development setup

The selected stack is Bun, TypeScript, React with Vike, Hono, Zod and the Vercel AI SDK; see [ADR 001](docs/decisions/001-stack-and-storage.md). The initial workspace has `apps/web`, `apps/api`, and `packages/contracts`. Check your runtime with `bun --version`. Bun is not available in the authoring environment and no dependencies are installed yet. Consequently, there is no working application or build command to run in this Week 1 package. Week 2 will add pinned dependencies, a lockfile, scripts, and real start/check commands.

Use only synthetic content with the demo until an AI provider is approved. Put any eventual API keys in a local untracked environment file; never commit or paste keys into prompts. A local demo can still send content to a remote model.

Program sources: [overview and five-week schedule](https://westmonroe-cloud.com/secure/apps/128/ai-first-training-program/) and [Week 1](https://westmonroe-cloud.com/secure/apps/128/ai-first-training-program/semanas/01/).
