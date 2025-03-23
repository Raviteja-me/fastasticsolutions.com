import React from 'react';
import { motion } from 'framer-motion';
import { AboutHero } from '../components/about/AboutHero';
import { Mission } from '../components/about/Mission';
import { Services } from '../components/about/Services';
import { Process } from '../components/about/Process';
import WaterEffect from '../components/water/WaterEffect';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const About = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0014] overflow-hidden">
      <WaterEffect />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0014]/30 to-[#0a0014] pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.div 
          variants={sectionVariants}
          className="relative"
        >
          <AboutHero />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          className="relative bg-white/5 backdrop-blur-sm"
        >
          <Mission />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          className="relative"
        >
          <Services />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          className="relative bg-white/5 backdrop-blur-sm"
        >
          <Process />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="relative py-16 text-center"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Ideas?
            </h2>
            <motion.button
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 rounded-full font-semibold text-base md:text-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
    </div>
  );
};

export default About;