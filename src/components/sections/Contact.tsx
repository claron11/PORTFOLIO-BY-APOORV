import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { fadeUp, fadeLeft, fadeRight, viewportConfig } from '../../utils/animations'

// Inline SVG social icons
const GithubIcon = ({ size = 20, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)
const LinkedinIcon = ({ size = 20, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const InstagramIcon = ({ size = 20, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)
const LeetcodeIcon = ({ size = 20, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
)

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required.'
  if (!data.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email.'
  if (!data.subject.trim()) errors.subject = 'Subject is required.'
  if (!data.message.trim()) errors.message = 'Message is required.'
  else if (data.message.trim().length < 20) errors.message = 'Message should be at least 20 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [formState, setFormState] = useState<FormState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setFormState('submitting')

    // ─── Web3Forms integration ───────────────────────────────────
    if (siteConfig.web3FormsKey) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: siteConfig.web3FormsKey,
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        })
        const data = await res.json()
        if (data.success) {
          setFormState('success')
          setForm({ name: '', email: '', subject: '', message: '' })
        } else {
          setFormState('error')
        }
      } catch {
        setFormState('error')
      }
    } else {
      // ─── Fallback: mailto link ───────────────────────────────────
      // No API key configured — open email client
      const subject = encodeURIComponent(form.subject)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
      setFormState('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    }
  }

  const inputStyle = (hasError?: string) => ({
    width: '100%',
    padding: '0.875rem 1rem',
    background: 'var(--color-bg)',
    border: `1px solid ${hasError ? '#ef4444' : 'var(--color-border)'}`,
    borderRadius: 'var(--radius-md)',
    color: 'var(--color-text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box' as const,
  })

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container-xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
          }}>
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '1rem',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Have a project in mind, or just want to say hi? I'm always open to conversations about interesting problems and new opportunities.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left: Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <h3 style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                color: 'var(--color-text-primary)',
                marginBottom: '0.75rem',
              }}>
                Direct Contact
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
              >
                <Mail size={16} />
                {siteConfig.email}
              </a>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
              }}>
                Find Me Online
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {siteConfig.social.github && (
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.875rem 1.25rem',
                      background: 'var(--color-bg-card)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'
                      ;(e.currentTarget as HTMLElement).style.background = 'var(--color-accent-soft)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
                      ;(e.currentTarget as HTMLElement).style.background = 'var(--color-bg-card)'
                    }}
                  >
                    <GithubIcon size={20} style={{ color: 'var(--color-accent)' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>GitHub</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>View my repositories</div>
                    </div>
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.875rem 1.25rem',
                      background: 'var(--color-bg-card)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'
                      ;(e.currentTarget as HTMLElement).style.background = 'var(--color-accent-soft)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
                      ;(e.currentTarget as HTMLElement).style.background = 'var(--color-bg-card)'
                    }}
                  >
                    <LinkedinIcon size={20} style={{ color: 'var(--color-accent)' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>LinkedIn</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Connect professionally</div>
                    </div>
                  </a>
                )}
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.875rem 1.25rem', background: 'var(--color-bg-card)',
                      border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)', textDecoration: 'none', transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'
                      ;(e.currentTarget as HTMLElement).style.background = 'var(--color-accent-soft)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
                      ;(e.currentTarget as HTMLElement).style.background = 'var(--color-bg-card)'
                    }}
                  >
                    <InstagramIcon size={20} style={{ color: 'var(--color-accent)' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Instagram</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Follow my work</div>
                    </div>
                  </a>
                )}
                {siteConfig.social.leetcode && (
                  <a
                    href={siteConfig.social.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.875rem 1.25rem', background: 'var(--color-bg-card)',
                      border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)', textDecoration: 'none', transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'
                      ;(e.currentTarget as HTMLElement).style.background = 'var(--color-accent-soft)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
                      ;(e.currentTarget as HTMLElement).style.background = 'var(--color-bg-card)'
                    }}
                  >
                    <LeetcodeIcon size={20} style={{ color: 'var(--color-accent)' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>LeetCode</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>DSA & problem solving</div>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Availability notice */}
            {siteConfig.availableForWork && (
              <div style={{
                padding: '1rem 1.25rem',
                background: 'var(--color-green-soft)',
                border: '1px solid rgba(74, 222, 128, 0.2)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--color-green)',
                  marginTop: '0.3rem',
                  flexShrink: 0,
                  animation: 'status-pulse 2s ease-in-out infinite',
                }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-green)' }}>
                    {siteConfig.availabilityStatus}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '0.15rem' }}>
                    Internships, part-time, and project collaborations.
                  </div>
                </div>
              </div>
            )}

            {/* Form setup notice if no API key */}
            {!siteConfig.web3FormsKey && (
              <div style={{
                padding: '1rem 1.25rem',
                background: 'rgba(245, 158, 11, 0.06)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.8rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
              }}>
                <strong style={{ color: '#f59e0b' }}>⚙ Contact form setup:</strong> Add your{' '}
                <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                  Web3Forms
                </a>{' '}
                access key to <code style={{ color: 'var(--color-accent)', fontSize: '0.75rem' }}>src/config/site.ts</code> to enable email delivery. Currently falls back to your email client.
              </div>
            )}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <CheckCircle size={48} style={{ color: 'var(--color-green)', margin: '0 auto 1.25rem' }} />
                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.5rem',
                  }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="btn-secondary"
                    style={{ marginTop: '1.5rem' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  style={{
                    background: 'var(--color-bg-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}
                >
                  {/* Name + Email row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        autoComplete="name"
                        style={inputStyle(errors.name)}
                        onFocus={e => !errors.name && ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)')}
                        onBlur={e => !errors.name && ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)')}
                      />
                      {errors.name && <p role="alert" style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.3rem' }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        style={inputStyle(errors.email)}
                        onFocus={e => !errors.email && ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)')}
                        onBlur={e => !errors.email && ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)')}
                      />
                      {errors.email && <p role="alert" style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.3rem' }}>{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      style={inputStyle(errors.subject)}
                      onFocus={e => !errors.subject && ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)')}
                      onBlur={e => !errors.subject && ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)')}
                    />
                    {errors.subject && <p role="alert" style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.3rem' }}>{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or just say hi..."
                      rows={5}
                      style={{ ...inputStyle(errors.message), resize: 'vertical', minHeight: '120px' }}
                      onFocus={e => !errors.message && ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)')}
                      onBlur={e => !errors.message && ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)')}
                    />
                    {errors.message && <p role="alert" style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.3rem' }}>{errors.message}</p>}
                  </div>

                  {/* Error banner */}
                  {formState === 'error' && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1rem',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      borderRadius: 'var(--radius-md)',
                      color: '#ef4444',
                      fontSize: '0.85rem',
                    }}>
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="btn-primary"
                    whileHover={{ scale: formState === 'submitting' ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      opacity: formState === 'submitting' ? 0.7 : 1,
                      cursor: formState === 'submitting' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {formState === 'submitting' ? (
                      <><Loader size={16} style={{ animation: 'spin-slow 1s linear infinite' }} /> Sending...</>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
