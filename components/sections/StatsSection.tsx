'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { stats } from '@/data/content';

export function StatsSection() {
  return (
    <section className="border-y bg-muted/30 py-16">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 font-semibold text-foreground">{stat.label}</p>
              {stat.description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
