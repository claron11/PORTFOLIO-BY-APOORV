import type { SkillCategory, Education, Certification } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'HTML',       level: 'core' },
      { name: 'CSS',        level: 'core' },
      { name: 'JavaScript', level: 'core' },
      { name: 'React',      level: 'core' },
      { name: 'Next.js',    level: 'proficient' },
      { name: 'TypeScript', level: 'proficient' },
    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    icon: '🔧',
    skills: [
      { name: 'C',   level: 'proficient' },
      { name: 'C++', level: 'proficient' },
      { name: 'Java', level: 'familiar' },
      { name: 'Python', level: 'familiar' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL',      level: 'proficient' },
      { name: 'PostgreSQL', level: 'proficient' },
      { name: 'MongoDB',    level: 'familiar' },
      { name: 'Firebase',   level: 'familiar' },
    ],
  },
  {
    id: 'ai-ecosystem',
    label: 'AI Ecosystem',
    icon: '🤖',
    skills: [
      { name: 'LangChain',       level: 'proficient' },
      { name: 'LangGraph',       level: 'proficient' },
      { name: 'Tavily Search',   level: 'proficient' },
      { name: 'Groq LLM',        level: 'proficient' },
      { name: 'Prisma',          level: 'proficient' },
      { name: 'NextAuth.js',     level: 'proficient' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'GitHub',                 level: 'core' },
      { name: 'VS Code',                level: 'core' },
      { name: 'Google Cloud Platform',  level: 'familiar' },
      { name: 'Vercel',                 level: 'proficient' },
      { name: 'Render',                 level: 'proficient' },
      { name: 'Antigravity',            level: 'proficient' },
      { name: 'Cursor',                 level: 'proficient' },
      { name: 'Trae',                   level: 'proficient' },
    ],
  },
  {
    id: 'core-subjects',
    label: 'Core CS',
    icon: '📚',
    skills: [
      { name: 'Data Structures',          level: 'core' },
      { name: 'DBMS',                     level: 'proficient' },
      { name: 'Operating Systems',        level: 'proficient' },
      { name: 'Computer Networks',        level: 'proficient' },
      { name: 'Theory of Computation',   level: 'familiar' },
    ],
  },
]

export const education: Education[] = [
  {
    institution: 'JECRC University, School of Engineering',
    degree: 'B.Tech',
    field: 'Computer Science Engineering',
    period: '2023 – 2027',
    score: '9.61',
    scoreType: 'CGPA',
    type: 'university',
  },
  {
    institution: 'Emmanuel Mission Sr. Sec. School, Jhalawar',
    degree: 'Senior Secondary',
    field: 'CBSE (Class XII)',
    period: '2023',
    score: '82.80',
    scoreType: 'Percentage',
    type: 'higher-secondary',
  },
  {
    institution: 'Emmanuel Mission Sr. Sec. School, Jhalawar',
    degree: 'Secondary',
    field: 'CBSE (Class X)',
    period: '2021',
    score: '76.80',
    scoreType: 'Percentage',
    type: 'secondary',
  },
]

export const certifications: Certification[] = [
  {
    name: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud',
    date: 'March 2025',
    credentialUrl: 'https://www.credly.com/badges/b81c5676-9d85-44e3-b7bd-a4a5faf6cecc/public_url',
  },
  {
    name: 'Google Cloud Engineering',
    issuer: 'Google Cloud',
    date: 'October 2025',
    credentialUrl: 'https://www.credly.com/badges/4cad2bd3-fbd9-452d-86f1-f7c423ebfbf6/public_url',
  },
]

export const achievements = [
  {
    icon: '📸',
    title: 'Photography Club — Maverick Team',
    description: 'Core member of the official photography club at JECRC University.',
  },
  {
    icon: '🎨',
    title: 'Graphic Design for Clients',
    description: 'Designed visual content for real clients, blending creative thinking with practical design outcomes.',
  },
]
