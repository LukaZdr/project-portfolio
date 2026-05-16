import React from 'react';
import { motion } from 'framer-motion';
import './Agenda.css';

const agendaItems = [
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Path' },
  { id: 'research-vision', label: 'Vision' },
  { id: 'projects', label: 'Projects' },
  { id: 'wanna-dos', label: 'Wanna-Dos' },
];

export const Agenda: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="agenda-nav">
      <div className="container">
        <motion.div 
          className="agenda-pills-wrapper"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {agendaItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <button 
                className="agenda-pill"
                onClick={() => scrollToSection(item.id)}
              >
                <span className="agenda-num text-mono">{index + 1}</span>
                <span className="agenda-label text-serif">{item.label}</span>
              </button>
              {index < agendaItems.length - 1 && (
                <span className="agenda-separator">/</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};
