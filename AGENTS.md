# Repository Guidelines

## Project Structure & Module Organization
The repository is intentionally lean right now; treat it as a scaffold for the upcoming livalance platform. Add runtime code under `src/`, grouped by feature (e.g., `src/profile`, `src/payments`). Shared utilities belong in `src/lib`. Keep UI assets in `src/assets` and configuration defaults in `config/`. Place any developer-facing scripts in `scripts/`. Tests live alongside code only when they clarify intent; otherwise prefer `tests/<feature>`. Update the table of contents in `README.md` when you introduce new top-level folders.

## Build, Test, and Development Commands
When you introduce a `package.json`, surface standard scripts so every contributor can reproduce results quickly. At minimum support:
- `npm install` – install dependencies.
- `npm run dev` – start the local development target (document port/env requirements).
- `npm run build` – produce the optimized output.
- `npm test` – execute the automated test suite.
- `npm run lint` – enforce formatting and static analysis.
Document any service-specific CLIs (e.g., Docker compose) in the README as well.

## Coding Style & Naming Conventions
Prefer TypeScript with ES modules. Use 2-space indentation, trailing commas where valid, and keep lines under roughly 100 characters. Export a single public entry point per folder via an `index.ts`. Use camelCase for variables/functions, PascalCase for classes/components, and kebab-case for filenames. Configure Prettier and ESLint with shared settings and commit the config files. Avoid committing secrets; rely on `.env.example` to communicate required variables.

## Testing Guidelines
Adopt Vitest or Jest for unit coverage, using `*.spec.ts` naming. Keep integration scenarios under `tests/integration` and mock external dependencies. Target at least 80% statement coverage; report coverage with `npm test -- --coverage` before opening a pull request. Record test fixtures in `tests/fixtures` and keep them deterministic. Add regression tests whenever you fix a bug.

## Commit & Pull Request Guidelines
The history currently starts with simple messages; move toward Conventional Commits (`feat:`, `fix:`, `chore:`) to clarify intent and assist changelog automation. Each PR should include: a concise summary, linked issues, screenshots or logs when UI or API behavior changes, a checklist of tests run, and notes on migrations or manual steps. Request review once CI passes and clean up branches after merging.

