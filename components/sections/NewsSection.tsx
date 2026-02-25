'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';

const newsItems = [
  {
    title: 'Baldwin Medical School Welcomes New Cohort',
    excerpt: 'The MB ChB programme admitted its latest class of aspiring physicians, continuing Baldwin\'s mission to train world-class medical professionals in Ghana.',
    image: '/images/news/4.jpg',
    date: 'January 2026',
  },
  {
    title: 'GTEC Reaffirms Baldwin Accreditation',
    excerpt: 'The Ghana Tertiary Education Commission has renewed Baldwin University College\'s institutional accreditation, recognising continued academic excellence.',
    image: '/images/news/5.jpg',
    date: 'December 2025',
  },
  {
    title: 'IT Students Showcase Final Year Projects',
    excerpt: 'BSc. Information Technology and Software Engineering students presented innovative projects addressing real-world challenges in healthcare and education.',
    image: '/images/news/6.jpg',
    date: 'November 2025',
  },
];

export function NewsSection() {
  return (
    <section className="py-20 md:py-28">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Latest News
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay up to date with events and announcements from Baldwin University College.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {newsItems.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              className="group overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-primary">{item.date}</p>
                <h3 className="mt-2 font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
