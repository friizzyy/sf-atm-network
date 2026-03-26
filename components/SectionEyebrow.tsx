'use client'
import { motion } from 'framer-motion'

interface SectionEyebrowProps {
  label: string
  className?: string
}

export default function SectionEyebrow({ label, className = '' }: SectionEyebrowProps) {
  return (
    <motion.span
      className={`eyebrow ${className}`}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {label}
    </motion.span>
  )
}
