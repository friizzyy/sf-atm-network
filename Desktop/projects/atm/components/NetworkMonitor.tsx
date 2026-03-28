'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { networkLocations } from '@/lib/data'

// Animate tx counts — increments slowly to simulate live data
function LiveCount({ base }: { base: number }) {
  const [count, setCount] = useState(base)
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) setCount(c => c + 1) // ~40% chance per tick
    }, 4000 + Math.random() * 6000)
    return () => clearInterval(interval)
  }, [])
  return <>{count.toLocaleString()}</>
}

function StatusDot({ status }: { status: string }) {
  const color = status === 'online' ? '#28c840' : status === 'maintenance' ? '#febc2e' : '#ff5f57'
  return (
    <motion.span
      style={{
        display: 'inline-block',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: color,
        boxShadow: status === 'online' ? `0 0 0 0 ${color}` : 'none',
      }}
      animate={status === 'online' ? {
        boxShadow: [`0 0 0 0 ${color}66`, `0 0 0 6px ${color}00`, `0 0 0 0 ${color}66`],
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
  )
}

export default function NetworkMonitor() {
  return (
    <div className="glass-chrome">
      {/* macOS chrome bar */}
      <div className="glass-chrome-bar">
        <div className="macos-dots">
          <span style={{ background: '#ff5f57', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ background: '#febc2e', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ background: '#28c840', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }} />
        </div>
        <span
          style={{
            fontFamily: 'var(--font-fira), monospace',
            fontSize: '0.625rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(232,234,240,0.3)',
          }}
        >
          SF ATM: LIVE MONITOR
        </span>
        <div className="live-badge">
          <div className="live-dot" />
          <span>LIVE</span>
        </div>
      </div>

      {/* Desktop table view */}
      <div className="network-monitor-table" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        {/* Table header */}
        <div
          className="grid px-4 md:px-6 py-3"
          style={{
            gridTemplateColumns: '1fr 5rem 8rem 6rem 4rem',
            gap: '1rem',
            borderBottom: '1px solid rgba(232,234,240,0.05)',
            minWidth: '540px',
          }}
        >
          {['LOCATION', 'STATUS', 'LAST TX', 'TX COUNT', 'CASH'].map((h) => (
            <span
              key={h}
              style={{
                fontFamily: 'var(--font-fira), monospace',
                fontSize: '0.55rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(232,234,240,0.25)',
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        <div className="px-0">
          {networkLocations.map((loc, i) => (
            <motion.div
              key={loc.id}
              className="grid px-4 md:px-6 py-4 group"
              style={{
                gridTemplateColumns: '1fr 5rem 8rem 6rem 4rem',
                gap: '1rem',
                borderBottom: '1px solid rgba(232,234,240,0.04)',
                transition: 'background 0.2s',
                minWidth: '540px',
              }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.015)' }}
            >
              {/* Location */}
              <div className="flex flex-col gap-0.5">
                <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 450 }}>
                  {loc.name}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-fira), monospace',
                    fontSize: '0.55rem',
                    letterSpacing: '0.1em',
                    color: 'rgba(232,234,240,0.25)',
                    textTransform: 'uppercase',
                  }}
                >
                  {loc.id}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <StatusDot status={loc.status} />
                <span
                  style={{
                    fontFamily: 'var(--font-fira), monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: loc.status === 'online' ? 'rgba(40,200,64,0.7)' : 'rgba(254,188,46,0.7)',
                  }}
                >
                  {loc.status}
                </span>
              </div>

              {/* Last TX */}
              <span
                style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  alignSelf: 'center',
                }}
              >
                {loc.lastTx}
              </span>

              {/* TX Count */}
              <span
                style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.8125rem',
                  color: 'var(--text-primary)',
                  alignSelf: 'center',
                }}
              >
                <LiveCount base={loc.txCount} />
              </span>

              {/* Cash level */}
              <div className="flex items-center gap-1.5 self-center">
                <div
                  style={{
                    width: '36px',
                    height: '4px',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    style={{
                      height: '100%',
                      borderRadius: '2px',
                      background: loc.cash > 50 ? '#28c840' : loc.cash > 25 ? '#febc2e' : '#ff5f57',
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${loc.cash}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-fira), monospace',
                    fontSize: '0.6rem',
                    color: 'var(--text-faint)',
                  }}
                >
                  {loc.cash}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile card view — stacked cards instead of table */}
      <div className="network-monitor-cards" style={{ display: 'none', flexDirection: 'column', gap: '1px' }}>
        {networkLocations.map((loc, i) => (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '1rem 1rem',
              borderBottom: '1px solid rgba(232,234,240,0.04)',
            }}
          >
            {/* Top row: name + status */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  {loc.name}
                </div>
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.5rem',
                  letterSpacing: '0.1em',
                  color: 'rgba(232,234,240,0.25)',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}>
                  {loc.id}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <StatusDot status={loc.status} />
                <span style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.55rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: loc.status === 'online' ? 'rgba(40,200,64,0.7)' : 'rgba(254,188,46,0.7)',
                }}>
                  {loc.status}
                </span>
              </div>
            </div>

            {/* Bottom row: stats in a row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.5rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(232,234,240,0.25)',
                  marginBottom: '2px',
                }}>LAST TX</div>
                <span style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                }}>
                  {loc.lastTx}
                </span>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.5rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(232,234,240,0.25)',
                  marginBottom: '2px',
                }}>TX COUNT</div>
                <span style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.75rem',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                }}>
                  <LiveCount base={loc.txCount} />
                </span>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.5rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(232,234,240,0.25)',
                  marginBottom: '4px',
                }}>CASH</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <div style={{
                    width: '40px',
                    height: '4px',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}>
                    <motion.div
                      style={{
                        height: '100%',
                        borderRadius: '2px',
                        background: loc.cash > 50 ? '#28c840' : loc.cash > 25 ? '#febc2e' : '#ff5f57',
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${loc.cash}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-fira), monospace',
                    fontSize: '0.55rem',
                    color: 'var(--text-faint)',
                  }}>
                    {loc.cash}%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
