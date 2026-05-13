import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LavaLampIcon = ({ theme }: { theme: 'light' | 'dark' }) => {
  const isDark = theme === 'dark';
  
  return (
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <defs>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: isDark ? '#FF5722' : '#03A9F4', stopOpacity: 0.3 }} />
          <stop offset="50%" style={{ stopColor: isDark ? '#FF5722' : '#03A9F4', stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: isDark ? '#FF5722' : '#03A9F4', stopOpacity: 0.3 }} />
        </linearGradient>
        <linearGradient id="blobGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: isDark ? '#FFEB3B' : '#FFB74D' }} />
          <stop offset="100%" style={{ stopColor: isDark ? '#FF5722' : '#FF9800' }} />
        </linearGradient>
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: isDark ? '#1a120f' : '#757575' }} />
          <stop offset="50%" style={{ stopColor: isDark ? '#3d2b24' : '#bdbdbd' }} />
          <stop offset="100%" style={{ stopColor: isDark ? '#1a120f' : '#757575' }} />
        </linearGradient>
      </defs>
      
      {/* Adjusted Hourglass Base */}
      <path d="M30 98 C30 90 45 88 45 82 L55 82 C55 88 70 90 70 98 Z" fill="url(#metalGrad)" />
      <path d="M45 82 C45 78 35 72 35 72 L65 72 C65 72 55 78 55 82 Z" fill="url(#metalGrad)" />
      
      {/* Adjusted Tapered Glass Body */}
      <path 
        d="M35 72 C25 72 35 40 45 10 L55 10 C65 40 75 72 65 72 Z" 
        fill="url(#glassGrad)" 
        stroke={isDark ? "#FF5722" : "#03A9F4"} 
        strokeWidth="0.8" 
        strokeOpacity="0.3" 
      />
      
      {/* Flat Cap */}
      <path d="M45 10 L55 10 L54 2 C54 2 50 1 46 2 L45 10Z" fill="url(#metalGrad)" />
      
      {/* Interactive Blobs - Keyframes ensure they move continuously on load */}
      <motion.circle 
        cx="50" 
        animate={{ cy: isDark ? [65, 58, 65] : [25, 32, 25] }}
        r="8" 
        fill="url(#blobGrad)" 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="45" 
        animate={{ cy: isDark ? [48, 40, 48] : [65, 58, 65] }}
        r="5" 
        fill="url(#blobGrad)" 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.circle 
        cx="54" 
        animate={{ cy: isDark ? [32, 25, 32] : [50, 42, 50] }}
        r="4" 
        fill="url(#blobGrad)" 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
  );
};

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
    >
      <LavaLampIcon theme={theme} />
      <style>{`
        .theme-toggle-btn {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 1000;
          background: var(--bg-color-alt);
          color: var(--text-color);
          border: 1px solid rgba(161, 45, 0, 0.2);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .theme-toggle-btn:hover {
          transform: scale(1.1);
          border-color: var(--color-orange);
          color: var(--color-orange);
        }
        .theme-toggle-btn:hover svg {
          transform: rotate(15deg);
        }
        @media (max-width: 768px) {
          .theme-toggle-btn {
            top: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </button>
  );
};
