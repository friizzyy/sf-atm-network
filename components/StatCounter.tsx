'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  mono: string
  decimal?: boolean
}

export default function StatCounter({ value, suffix = '', prefix = '', label, mono, decimal = false }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isInView) return

    const duration = 1800
    startRef.current = null

    const tick = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp
      const elapsed = timestamp - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      // Cubic ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(eased * value)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isInView, value])

  const display = decimal
    ? current.toFixed(1)
    : Math.round(current).toString()

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div
        className="leading-none"
        style={{
          fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
          fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}
      >
        {prefix}
        {display}
        <span style={{ color: 'var(--accent)', fontSize: '0.7em' }}>{suffix}</span>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-fira), monospace',
          fontSize: '0.6rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--text-faint)',
        }}
      >
        {mono}
      </div>
      <div
        style={{
          fontSize: '0.875rem',
          color: 'var(--text-muted)',
          marginTop: '0.25rem',
        }}
      >
        {label}
      </div>
    </div>
  )
}
