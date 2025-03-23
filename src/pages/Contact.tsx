import React from 'react';
import { motion } from 'framer-motion';
import { ContactCard } from '../components/contact/ContactCard';
import WaterEffect from '../components/water/WaterEffect';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0014]">
      <WaterEffect />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0014]/30 to-[#0a0014] pointer-events-none" />
      
      <div className="relative container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Get in Touch</h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            We're here to help! Choose your preferred way to connect with us.
          </p>
          <ContactCard />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;