import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type MotionRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
