/**
 * Homepage Content
 *
 * Hero section, stats, features, and CTA content for the Baldwin homepage.
 */

export interface HeroContent {
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface CTAContent {
  headline: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export const heroContent: HeroContent = {
  headline: 'Where the Sky is the Limit',
  subheadline: 'Baldwin University College — Accra, Ghana',
  description:
    'A rich, multidimensional educational experience in an academically challenging environment. We foster critical thinking and creative exploration while preparing students to lead in a global world.',
  primaryCTA: { label: 'Apply Now', href: '/admissions/apply' },
  secondaryCTA: { label: 'Explore Programmes', href: '/programmes' },
};

export const stats: Stat[] = [
  {
    value: '7+',
    label: 'Academic Programmes',
    description: 'From medicine to software engineering',
  },
  {
    value: '4',
    label: 'Accreditations',
    description: 'GTEC, UCC, XUSOM, and CTVET',
  },
  {
    value: '900+',
    label: 'Students',
    description: 'Growing community of scholars',
  },
  {
    value: '6',
    label: 'Year Medical Programme',
    description: 'Baldwin Medical School MB ChB',
  },
];

export const features: Feature[] = [
  {
    title: 'Baldwin Medical School',
    description:
      'A six-year MB ChB programme with clinical rotations at accredited teaching hospitals, training the next generation of physicians and surgeons for Ghana and beyond.',
    icon: 'Stethoscope',
  },
  {
    title: 'Health & Allied Sciences',
    description:
      'BSc. Medical Laboratory Science, HND Dispensing Technology, and more — producing competent professionals for the growing healthcare sector.',
    icon: 'Microscope',
  },
  {
    title: 'Technology & Innovation',
    description:
      'BSc. Information Technology and Software Engineering programmes equipping graduates with skills for the digital economy and tech entrepreneurship.',
    icon: 'Code',
  },
  {
    title: 'Value-Centred Education',
    description:
      'An independent, comprehensive institution that enhances intellectual, ethical, spiritual, and social development through a strong liberal arts and science core.',
    icon: 'GraduationCap',
  },
  {
    title: 'Faculty Mentorship',
    description:
      'Noted scholars with extensive knowledge and enthusiasm, accessible to address individual student needs through dedicated mentoring programmes.',
    icon: 'Users',
  },
  {
    title: 'Career Readiness',
    description:
      'Career planning workshops, work-study programmes, and alumni networks connecting graduates to opportunities across Ghana and internationally.',
    icon: 'Briefcase',
  },
];

export const ctaContent: CTAContent = {
  headline: 'Begin Your Journey at Baldwin',
  description:
    'Applications are now open for the upcoming academic year. Take the first step towards a career in medicine, health sciences, or technology.',
  primaryCTA: { label: 'Start Your Application', href: '/admissions/apply' },
  secondaryCTA: { label: 'Request Information', href: '/contact' },
};

export const aboutPreview = {
  headline: 'About Baldwin University College',
  description:
    'Founded to transfer knowledge and skills to youth willing to learn the Sciences, Baldwin University College provides a value-centred educational experience grounded in academic excellence, truth, and respect for the worth and dignity of every student.',
  mission:
    'Baldwin University College is an independent, comprehensive institution which provides a value-centred educational experience that enhances intellectual, ethical, spiritual and social development for students.',
  vision:
    'Baldwin University College aspires to become the Preferred Institution that trains the minds that make important decisions in shaping the world.',
  link: { label: 'Learn More About Baldwin', href: '/about' },
};
