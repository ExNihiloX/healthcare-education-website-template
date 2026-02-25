'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { ctaContent } from '@/data/content';

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 text-white md:py-28">
      {/* Background image */}
      <Image
        src="/images/slides/5.jpg"
        alt="Baldwin University College students"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-950/90" />

      <motion.div
        className="container relative"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            {ctaContent.headline}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-primary-100/90"
          >
            {ctaContent.description}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={ctaContent.primaryCTA.href}
              className="inline-flex items-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary-900 shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl"
            >
              {ctaContent.primaryCTA.label}
            </Link>
            {ctaContent.secondaryCTA && (
              <Link
                href={ctaContent.secondaryCTA.href}
                className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                {ctaContent.secondaryCTA.label}
              </Link>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
