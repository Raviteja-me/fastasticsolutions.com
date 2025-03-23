import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

interface Project {
  title: string;
  scope: string;
  highlights: string;
}

interface YearSectionProps {
  year: string;
  projects: Project[];
}

export const YearSection = ({ year, projects }: YearSectionProps) => {
  return (
    <section className="py-8 md:py-12">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 px-4 md:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {year}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};