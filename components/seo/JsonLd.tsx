import { siteConfig } from '@/data/content';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Generic JSON-LD component for structured data
 *
 * Note: dangerouslySetInnerHTML is safe here because:
 * 1. The data is serialized JSON from our own typed data structures
 * 2. JSON.stringify properly escapes any special characters
 * 3. This is the standard pattern for JSON-LD in React/Next.js
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization schema for the website
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };

  return <JsonLd data={schema} />;
}

/**
 * WebSite schema with search action
 */
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <JsonLd data={schema} />;
}

/**
 * Breadcrumb schema generator
 */
interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return <JsonLd data={schema} />;
}

/**
 * Course schema for educational programs
 */
interface CourseSchemaProps {
  name: string;
  description: string;
  provider?: string;
  url: string;
  image?: string;
  duration?: string;
  courseMode?: 'online' | 'onsite' | 'blended';
}

export function CourseSchema({
  name,
  description,
  provider = siteConfig.name,
  url,
  image,
  duration,
  courseMode = 'blended',
}: CourseSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}${url}`,
    ...(image && { image: `${siteConfig.url}${image}` }),
    ...(duration && { timeRequired: duration }),
    courseMode: courseMode === 'online' ? 'online' : courseMode === 'onsite' ? 'onsite' : 'blended',
  };

  return <JsonLd data={schema} />;
}

/**
 * FAQ schema
 */
interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSchema({ items }: { items: FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}
