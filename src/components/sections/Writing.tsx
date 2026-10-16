import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Tag, ChevronRight } from 'lucide-react'
import { articles } from '../../data/articles'
import type { Article } from '../../types'
import { fadeUp, staggerContainer, viewportConfig } from '../../utils/animations'
import ArticleModal from '../ui/ArticleModal'

function ArticleCard({ article, onClick }: { article: Article; onClick: () => void }) {
  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  })

  return (
    <motion.article
      variants={fadeUp}
      layout
      whileHover={{ y: -4 }}
      onClick={onClick}
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-hover)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-card)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      {/* Category + draft badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
        <span style={{
          padding: '0.2rem 0.6rem',
          background: 'var(--color-accent-soft)',
          color: 'var(--color-accent)',
          borderRadius: '999px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
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
            letterSpacing: '0.06em',
            border: '1px solid rgba(245, 158, 11, 0.2)',
          }}>
            Draft
          </span>
        )}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: '1.05rem',
        letterSpacing: '-0.02em',
        color: 'var(--color-text-primary)',
        lineHeight: 1.35,
        marginBottom: '0.6rem',
      }}>
        {article.title}
      </h3>

      {/* Summary */}
      <p style={{
        fontSize: '0.85rem',
        color: 'var(--color-text-secondary)',
        lineHeight: 1.65,
        marginBottom: '1rem',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {article.summary}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
        {article.tags.slice(0, 3).map(tag => (
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

      {/* Footer row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        borderTop: '1px solid var(--color-border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--color-text-muted)',
          }}>
            <Clock size={11} />{article.readingTime} min read
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
            {date}
          </span>
        </div>
        <ChevronRight size={16} style={{ color: 'var(--color-accent)' }} />
      </div>
    </motion.article>
  )
}

export default function Writing() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  return (
    <section id="writing" className="section-padding">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Writing</div>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
          }}>
            Thoughts & <span className="gradient-text">Reflections</span>
          </h2>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '1rem',
            maxWidth: '460px',
            margin: '0 auto',
            lineHeight: 1.7,
          }} className="section-description">
            Writing about frontend engineering, AI agents, and lessons learned while building real projects.
          </p>
          {/*
            <p style={{
              marginTop: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
            }}>
              Articles marked as "Draft" are starter templates — replace content in <code style={{ color: 'var(--color-accent)' }}>src/data/articles.ts</code>
            </p>
          */}
        </motion.div>

        {/* Articles grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="writing-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {articles.map(article => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
