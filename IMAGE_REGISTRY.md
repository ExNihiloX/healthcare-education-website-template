# Image Registry

This document tracks all images used in the website. **Update after adding/removing images.**

Last updated: {DATE}

---

## CDN Configuration

| Setting | Value |
|---------|-------|
| CDN Type | {supabase \| cloudinary \| custom} |
| Base URL | {NEXT_PUBLIC_CDN_URL} |
| Config File | `lib/images.ts` |

---

## Image Inventory

### Hero Images
| Path | Alt Text | Dimensions | Used On |
|------|----------|------------|---------|
| `hero/main-hero.jpg` | Students in healthcare training | 1920x1080 | Homepage |
| | | | |

### Team Photos
| Path | Alt Text | Dimensions | Team Member |
|------|----------|------------|-------------|
| | | | |

### Program Images
| Path | Alt Text | Dimensions | Program |
|------|----------|------------|---------|
| | | | |

### Campus/Facility
| Path | Alt Text | Dimensions | Used On |
|------|----------|------------|---------|
| | | | |

### Testimonials
| Path | Alt Text | Dimensions | Testimonial ID |
|------|----------|------------|----------------|
| | | | |

### Blog
| Path | Alt Text | Dimensions | Post |
|------|----------|------------|------|
| | | | |

### Icons/Graphics
| Path | Alt Text | Dimensions | Purpose |
|------|----------|------------|---------|
| | | | |

---

## Image Standards

### Required Formats
- **Primary:** AVIF (best compression)
- **Fallback:** WebP
- **Legacy:** JPEG (only if needed)

### Recommended Dimensions

| Use Case | Dimensions | Aspect Ratio |
|----------|------------|--------------|
| Hero banner | 1920x1080 | 16:9 |
| Card image | 800x600 | 4:3 |
| Team photo | 400x400 | 1:1 |
| Thumbnail | 200x200 | 1:1 |
| Blog featured | 1200x630 | ~1.9:1 (OG) |
| Logo | 200x60 | varies |

### Quality Settings
- **Hero/featured:** 85% quality
- **Cards/grid:** 80% quality
- **Thumbnails:** 75% quality

---

## Unused Images

Images uploaded but not currently used:

| Path | Uploaded | Notes |
|------|----------|-------|
| | | |

---

## Missing Images

Images needed but not yet uploaded:

| Purpose | Dimensions | Priority | Assignee |
|---------|------------|----------|----------|
| | | | |

---

## Image Optimization Checklist

- [ ] All images have descriptive alt text
- [ ] No images over 500KB
- [ ] Hero images have blur placeholders
- [ ] Team photos are consistently cropped
- [ ] Program images follow brand style
- [ ] Fallback images are configured

---

## CDN Upload Process

### Supabase Storage
```bash
# Upload via CLI
supabase storage cp ./local-image.jpg storage://images/hero/

# Or use the Supabase dashboard
```

### Cloudinary
```bash
# Upload via CLI
cloudinary uploader upload ./local-image.jpg public_id=images/hero/main-hero
```

### After Upload
1. Add to appropriate section in this registry
2. Update `data/images/curated.ts` if needed
3. Verify image loads: `npm run dev`
