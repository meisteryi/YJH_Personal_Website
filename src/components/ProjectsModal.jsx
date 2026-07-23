import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Code } from 'lucide-react';
import { projectsData } from './ProjectModal';

// Import project featured images/figures
import SHEN_fig_6 from '../assets/SHEN_fig_6.png';
import mus_fig_1 from '../assets/mus_fig_1.png';
import scout_slides_fig_22 from '../assets/scout_slides_fig_22.png';
import tabilens_1 from '../assets/tabilens_1.png';
import halligalli_1 from '../assets/halligalli_1.png';
import unseenmap_1 from '../assets/unseenmap_1.png';
import gachatodo_3 from '../assets/gachatodo_3.png';
import yena_fanpage_profile from '../assets/yena_fanpage_profile.jpg';
import photo_exhibition_cover from '../assets/photo_exhibition_cover.png';

const projectImages = {
  photoexhibition: photo_exhibition_cover,
  gachatodo: gachatodo_3,
  tabilens: tabilens_1,
  unseenmap: unseenmap_1,
  halligalli: halligalli_1,
  shen: SHEN_fig_6,
  mus: mus_fig_1,
  scout: scout_slides_fig_22,
  yenafanpage: yena_fanpage_profile
};

export const ProjectsModal = ({ onClose, onOpenProject }) => {
  const [isClosing, setIsClosing] = useState(false);
  const scrollContainerRef = useRef(null);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 200);
  };

  useEffect(() => {
    // Prevent background page body scroll while modal is active
    document.body.style.overflow = 'hidden';

    // Intercept mouse wheel vertical scroll and redirect to horizontal scroll
    const container = scrollContainerRef.current;
    if (container) {
      const handleWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      };
      container.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        container.removeEventListener('wheel', handleWheel);
        document.body.style.overflow = '';
      };
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Filter out the 'archive' entry from the projects list
  const projects = Object.values(projectsData).filter(p => p.id !== 'archive');

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/75 ${
        isClosing ? 'animate-backdrop-out' : 'animate-backdrop-in'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`glass-panel w-full max-w-5xl h-[95vh] md:h-[90vh] max-h-[95vh] md:max-h-[90vh] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-slate-200/50 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95 transition-all duration-300 ${
          isClosing ? 'animate-modal-out' : 'animate-modal-in'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="py-3 px-4 sm:py-4 sm:px-6 border-b border-slate-200/40 dark:border-slate-800/40 flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              <Code className="text-indigo-500" size={20} sm:size={24} />
              All Projects Showcase
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-350">
              Browse through my engineering, machine learning, and human-computer interaction projects.
            </p>
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors duration-150 cursor-pointer"
          >
            <X size={16} sm:size={20} />
          </button>
        </div>

        {/* Projects Horizontal Scroll Container */}
        <div ref={scrollContainerRef} className="flex-1 overflow-x-auto overflow-y-hidden pt-4 pb-2 sm:pt-5 sm:pb-3 md:pt-6 md:pb-3 md:px-8 flex items-stretch scrollbar-thin">
          <div className="flex gap-4 sm:gap-6 pb-1 h-full items-stretch">
            {projects.map((project) => {
              const image = projectImages[project.id];
              return (
                <div 
                  key={project.id}
                  onClick={() => onOpenProject(project.id)}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-100 dark:border-slate-800/60 bg-white/50 dark:bg-slate-900/40 p-4 sm:p-5 hover:bg-slate-50/80 dark:hover:bg-slate-900/20 hover:border-slate-200/80 dark:hover:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 w-[260px] sm:w-[300px] md:w-[350px] h-full shrink-0 overflow-hidden"
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* Project Preview Image */}
                    {image && (
                      <div className="h-24 sm:h-30 md:h-36 w-full rounded-xl bg-slate-100 dark:bg-slate-950 p-2 flex items-center justify-center overflow-hidden border border-slate-200/20 dark:border-slate-800/40">
                        <img 
                          src={image} 
                          alt={project.title} 
                          className="h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-150 line-clamp-1">
                        {project.title}
                      </h3>
                      
                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-350 line-clamp-4 leading-relaxed overflow-hidden">
                        {project.abstract.split('\n\n')[0]}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 sm:mt-5 sm:pt-4 border-t border-slate-100 dark:border-slate-800/55 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-150">
                    <span>View Project Details</span>
                    <ArrowRight size={12} sm:size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-950/30 border-t border-slate-200/40 dark:border-slate-800/40 flex justify-end px-4 sm:px-6 md:px-8">
          <button 
            onClick={handleClose}
            className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold transition-colors duration-150 shadow-md shadow-indigo-500/10 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
