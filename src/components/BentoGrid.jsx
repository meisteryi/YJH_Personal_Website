import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  BookOpen, 
  Image as ImageIcon, 
  Layers, 
  Sparkles, 
  Terminal, 
  Calendar,
  ExternalLink,
  Code,
  Smartphone,
  CheckCircle,
  FileText
} from 'lucide-react';

// Card Wrapper with premium micro-interactions
export const Card = ({ children, className = '', span = '' }) => {
  return (
    <div className={`glass-panel glow-primary rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-400/40 group cursor-pointer overflow-hidden ${span} ${className}`}>
      {children}
    </div>
  );
};

// 1. Hero Card (Large: 2x2)
export const HeroCard = () => {
  return (
    <Card span="lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-1 row-span-2">
      <div className="flex flex-col gap-4">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold w-fit animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          [Availability Status Placeholder]
        </div>
        
        {/* Title & Subtitle */}
        <div className="space-y-3 mt-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            [Your Name / Headline]
          </h1>
          <p className="text-lg md:text-xl font-medium text-indigo-600 dark:text-indigo-400">
            [Professional Role / Tagline Placeholder]
          </p>
        </div>

        {/* Short Bio */}
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md text-sm md:text-base mt-2">
          [Introductory Bio Placeholder. Briefly describe your background, main focus, and what makes your work unique. A hybrid of technology, research, and creative media.]
        </p>
      </div>

      {/* Social / Contact Links */}
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
        <a 
          href="#contact" 
          className="flex items-center justify-center p-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-200"
          title="Email"
        >
          <Mail size={20} />
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 transition-colors duration-200"
          title="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 transition-colors duration-200"
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        
        <span className="text-xs text-slate-400 ml-auto flex items-center gap-1">
          [Location / Timezone]
        </span>
      </div>
    </Card>
  );
};

// 2. Academic / Text-Heavy Card (Vertical: 1x2)
export const AcademicCard = () => {
  return (
    <Card span="lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2">
      <div className="flex flex-col gap-4 h-full justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase">
              [Category Tag]
            </span>
            <BookOpen size={18} className="text-slate-400" />
          </div>
          
          <h2 className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 leading-snug group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
            [Academic Research or Article Title Placeholder]
          </h2>
          
          <div className="space-y-2">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
              [Journal / Conference / Institution Name, 2026]
            </p>
            <div className="h-[1px] w-12 bg-slate-200 dark:bg-slate-800"></div>
          </div>

          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-6">
            [Abstract/Summary Block: Provide a concise summary of the research methodology, findings, and publications here. This card is optimized for reading-heavy content and fits well in a vertical space.]
          </p>
        </div>

        <button className="flex items-center justify-between w-full px-4 py-2.5 mt-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-xs font-semibold transition-all duration-200 text-slate-700 dark:text-slate-300">
          <span>[Read Document / Paper]</span>
          <FileText size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </Card>
  );
};

// 3. Visual / Media-Heavy Card (Horizontal: 2x1)
export const VisualCard = () => {
  return (
    <Card span="lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 row-span-1" className="relative !p-0">
      {/* Background Media Placeholder / Visual Layer */}
      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
        {/* Elegant geometric grid pattern as default visual */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Flowing animated color orb to look premium */}
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-tr from-pink-500/10 to-indigo-500/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Media Icon & Placeholder Text */}
        <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600">
          <ImageIcon size={40} className="stroke-[1.5]" />
          <span className="text-xs font-semibold tracking-wider uppercase">[Full-Bleed Media Container Placeholder]</span>
        </div>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent flex flex-col justify-end p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="px-2 py-0.5 rounded bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
              [Visual Art / Media Project]
            </span>
            <h2 className="text-lg md:text-xl font-bold text-white mt-2">
              [Project Title / Artwork Headline Placeholder]
            </h2>
          </div>
          <div className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors duration-200">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </Card>
  );
};

// 4. Product / App Showroom Card (Medium: 2x2)
export const ShowroomCard = () => {
  return (
    <Card span="lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-1 row-span-2">
      <div className="flex flex-col gap-4 h-full justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
              [App Showroom]
            </span>
            <Smartphone size={18} className="text-slate-400" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
            [Product Name Placeholder]
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            [Brief description of the product platform, key value proposition, and technologies used.]
          </p>
        </div>

        {/* Device/Mockup Container Placeholder */}
        <div className="my-4 h-36 md:h-44 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/80 flex items-center justify-center p-4 relative overflow-hidden group/mockup">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-pink-500/5"></div>
          
          {/* Simulated Phone Frame */}
          <div className="w-24 h-36 md:w-28 md:h-40 border-4 border-slate-300 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 flex flex-col justify-between p-2 shadow-lg relative transform transition-transform duration-350 group-hover/mockup:scale-105 group-hover/mockup:rotate-1">
            <div className="w-8 h-2 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-1"></div>
            <div className="flex-1 bg-slate-50 dark:bg-slate-900 rounded-md border border-slate-100 dark:border-slate-900 flex flex-col justify-center items-center p-1">
              <span className="text-[7px] text-slate-400 font-mono">[UI Screen]</span>
              <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mt-1">
                <Sparkles size={8} className="text-purple-500" />
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-slate-350 dark:bg-slate-800 mx-auto mt-1"></div>
          </div>

          {/* Details / Feature Snippet Overlays */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 max-w-[55%]">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white dark:bg-slate-950 shadow-sm border border-slate-200/50 dark:border-slate-800/50">
              <CheckCircle size={8} className="text-emerald-500" />
              <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400">[Feature One]</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white dark:bg-slate-950 shadow-sm border border-slate-200/50 dark:border-slate-800/50">
              <CheckCircle size={8} className="text-emerald-500" />
              <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400">[Feature Two]</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white dark:bg-slate-950 shadow-sm border border-slate-200/50 dark:border-slate-800/50">
              <CheckCircle size={8} className="text-emerald-500" />
              <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400">[Feature Three]</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-semibold text-slate-550 dark:text-slate-405 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200">
          <span>[View Showroom Details]</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </Card>
  );
};

// 5. Status / Interactive Card (Small: 1x1) - Interactive Stack Selector
export const InteractiveCard = () => {
  const [activeStack, setActiveStack] = useState('tech');
  
  const stacks = {
    tech: ['React', 'Next.js', 'Tailwind', 'Python', 'PyTorch'],
    tools: ['Figma', 'Git', 'Docker', 'VSCode', 'Blender']
  };

  return (
    <Card span="lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1" className="justify-between !p-5">
      <div className="flex items-center justify-between w-full">
        <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 dark:text-indigo-400">
          [Interactive]
        </span>
        
        {/* Toggle controls */}
        <div className="flex gap-1 bg-slate-100 dark:bg-slate-900 p-0.5 rounded-lg border border-slate-200/30 dark:border-slate-800/30">
          <button 
            onClick={(e) => { e.stopPropagation(); setActiveStack('tech'); }}
            className={`px-1.5 py-0.5 text-[9px] font-semibold rounded ${activeStack === 'tech' ? 'bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white' : 'text-slate-400'}`}
          >
            Stack
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setActiveStack('tools'); }}
            className={`px-1.5 py-0.5 text-[9px] font-semibold rounded ${activeStack === 'tools' ? 'bg-white dark:bg-slate-800 shadow-sm text-slate-900 dark:text-white' : 'text-slate-400'}`}
          >
            Tools
          </button>
        </div>
      </div>

      {/* Dynamic tech icons / tags display */}
      <div className="flex flex-wrap gap-1.5 my-3">
        {stacks[activeStack].map((item, idx) => (
          <span 
            key={idx} 
            className="px-2 py-1 rounded-md text-[10px] font-mono bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/20 dark:border-slate-800/20 text-slate-600 dark:text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-150"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500">
        <Code size={10} />
        <span>[Interactive Matrix]</span>
      </div>
    </Card>
  );
};

// 6. Status/Pulse Card (Small: 1x1) - Status updates
export const StatusCard = () => {
  return (
    <Card span="lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1" className="justify-between !p-5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-500">
          [Live Status]
        </span>
        <div className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </div>
      </div>

      <div className="space-y-1 my-2">
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">[Current Focus]</p>
        <p className="text-sm font-bold text-slate-800 dark:text-slate-205 line-clamp-2">
          [Building Next-Gen Bento Interfaces & Interactive Visualizations]
        </p>
      </div>

      <div className="text-[9px] font-mono text-slate-400 dark:text-slate-500 flex items-center justify-between">
        <span>[Updated Just Now]</span>
        <Terminal size={10} />
      </div>
    </Card>
  );
};

// 7. Archive / Log List Card (Medium/Long: 1x2)
export const ArchiveCard = () => {
  const logs = [
    { date: '[Jun 2026]', title: '[Launch of project portfolio website template]', type: 'Update' },
    { date: '[May 2026]', title: '[Completed academic research paper on human-AI interfaces]', type: 'Research' },
    { date: '[Apr 2026]', title: '[Experimenting with 3D shaders and canvas mockups]', type: 'Design' },
    { date: '[Mar 2026]', title: '[Open sourced a lightweight Tailwind v4 bento grid system]', type: 'OpenSource' }
  ];

  return (
    <Card span="lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2">
      <div className="flex flex-col gap-4 h-full justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold tracking-wider uppercase">
              [Archive Logs]
            </span>
            <Calendar size={18} className="text-slate-400" />
          </div>

          <h2 className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
            [Recent Logs / Activity]
          </h2>
          
          {/* Scrollable list structure */}
          <div className="space-y-3 mt-4 max-h-[220px] overflow-y-auto pr-1">
            {logs.map((log, idx) => (
              <div 
                key={idx} 
                className="group/item flex flex-col gap-1 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/60 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500">{log.date}</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{log.type}</span>
                </div>
                <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-350 group-hover/item:text-indigo-500 dark:group-hover/item:text-indigo-400 line-clamp-1 transition-colors duration-150">
                  {log.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <button className="flex items-center justify-center gap-1.5 w-full py-2.5 mt-4 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-200">
          <span>[View Full Journal / Logs]</span>
          <ExternalLink size={12} />
        </button>
      </div>
    </Card>
  );
};
