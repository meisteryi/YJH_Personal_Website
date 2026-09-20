import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { HeroSection } from './components/HeroSection';
import { ProjectGridSection } from './components/ProjectGridSection';
import { EducationTimelineSection } from './components/EducationTimelineSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedKeyword, setSelectedKeyword] = useState(() => {
    try {
      return sessionStorage.getItem('portfolio_selected_keyword') || null;
    } catch {
      return null;
    }
  });

  const handleSelectKeyword = (kw) => {
    setSelectedKeyword(kw);
    try {
      if (kw) {
        sessionStorage.setItem('portfolio_selected_keyword', kw);
      } else {
        sessionStorage.removeItem('portfolio_selected_keyword');
      }
    } catch {
      // ignore
    }
  };

  const getKeywordForProject = (projId) => {
    if (['shen', 'mus'].includes(projId)) return '#데이터·AI융합';
    return '#서비스설계';
  };

  const parseHashAndSetState = () => {
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
      const projId = hash.replace('#project-', '');
      setSelectedProject(projId);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setSelectedProject(null);
    }
  };

  const handleOpenProject = (id) => {
    setSelectedProject(id);
    if (!selectedKeyword) {
      handleSelectKeyword(getKeywordForProject(id));
    }
    window.location.hash = `project-${id}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCloseModal = () => {
    if (!selectedKeyword && selectedProject) {
      handleSelectKeyword(getKeywordForProject(selectedProject));
    }
    setSelectedProject(null);
    window.history.pushState(null, '', window.location.pathname);
    setTimeout(() => {
      const projectsElem = document.getElementById('projects');
      if (projectsElem) {
        projectsElem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  useEffect(() => {
    // Initial check for hash
    parseHashAndSetState();

    const handleHashChange = () => {
      parseHashAndSetState();
      const hash = window.location.hash;
      if (!hash || !hash.startsWith('#project-')) {
        setTimeout(() => {
          const projectsElem = document.getElementById('projects');
          if (projectsElem) {
            projectsElem.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [selectedKeyword, selectedProject]);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/80 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-x-hidden">
      <CustomCursor />

      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none will-change-transform transform-gpu"></div>
      <div className="absolute top-[45%] right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 dark:from-pink-500/5 dark:to-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none will-change-transform transform-gpu"></div>
      <div className="absolute bottom-10 left-1/3 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl -z-10 pointer-events-none will-change-transform transform-gpu"></div>

      {/* Floating Minimal Theme Toggle */}
      <ThemeToggle />

      {/* When a project is selected, show the Project Detail View */}
      {selectedProject ? (
        <div className="min-h-screen">
          <ProjectModal
            projectId={selectedProject}
            onClose={handleCloseModal}
          />
        </div>
      ) : (
        /* Main Portfolio Sections */
        <main>
          {/* 1. Hero / Identity & Values */}
          <HeroSection />

          {/* 2. All Projects Catalog with 3-keyword highlights & category filter */}
          <ProjectGridSection
            selectedKeyword={selectedKeyword}
            onSelectKeyword={handleSelectKeyword}
            onOpenProject={handleOpenProject}
          />

          {/* 3. Education & Credentials */}
          <EducationTimelineSection />

          {/* 4. Contact & Footer */}
          <ContactSection />
        </main>
      )}
    </div>
  );
}

export default App;
