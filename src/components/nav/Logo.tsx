import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle } from 'lucide-react';

export const Logo = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
    >
      <Puzzle className="w-8 h-8 text-white" />
      <span className="text-white text-2xl font-bold">Fastastic Solutions</span>
    </motion.div>
  );
};