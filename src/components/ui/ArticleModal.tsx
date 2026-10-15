import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, Clock, Calendar, Tag } from 'lucide-react'
import type { Article } from '../../types'

interface Props {
  article: Article
  onClose: () => void
}

// Very simple markdown-to-html renderer for headings, paragraphs, code, bold
function renderMarkdown(md: string): string {
  return md
    .replace(/```[\w]*\n([\s\S]*?)```/g, (_, code) =>
      `<pre style="background:var(--color-bg);border:1px solid var(--color-border);border-radius:8px;padding:1rem;overflow-x:auto;font-family:var(--font-mono);font-size:0.8rem;color:var(--color-accent-2);margin:1rem 0"><code>${escapeHtml(code.trim())}</code></pre>`
    )
    .replace(/^### (.*$)/gm, '<h3 style="font-family:var(--font-sans);font-weight:700;font-size:1.1rem;letter-spacing:-0.01em;color:var(--color-text-primary);margin:1.5rem 0 0.5rem">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 style="font-family:var(--font-sans);font-weight:800;font-size:1.4rem;letter-spacing:-0.02em;color:var(--color-text-primary);margin:2rem 0 0.75rem">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 style="font-family:var(--font-sans);font-weight:900;font-size:1.75rem;letter-spacing:-0.03em;color:var(--color-text-primary);margin:0 0 1.5rem">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--color-text-primary);font-weight:600">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em style="color:var(--color-text-secondary)">$1</em>')
    .replace(/`([^`]+)`/g, '<code style="font-family:var(--font-mono);font-size:0.85em;color:var(--color-accent);background:var(--color-accent-soft);padding:0.15em 0.4em;border-radius:4px">$1</code>')
    .replace(/^> (.*$)/gm, '<blockquote style="border-left:3px solid var(--color-accent);padding-left:1rem;color:var(--color-text-secondary);font-style:italic;margin:1rem 0">$1</blockquote>')
    .replace(/^- (.*$)/gm, '<li style="color:var(--color-text-secondary);margin-bottom:0.4rem;padding-left:0.25rem">$1</li>')
    .replace(/(<li.*<\/li>(\n|$))+/g, (m) => `<ul style="padding-left:1.5rem;margin:1rem 0;list-style:disc">${m}</ul>`)
    .replace(/\n\n/g, '</p><p style="color:var(--color-text-secondary);line-height:1.75;margin-bottom:1rem">')
    .replace(/^(?!<[hupbl])(.+)$/gm, '<p style="color:var(--color-text-secondary);line-height:1.75;margin-bottom:1rem">$1</p>')
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default function ArticleModal({ article, onClose }: Props) {
  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  })

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ zIndex: 100 }}
      />

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
        aria-label={article.title}
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
        {/* Header */}
        <div style={{
          padding: '2rem 2rem 1.5rem',
          borderBottom: '1px solid var(--color-border)',
          position: 'sticky',
          top: 0,
          background: 'var(--color-surface)',
          zIndex: 10,
        }}>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-card)',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={15} />
          </button>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{
              padding: '0.2rem 0.6rem',
              background: 'var(--color-accent-soft)',
              color: 'var(--color-accent)',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              border: '1px solid rgba(124, 106, 255, 0.2)',
            }}>
              {article.category}
            </span>
            {article.draft && (
              <span style={{
                padding: '0.2rem 0.6rem',
                background: 'rgba(245, 158, 11, 0.1)',
                color: '#f59e0b',
                borderRadius: '999px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                border: '1px solid rgba(245, 158, 11, 0.2)',
              }}>
                Draft
              </span>
            )}
          </div>

          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            lineHeight: 1.25,
            marginBottom: '0.875rem',
            paddingRight: '2.5rem',
          }}>
            {article.title}
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
              <Calendar size={12} />{date}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
              <Clock size={12} />{article.readingTime} min read
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
            {article.tags.map(tag => (
              <span key={tag} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.15rem 0.5rem',
                background: 'var(--color-surface)',
                color: 'var(--color-text-muted)',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
              }}>
                <Tag size={9} />{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          style={{ padding: '2rem' }}
          dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
        />
      </motion.div>
      </div>
    </>
  )
}
