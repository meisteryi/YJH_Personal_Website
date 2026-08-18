import React, { useState, useEffect, useRef } from 'react';
import { X, BookOpen, Cpu, BarChart2, Award, ArrowUpRight, Zap, Play, CheckCircle, Globe, ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projects';

// Import project figures needed for custom JSX blocks (SHEN, mus & AI Football Scouter)
import SHEN_fig_5 from '../assets/SHEN_fig_5.png';
import SHEN_fig_6 from '../assets/SHEN_fig_6.png';
import mus_fig_1 from '../assets/mus_fig_1.png';
import scout_report_fig_1 from '../assets/scout_report_fig_1.png';
import scout_report_fig_13 from '../assets/scout_report_fig_13.png';

export const ProjectModal = ({ projectId, onClose, onOpenPhotoExhibition }) => {
  const project = projectsData[projectId];
  const [activeTab, setActiveTab] = useState('overview');
  const [isClosing, setIsClosing] = useState(false);
  const scrollContainerRef = useRef(null);
  const isPaper = ['shen', 'mus'].includes(projectId);

  // Reset scroll position to top when switching tabs or projects
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeTab, projectId]);

  const getSectionsForTab = () => {
    if (activeTab === 'overview') {
      return [
        { id: 'sec-abstract', label: isPaper ? 'Abstract' : 'Overview' },
        { id: 'sec-introduction', label: isPaper ? '1. Introduction' : '1. Intro' }
      ];
    }
    if (activeTab === 'methodology') {
      return project.sections.methodology.map((m, idx) => ({
        id: `sec-methodology-${idx}`,
        label: m.title.split(' (')[0]
      }));
    }
    if (activeTab === 'results') {
      const items = project.sections.results ? project.sections.results.map((r, idx) => ({
        id: `sec-results-${idx}`,
        label: r.title.split(' (')[0]
      })) : [];
      if (project.sections.conclusion) {
        items.push({ id: 'sec-conclusion', label: 'Conclusion' });
      }
      return items;
    }
    return [];
  };

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + scrollTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const handleClose = () => {
    onClose();
  };

  if (!project) return null;

  return (
    <main
      className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-10 md:pb-16 w-full animate-page-in flex flex-col gap-6"
    >
      {/* Back button */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleClose}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-800 shadow-sm hover:shadow-md text-slate-600 dark:text-slate-300 text-xs font-bold transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Header Section (Borderless) */}
      <div className="border-b border-slate-200/40 dark:border-slate-800/40 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-1.5 sm:space-y-2 flex-1">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-1.5 py-0.5 rounded text-[8px] sm:text-[10px] font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-snug">
            {project.title}
          </h1>
          <p className="text-[11px] sm:text-xs md:text-sm text-slate-500 dark:text-slate-350 font-medium">
            {project.subtitle}
          </p>
          <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 dark:text-slate-500 flex flex-wrap gap-x-4">
            <span>{project.author}</span>
            <span>{project.affiliation}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href={project.page || '#'}
            onClick={(e) => {
              if (!project.page) {
                e.preventDefault();
                alert('해당 프로젝트의 라이브 웹 페이지(Pages)가 등록되어 있지 않거나 준비 중입니다.');
              }
            }}
            target={project.page ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] sm:text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border border-transparent"
          >
            <span>Visit Pages</span>
            <Globe size={12} sm:size={14} className="shrink-0" />
          </a>
          <a
            href={project.link || '#'}
            onClick={(e) => {
              if (!project.link) {
                e.preventDefault();
                alert('해당 프로젝트의 소스 코드 저장소(Github)가 등록되어 있지 않거나 제공되지 않습니다.');
              }
            }}
            target={project.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-[10px] sm:text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border border-transparent"
          >
            <span>Visit Project</span>
            <ArrowUpRight size={12} sm:size={14} className="shrink-0" />
          </a>
        </div>
      </div>

      {/* Main Body Layout: Sidebar + Main Content + Right TOC */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Left Sidebar Menu */}
        <div className="flex md:flex-col shrink-0 md:w-40 md:sticky md:top-28 md:self-start bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-3 sm:p-4 gap-1.5 md:gap-0.5">
          <div className="flex flex-row md:flex-col w-full md:space-y-0.5">
            {[
              { id: 'overview', label: isPaper ? 'Abstract & Intro' : 'Overview', icon: BookOpen },
              { id: 'methodology', label: isPaper ? 'Methodology' : 'Features', icon: Cpu },
              { id: 'results', label: isPaper ? 'Results & Figures' : 'Demo & Screenshots', icon: BarChart2 }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-2.5 py-2 sm:px-3 sm:py-2.5 md:py-2 md:px-3 text-xs md:text-xs font-semibold transition-all duration-200 cursor-pointer w-auto md:w-full md:rounded-lg text-left shrink-0 ${activeTab === tab.id
                  ? 'border-b-2 border-indigo-500 md:border-b-0 md:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold'
                  : 'border-b-2 border-transparent md:border-b-0 text-slate-500 hover:text-slate-800 dark:hover:text-slate-350 hover:bg-slate-100/50 dark:hover:bg-slate-800/30'
                  }`}
              >
                <tab.icon size={12} sm:size={13} className="shrink-0" />
                <span className="truncate">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>


        {/* Center Pane: Main Content Area */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 min-w-0 bg-white/70 dark:bg-slate-900/70 border border-slate-200/55 dark:border-slate-800/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm space-y-6 sm:space-y-8"
        >
            {activeTab === 'overview' && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <div id="sec-abstract" className="space-y-2 sm:space-y-3">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 flex items-center gap-1.5">
                    <Award size={12} sm:size={14} /> Abstract
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200/30 dark:border-slate-800/20 whitespace-pre-line">
                    {project.abstract}
                  </p>
                </div>

                <div id="sec-introduction" className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">1. Introduction</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed whitespace-pre-line">
                    {project.sections.introduction}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'methodology' && (
              <div className="space-y-6 animate-fade-in">
                <div className={['mus', 'shen', 'scout'].includes(project.id) ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : "space-y-6"}>
                  <div className="space-y-6">
                    {project.sections.methodology.map((m, idx) => (
                      <div id={`sec-methodology-${idx}`} key={idx} className="space-y-2 bg-slate-50 dark:bg-slate-950/20 p-5 rounded-2xl border border-slate-200/20 dark:border-slate-800/10">
                        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                          {m.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                          {m.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Show Methodology Diagram if it exists */}
                  {project.id === 'mus' && (
                    <div className="flex flex-col justify-center items-center p-4 bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200/55 dark:border-slate-800/50 rounded-2xl">
                      <img
                        src={mus_fig_1}
                        alt="Preprocessing Pipeline"
                        className="max-h-56 md:max-h-64 object-contain rounded-xl shadow-md border border-slate-200/40 dark:border-slate-800/40 bg-white p-2"
                      />
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 text-center max-w-sm whitespace-pre-line">
                        {project.sections.methodology[0].caption}
                      </p>
                    </div>
                  )}

                  {project.id === 'shen' && (
                    <div className="flex flex-col justify-center items-center p-4 bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200/55 dark:border-slate-800/50 rounded-2xl">
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="flex flex-col items-center">
                          <img src={SHEN_fig_5} alt="Attention Heatmap Male" className="max-h-24 md:max-h-28 object-contain rounded border border-slate-200 dark:border-slate-800 bg-white" />
                          <span className="text-[8px] text-slate-400 mt-1">Male Director Attention</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src={SHEN_fig_6} alt="Attention Heatmap Female" className="max-h-24 md:max-h-28 object-contain rounded border border-slate-200 dark:border-slate-800 bg-white" />
                          <span className="text-[8px] text-slate-400 mt-1">Female Director Attention</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 text-center max-w-sm whitespace-pre-line">
                        Figure: Attention weights comparison between male/female directors (highlights the misattribution on the gender prefix '여-').
                      </p>
                    </div>
                  )}

                  {project.id === 'scout' && (
                    <div className="flex flex-col justify-center items-center p-4 bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200/55 dark:border-slate-800/50 rounded-2xl gap-4">
                      <img
                        src={scout_report_fig_1}
                        alt="normalize_position_input"
                        className="max-h-36 object-contain rounded border border-slate-200 dark:border-slate-800 bg-white p-1"
                      />
                      <img
                        src={scout_report_fig_13}
                        alt="filter_players_by_position"
                        className="max-h-24 object-contain rounded border border-slate-200 dark:border-slate-800 bg-white p-1"
                      />
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center max-w-sm whitespace-pre-line">
                        Figures: Python code snippets implementing query position normalization and candidate filtering based on player positions to resolve recommendations error.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-8 animate-fade-in">
                {project.sections.results.map((r, idx) => (
                  <div id={`sec-results-${idx}`} key={idx} className="space-y-4 border-b border-slate-200/20 dark:border-slate-800/20 pb-6 last:border-0 last:pb-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                      {/* Left Column: Description */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                          <Zap size={14} className="text-indigo-500" />
                          {r.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-350 leading-relaxed whitespace-pre-line bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-200/10 dark:border-slate-800/10">
                          {r.desc}
                        </p>
                      </div>

                      {/* Right Column: Figures */}
                      <div className="w-full">
                        {/* Figure displays */}
                        {r.fig && (
                          <div className="flex flex-col items-center p-3 sm:p-4 bg-slate-50 dark:bg-slate-950/30 border border-slate-200/30 dark:border-slate-800/20 rounded-2xl w-full mx-auto">
                            <img
                              src={r.fig}
                              alt={r.caption}
                              className="max-h-[300px] sm:max-h-[380px] md:max-h-[420px] object-contain rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 bg-white p-2 w-full"
                            />
                            <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 mt-2.5 text-center max-w-xl whitespace-pre-line">
                              {r.caption}
                            </p>
                          </div>
                        )}

                        {/* Multi-Figure displays */}
                        {r.figs && (
                          <div className="space-y-4">
                            <div className={r.figs.length === 1
                              ? "flex justify-center"
                              : "grid grid-cols-1 sm:grid-cols-2 gap-4"
                            }>
                              {r.figs.map((f, fIdx) => (
                                <div
                                  key={fIdx}
                                  className={`flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-950/30 border border-slate-200/30 dark:border-slate-800/20 rounded-xl ${r.figs.length === 1 ? 'max-w-md w-full' : ''
                                    }`}
                                >
                                  <img
                                    src={f}
                                    alt="Figure component"
                                    className={`object-contain rounded border border-slate-200 dark:border-slate-800 bg-white p-1.5 w-full ${r.figs.length === 1 ? 'max-h-[300px] sm:max-h-[380px] md:max-h-[420px]' : 'max-h-36 sm:max-h-40 md:max-h-48'
                                      }`}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="space-y-1.5 text-center">
                              {r.captions.map((cap, cIdx) => (
                                <p key={cIdx} className="text-[10px] text-slate-400 dark:text-slate-500 whitespace-pre-line">
                                  {cap}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div id="sec-conclusion" className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">Conclusion</h4>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {project.sections.conclusion}
                  </p>
                </div>
              </div>
            )}
          </div>

        {/* Right Sidebar: Table of Contents / Outline */}
        <div className="hidden lg:flex flex-col w-36 shrink-0 lg:sticky lg:top-28 lg:self-start p-4 space-y-3">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              On this page
            </span>
            <div className="h-0.5 w-8 bg-indigo-500 rounded-full"></div>
          </div>
          <nav className="flex flex-col space-y-3">
            {getSectionsForTab().map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="text-left text-[10px] font-semibold text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors duration-150 cursor-pointer hover:underline line-clamp-2 leading-tight"
              >
                {sec.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="p-3 bg-slate-50/50 dark:bg-slate-950/20 border border-slate-200/40 dark:border-slate-800/40 rounded-2xl flex justify-between items-center px-5 md:px-6">
        <span className="text-[10px] text-slate-400 font-mono">[Sogang Univ. Art & Tech Portfolio Project]</span>
      </div>
    </main>
  );
};
