import React from 'react';
import { motion } from 'framer-motion';
import { wannaDos } from '../data/portfolioData';
import './WannaDos.css';

export const WannaDos: React.FC = () => {
  return (
    <section className="section wanna-dos-section" id="wanna-dos">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-serif">
            <a href="#wanna-dos" className="anchor-link">#</a>
            Wanna-Dos
          </h2>
          <p className="wanna-dos-subtitle">What I'm looking to build next.</p>
        </motion.div>

        <div className="wanna-dos-grid">
          {wannaDos.map((wd, index) => (
            <motion.div 
              key={wd.id}
              className="wanna-do-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-serif">{wd.title}</h3>
              <p>{wd.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
