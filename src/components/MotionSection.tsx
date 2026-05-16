
import React from 'react';
import { motion } from 'framer-motion';

export const MotionSection = ({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
    className={`py-24 md:py-32 ${className}`}
    style={{ background: '#0d0d0d', color: '#f0d78c' }}
  >
    {children}
  </motion.section>
);
