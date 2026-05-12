import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Physics for a very elastic, liquid trail
  const springConfig1 = { damping: 15, stiffness: 300, mass: 0.5 };
  const springConfig2 = { damping: 15, stiffness: 200, mass: 0.8 };
  const springConfig3 = { damping: 15, stiffness: 100, mass: 1.2 };
  
  const cursorXSpring1 = useSpring(cursorX, springConfig1);
  const cursorYSpring1 = useSpring(cursorY, springConfig1);
  
  const cursorXSpring2 = useSpring(cursorX, springConfig2);
  const cursorYSpring2 = useSpring(cursorY, springConfig2);

  const cursorXSpring3 = useSpring(cursorX, springConfig3);
  const cursorYSpring3 = useSpring(cursorY, springConfig3);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // When hovering, we want the liquid blobs to merge into one big circle
  // When moving, they separate into smaller trailing droplets
  const rMain = isHovering ? 24 : 16;
  const r1 = isHovering ? 0 : 14;
  const r2 = isHovering ? 0 : 10;
  const r3 = isHovering ? 0 : 6;

  return (
    <svg className="cursor-container" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix 
            in="blur" 
            mode="matrix" 
            values="1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 20 -9" 
            result="goo" 
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
      
      {/* Apply the gooey filter to this group so the circles melt together */}
      <g filter="url(#goo)">
        {/* Trailing droplet 3 */}
        <motion.circle
          cx={cursorXSpring3}
          cy={cursorYSpring3}
          r={r3}
          fill="var(--cursor-color)"
        />
        {/* Trailing droplet 2 */}
        <motion.circle
          cx={cursorXSpring2}
          cy={cursorYSpring2}
          r={r2}
          fill="var(--cursor-color)"
        />
        {/* Trailing droplet 1 */}
        <motion.circle
          cx={cursorXSpring1}
          cy={cursorYSpring1}
          r={r1}
          fill="var(--cursor-color)"
        />
        {/* Main cursor droplet */}
        <motion.circle
          cx={cursorX}
          cy={cursorY}
          r={rMain}
          fill="var(--cursor-color)"
          style={{ transition: 'r 0.3s ease' }}
        />
      </g>
    </svg>
  );
};
