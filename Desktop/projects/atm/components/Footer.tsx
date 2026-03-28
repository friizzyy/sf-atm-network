import Link from 'next/link'

const GoldenGateSVG = () => (
  <svg width="24" height="18" viewBox="0 0 28 20" fill="none">
    <path d="M4 14 Q14 2 24 14" stroke="#c41e3a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <line x1="4" y1="14" x2="4" y2="20" stroke="#c41e3a" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="14" x2="24" y2="20" stroke="#c41e3a" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="0" y1="17" x2="28" y2="17" stroke="#e8eaf0" strokeWidth="1.5" opacity="0.4"/>
    <line x1="11" y1="10" x2="11" y2="20" stroke="#c41e3a" strokeWidth="1.5" opacity="0.6"/>
    <line x1="17" y1="10" x2="17" y2="20" stroke="#c41e3a" strokeWidth="1.5" opacity="0.6"/>
  </svg>
)

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '32px 0',
      }}
    >
      <div
        className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-4"
        style={{
          maxWidth: '68rem',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GoldenGateSVG />
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            SF ATM
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {['Services', 'Partners', 'Events', 'Contact'].map((link) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-fira), monospace',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link}
            </Link>
          ))}
        </div>

        <span
          className="text-center"
          style={{
            fontFamily: 'var(--font-fira), monospace',
            fontSize: '10px',
            letterSpacing: '0.08em',
            color: 'rgba(232,234,240,0.2)',
          }}
        >
          &copy; 2025 SF ATM &middot; San Francisco, CA &middot; hello@sfatm.com
        </span>
      </div>
    </footer>
  )
}
