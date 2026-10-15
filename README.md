# Apoorv Jain — Developer Portfolio

A premium personal portfolio website built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Immersive Hero** with animated canvas particles and typed code snippet
- **Dark / Light Theme** with system preference detection and localStorage persistence
- **Interactive Projects** with category filtering and case-study modals
- **Skills Showcase** with animated progress indicators
- **Writing / Blog** section with search, filtering, and article modals (markdown support)
- **Contact Form** with client-side validation, Web3Forms integration, and mailto fallback
- **Custom Cursor** on pointer devices, with touch/mobile fallback
- **Scroll Progress** bar
- **Responsive** across mobile, tablet, laptop, and large desktop
- **Accessible** — ARIA labels, keyboard navigation, focus states, `prefers-reduced-motion`
- **SEO-ready** — title, meta description, Open Graph, Twitter Card
- **Vercel-ready** — routing configured in `vercel.json`

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd portfolio-website

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## Configuration

### 1. Personal Information

Edit **`src/config/site.ts`** — all personal details, social links, email, availability status, and feature toggles are in one place.

### 2. Projects

Edit **`src/data/projects.ts`** — add, remove, or update projects without touching UI code.

### 3. Skills

Edit **`src/data/skills.ts`** — update skill categories, names, and levels.

### 4. Articles

Edit **`src/data/articles.ts`** — add articles with markdown content. Set `draft: false` to mark them as published.

### 5. Resume

Place your resume PDF at:
```
public/Apoorv-Jain-Resume.pdf
```

All resume-download buttons link to this file automatically.

---

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_KEY` | Web3Forms access key for contact form email delivery. Get one at [web3forms.com](https://web3forms.com). If empty, the form falls back to mailto. |

> **Note:** Never commit your `.env` file. It is already in `.gitignore`.

---

## Deployment (Vercel)

1. Push the project to a GitHub repository.
2. Connect the repository to [Vercel](https://vercel.com).
3. Set the **Build Command** to `npm run build` and **Output Directory** to `dist`.
4. Add environment variables in Vercel dashboard (optional, for contact form).
5. Deploy.

The `vercel.json` file configures client-side routing so all paths return `index.html`.

---

## Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # Hero, About, Projects, Skills, Writing, Contact
│   └── ui/             # ProjectModal, ArticleModal, ProgressBar, CustomCursor
├── config/
│   └── site.ts         # ← Central configuration (edit here)
├── context/
│   └── ThemeContext.tsx
├── data/
│   ├── projects.ts     # ← Project data (edit here)
│   ├── skills.ts       # ← Skills & education data (edit here)
│   └── articles.ts     # ← Blog article data (edit here)
├── hooks/
│   └── usePortfolio.ts
├── types/
│   └── index.ts
├── utils/
│   └── animations.ts
├── App.tsx
├── main.tsx
└── index.css
public/
├── favicon.svg
└── Apoorv-Jain-Resume.pdf  ← Place your resume here
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React + Vite | UI framework and build tool |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility styling |
| Framer Motion | Animations and transitions |
| React Router DOM | Client-side routing |
| Lucide React | Icons |
| Web3Forms | Contact form backend |

---

## License

This project is for personal use. Feel free to use it as inspiration, but please don't copy the content or present it as your own.
