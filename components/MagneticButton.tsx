'use client'
import { useRef, useState, useCallback, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'ghost'
  onClick?: () => void
  href?: string
}

export default function MagneticButton({
  children,
  className = '',
  variant = 'primary',
  onClick,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setGlowPos({ x, y })
  }, [isTouchDevice])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setGlowPos({ x: 50, y: 50 })
  }, [])

  const baseStyle =
    variant === 'primary'
      ? {
          background: 'var(--accent)',
          color: '#fff',
          border: '1px solid transparent',
        }
      : {
          background: 'transparent',
          color: 'var(--text-muted)',
          border: '1px solid var(--border-hover)',
        }

  const hoverStyle =
    variant === 'primary'
      ? {
          background: '#a51830',
          boxShadow: '0 8px 30px rgba(196, 30, 58, 0.35)',
        }
      : {
          color: 'var(--text-primary)',
          borderColor: 'var(--text-faint)',
          background: 'rgba(255,255,255,0.03)',
        }

  const inner = (
    <motion.div
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden', minHeight: '48px', ...baseStyle }}
      animate={isHovered && !isTouchDevice ? hoverStyle : baseStyle}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={`
        inline-flex items-center justify-center cursor-pointer select-none
        font-[family-name:var(--font-mono)]
        text-[11px] tracking-[0.18em] uppercase
        px-6 py-3.5 md:px-8 md:py-4 rounded-none
        transition-colors
        ${className}
      `}
      onClick={onClick}
    >
      {/* Radial glow that follows cursor — only on pointer devices */}
      {isHovered && !isTouchDevice && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.18) 0%, transparent 65%)`,
            borderRadius: 'inherit',
          }}
        />
      )}
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </motion.div>
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto')
    if (isExternal) return <a href={href} style={{ display: 'inline-block', textDecoration: 'none' }}>{inner}</a>
    return <Link href={href} style={{ display: 'inline-block', textDecoration: 'none' }}>{inner}</Link>
  }

  return inner
}
