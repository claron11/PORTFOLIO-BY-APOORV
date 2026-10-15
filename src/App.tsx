import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Writing from './components/sections/Writing'
import Contact from './components/sections/Contact'
import { ScrollProgress, CustomCursor } from './components/ui/ProgressBar'

// Divider between sections
function SectionDivider() {
  return <div className="divider" />
}

function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Writing />
      <SectionDivider />
      <Contact />
    </>
  )
}

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      background: 'var(--color-bg)',
      color: 'var(--color-text-primary)',
      fontFamily: 'var(--font-sans)',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: 'var(--color-accent)',
        letterSpacing: '0.1em',
      }}>404</span>
      <h1 style={{
        fontWeight: 800,
        fontSize: '3rem',
        letterSpacing: '-0.04em',
        lineHeight: 1,
      }}>Page not found.</h1>
      <p style={{ color: 'var(--color-text-secondary)', maxWidth: '380px', lineHeight: 1.7 }}>
        The page you're looking for doesn't exist. Let's get you back.
      </p>
      <a href="/" className="btn-primary" style={{ marginTop: '0.5rem' }}>
        Go Home
      </a>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="noise-overlay" style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Global UI */}
        <ScrollProgress />
        <CustomCursor />
        <Navbar />

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
