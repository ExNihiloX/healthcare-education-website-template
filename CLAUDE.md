# {Project Name}

{One-line description}. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Project Context

**Client:** {Client name}
**Industry:** {Healthcare | Education | Healthcare Education}
**Launch Date:** {Date}
**Primary Goal:** {Main objective}

## Content Protocol

1. **Always read `CONTENT_REGISTRY.md` before editing any data file**
2. Use Edit tool with exact string matching — never rewrite entire files
3. Locate array items by slug/id/title, not position
4. Run `npm run build` after content changes
5. Images managed in `lib/images.ts` and `data/images/`

## Project Structure

```
app/                 → Pages and layouts
components/
  ui/               → shadcn/ui base components
  sections/         → Page section components
  forms/            → Form components
  layout/           → Header, Footer, Navigation
  motion/           → Animation wrappers
  seo/              → Schema components
data/
  content/          → TypeScript content files
  images/           → Curated image selections
lib/
  motion/           → Animation config
  images.ts         → Image CDN helpers
  utils.ts          → Utility functions
docs/               → Project documentation
scripts/            → Build and generation scripts
```

## Commands

```bash
npm run dev          # Development server (http://localhost:3000)
npm run build        # Production build (verify all changes)
npm run lint         # ESLint
npm run generate:registries  # Regenerate registry files
```

## Key Files

| Purpose | File |
|---------|------|
| Content lookup | `CONTENT_REGISTRY.md` |
| Image inventory | `IMAGE_REGISTRY.md` |
| Component catalog | `COMPONENT_REGISTRY.md` |
| Brand colors | `tailwind.config.ts` (CSS variables in `app/globals.css`) |
| Image CDN | `lib/images.ts` |
| Motion presets | `lib/motion/config.ts` and `lib/motion/variants.ts` |
| Site config | `data/content/site.ts` |
| Navigation | `data/content/navigation.ts` |

## Build Phases

Reference `~/.claude/AGENT_PLAYBOOK.md` for detailed phase instructions.

| Phase | Status | Notes |
|-------|--------|-------|
| 1. Discovery | ⬜ | Gather client info, assets, requirements |
| 2. Architecture | ⬜ | Configure infrastructure, data layer |
| 3. Content | ⬜ | Populate all content files |
| 4. Components | ⬜ | Build all UI components |
| 5. Polish | ⬜ | SEO, performance, accessibility |
| 6. Launch | ⬜ | Deploy and document |

## Current Phase

{Discovery | Architecture | Content | Components | Polish | Launch}

## Active Tasks

- [ ] {Current task 1}
- [ ] {Current task 2}

## Quality Checklist

Before marking a phase complete:

### Content Phase
- [ ] All data files have TypeScript interfaces
- [ ] CONTENT_REGISTRY.md is updated
- [ ] `npm run build` passes

### Components Phase
- [ ] Components use motion variants
- [ ] Responsive at all breakpoints
- [ ] Keyboard navigation works
- [ ] COMPONENT_REGISTRY.md is updated

### Polish Phase
- [ ] Lighthouse scores 90+ all categories
- [ ] All structured data validates
- [ ] Accessibility audit passes
- [ ] Cross-browser testing complete

## Environment Variables

```bash
# Required
NEXT_PUBLIC_CDN_URL=https://your-cdn.com
NEXT_PUBLIC_CDN_TYPE=supabase  # or cloudinary, custom

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Notes

{Any project-specific notes, decisions, or context}
