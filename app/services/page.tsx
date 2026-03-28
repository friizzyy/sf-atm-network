'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import SectionEyebrow from '@/components/SectionEyebrow'
import ServicesNav from '@/components/ServicesNav'
import NetworkMonitor from '@/components/NetworkMonitor'
import MagneticButton from '@/components/MagneticButton'
import Footer from '@/components/Footer'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const container = {
  maxWidth: '68rem',
  margin: '0 auto',
  padding: '0 1.5rem',
}

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <Nav />

      {/* ─── HERO — Pattern C: oversized title bleeds, sub pushed right ─── */}
      <section className="pt-28 md:pt-32" style={{ paddingBottom: '0', overflow: 'hidden' }}>
        {/* Oversized bleed headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ padding: '0 1.5rem', maxWidth: '80rem', margin: '0 auto' }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: 'clamp(2.25rem, 8vw, 7rem)',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              lineHeight: 0.95,
              margin: 0,
              color: 'var(--text-primary)',
            }}
          >
            Every service.
            <br />
            <span style={{ color: 'var(--accent)' }}>Zero upfront cost.</span>
          </h1>
        </motion.div>

        {/* Sub pushed to right half */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            padding: '2.5rem 1.5rem 0',
            maxWidth: '68rem',
            margin: '0 auto',
          }}
        >
          <div className="hidden md:block" /> {/* empty left */}
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            ATM placement, cash management, live monitoring, and hands-on support
            for Bay Area businesses. We handle it all so you do not have to.
          </p>
        </motion.div>

        {/* Thin gradient divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)',
            margin: '4rem 0 0',
          }}
        />
      </section>

      {/* ─── SERVICES TAB NAVIGATOR ─────────────────────────────────────── */}
      <section className="section-pad" style={{ position: 'relative' }}>
        <div style={container}>
          <ServicesNav />
        </div>
      </section>

      {/* ─── LIVE NETWORK MONITOR — Pattern D: offset grid ──────────────── */}
      <section className="section-pad" style={{ position: 'relative' }}>
        {/* Thin gradient divider top */}
        <div className="mb-16 md:mb-32 -mt-16 md:-mt-32" style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)' }} />

        <div style={{ maxWidth: '68rem', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Offset grid: vertical label | content */}
          <div
            className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-12"
            style={{
              alignItems: 'start',
              marginBottom: '3rem',
            }}
          >
            <div className="offset-grid-label" style={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
              <span style={{
                fontFamily: 'var(--font-fira), monospace',
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: 'var(--text-faint)',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}>
                Live Status
              </span>
            </div>
            <div>
              <SectionEyebrow label="ATM Monitoring" />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: EASE }}
                style={{
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  color: 'var(--text-primary)',
                  maxWidth: '32rem',
                  marginTop: 0,
                  marginBottom: '1rem',
                }}
              >
                Every machine,{' '}
                <span style={{ color: 'var(--accent)' }}>always watched.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                style={{ color: 'var(--text-muted)', maxWidth: '28rem', marginTop: '1rem', lineHeight: 1.65 }}
              >
                We track every ATM in real time. Status, last transaction, cash levels,
                and uptime. Issues get flagged and handled before your customers notice.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <NetworkMonitor />
          </motion.div>
        </div>
      </section>

      {/* ─── CTA — Pattern A: centered ───────────────────────────────────── */}
      <section className="section-pad" style={{ textAlign: 'center', position: 'relative' }}>
        {/* Thin gradient divider top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(196,30,58,0.4), transparent)',
        }} />
        <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionEyebrow label="Get Started" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              marginTop: 0,
            }}
          >
            Ready to add an ATM to your business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            style={{
              color: 'var(--text-muted)',
              maxWidth: '26rem',
              margin: '0 auto 2.5rem',
              lineHeight: 1.65,
            }}
          >
            No upfront cost. No risk. Installation, cash management, and ongoing support all included.
          </motion.p>
          <MagneticButton variant="primary" href="/contact">
            Get a Free Consultation
          </MagneticButton>
        </div>
      </section>

      <Footer />
    </>
  )
}
