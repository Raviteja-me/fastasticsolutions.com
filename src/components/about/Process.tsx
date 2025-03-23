import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageCircle, Users, Rocket } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Explore', description: 'Browse our services and portfolio to see what we can do.' },
  { icon: MessageCircle, title: 'Connect', description: 'Book a consultation, chat with our AI assistant, or contact us.' },
  { icon: Users, title: 'Collaborate', description: 'Share your requirements, and we\'ll craft a tailored plan.' },
  { icon: Rocket, title: 'Deliver', description: 'Watch your project come to life, delivered on time and to perfection.' }
];

export const Process = () => {
  return (
    <section className="py-16 bg-[#0a0014]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          How We Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-purple-500/20 transform translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};