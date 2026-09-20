import React from 'react';
import { Cpu, Layers, Code2, CheckCircle2, Sparkles, Database, Layout, Smartphone } from 'lucide-react';

export const CompetenciesSection = () => {
  const competencyGroups = [
    {
      category: 'AI & Data Comprehension',
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      subtitle: '모델의 강점과 한계를 파악하고 실현 가능한 AI 기능을 정의하는 역량',
      skills: [
        {
          title: 'LLM Prompt Engineering & Flow 설계',
          desc: 'Gemini, GPT 기반 시스템 프롬프트 구조화, 역할 페르소나 부여, 퓨샷(Few-shot) 최적화'
        },
        {
          title: '설명 가능 인공지능(XAI) & 신뢰성 분석',
          desc: 'Attention Map, LIME 기법을 활용한 모델 의사결정 시각화 및 데이터 편향(Bias) 규명'
        },
        {
          title: '멀티모달 & 데이터 파이프라인',
          desc: 'Vision/OCR, 멜-스펙트로그램(음향), EXIF 메타데이터, 팬 감성 분석 등 다종 데이터 가공'
        },
        {
          title: 'AI 모델링 & 프레임워크 기초',
          desc: 'PyTorch, HuggingFace Transformers, ResNet50 전이학습 모델 구조 이해 및 실험'
        }
      ]
    },
    {
      category: 'Product Planning & UX Strategy',
      icon: <Layout className="w-5 h-5 text-purple-500" />,
      subtitle: '사용자 문제를 해결하고 자연스러운 AI 인터랙션을 설계하는 기획 역량',
      skills: [
        {
          title: '문제 정의 및 핵심 가치(Value Proposition) 수립',
          desc: '타겟 유저의 페인포인트를 포착하고 AI 도입이 실질적 효용을 만드는 기능 정의'
        },
        {
          title: 'AI 특화 사용자 경험(AI Interaction & Fail-safe UX)',
          desc: '생성 지연(Latency) 해소 UI, AI 오류 및 환각(Hallucination) 방어 인터랙션 기획'
        },
        {
          title: '서비스 플로우 & 유저 저니(User Journey) 설계',
          desc: '온보딩부터 코어 루프까지 이탈 없는 와이어프레임 및 정보 구조(IA) 설계'
        },
        {
          title: '게이미피케이션 & 리텐션(Retention) 루프',
          desc: '보상 체계, 인터랙티브 퀘스트, 방치형 육성 요소를 결합한 사용자 몰입도 강화'
        }
      ]
    },
    {
      category: 'Prototyping & Tech Stack',
      icon: <Code2 className="w-5 h-5 text-pink-500" />,
      subtitle: '기획 아이디어를 검증 가능한 동작 프로덕트로 즉시 구현하는 실행력',
      skills: [
        {
          title: 'Cross-Platform Mobile App (Flutter)',
          desc: 'Dart 언어 기반 iOS/Android 통합 네이티브 앱 제작, 상태 관리, 애니메이션 구현'
        },
        {
          title: 'Modern Web Frontend (React / Vite)',
          desc: '컴포넌트 중심 설계, Tailwind CSS 기반 반응형 UI, 마이크로 인터랙션 구현'
        },
        {
          title: 'Serverless Backend & Database (Firebase)',
          desc: 'Firebase Auth, Cloud Firestore, Cloud Functions 연동을 통한 실시간 데이터 처리'
        },
        {
          title: '기획 및 협업 툴',
          desc: 'Figma, Git/GitHub, Markdown 기획 문서화, 실시간 데이터 시각화'
        }
      ]
    }
  ];

  return (
    <section id="competencies" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            AI 기획자로서의 핵심 역량
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            AI 모델에 대한 공학적 이해를 바탕으로 논리적인 서비스 기획을 세우고, 동작 가능한 프로토타입으로 검증하는 전 과정을 아우릅니다.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {competencyGroups.map((group, idx) => (
            <div
              key={group.category}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 shrink-0">
                    {group.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">
                    {group.category}
                  </h3>
                </div>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {group.subtitle}
                </p>

                {/* Skill List */}
                <div className="space-y-4">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {skill.title}
                        </h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 pl-5.5 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-medium text-slate-400">
                <span>Domain Focus {idx + 1}</span>
                <span className="text-indigo-600 dark:text-indigo-400">Verified by Projects</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
