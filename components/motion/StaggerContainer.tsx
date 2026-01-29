'use client';

import { motion } from 'framer-motion';
import { viewportSettings } from '@/lib/motion/config';
import { cn } from '@/lib/utils';

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  viewportPreset?: 'default' | 'eager' | 'lazy';
}

export function StaggerContainer({
  children,
  className,
  delay = 0.1,
  staggerDelay = 0.1,
  viewportPreset = 'default',
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings[viewportPreset]}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
