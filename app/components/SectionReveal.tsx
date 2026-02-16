'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const defaultTransition = { duration: 0.5, ease: 'easeOut' as const };

/** Single block that fades/slides up when in view (homepage-style) */
export function RevealBlock({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Section with heading that animates first, then content (like homepage) */
export function SectionReveal({
  heading,
  children,
  contentDelay = 0.1,
  className,
}: {
  heading?: React.ReactNode;
  children: React.ReactNode;
  contentDelay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <div ref={ref} className={className}>
      {heading != null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={defaultTransition}
        >
          {heading}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ ...defaultTransition, delay: contentDelay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Animated card/item for use in a list - useInView + stagger delay (like BuiltForYourBusiness cards) */
export function RevealCard({
  children,
  index = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
