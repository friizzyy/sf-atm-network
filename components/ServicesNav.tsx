'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { services } from '@/lib/data'

/* ─── Unique SVG visualizations per service ──────────────────────────────── */

function PlacementViz() {
  return (
    <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Map grid */}
      {[40, 80, 120, 160].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="160" stroke="rgba(232,234,240,0.04)" strokeWidth="1" />
      ))}
      {[40, 80, 120].map((y) => (
        <line key={y} x1="0" y1={y} x2="220" y2={y} stroke="rgba(232,234,240,0.04)" strokeWidth="1" />
      ))}

      {/* Signal rings — expanding */}
      <motion.circle cx="110" cy="75" r="8"
        stroke="rgba(196,30,58,0.7)" strokeWidth="1.5" fill="none"
        animate={{ r: [8, 35, 8], opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
      />
      <motion.circle cx="110" cy="75" r="8"
        stroke="rgba(196,30,58,0.4)" strokeWidth="1"
        fill="none"
        animate={{ r: [8, 50, 8], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
      />

      {/* Location pin drop */}
      <motion.g
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Pin body */}
        <motion.path
          d="M110 75 C110 75 92 56 92 46 C92 36.6 100.3 29 110 29 C119.7 29 128 36.6 128 46 C128 56 110 75 110 75Z"
          fill="var(--accent)"
          opacity="0.9"
        />
        <circle cx="110" cy="46" r="6" fill="rgba(15,29,53,0.8)" />
        {/* Shadow drop */}
        <motion.ellipse cx="110" cy="77" rx="6" ry="2"
          fill="rgba(0,0,0,0.4)"
          animate={{ rx: [6, 8, 6], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.g>

      {/* Secondary pins — stagger */}
      {[
        { cx: 55, cy: 110 },
        { cx: 175, cy: 50 },
        { cx: 145, cy: 120 },
      ].map((pos, i) => (
        <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${pos.cx}px ${pos.cy}px` }}
        >
          <path d={`M${pos.cx} ${pos.cy} C${pos.cx} ${pos.cy} ${pos.cx - 8} ${pos.cy - 8} ${pos.cx - 8} ${pos.cy - 13} C${pos.cx - 8} ${pos.cy - 18} ${pos.cx + 8} ${pos.cy - 18} ${pos.cx + 8} ${pos.cy - 13} C${pos.cx + 8} ${pos.cy - 8} ${pos.cx} ${pos.cy} ${pos.cx} ${pos.cy}Z`}
            fill="rgba(30,79,216,0.6)"
          />
          <circle cx={pos.cx} cy={pos.cy - 13} r="3" fill="rgba(15,29,53,0.7)" />
        </motion.g>
      ))}
    </svg>
  )
}

function RevenueViz() {
  return (
    <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Bar grows from bottom */}
      <motion.rect x="90" y="100" width="40" height="0" rx="2"
        fill="rgba(196,30,58,0.3)"
        animate={{ y: [100, 20], height: [0, 80] }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Split into two streams */}
      <motion.path d="M90 20 L60 10" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      />
      <motion.path d="M130 20 L165 10" stroke="rgba(30,79,216,0.8)" strokeWidth="2.5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      />

      {/* Labels */}
      <motion.text x="35" y="8" fill="rgba(196,30,58,0.8)" fontSize="9" fontFamily="Fira Code, monospace"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
      >YOUR SHARE</motion.text>
      <motion.text x="140" y="8" fill="rgba(30,79,216,0.8)" fontSize="9" fontFamily="Fira Code, monospace"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
      >SF ATM</motion.text>

      {/* Monthly dots */}
      {[45, 70, 95, 120, 145, 170, 195].map((x, i) => (
        <motion.circle key={x} cx={x} cy={130 + Math.sin(i * 0.9) * 12}
          r="3" fill="rgba(196,30,58,0.5)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 * i, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      <text x="85" y="155" fill="rgba(232,234,240,0.2)" fontSize="8" fontFamily="Fira Code, monospace">MONTHLY PAYOUTS</text>

      {/* Baseline */}
      <line x1="30" y1="102" x2="195" y2="102" stroke="rgba(232,234,240,0.06)" strokeWidth="1" />
    </svg>
  )
}

function CashViz() {
  return (
    <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Vault */}
      <rect x="20" y="50" width="50" height="60" rx="4" fill="rgba(196,30,58,0.1)" stroke="rgba(196,30,58,0.4)" strokeWidth="1.5" />
      <circle cx="45" cy="80" r="14" stroke="rgba(196,30,58,0.4)" strokeWidth="1.5" fill="none" />
      <circle cx="45" cy="80" r="5" fill="rgba(196,30,58,0.3)" />
      <text x="33" y="116" fill="rgba(232,234,240,0.25)" fontSize="7" fontFamily="Fira Code, monospace">VAULT</text>

      {/* ATM */}
      <rect x="85" y="45" width="50" height="70" rx="4" fill="rgba(15,29,53,1)" stroke="rgba(30,79,216,0.5)" strokeWidth="1.5" />
      <rect x="92" y="52" width="36" height="24" rx="2" fill="rgba(30,79,216,0.15)" stroke="rgba(30,79,216,0.3)" strokeWidth="1" />
      <rect x="92" y="82" width="36" height="6" rx="1" fill="rgba(30,79,216,0.2)" />
      <rect x="100" y="93" width="20" height="3" rx="1" fill="rgba(196,30,58,0.3)" />
      <text x="93" y="125" fill="rgba(232,234,240,0.25)" fontSize="7" fontFamily="Fira Code, monospace">ATM</text>

      {/* Business */}
      <rect x="150" y="50" width="50" height="60" rx="4" fill="rgba(40,200,64,0.08)" stroke="rgba(40,200,64,0.3)" strokeWidth="1.5" />
      <path d="M165 90 L175 72 L185 90" stroke="rgba(40,200,64,0.5)" strokeWidth="1.5" fill="none" />
      <text x="153" y="116" fill="rgba(232,234,240,0.25)" fontSize="7" fontFamily="Fira Code, monospace">REVENUE</text>

      {/* Animated flow arrows */}
      <motion.path d="M72 80 L83 80" stroke="rgba(196,30,58,0.8)" strokeWidth="1.5" strokeDasharray="4 3"
        animate={{ strokeDashoffset: [0, -14] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        strokeLinecap="round"
      />
      <motion.path d="M137 80 L148 80" stroke="rgba(40,200,64,0.8)" strokeWidth="1.5" strokeDasharray="4 3"
        animate={{ strokeDashoffset: [0, -14] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear', delay: 0.3 }}
        strokeLinecap="round"
      />

      {/* Arrow heads */}
      <motion.polygon points="82,76 87,80 82,84" fill="rgba(196,30,58,0.8)" animate={{ x: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
      <motion.polygon points="147,76 152,80 147,84" fill="rgba(40,200,64,0.8)" animate={{ x: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }} />
    </svg>
  )
}

function MonitoringViz() {
  const dots = Array.from({ length: 24 }, (_, i) => ({
    x: 25 + (i % 8) * 25,
    y: 30 + Math.floor(i / 8) * 30,
    delay: i * 0.08,
  }))

  return (
    <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {dots.map((d, i) => (
        <motion.circle key={i} cx={d.x} cy={d.y} r="5"
          fill="rgba(40,200,64,0.7)"
          animate={{
            opacity: [0.7, 1, 0.7],
            r: [4, 5.5, 4],
          }}
          transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: d.delay }}
        />
      ))}

      {/* One red alert dot */}
      <motion.circle cx="75" cy="90" r="5"
        fill="rgba(196,30,58,0.9)"
        animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ transformOrigin: '75px 90px' }}
      />

      {/* Status line */}
      <line x1="20" y1="130" x2="200" y2="130" stroke="rgba(232,234,240,0.06)" strokeWidth="1" />
      <text x="20" y="148" fill="rgba(40,200,64,0.5)" fontSize="8" fontFamily="Fira Code, monospace">23 ONLINE</text>
      <text x="90" y="148" fill="rgba(196,30,58,0.5)" fontSize="8" fontFamily="Fira Code, monospace">1 ALERT</text>
      <text x="150" y="148" fill="rgba(232,234,240,0.2)" fontSize="8" fontFamily="Fira Code, monospace">99.7% UP</text>
    </svg>
  )
}

function EventViz() {
  const calDays = [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19]
  const eventDays = [3, 10, 17]

  return (
    <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Calendar grid */}
      <rect x="20" y="20" width="180" height="125" rx="6" fill="rgba(15,29,53,0.8)" stroke="rgba(232,234,240,0.07)" strokeWidth="1" />
      <rect x="20" y="20" width="180" height="24" rx="6" fill="rgba(30,79,216,0.15)" />
      <text x="95" y="36" fill="rgba(232,234,240,0.5)" fontSize="9" fontFamily="Fira Code, monospace" textAnchor="middle">MARCH 2026</text>

      {calDays.map((day, i) => {
        const col = i % 5
        const row = Math.floor(i / 5)
        const x = 35 + col * 32
        const y = 60 + row * 28
        const isEvent = eventDays.includes(day)

        return (
          <motion.g key={day}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          >
            {isEvent && (
              <motion.circle cx={x} cy={y} r="12"
                fill="rgba(196,30,58,0.25)"
                stroke="rgba(196,30,58,0.7)"
                strokeWidth="1.5"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: eventDays.indexOf(day) * 0.5 }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
            )}
            <text x={x} y={y + 4} fill={isEvent ? '#c41e3a' : 'rgba(232,234,240,0.3)'}
              fontSize={isEvent ? '10' : '9'} fontFamily="Fira Code, monospace" textAnchor="middle"
              fontWeight={isEvent ? '700' : '400'}
            >
              {day}
            </text>
          </motion.g>
        )
      })}
    </svg>
  )
}

function SupportViz() {
  const nodes = [
    { id: 'NOC', x: 110, y: 80, main: true },
    { id: 'SF-01', x: 50, y: 35 },
    { id: 'SF-02', x: 170, y: 35 },
    { id: 'SF-03', x: 35, y: 120 },
    { id: 'SF-04', x: 185, y: 120 },
    { id: 'SF-05', x: 110, y: 145 },
  ]

  return (
    <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Connection lines */}
      {nodes.slice(1).map((n, i) => (
        <motion.line key={n.id}
          x1="110" y1="80" x2={n.x} y2={n.y}
          stroke="rgba(40,200,64,0.4)" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
        />
      ))}

      {/* Outer nodes — turn green sequentially */}
      {nodes.slice(1).map((n, i) => (
        <motion.g key={n.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 + 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        >
          <circle cx={n.x} cy={n.y} r="12" fill="rgba(40,200,64,0.12)" stroke="rgba(40,200,64,0.5)" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 4} fill="rgba(40,200,64,0.8)" fontSize="7" fontFamily="Fira Code, monospace" textAnchor="middle">
            {n.id}
          </text>
        </motion.g>
      ))}

      {/* Center NOC */}
      <motion.circle cx="110" cy="80" r="20"
        fill="rgba(196,30,58,0.1)" stroke="rgba(196,30,58,0.6)" strokeWidth="2"
        animate={{ boxShadow: ['0 0 0 0 rgba(196,30,58,0)', '0 0 0 8px rgba(196,30,58,0)'] }}
      />
      <text x="110" y="84" fill="rgba(196,30,58,0.9)" fontSize="8" fontFamily="Fira Code, monospace" textAnchor="middle" fontWeight="700">NOC</text>
    </svg>
  )
}

const VIZ_MAP: Record<string, React.FC> = {
  placement: PlacementViz,
  revenue: RevenueViz,
  cash: CashViz,
  monitoring: MonitoringViz,
  events: EventViz,
  support: SupportViz,
}

/* ─── Main component ─────────────────────────────────────────────────────────── */
export default function ServicesNav() {
  const [active, setActive] = useState(services[0].id)
  const current = services.find((s) => s.id === active)!
  const Viz = VIZ_MAP[active]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">
      {/* Mobile: horizontal scrolling tabs */}
      <div className="lg:hidden" style={{ marginBottom: '1.5rem' }}>
        <div
          className="mobile-scroll-hide"
          style={{
            display: 'flex',
            gap: 0,
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderBottom: '1px solid var(--border)',
            scrollbarWidth: 'none',
          }}
        >
          {services.map((service) => {
            const isActive = service.id === active
            return (
              <button
                key={service.id}
                onClick={() => setActive(service.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: `2px solid ${isActive ? service.color : 'transparent'}`,
                  marginBottom: '-1px',
                  padding: '0.875rem 1.25rem',
                  fontFamily: 'var(--font-fira), monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: isActive ? service.color : 'var(--text-faint)',
                  cursor: 'pointer',
                  transition: 'color 0.2s, border-color 0.2s',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  minHeight: '44px',
                }}
              >
                {service.title}
              </button>
            )
          })}
        </div>
      </div>

      {/* Desktop: sidebar tabs */}
      <div className="hidden lg:flex lg:col-span-4 flex-col gap-1">
        {services.map((service) => {
          const isActive = service.id === active
          return (
            <button
              key={service.id}
              onClick={() => setActive(service.id)}
              className="relative w-full text-left px-5 py-4 transition-all focus:outline-none group"
              style={{
                background: isActive ? 'rgba(255,255,255,0.03)' : 'transparent',
                border: isActive ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
                borderRadius: '4px',
              }}
            >
              {/* 3px accent bar */}
              <motion.div
                className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
                style={{ background: service.color }}
                animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0.3 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="flex items-center gap-3 pl-3">
                <span
                  style={{
                    fontFamily: 'var(--font-fira), monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    color: isActive ? service.color : 'rgba(232,234,240,0.25)',
                    transition: 'color 0.2s',
                  }}
                >
                  {service.number}
                </span>
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                    transition: 'color 0.2s',
                  }}
                >
                  {service.title}
                </span>
                <motion.div
                  className="ml-auto"
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={14} style={{ color: service.color }} />
                </motion.div>
              </div>

              {/* Sub-label on active */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      paddingLeft: '2.5rem',
                      paddingTop: '0.25rem',
                      fontFamily: 'var(--font-fira), monospace',
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(232,234,240,0.3)',
                    }}
                  >
                    {service.headline}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )
        })}
      </div>

      {/* Right: content panel */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Glass chrome with SVG viz */}
            <div className="glass-chrome">
              <div className="glass-chrome-bar">
                <div className="macos-dots">
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#febc2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-fira), monospace', fontSize: '0.625rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(232,234,240,0.3)' }}>
                  {current.title.toUpperCase()}
                </span>
                <div className="live-badge">
                  <div className="live-dot" />
                  <span>ACTIVE</span>
                </div>
              </div>
              <div className="p-6" style={{ height: '200px' }}>
                {Viz && <Viz />}
              </div>
            </div>

            {/* Description */}
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
              {current.description}
            </p>

            {/* Deliverables */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.deliverables.map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 px-4 py-3 group/item"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.03)',
                    borderRadius: '3px',
                    transition: 'border-color 0.2s, background 0.2s',
                    cursor: 'default',
                  }}
                  whileHover={{
                    borderColor: 'rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: current.color,
                      flexShrink: 0,
                      transition: 'transform 0.2s',
                    }}
                  />
                  <span style={{ fontSize: '0.8125rem', color: 'rgba(232,234,240,0.6)' }}>{d}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
