'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { staggerContainer } from '@/lib/motion/variants';
import { viewportSettings } from '@/lib/motion/config';
import { cn } from '@/lib/utils';

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  viewport?: 'default' | 'eager' | 'lazy';
}

export function StaggerContainer({
  children,
  className,
  delay = 0.1,
  staggerDelay = 0.1,
  viewport = 'default',
  ...props
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
      viewport={viewportSettings[viewport]}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
