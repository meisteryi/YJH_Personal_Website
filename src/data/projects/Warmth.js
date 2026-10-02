import warmth_letter from '../../assets/warmth_letter.png';
import warmth_score from '../../assets/warmth_score.png';
import warmth_demo from '../../assets/warmth_demo.webp';
import opened_letter_with_stamp from '../../assets/opened_letter_with_stamp.png';
import archive_booklet_tab from '../../assets/archive_booklet_tab.png';
import archive_report_tab from '../../assets/archive_report_tab.png';
import archive_list_tab from '../../assets/archive_list_tab.png';

export const warmth = {
  id: 'warmth',
  title: '온기 (Warmth): LLM 기반 감성 교환일기 & 아날로그 인터랙션',
  subtitle: 'Google Gemini LLM 기반 \'오늘 뭐 쓰지?\' 글감 질문 자동 생성, 다차원 텍스트 감정 분석(Sentiment Analysis) 및 -20°C~40°C 기온 측정, 3초 롱프레스 실링 왁스 인터랙션',
  author: '이주형 (Joohyoung Yi)',
  affiliation: '서강대학교 아트&테크놀로지',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/Warmth',
  page: 'https://meisteryi.github.io/Warmth/',
  tags: [
    'Google Gemini LLM',
    'Sentiment Analysis',
    'Prompt Engineering',
    'Next.js 16',
    'TypeScript',
    'Tailwind CSS v4',
    'Web Audio API',
    'Firebase Firestore',
    'VAPID Web Push',
    'Archive System',
    'IndexedDB Cache & Outbox',
    'Interaction Design'
  ],
  period: '2026.09 - 현재',
  featuredImage: warmth_score,
  demoVideo: {
    url: warmth_demo,
    title: '온기 (Warmth) 전체 사용자 플로우 실기 녹화 데모',
    desc: '실제 브라우저 환경에서 Gemini LLM 질문 생성, 6자리 방 페어링, 실링 왁스 3초 롱프레스 개봉 애니메이션 및 Web Audio API 사운드, 아날로그 편지 열람과 Gemini 감성 온기 지수(Warmth Score) 분석까지의 전체 상호작용 녹화 영상입니다.'
  },
  abstract: '온기(Warmth)는 메신저의 지나치게 가볍고 즉각적인 디지털 소통 속에서 잊혀져 가던 손편지의 설렘과 정서적 깊이를 복원하기 위해, 최신 생성형 언어 모델(Google Gemini LLM API)과 아날로그 감각 인터랙션을 융합한 1:1 프라이빗 커플 교환일기 프로덕트입니다. 일기 작성 시 매일 마주하는 소재 고갈(Writer\'s Block) 문제를 해결하기 위해, 8대 감성 테마와 상대방 호칭을 지능적으로 결합하여 매일 새로운 대화 화두를 실시간으로 던져주는 \'오늘 뭐 쓰지? AI 글감 질문 자동 생성 파이프라인\'을 구축했습니다. 또한 일기 본문의 문맥과 정서를 심층 분석하여 한반도 사계절 날씨 기온(-20°C ~ 40°C) 메타포로 감정 온도를 측정하고, 무미건조한 일정 나열을 필터링하며 25자 이내의 시적 코멘트와 감정 해시태그를 자동 추출하는 \'다차원 NLP 감정 분석(Sentiment Analysis) 엔진\'을 탑재했습니다. 여기에 상대방의 지난 편지를 기반으로 한 과거 시제 1:1 복습 퀴즈 및 유연한 AI 유사 정답(동의어/오타 참작) 채점관, 3초 롱프레스 실링 왁스 촉각 피드백, 3대 아카이브 서재(소책자/리스트/리포트), VAPID 웹 푸시 알림 및 Firestore IndexedDB 오프라인 퍼시스턴트 캐시를 결합하여 감성 AI와 피지컬 인터랙션이 완벽히 조화된 완성도 높은 서비스를 배포했습니다.',
  sections: {
    introduction: '현대 메신저의 즉각적인 1초 대화와 단문 소통은 연락의 빈도를 높였지만, 과거 교환일기를 주고받을 때 느꼈던 \'진솔한 속마음을 털어놓는 깊이\'와 \'서로의 마음에 온전히 집중하는 시간\'을 잃어버리게 만들었습니다. 특히 교환일기를 쓰는 사용자들은 며칠 지나지 않아 "오늘 뭐 쓰지?", "딱히 특별한 일이 없었는데"라는 소재 고갈(Writer\'s Block)의 장벽에 부딪히며, 작성된 글 속의 미묘한 감정을 정량적·정성적으로 피드백받지 못해 지속적인 사용 동기를 잃곤 합니다. 온기(Warmth)는 Google Gemini LLM API를 핵심 인터랙션 엔진으로 채택하여 1) 연인 간의 다채로운 속마음과 기억을 이끌어내는 글감 질문을 매일 실시간으로 자동 생성하고, 2) 편지 본문의 정서적 깊이를 -20°C~40°C 기온 메타포로 시각화해 주는 감정 분석을 결합함으로써, 디지털 공간에서도 손편지의 따스한 온도를 지속적으로 이어가도록 기획 및 개발되었습니다.',
    methodology: [
      {
        title: 'Google Gemini LLM API 기반 \'오늘 뭐 쓰지?\' 글감 질문 자동 생성 파이프라인',
        desc: '일기 작성 시 소재 고갈을 해소하기 위해 Gemini Flash-Lite 모델을 연동한 실시간 글감 생성 파이프라인을 구축했습니다. 단순한 날씨나 시간에 국한되지 않고 [1. 설렘과 첫 기억, 2. 사소한 취향과 TMI, 3. 속마음과 고민, 4. 미래와 둘만의 로망, 5. 고마움과 애정 표현, 6. 유쾌한 IF 상상, 7. 가치관과 인생관, 8. 일상 속 쉼과 온기]의 8대 감성 테마 풀을 설계했습니다. 상대방의 실제 이름을 프롬프트 템플릿에 동적으로 주입하여 "오늘 하루 중 {partner}에게 가장 먼저 말해주고 싶었던 사소한 순간은?"과 같은 자연스러운 2인칭 대화형 질문을 자동 생성하며, 사용자가 버튼 하나로 다른 글감을 실시간 추천받고 즉시 일기장에 적용(Apply)할 수 있는 매끄러운 AI-UX를 완성했습니다.'
      },
      {
        title: 'LLM 기반 다차원 텍스트 감정 분석(Sentiment Analysis) & -20°C~40°C 사계절 기온 메타포 설계',
        desc: '편지가 봉인 발송될 때 일기 본문의 문맥과 정서를 심층 분석하는 NLP 감정 분석 엔진을 설계했습니다. 기존 0~100점의 평면적인 점수를 벗어나, 한반도 사계절 날씨 기온(-20°C ~ 영상 40°C) 메타포를 도입하여 혹한기(-20°C~-1°C: 몹시 지치고 시린 감정), 쌀쌀·차분(0°C~14°C: 담담한 일상), 따스함(15°C~29°C: 다정한 위로·감사), 뜨거운 사랑(30°C~40°C: 깊은 애정)으로 다차원 감정을 정밀 계측합니다. "오늘 2시 회의함"과 같은 어떠한 정서도 담겨 있지 않은 무미건조한 일정/사실 나열은 온도를 매기지 않고 자동 필터링(`hasDistinctEmotion: false`)하며, 감정이 담긴 편지에는 25자 이내의 시적 코멘트(예: "지친 퇴근길을 포근하게 안아주는 봄날의 온기")와 감정 해시태그 3개를 자동 추출하여 피드백합니다.'
      },
      {
        title: '상대방 지난 편지 기반 과거 시제 맞춤형 복습 퀴즈 & AI 유연한 유사 정답 채점관',
        desc: '상대방이 편지를 열기 위해 통과해야 하는 잠금 해제 관문으로, Gemini LLM을 활용한 지능형 퀴즈 시스템을 구축했습니다. 상대방이 이미 읽었던 지난 편지 본문을 분석하여 "저번 편지에서 내가 너랑 가고 싶다고 했던 곳이 어디게?", "저번에 네가 먹고 싶다고 했던 음식이 뭐였지?"와 같이 과거 시제와 1:1 대화 구어체로 작성된 맞춤형 복습 퀴즈를 자동 출제합니다. 또한 글자 그대로의 일치뿐만 아니라 의미상 동일한 답변(러닝↔조깅, 아아↔아메리카노, 붕어빵↔팥붕, 통화↔전화)과 한국어 조사/어미 제거, 1글자 오타 참작 레벤슈타인 거리 알고리즘을 결합한 AI 유연한 채점관을 구현하여 억울한 오답 없는 감성적인 경험을 전달합니다.'
      },
      {
        title: '3초 롱프레스 실링 왁스 인터랙션, 3대 아카이브 서재 & VAPID 웹 푸시 풀스택 아키텍처',
        desc: '감성 AI 엔진을 받쳐주는 물리적 촉각 인터랙션과 고신뢰성 인프라를 구축했습니다. 편지 봉투 중앙의 실링 왁스를 3초간 롱프레스할 때 Web Audio API로 저주파 험(Melt Hum)과 균열 타격음(Wax Crack)을 실시간 합성하여 출력합니다. 또한 누적된 편지들을 단행본 소책자처럼 넘겨보는 \'북클릿 뷰(Booklet View)\', 타임라인 형태의 \'리스트 뷰(List View)\', 온기 기온 시계열 변화 그래프를 제공하는 \'온기 리포트 뷰(Warmth Report View)\'를 설계했습니다. 백그라운드 VAPID Web Push 알림, Firestore IndexedDB 오프라인 퍼시스턴트 캐시, 텍스트 유실 방지 Outbox 및 Safari ITP 대응 아키텍처를 완결했습니다.'
      }
    ],
    results: [
      {
        title: 'Gemini 감성 AI 온기 기온(-20°C~40°C) 분석 및 시적 코멘트 피드백',
        desc: '편지 속 본문 텍스트를 Gemini Flash-Lite가 심층 분석하여 사계절 날씨 기온 메타포인 -20°C~40°C 감정 온도와 25자 이내의 서정적 시적 코멘트, 감정 해시태그를 자동 산출하는 감성 AI 피드백 화면입니다.',
        figs: [warmth_score],
        captions: ['그림 1: Gemini LLM 기반 텍스트 감정 분석, 사계절 온기 기온 측정 및 시적 코멘트 피드백']
      },
      {
        title: '편지 봉투 개봉 및 아날로그 한지 편지지 뷰어',
        desc: '실링 왁스가 해제된 후 부드럽게 펼쳐지는 양장 한지 질감의 일기 열람 화면입니다. 마루부리·고운바탕 명조 서체와 먹색 잉크 폰트, 첨부 사진 갤러리 및 상대방을 향한 즉각적인 답장 작성 플로우가 하나의 서정적인 화면으로 완결됩니다.',
        figs: [warmth_letter],
        captions: ['그림 2: 빈티지 편지 봉투 개봉 후 펼쳐지는 따뜻한 손편지 질감의 일기 열람 화면']
      },
      {
        title: '온기 기온(-20°C ~ 40°C) 추이 그래프 & 교환 통계 리포트',
        desc: '두 사람의 편지 교환 주기, 누적 단어 수, 3대 관문 클리어 통계와 함께 한반도 기온 메타포로 측정된 일기별 온기 온도(-20°C ~ 40°C)의 시계열 변화 추이를 꺾은선 차트로 시각화한 종합 리포트입니다.',
        figs: [archive_report_tab],
        captions: ['그림 3: 둘만의 온기 기온 변화 추이 그래프 및 교환일기 상호작용 통계 리포트']
      },
      {
        title: '앤틱 우표 2×2 회전 직소 퍼즐 & 소인 도장 타격 관문',
        desc: '대한제국 앤틱 우표(大韓 溫氣 郵便 42 WON)가 절차적 알고리즘으로 무작위 찢겨져 흩어지며, 조각 자체 중심축을 회전시켜 맞추면 묵직한 소인 도장(쿵!) 타격음과 함께 봉인이 풀리는 인터랙티브 퍼즐 관문입니다.',
        figs: [opened_letter_with_stamp],
        captions: ['그림 4: 절차적 찢김 우표 직소 퍼즐 조각 맞추기 및 소인 도장 타격 화면']
      },
      {
        title: '단행본 소책자(Booklet) 형태의 교환일기 아카이브 서재',
        desc: '둘만의 소중한 교환일기들을 한 권의 단행본 책자처럼 좌우 페이지로 넘기며 사진과 손글씨를 감상할 수 있는 아카이브 북클릿 뷰어입니다. 실제 종이 책장을 넘기는 듯한 서정적 인터랙션을 제공합니다.',
        figs: [archive_booklet_tab],
        captions: ['그림 5: 교환일기 단행본 소책자(Booklet) 뷰어 및 좌우 페이지 독서 인터랙션']
      },
      {
        title: '전체 교환일기 타임라인 리스트 & 날짜별 탐색 아카이브',
        desc: '작성자(주형/유라), 작성 날짜, 통과한 관문 유형, 측정된 온기 온도 뱃지를 한눈에 확인하고 원하는 과거 편지를 즉각 열람할 수 있는 아카이브 리스트 뷰입니다.',
        figs: [archive_list_tab],
        captions: ['그림 6: 작성자·날짜·온도 뱃지가 체계적으로 정리된 교환일기 타임라인 리스트']
      },
      {
        title: '인터랙티브 실기 녹화 데모 (Live Screen Recording Demo)',
        desc: '실제 웹 환경에서 편지 도착 알림 수신, 3초간 실링 왁스를 롱프레스하여 녹여내는 Web Audio 사운드와 파열 애니메이션, 편지지 열람 및 온기 지수 획득까지의 전체 사용자 플로우를 실시간 녹화한 데모 영상입니다.',
        figs: [warmth_demo],
        captions: ['그림 7: 3초 롱프레스 실링 왁스 파쇄 및 편지 열람 실시간 구동 녹화 (Live Screen Recording)']
      }
    ],
    conclusion: '온기(Warmth) 프로젝트는 단순히 감성 디자인에 머무르는 웹 앱을 넘어, \'Google Gemini LLM API 기반의 실시간 질문 생성과 다차원 감정 분석\'이라는 인공지능 파이프라인과 \'3초 롱프레스 실링 왁스, Web Audio 사운드 합성, 소책자 아카이빙\'이라는 피지컬 인터랙션 설계를 결합한 플래그십 AI 프로덕트입니다. 사용자의 소재 고갈(Writer\'s Block) 문제를 LLM 프롬프트 엔지니어링으로 해결하고, 텍스트 속 정서를 사계절 기온 메타포로 시각화하여 디지털 프로덕트가 전달할 수 있는 감정적 유대감의 깊이를 극대화했습니다. 기획, 프롬프트 엔지니어링, 풀스택 개발 및 배포까지 전 과정을 완결하며 AI 기획자로서의 핵심 역량을 실증했습니다.'
  }
};
