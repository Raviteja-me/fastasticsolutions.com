import React from 'react';
import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <motion.section 
      className="relative py-20 bg-gradient-to-b from-[#0a0014] to-[#110029]"
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
          About Us
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to FastLasticSolution, your trusted partner for fast, fantastic, and statistically-driven solutions. Fantastic Solutions is the world’s first Cash-on-Delivery company, where we deliver exceptional results without taking any upfront payment.
        </motion.p>
      </div>
    </motion.section>
  );
};