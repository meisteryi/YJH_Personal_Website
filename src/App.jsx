import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles, Cpu } from 'lucide-react';
import { 
  HeroCard, 
  AcademicCard, 
  VisualCard, 
  ShowroomCard, 
  InteractiveCard, 
  PersonalProjectCard, 
  ArchiveCard 
} from './components/BentoGrid';
import { ProjectModal } from './components/ProjectModal';
import { ArchiveModal } from './components/ArchiveModal';
import { ProjectsModal } from './components/ProjectsModal';
import logo from './assets/logo.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

    // Scroll listener for sticky header styling
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/80 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-x-hidden">
      
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none will-change-transform transform-gpu"></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 dark:from-pink-500/5 dark:to-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none will-change-transform transform-gpu"></div>

      {/* Header section */}
      <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-slate-200/80 dark:border-slate-800/80 shadow-md py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-contain" />
            <span className="font-mono text-base md:text-lg tracking-wider font-bold">
              Meisteryi
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* All Projects Button */}
            <button 
              onClick={() => setIsProjectsOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              All Projects
            </button>

            {/* Premium Theme Switcher Button */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-md text-slate-600 dark:text-slate-300 transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Bento Grid Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-10 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {/* 1. Hero Card (2x2) */}
          <HeroCard />

          {/* 2. Academic / Research Card (1x2) - SHEN */}
          <AcademicCard onOpen={setSelectedProject} />

          {/* 3. Small Personal Project Card (1x1) - TabiLenS */}
          <PersonalProjectCard onOpen={setSelectedProject} />

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

      {/* Render Projects List Modal */}
      {isProjectsOpen && (
        <ProjectsModal 
          onClose={() => setIsProjectsOpen(false)}
          onOpenProject={(id) => {
            setIsProjectsOpen(false);
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
