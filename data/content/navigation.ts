/**
 * Navigation Configuration
 *
 * Header and footer navigation structures.
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

// Main header navigation
export const mainNav: NavItem[] = [
  {
    label: 'Programs',
    href: '/programs',
    children: [
      {
        label: 'All Programs',
        href: '/programs',
        description: 'Browse all available programs',
      },
      // Add more program links
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      {
        label: 'Our Story',
        href: '/about',
        description: 'Learn about our mission and values',
      },
      {
        label: 'Team',
        href: '/about/team',
        description: 'Meet our faculty and staff',
      },
      {
        label: 'Campus',
        href: '/about/campus',
        description: 'Explore our facilities',
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

// Footer navigation sections
export const footerNav: FooterSection[] = [
  {
    title: 'Programs',
    links: [
      { label: 'All Programs', href: '/programs' },
      // Add program links
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Team', href: '/about/team' },
      { label: 'Campus', href: '/about/campus' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Student Portal', href: '/portal', external: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];

// Call-to-action buttons in header
export const headerCTA = {
  primary: {
    label: 'Apply Now',
    href: '/apply',
  },
  secondary: {
    label: 'Request Info',
    href: '/contact',
  },
};
