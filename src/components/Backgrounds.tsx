
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AuroraBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ background: '#0d0d0d' }}>
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, -30, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen blur-[120px]"
      style={{ background: 'rgba(201,168,76,0.25)' }}
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -60, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
      className="absolute bottom-[-10%] left-[-20%] w-[50vw] h-[50vw] rounded-full mix-blend-screen blur-[140px]"
      style={{ background: 'rgba(26,26,26,0.8)' }}
    />
  </div>
);

export const ParticlesBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ background: '#0d0d0d' }}>
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ['0vh', '-100vh'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20,
          }}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-5%',
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            background: '#c9a84c',
          }}
        />
      ))}
    </div>
  );
};
