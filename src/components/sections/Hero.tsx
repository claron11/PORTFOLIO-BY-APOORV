import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { fadeUp, staggerContainer } from '../../utils/animations'

// Geometric animated canvas background
function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let animId: number

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    // Particles
    const particles: Array<{
      x: number; y: number; vx: number; vy: number
      size: number; opacity: number; hue: number
    }> = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      hue: Math.random() * 60 + 240, // 240–300: blue-purple range
    }))

    let t = 0
    const draw = () => {
      t += 0.005
      ctx.clearRect(0, 0, width, height)
      const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light'
      const networkOpacity = isLightTheme ? 0.2 : 0.12
      const shapeOpacity = isLightTheme ? 0.25 : 0.12
      const particleOpacityBoost = isLightTheme ? 1.4 : 1.15

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `hsla(260, 70%, ${isLightTheme ? '38%' : '70%'}, ${(1 - dist / 150) * networkOpacity})`
            ctx.lineWidth = isLightTheme ? 0.75 : 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 70%, ${isLightTheme ? '42%' : '70%'}, ${p.opacity * particleOpacityBoost})`
        ctx.fill()
      })

      // Draw floating geometric shapes
      const shapes = [
        { x: width * 0.85, y: height * 0.2, r: 80, phase: 0 },
        { x: width * 0.1, y: height * 0.7, r: 50, phase: Math.PI },
        { x: width * 0.92, y: height * 0.75, r: 35, phase: Math.PI / 2 },
      ]

      shapes.forEach(s => {
        const yOffset = Math.sin(t + s.phase) * 15
        ctx.beginPath()
        // Hexagon
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i + t * 0.3
          const px = s.x + Math.cos(angle) * s.r
          const py = s.y + yOffset + Math.sin(angle) * s.r
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.strokeStyle = isLightTheme
          ? `rgba(61, 42, 165, ${shapeOpacity})`
          : `rgba(124, 106, 255, ${shapeOpacity})`
        ctx.lineWidth = isLightTheme ? 1.25 : 1
        ctx.stroke()
      })

      animId = requestAnimationFrame(draw)
    }

    // Don't run heavy canvas on mobile
    if (!window.matchMedia('(max-width: 768px)').matches &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw()
    }

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollDown = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--color-bg)',
      }}
    >
      {/* Background canvas */}
      <HeroCanvas />

      {/* Gradient orbs */}
      <div className="orb" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(124, 106, 255, 0.2), transparent 70%)',
        top: '-100px', right: '-100px',
      }} />
      <div className="orb" style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15), transparent 70%)',
        bottom: '0', left: '-50px',
      }} />

      {/* Background grid */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      {/* Content */}
      <div className="container-xl" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}
        >
          {/* Status badge */}
          {siteConfig.availableForWork && (
            <motion.div variants={fadeUp}>
              <div className="hero-status-badge" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '999px',
                border: '1px solid rgba(74, 222, 128, 0.25)',
                background: 'rgba(74, 222, 128, 0.06)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-green)',
                letterSpacing: '0.05em',
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--color-green)',
                  animation: 'status-pulse 2s ease-in-out infinite',
                }} />
                {siteConfig.availabilityStatus}
              </div>
            </motion.div>
          )}

          {/* Name */}
          <motion.div variants={fadeUp}>
            <h1 className="hero-name-glow" style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 8vw, 6.5rem)',
              letterSpacing: '-0.04em',
              // A little vertical breathing room prevents the heavy "V" glyph
              // from being clipped by its line box on some browser/font renders.
              lineHeight: 1.05,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}>
              <span className="gradient-text hero-name-first">Apoorv</span>
              <br />
              <span>Jain</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={fadeUp}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
              color: 'var(--color-text-secondary)',
              maxWidth: '520px',
              lineHeight: 1.5,
              margin: '0 auto',
            }}>
              {siteConfig.tagline}
            </p>
          </motion.div>

          {/* Sub-text */}
          <motion.div variants={fadeUp}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '480px',
              lineHeight: 1.7,
              margin: '0 auto',
            }}>
              {siteConfig.bio}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginTop: '0.25rem',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="btn-primary"
              style={{ fontSize: '0.95rem', padding: '0.875rem 2rem' }}
            >
              <Sparkles size={16} />
              Explore My Work
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={siteConfig.resumePath}
              download="Apoorv-Jain-Resume.pdf"
              className="btn-secondary"
              style={{ fontSize: '0.95rem', padding: '0.875rem 2rem' }}
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Floating code snippet decoration */}
          <motion.div
            variants={fadeUp}
          >
            <div className="animate-float" style={{
              marginTop: '0.5rem',
              padding: '0.75rem 1.25rem',
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.02em',
            }}>
            <span style={{ color: 'var(--color-accent)' }}>const</span>
            {' '}developer{' '}
            <span style={{ color: 'var(--color-text-secondary)' }}>=</span>
            {' '}&#123;{' '}
            <span style={{ color: '#f0a500' }}>CGPA</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>:</span>
            {' '}
            <span style={{ color: 'var(--color-green)' }}>9.61</span>
            {', '}
            <span style={{ color: '#f0a500' }}>passion</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>:</span>
            {' '}
            <span style={{ color: '#e8d5ff' }}>"∞"</span>
            {' '}&#125;
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={scrollDown}
        aria-label="Scroll down"
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: '1px solid var(--color-border)',
          borderRadius: '999px',
          padding: '0.5rem 1rem',
          color: 'var(--color-text-muted)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.05em',
        }}
      >
        <ArrowDown size={12} />
        scroll
      </motion.button>
    </section>
  )
}
