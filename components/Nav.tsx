'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from './MagneticButton'
import { nav } from '@/lib/data'

const GoldenGateSVG = () => (
  <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
    <path d="M4 14 Q14 2 24 14" stroke="#c41e3a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <line x1="4" y1="14" x2="4" y2="20" stroke="#c41e3a" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="14" x2="24" y2="20" stroke="#c41e3a" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="0" y1="17" x2="28" y2="17" stroke="#e8eaf0" strokeWidth="1.5" opacity="0.4"/>
    <line x1="11" y1="10" x2="11" y2="20" stroke="#c41e3a" strokeWidth="1.5" opacity="0.6"/>
    <line x1="17" y1="10" x2="17" y2="20" stroke="#c41e3a" strokeWidth="1.5" opacity="0.6"/>
  </svg>
)

// Map nav link labels to their real routes
const LINK_ROUTES: Record<string, string> = {
  'Services': '/services',
  'Partners': '/partners',
  'Events': '/events',
  'Contact': '/contact',
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: '72px',
        background: scrolled ? 'rgba(10,18,32,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(232,234,240,0.06)' : '1px solid transparent',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          maxWidth: 'var(--container-max, 68rem)',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '100%',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group no-underline" style={{ textDecoration: 'none' }}>
          <GoldenGateSVG />
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            {nav.logo}
          </span>
        </Link>

        {/* Links — real routes via Next.js Link (respects basePath) */}
        <div className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <Link
              key={link}
              href={LINK_ROUTES[link] ?? `/${link.toLowerCase()}`}
              className="relative"
              style={{
                fontFamily: 'var(--font-fira), monospace',
                fontSize: '0.625rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <MagneticButton
          variant="primary"
          href="/contact"
          className="hidden md:inline-flex text-[10px] px-5 py-2.5"
        >
          {nav.cta}
        </MagneticButton>
      </div>
    </motion.nav>
  )
}
