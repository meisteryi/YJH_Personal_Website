import React, { useState } from 'react';
import { X, ArrowRight, Code } from 'lucide-react';
import { projectsData } from './ProjectModal';

// Import project featured images/figures
import SHEN_fig_6 from '../assets/SHEN_fig_6.png';
import mus_fig_1 from '../assets/mus_fig_1.png';
import scout_slides_fig_22 from '../assets/scout_slides_fig_22.png';
import tabilens_1 from '../assets/tabilens_1.png';

const projectImages = {
  tabilens: tabilens_1,
  shen: SHEN_fig_6,
  mus: mus_fig_1,
  scout: scout_slides_fig_22
};

export const ProjectsModal = ({ onClose, onOpenProject }) => {
  const [isClosing, setIsClosing] = useState(false);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 200);
  };

  // Filter out the 'archive' entry from the projects list
  const projects = Object.values(projectsData).filter(p => p.id !== 'archive');

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-950/75 ${
        isClosing ? 'animate-backdrop-out' : 'animate-backdrop-in'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`glass-panel w-full max-w-5xl max-h-[85vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-slate-200/50 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95 transition-all duration-300 ${
          isClosing ? 'animate-modal-out' : 'animate-modal-in'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-slate-200/40 dark:border-slate-800/40 flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              <Code className="text-indigo-500" size={24} />
              All Projects Showcase
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-300">
              Browse through my engineering, machine learning, and human-computer interaction projects.
            </p>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors duration-150"
          >
            <X size={20} />
          </button>
        </div>

        {/* Projects Horizontal Scroll Container */}
        <div className="flex-1 overflow-x-auto p-6 md:p-8 flex items-stretch scrollbar-thin">
          <div className="flex gap-6 pb-2">
            {projects.map((project) => {
              const image = projectImages[project.id];
              return (
                <div 
                  key={project.id}
                  onClick={() => onOpenProject(project.id)}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-100 dark:border-slate-800/60 bg-white/50 dark:bg-slate-900/40 p-5 hover:bg-slate-50/80 dark:hover:bg-slate-900/20 hover:border-slate-200/80 dark:hover:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 w-[290px] sm:w-[320px] md:w-[350px] shrink-0"
                >
                  <div className="space-y-4">
                    {/* Project Preview Image */}
                    {image && (
                      <div className="h-36 w-full rounded-xl bg-slate-100 dark:bg-slate-950 p-2 flex items-center justify-center overflow-hidden border border-slate-200/20 dark:border-slate-800/40">
                        <img 
                          src={image} 
                          alt={project.title} 
                          className="h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[9px] font-bold uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-base font-bold text-slate-800 dark:text-slate-150 leading-snug group-hover:text-indigo-500 dark:group-hover:text-indigo-450 transition-colors duration-150">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs text-slate-550 dark:text-slate-300 line-clamp-3 leading-relaxed">
                        {project.abstract}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/55 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-150">
                    <span>View Project Details</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/30 border-t border-slate-200/40 dark:border-slate-800/40 flex justify-end px-6 md:px-8">
          <button 
            onClick={handleClose}
            className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold transition-colors duration-150 shadow-md shadow-indigo-500/10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
