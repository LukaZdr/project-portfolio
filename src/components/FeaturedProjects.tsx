import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { featuredProjects } from '../data/portfolioData';

export const FeaturedProjects: React.FC = () => {
  const academicProjects = featuredProjects.filter(p => p.category === 'academic');
  const privateProjects = featuredProjects.filter(p => p.category === 'private');

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-serif">My Projects</h2>
        </motion.div>
        
        {/* Academic Projects Section */}
        {academicProjects.length > 0 && (
          <div className="project-category-section">
            <motion.h3 
              className="project-category-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Academic
            </motion.h3>
            <div className="projects-container">
              {academicProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Private Projects Section */}
        {privateProjects.length > 0 && (
          <div className="project-category-section">
            <motion.h3 
              className="project-category-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Private Projects
            </motion.h3>
            <div className="projects-container">
              {privateProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={academicProjects.length + index} />
              ))}
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects-footer-note"
        >
          and many projects more
        </motion.div>
      </div>
    </section>
  );
};
