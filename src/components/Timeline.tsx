import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

type Category = 'education' | 'work' | 'award';

interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  organization?: string;
  category: Category;
}

const timelineData: TimelineEntry[] = [
  {
    id: 'intuitive',
    year: '2022 – 2026',
    title: 'AI/NLP Developer & Manager',
    organization: 'intuitive.ai GmbH',
    category: 'work',
  },
  {
    id: 'award-gi',
    year: '2022',
    title: '1st Place — SE Research Competition',
    organization: 'German Informatics Society (GI)',
    category: 'award',
  },
  {
    id: 'msc',
    year: '2021 – 2026',
    title: 'M.Sc. IT-Management & -Consulting',
    organization: 'University of Hamburg',
    category: 'education',
  },
  {
    id: 'award-uhh',
    year: '2021',
    title: '1st Place — SE Research Competition',
    organization: 'University of Hamburg',
    category: 'award',
  },
  {
    id: 'tutor',
    year: '2020',
    title: 'Software Engineering Tutoring',
    organization: 'University of Hamburg',
    category: 'work',
  },
  {
    id: 'cern',
    year: '2019',
    title: 'Scientific Training',
    organization: 'CERN',
    category: 'work',
  },
  {
    id: 'njiuko',
    year: '2018 – 2022',
    title: 'Web Development',
    organization: 'Njiuko GmbH',
    category: 'work',
  },
  {
    id: 'bsc',
    year: '2017 – 2021',
    title: 'B.Sc. Computer Science',
    category: 'education',
  },
  {
    id: 'hs',
    year: '– 2017',
    title: 'High School',
    category: 'education',
  },
];

const categoryLabels: Record<Category, string> = {
  education: 'Education',
  work: 'Work',
  award: 'Award',
};

export const Timeline: React.FC = () => {
  return (
    <section className="section timeline-section" id="timeline">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-serif">My Path So Far</h2>
        </motion.div>

        <div className="timeline">
          {/* Center line */}
          <div className="timeline-line" />

          {timelineData.map((entry, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={entry.id}
                className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Node on the center line */}
                <div className="timeline-node" />

                {/* Connector line */}
                <div className="timeline-connector" />

                {/* Card */}
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <span className="timeline-year text-mono">{entry.year}</span>
                    <span className="timeline-badge glass-tag">
                      {categoryLabels[entry.category]}
                    </span>
                  </div>
                  <h3 className="timeline-entry-title text-serif">{entry.title}</h3>
                  {entry.organization && (
                    <span className="timeline-org text-sans">@ {entry.organization}</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
