import React from 'react';
import { motion } from 'framer-motion';

/**
 * Decorative page backdrop: a subtle fading dot-grid plus a few slowly drifting
 * colour glows. Kept intentionally minimal so it reads as a clean, modern
 * developer aesthetic rather than a busy template background.
 */
const BackgroundElements: React.FC = () => {
  return (
    <div className="background-elements" aria-hidden="true">
      {/* Fine technical dot grid that fades towards the edges */}
      <div className="bg-grid" />

      {/* Soft, slow-moving colour glows */}
      <motion.div
        className="bg-glow bg-glow-1"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-glow bg-glow-2"
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-glow bg-glow-3"
        animate={{ x: [0, 25, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default BackgroundElements;
