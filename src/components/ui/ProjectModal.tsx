import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, ExternalLink, Clock, Users, Target, Lightbulb, TrendingUp } from 'lucide-react'
import type { Project } from '../../types'
import { fadeUp, staggerContainer } from '../../utils/animations'

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)


interface Props {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  // Keyboard close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ zIndex: 100 }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 101,
        display: 'grid',
        placeItems: 'center',
        padding: '1rem',
        pointerEvents: 'none',
      }}>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
        style={{
          width: 'min(720px, 95vw)',
          maxHeight: '90vh',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border-hover)',
          borderRadius: 'var(--radius-xl)',
          overflowY: 'auto',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.5)',
          pointerEvents: 'auto',
        }}
      >
        {/* Cover header */}
        <div style={{
          height: '200px',
          background: project.coverColor,
          position: 'relative',
          flexShrink: 0,
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 70% 40%, ${project.accentColor}40, transparent 60%)`,
          }} />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(0,0,0,0.3)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)',
            }}
          >
            <X size={16} />
          </button>

          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '2rem',
          }}>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 900,
              fontSize: '1.75rem',
              letterSpacing: '-0.03em',
              color: 'white',
            }}>
              {project.title}
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '2rem' }}>
          {/* Meta row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.25rem',
            marginBottom: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--color-border)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
              <Clock size={13} style={{ color: 'var(--color-accent)' }} />
              {project.timeline}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
              <Users size={13} style={{ color: 'var(--color-accent)' }} />
              {project.role}
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', gap: '0.35rem' }}
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', gap: '0.35rem' }}
                >
                  <GithubIcon size={13} /> GitHub
                </a>
              )}
            </div>
          </div>

          {/* Summary */}
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '1rem',
            lineHeight: 1.75,
            marginBottom: '2rem',
            textAlign: 'center',
          }} className="project-modal-description">
            {project.description}
          </p>

          {/* Case study sections */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {[
              { icon: Target, label: 'The Problem', content: project.problem },
              { icon: Lightbulb, label: 'Approach', content: project.approach },
              { icon: TrendingUp, label: 'Outcome', content: project.outcome },
            ].map(({ icon: Icon, label, content }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                style={{
                  padding: '1.25rem',
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                }}>
                  <Icon size={15} style={{ color: 'var(--color-accent)' }} />
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'var(--color-text-primary)',
                    letterSpacing: '-0.01em',
                  }}>
                    {label}
                  </span>
                </div>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech stack */}
          <div style={{ marginTop: '1.75rem' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              marginBottom: '0.75rem',
            }}>
              Tech Stack
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </>
  )
}
