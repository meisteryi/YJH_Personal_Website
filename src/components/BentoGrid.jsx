import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  BookOpen, 
  Image as ImageIcon, 
  Sparkles, 
  Terminal, 
  Calendar,
  ExternalLink,
  Code,
  Smartphone,
  CheckCircle,
  FileText,
  Music,
  Search
} from 'lucide-react';

// Import preview figures
import SHEN_fig_6 from '../assets/SHEN_fig_6.png';
import mus_fig_1 from '../assets/mus_fig_1.png';
import mus_fig_3 from '../assets/mus_fig_3.png';
import scout_slides_fig_22 from '../assets/scout_slides_fig_22.png';

// Card Wrapper with premium micro-interactions
export const Card = ({ children, className = '', span = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`glass-panel glow-primary rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-400/40 group cursor-pointer overflow-hidden ${span} ${className}`}
    >
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
          Available for Collaboration
        </div>
        
        {/* Title & Subtitle */}
        <div className="space-y-3 mt-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Joohyoung Yi
          </h1>
          <p className="text-lg md:text-xl font-medium text-indigo-600 dark:text-indigo-400">
            Art & Technology Student @ Sogang Univ.
          </p>
        </div>

        {/* Short Bio */}
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md text-sm md:text-base mt-2">
          Hello! I explore the intersection of artificial intelligence, explainable systems (XAI), and music/sports data analytics. I design pipelines that interpret deep learning decisions and build systems for creative engineering.
        </p>
      </div>

      {/* Social / Contact Links */}
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
        <a 
          href="mailto:yjh020701@sogang.ac.kr" 
          className="flex items-center justify-center p-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-200"
          title="Email"
        >
          <Mail size={20} />
        </a>
        <a 
          href="https://github.com/meisteryi" 
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
          Seoul, South Korea
        </span>
      </div>
    </Card>
  );
};

// 2. Academic / Text-Heavy Card (Vertical: 1x2) - SHEN Project
export const AcademicCard = ({ onOpen }) => {
  return (
    <Card 
      onClick={() => onOpen('shen')}
      span="lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2"
    >
      <div className="flex flex-col gap-4 h-full justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase">
              Academic Paper
            </span>
            <BookOpen size={18} className="text-slate-400" />
          </div>
          
          <h2 className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 leading-snug group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
            SHEN: Sentiment Hidden Eye aNalysis
          </h2>
          
          <div className="space-y-2">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-550">
              Investigating Gender Bias in Korean PLMs via Attention & XAI
            </p>
            <div className="h-[1px] w-12 bg-slate-200 dark:bg-slate-800"></div>
          </div>

          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-6">
            We explore hidden decision boundaries of sentiment classification models (KcELECTRA). While score swaps show nominal neutrality, attention and LIME reveal the model misattributes gender prefixes as salient sentiment weights.
          </p>
        </div>

        <div className="space-y-3">
          {/* Subtle figure snapshot */}
          <div className="h-16 rounded-xl border border-slate-200/50 dark:border-slate-800/80 bg-white dark:bg-slate-950 p-1 flex justify-center overflow-hidden">
            <img src={SHEN_fig_6} alt="Attention Heatmap preview" className="h-full object-contain" />
          </div>
          <button className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-xs font-semibold transition-all duration-200 text-slate-700 dark:text-slate-300">
            <span>Read Publication</span>
            <FileText size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </Card>
  );
};

// 3. Visual / Media-Heavy Card (Horizontal: 2x1) - Features AI Football Scouter
export const VisualCard = ({ onOpen }) => {
  return (
    <Card 
      onClick={() => onOpen('scout')}
      span="lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 row-span-1" 
      className="relative !p-0"
    >
      {/* Background Screenshot Image */}
      <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
        <img 
          src={scout_slides_fig_22} 
          alt="AI Scouter Interface" 
          className="w-full h-full object-cover opacity-75 dark:opacity-40 filter contrast-125 dark:contrast-100" 
        />
        <div className="absolute inset-0 bg-slate-950/10 dark:bg-slate-950/40"></div>
        {/* Gradient Orbs */}
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl animate-float"></div>
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="px-2 py-0.5 rounded bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
              NLP Class Project
            </span>
            <h2 className="text-lg md:text-xl font-bold text-white mt-2">
              AI Football Scouter: Sentiment-Driven Player Recommendation
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

// 4. Product / App Showroom Card (Medium: 2x2) - µ's Music Genre Project
export const ShowroomCard = ({ onOpen }) => {
  return (
    <Card 
      onClick={() => onOpen('mus')}
      span="lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-1 row-span-2"
    >
      <div className="flex flex-col gap-4 h-full justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
              Research Project
            </span>
            <Music size={18} className="text-slate-400" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
            µ's : Music Understanding via Spectrogram evaluation
          </h2>
          <p className="text-xs md:text-sm text-slate-550 dark:text-slate-400">
            A Computer Vision framework for Music Genre Classification. Converts 1-channel audio waveforms into 2D log-mel spectrogram representations and leverages ResNet50 transfer learning.
          </p>
        </div>

        {/* Pipeline Container Preview */}
        <div className="my-4 h-36 md:h-44 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 flex items-center justify-center p-3 relative overflow-hidden group/mockup">
          <img src={mus_fig_1} alt="Preprocessing Pipeline" className="h-full object-contain transition-transform duration-300 group-hover/mockup:scale-[1.03]" />
          
          <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/80 text-[8px] font-mono text-emerald-400 shadow-sm border border-slate-800">
            <CheckCircle size={8} />
            <span>ResNet50 Pipeline</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-semibold text-slate-555 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200">
          <span>Explore Pipeline & Results (72.56% Accuracy)</span>
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
    tech: ['PyTorch', 'Librosa', 'Transformers', 'React', 'Tailwind'],
    tools: ['Hugging Face', 'Colab', 'Git', 'Figma', 'VSCode']
  };

  return (
    <Card span="lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1" className="justify-between !p-5">
      <div className="flex items-center justify-between w-full">
        <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 dark:text-indigo-400">
          Skills
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
        <span>Core Competency</span>
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
          Status
        </span>
        <div className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </div>
      </div>

      <div className="space-y-1 my-2">
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">Current Focus</p>
        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 line-clamp-2">
          Deepening explainable AI interfaces and deep-learning architectures for audio/visual art.
        </p>
      </div>

      <div className="text-[9px] font-mono text-slate-400 dark:text-slate-500 flex items-center justify-between">
        <span>Active Research</span>
        <Terminal size={10} />
      </div>
    </Card>
  );
};

// 7. Archive / Log List Card (Medium/Long: 1x2)
export const ArchiveCard = ({ onOpen }) => {
  const logs = [
    { date: 'Jun 2026', title: 'Launched Bento Portfolio v1.1', type: 'Release', color: 'bg-emerald-500' },
    { date: 'Dec 2025', title: 'Finished SHEN Gender Bias Research', type: 'Paper', color: 'bg-indigo-500', projectId: 'shen' },
    { date: 'Nov 2025', title: 'Designed µ\'s Mel-Spectrogram pipeline', type: 'Project', color: 'bg-purple-500', projectId: 'mus' },
    { date: 'Jun 2025', title: 'Finished AI Football Scouter NLP Project', type: 'Project', color: 'bg-amber-500', projectId: 'scout' },
    { date: 'Mar 2024', title: 'Entered Sogang University Art & Tech', type: 'Academic', color: 'bg-blue-500' }
  ];

  return (
    <Card span="lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold tracking-wider uppercase">
            Milestones
          </span>
          <Calendar size={18} className="text-slate-400" />
        </div>

        <h2 className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          Timeline Logs
        </h2>
        
        {/* Vertical line timeline structure */}
        <div className="relative pl-4 border-l border-slate-200 dark:border-slate-800 space-y-6 mt-6 ml-2">
          {logs.map((log, idx) => (
            <div 
              key={idx} 
              onClick={() => log.projectId && onOpen(log.projectId)}
              className={`relative group/item ${log.projectId ? 'cursor-pointer' : ''}`}
            >
              {/* Timeline Dot */}
              <span className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-950 ${log.color} transition-all duration-200 group-hover/item:scale-125 group-hover/item:shadow-sm`}></span>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500">{log.date}</span>
                  <span className="px-1.5 py-0.2 rounded text-[7px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400">{log.type}</span>
                </div>
                <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-355 group-hover/item:text-indigo-500 dark:group-hover/item:text-indigo-400 transition-colors duration-150 leading-snug">
                  {log.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <button className="flex items-center justify-center gap-1.5 w-full py-2.5 mt-6 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-850 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-200">
          <span>View Archive</span>
          <ExternalLink size={12} />
        </button>
      </div>
    </Card>
  );
};
