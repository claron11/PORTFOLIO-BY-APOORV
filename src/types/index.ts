// ─── SHARED TYPESCRIPT TYPES ────────────────────────────────────────

export interface Project {
  id: string
  title: string
  summary: string
  description: string
  category: ProjectCategory
  role: string
  timeline: string
  status: 'completed' | 'ongoing'
  problem: string
  approach: string
  outcome: string
  technologies: string[]
  links: {
    live?: string
    github?: string
    demo?: string
  }
  coverColor: string    // Tailwind/CSS gradient for card bg
  accentColor: string   // accent for tags etc
  featured: boolean
  order: number
}

export type ProjectCategory = 
  | 'all'
  | 'fullstack'
  | 'ai'
  | 'frontend'
  | 'design'

export interface SkillCategory {
  id: string
  label: string
  icon: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level?: 'core' | 'proficient' | 'familiar'  // optional
  icon?: string
}

export interface Education {
  institution: string
  degree: string
  field?: string
  period: string
  score: string
  scoreType: 'CGPA' | 'Percentage'
  type: 'university' | 'secondary' | 'higher-secondary'
}

export interface Certification {
  name: string
  issuer: string
  date: string
  credentialUrl?: string
}

export interface Article {
  id: string
  title: string
  summary: string
  content: string   // Markdown string
  category: ArticleCategory
  tags: string[]
  publishedAt: string  // ISO date
  readingTime: number  // minutes
  draft: boolean
  slug: string
}

export type ArticleCategory = 
  | 'frontend'
  | 'ai'
  | 'projects'
  | 'ui-ux'
  | 'lessons'

export interface NavLink {
  label: string
  href: string
}

export type Theme = 'dark' | 'light'
