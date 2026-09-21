import kkumteul_1 from '../../assets/kkumteul_1.jpeg';
import kkumteul_2 from '../../assets/kkumteul_2.jpeg';

export const kkumteul = {
  id: 'kkumteul',
  title: '꿈틀: 꿈을 담는 틀',
  subtitle: '생성형 AI 기반 꿈 시각화 및 동화책 형태 내러티브 해석 플랫폼',
  author: '이주형 (팀장 / NLP & AI 파이프라인 기획), 이도경, 이서희',
  affiliation: '서강대학교 융합교육원 학부연구소 창의융합 자유연구 프로그램 (SCG)',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi',
  tags: ['KoGPT-2 Fine-tuning', 'Stable Diffusion XL', 'LoRA', 'React', 'Framer Motion', 'Flask', 'Prompt Engineering'],
  period: '2025.03 - 2025.12',
  featuredImage: kkumteul_1,
  abstract: '꿈틀(Kkumteul)은 서강대학교 융합교육원 창의융합 자유연구 프로그램(SCG: Small Creators Group)에서 개발된 생성형 AI 기반 꿈 시각화 및 인터랙티브 동화책 플랫폼입니다. 체험자가 경험한 비정형적이고 휘발되기 쉬운 꿈 키워드를 바탕으로, 자연어 생성 모델(KoGPT-2 파인튜닝)과 확산 모델(Stable Diffusion XL + LoRA)을 유기적으로 연동하여 몽환적인 이야기와 서정적인 일러스트를 한 권의 디지털 동화책으로 자동 엮어냅니다. 단순한 텍스트 기록 도구를 넘어 무의식적 감정을 마주하고 자기 성찰을 돕는 심리·예술적 참여 플랫폼을 지향하며, Framer Motion 기반의 실감 나는 책장 넘기기(Drag/Swipe) 인터랙션을 통해 감성적 몰입을 극대화했습니다.',
  sections: {
    introduction: '꿈은 우리의 무의식적 감정과 억눌린 갈등을 투영하는 소중한 심리적 단서이지만, 각성 후 빠르게 망각되며 기존의 단순 텍스트 메모로는 그 몽환적인 감성과 시각적 잔상을 온전히 보존하기 어렵습니다. 본 프로젝트는 체험자가 입력한 핵심 키워드(인물, 장소, 감정)를 단초 삼아 생성형 AI가 꿈의 내러티브를 재구성하고 따뜻한 동화풍 일러스트를 생성함으로써, 관람객이 자신의 내면세계를 직관적으로 탐구하고 기억할 수 있는 인터랙티브 플랫폼을 구축하고자 시작되었습니다.',
    methodology: [
      {
        title: 'KoGPT-2 기반 몽환적 꿈 내러티브 생성 파이프라인 (NLP Fine-tuning)',
        desc: '기성 LLM의 건조한 문맥을 탈피하고 꿈 특유의 서정적이고 몽환적인 분위기를 연출하기 위해, 한국·동양 설화 및 동화 코퍼스를 구축하고 `skt/kogpt2-base-v2` 모델을 파인튜닝했습니다. KSS(Korean Sentence Splitter)와 KoNLPy 형태소 분석 전처리를 적용하여 3페이지 분량의 기승전결 동화책 내러티브 구조를 안정적으로 생성하도록 설계했습니다.'
      },
      {
        title: 'Stable Diffusion XL & LoRA 기반 일러스트 시각화 및 스타일 일관성 제어',
        desc: '서사 내용과 완벽히 부합하는 감성적 비주얼을 위해 최신 `SDXL 1.0` 모델에 크레용/동화 일러스트 특화 LoRA를 결합했습니다. 장면 분석 프롬프트 엔지니어링, guidance_scale(3.5) 최적화, 7-step 추론 가속 파라미터 튜닝을 진행하였으며, 스토리 내 동일한 톤앤매너를 유지하기 위해 torch 시드 고정(Seed Locking) 파이프라인을 구축했습니다.'
      },
      {
        title: '인터랙티브 책장 넘기기(Drag/Swipe) 및 3D 틸트 도서관 UX 설계',
        desc: 'React와 Framer Motion, GSAP를 활용하여 책장에 비스듬히 꽂힌 책들을 마우스 인터랙션으로 탐색하는 도서관 뷰(`/library`)와, 실제 책장을 손으로 넘기는 듯한 좌우 드래그 스와이프 제스처(`/books/:id/:page`)를 구현했습니다. Python Flask RESTful API로 프론트엔드와 AI 모델 파이프라인을 실시간 연결했습니다.'
      }
    ],
    results: [
      {
        title: '생성형 동화책 인터랙티브 뷰어 및 책장 넘기기 화면',
        desc: 'AI가 생성한 몽환적 서사와 SDXL 동화 일러스트가 결합되어 한 권의 책으로 렌더링되며, 사용자가 드래그 제스처로 자연스럽게 다음 페이지로 넘겨볼 수 있는 핵심 뷰어 인터페이스입니다.',
        figs: [kkumteul_1],
        captions: ['그림 1: 생성형 AI가 완성한 텍스트·일러스트 동화책 및 드래그 제스처 책 읽기 화면']
      },
      {
        title: '도서관 책장(Library) 및 감성 아카이브 뷰',
        desc: '지금까지 생성된 다른 관람객들의 꿈 동화책들이 각기 다른 각도로 자연스럽게 책장에 진열되어 있으며, 마우스 호버 시 떠오르는 마이크로 인터랙션을 통해 자유롭게 열람할 수 있는 아카이브 공간입니다.',
        figs: [kkumteul_2],
        captions: ['그림 2: 마우스 반응형 3D 틸트 효과가 적용된 꿈 동화책 도서관(Library) 뷰']
      }
    ],
    conclusion: '꿈틀 프로젝트는 생성형 AI의 양대 축인 텍스트 생성(LLM)과 이미지 생성(Diffusion) 파이프라인을 실제 사용자 인터랙션과 유기적으로 결합한 서강대 창의융합 학부연구 프로젝트입니다. 팀장으로서 전체 NLP 파이프라인 기획과 모델 파인튜닝, 프롬프트 엔지니어링 및 백엔드 연동을 주도하였으며, 1학기 연구결과보고 완료 후 2학기 플랫폼 고도화 및 ATC(Art & Technology Conference) 전시 출품을 목표로 발전을 이어갔습니다.'
  }
};
