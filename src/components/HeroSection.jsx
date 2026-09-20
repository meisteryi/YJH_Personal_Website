import React from 'react';
import { Mail, Github, Linkedin, ArrowDown, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      const navHeight = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-bold mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-indigo-500 animate-spin" style={{ animationDuration: '8s' }} />
          <span>AI & Digital Service Planner</span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            AI 기술의 가능성을 <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">
              실용적인 사용자 경험과 프로덕트
            </span>
            로 기획합니다.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
            안녕하세요! 서강대학교에서 <strong>Art & Technology</strong>(기획·UX·인터랙션)와 <strong>인공지능(AI)</strong>을 복수전공하고 있는 <strong>이주형(Joohyoung Yi)</strong>입니다. 
            단순한 AI 래퍼(Wrapper)를 넘어, LLM·XAI·멀티모달 기술의 원리와 한계를 깊이 이해하고 실질적인 사용자 문제를 해결하는 서비스를 직접 기획하고 프로토타이핑합니다.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, '#projects')}
            className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span>역량별 프로젝트 탐색</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="mailto:yjh020701@gmail.com"
            className="px-5 py-3.5 rounded-2xl glass-panel border border-slate-300/80 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-indigo-500" />
            <span>이메일 문의</span>
          </a>

          <a
            href="https://github.com/meisteryi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl glass-panel border border-slate-300/80 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl glass-panel border border-slate-300/80 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* 3 Core Planner Competency Blocks with Large Headlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          
          {/* Card 1: 구조화 */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/40 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-xl">
            <div>
              {/* Keyword Label */}
              <div className="text-xs sm:text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
                <span>• keyword 01</span>
                <span>|</span>
                <span className="font-extrabold uppercase">Structuring</span>
              </div>

              {/* Large Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                구조화
              </h3>

              {/* Concise 2-line Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                두루뭉술한 아이디어나 복잡한 AI 기술을 누구나 이해하기 쉬운 서비스 플로우와 실질적인 기능으로 정리하는 능력
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-indigo-600 dark:text-indigo-400">
              #문제정의 #파이프라인설계 #정보구조(IA)
            </div>
          </div>

          {/* Card 2: 실행력 */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 hover:border-purple-500/40 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-xl">
            <div>
              {/* Keyword Label */}
              <div className="text-xs sm:text-sm font-bold tracking-wider text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-1.5">
                <span>• keyword 02</span>
                <span>|</span>
                <span className="font-extrabold uppercase">Execution</span>
              </div>

              {/* Large Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                실행력
              </h3>

              {/* Concise 2-line Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                기획서에 머무르지 않고 직접 구동 가능한 프로토타입으로 구현하여 빠르게 가설을 검증하고 개선하는 능력
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-purple-600 dark:text-purple-400">
              #빠른MVP #Flutter개발 #가설검증
            </div>
          </div>

          {/* Card 3: 몰입 설계 */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 hover:border-pink-500/40 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-xl">
            <div>
              {/* Keyword Label */}
              <div className="text-xs sm:text-sm font-bold tracking-wider text-pink-600 dark:text-pink-400 mb-2 flex items-center gap-1.5">
                <span>• keyword 03</span>
                <span>|</span>
                <span className="font-extrabold uppercase">Engagement</span>
              </div>

              {/* Large Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                몰입 설계
              </h3>

              {/* Concise 2-line Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                사용자의 동기부여 요소와 인터랙션을 파악하여 이탈 없이 지속적으로 머무르게 만드는 경험을 설계하는 능력
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-pink-600 dark:text-pink-400">
              #게이미피케이션 #리텐션루프 #인터랙션UX
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
