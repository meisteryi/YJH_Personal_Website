import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import logo from '../assets/logo.png';

export const Navbar = ({ onGoHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${isScrolled
          ? 'bg-[#f6d6bd]/90 dark:bg-[#08141e]/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-xs py-1 md:py-1.5'
          : 'bg-[#f6d6bd] dark:bg-[#08141e] py-1 md:py-1.5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo + '이주형' (Fills bar height on PC with minimal vertical margin) */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-3 sm:gap-4 group cursor-pointer select-none py-0.5"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl object-contain shadow-xs group-hover:scale-105 transition-transform duration-200"
          />

        </a>

        {/* Right: Theme Toggle Only */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 md:p-3 rounded-2xl text-slate-700 dark:text-slate-200 hover:bg-slate-300/40 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
            title="테마 변경"
          >
            {isDark ? <Sun className="w-5 h-5 md:w-6 md:h-6 text-amber-400" /> : <Moon className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />}
          </button>
        </div>
      </div>
    </header>
  );
};
