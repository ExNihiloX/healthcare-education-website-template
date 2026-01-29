/**
 * Motion Configuration
 *
 * Centralized animation timing and easing values for consistent motion design.
 */

// Duration presets (in seconds)
export const durations = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  slowest: 1.0,
} as const;

// Easing presets (cubic-bezier values)
export const easings = {
  // Standard easings
  linear: [0, 0, 1, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],

  // Custom easings
  smooth: [0.25, 0.1, 0.25, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  snappy: [0.16, 1, 0.3, 1],
} as const;

// Spring presets for framer-motion
export const springs = {
  gentle: { type: 'spring', stiffness: 120, damping: 14 },
  wobbly: { type: 'spring', stiffness: 180, damping: 12 },
  stiff: { type: 'spring', stiffness: 300, damping: 20 },
  slow: { type: 'spring', stiffness: 80, damping: 20 },
} as const;

// Stagger presets (in seconds)
export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
} as const;

// Viewport settings for scroll animations
export const viewportSettings = {
  default: { once: true, margin: '-100px' },
  eager: { once: true, margin: '-50px' },
  lazy: { once: true, margin: '-200px' },
} as const;

// Transition presets
export const transitions = {
  default: {
    duration: durations.normal,
    ease: easings.smooth,
  },
  smooth: {
    duration: durations.slow,
    ease: easings.smooth,
  },
  snappy: {
    duration: durations.fast,
    ease: easings.snappy,
  },
  spring: springs.gentle,
} as const;
