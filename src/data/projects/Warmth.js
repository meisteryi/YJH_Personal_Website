import warmth_letter from '../../assets/warmth_letter.png';
import warmth_score from '../../assets/warmth_score.png';
import warmth_demo from '../../assets/warmth_demo.webp';

export const warmth = {
  id: 'warmth',
  title: '온기 (Warmth): 1:1 둘만의 비밀 아날로그 교환일기',
  subtitle: '3초 롱프레스 실링 왁스 개봉, 3대 잠금 해제 관문(퍼즐·우표·퀴즈), Firebase 실시간 턴제 동기화 웹 프로덕트',
  author: '이주형 (Joohyoung Yi)',
  affiliation: '서강대학교 아트&테크놀로지',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/Warmth',
  page: 'https://meisteryi.github.io/Warmth/',
  tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Web Audio API', 'Framer Motion', 'Firebase Firestore', 'Procedural Puzzle', 'Interaction Design'],
  period: '2026.09 - 현재',
  featuredImage: warmth_letter,
  demoVideo: {
    url: warmth_demo,
    title: '온기 (Warmth) 전체 사용자 플로우 실기 녹화 데모',
    desc: '실제 브라우저 환경에서 6자리 초대코드 페어링, 실링 왁스 3초 롱프레스 개봉 애니메이션 및 Web Audio API 사운드, 아날로그 편지 열람과 온기 지수(Warmth Score) 분석까지의 전체 상호작용 녹화 영상입니다.'
  },
  abstract: '온기(Warmth)는 메신저의 지나치게 가볍고 즉각적인 디지털 소통 속에서 잊혀져 가던 손편지의 설렘과 아날로그 감성을 웹 브라우저 환경에 복원한 1:1 프라이빗 커플 교환일기 프로덕트입니다. 사용자가 편지를 열기 위해 봉투 중앙의 실링 왁스를 3초간 꾹 눌러야(Long-press) 파열되는 물리적 촉각 인터랙션과 Web Audio API 기반 절차적 사운드(Melt Hum & Wax Crack) 합성 엔진을 탑재했습니다. 또한 상대방 사진 3×3 슬라이딩 퍼즐, 절차적 찢김 우표 직소 퍼즐, 둘만의 깜짝 퀴즈로 이어지는 3대 잠금 해제 관문(Unlock Gates)을 설계하여 열람 전 긴장감과 몰입감을 배가했습니다. Cloud Firestore 실시간 리스너를 결합한 5단계 턴제 상태 머신 아키텍처와 둘만의 교환 기록을 수치화하는 온기 지수(Warmth Score) 시스템을 구축하고, Next.js 16 App Router와 Tailwind CSS v4 기반으로 완성하여 GitHub Pages로 실서비스를 배포했습니다.',
  sections: {
    introduction: '현대 메신저의 즉각적인 1초 대화와 끝없는 알림은 소통의 양을 늘렸지만, 과거 손편지나 교환일기를 주고받을 때 느꼈던 \'기다림의 설렘\'과 \'상대방의 마음에 온전히 집중하는 깊이\'를 퇴색시켰습니다. 기존 커플 다이어리 앱들 역시 일반적인 메모장 UI에 커플 테마를 덧씌운 것에 불과하여, 편지를 개봉할 때의 물리적 긴장감이나 정서적 보상이 결여되어 있었습니다. 온기(Warmth)는 \'의도된 마찰(Deliberate Friction)\'이라는 인터랙션 디자인 철학 아래, 편지를 읽기 위해 3초간 왁스를 녹여내고 서로의 일상 조각(퍼즐)을 맞춰야만 열람할 수 있는 감각적 경험을 제공함으로써 디지털 공간에서도 아날로그 손편지의 따스한 온도를 온전히 전하고자 기획 및 개발되었습니다.',
    methodology: [
      {
        title: '3초 롱프레스 실링 왁스 인터랙션 & 절차적 Web Audio API 사운드 합성',
        desc: '편지 봉투 중앙의 버건디 실링 왁스를 3초간 지속 터치(Long-press)할 때 작동하는 정교한 감각 피드백 시스템을 구축했습니다. 터치 지속 시간에 비례해 원형 프로그레스 게이지가 차오르고, Web Audio API를 활용하여 왁스가 지글거리며 녹는 저주파 험(Melt Hum)과 3초 도달 시 왁스가 쩍 갈라지는 타격음(Wax Crack), 햅틱 진동을 실시간으로 합성·출력하여 아날로그 편지를 직접 뜯는 듯한 실감 나는 손맛을 구현했습니다.'
      },
      {
        title: '3대 잠금 해제 관문 기획: 3×3 사진 퍼즐, 절차적 회전 우표 직소, 깜짝 퀴즈',
        desc: '일기 열람 전 도파민과 놀이 경험을 제공하기 위해 3가지 인터랙티브 관문을 설계했습니다. 1) 상대방이 일기에 첨부한 사진을 9개 조각으로 분리해 맞추는 3×3 슬라이딩 조각 퍼즐, 2) 대한제국 앤틱 우표가 무작위 각도로 찢겨져 각 조각의 자체 중심축을 회전시켜 맞추고 완성 시 소인 도장(쿵!) 타격음이 울리는 2×2 직소 퍼즐, 3) 상대방이 직접 출제한 TMI 퀴즈 모듈을 구현하여 열람 경험에 깊은 유대감을 부여했습니다.'
      },
      {
        title: 'Cloud Firestore 5단계 실시간 턴제 상태 머신 및 온기 지수(Warmth Score) 설계',
        desc: '6자리 초대 코드로 1:1 전용 방을 페어링한 뒤, 하루 한 명만 작성 권한을 갖는 엄격한 턴제 라이프사이클을 설계했습니다. Firestore `onSnapshot` 실시간 구독을 기반으로 [방 생성/매칭 → 상대방 작성 대기 → 봉인된 편지(관문 미해결) → 왁스 개봉 대기 → 일기 열람 및 온기 지수 산출]의 5단계 UI 상태 머신을 완성하여 기기 간 0.5초 이내의 즉각적인 상태 전이를 실현했습니다.'
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
        title: '온기 지수(Warmth Score) 및 감정 데이터 피드백',
        desc: '편지 교환 주기, 글의 정성도, 미션 완수율을 종합 분석하여 둘만의 온기 온도(Warmth Score)를 계산하고 시각화하는 피드백 모듈입니다. 교환일기를 지속할수록 둘만의 방 온도가 상승하며 감정적 유대감을 강화합니다.',
        figs: [warmth_score],
        captions: ['그림 2: 교환일기 상호작용 분석 및 둘만의 온기 지수(Warmth Score) 피드백 화면']
      },
      {
        title: '인터랙티브 실기 녹화 데모 (Live Screen Recording Demo)',
        desc: '실제 웹 환경에서 편지 도착 알림 수신, 3초간 실링 왁스를 롱프레스하여 녹여내는 Web Audio 사운드와 파열 애니메이션, 편지지 열람 및 온기 지수 획득까지의 전체 사용자 플로우를 실시간 녹화한 데모 영상입니다.',
        figs: [warmth_demo],
        captions: ['그림 3: 3초 롱프레스 실링 왁스 파쇄 및 편지 열람 실시간 구동 녹화 (Live Screen Recording)']
      }
    ],
    conclusion: '온기(Warmth) 프로젝트는 단순히 정보가 오가는 기능 중심 웹 앱을 넘어, \'기다림과 촉각적 조작\'이라는 감성적 인터랙션 설계를 통해 사용자에게 잊을 수 없는 정서적 가치를 전달하는 인터랙티브 웹 프로덕트입니다. 3초 롱프레스 실링 왁스, Web Audio API 사운드 합성, 절차적 퍼즐 알고리즘 및 Firebase 실시간 턴제 동기화 전 과정을 1인 풀스택으로 기획 및 개발하여 GitHub Pages로 성공적으로 배포했습니다. 감각 피드백(청각·시각·촉각)과 프라이빗 소통이 결합되었을 때 디지털 제품이 얼마나 깊은 감정적 유대를 이끌어낼 수 있는지를 실증했습니다.'
  }
};
