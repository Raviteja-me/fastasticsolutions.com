import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle } from 'lucide-react';

export const AnimatedLogo = () => {
  return (
    <motion.div
      className="mb-8 flex justify-center"
      animate={{ 
        rotateY: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{ 
        rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <Puzzle className="w-24 h-24" />
    </motion.div>
  );
};