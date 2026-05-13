import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer section">
      <div className="container footer-content">
        <motion.div 
          className="footer-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-serif">Let's build something together.</h2>
          <a href="mailto:luka.z@hotmail.de" className="email-link">
            luka.z@hotmail.de
          </a>
        </motion.div>

        <div className="footer-bottom">
          <div className="social-links-text">
            <a href="https://github.com/LukaZdr" target="_blank" rel="noreferrer" className="text-sans">GitHub</a>
            <a href="https://www.linkedin.com/in/luka-zdravkovic-0211b2167/" target="_blank" rel="noreferrer" className="text-sans">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
