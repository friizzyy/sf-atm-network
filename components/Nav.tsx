'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: '72px',
          background: scrolled || mobileOpen ? 'rgba(10,18,32,0.82)' : 'transparent',
          backdropFilter: scrolled || mobileOpen ? 'blur(20px)' : 'none',
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

          {/* Links — desktop only */}
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

          {/* CTA — desktop only */}
          <MagneticButton
            variant="primary"
            href="/contact"
            className="hidden md:inline-flex text-[10px] px-5 py-2.5"
          >
            {nav.cta}
          </MagneticButton>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <motion.span
              style={{ display: 'block', width: '20px', height: '1.5px', background: 'var(--text-primary)', transformOrigin: 'center' }}
              animate={mobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              style={{ display: 'block', width: '20px', height: '1.5px', background: 'var(--text-primary)' }}
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              style={{ display: 'block', width: '20px', height: '1.5px', background: 'var(--text-primary)', transformOrigin: 'center' }}
              animate={mobileOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            style={{
              paddingTop: '72px',
              background: 'rgba(10,18,32,0.97)',
              backdropFilter: 'blur(20px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem 1.5rem', gap: '0.5rem' }}>
              {nav.links.map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={LINK_ROUTES[link] ?? `/${link.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      padding: '1rem 0',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                style={{ marginTop: '1.5rem' }}
              >
                <MagneticButton variant="primary" href="/contact" onClick={() => setMobileOpen(false)}>
                  {nav.cta}
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
