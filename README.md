# Ruby Mbete — Portfolio

Personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.
Live at: [rubymbete.vercel.app](https://rubymbete-portfolio.vercel.app/)

## Stack

- **Next.js** — framework
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **Resend** — contact form emails

## Getting Started

Clone the repo:

```bash
git clone https://github.com/r-mbete/rubymbete-portfolio.git
cd rubymbete-portfolio
```

## Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the root:

```bash
touch .env.local
```

Add your environment variable:

```env
RESEND_API_KEY=your_key_here
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic redeployment.
