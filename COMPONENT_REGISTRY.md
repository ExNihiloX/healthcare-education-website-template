# Component Registry

This document catalogs all components in the website. **Update when adding components.**

Last updated: {DATE}

---

## Component Layers

```
components/
├── ui/           → Base components (shadcn/ui)
├── layout/       → Site-wide layout components
├── motion/       → Animation wrappers
├── sections/     → Page section components
├── forms/        → Form components
└── seo/          → SEO/schema components
```

---

## UI Components (`components/ui/`)

Base components from shadcn/ui. Install more as needed.

| Component | File | Status | Notes |
|-----------|------|--------|-------|
| Button | `button.tsx` | ✅ Installed | Variants: default, destructive, outline, secondary, ghost, link |
| Card | `card.tsx` | ⬜ | |
| Accordion | `accordion.tsx` | ⬜ | For FAQ sections |
| Dialog | `dialog.tsx` | ⬜ | For modals |
| Tabs | `tabs.tsx` | ⬜ | For tabbed content |
| Input | `input.tsx` | ⬜ | For forms |
| Textarea | `textarea.tsx` | ⬜ | For forms |
| Select | `select.tsx` | ⬜ | For forms |

### Installing shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```

---

## Layout Components (`components/layout/`)

| Component | File | Props | Notes |
|-----------|------|-------|-------|
| Header | `Header.tsx` | none | Responsive nav with mobile menu |
| Footer | `Footer.tsx` | none | Multi-column footer with social links |

---

## Motion Components (`components/motion/`)

| Component | File | Props | Notes |
|-----------|------|-------|-------|
| StaggerContainer | `StaggerContainer.tsx` | `delay`, `staggerDelay`, `viewport` | Staggers children animations |
| ScrollReveal | `ScrollReveal.tsx` | `animation`, `delay`, `viewport` | Single element reveal |

### Animation Types for ScrollReveal
- `fadeInUp` (default)
- `fadeInDown`
- `fadeInLeft`
- `fadeInRight`
- `scaleIn`

### Viewport Options
- `default` — Trigger at -100px from viewport
- `eager` — Trigger at -50px
- `lazy` — Trigger at -200px

### Usage Example
```tsx
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerContainer } from '@/components/motion/StaggerContainer';

// Single element
<ScrollReveal animation="fadeInUp" delay={0.2}>
  <Card />
</ScrollReveal>

// Staggered children
<StaggerContainer staggerDelay={0.1}>
  {items.map(item => (
    <ScrollReveal key={item.id}>
      <Card {...item} />
    </ScrollReveal>
  ))}
</StaggerContainer>
```

---

## Section Components (`components/sections/`)

Page building blocks. Create as needed.

| Component | File | Props | Used On |
|-----------|------|-------|---------|
| HeroSection | `HeroSection.tsx` | ⬜ | Homepage |
| FeaturesSection | `FeaturesSection.tsx` | ⬜ | Homepage, About |
| TestimonialsSection | `TestimonialsSection.tsx` | ⬜ | Homepage, Programs |
| CTASection | `CTASection.tsx` | ⬜ | Multiple pages |
| FAQSection | `FAQSection.tsx` | ⬜ | FAQ page, Programs |
| TeamSection | `TeamSection.tsx` | ⬜ | About/Team |
| StatsSection | `StatsSection.tsx` | ⬜ | Homepage, About |
| ProgramsGridSection | `ProgramsGridSection.tsx` | ⬜ | Programs listing |
| ContactSection | `ContactSection.tsx` | ⬜ | Contact page |

### Section Component Pattern
```tsx
// components/sections/ExampleSection.tsx
'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/motion/variants';
import { cn } from '@/lib/utils';

interface ExampleSectionProps {
  title: string;
  subtitle?: string;
  items: ItemType[];
  variant?: 'default' | 'centered';
  className?: string;
}

export function ExampleSection({
  title,
  subtitle,
  items,
  variant = 'default',
  className,
}: ExampleSectionProps) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="container"
      >
        {/* Section header */}
        <motion.div variants={fadeInUp} className="mb-12">
          <h2 className="text-3xl font-bold">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </motion.div>

        {/* Section content */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <motion.div key={item.id} variants={fadeInUp}>
              {/* Item content */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

---

## Form Components (`components/forms/`)

| Component | File | Props | Used On |
|-----------|------|-------|---------|
| ContactForm | `ContactForm.tsx` | ⬜ | Contact page |
| NewsletterForm | `NewsletterForm.tsx` | ⬜ | Footer, popups |
| ApplicationForm | `ApplicationForm.tsx` | ⬜ | Apply page |
| InterestForm | `InterestForm.tsx` | ⬜ | Program pages |

---

## SEO Components (`components/seo/`)

| Component | File | Props | Notes |
|-----------|------|-------|-------|
| JsonLd | `JsonLd.tsx` | `data` | Generic JSON-LD wrapper |
| OrganizationSchema | `JsonLd.tsx` | none | Organization structured data |
| WebSiteSchema | `JsonLd.tsx` | none | WebSite with SearchAction |
| BreadcrumbSchema | `JsonLd.tsx` | `items` | Breadcrumb list |
| CourseSchema | `JsonLd.tsx` | `name`, `description`, etc. | For program pages |
| FaqSchema | `JsonLd.tsx` | `items` | For FAQ sections |

### Usage Example
```tsx
// In a page component
import { CourseSchema, BreadcrumbSchema } from '@/components/seo/JsonLd';

export default function ProgramPage() {
  return (
    <>
      <CourseSchema
        name="Nursing Fundamentals"
        description="..."
        url="/programs/nursing"
        duration="PT6M"  // ISO 8601 duration
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Programs', href: '/programs' },
          { name: 'Nursing', href: '/programs/nursing' },
        ]}
      />
      {/* Page content */}
    </>
  );
}
```

---

## Adding New Components

1. Create component file in appropriate directory
2. Define TypeScript props interface
3. Implement component following patterns above
4. Add motion if it's a section component
5. Export from directory index if applicable
6. Update this registry
7. Test with `npm run dev`

---

## Component Quality Checklist

- [ ] TypeScript props with proper types
- [ ] Responsive at all breakpoints
- [ ] Uses motion variants (sections)
- [ ] Accessible (keyboard, screen reader)
- [ ] Uses `cn()` for conditional classes
- [ ] Follows naming convention
- [ ] Documented in this registry
