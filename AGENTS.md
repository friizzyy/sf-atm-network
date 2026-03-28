# JU. Dashboard — Codex Instructions

## Context
This is Julius Williams' internal studio dashboard. Dark glass UI, precision data display.
All design decisions follow the JU. Design System. ui-ux-pro-max is loaded for its UX checklist only.

## Priority Order
1. **JU. Design System** (this file)
2. **ui-ux-pro-max** — accessibility/UX rules only, not aesthetic recommendations

---

## Stack
- Next.js 14+, App Router, TypeScript
- Tailwind CSS v4 (inline @theme in globals.css)
- Framer Motion for animations
- Shadcn/ui in /components/ui/ — use freely, don't modify source
- Lucide React icons only (no emojis, no other icon sets)

---

## Design Tokens (dashboard-specific)
```
--background: #080B10       (deep cool dark)
--surface: #0D1117          (cards, panels)
--surface-elevated: #111827  (hover states, selected)
--foreground: #F0F6FC        (primary text)
--muted: #7D8590             (secondary text)
--border: rgba(255,255,255,0.06)
--glass: rgba(255,255,255,0.02)
```

## Glass Panel Pattern (used everywhere in dashboard)
```tsx
<div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-5">
  {/* content */}
</div>
```

## Elevated Panel (for active/selected states)
```tsx
<div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl">
```

---

## Typography
- Body: Geist Sans — 13-14px, text-white/60 for secondary, text-white/90 for primary
- Mono labels: JetBrains Mono — 9-10px, uppercase, tracking-[0.15em], text-white/30
- Section headers: 11px, uppercase, tracking-[0.2em], text-white/25, font-semibold
- Data values: text-white, font-medium or font-semibold
- Never bold headlines here — this is a dashboard, not a marketing page

---

## Data Display Rules
- All numbers that change: animate with count-up on mount/change
- Status indicators: colored dots (emerald=good, amber=warning, red=error) with pulse animation on active
- Metrics: value large (text-2xl font-bold), label small mono below
- Tables: zebra striping via hover:bg-white/[0.02], no hard alternating colors
- Empty states: always designed — show icon + message + action, never blank

---

## Component Patterns

### Stat Card
```tsx
<div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25 mb-2">LABEL</p>
  <p className="text-2xl font-bold text-white tracking-[-0.02em]">VALUE</p>
  <p className="text-[11px] text-white/30 mt-1">context</p>
</div>
```

### Table Row
```tsx
<tr className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
```

### Status Badge
```tsx
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400">
  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
  Active
</span>
```

### Section Divider
```tsx
<div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
```

---

## Interaction Standards
- Hover: transition-all duration-200, border brightens (white/[0.06] → white/[0.12]), bg lifts (white/[0.02] → white/[0.04])
- Active/selected: border-white/[0.15] bg-white/[0.06]
- Buttons: primary = bg-white text-black hover:bg-white/90 | ghost = border border-white/[0.08] hover:bg-white/[0.05]
- Loading: skeleton shimmer (bg-white/[0.04] animate-pulse) — never spinners on content areas
- Framer Motion: layoutId for smooth panel transitions, AnimatePresence for enter/exit

---

## What Is Never Done in This Dashboard
- Marketing hero sections, large editorial headlines
- Gradients as backgrounds (only as subtle dividers or glows)
- Card grids that look like landing pages
- Purple gradients (the default AI dashboard look)
- Rounded pill buttons on data tables
- Colored section backgrounds — everything is the same dark base
- Decorative animations that don't carry information

---

## From ui-ux-pro-max — USE THESE (pre-ship checklist)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states on every interactive element (150-200ms)
- [ ] Loading states on all async ops — disable buttons, show skeleton
- [ ] Error states designed (not just console.error)
- [ ] Focus rings visible for keyboard nav (outline-accent)
- [ ] Touch targets 44x44px minimum on mobile views
- [ ] Text contrast 4.5:1 minimum
- [ ] prefers-reduced-motion: wrap Framer Motion with useReducedMotion()
- [ ] Responsive: works at 375px (mobile), 768px (tablet), 1280px+ (desktop)
