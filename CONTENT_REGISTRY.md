# Content Registry

This document maps all content in the website to its source file. **Read this before editing any content.**

Last updated: {DATE}

---

## Site Configuration

| What | File | Export | How to Edit |
|------|------|--------|-------------|
| Site name, tagline | `data/content/site.ts` | `siteConfig` | Edit `name`, `description`, `tagline` |
| Contact info | `data/content/site.ts` | `siteConfig.contact` | Edit `email`, `phone`, `address` |
| Social links | `data/content/site.ts` | `siteConfig.social` | Edit `twitter`, `facebook`, etc. |
| SEO defaults | `data/content/site.ts` | `siteConfig` | Edit `url`, `ogImage`, `keywords` |

**Consumed by:** `app/layout.tsx`, `components/layout/Footer.tsx`, `components/seo/JsonLd.tsx`

---

## Navigation

| What | File | Export | Identifier |
|------|------|--------|------------|
| Header nav items | `data/content/navigation.ts` | `mainNav` | By `label` or `href` |
| Footer sections | `data/content/navigation.ts` | `footerNav` | By section `title` |
| Header CTA buttons | `data/content/navigation.ts` | `headerCTA` | `primary`, `secondary` |

**Consumed by:** `components/layout/Header.tsx`, `components/layout/Footer.tsx`

### Adding a Nav Item
```typescript
// In mainNav array:
{
  label: 'New Page',
  href: '/new-page',
  // Optional children for dropdown:
  children: [
    { label: 'Sub Item', href: '/new-page/sub', description: 'Description' },
  ],
}
```

---

## Programs / Courses

> Create `data/content/programs.ts` when ready

| What | File | Export | Identifier |
|------|------|--------|------------|
| All programs | `data/content/programs.ts` | `programs` | By `slug` |
| Single program | `data/content/programs.ts` | `getProgramBySlug(slug)` | `slug` |
| Featured programs | `data/content/programs.ts` | `getFeaturedPrograms()` | `featured: true` |

**Consumed by:** Program listing page, program detail pages, homepage features

### Program Interface
```typescript
interface Program {
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
  faculty: string[];
  featured: boolean;
}
```

---

## Team / Faculty

> Create `data/content/team.ts` when ready

| What | File | Export | Identifier |
|------|------|--------|------------|
| All team members | `data/content/team.ts` | `team` | By `slug` |
| Single member | `data/content/team.ts` | `getTeamMemberBySlug(slug)` | `slug` |
| By department | `data/content/team.ts` | `getTeamByDepartment(dept)` | `department` |

**Consumed by:** Team page, program faculty sections

### Team Member Interface
```typescript
interface TeamMember {
  slug: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  image: string;
  credentials?: string[];
  socialLinks?: { platform: string; url: string }[];
}
```

---

## Testimonials

> Create `data/content/testimonials.ts` when ready

| What | File | Export | Identifier |
|------|------|--------|------------|
| All testimonials | `data/content/testimonials.ts` | `testimonials` | By `id` |
| Featured | `data/content/testimonials.ts` | `getFeaturedTestimonials()` | `featured: true` |
| By program | `data/content/testimonials.ts` | `getTestimonialsByProgram(slug)` | `program` |

**Consumed by:** Testimonial sections, program pages

### Testimonial Interface
```typescript
interface Testimonial {
  id: string;
  name: string;
  title?: string;
  company?: string;
  program?: string;
  quote: string;
  image?: string;
  rating?: number;
  featured: boolean;
}
```

---

## FAQ

> Create `data/content/faq.ts` when ready

| What | File | Export | Identifier |
|------|------|--------|------------|
| All FAQ | `data/content/faq.ts` | `faq` | By `id` |
| By category | `data/content/faq.ts` | `getFaqByCategory(cat)` | `category` |

**Consumed by:** FAQ page, FAQ sections, schema generation

### FAQ Interface
```typescript
interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
```

---

## Homepage Sections

> Create `data/content/homepage.ts` for homepage-specific content

| What | File | Export | Notes |
|------|------|--------|-------|
| Hero content | `data/content/homepage.ts` | `heroContent` | Title, subtitle, CTA |
| Features | `data/content/homepage.ts` | `features` | Array of feature items |
| Stats | `data/content/homepage.ts` | `stats` | Array of stat items |

---

## Images

| What | File | Export | Notes |
|------|------|--------|-------|
| Hero images | `data/images/curated.ts` | `heroImages` | Array of images |
| Team photos | `data/images/curated.ts` | `teamImages` | Keyed by member slug |
| Program images | `data/images/curated.ts` | `programImages` | Keyed by program slug |
| Fallbacks | `data/images/curated.ts` | `fallbackImages` | Default placeholders |

See `IMAGE_REGISTRY.md` for full image inventory.

---

## Adding New Content Types

1. Create `data/content/{entity}.ts`
2. Define TypeScript interface
3. Create data object with records
4. Add helper functions (getAll, getBySlug, etc.)
5. Export from `data/content/index.ts`
6. Add section to this registry
7. Run `npm run build` to verify
