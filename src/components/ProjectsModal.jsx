import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Code, ArrowLeft } from 'lucide-react';
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
    onClose();
  };

  useEffect(() => {
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
      };
    }
  }, []);

  // Filter out the 'archive' entry from the projects list
  const projects = Object.values(projectsData).filter(p => p.id !== 'archive');

  return (
    <main
      className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-10 md:pb-16 w-full animate-fade-in flex flex-col gap-4"
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

      
        {/* Header */}
        <div className="pb-6 border-b border-slate-200/40 dark:border-slate-800/40 flex justify-between items-center">
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
        <div ref={scrollContainerRef} className="py-6 overflow-x-auto overflow-y-hidden flex items-stretch scrollbar-thin h-[450px] sm:h-[500px] md:h-[550px] w-full">
          <div className="flex gap-4 sm:gap-6 pb-1 items-stretch">
            {projects.map((project) => {
              const image = projectImages[project.id];
              return (
                <div 
                  key={project.id}
                  onClick={() => onOpenProject(project.id)}
                  className="group flex flex-col justify-between rounded-2xl bg-slate-100/50 dark:bg-slate-800/20 p-4 sm:p-5 hover:bg-slate-200/50 dark:hover:bg-slate-800/40 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 w-[260px] sm:w-[300px] md:w-[350px] h-full shrink-0 overflow-hidden"
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* Project Preview Image */}
                    {image && (
                      <div className="h-24 sm:h-30 md:h-36 w-full rounded-xl bg-white dark:bg-slate-900 p-2 flex items-center justify-center overflow-hidden border border-slate-200/50 dark:border-slate-800/50">
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

                  <div className="mt-3 pt-3 sm:mt-5 sm:pt-4 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-150">
                    <span>View Project Details</span>
                    <ArrowRight size={12} sm:size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>


    </main>
  );
};
