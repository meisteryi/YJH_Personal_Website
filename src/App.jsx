import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Cpu, Search } from 'lucide-react';
import {
  HeroCard,
  AcademicCard,
  ShowroomCard,
  InteractiveCard,
  PersonalProjectCard,
  ArchiveCard,
  CertificatesCard,
  VisualCard
} from './components/BentoGrid';
import { ProjectModal } from './components/ProjectModal';
import { ArchiveModal } from './components/ArchiveModal';
import { ProjectsModal } from './components/ProjectsModal';
import { CertificatesModal } from './components/CertificatesModal';
import logo from './assets/logo.png';
import { CustomCursor } from './components/CustomCursor';

const searchProjects = [
  { id: 'liargame', title: 'Liar Game', category: 'Project', description: 'Gemini API 기반 지능형 제시어 생성 및 다양한 게임 모드를 제공하는 멀티플레이어 모바일 파티 게임 앱' },
  { id: 'photoexhibition', title: 'Photo Exhibition', category: 'Project', description: 'EXIF 메타데이터 자동 추출 및 반응형 메이슨리 레이아웃, 모노그래프 전시 감상 모드를 제공하는 감성적인 온라인 사진 전시회 서비스' },
  { id: 'gachatodo', title: 'Gacha To-Do', category: 'Project', description: '할 일 완료로 모으는 코인과 픽셀 아쿠아리움 방치형 육성 게임 앱' },
  { id: 'tabilens', title: 'TabiLenS', category: 'Project', description: '실시간 다국어 메뉴판 번역 및 식문화 가이드 주문 도우미 서비스' },
  { id: 'unseenmap', title: 'Unseen Map Explorer', category: 'Project', description: '사진 EXIF GPS 메타데이터 파싱 기반 여행 경로 매핑 서비스' },
  { id: 'halligalli', title: 'Online HalliGalli', category: 'Project', description: 'WebRTC 기반 실시간 멀티플레이어 할리갈리 웹 게임' },
  { id: 'shen', title: 'SHEN', category: 'Research', description: '한국어 거대 언어 모델의 젠더 편향성 조사 및 설명 가능 인공지능 연구' },
  { id: 'mus', title: 'µ\'s', category: 'Research', description: '멜-스펙트로그램 변환 및 ResNet50 전이 학습 기반 음악 장르 분류 시스템' },
  { id: 'scout', title: 'AI Football Scouter', category: 'Project', description: '스태츠 필터링 및 팬 오피니언 다차원 감성 분석 기반 축구 선수 추천 시스템' },
  { id: 'yenafanpage', title: 'YENA Fanpage', category: 'Project', description: '최예나 아티스트 반응형 웹 팬페이지 기말 프로젝트' }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalSource, setModalSource] = useState(null); // 'projects', 'archive'
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchContainerRef = useRef(null);
  const desktopSearchInputRef = useRef(null);
  const mobileSearchInputRef = useRef(null);

  const parseHashAndSetState = () => {
    const hash = window.location.hash;

    let isArchive = false;
    let isProjects = false;
    let isCertificates = false;
    let selectedProj = null;

    if (hash === '#archive') {
      isArchive = true;
    } else if (hash === '#projects') {
      isProjects = true;
    } else if (hash === '#certificates') {
      isCertificates = true;
    } else if (hash.startsWith('#project-')) {
      const projId = hash.replace('#project-', '');
      selectedProj = projId;
    }

    setIsArchiveOpen(isArchive);
    setIsProjectsOpen(isProjects);
    setIsCertificatesOpen(isCertificates);
    setSelectedProject(selectedProj);

    // Scroll to top when view changes
    window.scrollTo({ top: 0 });
  };

  const handleOpenProject = (id) => {
    if (id === 'archive') {
      setModalSource('archive');
      window.location.hash = 'archive';
    } else {
      setModalSource(null);
      window.location.hash = `project-${id}`;
    }
  };

  const handleGoHome = () => {
    window.location.hash = '';
    setSearchQuery('');
    setIsSearchExpanded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Clear any cached dark mode classes
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');

    // Scroll listener for sticky header styling
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const handleHashChange = () => {
      parseHashAndSetState();
    };

    // Run initially for deep linking and setting state from load hash
    parseHashAndSetState();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
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





  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/80 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-x-hidden">
      <CustomCursor />

      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none will-change-transform transform-gpu"></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/10 to-indigo-500/10 dark:from-pink-500/5 dark:to-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none will-change-transform transform-gpu"></div>

      {/* Header section */}
      <header
        ref={searchContainerRef}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 border-b ${isScrolled
          ? 'bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md border-slate-200/80 dark:border-slate-800/80 shadow-md py-4'
          : 'bg-transparent border-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div
            onClick={handleGoHome}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none"
          >
            <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-contain" />
            <span className="font-mono text-sm sm:text-base md:text-lg tracking-wider font-bold">
              Meisteryi
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Input Container */}
            <div className="relative flex items-center">
              <div className={`hidden md:flex items-center bg-slate-100/70 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300 ${isSearchExpanded ? 'w-48 lg:w-64 px-3 py-1.5 opacity-100' : 'w-0 opacity-0 pointer-events-none border-transparent'
                }`}>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-xs focus:outline-none text-slate-800 dark:text-slate-200"
                  ref={desktopSearchInputRef}
                />
              </div>
              <button
                onClick={() => {
                  if (isSearchExpanded && searchQuery === '') {
                    setIsSearchExpanded(false);
                  } else {
                    setIsSearchExpanded(true);
                    setTimeout(() => {
                      if (window.innerWidth >= 768) {
                        desktopSearchInputRef.current?.focus();
                      } else {
                        mobileSearchInputRef.current?.focus();
                      }
                    }, 100);
                  }
                }}
                className={`p-2 sm:p-2.5 rounded-full border border-slate-200/60 dark:border-slate-850 bg-slate-100/70 dark:bg-slate-800 shadow-sm hover:shadow-md text-slate-600 dark:text-slate-300 transition-all duration-200 cursor-pointer ${isSearchExpanded ? 'md:ml-2' : ''
                  }`}
                aria-label="Search"
              >
                <Search size={16} />
              </button>

              {/* Desktop Autocomplete Dropdown */}
              {isSearchExpanded && searchQuery && (
                <div className="hidden md:block absolute right-0 top-full mt-2 w-64 sm:w-72 md:w-80 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 overflow-hidden py-1">
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
                          setModalSource(null);
                          setSearchQuery('');
                          setIsSearchExpanded(false);
                          window.location.hash = `project-${project.id}`;
                        }}
                        className="px-4 py-2.5 hover:bg-slate-100/75 dark:hover:bg-slate-800/50 cursor-pointer flex flex-col gap-0.5 border-b border-slate-100/50 dark:border-slate-800/30 last:border-b-0 text-left"
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
              onClick={() => {
                setModalSource('projects');
                window.location.hash = 'projects';
              }}
              className="px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              All Projects
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        <div className={`md:hidden transition-all duration-300 bg-slate-50/95 backdrop-blur-md relative ${isSearchExpanded
          ? 'max-h-24 opacity-100 py-3 px-4 border-t border-slate-200/50 dark:border-slate-800/50 overflow-visible'
          : 'max-h-0 opacity-0 py-0 px-4 border-t border-transparent pointer-events-none overflow-hidden'
          }`}>
          <div className="flex items-center bg-slate-100/70 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl px-3 py-1.5">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-xs focus:outline-none text-slate-800 dark:text-slate-200"
              ref={mobileSearchInputRef}
            />
          </div>

          {/* Mobile Autocomplete Dropdown */}
          {searchQuery && (
            <div className="absolute left-4 right-4 top-full mt-1 bg-slate-50/98 dark:bg-slate-900/98 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 overflow-hidden py-1">
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
                      setModalSource(null);
                      setSearchQuery('');
                      setIsSearchExpanded(false);
                      window.location.hash = `project-${project.id}`;
                    }}
                    className="px-4 py-2.5 hover:bg-slate-100/75 dark:hover:bg-slate-800/50 cursor-pointer flex flex-col gap-0.5 border-b border-slate-100/50 dark:border-slate-800/30 last:border-b-0 text-left"
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
      </header>

      {/* Main Content Area */}
      {selectedProject ? (
        <ProjectModal
          projectId={selectedProject}
          onClose={() => {
            if (modalSource === 'projects') {
              window.location.hash = 'projects';
            } else if (modalSource === 'archive') {
              window.location.hash = 'archive';
            } else {
              window.location.hash = '';
            }
            setModalSource(null);
          }}
        />
      ) : isArchiveOpen ? (
        <ArchiveModal
          onClose={() => {
            window.location.hash = '';
          }}
          onOpenProject={(id) => {
            window.location.hash = `project-${id}`;
          }}
        />
      ) : isCertificatesOpen ? (
        <CertificatesModal
          onClose={() => {
            window.location.hash = '';
          }}
        />
      ) : isProjectsOpen ? (
        <ProjectsModal
          onClose={() => {
            window.location.hash = '';
          }}
          onOpenProject={(id) => {
            window.location.hash = `project-${id}`;
          }}
        />
      ) : (
        /* Bento Grid Area (Home View) */
        <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-10 md:pb-16 animate-page-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 auto-rows-[220px] sm:auto-rows-[200px] md:auto-rows-[230px] lg:auto-rows-[250px] xl:auto-rows-[270px]">
            {/* 1. Hero Card (2x2) */}
            <HeroCard />

            {/* 2. Academic / Research Card (1x2) - SHEN */}
            <AcademicCard onOpen={(id) => {
              setModalSource(null);
              window.location.hash = `project-${id}`;
            }} />

            {/* 3. Small Personal Project Card (1x1) - TabiLenS */}
            <PersonalProjectCard onOpen={(id) => {
              setModalSource(null);
              window.location.hash = `project-${id}`;
            }} />

            {/* 4. Small Interactive Card (1x1) */}
            <InteractiveCard />

            {/* 5. Product Showroom Card (2x2) - µ's */}
            <ShowroomCard onOpen={(id) => {
              setModalSource(null);
              window.location.hash = `project-${id}`;
            }} />

            {/* 7. Archive / Logs Timeline Card (1x2) */}
            <ArchiveCard onOpen={handleOpenProject} />

            {/* 8. Certificates Card (1x2) */}
            <CertificatesCard onOpen={() => {
              window.location.hash = 'certificates';
            }} />

            {/* 10. Visual NLP Card (2x1) - AI Football Scouter */}
            <VisualCard onOpen={handleOpenProject} />
          </div>
        </main>
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
