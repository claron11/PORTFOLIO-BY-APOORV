import type { Variants, Transition } from 'framer-motion'

// ─── Shared Transitions ──────────────────────────────────────────────
export const easeOut: Transition = {
  ease: [0.16, 1, 0.3, 1],
  duration: 0.6,
}

export const spring: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

// ─── Reveal Variants ─────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ...easeOut } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { ...easeOut } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { ...easeOut } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { ...easeOut } },
}

// ─── Stagger Container ───────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

// ─── Text Reveal (character by character) ────────────────────────────
export const textReveal: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { ...easeOut, duration: 0.7 },
  },
}

// ─── Viewport config defaults ─────────────────────────────────────────
export const viewportConfig = {
  once: true,
  amount: 0.15,
} as const

// ─── Hover card lift ─────────────────────────────────────────────────
export const hoverLift = {
  whileHover: { y: -6, transition: spring },
  whileTap:   { scale: 0.98, transition: spring },
}

// ─── Magnetic button ─────────────────────────────────────────────────
export const magneticProps = {
  whileHover: { scale: 1.05, transition: spring },
  whileTap:   { scale: 0.95, transition: spring },
}
