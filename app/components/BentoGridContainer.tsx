"use client"; // Required for Framer Motion components
import React, { PropsWithChildren } from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/**
 * An animated container for the bento grid layout.
 * It orchestrates the staggered animation of its children.
 */
export const BentoGridContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.main
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.main>
  );
};