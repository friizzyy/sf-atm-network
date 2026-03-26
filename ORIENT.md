# ORIENT.md — SF ATM Network

## What Is This Project
A 5-page marketing website for Luke Malek-Zadeh's ATM placement business in San Francisco.
Business model: place ATMs in bars/restaurants/dispensaries at no upfront cost, split surcharge revenue.

## Current State
- All 5 pages built and functional
- Canvas particle system with SF neighborhood nodes (Mission, Castro, SoMa, FiDi, Marina, NOPA)
- Services page: sidebar tab navigator with unique SVG diagrams per service
- Partners page: revenue tiers at bottom, GlowCard proximity effects on eligibility
- Events page: 4-tab underline navigator (Festival/Corporate/Nightlife/Pop-Up)
- Contact page: context-aware form (different fields per inquiry type)

## Design Decisions Made
- DM Sans chosen over Playfair Display (Playfair = editorial luxury, wrong for fintech)
- Ambient background: two drifting radial orbs (red + blue) globally in layout.tsx
- Nav uses Next.js <Link> throughout (not <a href>) for basePath compatibility
- basePath: /projects/sf-atm-network (served from Mac mini via server.py)

## Access
Mac mini tunnel: check ~/.openclaw/workspace/data-api/tunnel-url.txt
Preview: {tunnel}/projects/sf-atm-network/
