# Healthcare Education Website Template

A production-ready Next.js 15 template for building Healthcare and Education websites with Claude Code.

## Features

- **Next.js 15** with App Router and React 19
- **TypeScript** with strict mode
- **Tailwind CSS** with CSS variables for theming
- **shadcn/ui** component library
- **Framer Motion** animations with reusable variants
- **Content-as-Code** architecture with typed data files
- **SEO-ready** with structured data schemas
- **Accessibility-first** design
- **Claude Code optimized** with registries and playbook

## Quick Start

```bash
# Clone the template
git clone https://github.com/ExNihiloX/healthcare-education-website-template.git my-website
cd my-website

# Remove template history
rm -rf .git
git init

# Install dependencies
npm install

# Start development
npm run dev
```

## Project Structure

```
├── app/                  # Next.js pages and layouts
├── components/
│   ├── ui/              # shadcn/ui base components
│   ├── layout/          # Header, Footer
│   ├── motion/          # Animation wrappers
│   ├── sections/        # Page sections
│   ├── forms/           # Form components
│   └── seo/             # JSON-LD schemas
├── data/
│   ├── content/         # TypeScript content files
│   └── images/          # Curated image selections
├── lib/
│   ├── motion/          # Animation config
│   ├── images.ts        # CDN helpers
│   └── utils.ts         # Utilities
├── docs/                # Project documentation
├── scripts/             # Build scripts
├── CLAUDE.md            # Project instructions for Claude
├── CONTENT_REGISTRY.md  # Content file mapping
├── IMAGE_REGISTRY.md    # Image inventory
└── COMPONENT_REGISTRY.md # Component catalog
```

## Configuration

### Brand Colors

Edit `app/globals.css` to set your brand colors:

```css
:root {
  --primary: 221 83% 53%;  /* Your primary color in HSL */
  /* ... */
}
```

### Image CDN

Configure your CDN in `.env.local`:

```bash
NEXT_PUBLIC_CDN_URL=https://your-cdn.com
NEXT_PUBLIC_CDN_TYPE=supabase  # or cloudinary, custom
```

### Site Config

Edit `data/content/site.ts` with your organization details.

## Working with Claude Code

This template is optimized for Claude Code development:

1. **CLAUDE.md** - Project-specific instructions
2. **AGENT_PLAYBOOK.md** - Universal build methodology (in `~/.claude/`)
3. **Registry files** - Quick content/component lookup

### Build Phases

1. **Discovery** - Gather requirements in `docs/discovery.md`
2. **Architecture** - Configure colors, CDN, data structure
3. **Content** - Populate data files with real content
4. **Components** - Build UI components and pages
5. **Polish** - SEO, performance, accessibility
6. **Launch** - Deploy and document

## Commands

```bash
npm run dev              # Development server
npm run build            # Production build
npm run lint             # ESLint
npm run generate:registries  # Update registry files
```

## Adding Content

1. Create `data/content/{entity}.ts`
2. Define TypeScript interface
3. Add data and helper functions
4. Export from `data/content/index.ts`
5. Update `CONTENT_REGISTRY.md`
6. Run `npm run build` to verify

## Adding Components

1. Create component in appropriate `components/` subdirectory
2. Use motion variants for sections
3. Follow existing patterns
4. Update `COMPONENT_REGISTRY.md`

## License

MIT
