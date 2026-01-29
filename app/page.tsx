import { Metadata } from 'next';
import { siteConfig } from '@/data/content/site';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
        </div>
      </section>

      {/* Add more sections here */}
    </>
  );
}
