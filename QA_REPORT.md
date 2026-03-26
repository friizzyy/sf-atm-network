# QA Report — sf-atm-network
Generated: 2026-03-25T12:00:00Z
Status: DONE

## PASS ✅
- No em dashes found in `lib/data.ts` content strings
- No "Get Started" or generic CTA copy anywhere (CTAs are specific: "Become a Partner", "Start the Conversation", "Request Event ATM", "Apply for Partnership")
- No `rounded-full` on navigation tabs (events tabs use underline style, services tabs use `borderRadius: 4px`)
- Homepage stats use `StatCounter` component with `requestAnimationFrame` CountUp (`components/StatCounter.tsx:27-37`)
- Events hero counter uses `HeroCounter` with animated CountUp (`app/events/page.tsx:61-95`)
- No `<ul>/<li>` lists used as final design anywhere; all list content uses custom card/row/grid layouts
- Canvas z-index correct: canvas at `zIndex: 0`, text content at `zIndex: 10` (`components/HeroCanvas.tsx:308-309`, `app/page.tsx:70`)
- No alternating section background colors; all sections use consistent `var(--bg)` (#0a1220)
- Layout varies across sections: centered (stats, CTA), 1:2 right-anchored grid (services, network), offset grid with vertical label (about), full-bleed (network 200+)
- Footer present on all 5 pages: `app/page.tsx:669`, `app/services/page.tsx:224`, `app/partners/page.tsx:596`, `app/events/page.tsx:674`, `app/contact/page.tsx:407`
- Scroll-to-top on all subpages via `window.scrollTo({ top: 0, behavior: 'instant' })`: services:21, partners:135, events:169, contact:39
- Nav links use real routes via `LINK_ROUTES` map, not anchor hrefs (`components/Nav.tsx:20-25`)
- Footer links use Next.js `<Link>` correctly (`components/Footer.tsx:51-68`)
- Nav page links use Next.js `<Link>` correctly (`components/Nav.tsx:79-97`)
- Three-tier type system implemented: DM Sans 700-800 display, Inter body, Fira Code mono (`app/layout.tsx:5-22`, `lib/tokens.ts:30-34`)
- Design tokens properly defined in CSS and TypeScript (`app/globals.css:4-23`, `lib/tokens.ts`)
- Glass chrome component system with macOS dots, backdrop blur, proper borders (`app/globals.css:144-187`)
- Grain texture overlay applied globally (`app/globals.css:50-59`)
- Hover states present on MagneticButton (cursor-following glow, color shift, scale on tap) (`components/MagneticButton.tsx:24-96`)
- Hover states on nav links, footer links, service cards, network monitor rows
- Scroll-triggered reveals with staggered delays throughout all pages
- Nav morphs on scroll (transparent to frosted glass) (`components/Nav.tsx:40-44`)
- HeroCanvas particle system with bezier paths between SF neighborhood nodes (`components/HeroCanvas.tsx`)
- Context-aware contact form adapts fields based on inquiry type selection (`app/contact/page.tsx:245-271`)

## FAIL ❌
- **components/MagneticButton.tsx:100** — `MagneticButton` renders a plain `<a href>` for internal navigation instead of Next.js `<Link>`. Every MagneticButton with an `href` prop bypasses Next.js routing. This affects all CTA buttons site-wide: homepage hero (`app/page.tsx:144,147`), homepage CTA (`app/page.tsx:661`), services CTA (`app/services/page.tsx:218`), partners CTAs (`app/partners/page.tsx:193,590`), events CTAs (`app/events/page.tsx:287,290,667`), and the nav CTA (`components/Nav.tsx:101-107`). Full page reloads on every CTA click.
- **app/services/page.tsx:77** — Em dash in rendered text: `"monitoring, and support — end to end"`. The `—` character violates the hard rule of no em dashes in rendered text.
- **app/partners/page.tsx:519-520** — Revenue tier prices (`$200`, `$400`, `$600+`) displayed as static text at `fontSize: 2.5rem / fontWeight: 800`. These are prominent hero-scale numbers that should use CountUp animation per the "NO static numbers" rule.
- **components/NetworkMonitor.tsx:150** — `txCount` values (847, 1,203, 634, etc.) rendered as static `.toLocaleString()`. These are data metrics in a live monitor panel and should animate on scroll into view.
- **app/events/page.tsx:387** — Event tab metrics (`$0`, `24hr`, `48hr`, `Up to 5,000 attendees`) displayed as static text at `clamp(2.5rem, 5vw, 4rem)`. These are the primary visual anchor of each tab and should use CountUp/animated entry.

## WARNINGS ⚠️
- **app/services/page.tsx:29** — Services page hero has only one-shot entrance animations (opacity/y fade). No persistent animated element (pulse, canvas, ambient motion). CLAUDE.md requires "Every page hero must have something animated/alive."
- **app/partners/page.tsx:143** — Partners page hero has only entrance animations. No persistent animated element in the hero section.
- **app/contact/page.tsx:76** — Contact page hero has only entrance animations. No persistent animated element in the hero section.
- **app/page.tsx:367** — Decorative "200+" displayed as static text at 7% opacity. While it is a design watermark, it is still a rendered number that could benefit from a CountUp or draw-in animation.
- **app/contact/page.tsx:45** — Form submission is a placeholder (`setSubmitted(true)` with no actual submission logic). This is a functional gap, not a design violation.

## SCORE: 65/100
Calculation: 100 - (5 FAILs x 5) - (5 WARNINGs x 2) = 100 - 25 - 10 = 65

## NEXT ACTIONS
1. **Fix MagneticButton routing (CRITICAL)** — Replace `<a href={href}>` with Next.js `<Link href={href}>` in `components/MagneticButton.tsx:99-101`. This is the single highest-impact fix: it affects every CTA on every page and currently causes full page reloads, breaking SPA navigation and losing scroll-to-top behavior.
2. **Remove em dash from services page** — Replace `" — "` with `" - "` or rephrase the sentence at `app/services/page.tsx:77`.
3. **Add CountUp to all static numbers** — Wrap tier prices in partners page, txCount in NetworkMonitor, and event tab metrics with the existing `StatCounter` or `HeroCounter` pattern to eliminate all remaining static numbers.
