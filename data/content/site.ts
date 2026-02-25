/**
 * Site Configuration
 *
 * Baldwin University College - Accra, Ghana
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
    registrarEmail: string;
    phone: string;
    secondaryPhone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
      digitalAddress: string;
      poBox: string;
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
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  accreditations: string[];
}

export const siteConfig: SiteConfig = {
  name: 'Baldwin University College',
  description:
    'Baldwin University College offers students a rich, multidimensional educational experience in an academically challenging environment, fostering critical thinking and creative exploration while preparing students for the global world.',
  tagline: 'Where the Sky is the Limit',
  url: 'https://baldwin.edu.gh',
  ogImage: '/og-image.jpg',
  keywords: [
    'Baldwin University College',
    'university in Ghana',
    'Accra university',
    'medical laboratory science Ghana',
    'information technology degree Ghana',
    'software engineering Ghana',
    'medical school Ghana',
    'HND dispensing technology',
    'Baldwin Medical School',
    'higher education Ghana',
    'GTEC accredited university',
  ],
  contact: {
    email: 'enquiries@baldwin.edu.gh',
    registrarEmail: 'registrar@baldwin.edu.gh',
    phone: '+233 20 913 1133',
    secondaryPhone: '+233 54 012 7455',
    address: {
      street: 'Osu Troas Street',
      city: 'Accra',
      state: 'Greater Accra',
      zip: '',
      country: 'Ghana',
      digitalAddress: 'GA-082-6568',
      poBox: 'P.O. Box 19872, Accra-North, Accra',
    },
  },
  social: {
    twitter: 'https://twitter.com/BaldwinUniv_',
    facebook: 'https://facebook.com/baldwin.university/',
    instagram: 'https://instagram.com/baldwin_university/',
    youtube: 'https://youtube.com/channel/UCdYTcFxqra_ItZTMPxFuaIA',
  },
  legal: {
    privacyUrl: '/privacy',
    termsUrl: '/terms',
  },
  hours: {
    weekday: 'Monday – Friday: 8am – 5pm',
    saturday: 'Saturday: 9am – 5pm',
    sunday: 'Sunday: 1pm – 5pm',
  },
  accreditations: [
    'Ghana Tertiary Education Commission (GTEC)',
    'University of Cape Coast (UCC)',
    'Xavier University School of Medicine (XUSOM)',
    'Council for Technical and Vocational Education and Training (CTVET)',
  ],
};
