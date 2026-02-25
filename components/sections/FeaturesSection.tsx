'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion/variants';
import { features } from '@/data/content';
import {
  Stethoscope,
  Microscope,
  Code,
  GraduationCap,
  Users,
  Briefcase,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  Microscope,
  Code,
  GraduationCap,
  Users,
  Briefcase,
};

export function FeaturesSection() {
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
            Why Choose Baldwin
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive institution dedicated to academic excellence and holistic student development.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || GraduationCap;
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
