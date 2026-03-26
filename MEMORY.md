# MEMORY.md — SF ATM Network

## Decisions
- 2026-03-25: Font changed from Playfair Display → DM Sans. Reason: Playfair reads editorial luxury, fintech needs geometric precision.
- 2026-03-25: Canvas z-index fixed. Canvas=0, gradient overlay=1, text=10. Frosted left-side gradient rgba(10,18,32,0.92).
- 2026-03-25: MagneticButton: removed physical movement (translateX/Y), kept radial glow cursor effect only.
- 2026-03-25: Nav converted from <a href> to <Link> for proper basePath handling.
- 2026-03-25: Homepage restructured — full ServicesNav and NetworkMonitor moved to /services page.
- 2026-03-25: Ambient background moved to root layout.tsx (not just homepage).
- 2026-03-25: Particles changed to green rectangles (4x2px) with arrival pulse ring.

## Julius Feedback (approved ✅)
- Canvas particle system with named real-world SF location nodes ✅
- Glass chrome network monitor with LIVE badge and status dots ✅
- Services sidebar tab navigator with unique SVG per service ✅
- MagneticButton glow cursor effect (not the physical movement) ✅
- Contact page design ✅

## Julius Feedback (rejected ❌)
- Playfair Display for fintech ❌ → Use DM Sans or geometric
- Canvas appearing behind/on top of hero text ❌ → Stronger text protection required
- Left-column-only layout (all content at same X) ❌ → Need editorial asymmetry
- Alternating section background colors ❌ → One background color only
- Physical magnetic button movement ❌ → Glow only, button stays still
- "Get Started" generic CTA ❌ → Specific action text always
- Lists as final design ❌ → Use tabs/rows/cards

## Gotchas
- basePath must be /projects/sf-atm-network for server.py to serve static files correctly
- All internal links must use Next.js <Link> (plain <a href> ignores basePath)
- Canvas must have explicit zIndex: 0, all text containers must have position: relative, zIndex: 10+
