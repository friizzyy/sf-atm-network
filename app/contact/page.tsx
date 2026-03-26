'use client'
import { useState, useEffect } from 'react'
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

type InquiryType = 'partner' | 'event' | 'support' | 'other'

const inquiryOptions: { value: InquiryType; label: string }[] = [
  { value: 'partner', label: 'ATM Partner Program' },
  { value: 'event', label: 'Event Deployment' },
  { value: 'support', label: 'Existing Partner Support' },
  { value: 'other', label: 'Other Inquiry' },
]

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<InquiryType>('partner')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
    eventDate: '',
    location: '',
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission placeholder
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    padding: '0.875rem 1rem',
    color: 'var(--text-primary)',
    fontSize: '0.9375rem',
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-fira), monospace',
    fontSize: '0.6rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--text-faint)',
    marginBottom: '0.5rem',
  }

  return (
    <>
      <Nav />

      <section
        className="pt-28 md:pt-36 pb-12 md:pb-20"
        style={{
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={container}>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <SectionEyebrow label="Contact SF ATM Network" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
              marginTop: 0,
              maxWidth: '42rem',
            }}
          >
            Start the{' '}
            <span style={{ color: 'var(--accent)' }}>conversation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              maxWidth: '32rem',
            }}
          >
            Partner applications, event bookings, and support requests all come through here.
            We respond within one business day.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-32">
        <div style={container}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24" style={{
            alignItems: 'start',
          }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            >
              {submitted ? (
                <div
                  className="glass-chrome"
                  style={{ padding: '3rem', textAlign: 'center' }}
                >
                  <div style={{
                    fontFamily: 'var(--font-fira), monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(40,200,64,0.8)',
                    marginBottom: '1rem',
                  }}>
                    Message Received
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                    marginTop: 0,
                  }}>
                    We will be in touch.
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.65, margin: 0 }}>
                    Expect a response from our team within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Inquiry type selector */}
                  <div>
                    <label style={labelStyle}>Inquiry Type</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      {inquiryOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setInquiryType(opt.value)}
                          style={{
                            padding: '0.75rem 1rem',
                            background: inquiryType === opt.value ? 'rgba(196,30,58,0.1)' : 'rgba(255,255,255,0.02)',
                            border: `1px solid ${inquiryType === opt.value ? 'rgba(196,30,58,0.4)' : 'var(--border)'}`,
                            borderRadius: '4px',
                            color: inquiryType === opt.value ? 'var(--accent)' : 'var(--text-muted)',
                            fontSize: '0.8125rem',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.2s',
                            fontFamily: 'var(--font-inter), system-ui, sans-serif',
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(196,30,58,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(196,30,58,0.5)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                        placeholder="jane@yourbusiness.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Business Name</label>
                    <input
                      type="text"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(196,30,58,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                      placeholder="Your business or venue name"
                    />
                  </div>

                  {(inquiryType === 'event') && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label style={labelStyle}>Event Date</label>
                        <input
                          type="date"
                          value={form.eventDate}
                          onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                          style={{ ...inputStyle, colorScheme: 'dark' }}
                          onFocus={(e) => (e.target.style.borderColor = 'rgba(196,30,58,0.5)')}
                          onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Event Location</label>
                        <input
                          type="text"
                          value={form.location}
                          onChange={(e) => setForm({ ...form, location: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = 'rgba(196,30,58,0.5)')}
                          onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                          placeholder="Venue or address"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(196,30,58,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                      placeholder={
                        inquiryType === 'partner'
                          ? 'Tell us about your location: type of business, neighborhood, approximate daily foot traffic...'
                          : inquiryType === 'event'
                          ? 'Tell us about your event: format, expected attendance, how many ATMs you need...'
                          : 'Describe your question or issue...'
                      }
                    />
                  </div>

                  <div>
                    <MagneticButton variant="primary" onClick={() => {}}>
                      Send Message
                    </MagneticButton>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
            >
              <div>
                <div style={labelStyle}>Main Office</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.7, margin: 0 }}>
                  535 Mission Street, Suite 1400<br />
                  San Francisco, CA 94105
                </p>
              </div>

              <div>
                <div style={labelStyle}>Email</div>
                <a
                  href="mailto:hello@sfatmnetwork.com"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                >
                  hello@sfatmnetwork.com
                </a>
              </div>

              <div>
                <div style={labelStyle}>Partner Inquiries</div>
                <a
                  href="mailto:partners@sfatmnetwork.com"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                >
                  partners@sfatmnetwork.com
                </a>
              </div>

              <div>
                <div style={labelStyle}>24/7 Support</div>
                <a
                  href="tel:+14155550100"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                >
                  +1 (415) 555-0100
                </a>
              </div>

              <div
                className="glass-chrome"
                style={{ padding: '1.5rem' }}
              >
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(40,200,64,0.7)',
                  marginBottom: '0.75rem',
                }}>
                  Response SLA
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { label: 'Partner Applications', time: 'Within 48 hours' },
                    { label: 'Event Bookings', time: 'Within 24 hours' },
                    { label: 'Technical Support', time: 'Within 4 hours' },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{item.label}</span>
                      <span style={{
                        fontFamily: 'var(--font-fira), monospace',
                        fontSize: '0.6rem',
                        letterSpacing: '0.08em',
                        color: 'rgba(40,200,64,0.7)',
                      }}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
