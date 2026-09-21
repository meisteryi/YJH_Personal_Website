import React, { useState } from 'react';
import { ArrowUpRight, Github, ChevronDown, Sparkles } from 'lucide-react';
import { projectImages } from '../data/projects';

export const ProjectGridSection = ({ selectedKeyword, onSelectKeyword, onOpenProject }) => {
  // 3 Giant Interactive Keywords (Recommended Set B: AI Planning Specialization)
  const keywords = [
    {
      id: 'domain_analysis',
      tag: '#도메인분석',
      title: '도메인 분석',
      englishLabel: 'DOMAIN ANALYSIS',
      description: '특정 산업·분야(여행·식문화, 스포츠, 언어·사회적 편견, 음향 등)의 본질적 페인포인트를 짚어내고, "어디에 AI·데이터가 들어가야 진짜 가치가 생기는가"를 정의하는 역량'
    },
    {
      id: 'ai_pipeline',
      tag: '#AI파이프라인',
      title: 'AI 파이프라인',
      englishLabel: 'AI PIPELINE',
      description: '문제 해결에 최적화된 AI 모델(LLM, Vision, XAI, CNN)을 선정하고 전처리·프롬프트·평가 체계까지 실현 가능한 데이터 흐름으로 엮어내는 역량'
    },
    {
      id: 'ai_ux',
      tag: '#AI-UX',
      title: 'AI-UX',
      englishLabel: 'INTERACTION DESIGN',
      description: 'AI의 기술적 한계(추론 지연 Latency, 인식 오류, 환각)를 극복하는 Fail-safe 인터랙션, 인지 부하를 줄이는 화면 플로우, 게이미피케이션 몰입 경험을 완성하는 역량'
    }
  ];

  const projects = [
    {
      id: 'shen',
      title: 'SHEN: Sentiment Hidden Eye aNalysis',
      badge: 'XAI Research',
      description: '한국어 PLM의 젠더 편향성 평가 및 Attention/LIME 설명가능 AI 분석 연구. Attention 가중치와 LIME 기법을 결합한 정밀 분석 파이프라인을 설계하여 특성 오귀인 규명.',
      competencyTags: ['#도메인분석', '#AI파이프라인', '#XAI리서치'],
      github: 'https://github.com/meisteryi/SHEN'
    },
    {
      id: 'tabilens',
      title: 'TabiLenS: AI Travel Menu & Culture Guide',
      badge: 'Vision-LLM App',
      description: '실시간 비전 OCR 및 LLM 기반 다국어 메뉴판 번역 & 식문화 가이드 서비스. 낯선 메뉴판의 식문화 맥락을 3단계 주문 플로우로 설계하고 Flutter 프로토타입으로 구현.',
      competencyTags: ['#도메인분석', '#AI파이프라인', '#AI-UX'],
      github: 'https://github.com/meisteryi/TabiLenS'
    },
    {
      id: 'kkumteul',
      title: '꿈틀: 꿈을 담는 틀 (Kkumteul)',
      badge: 'Generative AI & UX',
      description: '생성형 AI(KoGPT-2 파인튜닝 + SDXL LoRA) 기반 꿈 시각화 및 인터랙티브 동화책 플랫폼. 꿈 키워드를 몽환적 내러티브와 감성적 일러스트로 자동 엮어내는 전 파이프라인과 책장 넘기기 인터랙션 구현.',
      competencyTags: ['#도메인분석', '#AI파이프라인', '#AI-UX'],
      github: 'https://github.com/meisteryi'
    },
    {
      id: 'astra',
      title: 'ASTRA: 모바일 LMS 사용성 리서치 & A/B 테스트',
      badge: 'UX Research & A/B Test',
      description: '서강대 공식 사이버캠퍼스 모바일 앱의 3대 핵심 내비게이션 결함 개선. GOMS 정량 모델링, Figma 고충실도 프로토타입 제작, 36인 실사용자 A/B 테스트 및 Wilcoxon 통계 검정(p < 0.05) 완결.',
      competencyTags: ['#AI-UX', '#도메인분석', '#AB테스트'],
      github: 'https://github.com/meisteryi'
    },
    {
      id: 'liargame',
      title: 'Liar Game: AI Context-Aware Party App',
      badge: 'Gen-AI Game',
      description: 'Gemini API 기반 지능형 제시어 생성 및 파티 모바일 게임. 프롬프트 엔지니어링으로 뉘앙스 맞춤 단어를 생성하고 실시간 모바일 룸 동기화를 직접 개발/배포.',
      competencyTags: ['#AI파이프라인', '#AI-UX', '#게이미피케이션'],
      github: 'https://github.com/meisteryi/LiarGame'
    },
    {
      id: 'scout',
      title: 'AI Football Scouter',
      badge: 'NLP & Data',
      description: '정량 스탯 필터링과 팬 오피니언 다차원 감성 분석 기반 축구 선수 추천 시스템. 정량·정성 데이터를 융합한 360도 스카우팅 지표 및 비교 대시보드 플로우 설계.',
      competencyTags: ['#도메인분석', '#AI파이프라인', '#데이터시각화'],
      github: 'https://github.com/meisteryi/AI_Football_Scouter'
    },
    {
      id: 'mus',
      title: 'µ\'s (Music Spectrogram Classifier)',
      badge: 'Audio AI',
      description: '음향 파형 신호를 2D 멜-스펙트로그램 이미지로 변환하여 ResNet50 전이 학습으로 분류. 음향 도메인과 컴퓨터 비전 분류 모델을 결합한 데이터 융합 연구.',
      competencyTags: ['#도메인분석', '#AI파이프라인', '#도메인융합'],
      github: 'https://github.com/meisteryi/mus'
    },
    {
      id: 'eisenhower',
      title: 'Eisenhower To-Do & Assistant',
      badge: 'Productivity App',
      description: '아이젠하워 4분면 우선순위 매트릭스, 7일 방치 태스크 Q4 자동 소각 시스템, 루틴 및 헬스 세트 트래커. 사용자의 인지 피로를 줄이는 구조화된 규칙을 기획하고 Flutter 크로스플랫폼(iOS/Android/macOS)으로 완결.',
      competencyTags: ['#AI-UX', '#도메인분석', '#우선순위매트릭스'],
      github: 'https://github.com/meisteryi/Todo_Eisenhower'
    },
    {
      id: 'gachatodo',
      title: 'Gacha To-Do: Pixel Aquarium',
      badge: 'Gamification App',
      description: '할 일 완료 보상 코인으로 픽셀 해양 생물을 수집하는 방치형 아쿠아리움 생산성 앱. 지속적인 사용을 유도하는 보상 플로우를 기획하고 Flutter 앱으로 구현.',
      competencyTags: ['#AI-UX', '#게이미피케이션', '#동기부여기획'],
      github: 'https://github.com/meisteryi/Gacha_Todo'
    },
    {
      id: 'photoexhibition',
      title: 'Photo Exhibition',
      badge: 'Web Service',
      description: 'EXIF 메타데이터 자동 추출 및 반응형 메이슨리 온라인 사진 전시회. 촬영 정보와 사진을 감각적으로 배치하는 모노그래프 감상 플로우 설계 및 웹 구현.',
      competencyTags: ['#AI-UX', '#도메인분석', '#EXIF메타데이터'],
      github: 'https://github.com/meisteryi/Photo_Exhibition'
    },
    {
      id: 'unseenmap',
      title: 'Unseen Map Explorer',
      badge: 'Geo-mapping Web',
      description: '사진 속 GPS 좌표를 추출하여 여행 여정을 시간 순 지도 위에 시각적 스토리로 재구성. 흩어진 사진 기록을 하나의 공간 여정 플로우로 설계 및 개발.',
      competencyTags: ['#도메인분석', '#AI-UX', '#공간정보스토리텔링'],
      github: 'https://github.com/meisteryi/Unseen_Map'
    },
    {
      id: 'halligalli',
      title: 'Online HalliGalli',
      badge: 'Multiplayer Web',
      description: 'WebRTC 및 WebSocket 기반 실시간 P2P 멀티플레이어 할리갈리 보드게임. 네트워크 지연을 최소화하는 턴제 동기화 플로우를 기획하고 직접 웹으로 개발.',
      competencyTags: ['#AI-UX', '#WebRTC실시간통신', '#초저지연인터랙션'],
      github: 'https://github.com/meisteryi/halligalli'
    },
    {
      id: 'yenafanpage',
      title: 'YENA Fanpage',
      badge: 'Responsive Web',
      description: '아티스트 최예나의 앨범 디스코그래피와 미디어 아카이브를 제공하는 웹사이트. 팬덤의 시각적 니즈와 감성적 인터랙션을 중심으로 경험을 설계.',
      competencyTags: ['#AI-UX', '#반응형UIUX', '#팬덤경험기획'],
      github: 'https://github.com/meisteryi/YENA_Fanpage'
    }
  ];

  const handleToggleKeyword = (tag) => {
    if (onSelectKeyword) {
      onSelectKeyword(selectedKeyword === tag ? null : tag);
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
              ? 'max-h-[7000px] opacity-100 mt-10 sm:mt-14 pt-2'
              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
          }`}
        >
          {selectedKeyword && (
            <div className="space-y-6 sm:space-y-8">
              
              {/* Projects Grid with Staggered Delay */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((project, index) => {
                  const imgSrc = projectImages[project.id];

                  return (
                    <div
                      key={`${selectedKeyword}-${project.id}`}
                      style={{ animationDelay: `${index * 80}ms` }}
                      onClick={() => onOpenProject(project.id)}
                      className="animate-card-float-up h-72 sm:h-80 md:h-96 w-full rounded-3xl relative overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl border border-white/10 dark:border-white/5 flex flex-col justify-between p-6 sm:p-8 group bg-slate-900 transition-all duration-300 transform-gpu hover:-translate-y-1.5 select-none"
                    >
                      {/* Background Demo Image (Fills the entire area) */}
                      {imgSrc ? (
                        <img
                          src={imgSrc}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-slate-800" />
                      )}

                      {/* High-Contrast Gradient Overlay for Text Legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 group-hover:from-black/95 group-hover:via-black/65 transition-all duration-300"></div>

                      {/* Top Right: Minimal Interactive Arrow Icon */}
                      <div className="relative z-10 self-end">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-md">
                          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      </div>

                      {/* Bottom Content: Large High-Contrast Title ONLY */}
                      <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
                          {project.title}
                        </h3>
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
