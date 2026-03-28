'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

// Animated headline component — character-by-character reveal
function AnimatedHeadline({ text, accent }: { text: string; accent?: string }) {
  const words = text.split(' ')
  return (
    <h1
      style={{
        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
        fontSize: 'clamp(2.25rem, 9vw, 8rem)',
        fontWeight: 800,
        lineHeight: 0.95,
        letterSpacing: '-0.05em',
        color: 'var(--text-primary)',
        marginBottom: '1.5rem',
        marginTop: 0,
        overflow: 'hidden',
      }}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', marginRight: wi < words.length - 1 ? '0.35em' : 0 }}>
          {word.split('').map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1 + (wi * word.length + ci) * 0.03,
                ease: EASE,
              }}
              style={{
                display: 'inline-block',
                color: accent && word === accent ? 'var(--accent)' : 'inherit',
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  )
}

// Animated counter for hero stat
function HeroCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const start = Date.now()
          const tick = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
            else setCount(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      {count}{suffix}
    </div>
  )
}

// Tab navigator data
const eventTabs = [
  {
    id: 'festival',
    label: 'Festival',
    metric: 'Up to 5,000 attendees',
    metricLabel: 'served per event',
    features: [
      'Multi-unit deployments across grounds',
      'On-site armored cash replenishment',
      '4G LTE failover, generator-ready',
    ],
    visual: { icon: '⬡', color: '#c41e3a', pattern: 'grid' },
    description: 'High-volume outdoor events where card readers fail and lines get long. We bring multiple units, manage cash replenishment on-site, and keep attendees covered all day.',
  },
  {
    id: 'corporate',
    label: 'Corporate',
    metric: '24hr',
    metricLabel: 'booking turnaround',
    features: [
      'Permitting and venue coordination',
      'Branded ATM wraps available',
      'Post-event revenue breakdown report',
    ],
    visual: { icon: '◈', color: '#1e4fd8', pattern: 'lines' },
    description: 'Corporate gatherings, fundraisers, gallery openings. We handle permitting and power setup so your event team focuses on what matters.',
  },
  {
    id: 'nightlife',
    label: 'Nightlife',
    metric: '$0',
    metricLabel: 'upfront to your venue',
    features: [
      'Positioned at door and bar entry points',
      'Surge cash loading on busy nights',
      'Nightly transaction summaries',
    ],
    visual: { icon: '◉', color: '#c41e3a', pattern: 'dots' },
    description: 'Cash-heavy nights in SoMa, Tenderloin, and Mission clubs. We position units near the door and bar entry for maximum transaction volume.',
  },
  {
    id: 'popup',
    label: 'Pop-Up',
    metric: '48hr',
    metricLabel: 'deployment ready',
    features: [
      'Standalone units, no fixed infrastructure',
      'Power and connectivity included',
      'Recurring series contracts available',
    ],
    visual: { icon: '◇', color: '#28c840', pattern: 'sparse' },
    description: 'Temporary storefronts, farmers markets, and weekly pop-ups. We bring the ATM and connectivity. You bring the product.',
  },
]

const features = [
  { label: 'Portable ATMs', detail: 'Stand-alone units that work anywhere with power access' },
  { label: 'On-Site Cash Loading', detail: 'Cash replenishment handled during multi-day events' },
  { label: 'Power + Connectivity', detail: 'Generator hookup or facility power, 4G LTE backup' },
  { label: 'Event Staffing', detail: 'Trained operators available for high-volume events' },
  { label: 'Post-Event Report', detail: 'Full transaction summary within 24 hours of close' },
  { label: 'Fast Setup', detail: 'Units on-site within 48 hours of confirmed booking' },
  { label: 'Permitting Help', detail: 'We handle venue coordination and required permits' },
  { label: 'Recurring Contracts', detail: 'Volume pricing for weekly markets and seasonal series' },
]

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('festival')
  const activeData = eventTabs.find((t) => t.id === activeTab)!

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <Nav />

      {/* Animated Hero — character-by-character with live counter */}
      <section
        className="pt-28 md:pt-36"
        style={{
          paddingBottom: '0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient background pulse */}
        <div style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}>
          <motion.div
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(196,30,58,0.06) 0%, transparent 70%)',
              top: '-100px',
              right: '-100px',
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div style={{ ...container, position: 'relative', zIndex: 1, paddingBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <SectionEyebrow label="Event ATM Deployment" />
          </motion.div>

          <AnimatedHeadline text="Every event is a cash moment." accent="cash" />

          {/* Sub-content pushed to right half — Pattern B split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12" style={{ marginTop: '1rem' }}>
            {/* Left: live counter stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
                background: 'rgba(196,30,58,0.06)',
                border: '1px solid rgba(196,30,58,0.2)',
                borderRadius: '4px',
                alignSelf: 'start',
                width: 'fit-content',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: 'var(--accent)',
                lineHeight: 1,
              }}>
                <HeroCounter target={200} suffix="+" />
              </span>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  events served
                </div>
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.55rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-faint)',
                  marginTop: '2px',
                }}>
                  across the Bay Area
                </div>
              </div>
            </motion.div>

            {/* Right: description + CTA */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.65,
                  marginBottom: '2rem',
                  marginTop: 0,
                }}
              >
                SF ATM brings portable ATMs to festivals, nightlife venues, markets, and
                pop-ups across the Bay Area. We handle setup, cash, and teardown.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
              >
                <MagneticButton variant="primary" href="/contact">
                  Request Event ATM
                </MagneticButton>
                <MagneticButton variant="ghost" href="/services">
                  See All Services
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Thin gradient divider after hero */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)' }} />

      {/* Event types — horizontal tab navigator */}
      <section className="section-pad">
        <div style={container}>
          <SectionEyebrow label="Event Types" />
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
              marginBottom: '3rem',
            }}
          >
            We cover every format.
          </motion.h2>

          {/* Underline tab nav */}
          <div
            className="mobile-scroll-hide"
            style={{
              display: 'flex',
              gap: 0,
              borderBottom: '1px solid var(--border)',
              marginBottom: '2rem',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
            }}
          >
            {eventTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: `2px solid ${activeTab === tab.id ? 'var(--accent)' : 'transparent'}`,
                  marginBottom: '-1px',
                  padding: '0.875rem 1.25rem',
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.625rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: activeTab === tab.id ? 'var(--accent)' : 'var(--text-faint)',
                  cursor: 'pointer',
                  transition: 'color 0.2s, border-color 0.2s',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  minHeight: '44px',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
              style={{
                alignItems: 'center',
              }}
            >
              {/* Left: metric + features */}
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                      color: activeData.visual.color,
                      lineHeight: 1,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {activeData.metric}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-fira), monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-faint)',
                  }}>
                    {activeData.metricLabel}
                  </div>
                </div>

                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}>
                  {activeData.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {activeData.features.map((feat, i) => (
                    <motion.div
                      key={feat}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3, ease: EASE }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                    >
                      <div style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: activeData.visual.color,
                        flexShrink: 0,
                      }} />
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 450 }}>
                        {feat}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: visual element */}
              <div style={{
                height: 'clamp(200px, 40vw, 300px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Animated background pattern */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(8, 1fr)',
                  gridTemplateRows: 'repeat(6, 1fr)',
                  gap: '1px',
                  opacity: 0.04,
                  padding: '1rem',
                }}>
                  {Array.from({ length: 48 }).map((_, i) => (
                    <motion.div
                      key={i}
                      style={{
                        background: activeData.visual.color,
                        borderRadius: '2px',
                      }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 2 + (i % 4),
                        delay: i * 0.05,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
                {/* Center icon */}
                <motion.div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    fontFamily: 'var(--font-fira), monospace',
                    fontSize: '5rem',
                    color: activeData.visual.color,
                    opacity: 0.3,
                    lineHeight: 1,
                  }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {activeData.visual.icon}
                </motion.div>
                {/* Label */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: activeData.visual.color,
                  opacity: 0.6,
                }}>
                  {activeData.label} ATM
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Complete infrastructure — horizontal scroll cards */}
      <section className="section-pad" style={{ position: 'relative' }}>
        {/* Thin gradient divider top */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)', marginBottom: '8rem', marginTop: '-8rem' }} />
        <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
          <div style={{ padding: '0 1.5rem', marginBottom: '3rem' }}>
            <SectionEyebrow label="What is Included" />
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
              Everything included, zero overhead.
            </motion.h2>
          </div>

          {/* Horizontal scroll row */}
          <div
            className="mobile-scroll-hide"
            style={{
              display: 'flex',
              gap: '1px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: '1rem',
              paddingLeft: '1.5rem',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            } as React.CSSProperties}
          >
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                style={{
                  flexShrink: 0,
                  width: 'clamp(200px, 55vw, 220px)',
                  scrollSnapAlign: 'start',
                  padding: '1.5rem 1.25rem',
                  background: 'var(--bg)',
                  borderRight: '1px solid var(--border)',
                  position: 'relative',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'rgba(196,30,58,0.15)',
                  lineHeight: 1,
                  marginBottom: '1.25rem',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(196,30,58,0.7)',
                  marginBottom: '0.5rem',
                }}>
                  {f.label}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {f.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="section-pad">
        <div style={container}>
          <SectionEyebrow label="How to Book" />
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
              marginBottom: '4rem',
            }}
          >
            Three steps to your first deployment.
          </motion.h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '44rem' }}>
            {[
              { step: '1', title: 'Submit your event details', body: 'Tell us the date, location, expected attendance, and type of event. We respond within 24 hours.' },
              { step: '2', title: 'Review the proposal', body: 'We send unit count, placement recommendations, and pricing. You approve and sign a simple event agreement.' },
              { step: '3', title: 'We handle everything else', body: 'Equipment delivery, setup, cash loading, monitoring during the event, and full teardown. You receive a post-event revenue report.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
                style={{ display: 'flex', gap: '1.25rem', alignItems: 'start' }}
              >
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'rgba(196,30,58,0.25)',
                  lineHeight: 1,
                  flexShrink: 0,
                  width: '2.5rem',
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

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            style={{ marginTop: '4rem' }}
          >
            <MagneticButton variant="primary" href="/contact">
              Request Event ATM
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
