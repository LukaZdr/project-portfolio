import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import './Projects.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.div 
      ref={cardRef}
      className={`project-glass-card ${isEven ? 'layout-normal' : 'layout-reversed'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-image-container">
        <motion.div 
          className="image-parallax-wrapper"
          style={{ scale: scaleImage }}
        >
          <img src={project.images[0]} alt={project.title} className="glass-project-image" />
          <div className="image-overlay"></div>
        </motion.div>
      </div>
      
      <motion.div 
        className="project-glass-info"
        style={{ y: yParallax }}
      >
        <div className="project-header">
          <span className="project-number text-mono">0{index + 1}</span>
          <h3 className="project-title text-serif">{project.title}</h3>
        </div>

        <div className="project-description">
          <p className="project-problem-text">{project.problem}</p>
        </div>

        <div className="project-meta">
          <div className="project-tags">
            {project.technologies.map(tech => (
              <span key={tech} className="glass-tag">{tech}</span>
            ))}
          </div>
          
          <div className="project-links">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="glass-link-btn">
                <span>View Project</span>
                <ArrowUpRight size={18} />
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="glass-link-btn github-btn">
                <span>Source Code</span>
              </a>
            )}
            {project.notebookLink && (
              <a href={project.notebookLink} target="_blank" rel="noreferrer" className="glass-link-btn github-btn">
                <span>Jupyter Notebook</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
