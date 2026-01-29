/**
 * Curated Image Selections
 *
 * Pre-selected images for each section of the website.
 * Update paths to match your CDN structure.
 */

export interface CuratedImage {
  path: string;
  alt: string;
  width: number;
  height: number;
}

// Hero section images
export const heroImages: CuratedImage[] = [
  {
    path: 'hero/main-hero.jpg',
    alt: 'Students in a healthcare training environment',
    width: 1920,
    height: 1080,
  },
];

// Team/faculty images
export const teamImages: Record<string, CuratedImage> = {
  // 'team-member-slug': { path: '...', alt: '...', width: 400, height: 400 },
};

// Campus/facility images
export const campusImages: CuratedImage[] = [
  // { path: 'campus/building.jpg', alt: '...', width: 1200, height: 800 },
];

// Program images
export const programImages: Record<string, CuratedImage> = {
  // 'program-slug': { path: '...', alt: '...', width: 800, height: 600 },
};

// Testimonial images
export const testimonialImages: Record<string, CuratedImage> = {
  // 'testimonial-id': { path: '...', alt: '...', width: 100, height: 100 },
};

// Default/fallback images
export const fallbackImages = {
  avatar: {
    path: 'defaults/avatar.jpg',
    alt: 'Default avatar',
    width: 100,
    height: 100,
  },
  hero: {
    path: 'defaults/hero.jpg',
    alt: 'Default hero image',
    width: 1920,
    height: 1080,
  },
  card: {
    path: 'defaults/card.jpg',
    alt: 'Default card image',
    width: 800,
    height: 600,
  },
};
