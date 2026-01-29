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

// Add more exports as you create content files:
// export { programs, getProgramBySlug, getAllPrograms } from './programs';
// export { team, getTeamMemberBySlug } from './team';
// export { testimonials, getFeaturedTestimonials } from './testimonials';
// export { faq, getFaqByCategory } from './faq';
