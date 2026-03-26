'use client'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import SectionEyebrow from '@/components/SectionEyebrow'
import MagneticButton from '@/components/MagneticButton'
import Footer from '@/components/Footer'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const container = {
  maxWidth: '68rem',
  margin: '0 auto',
  padding: '0 1.5rem',
}

const tiers = [
  {
    label: 'Standard',
    monthly: '$200',
    range: '$200 to $400/mo',
    color: 'var(--border-hover)',
    features: [
      'Single ATM placement',
      'Monthly direct deposit',
      'Transaction dashboard',
      'Standard support SLA',
    ],
  },
  {
    label: 'High Traffic',
    monthly: '$400',
    range: '$400 to $600/mo',
    color: '#c41e3a',
    featured: true,
    features: [
      'High-volume location bonus',
      'Weekly reporting',
      'Priority support',
      'Revenue optimization reviews',
    ],
  },
  {
    label: 'Multi-Location',
    monthly: '$600+',
    range: 'Custom revenue structure',
    color: '#1e4fd8',
    features: [
      '2 or more ATMs',
      'Dedicated account manager',
      'Custom revenue splits',
      'Annual partnership audit',
    ],
  },
]

const qualifiers = [
  { label: 'Foot Traffic', detail: '50+ daily visitors minimum' },
  { label: 'Location Type', detail: 'Retail, dining, entertainment, venues' },
  { label: 'Power Access', detail: 'Standard 110V outlet within 10 feet' },
  { label: 'Floor Space', detail: '24 x 24 inches minimum footprint' },
  { label: 'Operating Hours', detail: 'At least 8 hours per day open to public' },
  { label: 'Lease Stability', detail: 'Minimum 12-month remaining lease term' },
]

const testimonials = [
  {
    quote: 'The ATM at our taqueria pays for our POS system subscription every month. Setup took one afternoon.',
    name: 'Miguel R.',
    business: 'La Paloma Taqueria, Mission District',
  },
  {
    quote: 'Three ATMs across our venues. The revenue report lands in my inbox every first of the month, no questions.',
    name: 'Sarah K.',
    business: 'Nightlife Group, SoMa',
  },
  {
    quote: 'I was skeptical about the zero-cost model. Eighteen months in, it is exactly what they said it would be.',
    name: 'David L.',
    business: 'Bi-Coastal Coffee, Castro',
  },
]

// Cursor proximity glow card
function GlowCard({ children }: { children: React.ReactNode }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '4px',
        border: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(15,29,53,0.5)',
        padding: '1.5rem',
        transition: 'border-color 0.3s',
      }}
    >
      {hovered && (
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(196,30,58,0.12) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            left: pos.x,
            top: pos.y,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}

export default function PartnersPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <Nav />

      {/* ─── HERO — Pattern A: centered editorial ─────────────────────────── */}
      <section style={{ paddingTop: '140px', paddingBottom: '80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <SectionEyebrow label="Revenue Partnership" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              marginTop: 0,
            }}
          >
            Your space earns.
            <br />
            <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>We handle everything else.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              maxWidth: '36rem',
              margin: '0 auto 2.5rem',
              lineHeight: 1.65,
            }}
          >
            No upfront costs. No operational burden. Just passive income from your existing foot traffic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          >
            <MagneticButton variant="primary" href="/contact">
              Apply for Partnership
            </MagneticButton>
          </motion.div>
        </div>
        {/* Thin gradient divider bottom */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)', marginTop: '80px' }} />
      </section>

      {/* ─── WHO QUALIFIES — Pattern D: offset grid + GlowCards ──────────── */}
      <section style={{ padding: '8rem 0' }}>
        <div style={container}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              alignItems: 'start',
              gap: '3rem',
              marginBottom: '3.5rem',
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
                Eligibility
              </span>
            </div>
            <div>
              <SectionEyebrow label="Qualification" />
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
                  maxWidth: '32rem',
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                What qualifies a location.
              </motion.h2>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem',
          }}>
            {qualifiers.map((q, i) => (
              <motion.div
                key={q.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              >
                <GlowCard>
                  <div style={{
                    fontFamily: 'var(--font-fira), monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(196,30,58,0.7)',
                    marginBottom: '0.5rem',
                  }}>
                    {q.label}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {q.detail}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Thin gradient divider bottom */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)', marginTop: '8rem' }} />
      </section>

      {/* ─── HOW IT WORKS — Pattern D: offset grid ───────────────────────── */}
      <section style={{ padding: '8rem 0' }}>
        <div style={container}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              alignItems: 'start',
              gap: '3rem',
              marginBottom: '3.5rem',
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
                Process
              </span>
            </div>
            <div>
              <SectionEyebrow label="How It Works" />
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
                  maxWidth: '32rem',
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                Simple. Hands-free. Revenue.
              </motion.h2>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '44rem', marginLeft: 'calc(80px + 3rem)' }}>
            {[
              { step: '01', title: 'Apply in 5 minutes', body: 'Tell us about your location: business type, neighborhood, daily foot traffic estimate. We review and respond within 48 hours.' },
              { step: '02', title: 'We handle installation', body: 'Our team schedules a site visit, handles all permits, and installs the unit. Total disruption to your business: under two hours.' },
              { step: '03', title: 'Collect every month', body: 'Transaction revenue hits your account on the first of each month via direct deposit. No invoices, no chasing, no overhead.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
                style={{ display: 'flex', gap: '2rem', alignItems: 'start' }}
              >
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'rgba(196,30,58,0.25)',
                  lineHeight: 1,
                  flexShrink: 0,
                  width: '3.5rem',
                }}>
                  {s.step}
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {s.title}
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Thin gradient divider bottom */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)', marginTop: '8rem' }} />
      </section>

      {/* ─── TESTIMONIALS — Pattern B: right-anchored ────────────────────── */}
      <section style={{ padding: '8rem 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            maxWidth: '68rem',
            margin: '0 auto',
            padding: '0 1.5rem',
            alignItems: 'start',
          }}
        >
          <div style={{ paddingTop: '0.25rem' }}>
            <SectionEyebrow label="Partner Stories" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
                maxWidth: '32rem',
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              What partners say.
            </motion.h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                style={{
                  margin: 0,
                  padding: '2rem',
                  background: 'rgba(15,29,53,0.5)',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--accent)',
                  borderRadius: '4px',
                }}
              >
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  margin: '0 0 1.25rem',
                  fontStyle: 'italic',
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>{t.name}</div>
                  <div style={{
                    fontFamily: 'var(--font-fira), monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    color: 'var(--text-faint)',
                    textTransform: 'uppercase',
                    marginTop: '0.25rem',
                  }}>{t.business}</div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
        {/* Thin gradient divider bottom */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)', marginTop: '8rem' }} />
      </section>

      {/* ─── REVENUE TIERS — Pattern A: centered, moved to bottom ────────── */}
      <section style={{ padding: '8rem 0' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', marginBottom: '4rem' }}>
          <SectionEyebrow label="Revenue Structure" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              maxWidth: '32rem',
              margin: '0 auto',
              marginTop: 0,
            }}
          >
            Transparent revenue sharing. No hidden splits.
          </motion.h2>
        </div>

        <div style={{ maxWidth: '68rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                style={{
                  padding: '2rem',
                  background: tier.featured ? 'rgba(196,30,58,0.06)' : 'rgba(15,29,53,0.5)',
                  border: `1px solid ${tier.featured ? 'rgba(196,30,58,0.3)' : 'var(--border)'}`,
                  borderRadius: '4px',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: tier.color,
                  marginBottom: '1rem',
                }}>
                  {tier.label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}>
                  {tier.monthly}
                </div>
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.6rem',
                  color: 'var(--text-faint)',
                  letterSpacing: '0.08em',
                  marginBottom: '1.75rem',
                }}>
                  {tier.range}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {tier.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: tier.color,
                        flexShrink: 0,
                      }} />
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — Pattern A: centered ───────────────────────────────────── */}
      <section style={{ padding: '8rem 0', textAlign: 'center', position: 'relative' }}>
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
          <SectionEyebrow label="Apply Now" />
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
            Start earning passive revenue from your location.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            style={{ color: 'var(--text-muted)', maxWidth: '26rem', margin: '0 auto 2.5rem', lineHeight: 1.65 }}
          >
            Approval in 48 hours. Installation within two weeks. First check the month after go-live.
          </motion.p>
          <MagneticButton variant="primary" href="/contact">
            Apply for Partnership
          </MagneticButton>
        </div>
      </section>

      <Footer />
    </>
  )
}
