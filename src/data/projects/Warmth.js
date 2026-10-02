import warmth_letter from '../../assets/warmth_letter.png';
import warmth_score from '../../assets/warmth_score.png';
import warmth_demo from '../../assets/warmth_demo.webp';
import opened_letter_with_stamp from '../../assets/opened_letter_with_stamp.png';
import archive_booklet_tab from '../../assets/archive_booklet_tab.png';
import archive_report_tab from '../../assets/archive_report_tab.png';
import archive_list_tab from '../../assets/archive_list_tab.png';

export const warmth = {
  id: 'warmth',
  title: '온기 (Warmth): 1:1 둘만의 비밀 아날로그 교환일기',
  subtitle: '3초 롱프레스 실링 왁스 개봉, Gemini 감성 AI 복습 퀴즈 & 기온 메타포 온도계, 3대 아카이브 서재(북클릿/리스트/리포트), VAPID 웹 푸시 알림 풀스택 웹 프로덕트',
  author: '이주형 (Joohyoung Yi)',
  affiliation: '서강대학교 아트&테크놀로지',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/Warmth',
  page: 'https://meisteryi.github.io/Warmth/',
  tags: [
    'Next.js 16',
    'TypeScript',
    'Tailwind CSS v4',
    'Gemini AI Flash-Lite',
    'Web Audio API',
    'Framer Motion',
    'Firebase Firestore',
    'VAPID Web Push',
    'Archive System',
    'IndexedDB Cache & Outbox',
    'Interaction Design'
  ],
  period: '2026.09 - 현재',
  featuredImage: warmth_letter,
  demoVideo: {
    url: warmth_demo,
    title: '온기 (Warmth) 전체 사용자 플로우 실기 녹화 데모',
    desc: '실제 브라우저 환경에서 6자리 초대코드 페어링, 실링 왁스 3초 롱프레스 개봉 애니메이션 및 Web Audio API 사운드, 아날로그 편지 열람과 Gemini 감성 온기 지수(Warmth Score) 분석까지의 전체 상호작용 녹화 영상입니다.'
  },
  abstract: '온기(Warmth)는 메신저의 지나치게 가볍고 즉각적인 디지털 소통 속에서 잊혀져 가던 손편지의 설렘과 아날로그 감성을 웹 브라우저 환경에 복원한 1:1 프라이빗 커플 교환일기 프로덕트입니다. 사용자가 편지를 열기 위해 봉투 중앙의 실링 왁스를 3초간 꾹 눌러야(Long-press) 파열되는 물리적 촉각 인터랙션과 Web Audio API 기반 절차적 사운드(Melt Hum & Wax Crack) 합성 엔진을 탑재했습니다. 또한 상대방 사진 3×3 슬라이딩 퍼즐, 회전 우표 직소 퍼즐, 그리고 상대방의 지난 편지를 바탕으로 출제되는 Gemini AI "맞춤형 복습 퀴즈"와 유연한 유사 정답(동의어/오타 참작) 채점관으로 구성된 3대 잠금 해제 관문(Unlock Gates)을 설계하여 열람 전 긴장감과 몰입감을 배가했습니다. 여기에 한반도 사계절 날씨 기온(-20°C ~ 40°C) 메타포의 감성 온도 분석, 소책자(Booklet)·리스트·온기 리포트 그래프로 구성된 3대 아카이브 서재 시스템, VAPID 기반 실시간 백그라운드 웹 푸시 알림, Firestore IndexedDB 오프라인 퍼시스턴트 캐시 및 Outbox 텍스트 유실 방지 아키텍처를 완비하여 Next.js 16 App Router와 Tailwind CSS v4 기반으로 완성도 높게 서비스되고 있습니다.',
  sections: {
    introduction: '현대 메신저의 즉각적인 1초 대화와 끝없는 알림은 소통의 양을 늘렸지만, 과거 손편지나 교환일기를 주고받을 때 느꼈던 \'기다림의 설렘\'과 \'상대방의 마음에 온전히 집중하는 깊이\'를 퇴색시켰습니다. 기존 커플 다이어리 앱들 역시 일반적인 메모장 UI에 커플 테마를 덧씌운 것에 불과하여, 편지를 개봉할 때의 물리적 긴장감이나 정서적 보상이 결여되어 있었습니다. 온기(Warmth)는 \'의도된 마찰(Deliberate Friction)\'과 \'지능형 감성 기술(Empathic AI)\'이라는 인터랙션 디자인 철학 아래, 편지를 읽기 위해 3초간 왁스를 녹여내고 서로의 일상 조각(퍼즐)을 맞추며 지난 편지를 떠올려야만 열람할 수 있는 감각적 경험을 제공함으로써 디지털 공간에서도 아날로그 손편지의 따스한 온도를 온전히 전하고자 기획 및 개발되었습니다.',
    methodology: [
      {
        title: '3초 롱프레스 실링 왁스 인터랙션 & 절차적 Web Audio API 사운드 합성',
        desc: '편지 봉투 중앙의 버건디 실링 왁스를 3초간 지속 터치(Long-press)할 때 작동하는 정교한 감각 피드백 시스템을 구축했습니다. 터치 지속 시간에 비례해 원형 프로그레스 게이지가 차오르고, Web Audio API를 활용하여 왁스가 지글거리며 녹는 저주파 험(Melt Hum)과 3초 도달 시 왁스가 쩍 갈라지는 타격음(Wax Crack), 햅틱 진동을 실시간으로 합성·출력하여 아날로그 편지를 직접 뜯는 듯한 실감 나는 손맛을 구현했습니다.'
      },
      {
        title: 'Gemini Flash-Lite 기반 감성 AI 엔진: 사계절 기온 메타포 & 맞춤형 복습 퀴즈',
        desc: '기존의 0~100점의 평면적인 점수 체계를 탈피하여, 한반도 사계절 날씨 기온(-20°C ~ 영상 40°C) 메타포를 도입했습니다. 혹한기(-20°C~-1°C: 시리고 지친 감정), 쌀쌀·차분(0°C~14°C: 담담한 일상), 따스함(15°C~29°C: 다정한 위로·감사), 뜨거운 사랑(30°C~40°C: 깊은 애정)으로 다차원 감정을 정밀 분류하며, 단순 일정 나열 등 무미건조한 텍스트는 온도를 매기지 않고 필터링합니다. 또한 상대방이 이미 읽은 지난 편지 내용을 바탕으로 과거 시제("저번 편지에서 내가 너랑 가고 싶다고 했던 곳이 어디게?")의 1:1 대화 구어체 복습 퀴즈를 자동 생성하며, 의미상 동일한 답변(러닝↔조깅, 아메리카노↔아아, 붕어빵↔팥붕)과 조사/어미 제거, 1글자 오타 참작 레벤슈타인 거리를 결합한 유연한 AI 채점관 엔진을 구축했습니다.'
      },
      {
        title: '3대 인터랙티브 관문(Unlock Gates) & 교환일기 아카이빙 서재(Archive) 설계',
        desc: '일기 열람 전 감정적 몰입을 돕는 3대 관문[3×3 사진 슬라이딩 퍼즐, 대한제국 앤틱 우표 2×2 회전 직소 퍼즐 + 소인 도장(쿵!) 타격 연출, AI 맞춤형 복습 퀴즈]을 설계했습니다. 또한 누적된 편지들을 단행본 소책자처럼 넘겨보는 \'북클릿 뷰(Booklet View)\', 전체 교환 히스토리를 날짜별로 탐색하는 \'리스트 뷰(List View)\', 편지 교환 통계와 온기 온도 변화 추이를 시각화하는 \'온기 리포트 뷰(Warmth Report View)\'의 3대 아카이브 서재 시스템을 완성했습니다.'
      },
      {
        title: 'VAPID 웹 푸시 알림, Firestore IndexedDB 캐시 & Outbox 회복탄력성 아키텍처',
        desc: '백그라운드 Service Worker와 VAPID Web Push를 연동하여 상대방의 편지 발송 및 노크(독촉) 시 실시간 기기 푸시 알림을 전달합니다. Firestore IndexedDB Persistent Cache를 적용하여 오프라인 및 새로고침 시 화면 깜빡임(Flicker)을 제로화했으며, 브라우저 비정상 종료 시 작성 중이던 텍스트를 즉시 복원하는 Outbox 임시 보관함과 Apple Safari ITP(7일 로컬스토리지 삭제 정책) 대응 PWA 홈 화면 추가 가이드를 구현하여 프로덕트의 안정성을 극대화했습니다.'
      }
    ],
    results: [
      {
        title: '편지 봉투 개봉 및 아날로그 한지 편지지 뷰어',
        desc: '실링 왁스가 해제된 후 부드럽게 펼쳐지는 양장 한지 질감의 일기 열람 화면입니다. 마루부리·고운바탕 명조 서체와 먹색 잉크 폰트, 첨부 사진 갤러리 및 상대방을 향한 즉각적인 답장 작성 플로우가 하나의 서정적인 화면으로 완결됩니다.',
        figs: [warmth_letter],
        captions: ['그림 1: 빈티지 편지 봉투 개봉 후 펼쳐지는 따뜻한 손편지 질감의 일기 열람 화면']
      },
      {
        title: '앤틱 우표 2×2 회전 직소 퍼즐 & 소인 도장 타격 관문',
        desc: '대한제국 앤틱 우표(大韓 溫氣 郵便 42 WON)가 절차적 알고리즘으로 무작위 찢겨져 흩어지며, 조각 자체 중심축을 회전시켜 맞추면 묵직한 소인 도장(쿵!) 타격음과 함께 봉인이 풀리는 인터랙티브 퍼즐 관문입니다.',
        figs: [opened_letter_with_stamp],
        captions: ['그림 2: 절차적 찢김 우표 직소 퍼즐 조각 맞추기 및 소인 도장 타격 화면']
      },
      {
        title: '단행본 소책자(Booklet) 형태의 교환일기 아카이브 서재',
        desc: '둘만의 소중한 교환일기들을 한 권의 단행본 책자처럼 좌우 페이지로 넘기며 사진과 손글씨를 감상할 수 있는 아카이브 북클릿 뷰어입니다. 실제 종이 책장을 넘기는 듯한 서정적 인터랙션을 제공합니다.',
        figs: [archive_booklet_tab],
        captions: ['그림 3: 교환일기 단행본 소책자(Booklet) 뷰어 및 좌우 페이지 독서 인터랙션']
      },
      {
        title: '온기 기온(-20°C ~ 40°C) 추이 그래프 & 교환 통계 리포트',
        desc: '두 사람의 편지 교환 주기, 누적 단어 수, 3대 관문 클리어 통계와 함께 한반도 기온 메타포로 측정된 일기별 온기 온도(-20°C ~ 40°C)의 시계열 변화 추이를 꺾은선 차트로 시각화한 종합 리포트입니다.',
        figs: [archive_report_tab],
        captions: ['그림 4: 둘만의 온기 기온 변화 추이 그래프 및 교환일기 상호작용 통계 리포트']
      },
      {
        title: '전체 교환일기 타임라인 리스트 & 날짜별 탐색 아카이브',
        desc: '작성자(주형/유라), 작성 날짜, 통과한 관문 유형, 측정된 온기 온도 뱃지를 한눈에 확인하고 원하는 과거 편지를 즉각 열람할 수 있는 아카이브 리스트 뷰입니다.',
        figs: [archive_list_tab],
        captions: ['그림 5: 작성자·날짜·온도 뱃지가 체계적으로 정리된 교환일기 타임라인 리스트']
      },
      {
        title: 'Gemini 감성 AI 온기 지수 및 시적 코멘트 피드백',
        desc: '편지 속 정서를 Gemini Flash-Lite가 심층 분석하여 -20°C~40°C 감정 온도와 25자 이내의 서정적 시적 코멘트, 감정 해시태그를 자동 산출하는 감성 AI 피드백 화면입니다.',
        figs: [warmth_score],
        captions: ['그림 6: Gemini AI 기반 온기 기온 측정, 감정 해시태그 및 시적 코멘트 분석 화면']
      },
      {
        title: '인터랙티브 실기 녹화 데모 (Live Screen Recording Demo)',
        desc: '실제 웹 환경에서 편지 도착 알림 수신, 3초간 실링 왁스를 롱프레스하여 녹여내는 Web Audio 사운드와 파열 애니메이션, 편지지 열람 및 온기 지수 획득까지의 전체 사용자 플로우를 실시간 녹화한 데모 영상입니다.',
        figs: [warmth_demo],
        captions: ['그림 7: 3초 롱프레스 실링 왁스 파쇄 및 편지 열람 실시간 구동 녹화 (Live Screen Recording)']
      }
    ],
    conclusion: '온기(Warmth) 프로젝트는 단순히 정보가 오가는 기능 중심 웹 앱을 넘어, \'기다림과 촉각적 조작\'이라는 감성적 인터랙션 설계와 \'Gemini 기반 공감형 AI 엔진\', \'단행본 소책자 아카이빙 시스템\'을 통해 사용자에게 잊을 수 없는 정서적 가치를 전달하는 인터랙티브 웹 프로덕트입니다. 3초 롱프레스 실링 왁스, Web Audio API 사운드 합성, 절차적 퍼즐, Gemini 맞춤형 복습 퀴즈 및 유사 정답 채점관, VAPID 웹 푸시 알림과 IndexedDB 오프라인 캐시까지 전 과정을 1인 풀스택으로 기획 및 개발하여 성공적으로 릴리즈했습니다. 감각 피드백(청각·시각·촉각)과 지능형 AI, 프라이빗 소통이 결합되었을 때 디지털 제품이 얼마나 깊은 감정적 유대를 이끌어낼 수 있는지를 입증했습니다.'
  }
};
