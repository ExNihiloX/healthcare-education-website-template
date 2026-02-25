'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { getFeaturedPrograms } from '@/data/content';
import {
  Stethoscope,
  Microscope,
  Monitor,
  Code,
  GraduationCap,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Microscope,
  Monitor,
  Code,
  GraduationCap,
};

export function ProgramsSection() {
  const featured = getFeaturedPrograms();

  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our Programmes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From medicine to technology, Baldwin offers accredited programmes designed for the careers of tomorrow.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {featured.map((program) => {
            const Icon = iconMap[program.icon] || GraduationCap;
            return (
              <motion.div key={program.slug} variants={fadeInUp}>
                <Link
                  href={`/programmes/${program.slug}`}
                  className="group flex h-full flex-col rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex shrink-0 rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {program.degree}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {program.duration}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold group-hover:text-primary">
                        {program.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {program.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    Learn more
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <Link
            href="/programmes"
            className="inline-flex items-center rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
          >
            View All Programmes
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
