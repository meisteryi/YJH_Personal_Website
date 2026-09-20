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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-28 pb-16 w-full animate-page-in">
      
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
              className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          {project.title}
        </h1>

        <p className="mt-3 text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
          {project.subtitle}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
          <span className="font-semibold text-slate-700 dark:text-slate-200">{project.author}</span>
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

      {/* PC: Large High-Contrast 2-Column Dashboard Grid / Mobile: Clean 1-Column Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
        
        {/* Left Column: S (Situation) & P (Problem) */}
        <div className="space-y-6 sm:space-y-8 flex flex-col justify-between">
          
          {/* S: Situation */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-blue-500/25 bg-blue-50/50 dark:bg-blue-950/25 shadow-sm flex-1 flex flex-col justify-center">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-md">
                S
              </span>
              <p className="text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100 font-semibold leading-relaxed sm:leading-loose pt-1">
                {spar.situation}
              </p>
            </div>
          </div>

          {/* P: Problem */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-rose-500/25 bg-rose-50/50 dark:bg-rose-950/25 shadow-sm flex-1 flex flex-col justify-center">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-rose-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-md">
                P
              </span>
              <p className="text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100 font-semibold leading-relaxed sm:leading-loose pt-1">
                {spar.problem}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: A (Action) */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/25 bg-indigo-50/50 dark:bg-indigo-950/25 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-start gap-4 sm:gap-5 mb-4">
              <span className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-indigo-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-md">
                A
              </span>
              <div className="space-y-4 flex-1 pt-1">
                {spar.action.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100 font-semibold leading-relaxed sm:leading-loose">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left: R (Result - Deliverables & Metrics) */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/25 bg-emerald-50/50 dark:bg-emerald-950/25 shadow-sm flex flex-col justify-between">
          <div className="flex items-start gap-4 sm:gap-5">
            <span className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-md">
              R
            </span>
            <div className="space-y-6 flex-1 pt-1">
              {/* 산출물 */}
              <div className="space-y-1.5">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                  <FileCode size={16} /> 산출물 (Deliverables)
                </span>
                <p className="text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100 font-semibold leading-relaxed">
                  {spar.result.artifacts}
                </p>
              </div>

              {/* 측정 결과 */}
              <div className="space-y-1.5 pt-4 border-t border-emerald-500/25">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                  <Award size={16} /> 측정 결과 (Metrics & Outcome)
                </span>
                <p className="text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100 font-semibold leading-relaxed">
                  {spar.result.metrics}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right: I (Insight) */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/25 bg-purple-50/50 dark:bg-purple-950/25 shadow-sm flex flex-col justify-between">
          <div className="flex items-start gap-4 sm:gap-5">
            <span className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-purple-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-md">
              I
            </span>
            <p className="text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100 font-semibold leading-relaxed sm:leading-loose pt-1">
              {spar.insight}
            </p>
          </div>
        </div>

      </div>

      {/* Demo & Visual Artifacts Section */}
      {demoItems.length > 0 && (
        <div className="pt-10 border-t border-slate-200/60 dark:border-slate-800/60 mb-14">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Demo & Visual Artifacts
            </h2>
            <span className="text-sm sm:text-base text-slate-500 font-semibold ml-2">
              실제 구동 화면 및 피규어
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {demoItems.map((item, idx) => {
              const images = item.figs || (item.fig ? [item.fig] : []);

              return (
                <div
                  key={idx}
                  className="glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  {/* Image Display */}
                  {images.length > 0 && (
                    <div className="bg-slate-950 p-3 sm:p-4 flex items-center justify-center min-h-[220px] max-h-[300px] overflow-hidden">
                      <img
                        src={images[0]}
                        alt={item.title}
                        className="w-full h-full max-h-[280px] object-contain rounded-xl"
                      />
                    </div>
                  )}

                  {/* Caption & Description */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {item.captions && item.captions.length > 0 && (
                      <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-800 mt-4 block font-mono">
                        {item.captions[0]}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Back to Home CTA */}
      <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex justify-center">
        <button
          onClick={onClose}
          className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span>목록으로 돌아가기 (Back to Projects)</span>
        </button>
      </div>

    </main>
  );
};
