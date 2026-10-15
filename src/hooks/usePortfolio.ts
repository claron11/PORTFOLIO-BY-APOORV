import { useEffect, useRef } from 'react'
import { siteConfig } from '../config/site'

// Custom cursor hook — only activates on pointer devices
export function useCustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!siteConfig.animations.enableCustomCursor) return
    // Don't enable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    let animId: number
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      animId = requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => {
      ring.style.width = '48px'
      ring.style.height = '48px'
      ring.style.borderColor = 'var(--color-accent)'
    }

    const onMouseLeaveLink = () => {
      ring.style.width = '32px'
      ring.style.height = '32px'
      ring.style.borderColor = 'rgba(124, 106, 255, 0.4)'
    }

    document.addEventListener('mousemove', onMouseMove)
    animId = requestAnimationFrame(animate)

    const interactables = document.querySelectorAll('a, button, [role="button"]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    // Hide default cursor
    document.body.style.cursor = 'none'
    dot.style.display = 'block'
    ring.style.display = 'block'

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
      document.body.style.cursor = ''
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink)
        el.removeEventListener('mouseleave', onMouseLeaveLink)
      })
    }
  }, [])

  return { dotRef, ringRef }
}

// Active section detection hook
export function useActiveSection(sectionIds: string[]) {
  const getActive = () => {
    const scrollY = window.scrollY + 100
    for (const id of [...sectionIds].reverse()) {
      const el = document.getElementById(id)
      if (el && scrollY >= el.offsetTop) return id
    }
    return sectionIds[0]
  }

  return getActive
}

// Scroll progress hook
export function useScrollProgress() {
  const progressRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progressRef
}
