import type { Article } from '../types'

// ─── STARTER ARTICLES ──────────────────────────────────────────────
// These are editable draft articles. Replace content and set draft: false
// when ready to publish. Add new articles by extending this array.

export const articles: Article[] = [
  {
    id: 'multi-agent-ai-architecture',
    slug: 'multi-agent-ai-architecture',
    title: 'How I Built a Multi-Agent AI Travel Planner with LangGraph',
    summary: 'A deep dive into orchestrating 4 concurrent LangGraph agents, Tavily real-time search, and Groq LLM to generate personalized travel itineraries in under 5 minutes.',
    content: `# How I Built a Multi-Agent AI Travel Planner with LangGraph

> **Draft article** — This is a starter template. Edit the content in \`src/data/articles.ts\`.

## The Problem

Planning a trip manually takes hours. You need to research destinations, compare accommodation, check local transport, factor in a budget, build a day-by-day itinerary — all across dozens of browser tabs.

I wanted to see if I could cut that to 5 minutes using AI agents.

## The Architecture

TripGuru uses four concurrent LangGraph agents connected through a shared state graph:

1. **Research Agent** — queries Tavily real-time web search for destination data
2. **Planning Agent** — structures the raw data into a day-by-day itinerary
3. **Budget Agent** — optimises the plan against the user's stated budget
4. **Human-in-the-Loop Agent** — presents the itinerary and incorporates user feedback for regeneration

## Key Lessons

- LangGraph's StateGraph is elegant but requires careful state schema design upfront
- Human-in-the-loop patterns need deliberate UX thinking — the regeneration flow matters as much as the generation
- Groq's inference speed makes real-time streaming feel snappy enough for production

## Impact

Approximately 80% reduction in manual trip-planning research time in informal testing.

---

*This is a starter draft. Replace with your actual article content.*
`,
    category: 'ai',
    tags: ['LangGraph', 'LangChain', 'AI Agents', 'Next.js', 'TripGuru'],
    publishedAt: '2026-07-15',
    readingTime: 7,
    draft: true,
    order: 1,
  } as Article & { order: number },
  {
    id: 'frontend-craft',
    slug: 'frontend-craft',
    title: 'Frontend Craft: Why Micro-Interactions Matter More Than Features',
    summary: 'On building interfaces that feel alive — the case for investing in motion, feedback, and tactile detail in web apps.',
    content: `# Frontend Craft: Why Micro-Interactions Matter More Than Features

> **Draft article** — This is a starter template. Edit the content in \`src/data/articles.ts\`.

## The Argument

Two apps can have identical feature sets and wildly different perceived quality. The difference is almost always in the *feel* — the micro-interactions, the transition timing, the hover states, the loading feedback.

## What Makes an Interface Feel Premium

- **Motion with purpose** — animations that communicate state changes, not just decoration
- **Responsive feedback** — every interaction should confirm to the user that something happened
- **Predictive affordances** — hover states that hint at interactivity before a click
- **Consistency** — a design system where every element follows the same rules

## Tools I Reach For

- Framer Motion for React animations
- CSS custom properties for theming
- \`prefers-reduced-motion\` media queries for accessibility

---

*This is a starter draft. Replace with your actual article content.*
`,
    category: 'frontend',
    tags: ['UI/UX', 'Framer Motion', 'Design Systems', 'CSS'],
    publishedAt: '2026-08-20',
    readingTime: 5,
    draft: true,
    order: 2,
  } as Article & { order: number },
  {
    id: 'building-cost-tracker',
    slug: 'building-cost-tracker',
    title: 'Leading a Group Project: Lessons from Building COST',
    summary: 'What I learned about technical leadership, scope management, and shipping on a deadline while building a real expense tracker.',
    content: `# Leading a Group Project: Lessons from Building COST

> **Draft article** — This is a starter template. Edit the content in \`src/data/articles.ts\`.

## Context

COST (Cash & Online Spends Tracker) was a group project I led over two months. It was my first time in a formal project-lead role, and it taught me more about software development than any solo project had.

## What I Learned

### 1. Scope clarity saves weeks
The clearest wins came from agreeing upfront on what we were *not* building.

### 2. A shared definition of "done" matters
Without it, features drift. With it, you ship.

### 3. Real users catch things testing never does
Our live deployment on Render meant we had real feedback within days of launch.

## The Outcome

70% reduction in manual logging effort vs. spreadsheets. Payment reminders that actually improved on-time rates.

---

*This is a starter draft. Replace with your actual article content.*
`,
    category: 'projects',
    tags: ['Leadership', 'Full-Stack', 'COST', 'Project Management'],
    publishedAt: '2026-05-30',
    readingTime: 6,
    draft: true,
    order: 3,
  } as Article & { order: number },
]

export const articleCategories = [
  { id: 'all',      label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'ai',       label: 'AI & Agents' },
  { id: 'projects', label: 'Projects' },
  { id: 'ui-ux',    label: 'UI / UX' },
  { id: 'lessons',  label: 'Lessons' },
]
