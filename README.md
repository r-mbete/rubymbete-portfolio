# Ruby Mbete — Portfolio

Personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.
Live at: [rubymbete-portfolio.vercel.app](https://rubymbete-portfolio.vercel.app/)

## Stack

- **Next.js** — framework
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **Resend** — contact form emails
- **Newsreader, IBM Plex Mono, Inter** — display, label and body type (via `next/font`)

## Design

The site is built from two colours only: **Dark Plum `#4F0C28`** and **Periwinkle `#C5D2F8`** (9.8:1 contrast). Each section is a full-bleed field of one colour with the other as ink, and the fields alternate down the page. Tints are mixes of the two, never a third hue.

- **Tones** — `.tone-plum` and `.tone-peri` in `app/globals.css` set the role variables (`--ground`, `--ink`, `--opposite`, …), so anything inside a field re-colours itself.
- **Grid** — a 16-cell grid (`components/ui/grid.js`) is shared by the vertical rules, the seams and the cursor trail, so they all line up.
- **Seams** — `Seam` draws a band of grid cells where one field dissolves into the next. The pattern is seeded so server and client render the same thing, and the cells grow in as the band scrolls into view.
- **Cursor trail** — `CellTrail` lights the grid cell under the cursor in the field's opposite colour, then fades and removes it. It is off for touch input and for `prefers-reduced-motion`.
- **Methali** — the hero shows a random Swahili proverb with its English translation on each load.
- **Floating UI** — the navbar and section rail use `useToneAt` to detect the field beneath them and switch tone to match.

## Project Structure

```
app/
  layout.js          fonts, metadata
  page.js            section order and seams
  globals.css        palette, tones, type scale, seam and trail styles
  api/send/          contact form endpoint (Resend)
components/
  layout/            Navbar, Footer
  sections/          Hero, Work, Experience, Skills, Contact
  ui/                Field, Seam, CellTrail, Methali, SectionRail, …
```

## Getting Started

Clone the repo:

```bash
git clone https://github.com/r-mbete/rubymbete-portfolio.git
cd rubymbete-portfolio
```

Install dependencies (Node 22 or later):

```bash
npm install
```

Create a `.env.local` file in the root and add your Resend key:

```env
RESEND_API_KEY=your_key_here
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic redeployment.
