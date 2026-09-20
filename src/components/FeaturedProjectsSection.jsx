import React from 'react';
import { Sparkles, ArrowUpRight, ExternalLink, Github, BookOpen, Smartphone, Brain, Layers, CheckCircle } from 'lucide-react';

import SHEN_fig_6 from '../assets/SHEN_fig_6.png';
import tabilens_3 from '../assets/tabilens_3.png';
import liargame_1 from '../assets/liargame_1.png';
import scout_slides_fig_22 from '../assets/scout_slides_fig_22.png';

export const FeaturedProjectsSection = ({ onOpenProject }) => {
  const featuredProjects = [
    {
      id: 'shen',
      title: 'SHEN: Sentiment Hidden Eye aNalysis',
      subtitle: '한국어 거대 언어 모델의 젠더 편향성 조사 및 설명 가능 인공지능(XAI) 연구',
      categoryBadge: 'XAI & Research Project',
      badgeColor: 'from-purple-500 to-indigo-600',
      image: SHEN_fig_6,
      problem: '한국어 PLM(KoBERT 등)이 텍스트의 실제 맥락이 아닌 성별 대명사에 부당하게 가중치를 두는 편향(Bias)이 존재하나, 모델 내부 의사결정이 블랙박스여서 규명이 어려움.',
      aiSolution: 'Attention Map 가중치 추출 및 LIME(Local Interpretable Model-agnostic Explanations) 기법을 결합하여, 모델의 편향적 단어 주목 현상을 수치화·시각화하는 분석 파이프라인 설계.',
      planningRole: [
        '편향 검증용 템플릿 데이터셋 및 비교 실험 설계',
        'XAI 기반 토큰 기여도 시각화 및 젠더 오귀인(Gender Misattribution) 현상 규명',
        '연구 기획, 통계 분석 및 심층 리서치 리포트 주도적 작성'
      ],
      tags: ['XAI', 'KoBERT', 'LIME', 'PyTorch', 'Bias Analysis', 'Research Project'],
      links: {
        paper: true,
        github: 'https://github.com/meisteryi/SHEN'
      }
    },
    {
      id: 'tabilens',
      title: 'TabiLenS: AI Travel Menu & Culture Guide',
      subtitle: '비전 OCR 및 LLM 기반 실시간 다국어 메뉴판 번역 & 식문화 주문 가이드',
      categoryBadge: 'Vision-LLM & Travel UX',
      badgeColor: 'from-amber-500 to-rose-600',
      image: tabilens_3,
      problem: '해외 여행자가 낯선 외국어 메뉴판을 마주했을 때, 단순 단어 직역만으로는 식재료 구성, 조리 방식, 알레르기 유발 물질 및 현지 식문화 에티켓을 알 수 없음.',
      aiSolution: '카메라 이미지 OCR 텍스트 인식 후 LLM 프롬프팅을 통해 메뉴 상세 해설, 현지 음식 문화 가이드, 알레르기 필터링 및 주문용 현지어 발음/스크립트를 즉시 생성하는 인터랙션 설계.',
      planningRole: [
        '해외 여행자 페인포인트 기반 사용자 주문 저니(Journey) 및 와이어프레임 설계',
        '메뉴판 번역-식문화 가이드-주문 스크립트 3단계 AI 생성 플로우 기획',
        'Flutter 기반 크로스 플랫폼 모바일 UI 프로토타입 구현'
      ],
      tags: ['Vision OCR', 'LLM Prompting', 'Flutter', 'Travel UX', 'Cross-Platform'],
      links: {
        github: 'https://github.com/meisteryi/TabiLenS'
      }
    },
    {
      id: 'liargame',
      title: 'Liar Game: AI Context-Aware Party App',
      subtitle: 'Google Gemini API 기반 지능형 제시어 생성 멀티플레이어 모바일 파티 게임',
      categoryBadge: 'Gen-AI & Interactive Game',
      badgeColor: 'from-emerald-500 to-teal-600',
      image: liargame_1,
      problem: '기존 라이어 게임 앱들은 고정된 정적 단어 데이터베이스에 의존하여 몇 번 플레이하면 제시어가 뻔해지고 게임의 몰입도와 재미가 급격히 떨어짐.',
      aiSolution: 'Gemini API를 백엔드에 연동하여 참가자 연령대/모임 분위기/난이도에 맞춘 동적 제시어 생성 및 다양한 게임 모드(스파이, 멍청이, 커플 모드)를 자동 설계하는 지능형 시스템 구축.',
      planningRole: [
        'Gemini 프롬프트 엔지니어링을 통한 게임 밸런스 및 뉘앙스 조절 기획',
        '스파이/바보/러브라인 모드 등 다양한 변주 룰셋 및 게이미피케이션 기획',
        'Flutter + Firebase 기반 실시간 룸 동기화 및 다크 테마 파티 UI/UX 제작'
      ],
      tags: ['Gemini API', 'Prompt Engineering', 'Flutter', 'Firebase', 'Gamification'],
      links: {
        github: 'https://github.com/meisteryi/LiarGame'
      }
    },
    {
      id: 'scout',
      title: 'AI Football Scouter',
      subtitle: '팬 오피니언 다차원 감성 분석 & 스태츠 필터링 기반 축구 선수 추천 시스템',
      categoryBadge: 'NLP & Multi-Data Analytics',
      badgeColor: 'from-blue-600 to-indigo-700',
      image: scout_slides_fig_22,
      problem: '기존 축구 선수 평가는 정량적 경기 스탯에만 치우쳐 있어, 선수의 경기 외적 멘탈리티, 팀 케미스트리, 팬 여론 등 정성적 리스크와 가치를 반영하지 못함.',
      aiSolution: '축구 커뮤니티/뉴스 기사의 팬 오피니언을 NLP 감성 분석(Sentiment Analysis)하여 정성 지표를 수치화하고, 정량 스탯과 융합한 360도 다차원 선수 평가 및 추천 파이프라인 기획.',
      planningRole: [
        '스탯(정량) + 팬 감성(정성) 융합 추천 알고리즘 모델링 기획',
        '구단 스카우터를 위한 직관적 선수 비교 레이더 차트 및 대시보드 UI 기획',
        '프로젝트 리딩 및 분석 보고서/슬라이드 작성'
      ],
      tags: ['NLP Sentiment', 'Data Mining', 'Python', 'Sports Analytics', 'Product Design'],
      links: {
        github: 'https://github.com/meisteryi/AI_Football_Scouter'
      }
    }
  ];

  return (
    <section id="featured" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Works</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              대표 AI 기획 & 프로토타입 프로젝트
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              문제 정의부터 AI 솔루션 도출, 사용자 인터랙션 설계 및 프로토타입 구현까지 주도적으로 진행한 핵심 프로젝트들입니다.
            </p>
          </div>
          <span className="text-xs text-slate-400">
            총 4개의 핵심 기획 프로젝트
          </span>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-12 sm:space-y-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left: Image & Badge */}
                <div
                  onClick={() => onOpenProject(project.id)}
                  className="lg:col-span-5 relative bg-slate-900 overflow-hidden group cursor-pointer min-h-[260px] sm:min-h-[320px] lg:min-h-full flex items-center justify-center"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/60"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-white text-[11px] font-bold tracking-wide uppercase bg-gradient-to-r ${project.badgeColor} shadow-md backdrop-blur-md`}>
                      {project.categoryBadge}
                    </span>
                  </div>

                  {/* Click to open overlay hint */}
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-medium flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:bg-indigo-600 transition-all">
                    <span>상세 기획서 보기</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Right: Content & Planning Insights */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    {/* Project Title & Subtitle */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                          FEATURED 0{index + 1}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                              title="GitHub Repository"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <h3
                        onClick={() => onOpenProject(project.id)}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mt-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Problem & AI Solution Box */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {/* Problem */}
                      <div className="p-4 rounded-2xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1">
                          ⚠️ Problem (기획 배경)
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* AI Solution */}
                      <div className="p-4 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                          💡 AI Solution (기획 해법)
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {project.aiSolution}
                        </p>
                      </div>
                    </div>

                    {/* Planning Role & Contributions */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-indigo-500" />
                        <span>기획 및 실행 상세 (Key Roles)</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {project.planningRole.map((role, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tags & Action CTA */}
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenProject(project.id)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all duration-200"
                    >
                      <span>프로젝트 기획서 전문 보기</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
