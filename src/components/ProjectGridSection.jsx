import React, { useState } from 'react';
import { Grid, ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { projectImages } from '../data/projects';

export const ProjectGridSection = ({ onOpenProject }) => {
  const [activeTab, setActiveTab] = useState('all');

  // 3 Core Service Planning Competencies
  const competencyTabs = [
    { id: 'all', label: '전체 프로젝트 (All)', tag: null },
    { id: 'structuring', label: '#구조화 (Structuring)', tag: '#구조화' },
    { id: 'execution', label: '#실행력 (Execution)', tag: '#실행력' },
    { id: 'engagement', label: '#몰입설계 (Engagement)', tag: '#몰입설계' },
  ];

  const projects = [
    {
      id: 'shen',
      title: 'SHEN: Sentiment Hidden Eye aNalysis',
      badge: 'XAI Research',
      description: '한국어 PLM의 젠더 편향성 평가 및 Attention/LIME 설명가능 AI 분석 연구. 블랙박스 모델의 불투명한 의사결정 원인을 구조화하여 특성 오귀인 현상을 규명.',
      competencyTags: ['#구조화', '#XAI_리서치', '#편향분석'],
      github: 'https://github.com/meisteryi/SHEN'
    },
    {
      id: 'tabilens',
      title: 'TabiLenS: AI Travel Menu & Culture Guide',
      badge: 'Vision-LLM App',
      description: '실시간 비전 OCR 및 LLM 기반 다국어 메뉴판 번역 & 식문화 가이드 서비스. 낯선 식문화와 알레르기 장벽을 3단계 주문 플로우로 구조화하고 Flutter 프로토타입으로 구현.',
      competencyTags: ['#구조화', '#실행력', '#비전LLM'],
      github: 'https://github.com/meisteryi/TabiLenS'
    },
    {
      id: 'liargame',
      title: 'Liar Game: AI Context-Aware Party App',
      badge: 'Gen-AI Game',
      description: 'Gemini API 기반 지능형 제시어 생성 및 파티 모바일 게임. 상황 맞춤형 단어 생성과 심리전 룰셋을 설계하고 Flutter+Firebase로 즉시 구현 및 배포.',
      competencyTags: ['#실행력', '#몰입설계', '#프롬프트엔지니어링'],
      github: 'https://github.com/meisteryi/LiarGame'
    },
    {
      id: 'scout',
      title: 'AI Football Scouter',
      badge: 'NLP & Data',
      description: '정량 스탯 필터링과 팬 오피니언 다차원 감성 분석 기반 축구 선수 추천 시스템. 모호한 정성 평가를 지표화하여 360도 스카우팅 대시보드로 구조화.',
      competencyTags: ['#구조화', '#감성분석NLP', '#데이터가치기획'],
      github: 'https://github.com/meisteryi/AI_Football_Scouter'
    },
    {
      id: 'mus',
      title: 'µ\'s (Music Spectrogram Classifier)',
      badge: 'Audio AI',
      description: '음향 파형 신호를 2D 멜-스펙트로그램 이미지로 변환하여 ResNet50 전이 학습으로 분류. 음향 도메인 문제를 컴퓨터 비전 파이프라인으로 구조화.',
      competencyTags: ['#구조화', '#도메인융합', '#오디오AI'],
      github: 'https://github.com/meisteryi/mus'
    },
    {
      id: 'gachatodo',
      title: 'Gacha To-Do: Pixel Aquarium',
      badge: 'Gamification App',
      description: '할 일 완료 보상 코인으로 픽셀 해양 생물을 수집하는 방치형 아쿠아리움 생산성 앱. 따분한 투두리스트에 게이미피케이션과 도파민 리텐션 루프를 설계.',
      competencyTags: ['#실행력', '#몰입설계', '#동기부여기획'],
      github: 'https://github.com/meisteryi/Gacha_Todo'
    },
    {
      id: 'photoexhibition',
      title: 'Photo Exhibition',
      badge: 'Web Service',
      description: 'EXIF 메타데이터 자동 추출 및 반응형 메이슨리 온라인 사진 전시회. 촬영 정보와 사진을 감각적으로 배치하여 전시 관람 경험을 몰입감 있게 설계.',
      competencyTags: ['#구조화', '#몰입설계', '#EXIF메타데이터'],
      github: 'https://github.com/meisteryi/Photo_Exhibition'
    },
    {
      id: 'unseenmap',
      title: 'Unseen Map Explorer',
      badge: 'Geo-mapping Web',
      description: '사진 속 GPS 좌표를 추출하여 여행 여정을 시간 순 지도 위에 시각적 스토리로 재구성. 흩어진 사진 기록을 하나의 여정으로 구조화.',
      competencyTags: ['#구조화', '#실행력', '#공간정보스토리텔링'],
      github: 'https://github.com/meisteryi/Unseen_Map'
    },
    {
      id: 'halligalli',
      title: 'Online HalliGalli',
      badge: 'Multiplayer Web',
      description: 'WebRTC 및 WebSocket 기반 실시간 P2P 멀티플레이어 할리갈리 보드게임. 네트워크 지연을 최소화하고 긴박한 벨 터치 인터랙션을 직접 구현.',
      competencyTags: ['#실행력', '#몰입설계', '#WebRTC실시간통신'],
      github: 'https://github.com/meisteryi/halligalli'
    },
    {
      id: 'yenafanpage',
      title: 'YENA Fanpage',
      badge: 'Responsive Web',
      description: '아티스트 최예나의 앨범 디스코그래피와 미디어 아카이브를 제공하는 웹사이트. 팬덤의 시각적 니즈와 감성적 인터랙션을 중심으로 경험을 설계.',
      competencyTags: ['#몰입설계', '#반응형UIUX', '#팬덤경험기획'],
      github: 'https://github.com/meisteryi/YENA_Fanpage'
    }
  ];

  // Filtering by active competency tag
  const currentSelectedTab = competencyTabs.find(t => t.id === activeTab);
  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.competencyTags.includes(currentSelectedTab.tag));

  const handleTagClick = (tag) => {
    const matchedTab = competencyTabs.find(t => t.tag === tag);
    if (matchedTab) {
      setActiveTab(matchedTab.id);
      const elem = document.getElementById('projects');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
              <Grid className="w-3.5 h-3.5" />
              <span>Competency-Driven Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              핵심 기획 역량별 프로젝트
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              확인하고 싶은 기획 역량(구조화, 실행력, 몰입 설계)을 선택하여 관련 프로젝트를 확인해 보세요.
            </p>
          </div>

          {/* Competency Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass-panel border border-slate-200/80 dark:border-slate-800/80">
            {competencyTabs.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter State Banner */}
        {activeTab !== 'all' && (
          <div className="mb-6 flex items-center justify-between px-4 py-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-500/20 text-xs sm:text-sm text-indigo-700 dark:text-indigo-300">
            <span>
              <strong>{currentSelectedTab.label}</strong> 역량을 증명하는 <strong>{filteredProjects.length}개</strong>의 프로젝트가 표시됩니다.
            </span>
            <button
              onClick={() => setActiveTab('all')}
              className="text-xs font-bold underline hover:text-indigo-900 dark:hover:text-white cursor-pointer ml-2"
            >
              전체 보기
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const imgSrc = projectImages[project.id];

            return (
              <div
                key={project.id}
                className="glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Banner */}
                  <div
                    onClick={() => onOpenProject(project.id)}
                    className="relative h-48 w-full overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs font-medium">
                        No Preview
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    
                    {/* Badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/10">
                      {project.badge}
                    </span>

                    {/* View Details Icon */}
                    <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-indigo-600 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200 shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    {/* 3 Core Highlight Competency Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.competencyTags.map((tag, tIdx) => {
                        const isMainCompetency = competencyTabs.some(c => c.tag === tag);
                        const isCurrentActive = currentSelectedTab.tag === tag;

                        return (
                          <button
                            key={tIdx}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (isMainCompetency) handleTagClick(tag);
                            }}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold tracking-tight transition-all duration-150 ${
                              isCurrentActive
                                ? 'bg-indigo-600 text-white shadow-sm'
                                : isMainCompetency
                                  ? 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 cursor-pointer'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50'
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>

                    <h3
                      onClick={() => onOpenProject(project.id)}
                      className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer leading-snug"
                    >
                      {project.title}
                    </h3>
                    
                    <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => onOpenProject(project.id)}
                      className="px-3.5 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-600 hover:text-white text-indigo-600 dark:text-indigo-400 text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>기획 상세 보기</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-150"
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
