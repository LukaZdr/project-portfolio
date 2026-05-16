import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero section container" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-content"
      >
        <motion.div
          className="hero-intro text-sans"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="intro-line"></span>
          <span className="intro-text">Luka Zdravkovic / Creative Developer</span>
        </motion.div>

        <motion.h1
          className="hero-title text-serif"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Here's what I build<br />
          <span className="italic-accent">when I let creativity flow.</span>
        </motion.h1>

      </motion.div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};
