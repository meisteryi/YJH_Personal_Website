import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

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

  return (
    <div className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50">
      <button
        onClick={toggleTheme}
        className="p-3 sm:p-3.5 rounded-2xl glass-panel border border-slate-300/70 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-md hover:shadow-lg transition-all cursor-pointer bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-center"
        title="테마 변경 (Toggle Theme)"
      >
        {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-500" />}
      </button>
    </div>
  );
};
