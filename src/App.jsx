import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Sparkles, Cpu, Search } from 'lucide-react';
import { 
  HeroCard, 
  AcademicCard, 
  ShowroomCard, 
  InteractiveCard, 
  PersonalProjectCard, 
  ArchiveCard 
} from './components/BentoGrid';
import { ProjectModal } from './components/ProjectModal';
import { ArchiveModal } from './components/ArchiveModal';
import { ProjectsModal } from './components/ProjectsModal';
import logo from './assets/logo.png';

const searchProjects = [
  { id: 'tabilens', title: 'TabiLenS', category: 'Project', description: '실시간 일본어 메뉴판 번역 및 식문화 가이드 주문 도우미 서비스' },
  { id: 'unseenmap', title: 'Unseen Map Explorer', category: 'Project', description: '사진 EXIF GPS 메타데이터 파싱 기반 여행 경로 매핑 서비스' },
  { id: 'halligalli', title: 'Online HalliGalli', category: 'Project', description: 'WebRTC 기반 실시간 멀티플레이어 할리갈리 웹 게임' },
  { id: 'shen', title: 'SHEN', category: 'Research', description: '한국어 거대 언어 모델의 젠더 편향성 조사 및 설명 가능 인공지능 연구' },
  { id: 'mus', title: 'µ\'s', category: 'Research', description: '멜-스펙트로그램 변환 및 ResNet50 전이 학습 기반 음악 장르 분류 시스템' },
  { id: 'scout', title: 'AI Football Scouter', category: 'Project', description: '스태츠 필터링 및 팬 오피니언 다차원 감성 분석 기반 축구 선수 추천 시스템' }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchContainerRef = useRef(null);
  const searchInputRef = useRef(null);

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

  // Click outside to collapse search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearchExpanded(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
            {/* Search Input Container */}
            <div ref={searchContainerRef} className="relative flex items-center">
              <div className={`flex items-center bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300 ${
                isSearchExpanded ? 'w-40 sm:w-56 md:w-64 px-3 py-1.5 opacity-100' : 'w-0 opacity-0 pointer-events-none border-transparent'
              }`}>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-xs focus:outline-none text-slate-800 dark:text-slate-200"
                  ref={searchInputRef}
                />
              </div>
              <button
                onClick={() => {
                  if (isSearchExpanded && searchQuery === '') {
                    setIsSearchExpanded(false);
                  } else {
                    setIsSearchExpanded(true);
                    setTimeout(() => searchInputRef.current?.focus(), 100);
                  }
                }}
                className={`p-2.5 rounded-full border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md text-slate-600 dark:text-slate-300 transition-all duration-200 cursor-pointer ${
                  isSearchExpanded ? 'ml-2' : ''
                }`}
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {/* Autocomplete Dropdown */}
              {isSearchExpanded && searchQuery && (
                <div className="absolute right-0 top-full mt-2 w-64 sm:w-72 md:w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 overflow-hidden py-1">
                  {searchProjects.filter(p => 
                    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    p.description.toLowerCase().includes(searchQuery.toLowerCase())
                  ).length === 0 ? (
                    <div className="px-4 py-3 text-xs text-slate-400 font-mono text-center">
                      No matching projects found
                    </div>
                  ) : (
                    searchProjects.filter(p => 
                      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      p.description.toLowerCase().includes(searchQuery.toLowerCase())
                    ).map(project => (
                      <div
                        key={project.id}
                        onClick={() => {
                          setSelectedProject(project.id);
                          setSearchQuery('');
                          setIsSearchExpanded(false);
                        }}
                        className="px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer flex flex-col gap-0.5 border-b border-slate-100/50 dark:border-slate-800/30 last:border-b-0 text-left"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{project.title}</span>
                          <span className="text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">{project.category}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1">{project.description}</span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

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
