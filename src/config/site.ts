// ─── SITE CONFIGURATION ────────────────────────────────────────────
// Edit this file to update personal info, social links, and settings.
// All other components read from here.

export const siteConfig = {
  // ─── Personal Info ─────────────────────────────────────────────
  name: 'Apoorv Jain',
  nameShort: 'AJ',
  tagline: 'Building Digital Experiences That Feel Different.',
  bio: 'Computer Science undergraduate exploring creative frontend engineering, full-stack applications, and AI-powered experiences.',
  bioLong: `I'm a Computer Science Engineering undergraduate at JECRC University with a 9.61 CGPA, passionate about building digital products that sit at the intersection of thoughtful engineering and visual craft.

I enjoy working across the full stack — from crafting pixel-precise UIs in React and Next.js to wiring up AI agents with LangChain and LangGraph. I care deeply about the details: smooth interactions, accessible interfaces, and code that's a joy to maintain.

When I'm not building software, I'm behind a camera as a core member of JECRC's photography club, or working on design projects for real clients.`,

  // ─── Contact ────────────────────────────────────────────────────
  email: 'nunmun.jain455@gmail.com',
  phone: '+91-9414194214',

  // ─── Social Links ────────────────────────────────────────────────
  social: {
    github: 'https://github.com/claron11',
    linkedin: 'https://www.linkedin.com/in/apoorv-jain-049259304',
    instagram: 'https://www.instagram.com/apoorv_0_v/',
    leetcode: 'https://leetcode.com/u/claron/',
    twitter: '',                           // Optional — add your handle if needed
  },

  // ─── Resume ─────────────────────────────────────────────────────
  resumePath: '/Apoorv-Jain-Resume.pdf',   // Place PDF in /public

  // ─── Availability ───────────────────────────────────────────────
  availableForWork: true,
  availabilityStatus: 'Open to opportunities',

  // ─── SEO / Meta ─────────────────────────────────────────────────
  siteUrl: 'https://apoorvjain.dev',       // ← Update after deployment
  ogImage: '/og-image.png',

  // ─── Navigation ─────────────────────────────────────────────────
  navLinks: [
    { label: 'About',    href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills',   href: '#skills' },
    { label: 'Writing',  href: '#writing' },
    { label: 'Contact',  href: '#contact' },
  ],

  // ─── Animation Settings ──────────────────────────────────────────
  animations: {
    enableParallax: true,
    enable3D: true,
    enableCustomCursor: true,
    reducedMotionRespect: true,
  },

  // ─── Contact Form ────────────────────────────────────────────────
  // Set to your Web3Forms access key. Get one at https://web3forms.com
  // Leave empty to fall back to mailto link.
  web3FormsKey: 'd5b8fad4-16bd-48a9-b02c-f465b0aaba09',  // ← Add your Web3Forms access key here
}

export type SiteConfig = typeof siteConfig
