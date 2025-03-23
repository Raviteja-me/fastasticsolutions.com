import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  scope: string;
  highlights: string;
  delay?: number;
}

export const ProjectCard = ({ title, scope, highlights, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-[#110029] rounded-lg p-4 md:p-6 hover:bg-[#1a0040] transition-colors"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
      <div className="mb-4">
        <span className="text-purple-400 font-semibold text-sm md:text-base">Project Scope:</span>
        <p className="text-gray-300 mt-1 text-sm md:text-base">{scope}</p>
      </div>
      <div>
        <span className="text-purple-400 font-semibold text-sm md:text-base">Highlights:</span>
        <p className="text-gray-300 mt-1 text-sm md:text-base">{highlights}</p>
      </div>
    </motion.div>
  );
};