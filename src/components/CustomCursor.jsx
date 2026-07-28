import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);

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

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
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
            width: 16px;
            height: 16px;
            border-radius: 0%;
            background-color: #20394f; /* Steel Blue */
            clip-path: polygon(0% 0%, 100% 30%, 30% 100%);
            transform: scale(1);
            transform-origin: 0% 0%; /* Scale from the tip so the hot-spot stays exactly locked! */
            will-change: transform;
            
            transition: 
              transform 0.16s cubic-bezier(0.25, 1, 0.5, 1),
              background-color 0.2s ease;
          }

          /* Clickable state: Scales up slightly and changes color */
          .custom-cursor-inner.state-clickable {
            background-color: #997577; /* Rose */
            transform: scale(1.35);
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
          }`}
        />
      </div>
    </>
  );
};
