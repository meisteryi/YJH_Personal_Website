import eisenhower_1 from '../../assets/eisenhower_1.png';
import eisenhower_2 from '../../assets/eisenhower_2.png';
import eisenhower_3 from '../../assets/eisenhower_3.png';
import eisenhower_icon from '../../assets/eisenhower_icon.png';

export const eisenhower = {
  id: 'eisenhower',
  title: 'Eisenhower To-Do & Assistant',
  subtitle: '아이젠하워 4분면 우선순위 매트릭스, Q4 자동 소각 시스템, 루틴 및 운동 트래킹 올인원 생산성 솔루션',
  author: 'Joohyoung Yi',
  affiliation: '서강대학교 아트&테크놀로지',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/Todo_Eisenhower',
  page: '#',
  tags: ['Flutter', 'Cross-Platform', 'Firebase Auth/Sync', 'SQLite Local-First', 'Eisenhower Matrix', 'Pomodoro Timer'],
  period: '2026.08 - 현재',
  featuredImage: eisenhower_2,
  abstract: '아이젠하워 투두(Eisenhower To-Do & Assistant)는 무한히 쌓이는 일상 작업의 인지 과부하(Cognitive Overload)를 해결하기 위해, 아이젠하워 매트릭스(4-Quadrant Priority Matrix)와 방치된 비본질 태스크의 자동 소각(Auto-Incinerator) 규칙을 결합한 Flutter 기반 올인원 크로스플랫폼 생산성 프로덕트입니다. 긴급성과 중요도 축으로 태스크를 Q1(Do First), Q2(Schedule), Q3(Delegate), Q4(Eliminate)로 자동 구조화하고, 25분 뽀모도로 몰입 타이머, 투두메이트형 카테고리 뷰, 반복 루틴 및 헬스 세트 트래커를 단일 프로덕트 플로우로 통합했습니다. SQLite 로컬 퍼스트(Local-first) 아키텍처에 Firebase Firestore 양방향 동기화 및 Apple/Google 소셜 로그인을 탑재하여, iOS(IPA), Android(APK), macOS(Desktop App) 크로스플랫폼 릴리즈 빌드를 완결했습니다.',
  sections: {
    introduction: '수많은 할 일 앱이 존재함에도 사용자는 여전히 "무엇을 지금 먼저 해야 하는가?"라는 의사결정 피로에 시달립니다. 본 프로젝트는 긴급성과 중요도 기반의 아이젠하워 매트릭스 방법론을 현대적 모바일/데스크톱 UX로 재해석하고, 사분면별 엄격한 태스크 생애주기 관리(Q4 자동 소각)와 생산성/루틴/운동 트래킹의 유기적 결합을 목표로 기획 및 개발되었습니다.',
    methodology: [
      {
        title: '아이젠하워 4분면 구조화 및 Q4 자동 소각 엔진',
        desc: '모든 태스크를 Q1(긴급·중요: 즉시 실행), Q2(비긴급·중요: 계획·집중), Q3(긴급·비중요: 위임·신속 처리), Q4(비긴급·비중요: 제거)의 4개 사분면으로 분류합니다. 특히 Q4 영역에 등록된 후 7일 이상 방치된 태스크는 인지 부담을 덜어주기 위해 백그라운드 엔진이 자동으로 소각(Incineration)하여 휴지통으로 격리시키는 규칙 기반 수명주기 알고리즘을 설계했습니다.'
      },
      {
        title: '로컬 퍼스트(Local-First) SQLite & Firebase 클라우드 듀얼 동기화',
        desc: '네트워크 연결이 불안정한 오프라인 환경에서도 지연 없는 즉각적 반응을 보장하기 위해 SQLite 기반 로컬 퍼스트 아키텍처를 구축했습니다. 온라인 연결 시 백그라운드 싱크 서비스(SyncService)가 Firestore 클라우드 데이터와 충돌을 해결하며 실시간 양방향 동기화를 수행하며, Apple Sign-In과 Google Sign-In 연동으로 기기 간 연속성을 보장합니다.'
      },
      {
        title: '생산성 플로우 통합: 뽀모도로 타이머, 루틴 & 워크아웃 트래커',
        desc: '단순 체크리스트를 넘어, 태스크 카드 터치 한 번으로 25분 집중 카운트다운을 시작하고 종료 시 자동 완료 처리되는 뽀모도로 타이머를 탑재했습니다. 또한 투두메이트형 컬러 칩 카테고리 뷰, 반복 루틴 자동 생성, 헬스 운동 종목별 커스텀 세트(중량, 반복수, RPE) 기록 및 주간 볼륨 시각화 다이얼로그를 하나의 유기적 탭 네비게이션으로 결합했습니다.'
      }
    ],
    results: [
      {
        title: '아이젠하워 4분면 매트릭스 및 실시간 진행률 대시보드',
        desc: 'Q1부터 Q4까지 사분면별 컬러 코딩과 카드형 인터페이스로 태스크 우선순위를 직관적으로 파악할 수 있는 메인 매트릭스 뷰입니다. 상단에는 당일 날짜 스트립 캘린더와 완료율을 실시간으로 계산하는 미니맵 트래커(Mini-Map Tracker)가 배치되어 사용자의 하루 성취도를 한눈에 시각화합니다. 각 태스크에는 25분 뽀모도로 타이머 원터치 버튼이 장착되어 즉각적인 몰입 실행을 지원합니다.',
        figs: [eisenhower_2],
        captions: ['그림 1: 아이젠하워 4분면 매트릭스 대시보드, 뽀모도로 집중 타이머 및 실시간 미니맵 진행률 트래커']
      },
      {
        title: '데스크톱 앱 환경 & 클라우드/소각 설정 시스템',
        desc: 'macOS 데스크톱 대화면 환경에 최적화된 사이드바 네비게이션과 전체 앱 설정 다이얼로그 화면입니다. Google 계정 연동 및 Sign in with Apple 기반 클라우드 동기화 제어, 매트릭스 뷰/투두메이트 뷰 전환, Q4 사분면 방치 태스크 자동 소각 기한(7일) 커스터마이징 등 핵심 서비스 정책을 사용자가 손쉽게 제어할 수 있습니다.',
        figs: [eisenhower_1],
        captions: ['그림 2: 다크 테마, 계정 동기화 및 자동 소각 수명주기 설정이 포함된 네이티브 macOS 데스크톱 앱']
      },
      {
        title: '워크아웃 트래커 & 주간 운동량 분석',
        desc: '사용자의 신체 단련 루틴을 체계적으로 관리하는 워크아웃 트래커 화면입니다. 종목별 세트 수, 중량(kg), 횟수(Reps), RPE 강도 지표를 체크리스트 방식으로 기록할 수 있으며, 상단의 주간 운동량 막대 그래프와 캘린더 스트릭 히트맵을 통해 점진적 과부하와 운동 일관성을 직관적으로 피드백받을 수 있습니다.',
        figs: [eisenhower_3],
        captions: ['그림 3: 커스텀 세트/반복수 기록, 주간 볼륨 차트 및 활동 스트릭 히트맵을 지원하는 운동 트래커']
      },
      {
        title: '프로덕트 브랜드 아이덴티티 & 크로스플랫폼 패키징',
        desc: '우선순위 구조화와 효율적 실행을 상징하는 공식 앱 아이콘 디자인입니다. Flutter 단일 코드베이스를 기반으로 iOS(TestFlight/IPA), Android(APK), macOS(Desktop App Bundle 및 DMG/Zip) 크로스플랫폼 릴리즈 빌드를 완결하여 플랫폼 간 파편화 없는 균일한 사용자 경험을 전달합니다.',
        figs: [eisenhower_icon],
        captions: ['그림 4: 공식 애플리케이션 아이콘 및 iOS, Android, macOS 타겟 프로덕션 릴리즈 아키텍처']
      }
    ],
    conclusion: '아이젠하워 투두는 단순한 일정 기록을 넘어, 엄격한 우선순위 규칙과 자동 소각 알고리즘을 통해 사용자의 인지 비용을 최소화하는 기능 중심 서비스 기획의 정수입니다. SQLite 로컬 퍼스트의 극대화된 속도감과 Firebase 클라우드 동기화, 크로스플랫폼 빌드 파이프라인을 직접 구축함으로써 서비스 기획에서 네이티브 구현 및 프로덕트 배포까지 완결하는 실행력을 입증했습니다.'
  }
};
