import React from 'react';
import { ArrowLeft, Globe, Github, CheckCircle2, Award, FileCode, Sparkles, Image as ImageIcon } from 'lucide-react';
import { projectsData } from '../data/projects';
import { projectsSparData } from '../data/projectsSparData';

export const ProjectModal = ({ projectId, onClose }) => {
  const project = projectsData[projectId];
  const spar = projectsSparData[projectId];

  if (!project || !spar) return null;

  const demoItems = project.sections?.results || [];

  return (
    <main className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-28 pb-16 w-full animate-page-in">
      
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-sm hover:shadow-md text-slate-800 dark:text-slate-100 text-sm sm:text-base font-extrabold transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-3">
          {project.page && project.page !== '#' && (
            <a
              href={project.page}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm"
            >
              <span>Visit Demo</span>
              <Globe size={16} />
            </a>
          )}
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm"
            >
              <span>GitHub</span>
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Project Header */}
      <div className="border-b border-slate-200/60 dark:border-slate-800/60 pb-8 mb-10">
        <div className="flex flex-wrap gap-2.5 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          {project.title}
        </h1>

        <p className="mt-3 text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-bold leading-relaxed">
          {project.subtitle}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 font-semibold">
          <span className="font-bold text-slate-700 dark:text-slate-200">{project.author}</span>
          <span>·</span>
          <span>{project.affiliation}</span>
          {project.email && (
            <>
              <span>·</span>
              <span className="font-mono">{project.email}</span>
            </>
          )}
        </div>
      </div>

      {/* PC: 2-Column Split View: Left = SPAR+I (50%) / Right = Demo & Visual Artifacts (50%) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 mb-16 items-start">
        
        {/* LEFT COLUMN: SPAR+I Framework */}
        <div className="space-y-6 sm:space-y-7">
          <div className="flex items-center gap-2.5 pb-2 text-sm sm:text-base font-extrabold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
            <Sparkles size={18} className="text-indigo-500 shrink-0" />
            <span>기획 요약 프레임워크 · SPAR+I</span>
          </div>

          {/* S: Situation */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-blue-500/30 bg-blue-50/60 dark:bg-blue-950/30 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white font-black text-base sm:text-lg flex items-center justify-center shadow-md">
                S
              </span>
              <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-blue-700 dark:text-blue-300">
                Situation · 문제 배경 및 상황
              </span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-950 dark:text-slate-50 font-bold leading-relaxed sm:leading-loose">
              {spar.situation}
            </p>
          </div>

          {/* P: Problem */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-rose-500/30 bg-rose-50/60 dark:bg-rose-950/30 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-600 text-white font-black text-base sm:text-lg flex items-center justify-center shadow-md">
                P
              </span>
              <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-rose-700 dark:text-rose-300">
                Problem · 직면한 핵심 문제
              </span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-950 dark:text-slate-50 font-bold leading-relaxed sm:leading-loose">
              {spar.problem}
            </p>
          </div>

          {/* A: Action */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/30 bg-indigo-50/60 dark:bg-indigo-950/30 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-600 text-white font-black text-base sm:text-lg flex items-center justify-center shadow-md">
                A
              </span>
              <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-indigo-700 dark:text-indigo-300">
                Action · 기획 및 실행 솔루션
              </span>
            </div>
            <div className="space-y-4">
              {spar.action.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 text-base sm:text-lg md:text-xl text-slate-950 dark:text-slate-50 font-bold leading-relaxed sm:leading-loose">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* R: Result */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-emerald-50/60 dark:bg-emerald-950/30 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-600 text-white font-black text-base sm:text-lg flex items-center justify-center shadow-md">
                R
              </span>
              <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-emerald-800 dark:text-emerald-300">
                Result · 성과 및 산출물
              </span>
            </div>
            <div className="space-y-5">
              {/* 산출물 */}
              <div className="space-y-2">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <FileCode size={18} /> 산출물 (Deliverables)
                </span>
                <p className="text-base sm:text-lg md:text-xl text-slate-950 dark:text-slate-50 font-bold leading-relaxed">
                  {spar.result.artifacts}
                </p>
              </div>

              {/* 측정 결과 */}
              <div className="space-y-2 pt-4 border-t border-emerald-500/30">
                <span className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <Award size={18} /> 측정 성과 (Metrics & Outcome)
                </span>
                <p className="text-base sm:text-lg md:text-xl text-slate-950 dark:text-slate-50 font-bold leading-relaxed">
                  {spar.result.metrics}
                </p>
              </div>
            </div>
          </div>

          {/* I: Insight */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/30 bg-purple-50/60 dark:bg-purple-950/30 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-600 text-white font-black text-base sm:text-lg flex items-center justify-center shadow-md">
                I
              </span>
              <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-purple-700 dark:text-purple-300">
                Insight · 배운 점 및 시사점
              </span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-950 dark:text-slate-50 font-bold leading-relaxed sm:leading-loose">
              {spar.insight}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Demo & Visual Artifacts */}
        <div className="space-y-6 sm:space-y-7">
          <div className="flex items-center gap-2.5 pb-2 text-sm sm:text-base font-extrabold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
            <ImageIcon size={18} className="text-indigo-500 shrink-0" />
            <span>데모 및 시각 자료 · Demo & Visual Artifacts</span>
          </div>

          {demoItems.length > 0 ? (
            <div className="space-y-6 sm:space-y-8">
              {demoItems.map((item, idx) => {
                const images = item.figs || (item.fig ? [item.fig] : []);

                return (
                  <div
                    key={idx}
                    className="glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    {/* Image Display */}
                    {images.length > 0 && (
                      <div className="bg-slate-950 p-4 sm:p-5 flex items-center justify-center min-h-[240px] max-h-[440px] overflow-hidden">
                        <img
                          src={images[0]}
                          alt={item.title}
                          className="w-full h-full max-h-[420px] object-contain rounded-2xl"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2.5 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
                        {item.desc}
                      </p>

                      {item.captions && item.captions.length > 0 && (
                        <span className="text-sm sm:text-base text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 mt-4 block font-medium">
                          {item.captions[0]}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="glass-panel p-8 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-slate-500">
              등록된 데모 자료가 없습니다.
            </div>
          )}
        </div>

      </div>

      {/* Bottom Back Button */}
      <div className="flex justify-center pt-8 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 font-extrabold text-base sm:text-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span>목록으로 돌아가기 (Back to Projects)</span>
        </button>
      </div>

    </main>
  );
};
