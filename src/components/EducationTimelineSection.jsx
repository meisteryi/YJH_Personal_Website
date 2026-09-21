import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2, Sparkles, Building2, Globe2 } from 'lucide-react';
import { certificatesData } from '../data/certificates';

export const EducationTimelineSection = () => {
  const qualifications = certificatesData;

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Background & Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            학력, 연구 및 자격 이력
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            인문학적·예술적 기획력(Art & Tech)과 이공계열 인공지능(AI) 전공의 시너지로 단단한 기초 체력을 다져왔습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education & Academic Milestone (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Education Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase">
                    Undergraduate
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-2">
                    서강대학교 (Sogang University)
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    Art & Technology(주전공) & 인공지능 Artificial Intelligence(복수전공)
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 shrink-0">
                  재학 중
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Art & Technology</strong>: 미디어아트 기획, 인터랙션 디자인, 사용자 중심 서비스 기획 및 인터랙티브 콘텐츠 제작
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Artificial Intelligence</strong>: 기계학습, 딥러닝, 설명 가능 인공지능(XAI), 거대 언어 모델(LLM), 데이터 사이언스
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Coursework Research Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/20 bg-purple-500/5 dark:bg-purple-500/10">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-bold mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Academic Coursework & Research Project</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                SHEN: Sentiment Hidden Eye aNalysis
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                한국어 사전학습 언어 모델(KoBERT 등)의 젠더 편향성을 조사하고, Attention Map과 LIME 기법을 결합하여 모델의 젠더 오귀인 현상을 체계적으로 분석한 전공 심화 리서치 프로젝트.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-purple-700 dark:text-purple-300">
                <span className="px-2.5 py-1 rounded-lg bg-purple-500/10">#XAI</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-500/10">#Bias Analysis</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-500/10">#Korean NLP</span>
              </div>
            </div>

          </div>

          {/* Right Column: Qualifications & Language Tests (5 cols) */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-pink-500" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Certificates & Global Skills
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  어학 능력 및 경제·사회 분야 자격 이력입니다.
                </p>

                <div className="space-y-3">
                  {qualifications.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-100/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {q.name}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {q.issuer} · {q.date}
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
                        {q.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-indigo-500" />
                <span>영어(TOEFL), 일본어(JLPT N1 / FLEX) 등 글로벌 커뮤니케이션 가능</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
