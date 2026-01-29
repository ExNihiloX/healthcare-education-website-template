/**
 * Site Configuration
 *
 * Core site-wide settings including metadata, branding, and contact information.
 */

export interface SiteConfig {
  name: string;
  description: string;
  tagline: string;
  url: string;
  ogImage: string;
  keywords: string[];
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
  };
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  legal: {
    privacyUrl: string;
    termsUrl: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Your Organization Name',
  description: 'Brief description of your organization and what you do.',
  tagline: 'Your memorable tagline here',
  url: 'https://example.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'healthcare',
    'education',
    'training',
    'certification',
    // Add more keywords
  ],
  contact: {
    email: 'info@example.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Main Street',
      city: 'City',
      state: 'State',
      zip: '12345',
      country: 'USA',
    },
  },
  social: {
    twitter: 'https://twitter.com/example',
    facebook: 'https://facebook.com/example',
    instagram: 'https://instagram.com/example',
    linkedin: 'https://linkedin.com/company/example',
    youtube: 'https://youtube.com/@example',
  },
  legal: {
    privacyUrl: '/privacy',
    termsUrl: '/terms',
  },
};
