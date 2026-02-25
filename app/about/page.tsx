import { Metadata } from 'next';
import { siteConfig } from '@/data/content/site';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${siteConfig.name} — our history, mission, vision, and accreditations.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
