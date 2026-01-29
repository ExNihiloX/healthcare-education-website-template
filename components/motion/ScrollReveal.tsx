'use client';

import { motion, type Variants } from 'framer-motion';
import { fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn } from '@/lib/motion/variants';
import { viewportSettings } from '@/lib/motion/config';
import { cn } from '@/lib/utils';

type AnimationType = 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';

const animations: Record<AnimationType, Variants> = {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  viewportPreset?: 'default' | 'eager' | 'lazy';
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer';
}

export function ScrollReveal({
  children,
  className,
  animation = 'fadeInUp',
  delay = 0,
  viewportPreset = 'default',
  as = 'div',
}: ScrollRevealProps) {
  const Component = motion[as];

  return (
    <Component
      variants={animations[animation]}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings[viewportPreset]}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
