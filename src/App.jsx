import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles, Cpu } from 'lucide-react';
import { 
  HeroCard, 
  AcademicCard, 
  VisualCard, 
  ShowroomCard, 
  InteractiveCard, 
  StatusCard, 
  ArchiveCard 
} from './components/BentoGrid';
import { ProjectModal } from './components/ProjectModal';
import { ArchiveModal } from './components/ArchiveModal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  const handleOpenProject = (id) => {
    if (id === 'archive') {
      setIsArchiveOpen(true);
    } else {
      setSelectedProject(id);
    }
  };

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/80 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 dark:from-pink-500/5 dark:to-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Header section */}
      <header className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between border-b border-slate-200/40 dark:border-slate-800/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
            <Cpu size={18} className="animate-pulse" />
          </div>
          <span className="font-mono text-sm tracking-wider font-semibold">
            YJH.DEV
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Quick Stats / Info Widget */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-[10px] font-mono text-slate-500 dark:text-slate-400">
            <Sparkles size={10} className="text-indigo-500" />
            <span>[Status: Porting Academic Research Projects]</span>
          </div>

          {/* Premium Theme Switcher Button */}
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 shadow-sm hover:shadow-md text-slate-600 dark:text-slate-300 transition-all duration-200"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* Bento Grid Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {/* 1. Hero Card (2x2) */}
          <HeroCard />

          {/* 2. Academic / Research Card (1x2) - SHEN */}
          <AcademicCard onOpen={setSelectedProject} />

          {/* 3. Small Status Card (1x1) */}
          <StatusCard />

          {/* 4. Small Interactive Card (1x1) */}
          <InteractiveCard />

          {/* 5. Product Showroom Card (2x2) - µ's */}
          <ShowroomCard onOpen={setSelectedProject} />

          {/* 6. Visual Art / Media Card (2x1) - µ's Spectrogram Comparison */}
          <VisualCard onOpen={setSelectedProject} />

          {/* 7. Archive / Logs Timeline Card (1x2) */}
          <ArchiveCard onOpen={handleOpenProject} />
        </div>
      </main>

      {/* Render Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          projectId={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Render Timeline Archive Modal */}
      {isArchiveOpen && (
        <ArchiveModal 
          onClose={() => setIsArchiveOpen(false)}
          onOpenProject={(id) => {
            setIsArchiveOpen(false);
            setSelectedProject(id);
          }}
        />
      )}

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 py-8 mt-12 border-t border-slate-200/30 dark:border-slate-800/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400 font-mono">
          &copy; {new Date().getFullYear()} Joohyoung Yi. All Rights Reserved. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
          <a href="#privacy" className="hover:underline">[Privacy Policy]</a>
          <span>&middot;</span>
          <a href="#terms" className="hover:underline">[Terms of Use]</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
