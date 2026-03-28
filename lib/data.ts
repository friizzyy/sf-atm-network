// SF ATM — Content Data
// All copy lives here. Never hardcode strings in components.

export const nav = {
  logo: 'SF ATM',
  links: ['Services', 'Partners', 'Events', 'Contact'],
  cta: 'Get Started',
}

export const hero = {
  eyebrow: 'Bay Area ATM Services',
  headline: ['Your Revenue,', 'Running', '24/7'],
  redWord: '24/7',
  sub: 'Premium ATM placement and support for Bay Area businesses. Zero upfront cost. Revenue sharing that actually works. Local service with nationwide remote support.',
  ctaPrimary: 'Get Started',
  ctaSecondary: 'View Services',
}

export const stats = [
  { value: 200, suffix: '+', label: 'ATMs Placed', mono: 'MACHINES' },
  { value: 99.7, suffix: '%', label: 'Uptime', mono: 'RELIABILITY', decimal: true },
  { value: 0, prefix: '$', label: 'Upfront Cost', mono: 'TO START' },
  { value: 48, suffix: 'hr', label: 'Response Time', mono: 'SUPPORT SLA' },
]

export const services = [
  {
    id: 'placement',
    number: '01',
    title: 'ATM Placement',
    headline: 'Strategic placement across the Bay Area',
    color: '#c41e3a',
    description: 'We analyze foot traffic, transaction volume, and local demographics to find the best spot for your ATM. From restaurants and bars to dispensaries and event venues, every placement is tailored to your business.',
    deliverables: [
      'Site feasibility visit',
      'Foot traffic assessment',
      'Compliance and permitting',
      'Professional installation',
      'Signage and branding',
      'Performance tracking',
    ],
  },
  {
    id: 'revenue',
    number: '02',
    title: 'Revenue Sharing',
    headline: 'Transparent, immediate cash flow',
    color: '#1e4fd8',
    description: 'No hidden fees. No confusing splits. You earn a percentage of every transaction at your location, paid monthly with full reporting. Partners average $200 to $600 per machine per month.',
    deliverables: [
      'Monthly direct deposits',
      'Transaction reporting dashboard',
      'Revenue optimization reviews',
      'Surcharge fee management',
      'Partner portal access',
      'Annual performance reviews',
    ],
  },
  {
    id: 'cash',
    number: '03',
    title: 'Cash Management',
    headline: 'We handle the cash, start to finish',
    color: '#c41e3a',
    description: 'Our armored courier partners handle all cash replenishment, vault management, and deposit reconciliation. You never touch the cash. We manage every step from vault to ATM to bank.',
    deliverables: [
      'Scheduled cash replenishment',
      'Armored transport coordination',
      'Vault reconciliation reports',
      'Cash forecasting',
      'Deposit insurance coverage',
      'Shortage protection',
    ],
  },
  {
    id: 'monitoring',
    number: '04',
    title: '24/7 Monitoring',
    headline: 'Always watching, always ready',
    color: '#28c840',
    description: 'Every machine we place streams live data to our support team. Cash levels, connectivity, transaction errors, and security alerts are watched around the clock with fast incident response.',
    deliverables: [
      'Real-time machine monitoring',
      'Automated issue detection',
      'Proactive cash level alerts',
      'Security monitoring',
      'Uptime guarantees',
      'Dedicated incident response',
    ],
  },
  {
    id: 'events',
    number: '05',
    title: 'Event Placement',
    headline: 'Pop-up ATMs for high-traffic events',
    color: '#1e4fd8',
    description: 'The Bay Area event scene is massive. We deploy portable ATM units to festivals, concerts, private events, and pop-ups during peak periods. Temporary setup, lasting revenue relationships.',
    deliverables: [
      'Portable ATM units',
      'Power and connectivity setup',
      'On-site staffing available',
      'Capacity planning',
      'Post-event revenue report',
      'Recurring event agreements',
    ],
  },
  {
    id: 'support',
    number: '06',
    title: 'ATM Support + Diagnostics',
    headline: 'Live diagnostics and hands-on repair',
    color: '#c41e3a',
    description: 'Our support team resolves most issues remotely through live diagnostics before they affect your customers. When hands-on service is needed, our Bay Area technicians are on-site within hours. We also offer nationwide remote support for ATM operators by request.',
    deliverables: [
      'Live remote diagnostics',
      'Same-day on-site service (Bay Area)',
      'Nationwide remote support available',
      'Software and firmware updates',
      'Hardware parts on hand',
      'Preventive maintenance schedule',
    ],
  },
]

export const industries = [
  { name: 'Restaurants', icon: 'utensils' },
  { name: 'Bars + Nightlife', icon: 'wine' },
  { name: 'Dispensaries', icon: 'leaf' },
  { name: 'Liquor Stores', icon: 'store' },
  { name: 'Convenience Stores', icon: 'shopping-bag' },
  { name: 'Retail Stores', icon: 'shopping-cart' },
  { name: 'Event Venues', icon: 'calendar' },
  { name: 'Festivals + Pop-Ups', icon: 'music' },
  { name: 'Concerts + Live Entertainment', icon: 'mic' },
  { name: 'Private Events + Gatherings', icon: 'users' },
]

export const about = {
  eyebrow: 'About Us',
  pullQuote: 'Every Bay Area business deserves an ATM partner that generates revenue, not headaches.',
  paragraphs: [
    'SF ATM was built by operators who saw that most ATM programs benefit the machine company at the expense of the business. We reversed that: full revenue transparency, zero upfront cost, and real support that treats your location like our own.',
    'We serve businesses across San Francisco and the greater Bay Area, with a focus on restaurants, bars, dispensaries, retail, and event venues. Our machines process thousands of transactions monthly, generating meaningful passive revenue for local business owners.',
    'Our local team handles everything from placement and installation to cash management and live diagnostics. When something goes wrong, we fix it fast. We also provide nationwide remote diagnostic support for ATM operators who need expert help with their machines.',
  ],
}

export const cta = {
  headline: ['Ready to turn your', 'foot traffic into', 'revenue?'],
  sub: 'No upfront cost. No risk. We handle installation, cash management, and support. You collect a check every month.',
  button: 'Start the Conversation',
}

export const footer = {
  logo: 'SF ATM',
  links: [
    { label: 'Services', href: '/services' },
    { label: 'Partners', href: '/partners' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
  ],
  copyright: `\u00a9 ${new Date().getFullYear()} SF ATM. All rights reserved.`,
}
