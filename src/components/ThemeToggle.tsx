import React, { useEffect, useState } from 'react';

const LavaLampIcon = ({ theme }: { theme: 'light' | 'dark' }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
  >
    {/* Classical Conical Cap */}
    <path d="M10 5L12 2L14 5H10Z" fill="currentColor" />
    
    {/* Tapered Glass Body - wider at bottom, slimmer at top */}
    <path 
      d="M10 5.5C9.5 5.5 8.5 9 8.5 12.5C8.5 16 9.5 17.5 10.5 17.5H13.5C14.5 17.5 15.5 16 15.5 12.5C15.5 9 14.5 5.5 14 5.5H10Z" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinejoin="round" 
    />
    
    {/* Iconic Flared Conical Base */}
    <path d="M10.5 17.5L8.5 22H15.5L13.5 17.5H10.5Z" fill="currentColor" />
    
    {/* Interactive Blobs */}
    <circle 
      cx="12" 
      cy={theme === 'light' ? "14" : "8"} 
      r="2" 
      fill="var(--color-orange)" 
      style={{ transition: 'cy 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
    />
    <circle 
      cx="10.5" 
      cy={theme === 'light' ? "9" : "15"} 
      r="1.2" 
      fill="var(--color-orange)" 
      style={{ transition: 'cy 0.9s cubic-bezier(0.4, 0, 0.2, 1)' }}
    />
  </svg>
);

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      // Default to dark mode as requested
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

