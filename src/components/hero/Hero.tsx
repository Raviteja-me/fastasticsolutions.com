import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AnimatedLogo } from './AnimatedLogo';
import { HeroText } from './HeroText';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-10" />
      
      <motion.div 
        className="relative z-20 text-center text-white max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AnimatedLogo />
        <HeroText />fportf
        
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 rounded-full font-semibold text-base md:text-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/pro-apps')}
            className="px-8 py-3 rounded-full font-semibold text-base md:text-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Work
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;