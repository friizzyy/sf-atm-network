// SF ATM Network — Content Data
// All copy lives here. Never hardcode strings in components.

export const nav = {
  logo: 'SF ATM Network',
  links: ['Services', 'Partners', 'Events', 'Contact'],
  cta: 'Become a Partner',
}

export const hero = {
  eyebrow: 'San Francisco ATM Network',
  headline: ['Your Revenue,', 'Running', '24/7'],
  redWord: '24/7',
  sub: 'Premium ATM placement across San Francisco neighborhoods. Zero upfront cost. Revenue sharing that actually works. National support with local presence.',
  ctaPrimary: 'Become a Partner',
  ctaSecondary: 'View Network',
}

export const stats = [
  { value: 200, suffix: '+', label: 'ATMs Deployed', mono: 'MACHINES' },
  { value: 99.7, suffix: '%', label: 'Network Uptime', mono: 'RELIABILITY', decimal: true },
  { value: 0, prefix: '$', label: 'Upfront Cost', mono: 'TO JOIN' },
  { value: 48, suffix: 'hr', label: 'Response Time', mono: 'SUPPORT SLA' },
]

export const services = [
  {
    id: 'placement',
    number: '01',
    title: 'ATM Placement',
    headline: 'Strategic site selection across SF',
    color: '#c41e3a',
    description: 'We analyze foot traffic, transaction density, and neighborhood demographics to identify optimal ATM locations. From Mission taquerias to FiDi office towers, every placement is data-driven and revenue-maximized.',
    deliverables: [
      'Site feasibility analysis',
      'Foot traffic modeling',
      'Regulatory compliance review',
      'Installation coordination',
      'Signage and branding',
      'Performance benchmarking',
    ],
  },
  {
    id: 'revenue',
    number: '02',
    title: 'Revenue Sharing',
    headline: 'Transparent, immediate cash flow',
    color: '#1e4fd8',
    description: 'No hidden fees. No opaque formulas. You earn a percentage of every transaction processed through your location, paid monthly with full reporting. Partners average $200-$600 per machine per month.',
    deliverables: [
      'Monthly direct deposits',
      'Transaction reporting dashboard',
      'Revenue optimization reviews',
      'Surcharge fee management',
      'Partner portal access',
      'Annual performance audits',
    ],
  },
  {
    id: 'cash',
    number: '03',
    title: 'Cash Management',
    headline: 'End-to-end cash logistics',
    color: '#c41e3a',
    description: 'Our certified armored courier network handles all cash replenishment, vault management, and deposit reconciliation. You never touch the cash. We handle every step from vault to ATM to bank.',
    deliverables: [
      'Scheduled cash replenishment',
      'Armored transport coordination',
      'Vault reconciliation reports',
      'Cash forecasting models',
      'Deposit insurance coverage',
      'Shortage protection policy',
    ],
  },
  {
    id: 'monitoring',
    number: '04',
    title: '24/7 Monitoring',
    headline: 'Always watching, always ready',
    color: '#28c840',
    description: 'Every machine in our network streams live telemetry to our operations center. Cash levels, connectivity, transaction errors, and physical security alerts are monitored continuously with automated incident response.',
    deliverables: [
      'Real-time telemetry feeds',
      'Automated anomaly detection',
      'Proactive cash level alerts',
      'Physical security monitoring',
      'Uptime SLA guarantees',
      'Incident response team',
    ],
  },
  {
    id: 'events',
    number: '05',
    title: 'Event Deployment',
    headline: 'Pop-up ATMs for high-volume moments',
    color: '#1e4fd8',
    description: 'SF\'s event economy is massive. We deploy mobile ATM units to festivals, farmers markets, private events, and venues during peak periods. Temporary infrastructure, permanent revenue relationships.',
    deliverables: [
      'Portable ATM fleet',
      'Power and connectivity setup',
      'Event staffing optional',
      'Capacity planning analysis',
      'Post-event revenue report',
      'Recurring event contracts',
    ],
  },
  {
    id: 'support',
    number: '06',
    title: 'Technical Support',
    headline: 'Remote and on-site, 24 hours a day',
    color: '#c41e3a',
    description: 'Our NOC engineers resolve 87% of issues remotely before they affect customers. When physical intervention is needed, our SF-based technicians are on-site within 4 hours, guaranteed.',
    deliverables: [
      'Remote diagnostics and repair',
      '4-hour on-site SLA',
      'Software update management',
      'Hardware part inventory',
      'Preventive maintenance schedule',
      'Partner escalation hotline',
    ],
  },
]

export const networkLocations = [
  { id: 'atm-001', name: 'La Taqueria, Mission', neighborhood: 'Mission', status: 'online', lastTx: '2 min ago', txCount: 847, cash: 78 },
  { id: 'atm-002', name: 'Philz Coffee, FiDi', neighborhood: 'FiDi', status: 'online', lastTx: '4 min ago', txCount: 1203, cash: 62 },
  { id: 'atm-003', name: 'Bi-Rite Market, Castro', neighborhood: 'Castro', status: 'online', lastTx: '1 min ago', txCount: 634, cash: 91 },
  { id: 'atm-004', name: 'Equator Coffee, SoMa', neighborhood: 'SoMa', status: 'maintenance', lastTx: '38 min ago', txCount: 428, cash: 15 },
  { id: 'atm-005', name: 'The Grove, Marina', neighborhood: 'Marina', status: 'online', lastTx: '7 min ago', txCount: 916, cash: 54 },
  { id: 'atm-006', name: 'Zazie, NOPA', neighborhood: 'NOPA', status: 'online', lastTx: '12 min ago', txCount: 502, cash: 83 },
]

export const about = {
  eyebrow: 'About the Network',
  pullQuote: 'Every San Francisco business deserves infrastructure that generates revenue, not overhead.',
  paragraphs: [
    'SF ATM Network was built by operators who understood that most venue ATM programs benefit the machine company at the expense of the business. We reversed that model: full revenue transparency, zero upfront cost, and SLA-backed support that treats your location like our own.',
    'We operate across all SF neighborhoods, with particular density in the Mission, FiDi, Castro, SoMa, Marina, and NOPA corridors. Our network processes over 40,000 transactions monthly, generating meaningful passive revenue for restaurant owners, retailers, and event venues.',
    'Our team of 18 full-time operations staff, 6 field technicians, and a 24-hour NOC ensure that when your ATM is online, it stays online. When it needs service, we are there before your customers notice.',
  ],
}

export const cta = {
  headline: ['Ready to turn your', 'foot traffic into', 'revenue?'],
  sub: 'No upfront cost. No risk. We handle installation, cash management, and support. You collect a check every month.',
  button: 'Start the Conversation',
}

export const footer = {
  logo: 'SF ATM Network',
  links: [
    { label: 'Services', href: '/services' },
    { label: 'Partners', href: '/partners' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
  ],
  copyright: `© ${new Date().getFullYear()} SF ATM Network. All rights reserved.`,
}
