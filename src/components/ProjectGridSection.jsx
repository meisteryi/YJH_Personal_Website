import React, { useState } from 'react';
import { ArrowUpRight, Github, ChevronDown, Sparkles } from 'lucide-react';
import { projectImages } from '../data/projects';

export const ProjectGridSection = ({ onOpenProject }) => {
  // Default: nothing selected
  const [selectedKeyword, setSelectedKeyword] = useState(null);

  // 3 Giant Interactive Keywords
  const keywords = [
    {
      id: 'service_arch',
      tag: '#서비스설계',
      title: '서비스 설계',
      englishLabel: 'SERVICE ARCHITECTURE',
      description: '두루뭉술한 아이디어나 복잡한 AI 기능을 사용자가 쓰기 편한 직관적인 화면 플로우, 기능 명세, 예외(Fail-safe) 정책으로 구체화하는 역량'
    },
    {
      id: 'ai_fusion',
      tag: '#데이터·AI융합',
      title: '데이터·AI 융합',
      englishLabel: 'DATA & AI INSIGHT',
      description: 'AI 모델(LLM, Vision, XAI)과 데이터를 깊이 이해하고, 사용자 문제 해결에 최적화된 실용적 솔루션 파이프라인으로 엮어내는 역량'
    },
    {
      id: 'rapid_proto',
      tag: '#빠른실행력',
      title: '빠른 실행력',
      englishLabel: 'RAPID PROTOTYPING',
      description: '기획서에 머무르지 않고 Flutter, React, Firebase로 구동 가능한 MVP를 직접 제작하여 가설을 신속하게 검증하고 개선하는 역량'
    }
  ];

  const projects = [
    {
      id: 'shen',
      title: 'SHEN: Sentiment Hidden Eye aNalysis',
      badge: 'XAI Research',
      description: '한국어 PLM의 젠더 편향성 평가 및 Attention/LIME 설명가능 AI 분석 연구. Attention 가중치와 LIME 기법을 결합한 정밀 분석 파이프라인을 설계하여 특성 오귀인 규명.',
      competencyTags: ['#데이터·AI융합', '#XAI리서치', '#편향분석'],
      github: 'https://github.com/meisteryi/SHEN'
    },
    {
      id: 'tabilens',
      title: 'TabiLenS: AI Travel Menu & Culture Guide',
      badge: 'Vision-LLM App',
      description: '실시간 비전 OCR 및 LLM 기반 다국어 메뉴판 번역 & 식문화 가이드 서비스. 낯선 메뉴판의 식문화 맥락을 3단계 주문 플로우로 설계하고 Flutter 프로토타입으로 구현.',
      competencyTags: ['#서비스설계', '#데이터·AI융합', '#빠른실행력'],
      github: 'https://github.com/meisteryi/TabiLenS'
    },
    {
      id: 'liargame',
      title: 'Liar Game: AI Context-Aware Party App',
      badge: 'Gen-AI Game',
      description: 'Gemini API 기반 지능형 제시어 생성 및 파티 모바일 게임. 프롬프트 엔지니어링으로 뉘앙스 맞춤 단어를 생성하고 실시간 모바일 룸 동기화를 직접 개발/배포.',
      competencyTags: ['#서비스설계', '#데이터·AI융합', '#빠른실행력'],
      github: 'https://github.com/meisteryi/LiarGame'
    },
    {
      id: 'scout',
      title: 'AI Football Scouter',
      badge: 'NLP & Data',
      description: '정량 스탯 필터링과 팬 오피니언 다차원 감성 분석 기반 축구 선수 추천 시스템. 정량·정성 데이터를 융합한 360도 스카우팅 지표 및 비교 대시보드 플로우 설계.',
      competencyTags: ['#서비스설계', '#데이터·AI융합', '#감성분석NLP'],
      github: 'https://github.com/meisteryi/AI_Football_Scouter'
    },
    {
      id: 'mus',
      title: 'µ\'s (Music Spectrogram Classifier)',
      badge: 'Audio AI',
      description: '음향 파형 신호를 2D 멜-스펙트로그램 이미지로 변환하여 ResNet50 전이 학습으로 분류. 음향 도메인과 컴퓨터 비전 분류 모델을 결합한 데이터 융합 연구.',
      competencyTags: ['#데이터·AI융합', '#도메인융합', '#오디오AI'],
      github: 'https://github.com/meisteryi/mus'
    },
    {
      id: 'eisenhower',
      title: 'Eisenhower To-Do & Assistant',
      badge: 'Productivity App',
      description: '아이젠하워 4분면 우선순위 매트릭스, 7일 방치 태스크 Q4 자동 소각 시스템, 루틴 및 헬스 세트 트래커. 사용자의 인지 피로를 줄이는 구조화된 규칙을 기획하고 Flutter 크로스플랫폼(iOS/Android/macOS)으로 완결.',
      competencyTags: ['#서비스설계', '#빠른실행력', '#우선순위매트릭스'],
      github: 'https://github.com/meisteryi/Todo_Eisenhower'
    },
    {
      id: 'gachatodo',
      title: 'Gacha To-Do: Pixel Aquarium',
      badge: 'Gamification App',
      description: '할 일 완료 보상 코인으로 픽셀 해양 생물을 수집하는 방치형 아쿠아리움 생산성 앱. 지속적인 사용을 유도하는 보상 플로우를 기획하고 Flutter 앱으로 구현.',
      competencyTags: ['#서비스설계', '#빠른실행력', '#동기부여기획'],
      github: 'https://github.com/meisteryi/Gacha_Todo'
    },
    {
      id: 'photoexhibition',
      title: 'Photo Exhibition',
      badge: 'Web Service',
      description: 'EXIF 메타데이터 자동 추출 및 반응형 메이슨리 온라인 사진 전시회. 촬영 정보와 사진을 감각적으로 배치하는 모노그래프 감상 플로우 설계 및 웹 구현.',
      competencyTags: ['#서비스설계', '#빠른실행력', '#EXIF메타데이터'],
      github: 'https://github.com/meisteryi/Photo_Exhibition'
    },
    {
      id: 'unseenmap',
      title: 'Unseen Map Explorer',
      badge: 'Geo-mapping Web',
      description: '사진 속 GPS 좌표를 추출하여 여행 여정을 시간 순 지도 위에 시각적 스토리로 재구성. 흩어진 사진 기록을 하나의 공간 여정 플로우로 설계 및 개발.',
      competencyTags: ['#서비스설계', '#빠른실행력', '#공간정보스토리텔링'],
      github: 'https://github.com/meisteryi/Unseen_Map'
    },
    {
      id: 'halligalli',
      title: 'Online HalliGalli',
      badge: 'Multiplayer Web',
      description: 'WebRTC 및 WebSocket 기반 실시간 P2P 멀티플레이어 할리갈리 보드게임. 네트워크 지연을 최소화하는 턴제 동기화 플로우를 기획하고 직접 웹으로 개발.',
      competencyTags: ['#서비스설계', '#빠른실행력', '#WebRTC실시간통신'],
      github: 'https://github.com/meisteryi/halligalli'
    },
    {
      id: 'yenafanpage',
      title: 'YENA Fanpage',
      badge: 'Responsive Web',
      description: '아티스트 최예나의 앨범 디스코그래피와 미디어 아카이브를 제공하는 웹사이트. 팬덤의 시각적 니즈와 감성적 인터랙션을 중심으로 경험을 설계.',
      competencyTags: ['#서비스설계', '#반응형UIUX', '#팬덤경험기획'],
      github: 'https://github.com/meisteryi/YENA_Fanpage'
    }
  ];

  const handleToggleKeyword = (tag) => {
    if (selectedKeyword === tag) {
      setSelectedKeyword(null);
    } else {
      setSelectedKeyword(tag);
    }
  };

  const currentKeywordObj = keywords.find(k => k.tag === selectedKeyword);
  const filteredProjects = selectedKeyword
    ? projects.filter(p => p.competencyTags.includes(selectedKeyword))
    : [];

  return (
    <section id="projects" className="pt-2 sm:pt-6 pb-14 md:pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Giant Interactive Keywords (Headline Sized, Minimal & High-Impact) */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div className="flex flex-wrap items-baseline gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-6 sm:gap-y-8">
            {keywords.map((kw) => {
              const isSelected = selectedKeyword === kw.tag;

              return (
                <button
                  key={kw.id}
                  onClick={() => handleToggleKeyword(kw.tag)}
                  className={`text-left transition-all duration-300 group cursor-pointer focus:outline-none select-none ${
                    isSelected
                      ? 'text-slate-950 dark:text-white underline decoration-[5px] sm:decoration-[7px] decoration-indigo-600 dark:decoration-indigo-400 underline-offset-[14px] sm:underline-offset-[20px]'
                      : 'text-slate-300 dark:text-slate-600 hover:text-slate-500 dark:hover:text-slate-400'
                  }`}
                >
                  <span className="block text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                    {kw.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Hint text when nothing is selected */}
          {!selectedKeyword && (
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 flex items-center gap-2 mt-4 animate-pulse">
              <ChevronDown className="w-4 h-4 text-indigo-500 animate-bounce" />
              <span>키워드를 클릭하면 해당 역량을 증명하는 프로젝트가 열립니다.</span>
            </p>
          )}
        </div>

        {/* Expandable Project List with Staggered Float-Up Animation */}
        <div
          className={`transition-all duration-700 ease-out overflow-hidden ${
            selectedKeyword
              ? 'max-h-[7000px] opacity-100 mt-10 sm:mt-14 pt-4'
              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
          }`}
        >
          {currentKeywordObj && (
            <div className="space-y-8 sm:space-y-10">
              
              {/* Selected Keyword Definition Banner */}
              <div className="p-5 sm:p-7 rounded-3xl glass-panel border border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-950/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-extrabold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                      {currentKeywordObj.englishLabel}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                      총 {filteredProjects.length}개의 관련 프로젝트
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                    {currentKeywordObj.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedKeyword(null)}
                  className="self-start md:self-center px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                >
                  닫기 (Close)
                </button>
              </div>

              {/* Projects Grid with Staggered Delay */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((project, index) => {
                  const imgSrc = projectImages[project.id];

                  return (
                    <div
                      key={`${selectedKeyword}-${project.id}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                      className="animate-card-float-up glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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
                          {/* Competency Badges */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.competencyTags.map((tag, tIdx) => {
                              const isCurrentSelected = selectedKeyword === tag;
                              const isInteractiveTag = keywords.some(k => k.tag === tag);

                              return (
                                <button
                                  key={tIdx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (isInteractiveTag) handleToggleKeyword(tag);
                                  }}
                                  className={`px-2.5 py-1 rounded-lg text-xs font-bold tracking-tight transition-all duration-150 ${
                                    isCurrentSelected
                                      ? 'bg-indigo-600 text-white shadow-sm'
                                      : isInteractiveTag
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
          )}
        </div>

      </div>
    </section>
  );
};
