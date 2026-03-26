import type { Metadata } from 'next'
import { DM_Sans, Inter, Fira_Code } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SF ATM Network: Premium ATM Placement in San Francisco',
  description: 'Zero upfront cost ATM placement with revenue sharing across San Francisco neighborhoods. 200+ machines, 99.7% uptime, 24/7 monitoring.',
  keywords: 'ATM placement San Francisco, ATM revenue sharing SF, ATM network Bay Area',
  openGraph: {
    title: 'SF ATM Network',
    description: 'Your revenue, running 24/7.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${firaCode.variable}`}>
      <body
        style={{
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
        }}
      >
        {/* Global ambient background — fixed layer, visible on every page */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          {/* Slow red orb — top left */}
          <div
            style={{
              position: 'absolute',
              width: '800px',
              height: '800px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(196,30,58,0.07) 0%, transparent 65%)',
              animation: 'drift1 22s ease-in-out infinite alternate',
              top: '-20%',
              left: '-15%',
            }}
          />
          {/* Slow blue orb — bottom right */}
          <div
            style={{
              position: 'absolute',
              width: '700px',
              height: '700px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(30,79,216,0.06) 0%, transparent 65%)',
              animation: 'drift2 28s ease-in-out infinite alternate',
              bottom: '-15%',
              right: '-10%',
            }}
          />
          {/* Faint center accent */}
          <div
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(196,30,58,0.04) 0%, transparent 70%)',
              animation: 'drift3 35s ease-in-out infinite alternate',
              top: '40%',
              left: '40%',
            }}
          />
        </div>

        {/* Main content — sits above fixed ambient layer */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
