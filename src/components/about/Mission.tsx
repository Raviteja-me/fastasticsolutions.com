import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export const Mission = () => {
  return (
    <section className="py-16 bg-[#0a0014]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex items-center gap-4 mb-8"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Target className="w-8 h-8 text-purple-500" />
          <h2 className="text-3xl font-bold text-white">Our Mission</h2>
        </motion.div>
        <motion.p 
          className="text-gray-300 text-lg max-w-3xl"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          We aim to revolutionize the way projects are delivered by ensuring speed, quality, and customization. At FastLasticSolution, we understand the frustrations caused by delays in the market. That's why we're committed to delivering your solutions as swiftly as possible without compromising on excellence.
        </motion.p>
      </div>
    </section>
  );
};