import { motion } from 'framer-motion'
import { GraduationCap, Camera, Palette, Award } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from '../../utils/animations'

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-xl">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Left: Bio */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="section-label">About Me</div>
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--color-text-primary)',
              marginBottom: '1.5rem',
            }}>
              Engineer. Creator.{' '}
              <span className="gradient-text">Problem Solver.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {siteConfig.bioLong.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                }}>
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* Quick stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="quick-stats"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginTop: '2.5rem',
              }}
            >
              {[
                { value: '9.61', label: 'CGPA', suffix: '/10' },
                { value: '4', label: 'Projects', suffix: '+' },
                { value: '2', label: 'Certifications', suffix: '' },
              ].map(stat => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="quick-stat-card"
                  style={{
                    padding: '1.25rem',
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                  }}
                >
                  <div className="quick-stat-value" style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    fontSize: '1.8rem',
                    letterSpacing: '-0.03em',
                    color: 'var(--color-accent)',
                    lineHeight: 1,
                  }}>
                    {stat.value}<span style={{ fontSize: '1rem' }}>{stat.suffix}</span>
                  </div>
                  <div className="quick-stat-label" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.05em',
                    marginTop: '0.25rem',
                    textTransform: 'uppercase',
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Education, Certs, Extra */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* Education block */}
            <div style={{
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'var(--color-text-primary)',
              }}>
                <GraduationCap size={18} style={{ color: 'var(--color-accent)' }} />
                Education
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  {
                    institution: 'JECRC University',
                    degree: 'B.Tech — Computer Science Engineering',
                    period: '2023 – 2027',
                    score: 'CGPA 9.61/10',
                    highlight: true,
                  },
                  {
                    institution: 'Emmanuel Mission Sr. Sec. School, Jhalawar',
                    degree: 'Senior Secondary (CBSE)',
                    period: '2023',
                    score: '82.80%',
                    highlight: false,
                  },
                  {
                    institution: 'Emmanuel Mission Sr. Sec. School, Jhalawar',
                    degree: 'Secondary (CBSE)',
                    period: '2021',
                    score: '76.80%',
                    highlight: false,
                  },
                ].map((edu, i) => (
                  <div key={i} style={{
                    paddingLeft: '1rem',
                    borderLeft: `2px solid ${edu.highlight ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--color-text-primary)',
                    }}>
                      {edu.institution}
                    </div>
                    <div style={{
                      fontSize: '0.825rem',
                      color: 'var(--color-text-secondary)',
                      marginTop: '0.15rem',
                    }}>
                      {edu.degree}
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '0.25rem',
                    }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {edu.period}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: edu.highlight ? 'var(--color-accent)' : 'var(--color-text-muted)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                        {edu.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div style={{
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'var(--color-text-primary)',
              }}>
                <Award size={18} style={{ color: 'var(--color-accent)' }} />
                Certifications
              </div>

              {[
                {
                  name: 'Google Cloud Computing Foundations',
                  date: 'March 2025',
                  url: 'https://www.credly.com/badges/b81c5676-9d85-44e3-b7bd-a4a5faf6cecc/public_url',
                },
                {
                  name: 'Google Cloud Engineering',
                  date: 'October 2025',
                  url: 'https://www.credly.com/badges/4cad2bd3-fbd9-452d-86f1-f7c423ebfbf6/public_url',
                },
              ].map((cert, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0',
                  borderBottom: i === 0 ? '1px solid var(--color-border)' : 'none',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  <div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', fontWeight: 500, textDecoration: 'none' }}
                    >
                      {cert.name}
                    </a>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.1rem' }}>
                      Google Cloud
                    </div>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-accent)',
                    background: 'var(--color-accent-soft)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap',
                  }}>
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>

            {/* Beyond code */}
            <div style={{
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
            }}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'var(--color-text-primary)',
                marginBottom: '1.25rem',
              }}>
                Beyond Code
              </div>
              <div className="creative-showcase" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  className="creative-link-card"
                  href="https://drive.google.com/drive/folders/19He3_N3heoBUL7uaiOaWTeE-bIZdToYD?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Apoorv's photography on Instagram"
                >
                  <Camera size={16} style={{ color: 'var(--color-accent)', marginTop: '0.1rem', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                      Photography — Maverick Team Member
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.15rem' }}>
                      Core member of JECRC University's official photography club
                    </div>
                  </div>
                </a>
                <a
                  className="creative-link-card"
                  href="https://drive.google.com/drive/folders/1l46ctVZYBeRMH7eAaTr9biNsE1gljejT?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Apoorv's visual design work"
                >
                  <Palette size={16} style={{ color: 'var(--color-accent)', marginTop: '0.1rem', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                      Graphic Design for Clients
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.15rem' }}>
                      Designed visual content for real clients
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
