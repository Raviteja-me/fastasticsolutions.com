import React from 'react';
import { motion } from 'framer-motion';

export const PortfolioHero = () => {
  return (
    <motion.section 
      className="relative py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-white mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our Portfolio
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Over the years, Fantastic Solutions has partnered with diverse clients across industries, delivering cutting-edge solutions tailored to their unique needs. From branding and website design to advanced AI-powered applications, our work reflects our commitment to quality, creativity, and innovation.
        </motion.p>
      </div>
    </motion.section>
  );
};