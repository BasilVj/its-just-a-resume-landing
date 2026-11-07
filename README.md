# it's just a resume. (honestly)

Marketing site for a resume builder that hides LaTeX behind a simple editor. The page sells crisp, ATS-friendly resumes: a guided form when you want ease, a `.tex` editor when you want the source, and a free vault for the first 10 resumes.

This repository is the landing page only. Sign-in, checkout, and template notifications are presented in the UI and are not wired to a backend.

## Page

| Section | What it shows |
| --- | --- |
| Pitch | Headline, sample resume, and the free-tier promise |
| Dual engine | Raw `.tex` beside a live rendered preview |
| ATS | Why the export stays parser-friendly |
| Templates | Upcoming layouts, with a local email capture form |
| Pricing | Free forever, and Pro at $5 / year |

Copy for those sections lives in [`data/landing.ts`](data/landing.ts). Sample resume and TeX source live in [`data/resumes.ts`](data/resumes.ts). Shared types are in [`types/`](types/).

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project layout

```text
app/                  home page and root layout
components/landing/   page sections
components/ui/        shared UI
data/                 page copy and sample resume content
types/                types for that content
```

The home page in [`app/page.tsx`](app/page.tsx) renders the header, the five sections, and the footer in order.
