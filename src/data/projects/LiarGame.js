import liargame_1 from '../../assets/liargame_1.png';
import liargame_2 from '../../assets/liargame_2.png';
import liargame_3 from '../../assets/liargame_3.png';
import liargame_4 from '../../assets/liargame_4.png';
import liargame_5 from '../../assets/liargame_5.png';

export const liargame = {
  id: 'liargame',
  title: 'Liar Game',
  subtitle: '제미나이 API 기반의 지능형 제시어 생성 멀티플레이어 라이어 게임 / Gemini API-powered Intelligent Word Generator & Multiplayer Liar Game',
  author: 'Joohyoung Yi',
  affiliation: 'Art & Technology, Sogang University',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/Liar_game',
  page: '#',
  tags: ['Flutter', 'Gemini API', 'Riverpod', 'StateNotifier', 'Shared Preferences'],
  featuredImage: liargame_1,
  abstract: 'Liar Game은 모바일 한 대로 여러 명이서 즐길 수 있는 오프라인 파티 게임을 Google Gemini API와 연동하여 디지털화한 Flutter 기반 모바일 애플리케이션입니다. 매번 뻔하고 단조로운 단어 대신, 사용자가 직접 설정한 테마(예: 영화 제목, IT 기기, 디저트 등)와 난이도(쉬움, 보통, 어려움)에 맞추어 Gemini가 똑똑하고 연관도 높은 비밀 제시어 쌍과 힌트를 실시간으로 생성합니다. 일반적인 라이어 게임의 규칙뿐만 아니라, 라이어와 유사한 단어를 지급받아 서로를 라이어로 오해하게 만드는 \'스파이(바보) 모드\'와 잡힌 라이어가 제시어를 맞춰 역전할 수 있는 기회 등 다채로운 룰과 상태 변화가 부드러운 UI 애니메이션과 함께 제공됩니다.\n\nLiar Game is a Flutter-based mobile party application that digitalizes the classic offline social game for multiple players using a single device. By leveraging Google Gemini API, it replaces static word lists with dynamically generated, high-context word pairs and hints based on custom themes and difficulties. It features a pass-and-play flow with private card reveals, a standard Liar mode, a Spy (Fool) mode where the spy receives a deceptive, closely related alternative word, and a final guess comeback mechanism for caught liars.',
  sections: {
    introduction: '이 프로젝트는 친구나 가족들과 오프라인에서 모여 즐길 수 있는 라이어 게임을 한층 더 스마트하고 예측 불가능하게 만들기 위해 개발되었습니다. 기존 라이어 게임 앱들이 고정된 단어 데이터베이스를 사용하여 쉽게 질리는 한계를 해결하기 위해, 거대 언어 모델(LLM)을 게임 제시어 생성 엔진으로 도입하였습니다. 특히 한국어 텍스트 매칭의 미묘한 난이도 조절과 스파이 모드를 위한 유사 단어 매핑을 Gemini API 프롬프트 엔지니어링 및 Response Schema 지정을 통해 자동화하였습니다.\n\nThis project was developed to make offline social games more dynamic and unpredictable. To overcome the static word databases of existing apps, it introduces a Large Language Model (LLM) as an intelligent generation engine. It automates delicate difficulty grading and context-aware alternative word mapping for Spy Mode through structured Gemini API prompts and JSON Response Schemas.',
    methodology: [
      {
        title: 'Gemini API 기반 제시어 생성 & 스파이 모드 (Gemini API Word Generation & Response Schema)',
        desc: 'GenerativeModel에 JSON Schema를 지정하여 target_word(플레이어 제시어), alternative_word(스파이/바보 제시어), hint(공통 힌트)를 구조화된 형태로 받아옵니다. 사용자가 지정한 난이도(\'쉬움\'부터 \'어려움\'까지)와 테마에 맞는 자연스럽고 재미있는 단어 쌍을 프롬프트 엔지니어링을 통해 생성하고, 임시 503 오류나 서비스 지연에 대비해 gemini-3.5-flash부터 gemini-2.0-flash까지의 모델 회전(Fallback Rotation) 메커니즘을 적용했습니다.\n\nLeverages the Google Generative AI SDK with response schemas to fetch structured JSON data. It uses detailed prompts to align generated word pairs with selected difficulties and themes. It also implements an API resilience mechanism by rotating through multiple fallback Gemini models (from gemini-3.5-flash to gemini-2.0-flash) in case of high-demand errors.'
      },
      {
        title: '로컬 상태 및 점수 캐싱 (Riverpod & Local State Management)',
        desc: 'StateNotifier를 상속한 GameNotifier를 통해 게임의 전체 진행 단계(대기, 단어 생성, 카드 확인, 토론, 투표, 결과)를 리액티브하게 제어합니다. 플레이어별 이름 수정 기능과 게임 라운드 간 누적되는 점수를 메모리에 안전하게 유지하며, 사용자의 API 키는 Shared Preferences를 활용해 기기에 안전하게 암호화 및 영구 저장됩니다.\n\nUnified game states (setup, loading, card reveals, discussion, voting, results) are handled reactively via Riverpod StateNotifier. It caches custom player names and scores in memory between rounds while storing the Gemini API key securely in local device storage using SharedPreferences.'
      }
    ],
    results: [
      {
        title: '게임 설정 및 플레이어 구성 (Game Setup & Player Configuration)',
        desc: '플레이어 수(3~10명), 플레이어 이름 및 스코어 현황, 라이어 수, 게임 모드(일반/바보 모드), 그리고 제시어 난이도를 직관적이고 세련되게 설정할 수 있는 게임 설정 화면입니다.\n\nThe game configuration screen where players customize participant counts (3–10 players), manage custom player names and score tracking, specify the liar count, choose the game mode (Standard or Spy), and select the word difficulty.',
        figs: [liargame_1],
        captions: ['Figure 1: Main setup screen with options for player count, custom names, liar count, game mode, and difficulty setting.']
      },
      {
        title: '지능형 제시어 생성 (Gemini API Word Generation)',
        desc: '원하는 제시어 주제(예: 과일 등)를 선택적으로 입력하면, Google Gemini API가 작동하여 주제와 난이도에 부합하는 똑똑하고 연관도 높은 단어를 실시간으로 생성하는 로딩 화면입니다.\n\nThe loading screen displaying the background process of calling the Google Gemini API to dynamically generate contextually relevant, high-quality secret words and alternative words based on the optional theme and difficulty.',
        figs: [liargame_2],
        captions: ['Figure 2: Gemini API integration screen dynamically generating unique secret words based on the chosen theme.']
      },
      {
        title: '보안형 제시어 카드 확인 (Pass & Play Card Reveal)',
        desc: '모바일 기기 한 대를 번갈아 사용하며 각자의 제시어를 확인하는 보안 스크린입니다. 주변 사람이 단어를 보지 못하도록 터치하여 카드를 뒤집을 수 있는 직관적인 UI를 제공합니다.\n\nThe secure pass-and-play role reveal screen where players take turns holding the device to tap and temporarily flip the card, checking their assigned secret word without exposing it to others.',
        figs: [liargame_3],
        captions: ['Figure 3: Pass-and-play screen allowing players to securely tap and reveal their secret word in private.']
      },
      {
        title: '토론 단계 및 추천 발언 순서 (Discussion Phase & Order Recommendation)',
        desc: '모든 플레이어가 제시어를 확인한 후 토론을 진행하는 화면입니다. 각자 15초 내외로 모호하게 제시어를 설명할 수 있도록 돕고, 공정하고 유기적인 흐름을 위해 추천 발언 순서를 동적으로 제시합니다.\n\nThe discussion phase guide screen that prompts players to describe their secret words within 15 seconds. It displays a randomized recommended turn order to encourage a fair and structured debate.',
        figs: [liargame_4],
        captions: ['Figure 4: Discussion phase screen with suggested speaking order and citizen/liar game tips.']
      },
      {
        title: '라이어 지목 투표 (Liar Voting Phase)',
        desc: '토론 종료 후 플레이어들이 상의하여 가장 의심스러운 용의자를 투표하고 지목하는 화면입니다. 플레이어별 카드 레이아웃을 통해 직관적으로 지목하여 정체를 공개할 수 있습니다.\n\nThe interactive voting screen where players collectively decide and select the suspected liar player. Tapping a player\'s card registers the vote before revealing their identity.',
        figs: [liargame_5],
        captions: ['Figure 5: Voting interface to select and accuse the suspected liar player.']
      }
    ],
    conclusion: 'Liar Game은 Gemini API의 유연한 텍스트 생성 능력과 Flutter의 기민한 상태 제어 및 크로스플랫폼 생산성을 결합하여 완성된 디지털 파티 게임입니다. API 자동 Fallback 아키텍처와 로컬 디바이스 영구 저장 설정을 결합하여 전 세계 어디서든 유연하게 작동할 수 있으며, 향후 로컬 블루투스/Wi-Fi 멀티플레이어 또는 온라인 웹 로비 기능으로의 확장을 목표로 하고 있습니다.\n\nLiar Game demonstrates a smooth, highly interactive mobile application by integrating Gemini API\'s text generation with Flutter\'s reactive state models. Combined with resilient model fallbacks and state caching, it delivers an engaging party game experience. Future updates will focus on local Bluetooth/Wi-Fi multiplayer lobbies and online room systems.'
  }
};
