import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Eye, Activity } from 'lucide-react';
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

        <div className="vision-container">
          <motion.div
            className="vision-card main-vision"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="vision-card-header">
              <Sparkles size={20} className="vision-icon" />
              <span className="vision-badge glass-tag">Overview</span>
            </div>
            <p className="vision-text text-sans">
              Modern healthcare is highly personalized, yet most medical AI systems evaluate patient data in isolation or rely on population-level datasets. I aim to study how AI models can predict the optimal, individual treatment path for patients by synthesizing heterogeneous data streams, such as clinical history, biomarkers, genomics, and medical imaging. By enabling AI to learn the complex relationships between these modalities, I hope to support a more holistic approach to precision medicine in medical care.
            </p>
          </motion.div>

          <div className="vision-subtopics-grid">
            <motion.div
              className="vision-card sub-vision"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="vision-card-header">
                <Brain size={18} className="vision-icon" />
                <h3 className="vision-card-title text-serif">Multimodal Fusion</h3>
              </div>
              <p className="vision-subtext text-sans">
                Investigating intermediate fusion techniques to enable medical foundation models to reason across diverse modalities (e.g., relating genomics to cancer imaging) and construct patient-specific representations.
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
                <Eye size={18} className="vision-icon" />
                <h3 className="vision-card-title text-serif">Explainable Clinical AI</h3>
              </div>
              <p className="vision-subtext text-sans">
                Leveraging Chain-of-Thought reasoning to design transparent models, ensuring cross-modal clinical decisions remain interpretable and trustworthy for physicians in precision medicine settings.
              </p>
            </motion.div>

            <motion.div
              className="vision-card sub-vision"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="vision-card-header">
                <Activity size={18} className="vision-icon" />
                <h3 className="vision-card-title text-serif">Clinical Translation</h3>
              </div>
              <p className="vision-subtext text-sans">
                Bridging the gap between laboratory research and real-world practice by applying science transfer expertise to integrate advanced reasoning systems into live clinical workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

