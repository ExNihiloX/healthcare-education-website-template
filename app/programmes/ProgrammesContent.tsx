'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { getAllPrograms } from '@/data/content';
import {
  Stethoscope,
  Microscope,
  Monitor,
  Code,
  GraduationCap,
  TestTube,
  Pill,
  Briefcase,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Microscope,
  Monitor,
  Code,
  GraduationCap,
  TestTube,
  Pill,
  Briefcase,
};

export function ProgrammesContent() {
  const programs = getAllPrograms();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 text-white md:py-28">
        <Image
          src="/images/slides/6.jpg"
          alt="Baldwin University academic programmes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />
        <motion.div
          className="container relative"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-primary-200"
          >
            Academics
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-3 text-4xl font-bold tracking-tight md:text-5xl"
          >
            Our Programmes
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-lg text-primary-100/90"
          >
            From Medicine to Software Engineering, Baldwin offers accredited
            programmes designed for the careers of tomorrow.
          </motion.p>
        </motion.div>
      </section>

      {/* Programmes Grid */}
      <section className="py-20 md:py-28">
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const Icon = iconMap[program.icon] || GraduationCap;
              return (
                <motion.div key={program.slug} variants={fadeInUp}>
                  <Link
                    href={`/programmes/${program.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image src={program.image} alt={program.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col p-6">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex gap-2">
                        <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {program.degree}
                        </span>
                        <span className="inline-flex items-center text-xs text-muted-foreground">
                          {program.duration}
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold group-hover:text-primary">
                      {program.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {program.department}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {program.shortDescription}
                    </p>

                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                      Learn more
                      <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 text-white">
        <Image
          src="/images/slides/10.jpg"
          alt="Ready to apply to Baldwin University"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-950/90" />
        <div className="container relative text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready to Apply?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100/80">
            Take the first step towards your future at Baldwin University College.
          </p>
          <Link
            href="/admissions"
            className="mt-8 inline-flex rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary-900 hover:bg-primary-50"
          >
            View Admissions Requirements
          </Link>
        </div>
      </section>
    </>
  );
}
