import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Palette, MessageSquare, Brain, Code, Video, Smartphone } from 'lucide-react';

const services = [
  { icon: Palette, title: 'Branding Solutions', description: 'Build and elevate your brand with impactful strategies.' },
  { icon: MessageSquare, title: 'Content Marketing', description: 'Reach your audience with expertly crafted content.' },
  { icon: Briefcase, title: 'Business Consulting', description: 'Get expert advice to grow and streamline your operations.' },
  { icon: Brain, title: 'AI-Powered Solutions', description: 'Leverage artificial intelligence for smarter applications.' },
  { icon: Code, title: 'Custom Software Development', description: 'From mobile apps to SaaS platforms, we bring your ideas to life.' },
  { icon: Video, title: 'Content Creation', description: 'Video editing, content writing, channel management, and more.' },
  { icon: Smartphone, title: 'Web and App Development', description: 'Stunning Android, iOS, web, and AI-powered apps tailored to your needs.' }
];

export const Services = () => {
  return (
    <section className="py-16 bg-[#0a0014]">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-6 rounded-lg bg-[#110029] hover:bg-[#1a0040] transition-colors"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <service.icon className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};