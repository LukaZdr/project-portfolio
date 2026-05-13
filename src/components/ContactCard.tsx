import React from 'react';
import { motion } from 'framer-motion';
import './ContactCard.css';

export const ContactCard: React.FC = () => {
  return (
    <motion.div 
      className="contact-card-window"
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      {/* Mini Terminal Header */}
      <div className="mini-terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title text-mono">contact.env</div>
      </div>

      {/* Terminal Body */}
      <div className="mini-terminal-body text-mono">
        <div className="terminal-comment">
          # Like my digital lava lamp? Write me!
        </div>
        <div className="env-vars">
          <div className="env-line">
            <span className="env-key">EMAIL</span>
            <span className="env-operator">=</span>
            <a href="mailto:luka.z@hotmail.de" className="env-value">"luka.z@hotmail.de"</a>
          </div>
          <div className="env-line">
            <span className="env-key">GITHUB</span>
            <span className="env-operator">=</span>
            <a href="https://github.com/LukaZdr" target="_blank" rel="noreferrer" className="env-value">"github.com/LukaZdr"</a>
          </div>
          <div className="env-line">
            <span className="env-key">LINKEDIN</span>
            <span className="env-operator">=</span>
            <a href="https://www.linkedin.com/in/luka-zdravkovic-0211b2167/" target="_blank" rel="noreferrer" className="env-value">"linkedin.com/luka"</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
