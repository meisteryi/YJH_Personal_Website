import React from 'react';

export const HeroSection = () => {
  return (
    <section id="about" className="relative pt-28 pb-10 md:pt-36 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

      </div>
    </section>
  );
};
