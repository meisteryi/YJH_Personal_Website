import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Globe2, 
  ShieldCheck, 
  Users, 
  Building2 
} from 'lucide-react';
import { certificatesData } from '../data/certificates';

export const EducationTimelineSection = () => {
  const qualifications = certificatesData;

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Background & Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            학력, 경력 및 자격 이력
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            인문학적·예술적 기획력(Art & Tech)과 인공지능(AI) 전공, 글로벌 교환학생 및 리더십 경험으로 단단한 기초 체력을 다져왔습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education, Exchange & Leadership, Military (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Education & Exchange Program Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4 uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Education & Exchange Program</span>
              </div>

              {/* Sogang University */}
              <div className="pb-6 border-b border-slate-200/60 dark:border-slate-800/60">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      서강대학교 (Sogang University)
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      Art & Technology(주전공) & 인공지능 Artificial Intelligence(복수전공)
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold shrink-0">
                    2021.03 ~ 재학 중
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong>Art & Technology</strong>: 미디어아트 기획, 인터랙션 디자인, 사용자 중심 서비스 기획 및 프로토타이핑
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

              {/* Sophia University Exchange */}
              <div className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          일본 조치대학교 (Sophia University)
                        </h4>
                        <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold">
                          교환학생
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        FLA (Faculty of Liberal Arts) 파견 수료
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                        도쿄 현지에서 전 세계 유학생들과 인문·교양 과정을 이수하며 다문화 협업 및 실전 글로벌 외국어 소통 역량을 체득했습니다.
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-mono font-bold shrink-0">
                    2026.04 ~ 2026.07
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Leadership & Military Service Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Leadership & Military Service</span>
              </div>

              <div className="space-y-6">
                {/* Student Council President */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          서강대학교 아트&테크놀로지 학과 학생회장
                        </h4>
                        <span className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold">
                          리더십
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        학과 학생회 총괄 및 프로젝트 행사 기획·운영
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                        학과 대표로서 교수진, 학생, 외부 협력사 간의 소통을 주도하고, 학술 세미나 및 인터랙티브 전시 행사의 예산 집행과 기획 전반을 총괄했습니다.
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-mono font-bold shrink-0">
                    2022.03 ~ 2022.12
                  </span>
                </div>

                {/* Military Service */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          대한민국 공군 만기전역
                        </h4>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                          군필
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        공군 병 845기 병장 만기전역
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                        성실한 군 복무를 통해 엄격한 규율 준수, 팀 단위 협업 능력, 위기 상황 대처 역량을 체득하고 복무를 마쳤습니다.
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-mono font-bold shrink-0">
                    2023.02 ~ 2024.11
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Qualifications & Language Tests (5 cols) */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs h-full flex flex-col justify-between">
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
                <Globe2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>영어(OPIc IH, TOEFL), 일본어(JLPT N1, FLEX 865) 글로벌 비즈니스 소통 가능</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
