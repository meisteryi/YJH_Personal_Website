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
  Search,
  Award
} from 'lucide-react';

// Import preview figures
import SHEN_fig_6 from '../assets/SHEN_fig_6.png';
import mus_fig_1 from '../assets/mus_fig_1.png';
import mus_fig_3 from '../assets/mus_fig_3.png';
import scout_slides_fig_22 from '../assets/scout_slides_fig_22.png';
import photo_exhibition_cover from '../assets/photo_exhibition_cover.png';
import tabilens_3 from '../assets/tabilens_3.png';

// Card Wrapper with premium micro-interactions
export const Card = ({ children, className = '', span = '', onClick }) => {
  const isClickable = !!onClick;
  return (
    <div
      onClick={onClick}
      className={`glass-panel glow-primary rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between transition-all duration-300 h-full
        ${isClickable
          ? 'hover:-translate-y-1 hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-indigo-400/40 cursor-pointer'
          : 'cursor-default'
        } 
        group overflow-hidden ${span} ${className}`}
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
        {/* Title & Subtitle */}
        <div className="space-y-2 mt-2 sm:mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Joohyoung Yi
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-indigo-600 dark:text-indigo-400">
            Art & Technology / Artificial Intelligence Undergraduate student @ Sogang Univ.
          </p>
        </div>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
          안녕하세요! 인공지능, 설명 가능한 시스템(XAI), 그리고 음악 및 스포츠 데이터 분석 등 여러 분야의 데이터를 활용해 프로젝트를 진행했습니다. 별로 쓸데 없는 아이디어라도, 여러가지 아이디어를 직접 앱으로 만들어 보고 있습니다.<br /><br />
          Hello! I have worked on projects utilizing data from various fields, including Artificial Intelligence, Explainable AI (XAI), and music/sports analytics. I love bringing all kinds of ideas to life by building them into actual apps, even the simple or quirky ones.
        </p>
      </div>

      {/* Social / Contact Links */}
      <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100 dark:border-slate-800">
        <a
          href="mailto:yjh020701@gmail.com"
          className="flex items-center justify-center p-2 sm:p-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-200"
          title="Email"
        >
          <Mail size={16} sm:size={20} />
        </a>
        <a
          href="https://github.com/meisteryi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-2 sm:p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 transition-colors duration-200"
          title="GitHub"
        >
          <Github size={16} sm:size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-2 sm:p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 transition-colors duration-200"
          title="LinkedIn"
        >
          <Linkedin size={16} sm:size={20} />
        </a>

        <span className="text-[10px] sm:text-xs text-slate-400 ml-auto flex items-center gap-1">
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
      className="relative !p-0"
    >
      {/* Background Screenshot Image */}
      <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src={SHEN_fig_6}
          alt="SHEN Publication preview"
          className="w-full h-full object-cover opacity-60 dark:opacity-30 filter contrast-125 dark:contrast-100 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/50"></div>
        {/* Gradient Orbs */}
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl"></div>
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent flex flex-col justify-end p-5 md:p-6">
        <div className="flex flex-col gap-2 w-full">
          <div>
            <span className="px-2 py-0.5 rounded bg-white/20 text-white text-[9px] font-bold tracking-widest uppercase backdrop-blur-md">
              Academic Paper
            </span>
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-white mt-2 leading-snug group-hover:text-indigo-300 transition-colors duration-200">
              SHEN: Sentiment Hidden Eye aNalysis
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-300 dark:text-slate-400 mt-1 leading-relaxed line-clamp-3">
              한국어 PLM의 젠더 편향성 평가 및 설명 가능 인공지능(XAI) 연구. Attention과 LIME 기법을 통해 젠더 오귀인 현상을 규명했습니다.
            </p>
          </div>
          <div className="flex items-center justify-between text-[10px] font-semibold text-slate-300 hover:text-white pt-2 border-t border-white/10 mt-1">
            <span>Read Publication</span>
            <BookOpen size={12} className="text-slate-400 group-hover:translate-x-0.5 transition-transform duration-200" />
          </div>
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
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="px-2 py-0.5 rounded bg-white/20 text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
              NLP Class Project
            </span>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mt-1 sm:mt-2">
              AI Football Scouter: Sentiment-Driven Player Recommendation
            </h2>
          </div>
          <div className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors duration-200">
            <ArrowUpRight size={14} sm:size={18} />
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
      className="relative !p-0"
    >
      {/* Background Screenshot Image */}
      <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src={mus_fig_1}
          alt="µ's Research Spectrogram Pipeline"
          className="w-full h-full object-cover opacity-60 dark:opacity-30 filter contrast-125 dark:contrast-100 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/50"></div>
        {/* Gradient Orbs */}
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl"></div>
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-transparent flex flex-col justify-end p-6 md:p-8">
        <div className="flex flex-col gap-3 w-full">
          <div>
            <span className="px-2 py-0.5 rounded bg-white/20 text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
              Research Project
            </span>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mt-2 group-hover:text-purple-300 transition-colors duration-200">
              µ's : Music Understanding via Spectrogram evaluation
            </h2>
            <p className="text-[11px] sm:text-xs md:text-sm text-slate-350 dark:text-slate-400 mt-2 leading-relaxed">
              음악 오디오 파형 신호를 2D Log-Mel Spectrogram 이미지 표현으로 변환하여 ResNet50 전이 학습 신경망으로 장르를 분류하는 컴퓨터 비전 프레임워크입니다.
            </p>
          </div>
          <div className="flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white pt-3 border-t border-white/10 mt-2">
            <span>Explore Pipeline & Results (72.56% Accuracy)</span>
            <ArrowUpRight size={14} sm:size={16} />
          </div>
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
    <Card span="lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1" className="justify-between !p-4 sm:!p-5">
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

// 6. Latest Personal Project Card (Small: 1x1) - TabiLenS
export const PersonalProjectCard = ({ onOpen }) => {
  return (
    <Card
      onClick={() => onOpen('tabilens')}
      span="lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1"
      className="relative !p-0"
    >
      {/* Background Screenshot Image */}
      <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src={tabilens_3}
          alt="TabiLenS App preview"
          className="w-full h-full object-cover opacity-60 dark:opacity-35 filter contrast-110 dark:contrast-100 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/50"></div>
        {/* Gradient Orbs */}
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent blur-3xl"></div>
      </div>

      {/* Top green ping status indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/80 text-[8px] font-mono font-bold text-emerald-400 shadow-sm border border-emerald-800 backdrop-blur-sm z-10">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
        <span>LATEST</span>
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent flex flex-col justify-end p-4 sm:p-5">
        <div className="flex flex-col gap-1 w-full">
          <div>
            <span className="text-[9px] font-bold tracking-widest uppercase text-emerald-400">
              Latest Project
            </span>
            <h3 className="text-sm font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors duration-200">
              TabiLenS
            </h3>
            <p className="text-[10px] text-slate-350 dark:text-slate-400 leading-tight mt-0.5 line-clamp-2">
              실시간 다국어 메뉴판 번역 및 식문화 가이드 서비스
            </p>
          </div>
          <div className="text-[9px] font-mono text-slate-400 dark:text-slate-500 flex items-center justify-between pt-1.5 border-t border-white/5 mt-1">
            <span>View Details</span>
            <ArrowUpRight size={10} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-400" />
          </div>
        </div>
      </div>
    </Card>
  );
};

// 7. Archive / Log List Card (Medium/Long: 1x2)
export const ArchiveCard = ({ onOpen }) => {
  const logs = [
    { date: 'Jul 2026', title: 'Released TabiLenS Mobile App', type: 'Project', color: 'bg-emerald-500', projectId: 'tabilens' },
    { date: 'Jun 2026', title: 'Released Gacha To-Do Mobile App (Ongoing)', type: 'Project', color: 'bg-teal-500', projectId: 'gachatodo' },
    { date: 'Jun 2026', title: 'Released Unseen Map Explorer', type: 'Project', color: 'bg-indigo-500', projectId: 'unseenmap' },
    { date: 'May-Jun 2026', title: 'Released Online HalliGalli Web Game', type: 'Project', color: 'bg-amber-500', projectId: 'halligalli' },
    { date: 'Apr-Jul 2026', title: 'Sophia University Exchange Program (FLA) / 上智大學校', type: 'Academic', color: 'bg-blue-500' },
    { date: 'Dec 2025', title: 'Finished SHEN Gender Bias Research', type: 'Paper', color: 'bg-indigo-500', projectId: 'shen' },
    { date: 'Dec 2025', title: 'Designed µ\'s Mel-Spectrogram pipeline', type: 'Project', color: 'bg-purple-500', projectId: 'mus' },
    { date: 'Jun 2025', title: 'Finished AI Football Scouter NLP Project', type: 'Project', color: 'bg-amber-500', projectId: 'scout' },
    { date: 'Mar 2025', title: 'Declared Artificial Intelligence as Double Major / 인공지능학과 복수전공 진입', type: 'Academic', color: 'bg-blue-500' },
    { date: 'Nov 2024', title: '대한민국 공군 만기전역', type: 'Military', color: 'bg-slate-500' },
    { date: 'Dec 2022', title: 'Released YENA Fanpage Web Project / 최예나 반응형 팬페이지 제작', type: 'Project', color: 'bg-pink-500', projectId: 'yenafanpage' },
    { date: 'Mar-Dec 2022', title: 'Elected Art & Tech Student Council President / 아트&테크놀로지 학과 학생회장', type: 'Academic', color: 'bg-purple-500' },
    { date: 'Mar 2021', title: 'Entered Sogang University Art & Tech', type: 'Academic', color: 'bg-blue-500' }
  ];

  return (
    <Card span="lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-2.5 sm:space-y-4 flex-grow flex flex-col">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              Milestones
            </span>
            <Calendar size={16} className="text-slate-400" />
          </div>

          <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
            Timeline Logs
          </h2>

          {/* Vertical line timeline structure - distributed compact to fit 5 items */}
          <div className="relative pl-4 border-l border-slate-200 dark:border-slate-800 flex-grow flex flex-col justify-between mt-3 sm:mt-5 mb-1 sm:mb-2 ml-2 min-h-[180px] sm:min-h-[220px] md:min-h-[250px]">
            {logs.slice(0, 5).map((log, idx) => (
              <div
                key={idx}
                onClick={() => log.projectId && onOpen(log.projectId)}
                className={`relative group/item ${log.projectId ? 'cursor-pointer' : ''} py-0.5`}
              >
                {/* Timeline Dot */}
                <span className={`absolute -left-[21px] top-2 w-2 h-2 rounded-full border-2 border-white dark:border-slate-950 ${log.color} transition-all duration-200 group-hover/item:scale-125 group-hover/item:shadow-sm`}></span>

                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[8px] font-mono font-bold text-slate-400 dark:text-slate-300">{log.date}</span>
                    <span className="px-1 py-0.1 rounded text-[6px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400">{log.type}</span>
                  </div>
                  <h3 className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 group-hover/item:text-indigo-500 dark:group-hover/item:text-indigo-400 transition-colors duration-150 leading-tight">
                    {log.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => onOpen('archive')}
          className="flex items-center justify-center gap-1.5 w-full py-2 sm:py-2.5 mt-3 sm:mt-4 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-200 cursor-pointer"
        >
          <span>View Archive</span>
          <ExternalLink size={10} sm:size={12} />
        </button>
      </div>
    </Card>
  );
};

// 8. Certificates Card (Medium/Long: 1x2)
// ========================================================
// [직접 수정 가이드] 
// 아래 certificates 배열의 객체들을 본인의 자격증 정보로 수정해 주세요.
// - name: 자격증명 또는 수상명
// - issuer: 발급 기관
// - date: 취득년월 (YYYY.MM)
// - status: 상태 (예: 'Completed', 'Active' 등)
// ========================================================
export const CertificatesCard = () => {
  const certificates = [
    { name: 'JLPT N1', issuer: '일본국제교류기금', date: '2024.01', status: 'Completed' },
  ];

  return (
    <Card span="lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-2">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-2.5 sm:space-y-4 flex-grow flex flex-col">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded-md bg-pink-500/10 text-pink-600 dark:text-pink-400 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              Credentials
            </span>
            <Award size={16} className="text-slate-400" />
          </div>

          <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
            Certificates & Awards
          </h2>

          <div className="flex-grow flex flex-col justify-between mt-3 sm:mt-5 mb-1 sm:mb-2 min-h-[180px] sm:min-h-[220px] md:min-h-[250px]">
            <div className="space-y-3.5 sm:space-y-4">
              {certificates.map((cert, idx) => (
                <div key={idx} className="relative flex flex-col gap-1 pl-3 border-l-2 border-slate-200/80 dark:border-slate-800/80 hover:border-pink-500 dark:hover:border-pink-400 transition-colors duration-200 py-0.5 group/cert">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 group-hover/cert:text-pink-500 dark:group-hover/cert:text-pink-400 transition-colors duration-150 leading-snug">
                      {cert.name}
                    </h3>
                    <span className="px-1.5 py-0.5 rounded text-[8px] font-semibold bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 select-none">
                      {cert.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500">
                    <span>{cert.issuer}</span>
                    <span className="text-emerald-500 font-mono font-bold flex items-center gap-0.5">
                      <CheckCircle size={8} /> {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500 mt-3 pt-3 border-t border-slate-100 dark:border-slate-900">
          <Terminal size={10} />
          <span>Continuous Professional Dev</span>
        </div>
      </div>
    </Card>
  );
};

// 9. Photo Exhibition Card (Horizontal: 2x1)
export const PhotoExhibitionCard = ({ onOpen }) => {
  return (
    <Card
      onClick={() => onOpen('photoexhibition')}
      span="lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 row-span-1"
      className="relative !p-0"
    >
      {/* Background Screenshot Image */}
      <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src={photo_exhibition_cover}
          alt="Photo Exhibition Interface"
          className="w-full h-full object-cover opacity-75 dark:opacity-40 filter contrast-125 dark:contrast-100 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/10 dark:bg-slate-950/40"></div>
        {/* Gradient Orbs */}
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl"></div>
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="px-2 py-0.5 rounded bg-white/20 text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
              Live Project
            </span>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mt-1 sm:mt-2">
              Photo Exhibition: 감성적인 사진 전시회 웹사이트
            </h2>
          </div>
          <div className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors duration-200">
            <ArrowUpRight size={14} sm:size={18} />
          </div>
        </div>
      </div>
    </Card>
  );
};
