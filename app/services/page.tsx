'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import SectionEyebrow from '@/components/SectionEyebrow'
import ServicesNav from '@/components/ServicesNav'
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
            <span style={{ color: 'var(--accent)' }}>Zero upfront.</span>
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
            Full-service ATM placement and support for Bay Area businesses. We handle everything from install to cash management, no upfront cost required.
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

      {/* ─── SUPPORT + DIAGNOSTICS ──────────────────────────────────────── */}
      <section className="section-pad" style={{ position: 'relative' }}>
        {/* Thin gradient divider top */}
        <div className="mb-16 md:mb-32 -mt-16 md:-mt-32" style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)' }} />

        <div style={{ maxWidth: '68rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16" style={{ alignItems: 'start' }}>
            {/* Left: copy + CTA */}
            <div>
              <SectionEyebrow label="ATM Support" />
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
                Machine issues?{' '}
                <span style={{ color: 'var(--accent)' }}>We fix them fast.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                style={{ color: 'var(--text-muted)', maxWidth: '28rem', marginTop: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}
              >
                Our team resolves most issues remotely through live diagnostics before they affect your customers.
                When hands-on service is needed, our Bay Area technicians are on-site within hours. We also offer
                nationwide remote support for ATM operators by request.
              </motion.p>
              <MagneticButton variant="primary" href="/contact">
                Request Support
              </MagneticButton>
            </div>

            {/* Right: glass-chrome capabilities panel */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="glass-chrome"
            >
              <div className="glass-chrome-bar">
                <div className="macos-dots">
                  <span style={{ background: '#ff5f57', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }} />
                  <span style={{ background: '#febc2e', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }} />
                  <span style={{ background: '#28c840', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }} />
                </div>
                <span style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.625rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(232,234,240,0.3)',
                }}>
                  SUPPORT CAPABILITIES
                </span>
                <div className="live-badge">
                  <div className="live-dot" />
                  <span>ACTIVE</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  'Live Remote Diagnostics',
                  'On-Site Bay Area Service',
                  'Nationwide Remote Support',
                  'Preventive Maintenance',
                  'Software + Firmware Updates',
                  'Parts + Hardware on Hand',
                ].map((cap, i) => (
                  <div
                    key={cap}
                    style={{
                      padding: '1.25rem 1.5rem',
                      borderBottom: i < 5 ? '1px solid rgba(232,234,240,0.04)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#28c840',
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 450 }}>
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
            No upfront cost. No risk. We handle installation, cash, and ongoing support.
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
