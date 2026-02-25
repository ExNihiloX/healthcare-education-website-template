import { Metadata } from 'next';
import { siteConfig } from '@/data/content/site';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { CTASection } from '@/components/sections/CTASection';
import { NewsSection } from '@/components/sections/NewsSection';

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreviewSection />
      <ProgramsSection />
      <FeaturesSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
