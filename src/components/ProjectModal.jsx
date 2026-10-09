import React from 'react';
import { ArrowLeft, Globe, Github, CheckCircle2, Award, FileCode, Sparkles, Image as ImageIcon, Calendar, Play, Video } from 'lucide-react';
import { projectsData } from '../data/projects';
import { projectsSparData } from '../data/projectsSparData';

export const ProjectModal = ({ projectId, onClose }) => {
  const project = projectsData[projectId];
  const spar = projectsSparData[projectId];

  if (!project || !spar) return null;

  const demoItems = project.sections?.results || [];

  return (
    <main className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-24 md:pt-28 pb-16 w-full animate-page-in overflow-hidden">
      
      {/* Top Navigation Bar */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 sm:gap-4 mb-6 sm:mb-8">
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-xs hover:shadow-md text-slate-800 dark:text-slate-100 text-xs sm:text-base font-extrabold transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          {project.page && project.page !== '#' && (
            <a
              href={project.page}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs shrink-0"
            >
              <span>Visit Demo</span>
              <Globe size={14} className="sm:w-4 sm:h-4" />
            </a>
          )}
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs shrink-0"
            >
              <span>GitHub</span>
              <Github size={14} className="sm:w-4 sm:h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Project Header */}
      <div className="border-b border-slate-200/60 dark:border-slate-800/60 pb-6 sm:pb-8 mb-8 sm:mb-10">
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-3 sm:mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 break-all"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title and Project Period */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-6 gap-y-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight sm:leading-[1.15] break-keep">
            {project.title}
          </h1>
          {project.period && (
            <span className="text-base sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-bold shrink-0">
              {project.period}
            </span>
          )}
        </div>

        <p className="mt-3 text-base sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-bold leading-relaxed break-keep">
          {project.subtitle}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 text-xs sm:text-base text-slate-500 dark:text-slate-400 font-semibold break-keep">
          <span className="font-bold text-slate-700 dark:text-slate-200">{project.author}</span>
          <span>·</span>
          <span>{project.affiliation}</span>
          {project.email && (
            <>
              <span>·</span>
              <span className="font-mono break-all">{project.email}</span>
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
            <span className="break-keep">기획 요약 프레임워크 · SPAR+I</span>
          </div>

          {/* S: Situation */}
          <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-blue-500/30 bg-blue-50/60 dark:bg-blue-950/30 shadow-xs">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white font-black text-sm sm:text-lg flex items-center justify-center shadow-md shrink-0">
                S
              </span>
              <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-blue-700 dark:text-blue-300 break-keep">
                Situation · 문제 배경 및 상황
              </span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-slate-950 dark:text-slate-50 font-bold leading-relaxed sm:leading-loose break-keep">
              {spar.situation}
            </p>
          </div>

          {/* P: Problem */}
          <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-rose-500/30 bg-rose-50/60 dark:bg-rose-950/30 shadow-xs">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-rose-600 text-white font-black text-sm sm:text-lg flex items-center justify-center shadow-md shrink-0">
                P
              </span>
              <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-rose-700 dark:text-rose-300 break-keep">
                Problem · 직면한 핵심 문제
              </span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-slate-950 dark:text-slate-50 font-bold leading-relaxed sm:leading-loose break-keep">
              {spar.problem}
            </p>
          </div>

          {/* A: Action */}
          <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-indigo-500/30 bg-indigo-50/60 dark:bg-indigo-950/30 shadow-xs">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-600 text-white font-black text-sm sm:text-lg flex items-center justify-center shadow-md shrink-0">
                A
              </span>
              <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-indigo-700 dark:text-indigo-300 break-keep">
                Action · 기획 및 실행 솔루션
              </span>
            </div>
            <div className="space-y-3.5 sm:space-y-4">
              {spar.action.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 sm:gap-3.5 text-sm sm:text-base md:text-lg text-slate-950 dark:text-slate-50 font-bold leading-relaxed break-keep">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5 sm:mt-1" />
                  <span className="break-keep">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* R: Result */}
          <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-emerald-500/30 bg-emerald-50/60 dark:bg-emerald-950/30 shadow-xs">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-600 text-white font-black text-sm sm:text-lg flex items-center justify-center shadow-md shrink-0">
                R
              </span>
              <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-emerald-800 dark:text-emerald-300 break-keep">
                Result · 성과 및 산출물
              </span>
            </div>
            <div className="space-y-4 sm:space-y-5">
              {/* 산출물 */}
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-xs sm:text-base font-extrabold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 flex items-center gap-2 break-keep">
                  <FileCode size={16} className="sm:w-[18px] sm:h-[18px]" /> 산출물 (Deliverables)
                </span>
                <p className="text-sm sm:text-base md:text-lg text-slate-950 dark:text-slate-50 font-bold leading-relaxed break-keep">
                  {spar.result.artifacts}
                </p>
              </div>

              {/* 측정 결과 */}
              <div className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-emerald-500/30">
                <span className="text-xs sm:text-base font-extrabold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 flex items-center gap-2 break-keep">
                  <Award size={16} className="sm:w-[18px] sm:h-[18px]" /> 측정 성과 (Metrics & Outcome)
                </span>
                <p className="text-sm sm:text-base md:text-lg text-slate-950 dark:text-slate-50 font-bold leading-relaxed break-keep">
                  {spar.result.metrics}
                </p>
              </div>
            </div>
          </div>

          {/* I: Insight */}
          <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-purple-500/30 bg-purple-50/60 dark:bg-purple-950/30 shadow-xs">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-600 text-white font-black text-sm sm:text-lg flex items-center justify-center shadow-md shrink-0">
                I
              </span>
              <span className="text-sm sm:text-base md:text-lg font-black tracking-wide text-purple-700 dark:text-purple-300 break-keep">
                Insight · 배운 점 및 시사점
              </span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-slate-950 dark:text-slate-50 font-bold leading-relaxed sm:leading-loose break-keep">
              {spar.insight}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Demo & Visual Artifacts */}
        <div className="space-y-6 sm:space-y-7">
          <div className="flex items-center gap-2.5 pb-2 text-sm sm:text-base font-extrabold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
            <ImageIcon size={18} className="text-indigo-500 shrink-0" />
            <span className="break-keep">데모 및 시각 자료 · Demo & Visual Artifacts</span>
          </div>

          {demoItems.length > 0 ? (
            <div className="space-y-6 sm:space-y-8">
              {demoItems.map((item, idx) => {
                const images = item.figs || (item.fig ? [item.fig] : []);

                return (
                  <div
                    key={idx}
                    className="glass-panel rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    {/* Image Display */}
                    {images.length > 0 && (
                      <div className="bg-slate-950 p-3 sm:p-5 flex items-center justify-center min-h-[200px] sm:min-h-[240px] max-h-[440px] overflow-hidden">
                        <img
                          src={images[0]}
                          alt={item.title}
                          className="w-full h-full max-h-[420px] object-contain rounded-xl sm:rounded-2xl"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-5 sm:p-7">
                      <h3 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white mb-2 sm:mb-2.5 leading-snug break-keep">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-semibold break-keep">
                        {item.desc}
                      </p>

                      {item.captions && item.captions.length > 0 && (
                        <span className="text-xs sm:text-base text-slate-500 dark:text-slate-400 pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-slate-800 mt-3 sm:mt-4 block font-medium break-keep">
                          {item.captions[0]}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-slate-500 break-keep">
              등록된 데모 자료가 없습니다.
            </div>
          )}
        </div>

      </div>

      {/* Full-width Dedicated Demo Video Section (if project.demoVideo exists) */}
      {project.demoVideo && (
        <section className="mb-12 sm:mb-16 glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-indigo-500/30 bg-slate-900/90 shadow-xl overflow-hidden text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
                <Play size={18} className="fill-white translate-x-0.5 sm:w-[22px] sm:h-[22px]" />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-white break-keep">
                  {project.demoVideo.title || '실행 데모 비디오 · Live Screen Recording Demo'}
                </h2>
                {project.demoVideo.desc && (
                  <p className="mt-1 text-xs sm:text-base text-slate-300 font-medium leading-relaxed break-keep">
                    {project.demoVideo.desc}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 mt-1 sm:mt-0">
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>Live Screen Recording</span>
              </span>
            </div>
          </div>

          {/* Media Player Container */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/90 flex items-center justify-center border border-slate-800 shadow-2xl p-1.5 sm:p-4">
            {typeof project.demoVideo.url === 'string' && (project.demoVideo.url.endsWith('.mp4') || project.demoVideo.url.endsWith('.webm')) ? (
              <video
                src={project.demoVideo.url}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-h-[720px] rounded-lg sm:rounded-xl object-contain mx-auto"
              />
            ) : (
              <img
                src={project.demoVideo.url}
                alt={project.demoVideo.title}
                className="w-full max-h-[720px] rounded-lg sm:rounded-xl object-contain mx-auto shadow-2xl"
              />
            )}
          </div>
        </section>
      )}

      {/* Bottom Back Button */}
      <div className="flex justify-center pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 font-extrabold text-sm sm:text-lg shadow-md hover:shadow-lg transition-all cursor-pointer break-keep"
        >
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          <span>목록으로 돌아가기 (Back to Projects)</span>
        </button>
      </div>

    </main>
  );
};
