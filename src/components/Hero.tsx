import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
      
      <motion.div 
        className="relative z-20 text-center text-white max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
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
        
        <motion.h1 
          className="text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to Fastastic
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-8 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Transforming ideas into extraordinary digital experiences
        </motion.p>
        
        <motion.button
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;