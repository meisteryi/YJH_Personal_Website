import halligalli_1 from '../../assets/halligalli_1.png';
import halligalli_2 from '../../assets/halligalli_2.png';

export const halligalli = {
  id: 'halligalli',
  title: 'Online HalliGalli',
  subtitle: '실시간 멀티플레이 웹 기반 할리갈리 게임 / Real-time Web-Based Multiplayer HalliGalli Game',
  author: 'Joohyoung Yi',
  affiliation: 'Art & Technology, Sogang University',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/HalliGalli',
  page: 'https://meisteryi.github.io/HalliGalli/',
  tags: ['HTML5', 'CSS3', 'JavaScript', 'Firebase Realtime DB'],
  featuredImage: halligalli_1,
  abstract: 'Online HalliGalli는 실시간 멀티플레이어를 지원하는 정적 웹 기반 할리갈리 보드게임입니다. 싱글 플레이(인공지능 COM 대결, 3단계 난이도) 모드와 Firebase Realtime Database 기반의 멀티 플레이(PvP 방 만들기 및 대기실 매칭) 모드를 모두 탑재했습니다. 스탠다드 규칙 외에도 다양한 확장 카드가 포함된 익스텐디드 확장 규칙 모드를 지원하며, 동글동글하고 귀여운 레트로 웹 UI 테마로 플레이어 경험을 강화했습니다.\n\nOnline HalliGalli is a web-based, real-time multiplayer board game adaptation of HalliGalli. It features Single-player vs COM with 3 difficulty levels (reaction speeds) and Online Multiplayer PvP using Firebase Realtime Database for room creation, user ready states, and real-time syncing. The project implements both standard fruit rules and an extended game mode with custom card layouts, powered by a customized retro responsive CSS framework.',
  sections: {
    introduction: '보드게임 할리갈리의 빠른 속도감과 실시간 동기화를 웹 브라우저 환경에서 고스란히 재현하려 기획한 프로젝트입니다. 정적 웹 자원만으로 서버 유지 비용 없이 Firebase를 활용해 실시간 이벤트 전달과 방 폭파/입장 기능을 안정적으로 연동했습니다.\n\nThis project aims to reproduce the fast-paced gameplay and coordination of the classic HalliGalli board game on the web. Using standard client-side code coupled with Firebase, it delivers real-time synchronization, matchmaking, and clean UI transitions without dedicated server costs.',
    methodology: [
      {
        title: '실시간 동기화 및 Firebase (Real-time Syncing & Firebase Database)',
        desc: 'Firebase Realtime DB의 트랜잭션 및 오프라인 연동 기능을 활용해 실시간 멀티플레이어 대기방 생성, 유저의 준비(Ready) 상태 전송, 실시간 카드 뒤집기 및 벨 타종 판단 로직을 구축했습니다. 유저가 이탈하거나 게임이 폭파되었을 때 `onDisconnect` 이벤트를 이용해 방 데이터를 깔끔하게 회수합니다.\n\nWe utilize Firebase Realtime Database to synchronize client states. This includes host settings, ready indicators, card flips, and bell ringing timestamps. We attach `onDisconnect` listeners to safely remove stale room data when players lose connectivity.'
      },
      {
        title: '스탠다드 & 익스텐디드 게임 모드 (Standard & Extended Rule Sets)',
        desc: '어떤 과일이든 한 종류가 정확히 5개가 될 때 종을 쳐야 하는 기본 규칙과 함께, 특수 능력을 발휘하거나 과일 종류/수량 배치가 다른 확장 카드가 추가된 익스텐디드 모드를 모듈식 자바스크립트로 분리 구현했습니다.\n\nWe implement standard rules (ring when exactly five of a fruit is shown) alongside extended rules introducing altered card ratios and custom event effects, written in modular JavaScript files (`game.js`, `standard.js`, `extended.js`).'
      },
      {
        title: '반응형 디자인 및 테마링 (Responsive Retro UI Styling)',
        desc: '웹 스크롤 바를 없애고 모바일이나 데스크톱 브라우저 창 크기에 상관없이 항상 화면 비율이 고정되는 반응형 레이아웃을 구현했습니다. Black Han Sans와 Jua 구글 폰트를 연동하고 카드 애니메이션과 레트로 게임 요소를 CSS 변수로 테마화했습니다.\n\nWe styled the game using custom CSS stylesheets (`cards.css`, `buttons.css`, `layout.css`). It adjusts cleanly to different desktop and mobile browser dimensions and features retro typography styling.'
      }
    ],
    results: [
      {
        title: '로비 및 게임 시작 대기 화면 (Game Lobby Screen)',
        desc: '사용자는 스탠다드/익스텐디드 종류를 고르고, 싱글/멀티플레이 모드를 고른 뒤 닉네임과 함께 과일 프로필 아이콘을 지정해 대기방에 입장합니다.\n\nPlayers select a game type, choose single or multiplayer mode, set their nickname/profile icons, and wait in a customized game lobby.',
        figs: [halligalli_1],
        captions: ['Figure 1: Main start screen of Online HalliGalli with type options.']
      },
      {
        title: '실시간 게임 플레이 화면 (Real-time Gameplay Interface)',
        desc: '각 플레이어가 카드를 뒤집고 바닥에 깔린 카드를 실시간으로 인식하며, 5개가 되는 순간 종을 치는 긴장감 넘치는 보드게임 환경을 구현했습니다.\n\nGame interface representing active card piles, player deck statuses, and the central responsive bell button.',
        figs: [halligalli_2],
        captions: ['Figure 2: Active gameplay screen showing player card stacks and the central bell.']
      }
    ],
    conclusion: 'Online HalliGalli는 Firebase와 바닐라 JS의 결합만으로 뛰어난 실시간 네트워킹 게임을 구축할 수 있음을 증명했습니다. 향후 모바일 하이브리드 앱으로 패키징하여 모바일 마켓에 런칭할 예정입니다.\n\nOnline HalliGalli demonstrates that rich real-time browser experiences can be achieved efficiently using Firebase and vanilla JavaScript. Future plans include PWA packaging for mobile app stores.'
  }
};
