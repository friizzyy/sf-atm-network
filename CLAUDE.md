# CLAUDE.md — SF ATM Network

## Project Context
Client: Luke Malek-Zadeh (lukemalekzadeh@gmail.com)
Business: SF ATM Network — turnkey ATM placement, no upfront cost
Price: $1,500 build
Stack: Next.js 14, TypeScript, Tailwind CSS, Framer Motion

## Design System
- Background: #0a1220 (never alternate section colors)
- Accent: #c41e3a (Golden Gate red — use sparingly)
- Display: DM Sans 700-800
- Body: Inter
- Mono: Fira Code

## Non-Negotiables (Julius's hard rules)
- NO em dashes anywhere in rendered text
- NO static numbers (always CountUp/animated)
- NO lists as final design (use tabs/rows/cards)
- NO alternating section background colors
- Canvas always behind text (z-index: 0, text z-index: 10+)
- Every page nav link must use Next.js <Link> (never <a href>)
- Universal footer on every page
- Scroll to top on every page navigation
- Every page hero must have something animated/alive

## Routes
- / (homepage)
- /services (full ServicesNav + NetworkMonitor)
- /partners (revenue sharing, eligibility, how-it-works)
- /events (event types as tabs, booking process)
- /contact (context-aware form)

## Build Commands
npm run build  # static export to /out/
# Served via server.py at /projects/sf-atm-network/
