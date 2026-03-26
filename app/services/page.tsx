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
      <section style={{ paddingTop: '120px', paddingBottom: '0', overflow: 'hidden' }}>
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
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              lineHeight: 0.95,
              margin: 0,
              color: 'var(--text-primary)',
            }}
          >
            Every service.
            <br />
            <span style={{ color: 'var(--accent)' }}>Zero upfront.</span>
          </h1>
        </motion.div>

        {/* Sub pushed to right half */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            padding: '2.5rem 1.5rem 0',
            maxWidth: '68rem',
            margin: '0 auto',
          }}
        >
          <div /> {/* empty left */}
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Full-service ATM infrastructure. We handle placement, cash management,
            monitoring, and support. End to end, no upfront investment required.
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
      <section style={{ padding: '8rem 0', position: 'relative' }}>
        <div style={container}>
          <ServicesNav />
        </div>
      </section>

      {/* ─── LIVE NETWORK MONITOR — Pattern D: offset grid ──────────────── */}
      <section style={{ padding: '8rem 0', position: 'relative' }}>
        {/* Thin gradient divider top */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)', marginBottom: '8rem', marginTop: '-8rem' }} />

        <div style={{ maxWidth: '68rem', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Offset grid: vertical label | content */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              alignItems: 'start',
              gap: '3rem',
              marginBottom: '3rem',
            }}
          >
            <div style={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
              <span style={{
                fontFamily: 'var(--font-fira), monospace',
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: 'var(--text-faint)',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}>
                Live Network
              </span>
            </div>
            <div>
              <SectionEyebrow label="Real-Time Status" />
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
                The network,{' '}
                <span style={{ color: 'var(--accent)' }}>right now.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                style={{ color: 'var(--text-muted)', maxWidth: '28rem', marginTop: '1rem', lineHeight: 1.65 }}
              >
                Every machine streams live telemetry. Status, last transaction, cash levels, and uptime,
                all visible in real time.
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
      <section style={{ padding: '8rem 0', textAlign: 'center', position: 'relative' }}>
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
          <SectionEyebrow label="Partner With Us" />
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
            Ready to add a revenue stream?
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
            No upfront cost. No risk. Installation, cash management, and support included.
          </motion.p>
          <MagneticButton variant="primary" href="/contact">
            Become a Partner
          </MagneticButton>
        </div>
      </section>

      <Footer />
    </>
  )
}
