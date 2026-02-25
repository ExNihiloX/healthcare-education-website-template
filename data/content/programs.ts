/**
 * Programmes Data
 *
 * All academic programmes offered at Baldwin University College.
 */

export interface Program {
  slug: string;
  title: string;
  shortTitle: string;
  degree: string;
  department: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  format: 'full-time' | 'part-time' | 'weekend';
  outcomes: string[];
  featured: boolean;
  icon: string;
  image: string;
  accreditedBy?: string;
}

export const programs: Record<string, Program> = {
  medicine: {
    slug: 'medicine',
    title: 'Bachelor of Medicine and Bachelor of Surgery',
    shortTitle: 'Medicine (MB ChB)',
    degree: 'MB ChB',
    department: 'Baldwin Medical School',
    shortDescription:
      'A six-year programme training physicians and surgeons to diagnose illnesses and provide treatment, with clinical rotations at accredited teaching hospitals.',
    fullDescription:
      'The six-year MB ChB degree trains physicians and surgeons to diagnose illnesses and prescribe and administer appropriate treatments. The programme is structured in two cycles: Cycle I (Preclinical, Years 1-3) covers the scientific foundations of medicine, while Cycle II (Clinical, Years 4-6) provides hands-on training through clerkship rotations in Internal Medicine, Surgery, Child Health, Obstetrics & Gynaecology, Community Medicine, and more.',
    duration: '6 years',
    format: 'full-time',
    outcomes: [
      'General Medical Practice in public or private healthcare',
      'Specialist Medical Training in surgery, paediatrics, psychiatry, and more',
      'Medical Research and Academia',
      'Public Health Practice and Epidemiology',
      'Medical Administration and Policy Development',
      'International Health and Humanitarian Work',
    ],
    featured: true,
    icon: 'Stethoscope',
    image: '/images/slides/1.jpg',
    accreditedBy: 'GTEC & XUSOM',
  },
  'medical-laboratory-science': {
    slug: 'medical-laboratory-science',
    title: 'BSc. Medical Laboratory Science',
    shortTitle: 'Medical Lab Science',
    degree: 'BSc.',
    department: 'Health & Allied Sciences',
    shortDescription:
      'Produces competent Medical Laboratory Technologists of high professional standing, equipped to practice in all spheres of medical laboratory science.',
    fullDescription:
      'This programme aims at producing competent Medical Laboratory Technologists who can practice across all areas of medical laboratory science. Students develop capacity to function as informed professionals in a changing healthcare landscape, acquire skills in critical observation through specialty unit placements, and develop understanding of current and future health issues including international health regulations.',
    duration: '4 years',
    format: 'full-time',
    outcomes: [
      'Clinical Laboratory Technologist',
      'Research Laboratory Scientist',
      'Quality Assurance Specialist',
      'Public Health Laboratory Professional',
      'Pharmaceutical Industry Specialist',
      'Healthcare Administration',
    ],
    featured: true,
    icon: 'Microscope',
    image: '/images/slides/4.jpg',
    accreditedBy: 'UCC & GTEC',
  },
  'information-technology': {
    slug: 'information-technology',
    title: 'BSc. Information Technology',
    shortTitle: 'Information Technology',
    degree: 'BSc.',
    department: 'Information Technology',
    shortDescription:
      'Equips graduates with current IT principles and effective skills for management and technical roles in network administration, security, and web development.',
    fullDescription:
      'The BSc. Information Technology programme meets industry needs by educating IT workers in current principles and practices. Students gain skills in network administration, information security, information systems, telecommunications, web development, computer graphics, and data management. The programme provides a gateway to careers in IT and entrepreneurship.',
    duration: '4 years',
    format: 'full-time',
    outcomes: [
      'Network Administrator',
      'Information Security Analyst',
      'Web Developer',
      'Systems Administrator',
      'IT Project Manager',
      'Technology Entrepreneur',
    ],
    featured: true,
    icon: 'Monitor',
    image: '/images/slides/6.jpg',
    accreditedBy: 'UCC & GTEC',
  },
  'software-engineering': {
    slug: 'software-engineering',
    title: 'BSc. Software Engineering',
    shortTitle: 'Software Engineering',
    degree: 'BSc.',
    department: 'Information Technology',
    shortDescription:
      'Prepares graduates with professionally guided education in Software Engineering, teaching skills to develop high-quality software for industry and government.',
    fullDescription:
      'The BSc. Software Engineering programme equips students with a professionally guided education in software development. Graduates are prepared for careers in industry, government, computing graduate programmes, and professional education, with skills to develop high-quality, reliable software solutions.',
    duration: '4 years',
    format: 'full-time',
    outcomes: [
      'Software Developer',
      'Full-Stack Engineer',
      'Mobile Application Developer',
      'DevOps Engineer',
      'Software Architect',
      'Technology Startup Founder',
    ],
    featured: true,
    icon: 'Code',
    image: '/images/slides/8.jpg',
    accreditedBy: 'UCC & GTEC',
  },
  'hnd-medical-laboratory-science': {
    slug: 'hnd-medical-laboratory-science',
    title: 'HND Medical Laboratory Science',
    shortTitle: 'HND Medical Lab',
    degree: 'HND',
    department: 'Health & Allied Sciences',
    shortDescription:
      'A Higher National Diploma in Medical Laboratory Science, preparing technicians for clinical laboratory practice.',
    fullDescription:
      'The HND in Medical Laboratory Science prepares students as competent medical laboratory technicians. Awards are issued by the National Board for Professional and Technician Examinations (NABPTEX).',
    duration: '3 years',
    format: 'full-time',
    outcomes: [
      'Medical Laboratory Technician',
      'Diagnostic Laboratory Assistant',
      'Blood Bank Technician',
      'Laboratory Quality Technician',
    ],
    featured: false,
    icon: 'TestTube',
    image: '/images/slides/10.jpg',
    accreditedBy: 'CTVET & NABPTEX',
  },
  'hnd-dispensing-technology': {
    slug: 'hnd-dispensing-technology',
    title: 'HND Dispensing Technology',
    shortTitle: 'HND Dispensing Tech',
    degree: 'HND',
    department: 'Health & Allied Sciences',
    shortDescription:
      'A Higher National Diploma in Pharmacy Technology, training professionals in pharmaceutical dispensing and practice.',
    fullDescription:
      'The HND in Dispensing Technology (Pharmacy Technology) trains students in pharmaceutical dispensing, drug management, and pharmacy practice. Awards are issued by NABPTEX.',
    duration: '3 years',
    format: 'full-time',
    outcomes: [
      'Pharmacy Technician',
      'Dispensary Manager',
      'Pharmaceutical Sales Representative',
      'Hospital Pharmacy Assistant',
    ],
    featured: false,
    icon: 'Pill',
    image: '/images/slides/12.jpg',
    accreditedBy: 'CTVET & NABPTEX',
  },
  'certificate-medicine-counter': {
    slug: 'certificate-medicine-counter',
    title: 'Certificate in Medicine Counter Assistantship',
    shortTitle: 'Medicine Counter Assistant',
    degree: 'Certificate',
    department: 'Health & Allied Sciences',
    shortDescription:
      'A Pharmacy Council-approved certificate programme for medicine counter assistants, with 6-12 months duration.',
    fullDescription:
      'This Pharmacy Council-approved certificate programme trains students in medicine counter assistantship, preparing them to assist pharmacists in dispensing and customer service in pharmacy settings.',
    duration: '6–12 months',
    format: 'full-time',
    outcomes: [
      'Medicine Counter Assistant',
      'Pharmacy Aid',
      'Health Product Advisor',
    ],
    featured: false,
    icon: 'Briefcase',
    image: '/images/slides/14.jpg',
    accreditedBy: 'Pharmacy Council',
  },
};

// Helper functions
export function getAllPrograms(): Program[] {
  return Object.values(programs);
}

export function getFeaturedPrograms(): Program[] {
  return getAllPrograms().filter((p) => p.featured);
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs[slug];
}

export function getProgramsByDepartment(department: string): Program[] {
  return getAllPrograms().filter((p) => p.department === department);
}
