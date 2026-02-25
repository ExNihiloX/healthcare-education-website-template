/**
 * Content Hub
 *
 * Re-exports all content for centralized imports.
 */

// Site configuration
export { siteConfig } from './site';
export type { SiteConfig } from './site';

// Navigation
export { mainNav, footerNav, headerCTA } from './navigation';
export type { NavItem, FooterSection } from './navigation';

// Programmes
export { programs, getAllPrograms, getFeaturedPrograms, getProgramBySlug, getProgramsByDepartment } from './programs';
export type { Program } from './programs';

// Homepage
export {
  heroContent,
  stats,
  features,
  ctaContent,
  aboutPreview,
} from './homepage';
export type { HeroContent, Stat, Feature, CTAContent } from './homepage';
