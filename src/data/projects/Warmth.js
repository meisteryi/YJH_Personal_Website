import warmth_letter from '../../assets/warmth_letter.png';
import warmth_score from '../../assets/warmth_score.png';
import warmth_demo from '../../assets/warmth_demo.webp';
import opened_letter_with_stamp from '../../assets/opened_letter_with_stamp.png';
import archive_booklet_tab from '../../assets/archive_booklet_tab.png';
import archive_report_tab from '../../assets/archive_report_tab.png';
import archive_list_tab from '../../assets/archive_list_tab.png';
import warmth_memory_jar from '../../assets/warmth_memory_jar.png';
import warmth_postit_reaction from '../../assets/warmth_postit_reaction.png';
import warmth_custom_stamp from '../../assets/warmth_custom_stamp.png';

export const warmth = {
  id: 'warmth',
  title: '온기 (Warmth): 생성형 감성 AI & 피지컬 인터랙션 비밀 교환일기 (Live Production)',
  subtitle: 'Google Gemini LLM 기반 \'오늘 뭐 쓰지?\' 글감 자동 생성 및 사계절(-20°C~40°C) 감정 분석, Three.js 3D 추억 유리병 물리 시뮬레이션, E2EE 종단간 암호화 & 포스트잇 리액션, 3초 롱프레스 실링 왁스 인터랙션',
  author: '이주형 (Joohyoung Yi)',
  affiliation: '서강대학교 아트&테크놀로지',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/Warmth',
  page: 'https://meisteryi.github.io/Warmth/',
  tags: [
    'Google Gemini LLM',
    'Three.js (WebGL 3D Physics)',
    'E2EE End-to-End Encryption',
    'Sentiment Analysis',
    'Prompt Engineering',
    'Next.js 16 (Turbopack)',
    'TypeScript 5',
    'Tailwind CSS v4',
    'Web Audio API',
    'Firebase Firestore',
    'VAPID Web Push',
    'iOS & Capacitor (Taptic Engine)',
    'Archive System & Booklet PDF',
    'Physical Interaction Design'
  ],
  period: '2026.09 - 현재 (실제 서비스 라이브 운영 중)',
  featuredImage: warmth_score,
  demoVideo: {
    url: warmth_demo,
    title: '온기 (Warmth) 전체 사용자 플로우 실기 녹화 데모',
    desc: '실제 브라우저 환경에서 Gemini LLM 질문 생성, 6자리 방 페어링, 실링 왁스 3초 롱프레스 개봉 애니메이션 및 Web Audio API 사운드, 아날로그 편지 열람과 Gemini 감성 온기 지수(Warmth Score) 분석까지의 전체 상호작용 녹화 영상입니다.'
  },
  abstract: '온기(Warmth)는 메신저의 지나치게 가볍고 즉각적인 디지털 소통 속에서 잊혀져 가던 손편지의 설렘과 정서적 깊이를 복원하기 위해, 최신 생성형 언어 모델(Google Gemini LLM API), Three.js WebGL 3D 물리 시뮬레이션, E2EE 종단간 암호화, 그리고 아날로그 감각 인터랙션을 융합하여 실제 연인들이 매일 사용하도록 배포·운영 중인 1:1 프라이빗 비밀 교환일기 프로덕트입니다. 일기 작성 시 매일 마주하는 소재 고갈(Writer\'s Block) 문제를 해결하기 위해 8대 감성 테마와 상대방 호칭을 결합한 \'오늘 뭐 쓰지? AI 글감 질문 자동 생성 파이프라인\'과 서정적 AI 삽화 생성 기능을 탑재했습니다. 또한 일기 본문의 문맥과 정서를 심층 분석하여 한반도 사계절 날씨 기온(-20°C ~ 40°C) 메타포로 감정 온도를 측정하고 25자 이내의 시적 코멘트를 부여하는 \'다차원 NLP 감정 분석(Sentiment Analysis) 엔진\' 및 월간 온기 리포트(Monthly Recap)를 구축했습니다. 여기에 주고받은 편지의 실링 왁스 조각들이 차곡차곡 쌓여 모바일 흔들기(가속도계)에 반응하는 \'Three.js 3D 추억 유리병(Memory Jar)\', 편지 본문 및 포스트잇 댓글까지 철저히 보호하는 \'E2EE 종단간 암호화 보안\', 3초 롱프레스 실링 왁스 햅틱/사운드 피드백(Web Audio + iOS Taptic Engine), 커스텀 사진 앤틱 우표 퍼즐, 단행본 소책자(Booklet) 모바일 PDF 인쇄 브릿지까지 결합하여 감성 AI와 피지컬 인터랙션이 완벽히 조화된 완성도 높은 풀스택 서비스를 완결했습니다.',
  sections: {
    introduction: '현대 메신저의 즉각적인 1초 대화와 단문 소통은 연락의 빈도를 높였지만, 과거 교환일기를 주고받을 때 느꼈던 \'진솔한 속마음을 털어놓는 깊이\'와 \'서로의 마음에 온전히 집중하는 시간\'을 잃어버리게 만들었습니다. 온기(Warmth)는 단순한 토이 프로젝트를 넘어 실제 연인들과 지인 커플들에게 배포되어 실사용 피드백을 수렴하며 발전해 온 라이브 서비스(Production Live App)입니다. 사용자들은 매일 밤 일기를 쓸 때 "오늘 뭐 쓰지?", "딱히 특별한 일이 없었는데"라는 소재 고갈(Writer\'s Block)의 벽에 부딪히며, 가장 은밀한 사생활인 만큼 제3자나 관리자조차 열람할 수 없는 완벽한 프라이버시(E2EE)를 요구했습니다. 또한 귀가 시간이 늦은 현대인들을 위해 자정이 아닌 \'새벽 04:00 자동 리셋 시스템\'을 도입하고, 편지 위에 정감 어린 코멘트를 남기는 \'E2EE 포스트잇 리액션\', 지나온 시간의 흔적을 촉각적으로 체감하는 \'Three.js 3D 추억 유리병\', 모바일 브라우저 전용 \'소책자 PDF 인쇄\' 등 실제 연인들의 목소리를 기획과 엔지니어링 전반에 적극 반영했습니다.',
    methodology: [
      {
        title: 'Google Gemini LLM API 기반 \'오늘 뭐 쓰지?\' 글감 질문 자동 생성 & AI 편지 삽화 파이프라인',
        desc: '일기 작성 시 소재 고갈을 해소하기 위해 Gemini Flash-Lite 모델을 연동한 실시간 글감 생성 파이프라인을 구축했습니다. [1. 설렘과 첫 기억, 2. 사소한 취향과 TMI, 3. 속마음과 고민, 4. 미래와 둘만의 로망, 5. 고마움과 애정 표현, 6. 유쾌한 IF 상상, 7. 가치관과 인생관, 8. 일상 속 쉼과 온기]의 8대 감성 테마 풀을 설계하고 상대방 이름을 프롬프트 템플릿에 동적으로 주입하여 "오늘 하루 중 {partner}에게 가장 먼저 말해주고 싶었던 사소한 순간은?"과 같은 2인칭 대화형 질문을 자동 생성합니다. 또한 편지 작성 시 본문의 서정적 텍스트를 기반으로 맞춤형 수채화풍 삽화를 자동 그려주는 AI 편지 일러스트 파이프라인을 연동하여 편지의 감성적 밀도를 극대화했습니다.'
      },
      {
        title: 'LLM 다차원 감정 분석(Sentiment Analysis), -20°C~40°C 사계절 기온 메타포 & 월간 온기 리포트',
        desc: '편지가 봉인 발송될 때 일기 본문의 문맥과 정서를 심층 분석하는 NLP 감정 분석 엔진을 설계했습니다. 평면적인 점수를 탈피하여 한반도 사계절 날씨 기온(-20°C ~ 영상 40°C) 메타포를 도입, 혹한기(-20°C~-1°C: 몹시 지치고 시린 감정), 쌀쌀·차분(0°C~14°C: 담담한 일상), 따스함(15°C~29°C: 다정한 위로·감사), 뜨거운 사랑(30°C~40°C: 깊은 애정)으로 정밀 계측합니다. 사실 나열성 글은 온도를 매기지 않고 자동 필터링(`hasDistinctEmotion: false`)하며, 감정이 담긴 편지에는 25자 이내의 시적 코멘트와 감정 해시태그 3개를 자동 추출합니다. 나아가 매월 말일 한 달 동안 둘이 나눈 감정의 궤적을 종합 분석해 주는 \'Gemini 월간 온기 리포트(Monthly Recap)\'를 자동 발행합니다.'
      },
      {
        title: 'Three.js WebGL 3D 추억 유리병(Memory Jar) & 모바일 가속도계 흔들기 물리 시뮬레이션',
        desc: '둘만의 편지 교환이 쌓여가는 과정을 물리적으로 체감할 수 있도록 Three.js 기반의 3D 추억 유리병(Memory Jar)을 구현했습니다. 편지를 개봉할 때마다 부서진 실링 왁스 조각들이 유리병 바닥에 중력에 따라 차곡차곡 퇴적됩니다. 모바일 기기의 가속도 센서(`DeviceMotionEvent`)와 쉐이크 감지 알고리즘을 결합하여, 스마트폰을 흔들면 유리병 안의 왁스 조각들이 경쾌한 사운드와 함께 공중으로 솟구치며 부딪치고 다시 자연스럽게 가라앉는 리얼타임 3D 물리 시뮬레이션을 구현했습니다. 월별 유리병 3D 슬라이드 전환과 왁스 터치 시 해당 편지 즉시 프리뷰 연동을 지원합니다.'
      },
      {
        title: 'E2EE 종단간 암호화(End-to-End Encryption) & 포스트잇 리액션 및 무유실 자동 복구 아키텍처',
        desc: '가장 내밀한 둘만의 교환일기를 안전하게 지키기 위해 Web Crypto API 기반의 E2EE(종단간 암호화) 파이프라인을 구축했습니다. 편지 본문뿐만 아니라 상대방 편지에 덧붙이는 \'포스트잇 리액션(Post-it Notes, 최대 100자)\' 댓글까지 클라이언트 기기에서 암호화되어 저장되므로 서버 관리자나 외부 공격자조차 내용을 절대 복호화할 수 없습니다. 또한 실수로 앱을 닫거나 네트워크가 끊겨도 작성 중인 본문과 포스트잇이 안전하게 유지되도록 로컬 스토리지 임시 저장(Auto-Save) 및 복원(Draft Restoration), 오프라인 Firestore IndexedDB 캐시 및 Outbox 큐잉 아키텍처를 완비했습니다.'
      },
      {
        title: '3초 롱프레스 실링 왁스(Web Audio + iOS Taptic), 3대 관문 & 소책자(Booklet) PDF 풀스택 아키텍처',
        desc: '편지 개봉 전 3초간 실링 왁스를 롱프레스할 때 Web Audio API로 저주파 험(Melt Hum)과 균열 타격음(Wax Crack)을 절차적 합성하고, iOS Capacitor 환경에서는 네이티브 Taptic Engine 햅틱 피드백을 전달하여 아날로그 손맛을 완성했습니다. 3대 잠금 해제 관문(사용자 업로드 사진이 박힌 대한제국 앤틱 우표 2×2 회전 직소 퍼즐, 3×3 사진 슬라이딩 퍼즐, 과거 편지 기반 복습 퀴즈 & 유사 정답 채점관, 긴급 통과를 돕는 \'도와줘!\' 패스)을 구비했습니다. 또한 소중한 편지들을 단행본 양장 책자로 엮어 모바일에서도 즉시 인쇄하거나 PDF로 저장할 수 있는 브릿지 및 VAPID 백그라운드 웹 푸시 알림을 구현했습니다.'
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
        title: '편지 봉투 개봉 및 아날로그 양장 한지 편지지 뷰어',
        desc: '실링 왁스가 해제된 후 부드럽게 펼쳐지는 양장 한지 질감의 편지 열람 화면입니다. 마루부리·고운바탕 명조 서체와 먹색 잉크 폰트, 첨부 사진 갤러리 및 상대방을 향한 즉각적인 답장 작성 플로우가 하나의 서정적인 화면으로 완결됩니다.',
        figs: [warmth_letter],
        captions: ['그림 2: 빈티지 편지 봉투 개봉 후 펼쳐지는 따뜻한 손편지 질감의 편지 열람 화면']
      },
      {
        title: 'Three.js 기반 3D 추억 유리병(Memory Jar) & 왁스 흔들기 물리 시뮬레이션',
        desc: '둘만의 주고받은 편지 개수만큼 실링 왁스 조각들이 유리병 바닥에 쌓이며, 스마트폰을 흔들면 모바일 가속도계 센서에 반응하여 왁스들이 공중으로 솟구치고 흩어지는 인터랙티브 Three.js 3D 물리 시뮬레이션 화면입니다.',
        figs: [warmth_memory_jar],
        captions: ['그림 3: Three.js WebGL 3D 추억 유리병(Memory Jar) 및 디바이스 모션(가속도계) 쉐이크 물리 인터랙션']
      },
      {
        title: 'E2EE 종단간 암호화 기반 포스트잇 리액션(Post-it Note) 소통',
        desc: '편지 본문을 읽은 후 감동과 애정을 담아 편지 귀퉁이에 살포시 붙여두는 포스트잇 메모(최대 100자)와 유니코드 이모지 리액션 화면입니다. 종단간 암호화(E2EE)가 적용되어 둘만의 프라이버시가 완벽히 보장됩니다.',
        figs: [warmth_postit_reaction],
        captions: ['그림 4: E2EE 종단간 암호화 보호 포스트잇 메모(Post-it) 및 감성 이모지 리액션']
      },
      {
        title: '커스텀 추억 사진이 임베딩된 앤틱 우표 2×2 직소 퍼즐 & 소인 도장 타격 관문',
        desc: '실제 작성자가 첨부한 추억 사진이 대한제국 앤틱 우표(大韓 溫氣 郵便 42 WON) 속에 스며들어 무작위로 찢겨 흩어지며, 조각을 회전시켜 맞추면 묵직한 소인 도장 타격음(쿵!)과 함께 봉인이 풀리는 인터랙티브 퍼즐 관문입니다.',
        figs: [warmth_custom_stamp, opened_letter_with_stamp],
        captions: [
          '그림 5-1: 사용자가 올린 추억 사진이 우표 안에 자연스럽게 합성되어 출제되는 앤틱 우표 퍼즐',
          '그림 5-2: 절차적 찢김 우표 직소 퍼즐 조각 회전 맞추기 및 소인 도장 타격 완결 화면'
        ]
      },
      {
        title: '단행본 소책자(Booklet) 형태의 교환일기 아카이브 서재 & 모바일 PDF 인쇄',
        desc: '둘만의 소중한 교환일기들을 한 권의 단행본 책자처럼 좌우 페이지로 넘기며 감상할 수 있는 아카이브 북클릿 뷰어입니다. 모바일 브라우저 전용 인쇄 브릿지를 통해 실제 종이책으로 인쇄하거나 PDF로 영구 소장할 수 있습니다.',
        figs: [archive_booklet_tab],
        captions: ['그림 6: 교환일기 단행본 소책자(Booklet) 뷰어 및 좌우 페이지 독서·모바일 PDF 인쇄 인터랙션']
      },
      {
        title: '온기 기온(-20°C ~ 40°C) 추이 그래프 & 월간 교환 통계 리포트',
        desc: '두 사람의 편지 교환 주기, 누적 단어 수, 3대 관문 클리어 통계와 함께 사계절 기온 메타포로 측정된 편지별 온기 온도(-20°C ~ 40°C)의 시계열 변화 추이를 꺾은선 차트와 월간 리포트(Recap)로 시각화한 종합 통계입니다.',
        figs: [archive_report_tab],
        captions: ['그림 7: 둘만의 온기 기온 변화 추이 그래프 및 Gemini 월간 온기 리포트(Recap)']
      },
      {
        title: '전체 교환일기 타임라인 리스트 & 인라인 뷰어',
        desc: '작성자(파트너/나), 작성 날짜, 통과한 관문 유형, E2EE 보안 뱃지 및 온기 온도 뱃지를 한눈에 확인하고 원하는 과거 편지를 즉각 열람할 수 있는 아카이브 리스트 뷰입니다.',
        figs: [archive_list_tab],
        captions: ['그림 8: 작성자·날짜·온도·E2EE 뱃지가 체계적으로 정리된 교환일기 타임라인 리스트']
      },
      {
        title: '인터랙티브 실기 녹화 데모 (Live Screen Recording Demo)',
        desc: '실제 웹 환경에서 편지 도착 알림 수신, 3초간 실링 왁스를 롱프레스하여 녹여내는 Web Audio 사운드와 파열 애니메이션, 편지지 열람 및 온기 지수 획득까지의 전체 사용자 플로우를 실시간 녹화한 데모 영상입니다.',
        figs: [warmth_demo],
        captions: ['그림 9: 3초 롱프레스 실링 왁스 파쇄 및 편지 열람 실시간 구동 녹화 (Live Screen Recording)']
      }
    ],
    conclusion: '온기(Warmth) 프로젝트는 단순한 감성 토이앱에 머무르지 않고, 실제 연인들이 매일 편지를 주고받으며 지속적으로 운영되는 라이브 프로덕션(Live Production) 프로덕트입니다. \'Google Gemini LLM 기반의 실시간 질문 생성과 다차원 감정 분석\', \'Three.js 3D 추억 유리병 물리 시뮬레이션\', \'E2EE 종단간 암호화 보안 아키텍처\', \'3초 롱프레스 실링 왁스 및 iOS Taptic Engine 햅틱 인터랙션\'을 유기적으로 융합했습니다. 사용자의 소재 고갈(Writer\'s Block) 문제를 지능형 AI로 해결하고, 정서적 교감을 시각적·촉각적 피지컬 경험으로 확장하여 디지털 프로덕트가 전달할 수 있는 유대감의 깊이를 극대화했습니다. 기획, 프롬프트 엔지니어링, 3D WebGL 및 오디오 엔진 설계, E2EE 보안, 풀스택 개발 및 앱스토어 준비까지 전 생애주기를 성공적으로 완결했습니다.'
  }
};
