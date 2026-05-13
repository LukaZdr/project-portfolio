import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

export const AboutMe: React.FC = () => {
  const titleText = "A bit about me";

  const windowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.06,
        delayChildren: 0.3
      }
    }
  };

  const charVariants = {
    hidden: { display: "none", opacity: 0 },
    visible: { display: "inline", opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.2, duration: 0.6 }
    }
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="terminal-window"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={windowVariants}
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title text-mono">luka — bash — 80x24</div>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body text-mono">
            <div className="terminal-command">
              <span className="terminal-user">luka@portfolio</span>
              <span className="terminal-separator">:</span>
              <span className="terminal-dir">~</span>
              <span className="terminal-prompt">$</span>
              <span className="typing-text">
                {titleText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={charVariants}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <motion.span
                className="terminal-cursor"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              />
            </div>

            <motion.div
              className="about-text-wrapper"
              variants={contentVariants}
            >
              <p className="about-text">
                For the past eight years, I’ve been working in the tech industry, with recent years focused on AI applications and emerging technologies while building personal projects and experimental systems along the way. I enjoy exploring new ideas, learning through hands-on work, and finding practical ways to apply technology creatively. Much of my visual inspiration comes from 70s design and DIY culture, which is also the reason this website became a lava lamp.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
