import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Lightbulb } from 'lucide-react';
import './ResearchVision.css';

export const ResearchVision: React.FC = () => {
  return (
    <section className="section research-vision-section" id="research-vision">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="vision-header"
        >
          <h2 className="section-title text-serif">
            <a href="#research-vision" className="anchor-link">#</a>
            Research Vision
          </h2>
        </motion.div>

        <div className="vision-grid">
          <motion.div 
            className="vision-card main-vision"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="vision-card-header">
              <Sparkles size={20} className="vision-icon" />
              <span className="vision-badge glass-tag">Overview</span>
            </div>
            <p className="vision-text text-sans">
              My research focuses on the intersection of Large Language Models and Software Engineering, specifically looking at how agentic workflows can automate complex development tasks. I am interested in building systems that are not just tools, but collaborators that understand context, history, and intent. My vision is to create a seamless bridge between human creativity and machine execution, leveraging the power of multimodal models to transform how we think about code and documentation.
            </p>
          </motion.div>

          <div className="vision-secondary-grid">
            <motion.div 
              className="vision-card sub-vision"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="vision-card-header">
                <Brain size={18} className="vision-icon" />
                <h3 className="vision-card-title text-serif">Agentic Intelligence</h3>
              </div>
              <p className="vision-subtext text-sans">
                Moving beyond simple chat interfaces towards autonomous agents that can plan, execute, and self-correct across complex software environments.
              </p>
            </motion.div>

            <motion.div 
              className="vision-card sub-vision"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="vision-card-header">
                <Lightbulb size={18} className="vision-icon" />
                <h3 className="vision-card-title text-serif">Multimodal Synthesis</h3>
              </div>
              <p className="vision-subtext text-sans">
                Exploring how visual and textual information can be synthesized to provide deeper understanding of UI/UX and architectural patterns.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
