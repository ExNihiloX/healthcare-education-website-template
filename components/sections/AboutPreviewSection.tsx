'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/motion/variants';
import { aboutPreview } from '@/data/content';
import { siteConfig } from '@/data/content';
import { CheckCircle } from 'lucide-react';

export function AboutPreviewSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Image + Text content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Campus image */}
            <motion.div variants={fadeInLeft} className="mb-8 overflow-hidden rounded-xl">
              <Image
                src="/images/slides/3.jpg"
                alt="Baldwin University College campus"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </motion.div>

            <motion.p
              variants={fadeInLeft}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              About Us
            </motion.p>
            <motion.h2
              variants={fadeInLeft}
              className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
            >
              {aboutPreview.headline}
            </motion.h2>
            <motion.p
              variants={fadeInLeft}
              className="mt-6 text-muted-foreground leading-relaxed"
            >
              {aboutPreview.description}
            </motion.p>

            <motion.div variants={fadeInLeft} className="mt-8">
              <Link
                href={aboutPreview.link.href}
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90"
              >
                {aboutPreview.link.label}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Mission/Vision cards */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div
              variants={fadeInRight}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Our Mission</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {aboutPreview.mission}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Our Vision</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {aboutPreview.vision}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="rounded-xl border bg-primary/5 p-6"
            >
              <h3 className="font-semibold text-primary">Accredited By</h3>
              <ul className="mt-3 space-y-2">
                {siteConfig.accreditations.map((acc) => (
                  <li
                    key={acc}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {acc}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
