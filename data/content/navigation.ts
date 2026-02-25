/**
 * Navigation Configuration
 *
 * Baldwin University College header and footer navigation.
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
    label: 'About',
    href: '/about',
    children: [
      {
        label: 'About Baldwin',
        href: '/about',
        description: 'Our history, mission, and vision',
      },
      {
        label: 'Leadership',
        href: '/about/leadership',
        description: 'Meet our president and leadership team',
      },
      {
        label: 'Accreditations',
        href: '/about/accreditations',
        description: 'Our affiliations and accrediting bodies',
      },
    ],
  },
  {
    label: 'Programmes',
    href: '/programmes',
    children: [
      {
        label: 'All Programmes',
        href: '/programmes',
        description: 'Browse all degree and certificate programmes',
      },
      {
        label: 'Medical School (MB ChB)',
        href: '/programmes/medicine',
        description: 'Bachelor of Medicine and Bachelor of Surgery',
      },
      {
        label: 'BSc. Medical Laboratory Science',
        href: '/programmes/medical-laboratory-science',
        description: 'Biomedical sciences and clinical laboratory',
      },
      {
        label: 'BSc. Information Technology',
        href: '/programmes/information-technology',
        description: 'Network, security, and information systems',
      },
      {
        label: 'BSc. Software Engineering',
        href: '/programmes/software-engineering',
        description: 'High-quality software development',
      },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    children: [
      {
        label: 'Entry Requirements',
        href: '/admissions',
        description: 'Qualifications and eligibility criteria',
      },
      {
        label: 'How to Apply',
        href: '/admissions/apply',
        description: 'Step-by-step application process',
      },
      {
        label: 'Financial Aid',
        href: '/admissions/financial-aid',
        description: 'Scholarships, sponsorships, and work-study',
      },
      {
        label: 'International Students',
        href: '/admissions/international',
        description: 'Information for applicants outside Ghana',
      },
    ],
  },
  {
    label: 'Student Life',
    href: '/student-life',
    children: [
      {
        label: 'The Baldwin Experience',
        href: '/student-life',
        description: 'Campus life and student resources',
      },
      {
        label: 'Library',
        href: '/student-life/library',
        description: 'The Baldwin Library and digital resources',
      },
      {
        label: 'Learning Center',
        href: '/student-life/learning-center',
        description: 'Tutorials, study circles, and skill development',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

// Footer navigation sections
export const footerNav: FooterSection[] = [
  {
    title: 'Programmes',
    links: [
      { label: 'Medicine (MB ChB)', href: '/programmes/medicine' },
      { label: 'Medical Laboratory Science', href: '/programmes/medical-laboratory-science' },
      { label: 'Information Technology', href: '/programmes/information-technology' },
      { label: 'Software Engineering', href: '/programmes/software-engineering' },
      { label: 'HND Dispensing Technology', href: '/programmes/hnd-dispensing-technology' },
      { label: 'All Programmes', href: '/programmes' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Apply Now', href: '/admissions/apply' },
      { label: 'Student Portal', href: 'https://portal.baldwin.edu.gh', external: true },
      { label: 'E-Learning (Moodle)', href: 'https://lms.baldwin.edu.gh', external: true },
      { label: 'Library Catalogue', href: 'https://library.baldwin.edu.gh', external: true },
      { label: 'Financial Aid', href: '/admissions/financial-aid' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our History', href: '/about' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Accreditations', href: '/about/accreditations' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

// Call-to-action buttons in header
export const headerCTA = {
  primary: {
    label: 'Apply Now',
    href: '/admissions/apply',
  },
  secondary: {
    label: 'Visit Campus',
    href: '/contact',
  },
};
