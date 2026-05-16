
import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    whileHover={{ scale: 1.01, borderColor: 'rgba(201,168,76,0.4)' }}
    className={`relative overflow-hidden ${className}`}
    style={{
      background: 'rgba(255,255,255,0.02)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(201,168,76,0.15)',
      borderRadius: '8px',
      color: '#f0d78c'
    }}
  >
    {children}
  </motion.div>
);
