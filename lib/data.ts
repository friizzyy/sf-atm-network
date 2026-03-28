// SF ATM Network — Content Data
// All copy lives here. Never hardcode strings in components.

export const nav = {
  logo: 'SF ATM',
  links: ['Services', 'Partners', 'Events', 'Contact'],
  cta: 'Get Started',
}

export const hero = {
  eyebrow: 'Bay Area ATM Solutions',
  headline: ['Your Business,', 'Our', 'ATMs.'],
  redWord: 'ATMs.',
  sub: 'SF ATM places and maintains ATMs for Bay Area businesses, events, and venues. Zero upfront cost. Real revenue sharing. Local service with national reach.',
  ctaPrimary: 'Get a Free Consultation',
  ctaSecondary: 'Our Services',
}

export const stats = [
  { value: 200, suffix: '+', label: 'Machines Placed', mono: 'MACHINES' },
  { value: 99.7, suffix: '%', label: 'Uptime Guarantee', mono: 'RELIABILITY', decimal: true },
  { value: 0, prefix: '$', label: 'Upfront Cost', mono: 'TO START' },
  { value: 4, suffix: 'hr', label: 'Support Response', mono: 'AVG RESPONSE' },
]

export const services = [
  {
    id: 'placement',
    number: '01',
    title: 'ATM Placement',
    headline: 'Smart placement for Bay Area businesses',
    color: '#c41e3a',
    description: 'We find the right spot for your ATM based on your foot traffic, business type, and layout. From Mission District restaurants to Marina retail shops, every placement is tailored to drive real transaction volume for your location.',
    deliverables: [
      'Site walkthrough and assessment',
      'Foot traffic evaluation',
      'Permitting and compliance',
      'Professional installation',
      'Signage and branding',
      'Performance tracking',
    ],
  },
  {
    id: 'revenue',
    number: '02',
    title: 'Revenue Sharing',
    headline: 'Transparent, monthly payouts',
    color: '#1e4fd8',
    description: 'No hidden fees. No confusing formulas. You earn a share of every transaction at your location, deposited monthly with full reporting. Most partners see $200 to $600 per machine per month.',
    deliverables: [
      'Monthly direct deposits',
      'Transaction reporting dashboard',
      'Revenue optimization reviews',
      'Surcharge management',
      'Partner portal access',
      'Annual performance reviews',
    ],
  },
  {
    id: 'cash',
    number: '03',
    title: 'Cash Management',
    headline: 'We keep the machines loaded',
    color: '#c41e3a',
    description: 'Our local team handles all cash replenishment and vault management so you never have to think about it. Scheduled refills, armored transport, and full deposit reconciliation are all included.',
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
    title: 'Live Monitoring',
    headline: 'Real-time status on every machine',
    color: '#28c840',
    description: 'Every ATM we place streams live data back to our operations team. We monitor cash levels, connectivity, transaction errors, and security alerts around the clock so issues get handled before they affect your customers.',
    deliverables: [
      'Real-time status tracking',
      'Automated alerts',
      'Cash level monitoring',
      'Security monitoring',
      'Uptime guarantees',
      'Incident response',
    ],
  },
  {
    id: 'events',
    number: '05',
    title: 'Event ATMs',
    headline: 'Portable ATMs for any event',
    color: '#1e4fd8',
    description: 'Festivals, pop-ups, concerts, private events. We bring portable ATMs, set them up, manage the cash, and break them down when it is over. One call and your event has cash access covered.',
    deliverables: [
      'Portable ATM fleet',
      'Power and connectivity setup',
      'On-site staffing available',
      'Capacity planning',
      'Post-event reporting',
      'Recurring event contracts',
    ],
  },
  {
    id: 'support',
    number: '06',
    title: 'ATM Support + Diagnostics',
    headline: 'Fast troubleshooting, local technicians',
    color: '#c41e3a',
    description: 'Machine acting up? Our support team resolves most issues remotely through live diagnostics. When hands-on service is needed, our Bay Area technicians are on-site fast. We also offer remote support for ATM operators nationwide.',
    deliverables: [
      'Live remote diagnostics',
      'On-site technician dispatch',
      'Software updates and patches',
      'Hardware parts on hand',
      'Preventive maintenance',
      'Nationwide remote support available',
    ],
  },
]

export const industries = [
  { id: 'restaurants', label: 'Restaurants', icon: '01' },
  { id: 'bars', label: 'Bars + Nightlife', icon: '02' },
  { id: 'dispensaries', label: 'Dispensaries', icon: '03' },
  { id: 'liquor', label: 'Liquor Stores', icon: '04' },
  { id: 'convenience', label: 'Convenience Stores', icon: '05' },
  { id: 'retail', label: 'Retail Stores', icon: '06' },
  { id: 'venues', label: 'Event Venues', icon: '07' },
  { id: 'festivals', label: 'Festivals + Pop-Ups', icon: '08' },
  { id: 'concerts', label: 'Concerts + Live Events', icon: '09' },
  { id: 'private', label: 'Private Events', icon: '10' },
]

// Kept for NetworkMonitor component but now shows industry-based demo data
export const networkLocations = [
  { id: 'atm-001', name: 'Restaurant, Mission District', neighborhood: 'Mission', status: 'online', lastTx: '2 min ago', txCount: 847, cash: 78 },
  { id: 'atm-002', name: 'Dispensary, SoMa', neighborhood: 'SoMa', status: 'online', lastTx: '4 min ago', txCount: 1203, cash: 62 },
  { id: 'atm-003', name: 'Liquor Store, Castro', neighborhood: 'Castro', status: 'online', lastTx: '1 min ago', txCount: 634, cash: 91 },
  { id: 'atm-004', name: 'Bar, Tenderloin', neighborhood: 'Tenderloin', status: 'maintenance', lastTx: '38 min ago', txCount: 428, cash: 15 },
  { id: 'atm-005', name: 'Convenience Store, Marina', neighborhood: 'Marina', status: 'online', lastTx: '7 min ago', txCount: 916, cash: 54 },
  { id: 'atm-006', name: 'Retail Shop, Hayes Valley', neighborhood: 'Hayes Valley', status: 'online', lastTx: '12 min ago', txCount: 502, cash: 83 },
]

export const about = {
  eyebrow: 'About SF ATM',
  pullQuote: 'We started this company because too many Bay Area businesses were getting a bad deal on ATMs.',
  paragraphs: [
    'SF ATM is a San Francisco-based ATM company built for local business owners. We handle everything from placement and installation to cash management, monitoring, and ongoing support. No upfront cost. No complicated contracts. Just a simple revenue share that puts money in your pocket every month.',
    'We work with restaurants, bars, dispensaries, liquor stores, convenience stores, retail shops, and event venues across the Bay Area. We also provide remote ATM diagnostics and support for operators nationwide.',
    'Our local team of technicians and operations staff keeps every machine running. When something goes wrong, we are usually fixing it before you even notice. That is the difference between working with a local company that is invested in your success versus a national provider that treats you like a number.',
  ],
}

export const cta = {
  headline: ['Ready to add', 'an ATM to', 'your business?'],
  sub: 'No upfront cost. No risk. We handle installation, cash, and support. You collect a check every month.',
  button: 'Get Started',
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
  copyright: `\u00A9 ${new Date().getFullYear()} SF ATM. All rights reserved.`,
}
