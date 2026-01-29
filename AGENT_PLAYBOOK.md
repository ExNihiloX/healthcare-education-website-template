# Website Creation Playbook

Universal methodology for creating world-class Healthcare + Education websites with Claude Code.

---

## Philosophy

### Core Principles

1. **Content-as-Code**: All content lives in typed TypeScript files, not databases or CMS
2. **Composition over Inheritance**: Small, focused components that combine flexibly
3. **Progressive Enhancement**: Works without JavaScript, better with it
4. **Accessibility First**: WCAG 2.1 AA minimum, not an afterthought
5. **Performance by Default**: Optimized images, minimal JavaScript, edge caching

### Why This Approach?

- **Type Safety**: TypeScript catches content errors at build time
- **Version Control**: Content changes are tracked, reviewable, reversible
- **No Runtime Dependencies**: No CMS to maintain, no API latency
- **Developer Experience**: Edit content with the same tools as code
- **AI-Friendly**: Structured data files are easy for Claude to read and modify

---

## Build Phases

### Phase 1: Discovery (Guided)

**Goal:** Understand the client, gather all assets, define scope

**Checklist:**
- [ ] Client brief document (mission, values, target audience)
- [ ] Brand assets (logo in SVG, colors in hex, fonts)
- [ ] Content inventory (all text, images, videos, PDFs)
- [ ] Sitemap approval (pages and hierarchy)
- [ ] Reference websites (what they like, what to avoid)
- [ ] Technical requirements (integrations, hosting, domains)

**Output:** `docs/discovery.md` with all gathered information

**Questions to Ask:**
```
1. Who is your primary audience? (Students, parents, professionals?)
2. What action should visitors take? (Apply, contact, learn more?)
3. What makes you different from competitors?
4. What content do you already have? What needs creating?
5. Any existing brand guidelines or style preferences?
6. Technical integrations needed? (CRM, payment, LMS?)
```

---

### Phase 2: Architecture (Guided)

**Goal:** Set up project structure, data layer, design system

**Checklist:**
- [ ] Clone template repository
- [ ] Configure `tailwind.config.ts` with brand colors
- [ ] Configure `lib/images.ts` with CDN settings
- [ ] Set up data/content/ structure based on sitemap
- [ ] Create CLAUDE.md with project context
- [ ] Initialize registries

**Output:** Empty shell with all infrastructure ready

**Color Configuration Pattern:**
```typescript
// tailwind.config.ts
const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... generated from brand primary
    600: '#0284c7',  // Brand primary
    // ...
  },
  secondary: { /* ... */ },
  accent: { /* ... */ },
}
```

**Image CDN Setup:**
```typescript
// lib/images.ts
const CDN_BASE = process.env.NEXT_PUBLIC_CDN_URL || 'https://cdn.example.com';

export function getImageUrl(path: string, options?: ImageOptions): string {
  // Transform path to CDN URL with optional resizing
}
```

---

### Phase 3: Content Layer (Guided)

**Goal:** Populate all data files with real content

**For each content type:**

1. **Define TypeScript interface** — Fields, optional vs required, validation
2. **Create data file with real content** — Not lorem ipsum
3. **Update CONTENT_REGISTRY.md** — Document what, where, how
4. **Verify with `npm run build`** — TypeScript catches errors

**Content Types Checklist:**
- [ ] Site metadata (name, tagline, social links)
- [ ] Navigation (header, footer menus)
- [ ] Homepage sections (hero, features, testimonials, CTA)
- [ ] Programs/courses (if education)
- [ ] Services (if healthcare)
- [ ] Team/faculty members
- [ ] Testimonials/reviews
- [ ] FAQ content
- [ ] Contact information
- [ ] Legal pages (privacy, terms)

**Data File Pattern:**
```typescript
// data/content/programs.ts
export interface Program {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  format: 'online' | 'in-person' | 'hybrid';
  price?: number;
  startDates: string[];
  outcomes: string[];
  curriculum: CurriculumModule[];
  faculty: string[];  // References to team member slugs
  featured: boolean;
}

export const programs: Record<string, Program> = {
  'nursing-fundamentals': {
    slug: 'nursing-fundamentals',
    title: 'Nursing Fundamentals Certificate',
    // ... all fields
  },
};

// Helper functions
export function getAllPrograms(): Program[] {
  return Object.values(programs);
}

export function getFeaturedPrograms(): Program[] {
  return getAllPrograms().filter(p => p.featured);
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs[slug];
}
```

---

### Phase 4: Component Build (Autonomous batches)

**Goal:** Build all UI components and pages

**Workflow for each component:**

1. **Propose specification** — Props, variants, responsive behavior
2. **Get approval** — User confirms or adjusts
3. **Build component + variants** — All states, all breakpoints
4. **Visual verification** — Playwright screenshot or manual check

**Component Layers:**

| Layer | Location | Purpose |
|-------|----------|---------|
| UI Primitives | `components/ui/` | shadcn/ui base components |
| Motion | `components/motion/` | Animation wrappers |
| Layout | `components/layout/` | Header, Footer, Navigation |
| Sections | `components/sections/` | Page building blocks |
| Forms | `components/forms/` | Contact, application, newsletter |
| SEO | `components/seo/` | JSON-LD, meta components |

**Build Order:**
1. Layout components (Header, Footer)
2. Motion primitives (StaggerContainer, ScrollReveal)
3. Homepage sections
4. Shared sections (CTA, FAQ, Testimonials)
5. Interior page sections
6. Forms
7. Special pages (404, error)

---

### Phase 5: Polish (Guided)

**Goal:** SEO, performance, accessibility, testing

**SEO Checklist:**
- [ ] Unique meta title per page (50-60 characters)
- [ ] Unique meta description per page (150-160 characters)
- [ ] Open Graph images for social sharing
- [ ] Structured data schemas:
  - Organization
  - WebSite with SearchAction
  - Course (for programs)
  - Article (for blog posts)
  - FAQPage
  - BreadcrumbList
- [ ] Canonical URLs
- [ ] XML sitemap
- [ ] robots.txt

**Performance Checklist:**
- [ ] All images in AVIF/WebP with fallbacks
- [ ] Lazy loading for below-fold images
- [ ] Font subsetting and preloading
- [ ] Bundle analysis (no heavy dependencies)
- [ ] Lighthouse audit: 90+ all categories

**Accessibility Checklist:**
- [ ] Keyboard navigation throughout
- [ ] Focus indicators visible
- [ ] Skip-to-content link
- [ ] Alt text on all images
- [ ] Form labels and error messages
- [ ] Color contrast 4.5:1 minimum
- [ ] Reduced motion support
- [ ] Screen reader testing (VoiceOver)

**Testing Checklist:**
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices (iOS Safari, Android Chrome)
- [ ] Form submission flows
- [ ] 404 and error pages
- [ ] Print stylesheet (if needed)

---

### Phase 6: Launch (Guided)

**Goal:** Deploy and document

**Pre-Launch:**
- [ ] Production environment variables set
- [ ] DNS configured
- [ ] SSL certificate active
- [ ] Analytics/tracking configured
- [ ] Error monitoring (Sentry) set up

**Deploy:**
- [ ] Production build succeeds
- [ ] Deploy to Vercel/hosting
- [ ] Verify all pages load
- [ ] Test forms in production
- [ ] Check redirects work

**Post-Launch:**
- [ ] Generate final registries
- [ ] Create handoff documentation
- [ ] Share admin credentials securely
- [ ] Schedule training session (if needed)
- [ ] Set up monitoring alerts

---

## Component Patterns

### Data File Pattern

```typescript
// data/content/{entity}.ts

// 1. Define the interface
export interface EntityType {
  slug: string;           // URL-safe identifier
  title: string;          // Display name
  description: string;    // Short description
  // ... additional fields
  createdAt?: string;     // Optional metadata
  updatedAt?: string;
}

// 2. Store as Record for O(1) lookup
export const entities: Record<string, EntityType> = {
  'entity-slug': {
    slug: 'entity-slug',
    title: 'Entity Title',
    description: 'Entity description here.',
    // ...
  },
};

// 3. Helper functions for common queries
export function getAllEntities(): EntityType[] {
  return Object.values(entities);
}

export function getEntityBySlug(slug: string): EntityType | undefined {
  return entities[slug];
}

export function getEntitiesByCategory(category: string): EntityType[] {
  return getAllEntities().filter(e => e.category === category);
}
```

### Section Component Pattern

```typescript
// components/sections/{Name}Section.tsx
'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/motion/variants';
import { cn } from '@/lib/utils';

interface NameSectionProps {
  title: string;
  subtitle?: string;
  items: ItemType[];
  variant?: 'default' | 'centered' | 'split';
  className?: string;
}

export function NameSection({
  title,
  subtitle,
  items,
  variant = 'default',
  className,
}: NameSectionProps) {
  return (
    <section
      className={cn(
        'py-16 md:py-24',
        variant === 'centered' && 'text-center',
        className
      )}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="container"
      >
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <motion.div key={item.slug} variants={fadeInUp}>
              {/* Item content */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

### Page Pattern

```typescript
// app/{route}/page.tsx
import { Metadata } from 'next';
import { siteConfig } from '@/data/content/site';
import { getPageContent } from '@/data/content/pages';

// Generate metadata from content
export const metadata: Metadata = {
  title: `Page Title | ${siteConfig.name}`,
  description: 'Page description for SEO.',
  openGraph: {
    title: 'Page Title',
    description: 'Page description for SEO.',
    images: ['/og/page-name.jpg'],
  },
};

// Static generation for dynamic routes
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function Page() {
  return (
    <>
      <HeroSection {...heroProps} />
      <ContentSection {...contentProps} />
      <TestimonialsSection {...testimonialsProps} />
      <CTASection {...ctaProps} />
    </>
  );
}
```

### Motion Variants Pattern

```typescript
// lib/motion/variants.ts
import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
```

---

## Quality Standards

### Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | 90+ | Chrome DevTools |
| First Contentful Paint | < 1.8s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| First Input Delay | < 100ms | Lighthouse |
| Time to Interactive | < 3.8s | Lighthouse |

### Image Guidelines

- **Format**: AVIF primary, WebP fallback, JPEG last resort
- **Sizing**: Multiple srcset sizes (640, 768, 1024, 1280, 1536)
- **Loading**: Lazy load below-fold, eager load above-fold
- **Dimensions**: Always specify width/height to prevent CLS
- **Optimization**: 80% quality, strip metadata

### Accessibility Requirements

| Requirement | Standard | How to Test |
|-------------|----------|-------------|
| Color Contrast | 4.5:1 minimum | WebAIM Contrast Checker |
| Keyboard Navigation | Full site accessible | Tab through manually |
| Screen Reader | Logical reading order | VoiceOver/NVDA |
| Focus Indicators | Visible on all interactive | Visual inspection |
| Reduced Motion | Respect prefers-reduced-motion | System preference |
| Alt Text | Descriptive, not decorative | Manual review |
| Form Labels | Associated with inputs | aXe DevTools |
| Error Messages | Clear and actionable | Manual review |

### SEO Checklist

**Per-Page Requirements:**
- [ ] Unique `<title>` (50-60 chars)
- [ ] Unique `<meta name="description">` (150-160 chars)
- [ ] Canonical URL
- [ ] Open Graph tags (title, description, image)
- [ ] Twitter Card tags
- [ ] Heading hierarchy (single H1, logical H2-H6)

**Site-Wide Requirements:**
- [ ] XML sitemap at `/sitemap.xml`
- [ ] robots.txt at `/robots.txt`
- [ ] Favicon and touch icons
- [ ] Organization schema on homepage
- [ ] WebSite schema with SearchAction
- [ ] BreadcrumbList on interior pages

---

## Collaboration Rules

### When to Propose (Wait for Approval)

- **New pages or major sections** — Affects site structure
- **Data structure changes** — Breaking changes to types
- **Design decisions** — Colors, layout, typography
- **Dependency additions** — New npm packages
- **Architecture changes** — New patterns or conventions

**How to Propose:**
```markdown
## Proposal: [Feature Name]

### Context
Why this is needed.

### Proposed Solution
What I plan to build.

### Alternatives Considered
What else could work.

### Questions
Anything I need clarified.
```

### When to Execute (Autonomous)

- **Bug fixes** — Obvious errors, no design decisions
- **Content updates** — Within existing structure
- **Style tweaks** — Minor adjustments, not new patterns
- **Performance optimizations** — No functional changes
- **Registry updates** — Keeping documentation current

### Commit Protocol

**Message Format:**
```
type(scope): description

- Detail 1
- Detail 2

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:**
- `feat` — New feature
- `fix` — Bug fix
- `content` — Content changes only
- `style` — Styling changes
- `refactor` — Code restructure, no behavior change
- `perf` — Performance improvement
- `a11y` — Accessibility improvement
- `seo` — SEO improvement
- `docs` — Documentation
- `chore` — Maintenance tasks

**Rules:**
- Atomic commits per feature
- Build must pass before commit
- No console.log in production
- No TypeScript errors (`strict: true`)
- No ESLint warnings

---

## Troubleshooting

### Common Issues

**Build fails with type error:**
1. Read the error message carefully
2. Check CONTENT_REGISTRY.md for the affected file
3. Verify data matches interface
4. Run `npm run build` to verify fix

**Image not loading:**
1. Check CDN URL in environment
2. Verify path exists in IMAGE_REGISTRY.md
3. Check Next.js image config for allowed domains

**Animation not working:**
1. Verify `'use client'` directive
2. Check viewport settings on motion container
3. Ensure variants are properly structured

**Content not updating:**
1. Stop dev server
2. Delete `.next` folder
3. Restart with `npm run dev`

---

## Template Quick Reference

### New Content Type
```bash
# 1. Create data file
touch data/content/{entity}.ts

# 2. Define interface and data
# 3. Add helper functions
# 4. Update CONTENT_REGISTRY.md
# 5. Run npm run build
```

### New Section Component
```bash
# 1. Create component file
touch components/sections/{Name}Section.tsx

# 2. Define props interface
# 3. Implement with motion
# 4. Add to page
# 5. Update COMPONENT_REGISTRY.md
```

### New Page
```bash
# 1. Create page file
mkdir -p app/{route}
touch app/{route}/page.tsx

# 2. Add metadata export
# 3. Compose sections
# 4. Add to navigation data
# 5. Update sitemap
```
