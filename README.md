# The Kidd Electric

A moody, high-energy band site built with Next.js 15. It showcases The Kidd Electric's latest music, tour dates, press, and visuals in a single-page experience with dedicated routes for deeper dives.

## Screenshoot

<img width="1568" height="1005" alt="image" src="https://github.com/user-attachments/assets/0a411fa4-a7e5-4999-abe7-0401b840629d" />



## 🛠️ Tech Stack
- [Next.js 15](https://nextjs.org/) (App Router, TypeScript, Turbopack dev/build) 【F:package.json†L7-L22】
- React 19 with server components
- Tailwind CSS 4 with Typography plugin for prose styling 【F:tailwind.config.ts†L1-L15】
- React Icons and native Next.js image optimizations

## 📁 Project Structure
```text
src/
├─ app/               # Route segments, layouts, and page components
│  ├─ (root files)    # Global layout, homepage, styles
│  ├─ about/          # Band story & bio content
│  ├─ contact/        # Booking page + form
│  ├─ gallery/        # Visual grid of live shots
│  ├─ lyrics/         # Lyrics index & dynamic song pages
│  ├─ music/          # Streaming links & discography highlights
│  └─ tour/           # Upcoming shows & ticket links
├─ (components)/      # Shared UI building blocks (Header, Footer, Section, etc.)
├─ data/              # Typed content sources for shows and lyrics
└─ types/             # Shared TypeScript types (if needed by data/components)
```

## 🚀 Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server (Turbopack)**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the site. Any edits in `src/` trigger fast-refresh updates.

### Available Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Start the Turbopack-powered development server. 【F:package.json†L8-L9】 |
| `npm run build` | Create an optimized production build (also via Turbopack). 【F:package.json†L10-L11】 |
| `npm run start` | Serve the production build. 【F:package.json†L12-L13】 |
| `npm run lint` | Run ESLint against the codebase. 【F:package.json†L13-L14】 |

## 🧱 Content & Data Management
- **Tour dates:** Edit `src/data/shows.ts`. Dates must remain in `YYYY-MM-DD` format so the marquee filters future shows correctly in Pacific Time. 【F:src/data/shows.ts†L1-L33】
- **Lyrics:** Add new entries to `src/data/lyrics.ts`. Each item includes a slug, title, and lyric body consumed by the lyrics routes. 【F:src/data/lyrics.ts†L1-L200】
- **Imagery & assets:** Static media lives in `public/`. The homepage cards reference `/public/about/*.avif` hero shots. 【F:src/app/page.tsx†L15-L62】

## 🧭 Design & UX Notes
- Tailwind utilities keep styling consistent, with typography enhancements for long-form content.
- The header, mobile menu, and footer live in `src/(components)`, ensuring a single source of truth for navigation and branding. 【F:src/app/layout.tsx†L1-L24】
- Animated touches (like the marquee and EasterEgg overlay) are pure CSS/React—no external animation deps required. 【F:src/app/page.tsx†L63-L118】

## 📦 Deployment
This project deploys cleanly to any platform supporting Next.js 15 (Vercel, Netlify, etc.). Use `npm run build` to generate the production output, then `npm run start` for Node-based hosting.

## 🤝 Contributing
1. Fork & clone the repo.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Run `npm run lint` before committing.
4. Open a pull request describing your changes.

## 📫 Contact
For booking or media inquiries, reach out via the contact page or email [booking@thekiddelectric.com](mailto:booking@thekiddelectric.com). 【F:src/app/contact/page.tsx†L1-L74】
