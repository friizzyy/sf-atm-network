// SF ATM Network — Design Tokens
// Project-specific. Do not reuse on other projects.

export const colors = {
  // Surfaces
  bg: '#0a1220',          // Midnight Navy — deepest layer
  surface: '#0f1d35',     // Deep Ocean — cards, panels
  elevated: '#152540',    // Lifted — hover state surfaces

  // Brand
  accent: '#c41e3a',      // Golden Gate Red — CTAs, critical data only
  secondary: '#1e4fd8',   // Alcatraz Blue — links, secondary actions
  accentMuted: 'rgba(196, 30, 58, 0.15)',

  // Text
  textPrimary: '#e8eaf0', // Bay Fog — primary body
  textMuted: 'rgba(232, 234, 240, 0.55)',
  textFaint: 'rgba(232, 234, 240, 0.30)',

  // Borders
  border: 'rgba(232, 234, 240, 0.07)',
  borderHover: 'rgba(232, 234, 240, 0.14)',

  // Status
  statusGreen: '#28c840',
  statusYellow: '#febc2e',
  statusRed: '#ff5f57',
} as const

export const fonts = {
  display: '"DM Sans", system-ui, sans-serif',
  body: '"Inter", system-ui, sans-serif',
  mono: '"Fira Code", "Fira Mono", monospace',
} as const

export const spacing = {
  sectionY: '10rem',      // 160px desktop sections
  sectionYMobile: '5rem', // 80px mobile
  containerMax: '68rem',  // ~1088px
  containerPx: '1.5rem',
} as const

export const easing = {
  spring: [0.16, 1, 0.3, 1] as [number, number, number, number],
  out: [0.0, 0.0, 0.2, 1] as [number, number, number, number],
} as const

export const motion = {
  entrance: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easing.spring },
  },
  stagger: (i: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: i * 0.1, ease: easing.spring },
  }),
} as const
