import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let isHidden = true;

    // Set initial values
    document.documentElement.style.setProperty('--cursor-opacity', '0');

    const handleMouseMove = (e) => {
      // Set CSS variables directly on mousemove for 100% native latency-free response (no lerping or animation delay)
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      
      if (isHidden) {
        isHidden = false;
        document.documentElement.style.setProperty('--cursor-opacity', '1');
      }
    };

    const handleMouseLeave = () => {
      isHidden = true;
      document.documentElement.style.setProperty('--cursor-opacity', '0');
    };

    const handleMouseEnter = () => {
      isHidden = false;
      document.documentElement.style.setProperty('--cursor-opacity', '1');
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Handle hovering over interactive elements and text fields
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isTextField = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.tagName === 'SELECT' || 
        target.closest('input') || 
        target.closest('textarea') ||
        target.getAttribute('contenteditable') === 'true';

      setIsInputHovered(!!isTextField);

      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer');

      setIsHovered(!!isClickable && !isTextField);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      {/* Custom Global Cursor Styles: Hides the default cursor everywhere except on text/selection inputs */}
      <style>{`
        @media (pointer: fine) {
          html,
          body,
          *:not(input):not(textarea):not(select):not(option):not(a):not(button):not(.cursor-pointer) {
            cursor: none !important;
          }
          a,
          button,
          [role="button"],
          .cursor-pointer,
          a *,
          button * {
            cursor: none !important;
          }
        }
        
        .custom-cursor-main {
          display: none;
        }

        @media (pointer: fine) {
          /* Outer Wrapper: Handles instant translation without input lag */
          .custom-cursor-main {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 9999;
            opacity: var(--cursor-opacity, 0);
            
            /* Pointer tip (0% 0%) is exactly at the mouse coordinate */
            transform: translate3d(calc(var(--mouse-x, -100px) - 1px), calc(var(--mouse-y, -100px) - 1px), 0);
            will-change: transform;
            transition: opacity 0.2s ease;
            
            /* High visibility shadow glow */
            filter: drop-shadow(0 2px 4px rgba(8, 20, 30, 0.3));
          }

          /* Inner Element: Handles triangle shape and smooth scale animation on hover */
          .custom-cursor-inner {
            width: 14px;
            height: 14px;
            border-radius: 0%;
            background-color: #20394f; /* Steel Blue */
            clip-path: polygon(0% 0%, 100% 30%, 30% 100%);
            transform: scale(1) rotate(0deg);
            transform-origin: 0% 0%; /* Scale from the tip so the hot-spot stays exactly locked! */
            position: relative;
            will-change: transform;
            
            transition: 
              transform 0.25s cubic-bezier(0.25, 1, 0.5, 1),
              background-color 0.25s ease;
          }

          /* Outer glowing ring around the cursor tip */
          .custom-cursor-inner::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 36px;
            height: 36px;
            border: 2px solid #6366f1; /* Indigo */
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
            transition: 
              transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 0.25s ease,
              border-color 0.25s ease;
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
          }

          /* Clickable state: Scales up slightly, tilts, and changes color */
          .custom-cursor-inner.state-clickable {
            background-color: #ec4899; /* Hot Pink */
            transform: scale(1.4) rotate(-15deg);
          }

          /* Outer ring in clickable state: Fades in, scales up, and pulses */
          .custom-cursor-inner.state-clickable::after {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
            border-color: #ec4899; /* Match clickable color */
            box-shadow: 0 0 14px rgba(236, 72, 153, 0.6);
            animation: cursor-pulse 1.6s infinite ease-in-out;
          }

          /* Active (clicking) feedback: Shrink cursor and collapse outer ring */
          .custom-cursor-inner.state-active {
            transform: scale(0.9) rotate(-10deg) !important;
          }
          .custom-cursor-inner.state-active::after {
            transform: translate(-50%, -50%) scale(0.55) !important;
            opacity: 0.8 !important;
            box-shadow: 0 0 8px rgba(236, 72, 153, 0.5) !important;
          }

          @keyframes cursor-pulse {
            0%, 100% {
              transform: translate(-50%, -50%) scale(0.95);
              opacity: 0.95;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 0.5;
              box-shadow: 0 0 20px rgba(236, 72, 153, 0.8);
            }
          }
        }
      `}</style>

      {/* Single Unified Cursor with split translation/scale layers */}
      <div
        className="custom-cursor-main"
        style={{
          opacity: isInputHovered ? 0 : 'var(--cursor-opacity, 0)',
        }}
      >
        <div 
          className={`custom-cursor-inner ${
            isHovered ? 'state-clickable' : 'state-normal'
          } ${isActive ? 'state-active' : ''}`}
        />
      </div>
    </>
  );
};
