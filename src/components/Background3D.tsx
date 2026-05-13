import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Background3D.css';

/* -------------------------------------------------------------------------- */
/*  Blob data – lava lamp wax: solid, opaque, merge when close                */
/* -------------------------------------------------------------------------- */

interface Blob {
  id: number;
  cx: number;         // horizontal position (0–100 viewBox units)
  r: number;          // radius in viewBox units
  duration: number;   // full travel cycle in seconds
  delay: number;      // stagger
  wobble: number;     // horizontal sway in viewBox units
  direction: 'rise' | 'fall';  // rising or falling blob
}

const blobs: Blob[] = [
  // Rising blobs – start at bottom, travel to top, loop
  { id: 1, cx: 15, r: 12, duration: 30, delay: 0, wobble: 2, direction: 'rise' },
  { id: 2, cx: 50, r: 9, duration: 22, delay: -8, wobble: 2.5, direction: 'rise' },
  { id: 3, cx: 80, r: 13, duration: 34, delay: -4, wobble: 1.5, direction: 'rise' },
  { id: 4, cx: 35, r: 8, duration: 18, delay: -14, wobble: 3, direction: 'rise' },
  // Falling blobs – start at top, travel to bottom, loop
  { id: 5, cx: 65, r: 15, duration: 40, delay: -6, wobble: 1.5, direction: 'fall' },
  { id: 6, cx: 25, r: 10, duration: 26, delay: -11, wobble: 2, direction: 'fall' },
  { id: 7, cx: 88, r: 11, duration: 28, delay: -2, wobble: 2, direction: 'fall' },
  { id: 8, cx: 45, r: 13, duration: 34, delay: -9, wobble: 1.8, direction: 'fall' },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export const Background3D: React.FC = () => {
  const { scrollY } = useScroll();

  // Randomize blob speeds on mount to make each visit unique
  const randomizedBlobs = React.useMemo(() => {
    return blobs.map(blob => ({
      ...blob,
      // Apply a random speed factor between 0.8 and 1.2
      duration: blob.duration * (0.8 + Math.random() * 0.4)
    }));
  }, []);

  // Maps scroll position (0 to 800px) to blur value (0 to 15px)
  const blur = useTransform(scrollY, [0, 800], ["blur(0px)", "blur(15px)"]);

  // Maps scroll position (0 to 800px) to a light ivory tint (0 to 0.25 opacity)
  const tintOpacity = useTransform(scrollY, [0, 800], [0, 0.25]);

  return (
    <motion.div
      className="lava-bg-wrapper"
      style={{ filter: blur }}
    >
      <motion.div
        className="lava-bg-tint"
        style={{ opacity: tintOpacity }}
      />
      <svg
        className="lava-bg"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            {/* Top of screen (cool wax - deep dark orange) */}
            <stop offset="0%" stopColor="#8B2500" />
            {/* Transition shade */}
            <stop offset="35%" stopColor="#D84315" />
            {/* Middle of screen (main Orange) */}
            <stop offset="65%" stopColor="#FF5722" />
            {/* Bottom of screen (hot lamp Yellow) */}
            <stop offset="100%" stopColor="#FFC107" />
          </linearGradient>

          {/* Gooey filter covers entire screen plus padding to prevent clipping */}
          <filter id="lava-goo" filterUnits="userSpaceOnUse"
            x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 30 -12"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>

          <mask id="blob-mask">
            {/* A white background means everything is visible by default? No, we want black background, white blobs. 
              Actually, mask defaults to transparent (invisible). We just draw white blobs. */}
            <g filter="url(#lava-goo)">
              {randomizedBlobs.map((blob) => (
                <circle
                  key={blob.id}
                  className={`lava-blob lava-${blob.direction}`}
                  cx={`${blob.cx}%`}
                  cy={`${blob.direction === 'rise' ? 140 : -40}%`}
                  fill="white"
                  style={{
                    r: `${blob.r}vw`,
                    animationDuration: `${blob.duration}s`,
                    animationDelay: `${blob.delay}s`,
                    '--wobble': blob.wobble,
                  } as React.CSSProperties}
                />
              ))}
            </g>
          </mask>
        </defs>

        {/* The actual visible element is a full-screen rectangle with the static gradient. 
          The blobs act as a mask, revealing the gradient only where the wax is. */}
        <rect
          width="100%"
          height="100%"
          fill="url(#blob-gradient)"
          mask="url(#blob-mask)"
        />
      </svg>
    </motion.div>
  );
};

