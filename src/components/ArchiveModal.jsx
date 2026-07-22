import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, Search, Award, Code, FileText, GraduationCap, ArrowRight } from 'lucide-react';

const archiveLogs = [
  {
    date: 'Jul 2026',
    title: 'Released TabiLenS Mobile App',
    category: 'Project',
    color: 'emerald',
    icon: Code,
    projectId: 'tabilens',
    description: 'Gemini 2.5 Flash OCR 및 네이티브 TTS를 활용한 Flutter 기반 실시간 다국어 메뉴판 번역 및 식문화 가이드 앱 개발.\n\nDeveloped TabiLenS, a Flutter-based real-time multilingual menu translator and dining guide app using Gemini 2.5 Flash OCR and native Text-to-Speech.',
    tags: ['Flutter', 'Gemini API', 'Riverpod', 'TTS', 'Travel Utility']
  },
  {
    date: 'Apr 2026 - Jul 2026',
    title: 'Sophia University Exchange Program',
    category: 'Academic',
    color: 'blue',
    icon: GraduationCap,
    description: '일본 上智대학교(Sophia University) 교환학생 파견 (전공: FLA).\n\nCompleted exchange student program at Sophia University, Japan (Major: FLA - Faculty of Liberal Arts).',
    tags: ['Exchange Program', 'Sophia University', 'FLA', 'Japan']
  },
  {
    date: 'Jun 2026',
    title: 'Started Gacha To-Do (Ongoing)',
    category: 'Project',
    color: 'teal',
    icon: Code,
    projectId: 'gachatodo',
    description: '할 일 완료 보상 코인으로 픽셀 아쿠아리움을 꾸미는 가챠/육성 요소 결합 Flutter 기반 모바일 애플리케이션 개발 시작 (진행 중).\n\nStarted development of Gacha To-Do, a Flutter-based mobile application integrating daily task management with gacha collection mechanics and pixel aquarium decoration.',
    tags: ['Flutter', 'ValueNotifier', 'Local Storage', 'Pixel Art', 'Gamification']
  },
  {
    date: 'Jun 2026',
    title: 'Released Unseen Map Explorer',
    category: 'Project',
    color: 'indigo',
    icon: Code,
    projectId: 'unseenmap',
    description: '사진 EXIF GPS 메타데이터 파싱 기반 여행 경로 매핑 및 프론티어 그리드 탐색 알고리즘 기반 미방문지 골목 POI 추천 Leaflet 웹 서비스 개발.\n\nDeveloped Unseen Map Explorer, a Leaflet-based interactive web map service that parses photo EXIF GPS data to overlay trip history, using a grid-based frontier exploration algorithm to recommend local POIs in unvisited alleys.',
    tags: ['Leaflet.js', 'exifr', 'Overpass API', 'Vanilla JS']
  },
  {
    date: 'Jun 2026',
    title: 'Released Online HalliGalli Web Game',
    category: 'Project',
    color: 'amber',
    icon: Code,
    projectId: 'halligalli',
    description: 'Firebase Realtime Database 동기화 및 COM AI 대전 모드를 지원하는 WebRTC 기반 실시간 멀티플레이어 할리갈리 보드 게임 개발.\n\nDeveloped Online HalliGalli, a real-time web multiplayer card board game with single-player (vs COM AI) modes and Firebase Realtime Database syncing.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Firebase']
  },
  {
    date: 'Dec 2025',
    title: 'Finished SHEN Gender Bias Research',
    category: 'Paper',
    color: 'indigo',
    icon: FileText,
    projectId: 'shen',
    description: '한국어 사전 학습 트랜스포머 모델의 잠재적 편향성 평가 및 젠더 접두사가 감성 예측을 왜곡하는 \'특성 오귀인\' 분석 공동 논문 저술.\n\nCo-authored paper evaluating hidden bias footprints in Korean pre-trained transformer architectures. Highlighted "Feature Misattribution" where gendered prefixes hijack sentiment predictions.',
    tags: ['NLP', 'XAI', 'Transformers', 'KcELECTRA', 'LIME/SHAP']
  },
  {
    date: 'Dec 2025',
    title: "Designed µ's Mel-Spectrogram pipeline",
    category: 'Project',
    color: 'purple',
    icon: Code,
    projectId: 'mus',
    description: '오디오 신호를 2D Log-Mel Spectrogram 표현으로 변환하여 ResNet50 분류 신경망으로 분석하는 음악 장르 분류 컴퓨터 비전 모델 개발.\n\nImplemented a Computer Vision model for classifying music audio clips by converting signals into 2D Log-Mel Spectrogram representations, feeding into ResNet50 classification layers.',
    tags: ['Computer Vision', 'PyTorch', 'Librosa', 'ResNet50', 'Audio Processing']
  },
  {
    date: 'Jun 2025',
    title: 'Finished AI Football Scouter NLP Project',
    category: 'Project',
    color: 'amber',
    icon: Code,
    projectId: 'scout',
    description: '객관적인 선수 능력치 스태츠와 Reddit API로 수집한 팬들의 주관적인 의견 감성 분석 및 로컬 phi-1.5 모델의 자연어 축구 선수 스카우팅 추천 시스템 개발.\n\nDeveloped an NLP recommendation system combining numeric football player cards metrics with subjective fan commentaries scraped via Reddit APIs. Summaries generated using local phi-1.5 model.',
    tags: ['BERT', 'phi-1.5', 'Reddit API', 'Streamlit', 'Text Toxicity']
  },
  {
    date: 'Mar 2025',
    title: 'Declared Artificial Intelligence as Double Major',
    category: 'Academic',
    color: 'blue',
    icon: GraduationCap,
    description: '서강대학교 인공지능(AI) 학과 복수전공을 시작하여, 컴퓨터 비전, 자연어 처리(NLP), 강화학습 등 고급 인공지능 엔지니어링 교과를 이수하고 딥러닝 응용 역량을 고도화하고 있습니다.\n\nDeclared Artificial Intelligence as a double major at Sogang University, focusing on advanced machine learning engineering, computer vision, and NLP to build solid deep learning application expertise.',
    tags: ['Artificial Intelligence', 'Sogang University', 'Double Major', 'Deep Learning']
  },
  {
    date: 'Feb 2023 - Nov 2024',
    title: '대한민국 공군 만기전역',
    category: 'Military',
    color: 'slate',
    icon: Award,
    description: '대한민국 공군 병 845기로서 성실히 군 복무를 수행하고 만기전역하였습니다.\n\nServed honorably and completed military service as Sergeant in the Republic of Korea Air Force (845th batch).',
    tags: ['공군', '군복무', '만기전역']
  },
  {
    date: 'Dec 2022',
    title: 'Released YENA Fanpage Web Project',
    category: 'Project',
    color: 'pink',
    icon: Code,
    projectId: 'yenafanpage',
    description: '서강대학교 아트&테크놀로지 2022년 2학기 Network Media 과목의 기말 프로젝트로 개발한 최예나 아티스트 반응형 웹 팬페이지.\n\nDeveloped a responsive web fanpage for the artist Choi Ye-na as a final project for the Network Media course (2022-2) in Art & Technology at Sogang University.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Lightbox']
  },
  {
    date: 'Mar 2022 - Dec 2022',
    title: 'Elected Art & Tech Student Council President',
    category: 'Academic',
    color: 'purple',
    icon: Award,
    description: '서강대학교 아트&테크놀로지 학과 학생회장으로 선출되어 학과 리더십을 발휘하고 다양한 학술/행사 프로그램을 기획 및 운영했습니다.\n\nElected and served as the Student Council President of the Art & Technology department at Sogang University, leading student initiatives and organizing various academic and cultural events.',
    tags: ['Leadership', 'Sogang University', 'Student Council', 'Event Planning']
  },
  {
    date: 'Mar 2021',
    title: 'Entered Sogang University Art & Tech',
    category: 'Academic',
    color: 'blue',
    icon: GraduationCap,
    description: '창의융합 시스템 설계, 머신러닝 아키텍처, 컴퓨터 미디어 아트를 중점으로 서강대학교 아트&테크놀로지 학부 입학 및 학사 과정 시작.\n\nBegan undergraduate study in the Art & Technology department, focusing on creative systems integration, machine learning architectures, and computational media arts.',
    tags: ['Art & Technology', 'Sogang University', 'Interactive Art', 'Admissions']
  }
];

export const ArchiveModal = ({ onClose, onOpenProject }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const scrollContainerRef = useRef(null);

  // Reset visible count and scroll to top when search or category changes
  useEffect(() => {
    setVisibleCount(5);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [searchTerm, selectedCategory]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 200);
  };

  const categories = ['All', 'Project', 'Paper', 'Release', 'Academic'];

  const filteredLogs = archiveLogs.filter(log => {
    const matchesSearch = log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || log.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryStyles = (category) => {
    switch (category) {
      case 'Release': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Paper': return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
      case 'Project': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'Academic': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      default: return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
    }
  };

  const getDotColor = (category) => {
    switch (category) {
      case 'Release': return 'bg-emerald-500 shadow-emerald-500/50';
      case 'Paper': return 'bg-indigo-500 shadow-indigo-500/50';
      case 'Project': return 'bg-purple-500 shadow-purple-500/50';
      case 'Academic': return 'bg-blue-500 shadow-blue-500/50';
      default: return 'bg-slate-500 shadow-slate-500/50';
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/75 ${isClosing ? 'animate-backdrop-out' : 'animate-backdrop-in'
        }`}
      onClick={handleClose}
    >
      <div
        className={`glass-panel w-full max-w-4xl max-h-[92vh] md:max-h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-slate-200/50 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95 transition-all duration-300 ${isClosing ? 'animate-modal-out' : 'animate-modal-in'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 md:p-8 border-b border-slate-200/40 dark:border-slate-800/40 flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="text-indigo-500" size={20} sm:size={24} />
              Interactive Timeline Archive
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-350">
              Explore key milestones, publications, and technical project history.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors duration-150 cursor-pointer"
          >
            <X size={16} sm:size={20} />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-200/30 dark:border-slate-800/30 bg-slate-50/50 dark:bg-slate-950/20 flex flex-col md:flex-row gap-3 sm:gap-4 items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold border transition-all duration-200 cursor-pointer ${selectedCategory === cat
                  ? 'bg-indigo-500 border-indigo-500 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2 sm:top-2.5 text-slate-400" size={14} sm:size={16} />
            <input
              type="text"
              placeholder="Search history, tech stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 sm:py-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/85 dark:border-slate-800/80 text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
            />
          </div>
        </div>

        {/* Scrollable Timeline */}
        <div ref={scrollContainerRef} className="overflow-y-auto max-h-[55vh] md:max-h-[50vh] p-4 sm:p-6 md:p-8">
          {filteredLogs.length === 0 ? (
            <div className="text-center py-12 text-slate-400 dark:text-slate-500 font-mono text-xs">
              No matching archive logs found.
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              <div className="relative pl-5 md:pl-10 border-l-2 border-slate-200 dark:border-slate-800 space-y-6 sm:space-y-8 ml-2 sm:ml-4 md:ml-8 py-2">
                {filteredLogs.slice(0, visibleCount).map((log, idx) => {
                  const LogIcon = log.icon;
                  const isExpanded = expandedIndex === idx;

                  return (
                    <div key={idx} className="relative group/timeline">
                      {/* Floating Dot Icon */}
                      <div className={`absolute -left-[33px] md:-left-[53px] top-1 sm:top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white dark:border-slate-950 ${getDotColor(log.category)} flex items-center justify-center text-white shadow-md transition-transform duration-200 group-hover/timeline:scale-110`}>
                        <LogIcon size={10} className="md:size-[14px]" />
                      </div>

                      {/* Timeline card content */}
                      <div
                        onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                        className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer ${isExpanded
                          ? 'bg-slate-50 dark:bg-slate-900/50 border-indigo-500/40 dark:border-indigo-500/30 shadow-lg shadow-indigo-500/5'
                          : 'bg-white/60 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-slate-900/20 hover:border-slate-200/80 dark:hover:border-slate-800 shadow-sm'
                          }`}
                      >
                        {/* Top row Info */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">{log.date}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider border ${getCategoryStyles(log.category)}`}>
                              {log.category}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-800 dark:text-slate-100 mt-1.5 sm:mt-2 leading-snug">
                          {log.title}
                        </h3>

                        {/* Expandable Section */}
                        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 mt-3 sm:mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {log.description}
                          </p>

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-1 mt-3 sm:mt-4">
                            {log.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-950 text-[8px] sm:text-[9px] font-mono text-slate-500 dark:text-slate-400 border border-slate-200/30 dark:border-slate-800/40">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Project Link */}
                          {log.projectId && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenProject(log.projectId);
                              }}
                              className="mt-4 sm:mt-5 flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150 cursor-pointer"
                            >
                              <span>Open Project Details</span>
                              <ArrowRight size={10} sm:size={12} className="animate-pulse" />
                            </button>
                          )}
                        </div>

                        {!isExpanded && (
                          <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 sm:mt-2 line-clamp-1">
                            {log.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {filteredLogs.length > visibleCount && (
                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => setVisibleCount(prev => prev + 5)}
                    className="px-5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    Load More (+{Math.min(5, filteredLogs.length - visibleCount)})
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-950/30 border-t border-slate-200/40 dark:border-slate-800/40 flex justify-between items-center px-4 sm:px-6 md:px-8">
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono">[Interactive Timeline v1.0]</span>
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold transition-colors duration-150 shadow-md shadow-indigo-500/10 cursor-pointer"
          >
            Close Archive
          </button>
        </div>
      </div>
    </div>
  );
};
