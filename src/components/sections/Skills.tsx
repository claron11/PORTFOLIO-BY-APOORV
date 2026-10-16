import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import { fadeUp, staggerContainer, viewportConfig } from '../../utils/animations'

const levelConfig = {
  core:       { label: 'Core Skill',  color: 'var(--color-accent)',  width: '90%' },
  proficient: { label: 'Proficient',  color: 'var(--color-accent-2)', width: '70%' },
  familiar:   { label: 'Familiar',    color: 'var(--color-text-muted)', width: '50%' },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Technical Skills</div>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
          }}>
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '1rem',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Technologies and tools I work with. Core skills are used extensively; proficient means regularly applied in projects; familiar indicates academic or exploratory experience.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillCategories.map(category => (
            <motion.div
              key={category.id}
              variants={fadeUp}
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-hover)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'}
            >
              {/* Category header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem',
              }}>
                <span style={{ fontSize: '1.1rem' }}>{category.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.01em',
                }}>
                  {category.label}
                </span>
              </div>

              {/* Skills list */}
              <div
                className={`skills-list-scroll${category.skills.length > 5 ? ' has-overflow' : ''}`}
                tabIndex={category.skills.length > 5 ? 0 : undefined}
                aria-label={category.skills.length > 5 ? `${category.label} skills list` : undefined}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}
              >
                {category.skills.map(skill => {
                  const lvl = levelConfig[skill.level || 'familiar']
                  return (
                    <div key={skill.name}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.35rem',
                      }}>
                        <span style={{
                          fontSize: '0.875rem',
                          color: 'var(--color-text-primary)',
                          fontWeight: 500,
                        }}>
                          {skill.name}
                        </span>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          color: lvl.color,
                          letterSpacing: '0.03em',
                        }}>
                          {lvl.label}
                        </span>
                      </div>
                      <div style={{
                        height: '3px',
                        background: 'var(--color-border)',
                        borderRadius: '999px',
                        overflow: 'hidden',
                      }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: lvl.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${lvl.color}, ${lvl.color}aa)`,
                            borderRadius: '999px',
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {Object.entries(levelConfig).map(([key, val]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '20px',
                height: '3px',
                background: val.color,
                borderRadius: '999px',
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-text-muted)',
                letterSpacing: '0.05em',
              }}>
                {val.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
