# Repository Guidelines

Short guide for contributing to The Kidd Electric site.

## Project Structure & Module Organization
- Next.js 15 App Router with TypeScript; entry layout in `src/app/layout.tsx`, homepage in `src/app/page.tsx`.
- Route segments live in `src/app/<route>/page.tsx` (about, contact, gallery, lyrics, music, tour). Add new pages under `src/app/<slug>`.
- Shared UI sits in `src/(components)` (Header, Footer, Section, GalleryGrid, etc.); prefer reusing/extending these before adding new markup.
- Typed content sources stay in `src/data` (shows, lyrics); shared types in `src/types`. Static media belongs in `public/`.
- Path alias `@/...` maps to `src/...` (see `tsconfig.json`) for cleaner imports.

## Build, Test, and Development Commands
- `npm install` to pull dependencies.
- `npm run dev` starts the Turbopack dev server at http://localhost:3000.
- `npm run build` produces the optimized production bundle (Turbopack); `npm run start` serves that build locally.
- `npm run lint` runs ESLint (Next + TypeScript flat config).

## Coding Style & Naming Conventions
- TypeScript with strict defaults; prefer function components and typed props.
- 4-space indentation, double quotes, and semicolons match existing files (e.g., `src/app/page.tsx`).
- Favor Tailwind utility classes; add shared patterns to components before expanding `globals.css`.
- Name routes in lower-kebab (`src/app/gallery/page.tsx`) and components in PascalCase (`src/(components)/PressStrip.tsx`).
- Use `next/image` for media and provide meaningful `alt` text; keep static assets in `public/`.

## Testing Guidelines
- No automated test suite yet; add targeted tests when introducing logic-heavy code (React Testing Library + Vitest or Playwright for routes).
- Place tests near the feature (`src/<feature>/__tests__/<name>.test.tsx`) and run `npm run lint` plus a local smoke check in `npm run dev` before pushing.
- For data updates, confirm the homepage marquee/tour lists render correct dates and lyrics routes resolve slugs.

## Commit & Pull Request Guidelines
- Follow the existing conventional commits style (`docs:`, `chore(deps):`, etc.); keep scopes short and descriptive.
- Branch naming: `feat/<slug>`, `fix/<slug>`, or `chore/<slug>`.
- Pull requests should include a concise summary, linked issues, screenshots/gifs for UI changes, and manual test notes. Keep diffs scoped and avoid unrelated formatting churn.
