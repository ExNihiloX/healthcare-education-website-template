'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { heroContent } from '@/data/content';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 text-white md:py-36">
      {/* Background image */}
      <Image
        src="/images/slides/1.jpg"
        alt="Baldwin University College campus"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-800/80" />

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <motion.div
        className="container relative"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-200"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90 md:text-xl"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={heroContent.primaryCTA.href}
              className="inline-flex items-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary-900 shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl"
            >
              {heroContent.primaryCTA.label}
            </Link>
            <Link
              href={heroContent.secondaryCTA.href}
              className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              {heroContent.secondaryCTA.label}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
