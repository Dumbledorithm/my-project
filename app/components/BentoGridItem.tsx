"use client"; // Required for Framer Motion components
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

/**
 * An animated grid item with a common style and hover effect.
 */
export const BentoGridItem: React.FC<PropsWithChildren<{ className?: string; id?: string }>> = ({ children, className = "", id }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        id={id}
        className={`bg-[#1A1A1A] border border-[#2a2a2a] rounded-2xl ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      variants={itemVariants}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
      className={`bg-[#1A1A1A] border border-[#2a2a2a] rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};
