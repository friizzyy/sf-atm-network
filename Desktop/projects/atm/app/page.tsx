'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import Nav from '@/components/Nav'
import MagneticButton from '@/components/MagneticButton'
import SectionEyebrow from '@/components/SectionEyebrow'
import StatCounter from '@/components/StatCounter'
import Footer from '@/components/Footer'

import { hero, stats, services, industries, about, cta } from '@/lib/data'

// Canvas is client-only, no SSR
const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false })

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function Home() {
  return (
    <>
      <Nav />

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: '72px',
        }}
      >
        {/* Canvas background + gradient overlay (rendered inside HeroCanvas) */}
        <HeroCanvas />

        {/* Hero content — true left aligned, z-index above canvas */}
        <div
          className="w-full"
          style={{
            maxWidth: '68rem',
            margin: '0 auto',
            padding: '0 1.5rem',
            position: 'relative',
            zIndex: 10,
            paddingTop: '4rem',
            paddingBottom: '6rem',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: text anchored to left edge of container with frosted backdrop */}
            <div
              className="hero-text-container"
              style={{
                paddingLeft: 0,
                position: 'relative',
                zIndex: 10,
                background: 'linear-gradient(135deg, rgba(10,18,32,0.92) 0%, rgba(10,18,32,0.75) 60%, transparent 100%)',
                borderRadius: '0 0 40px 0',
                padding: '20px 16px 20px 0',
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <SectionEyebrow label={hero.eyebrow} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                style={{
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: 'clamp(2.25rem, 7vw, 5.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.0,
                  letterSpacing: '-0.04em',
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem',
                  marginTop: 0,
                }}
              >
                {hero.headline[0]}
                <br />
                {hero.headline[1]}{' '}
                <span style={{ color: 'var(--accent)' }}>{hero.redWord}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.65,
                  marginBottom: '2.5rem',
                  maxWidth: '28rem',
                }}
              >
                {hero.sub}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}
              >
                <MagneticButton variant="primary" href="/contact">
                  {hero.ctaPrimary}
                </MagneticButton>
                <MagneticButton variant="ghost" href="/services">
                  {hero.ctaSecondary}
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right: intentionally empty — canvas fills this side */}
            <div className="hidden md:block" />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden md:flex"
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(196,30,58,0.5))' }} />
        </motion.div>
      </section>

      {/* ─── STATS STRIP — Pattern A: centered editorial ───────────────────── */}
      <section
        id="stats"
        className="py-12 md:py-20"
        style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {/* Thin gradient divider top */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <SectionEyebrow label="By the Numbers" />
        </div>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-y-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.mono}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="border-b md:border-b-0 pb-6 md:pb-0"
                style={{
                  textAlign: 'center',
                  borderRight: undefined,
                  padding: '0 1rem',
                  width: '100%',
                }}
              >
                <div className="hidden md:block" style={{
                  borderRight: i < stats.length - 1 ? '1px solid rgba(232,234,240,0.08)' : 'none',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                }} />
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                  mono={stat.mono}
                  decimal={stat.decimal}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW — Pattern B: right-anchored ─────────────────── */}
      <section className="py-16 md:py-36">
        {/* Thin gradient divider top */}
        <div className="mb-16 md:mb-36 -mt-16 md:-mt-36" style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)' }} />

        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16"
          style={{
            maxWidth: '68rem',
            margin: '0 auto',
            padding: '0 1.5rem',
          }}
        >
          {/* Left: section label + eyebrow — anchored to grid */}
          <div style={{ paddingTop: '0.25rem' }}>
            <SectionEyebrow label="Services" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
                marginTop: 0,
                marginBottom: '2rem',
              }}
            >
              Everything your ATM needs.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            >
              <Link
                href="/services"
                style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.625rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                See all services →
              </Link>
            </motion.div>
          </div>

          {/* Right: services grid occupies right 2/3 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
              gap: '1px',
              background: 'var(--border)',
              border: '1px solid var(--border)',
            }}
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                style={{
                  padding: '1.75rem',
                  background: 'var(--bg)',
                  transition: 'background 0.2s',
                }}
                whileHover={{ backgroundColor: '#0f1d35' }}
              >
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: svc.color,
                  marginBottom: '0.625rem',
                }}>
                  {svc.number}
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}>
                  {svc.title}
                </div>
                <div style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55,
                }}>
                  {svc.headline}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE — Pattern C: full-bleed editorial ───────── */}
      <section className="py-16 md:py-36" style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Thin gradient divider top */}
        <div className="mb-16 md:mb-36 -mt-16 md:-mt-36" style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)' }} />

        {/* Large bleed number — Pattern C treatment */}
        <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: EASE }}
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: 'clamp(3rem, 14vw, 11rem)',
              fontWeight: 800,
              letterSpacing: '-0.06em',
              lineHeight: 0.85,
              color: 'rgba(196,30,58,0.07)',
              padding: '0 1.5rem',
              userSelect: 'none',
            }}
          >
            200+
          </motion.div>
        </div>

        {/* Offset: header left + industries grid right */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16"
          style={{
            maxWidth: '68rem',
            margin: '0 auto',
            padding: '0 1.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left col: eyebrow + headline + link */}
          <div>
            <SectionEyebrow label="Who We Work With" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
                marginTop: 0,
                marginBottom: '1.5rem',
              }}
            >
              Built for{' '}
              <span style={{ color: 'var(--accent)' }}>Bay Area business.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            >
              <Link
                href="/partners"
                style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.625rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                Become a partner →
              </Link>
            </motion.div>
          </div>

          {/* Right col: industries grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
              gap: '1px',
              background: 'var(--border)',
              border: '1px solid var(--border)',
            }}
          >
            {industries.map((ind, i) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg)',
                  transition: 'background 0.2s',
                }}
                whileHover={{ backgroundColor: '#0f1d35' }}
              >
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(196,30,58,0.5)',
                  marginBottom: '0.5rem',
                }}>
                  {ind.icon}
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}>
                  {ind.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT — Pattern D: offset grid, vertical label left ───────────── */}
      <section id="about" className="py-16 md:py-36">
        {/* Thin gradient divider top */}
        <div className="mb-16 md:mb-36 -mt-16 md:-mt-36" style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)' }} />

        <div style={{ maxWidth: '68rem', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Offset grid: vertical label | content */}
          <div
            className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-12 mb-8 md:mb-16"
          >
            <div className="hidden md:flex" style={{ paddingTop: '8px', justifyContent: 'center' }}>
              <span style={{
                fontFamily: 'var(--font-fira), monospace',
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: 'var(--text-faint)',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}>
                {about.eyebrow}
              </span>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24" style={{ alignItems: 'start' }}>
                {/* Pull quote */}
                <motion.blockquote
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: EASE }}
                  style={{
                    margin: 0,
                    padding: '0 0 0 1.25rem',
                    borderLeft: '3px solid var(--accent)',
                    fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                  }}
                >
                  {about.pullQuote}
                </motion.blockquote>

                {/* Paragraphs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {about.paragraphs.map((p, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION — Pattern A: centered, no background band ─────────── */}
      <section
        className="py-20 md:py-40"
        style={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        {/* Red glow divider — top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '300px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(196,30,58,0.5), transparent)',
          }}
        />

        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionEyebrow label="Get Started" />

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: 'clamp(1.75rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              marginTop: 0,
            }}
          >
            {cta.headline[0]}
            <br />
            {cta.headline[1]}
            <br />
            <span style={{ color: 'var(--accent)' }}>{cta.headline[2]}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.65,
              maxWidth: '26rem',
              margin: '0 auto 2.5rem',
            }}
          >
            {cta.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
          >
            <MagneticButton variant="primary" href="/contact">
              {cta.button}
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────────────────── */}
      <Footer />
    </>
  )
}
