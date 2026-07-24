import React, { useState, useEffect, useRef } from 'react';
import { X, BookOpen, Cpu, BarChart2, Award, ArrowUpRight, Zap, Play, CheckCircle, Globe } from 'lucide-react';

// Import project figures (SHEN & mus)
import SHEN_fig_1 from '../assets/SHEN_fig_1.png';
import SHEN_fig_2 from '../assets/SHEN_fig_2.png';
import SHEN_fig_3 from '../assets/SHEN_fig_3.png';
import SHEN_fig_4 from '../assets/SHEN_fig_4.png';
import SHEN_fig_5 from '../assets/SHEN_fig_5.png';
import SHEN_fig_6 from '../assets/SHEN_fig_6.png';

import mus_fig_1 from '../assets/mus_fig_1.png';
import mus_fig_2 from '../assets/mus_fig_2.png';
import mus_fig_3 from '../assets/mus_fig_3.png';
import mus_fig_4 from '../assets/mus_fig_4.png';
import mus_fig_5 from '../assets/mus_fig_5.png';
import mus_fig_6 from '../assets/mus_fig_6.png';

// Import new project figures (AI Football Scouter)
import scout_report_fig_1 from '../assets/scout_report_fig_1.png';
import scout_report_fig_13 from '../assets/scout_report_fig_13.png';
import scout_slides_fig_17 from '../assets/scout_slides_fig_17.png';
import scout_slides_fig_18 from '../assets/scout_slides_fig_18.png';
import scout_slides_fig_22 from '../assets/scout_slides_fig_22.png';
import scout_slides_fig_25 from '../assets/scout_slides_fig_25.png';

// Import TabiLenS screenshots
import tabilens_1 from '../assets/tabilens_1.png';
import tabilens_2 from '../assets/tabilens_2.png';
import tabilens_3 from '../assets/tabilens_3.png';

// Import HalliGalli screenshots
import halligalli_1 from '../assets/halligalli_1.png';
import halligalli_2 from '../assets/halligalli_2.png';

// Import Unseen Map Explorer preview
import unseenmap_1 from '../assets/unseenmap_1.png';
import gachatodo_preview from '../assets/gachatodo_preview.png';
import gachatodo_1 from '../assets/gachatodo_1.png';
import gachatodo_2 from '../assets/gachatodo_2.png';
import gachatodo_3 from '../assets/gachatodo_3.png';
import gachatodo_4 from '../assets/gachatodo_4.png';
import gachatodo_5 from '../assets/gachatodo_5.png';

// Import YENA Fanpage figures
import yena_fanpage_profile from '../assets/yena_fanpage_profile.jpg';
import yena_smiley_albumcover from '../assets/yena_smiley_albumcover.jpg';
import yena_smartphone_albumcover from '../assets/yena_smartphone_albumcover.jpg';
import yenalogo_pink from '../assets/yenalogo_pink.png';

// Import Photo Exhibition screenshots
import photo_exhibition_1 from '../assets/photo_exhibition_1.png';
import photo_exhibition_2 from '../assets/photo_exhibition_2.png';
import photo_exhibition_3 from '../assets/photo_exhibition_3.png';

export const projectsData = {
  photoexhibition: {
    id: 'photoexhibition',
    title: 'Photo Exhibition',
    subtitle: '감성적인 사진 전시회 & 아카이브 웹 서비스 / Editorial Photography Exhibition & Archive Service',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@gmail.com',
    link: 'https://github.com/meisteryi/PhotoExhibition',
    page: '#',
    tags: ['React', 'exifreader', 'CSS Variables', 'Responsive Grid', 'UX/UI'],
    abstract: 'Photo Exhibition은 사진 촬영 시 함께 메타데이터로 저장되는 EXIF 정보를 자동으로 추출하여 에세이와 함께 전시하는 예술적 온라인 아카이브 플랫폼입니다. 반응형 메이슨리 그리드 레이아웃을 통해 자유롭게 사진들을 탐색하고, 감성적인 모노그래프 모드를 통해 사진들을 한 장씩 몰입하여 감상할 수 있습니다. 또한, 사용자는 모바일 기기 터치 및 PC 마우스 휠을 통해 직관적이고 부드러운 스냅 스크롤링과 더블 탭 하트 리액션을 경험할 수 있습니다.\n\nPhoto Exhibition is an editorial online archive platform that automatically extracts EXIF metadata from uploaded images and showcases them alongside personal essays. Users can explore photos through a responsive masonry grid or immerse themselves in a monograph presentation mode that snaps vertically with custom ease-in-out scroll controllers. It also features client-side image uploading, administrative content management, and a physics-inspired radiating heart reaction system.',
    sections: {
      introduction: '이 프로젝트는 아티스트이자 개발자로서, 일상의 찰나들을 포착한 사진 데이터와 그 이면의 생각(에세이)들을 웹상에서 가장 세련되고 몰입감 있는 레이아웃으로 표현하기 위해 기획되었습니다. EXIF 정보를 직접 파싱하여 작품의 무드를 결정짓는 기술적 세부사항을 투명하게 노출하고, 갤러리 관람 경험과 유사한 전시 모드를 구축하였습니다.\n\nThis project was conceived to present daily photography captures alongside personal reflections (essays) in the most refined and immersive layout on the web. By parsing and displaying EXIF metadata, it offers a transparent view of the technical choices behind each mood, replicating a physical gallery observation experience.',
      methodology: [
        {
          title: 'EXIF 메타데이터 파싱 (EXIF Metadata Extraction via exifreader)',
          desc: '`exifreader` 라이브러리를 사용해 사진 파일이 보유한 노출 시간, 조리개 값, 카메라 제조사 및 모델, 렌즈 초점 거리, ISO 값, GPS 좌표 등의 촬영 데이터를 클라이언트 측에서 즉시 추출하여 전시 카드 정보로 구조화합니다.\n\nLeveraged the `exifreader` package to dynamically extract internal camera metadata: exposure time, aperture, ISO, camera make/model, lens specification, and location coordinates directly inside the client on image upload.',
          fig: photo_exhibition_3,
          caption: '그림 1: 업로드된 이미지에서 추출된 상세 EXIF 메타데이터 뷰어 모달.\n\nFigure 1: Detailed EXIF metadata viewer modal extracted from uploaded images.'
        },
        {
          title: '모노그래프 스냅 스크롤링 및 인터랙션 (Monograph View Snap Scrolling & Physics Hearts)',
          desc: '1. `requestAnimationFrame`과 `easeInOutCubic` 이징 함수를 활용한 커스텀 스크롤 글라이더를 제작하여 부드러운 페이지 스냅 전환 효과를 부여했습니다.\n2. `HeartButton` 컴포넌트는 사용자의 클릭 시 방사형으로 날아가는 8개의 입자 하트 애니메이션(CSS custom variables 및 keyframe 연동)을 트리거합니다.\n\n1. Implemented a custom scroll glider leveraging `requestAnimationFrame` and an `easeInOutCubic` easing utility to provide smooth vertical snap slide transitions.\n2. Features a physics-inspired `HeartButton` component triggering radiating heart particles driven by CSS custom property mappings and keyframe animations.',
          fig: photo_exhibition_2,
          caption: '그림 2: 세로 스냅 스크롤 및 감성적 타이포그래피가 적용된 모노그래프 전시 모드.\n\nFigure 2: Monograph view mode with vertical snap scrolling and editorial typography.'
        }
      ],
      results: [
        {
          title: '아카이브 메이슨리 그리드 및 관리 모드 (Archive Masonry & Manager Mode)',
          desc: '반응형 메이슨리 그리드를 구성하여 가로세로 비율이 서로 다른 사진들을 고르게 레이아웃하고 마우스 호버 시 촬영 정보 요약을 오버레이로 제공합니다. 또한 비밀번호로 보호된 관리자 모드(기본값: admin)에서 카테고리를 편집하거나 사진을 삭제하고, EXIF 정보와 함께 에세이를 업로드할 수 있습니다.\n\nConstructed a responsive masonry grid that cleanly floats photos with varying aspect ratios. In addition, an admin dashboard protected by a verification key (default: admin) permits category renaming/deletion, photo removal, and upload logs integrated with real-time parsed EXIF cards.',
          fig: photo_exhibition_1,
          caption: '그림 3: 반응형 카테고리 필터와 메이슨리 레이아웃이 연동된 아카이브 메인 그리드.\n\nFigure 3: Main archive grid integrating responsive category filters and masonry layout.'
        }
      ],
      conclusion: 'Photo Exhibition은 바닐라 CSS의 자유도 높은 스타일링과 React의 모듈식 상태 머신을 융합하여 개발된 하이엔드 온라인 사진 전시 플랫폼입니다. 로컬 스토리지를 활용한 데이터 동기화와 최적화된 모바일 반응형 터치 인터랙션을 결합하여 사용자에게 오프라인 갤러리 이상의 깊이 있는 감상 경험을 제공합니다.\n\nThe Photo Exhibition integrates modular React architecture with clean vanilla CSS variables. By combining LocalStorage database updates with tailored touch event bindings, it serves as a high-fidelity virtual showroom delivering an interactive, deeply personal artwork review platform.',
    }
  },
  tabilens: {
    id: 'tabilens',
    title: 'TabiLenS',
    subtitle: '실시간 다국어 메뉴판 번역 및 주문 도우미 서비스 / Real-time Multilingual Menu Translator & Ordering Assistant',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@gmail.com',
    link: 'https://github.com/meisteryi/TabiLenS',
    page: 'https://meisteryi.github.io/TabiLenS/',
    tags: ['Flutter', 'Riverpod', 'Gemini API', 'TTS', 'Shared Preferences'],
    abstract: 'TabiLenS는 해외를 여행하는 다양한 국가의 여행자들이 메뉴판이나 간판을 읽을 때 겪는 언어적·문화적 장벽을 해소하기 위해 개발된 Flutter 기반의 멀티플랫폼 앱입니다. 단순히 기계적인 텍스트 번역을 넘어 Gemini 2.5 Flash를 통한 지능형 OCR 영역 검출 및 터치 매핑, 음식 유래/재료/알레르기 정보를 다루는 식문화 가이드 제공, 그리고 상황별 맞춤형 문장 생성 및 TTS 오디오 원어민 발음 기능을 제공합니다. 특히 출발 언어와 대상 언어 모두 완벽한 다국어(영어, 일본어, 중국어, 스페인어, 한국어, 프랑스어 등)를 지원하며, 국가 간 상호 번역(타국어-타국어 포함)을 지원하여 전 세계 여행자들의 소통을 돕습니다.\n\nTabiLenS is a Flutter-based cross-platform (Android / iOS / Web) application designed to assist global travelers from various countries by translating menus and signs in foreign destinations. It goes beyond simple literal translation by using Gemini 2.5 Flash for high-speed OCR bounding-box detection, providing detailed guides on local food culture (ingredients, allergies, origins, dining tips), and dynamically generating custom ordering sentences with native Text-to-Speech (TTS) and pronunciation guides. Specifically, it features fully localized multilingual support for both input and output target languages (including English, Japanese, Chinese, Spanish, Korean, and French), enabling seamless cross-translation for travelers worldwide.',
    sections: {
      introduction: '해외 현지 식당의 세로쓰기, 손글씨 메뉴판 및 낯선 식문화 정보는 전 세계 여행객들에게 큰 진입장벽입니다. TabiLenS는 단순한 직역 번역기가 아닌, 친절한 다국어 식문화 안내서이자 대화형 주문 도우미로서 다양한 국가의 여행자들이 전 세계 어디서나 자신감 있게 식사할 수 있도록 돕습니다.\n\nNavigating local restaurants in foreign countries can be a major hurdle for global travelers due to handwritten fonts, unique vertical writing formats, and a lack of visual food illustrations. TabiLenS was created to solve this problem. It acts as both a multilingual cultural food guide and an interactive ordering assistant, giving travelers from different countries the confidence to dine like locals anywhere by providing comprehensive context instead of word-for-word machine translation.',
      methodology: [
        {
          title: 'OCR & 영역 좌표 매핑 (OCR & Bounding Box Coordinates Mapping)',
          desc: 'Google Gemini 2.5 Flash API를 활용하여 이미지 속 일본어 텍스트와 2D 영역 좌표를 검출합니다. EXIF 회전각 자동 정렬 보정 전처리 모듈 및 안전 여백(Padding Margin) 처리를 추가하여, 모바일 화면에서 터치 좌표가 어긋나거나 잘리지 않는 매끄러운 텍스트 블록 오버레이를 구현했습니다.\n\nWe leverage the Google Gemini 2.5 Flash API to analyze captured menu images. Gemini returns detected Japanese text blocks along with their 2D coordinate bounding boxes. To ensure smooth mapping, we developed EXIF Rotation Correction and Boundary Safe Margin Padding.'
        },
        {
          title: '동적 주문 문장 생성 & TTS (Dynamic Speech Generation & flutter_tts)',
          desc: '사용자가 탭하여 선택한 메뉴 이름을 기반으로 일본어 핵심 주문 템플릿(예: "~ 하나 주세요", "~에서 와사비는 빼주세요")에 동적으로 조립하고 한글 발음 표기를 제공합니다. `flutter_tts` 라이브러리를 통해 네이티브 음성 출력을 지원하여 점원에게 쉽게 원어 발음으로 의사를 전달할 수 있습니다.\n\nOnce the user selects a menu item, the app integrates the translated dish name into situational Japanese ordering templates. It generates phonetic Korean guides and utilizes the `flutter_tts` package to play native Japanese audio directly, helping users communicate with staff.'
        },
        {
          title: '상태 관리 및 로컬 영구 저장 (State Management & Local Persistence)',
          desc: 'Riverpod을 활용해 촬영, 이미지 분석, 즐겨찾기 폴더 등의 상태를 유기적으로 동기화합니다. 사용자가 이모지별로 직접 커스터마이징하여 만든 북마크 리스트와 최근 히스토리는 `shared_preferences`를 사용하여 디바이스 내부에 로컬 영구 저장되므로 인터넷 환경이 열악한 여행지에서도 끊김 없이 유실 없는 기능을 제공합니다.\n\nWe adopted Flutter Riverpod for unified state management across scanning, translating, and bookmarking. User histories and customizable emoji-categorized bookmark folders are persisted locally using `shared_preferences` for reliable offline utilization during travel.'
        }
      ],
      results: [
        {
          title: '여행 국가 선택 화면 (Country Selection Interface)',
          desc: '앱 초기 실행 또는 설정 시 사용자가 여행 중인 국가(예: 일본)를 선택하여 번역 엔진 및 현지 식문화 가이드 데이터를 맞춤형으로 활성화하는 시작 화면입니다.\n\nThe startup screen where users select their current travel destination (e.g., Japan) to dynamically configure the OCR translation database and dining guidelines accordingly.',
          figs: [tabilens_1],
          captions: ['Figure 1: Country selection screen to customize translation databases and local culture guides.']
        },
        {
          title: '카메라 스캔 및 이미지 불러오기 (Menu Scanner Dashboard)',
          desc: '일본어 메뉴판 번역을 위해 모바일 카메라로 직접 촬영하거나 기기에 저장된 갤러리 이미지에서 사진을 선택하여 텍스트 분석을 요청할 수 있는 기능입니다.\n\nThe main scanner dashboard providing immediate actions: snapping a live photo of a Japanese menu or importing an image from the photo gallery for analysis.',
          figs: [tabilens_2],
          captions: ['Figure 2: Scan dashboard presenting direct camera capture or gallery import options.']
        },
        {
          title: '식문화 해설 및 주문 도우미 결과 화면 (Food Culture Guide & Order Assistant Details)',
          desc: 'Gemini OCR 분석 결과를 기반으로 요리의 이름뿐 아니라 유래, 포함 식재료, 알레르기 유발 물질 같은 문화적 해설을 제공합니다. 또한 현지 주문용 실전 템플릿 문장 및 TTS 원어민 발음 기능이 탑재되어 실제 주문 시 소통을 돕습니다.\n\nThe detailed analysis output containing OCR text translation alongside contextual food explanations (origin, ingredients, allergen info). It also generates situational ordering templates in Japanese with native Text-to-Speech (TTS) voice playback.',
          figs: [tabilens_3],
          captions: ['Figure 3: Translation detail showing cultural explanation, ingredient breakdown, and audio speech synthesis.']
        }
      ],
      conclusion: 'TabiLenS는 Flutter의 하이브리드 생산성과 Gemini의 고속 멀티모달 능력을 성공적으로 융합한 실제 여행 유틸리티입니다. 현지 컨텍스트에 맞춤화된 설명과 주문 보조 기능을 제공합니다. 현재 영어, 일본어, 중국어, 스페인어, 한국어, 프랑스어 간의 상호 번역(타국어-타국어 포함)을 지원하며, 향후 오프라인 사전 데이터베이스 내장 및 더 폭넓은 다국어 지원 확장을 계획 중입니다.\n\nTabiLenS successfully implements a highly responsive travel utility. By combining Flutter\'s cross-platform UI rendering with Gemini\'s multimodal capabilities, it delivers contextual translation and conversational assistance. It currently supports cross-translation among English, Japanese, Chinese, Spanish, Korean, and French (including foreign-to-foreign pairs). Future updates will focus on fully offline translation dictionaries and expanding supported language models.'
    }
  },
  gachatodo: {
    id: 'gachatodo',
    title: 'Gacha To-Do',
    subtitle: '할 일 완료로 모으는 코인과 픽셀 아쿠아리움 방치형 육성 게임 / Pixel Aquarium Idle Game Integrated with To-Do List',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@gmail.com',
    link: 'https://github.com/meisteryi/Gachagame_todo',
    page: 'https://meisteryi.github.io/Gachagame_todo/',
    tags: ['Flutter', 'ValueNotifier', 'Shared Preferences', 'Pixel Art', 'State Management'],
    abstract: '가챠 투두(Gacha To-Do)는 일상적인 할 일 관리(To-Do List)에 가챠(Gacha)와 방치형 육성 요소를 결합하여 지속적인 동기부여를 제공하는 Flutter 기반 모바일 애플리케이션입니다. 할 일을 완료해 획득한 코인으로 20여 종의 독특한 픽셀 물고기와 10여 종의 다채로운 수초를 수집하고 수조를 취향껏 인테리어할 수 있습니다. 일일/주간 미션, 먹이 주기와 영양제를 활용한 물고기 육성, 고유 ID 기반 클라우드 백업 시스템을 제공하며, 한국어, 영어, 일본어, 스페인어의 4개국 다국어를 전면 탑재했습니다.\n\nGacha To-Do is a Flutter-based mobile application that combines task management with gacha collection and idle aquarium decoration mechanics to keep users motivated. Completing to-do tasks rewards coins that players spend to roll gacha for 20+ pixelated fish types and 10+ aquatic plants. Users can arrange plants via interactive drag-and-drop, nurture fish (level up, special color modes), fulfill daily/weekly goals, and secure data using a quick alphanumeric cloud backup. The app fully implements native translation support for Korean, English, Japanese, and Spanish.',
    sections: {
      introduction: '가챠 투두는 따분한 일상 작업 관리에 귀여운 픽셀 아쿠아리움 꾸미기 게임을 결합하여, 유저에게 보상 중심의 지속 가능한 동기부여를 제공하려는 목표로 시작되었습니다. Flutter의 유연한 그래픽 엔진을 통해 매끄러운 픽셀 그래픽 렌더링과 드래그 앤 드롭 인테리어 에디터를 모바일 디바이스에 최적화했습니다.\n\nGacha To-Do was conceived to transform the routine chores of task management into a playful, reward-driven experience. By combining a gamified pixel aquarium with standard to-do features, the app gives users a cute, visual incentive to stay organized. Using Flutter\'s responsive UI engine, we optimized pixel graphics rendering and interactive decoration widgets directly for mobile devices.',
      methodology: [
        {
          title: '드래그 앤 드롭 수초 배치 및 물리 생태 알고리즘 (Interactive Decoration & Fish Ecosystem Physics)',
          desc: '획득한 수초 오브젝트를 드래그 앤 드롭하여 배치하거나 더블 탭으로 제거할 수 있는 직관적인 수조 편집 모드를 구축했습니다. 물고기 캐릭터들은 디바이스 크기에 맞게 가속도와 마찰력이 반영된 랜덤 바운싱 수중 유영 알고리즘(Bouncing Physics)을 적용받아 살아 움직이는 아쿠아리움 생태를 묘사합니다.\n\nWe designed an interactive aquarium decoration system where users drag and drop aquatic plants or double-tap to delete objects. The fish character models run on a custom aquatic locomotion script that dynamically calculates boundary bouncing, acceleration, and friction relative to the screen dimensions to simulate natural aquatic movements.'
        },
        {
          title: '반응형 로컬 상태 연동 및 영구 저장 (Reactive Local State & Shared Preferences)',
          desc: '별도의 복잡한 상태 관리 라이브러리 없이, ValueNotifier와 Custom ThemeManager를 결합하여 테마 전환, 코인 변동, 물고기 경험치 상태를 고성능으로 동기화했습니다. 획득한 아이템 데이터와 할 일 히스토리는 shared_preferences 패키지를 이용해 영구적으로 기기 내에 보존됩니다.\n\nTo maintain lightweight efficiency, we implemented native ValueNotifiers combined with a Custom ThemeManager for lightweight state synchronization of coin balances, items, and experience points. All collected items, fish levels, and checklist history are stored locally using the shared_preferences package.'
        },
        {
          title: '알파뉴메릭 고유 ID 기반 클라우드 백업 (Alphanumeric ID Cloud Save API)',
          desc: '복잡한 소셜 로그인 연동 없이, 유저마다 발급되는 알파뉴메릭 난수 고유 ID를 키값으로 사용해 수조 정보와 컬렉션 데이터셋을 클라우드 서버에 저장하고 복원할 수 있는 http API 통신 파이프라인을 구축하여 사용자 편의성을 극대화했습니다.\n\nTo ensure privacy and easy data mobility, we built a server-side JSON backup pipeline using HTTP REST APIs. Users can generate a unique alphanumeric backup ID, allowing them to upload and download their current inventory, aquarium arrangements, and history without requiring complex social registration processes.'
        }
      ],
      results: [
        {
          title: '가챠 머신 화면 (Gacha Machine Interface)',
          desc: '할 일을 완료해 모은 코인을 사용하여 새로운 물고기나 수초를 뽑는 가챠 머신 화면입니다. 1회 뽑기(1 코인)와 10회 연속 뽑기(10 코인)를 지원하며, 슬롯이 돌아가는 형태의 릴(Reel) 회전 애니메이션 연출(slot_machine.dart)을 통해 뽑기의 몰입감을 높였습니다. 화면 상단에는 먹이 개수와 현재 보유 코인이 실시간으로 업데이트되어 표시됩니다.\n\nThe gacha machine interface where users spend earned coins to draw fish or plants. It supports single draw (1 coin) and 10-consecutive draws (10 coins) with custom spinning reel animations (slot_machine.dart). The top dashboard displays real-time updates for coins and fish food.',
          figs: [gachatodo_1],
          captions: ['Figure 1: Custom pixel-style gacha machine with spin animations and coin-drawing mechanics.']
        },
        {
          title: '할 일 관리 화면 (To-Do List Interface)',
          desc: '날짜별 할 일(To-Do) 목록을 생성, 수정 및 완료 처리할 수 있는 할 일 관리 화면입니다. 당일 완료한 작업 비중에 따라 상단의 오늘의 달성률 프로그레스 바가 차오르며, 우측 하단의 추가(+) 버튼으로 세부 정보(시간, 알림 설정, 장소, 메모 등) 및 카테고리를 분류해 등록할 수 있습니다.\n\nThe to-do list manager supporting task creation, edits, and completions. A visual progress bar at the top displays the daily completion rate. The bottom-right add (+) button allows registering detailed tasks (including category, alarm time, location, and memos) and switching dates.',
          figs: [gachatodo_2],
          captions: ['Figure 2: Daily task planner with completion rate tracking and customized task categories.']
        },
        {
          title: '아쿠아리움 수조 화면 (My Aquarium Sandbox)',
          desc: '획득한 물고기들과 수초들로 나만의 수조를 자유롭게 가꾸는 메인 아쿠아리움 화면입니다. 수초는 드래그 앤 드롭 편집 모드를 통해 원하는 좌표에 자유롭게 배치하거나 더블 탭으로 제거할 수 있으며, 물고기는 가속도와 마찰력이 적용된 무작위 유영 알고리즘에 따라 돌아다닙니다. 먹이 투여를 통해 레벨업(Lv.Max 5)하거나 영양제를 사용해 경험치 버프를 줄 수 있습니다.\n\nThe sandbox aquarium dashboard where collected fish and plants are arranged. Seaweed objects can be positioned via drag-and-drop decoration mode or removed via double-tap, while fish swim using custom boundary-collision physics. Users can feed fish to level up (up to Lv.5) or apply supplement buffs.',
          figs: [gachatodo_3],
          captions: ['Figure 3: Interactive aquarium dashboard with custom swim physics, decoration editors, and level-up systems.']
        },
        {
          title: '미션 및 퀘스트 화면 (Daily Quests & Missions)',
          desc: '출석체크, 가챠 실행, 물고기 먹이 주기, 특정 개수 이상의 투두 완료 등 매일 00시에 자동 리셋되는 일일 퀘스트와 연속 출석 등의 주간 미션을 추적하는 화면입니다. 조건 충족 시 비활성화되어 있던 \'보상 받기\' 버튼이 활성화되며, 누르면 코인, 먹이, 영양제 등의 인게임 아이템 보상이 지급됩니다.\n\nThe quest tracker displaying daily/weekly achievements (e.g., attendance checks, daily tasks, feeding). When requirements are met, the \'Claim Reward\' button activates, granting in-game rewards like coins, food, and supplements.',
          figs: [gachatodo_4],
          captions: ['Figure 4: Automated daily quest dashboard rewarding tasks like gacha rolls and fish feeding.']
        },
        {
          title: '아이템 상점 카테고리 화면 (Item Shop Categories)',
          desc: '가챠(동물/수초 뽑기)와 소모품(먹이/영양제 상점), 수조 내부 데코 장식물 상점 등 다양한 인게임 물품을 구매할 수 있는 상점 카테고리 진입 화면입니다. 각 카테고리 카드별로 고유 픽셀 아트 아이콘이 렌더링되며, 업데이트 예정인 슬롯에는 자물쇠가 달린 비활성 아이콘(Locked)이 표현됩니다.\n\nThe main shop navigation menu categorized into Animal Gacha, Seaweed Gacha, Feed/Supplements, and Decorations. Each item shop features custom pixel art icons, with locked cards placeholder-staged for future item updates.',
          figs: [gachatodo_5],
          captions: ['Figure 5: In-game store catalog grouping fish/plant drawing modules and consumable items.']
        }
      ],
      conclusion: '가챠 투두는 생산성 도구에 게임 요소를 정교하게 이식한 게이미피케이션(Gamification) 프로젝트입니다. 향후 사운드 효과 삽입, 물고기 간의 상호작용 인공지능 강화, 소셜 수조 공유 기능 도입을 통해 지속적인 사용자 경험 확장을 노리고 있습니다.\n\nGacha To-Do represents a successful implementation of gamification in task management. By introducing collection rewards, it encourages consistent daily planning. Future iterations will focus on background music integration, fish-to-fish interactions, and social aquarium sharing.'
    }
  },
  unseenmap: {
    id: 'unseenmap',
    title: 'Unseen Map Explorer',
    subtitle: 'EXIF 기반 여행 경로 시각화 및 미개척 골목 POI 탐색 서비스 / EXIF-Based Trip Route Visualization & Unvisited Alley Explorer',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@gmail.com',
    link: 'https://github.com/meisteryi/FindAnUnknownPlace',
    page: 'https://meisteryi.github.io/FindAnUnknownPlace/',
    tags: ['Leaflet.js', 'exifr', 'Overpass API', 'Vanilla JS', 'CSS Animations'],
    abstract: 'Unseen Map Explorer는 사용자가 업로드한 다중 사진에서 EXIF GPS 메타데이터를 추출해 개별 여행 좌표로 변환하고 클러스터링(MarkerCluster) 기법으로 시각화합니다. 나아가 현재 지도상의 방문 지역을 300m x 300m의 동적 가상 그리드로 분할하여, 이미 방문한 그리드와 인접하지만 아직 가보지 않은 \'프론티어(Frontier) 미개척 그리드\'를 실시간으로 계산합니다. 그 후 Overpass API를 통해 해당 미개척 그리드 내부의 카페, 음식점, 베이커리 등 POI 데이터를 동적으로 쿼리하여 사용자에게 추천하며, 지도상의 경로가 애니메이션 형태로 뻗어나가는 커스텀 SVG 경로 연출을 더해 탐색의 흥미를 배가시킵니다.\n\nUnseen Map Explorer is a Leaflet-based interactive web map system that parses photo EXIF GPS data to overlay trip history. It uses a grid-based frontier exploration algorithm (300m x 300m tiles) to determine visited areas, and queries the OpenStreetMap Overpass API dynamically to recommend hidden local POIs in unvisited alleys. It features customized SVG route extending animations to enhance user exploration experiences.',
    sections: {
      introduction: '이 프로젝트는 여행 사진이라는 흔한 자원에서 위치 정보를 추출해 개인만의 디지털 지도를 생성하고, 더 나아가 \'내가 아직 걷지 않은 길과 장소\'를 시각적으로 제안하여 색다른 지역 탐색 경험을 유도합니다. 클라이언트 사이드 기술과 오픈소스 지도 API를 효과적으로 조율하여 별도의 고비용 서버 인프라 없이도 강력한 인터랙티브 공간 분석을 수행합니다.\n\nThis project extracts geographical data from user photos to construct a personalized digital travel map. It actively guides users to discover unchartered territory by recommending unvisited adjacent areas, providing an immersive local discovery experience without requiring high backend server maintenance costs.',
      methodology: [
        {
          title: 'EXIF 메타데이터 파싱 및 자동 좌표 보정 (EXIF Parsing & Auto-Correction)',
          desc: '사용자가 여러 장의 사진을 업로드하면, exifr 라이브러리를 사용해 로컬 브라우저 환경에서 메타데이터를 즉시 파싱합니다. 위도, 경도 정보가 포함되지 않았거나 유실된 사진은 자동으로 필터링하며, GPS 데이터가 존재하는 항목만 지도 위의 타임라인과 마커 클러스터로 매핑합니다.\n\nWe parse multi-image uploads directly in the browser using the exifr library. Photos without valid GPS coordinates are filtered out, and valid coordinate pairs are plotted onto the map via MarkerCluster plugins.'
        },
        {
          title: '그리드 기반 프론티어 및 인접 셀 탐색 알고리즘 (Grid-Based Frontier Detection)',
          desc: '사용자의 방문지를 기하학적 블록(약 300m 크기) 단위의 그리드로 매핑합니다. 방문한 그리드 셀의 상하좌우 인접 그리드 중 방문 흔적이 없는 셀들을 \'미개척지(Frontier)\'로 식별합니다. 사용자가 탐색 버튼을 누르면 이 미개척 영역 내부를 중심으로 분석 범위가 지정됩니다.\n\nWe divide the active viewport into 300m x 300m cells. Using coordinates from the uploaded photos, cells containing visited spots are flagged. We then run a frontier search algorithm to locate adjacent unvisited cells, which serve as target boundaries for our local discovery query.'
        },
        {
          title: 'OSM Overpass API 동적 POI 쿼리 & SVG 애니메이션 (OSM Overpass API & SVG Route Animations)',
          desc: 'OpenStreetMap의 Overpass API를 활용하여 미개척지 그리드 경계 상자(Bounding Box) 내부의 음식점, 카페 등의 노드(node) 데이터를 실시간으로 수집합니다. 추천된 장소로 향하는 길은 stroke-dashoffset을 활용한 SVG 선 확장 애니메이션으로 표현되어 시각적 몰입감을 줍니다.\n\nUsing the Overpass API, the system queries OpenStreetMap nodes (restaurants, cafes, bakeries) inside the unvisited bounding boxes. When a recommended spot is selected, custom SVG paths trace the route with CSS stroke-dashoffset transition animations to guide the user visually.'
        }
      ],
      results: [
        {
          title: 'Unseen Map Explorer 메인 인터페이스 (Unseen Map Explorer Main Interface)',
          desc: '사진 업로드 시, 각 위치가 맵 마커로 시각화되며 밀접한 마커들은 MarkerCluster 플러그인을 통해 수치화된 그룹으로 묶여 표시됩니다.\n\nThe main map dashboard. Uploading images parses location metadata instantly, populating the Leaflet map with interactive marker clusters and trip statistics.',
          figs: [unseenmap_1],
          captions: ['Figure 1: Main interface showing trip history statistics, marker clusters, and nearby unvisited POI recommendations.']
        }
      ],
      conclusion: 'Unseen Map Explorer는 단순한 이미지 뷰어를 넘어 공간 데이터 분석과 지도 인터페이스를 매끄럽게 결합한 웹 애플리케이션입니다. 클라이언트 기반 파싱으로 서버 연산 부하를 최소화했습니다. 향후 로컬 스토리지에 데이터를 백업하고 모바일 브라우저 터치 드래깅을 강화할 예정입니다.\n\nUnseen Map Explorer successfully integrates geo-spatial analytics with web mapping APIs. By performing metadata extraction client-side, the app minimizes server workloads. Future iterations will focus on local storage caching and enhanced mobile viewport drag gestures.'
    }
  },
  halligalli: {
    id: 'halligalli',
    title: 'Online HalliGalli',
    subtitle: '실시간 멀티플레이 웹 기반 할리갈리 게임 / Real-time Web-Based Multiplayer HalliGalli Game',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@gmail.com',
    link: 'https://github.com/meisteryi/HalliGalli',
    page: 'https://meisteryi.github.io/HalliGalli/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Firebase Realtime DB'],
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
  },
  shen: {
    id: 'shen',
    title: 'SHEN: Sentiment Hidden Eye aNalysis',
    subtitle: 'Investigating Gender Bias in Korean PLMs via Attention and Local Explanations',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@sogang.ac.kr',
    link: '',
    page: '',
    tags: ['XAI', 'NLP', 'Bias Analysis', 'KcELECTRA'],
    abstract: '사전 학습 언어 모델(PLM)은 감성 분석에서 뛰어난 성능을 보이지만, 사회적 편향을 상속할 위험이 있습니다. 본 연구는 KcELECTRA 모델이 예측 점수와 어텐션 메커니즘을 통해 젠더 정보를 처리하는 방식을 조사합니다. 실험 결과, 젠더어 교체에 따른 예측 점수의 변화는 직업 및 맥락에 따라 상이하여 여성이 항상 부정적으로 평가된다는 일관된 편향은 관찰되지 않았습니다. 그러나 어텐션 시각화 분석을 통해 모델이 감성 강조 부사(\'정말\' 등)와 유사한 수준의 높은 어텐션 가중치를 \'여-\'와 같은 젠더 접두사에 할당하는 \'특성 오귀인(Feature Misattribution)\' 현상을 발견했습니다. 이는 감성 분류에 불필요한 젠더 정보를 모델이 중요 특성으로 오인하고 있음을 보여주며, 예측 신뢰성에 잠재적인 무작위성을 초래함을 결론지었습니다.\n\nAlthough Pre-trained Language Models (PLMs) show high performance in sentiment analysis, they risk inheriting social biases. This study investigates how the KcELECTRA model processes gender information using Prediction Scores and Attention Mechanisms. Experimental results show that changes in prediction scores due to gender swapping vary by profession and context, with no consistent evidence that female terms are universally evaluated negatively. However, attention visualization revealed that the model assigns high attention weights to gender prefixes such as \'여-\', comparable to those assigned to sentiment-intensifying adverbs such as \'정말\' (e.g., "really"). This suggests a Feature Misattribution, where the model misidentifies gender as a salient feature for sentiment classification. We conclude that while directional bias is inconsistent, the model\'s over-attention to gender creates unpredictability in sentiment prediction.',
    sections: {
      introduction: '자연어 처리 모델이 인간의 언어로부터 사회적 편향을 상속받는 문제는 중요하며, 특히 한국어는 \'여-\'나 \'여류-\'와 같은 성별 접두사가 널리 쓰여 이의 영향력을 확인하는 것이 필수적입니다. 기존 연구들은 \'여성=부정적\', \'남성=긍정적\'과 같은 단순 이진 결과 매핑에 집중했습니다. 하지만 모델이 예측 점수를 유사하게 내더라도 내부적으로는 성별 정보에 크게 의존할 수 있습니다. 이에 본 연구는 성별 단어 치환에 따른 예측 변화와 어텐션 배포 패턴을 XAI 관점에서 정밀 분석합니다.\n\nAs natural language processing models learn from human language, they inevitably acquire social attributes such as gender and race. This issue is particularly salient in Korean due to the prevalence of gender-marking prefixes such as \'여-\' and \'여류-\', which makes it important to examine how models process these linguistic forms. Previous studies have largely focused on allocational bias, emphasizing binary outcome patterns such as \'male = positive\' and \'female = negative\'. However, model behavior is more complex: even when prediction scores appear similar, models may internally rely on gender information as a basis for sentiment judgments. To address this issue, this study investigates the model by analyzing changes in prediction scores under gender term substitution and examining the extent to which the model\'s attention is allocated to gender-related tokens.',
      methodology: [
        {
          title: '모델 선정 및 미세 조정 (Model Selection & Fine-tuning)',
          desc: '감성 분석 백본 모델로 KcELECTRA-base-v2022를 채택했습니다. KcELECTRA는 일반적인 뉴스 댓글 대규모 코퍼스로 사전 학습되어 신조어, 구어체 처리에 강력합니다. 네이버 영화 평점 코퍼스(NSMC) 데이터 중 학습용 30,000개, 평가용 5,000개를 무작위 샘플링하여 AdamW 옵티마이저를 통해 미세 조정을 수행했습니다.\n\nWe adopted KcELECTRA-base-v2022 as the backbone model for sentiment analysis. Unlike standard KoELECTRA, KcELECTRA is pre-trained on a large-scale corpus of Korean news comments, making it robust for processing colloquialisms, slang, and neologisms. We fine-tuned the model on the Naver Sentiment Movie Corpus (NSMC), using a randomly sampled 30,000 instances for training and 5,000 for testing, with the AdamW optimizer (learning rate: 5e-5, batch size: 32, 1 epoch).'
        },
        {
          title: '편향 분석 프레임워크 (Bias Analysis Framework)',
          desc: '1. 단어 치환 테스트: 10쌍의 성별 단어쌍(예: 감독/여감독)을 직업 템플릿 문장에 치환 적용하여 예측 점수 변동폭 측정.\n2. 설명 가능성 교차 검증: SHAP과 LIME 프레임워크를 통해 모델의 로컬 의사결정 시 특성 중요도를 시각화 및 비교.\n3. 어텐션 맵 추출: 최종 레이어의 [CLS] 토큰 어텐션 분포를 추출하여 단어별 가중치 할당 시각화.\n\n1. Word Swap Test: Substituting professions in fixed templates (e.g., "그 [직업]은 정말 천재적이다") with 10 pairs of gendered terms (e.g., 감독/여감독) to measure prediction score shifts.\n2. Surface-level Explanation: Utilizing SHAP and LIME to cross-validate feature importance.\n3. Attention Heatmap Analysis: Extracting the attention distribution of the [CLS] token from the final layer to visualize weight allocations.'
        }
      ],
      results: [
        {
          title: '단어 치환에 따른 예측 점수 변동 (Word Swap Prediction Scores)',
          desc: '성별 치환에 따른 예측 값 차이는 직업군별로 매우 다양하게 나타났습니다. 어느 한 성별이 일관되게 부정적이거나 긍정적으로 평가되는 경향은 관찰되지 않았으며, 이는 모델이 성별에 따른 단순 이진 할당 편향을 학습하지는 않았음을 시사합니다.\n\nScore differences across genders vary by occupation. No consistent pattern of one gender being systematically favored or disadvantaged was observed, suggesting the model has not learned a simplistic bias like "disliking women."',
          fig: SHEN_fig_1,
          caption: '그림 1: 10개 직업 대조군별 긍정 예측 점수 변화. 일방적인 편향이 아니라 직업에 따라 각기 다른 양상으로 나타납니다.\n\nFigure 1: Positive prediction scores for 10 Comparison pairs. Rather than a unilateral bias, the predictions vary depending on the occupation.'
        },
        {
          title: 'SHAP 및 LIME 분석 비교 (SHAP & LIME Comparison)',
          desc: 'SHAP은 감성 명시 단어(예: \'형편없-\')를 핵심 기여 요인으로 꼽고 성별 토큰은 매우 낮게 평가했습니다. 반면, LIME은 성별 마킹 접두사에 매우 높은 가중치를 주어 \'여배우\'라는 접두사가 강조 부사 \'정말\'보다 긍정 예측에 더 크게 기여했다고 표시했습니다. 이는 국소 섭동(Local Perturbation)에 민감한 LIME이 모델의 미세한 내부 젠더 토큰 의존도를 드러낸 결과입니다.\n\nSHAP identifies explicit sentiment words (e.g., \'형편없-\') as top features while ranking gender terms very low. In contrast, LIME assigns high weights to gender-marking prefixes, designating \'여배우\' (actress) as a higher positive contributor than the intensifier \'정말\' (really). This discrepancy arises because LIME is highly sensitive to local perturbations, thus capturing latent biases.',
          figs: [SHEN_fig_2, SHEN_fig_3, SHEN_fig_4],
          captions: [
            '그림 2 & 3: 배우 감성 문장에 대한 SHAP 설명. 실제 감성 단어가 최종 부정 예측을 유도합니다.\n\nFigure 2 & 3: SHAP explanation for male/female acting issues. Sentiment words drive the negative prediction.',
            '그림 4: LIME 분석. 모델이 \'여배우\' 접두사에 \'정말\' 부사보다 더 높은 긍정 기여도를 부여합니다.\n\nFigure 4: LIME explanation. The model assigns a higher positive contribution to \'여배우\' than to \'정말\'.'
          ]
        },
        {
          title: '어텐션 맵 분석 (특성 오귀인 규명) (Attention Heatmap Analysis)',
          desc: '"그 감독은 정말 천재적이다"와 "그 여감독은 정말 천재적이다"를 비교했습니다. [CLS] 토큰은 여성 접두사 \'여-\'에 0.08의 높은 가중치를 할당했는데, 이는 문장 내 핵심 감성 단어인 \'천재\'(0.11)에 육박하는 수준입니다. 즉, 모델이 단지 성별 정보일 뿐인 접두사를 강력한 감성 판단 근거로 오인하는 \'특성 오귀인\'이 입증되었습니다.\n\nComparing attention weights for "그 감독은 정말 천재적이다" and "그 여감독은 정말 천재적이다". The [CLS] token assigns a high attention weight of 0.08 to the gender prefix \'여-\', which is comparable to the key sentiment word \'천재\' (0.11). This demonstrates that the model misattributes gender prefix as a salient sentiment feature.',
          figs: [SHEN_fig_5, SHEN_fig_6],
          captions: [
            '그림 5: 남성 감독 문장의 어텐션 맵 (감성어 위주로 집중)\n\nFigure 5: Attention Heatmap for male director (focuses on sentiment words).',
            '그림 6: 여성 감독 문장의 어텐션 맵 (여- 접두사에 비정상적으로 집중)\n\nFigure 6: Attention Heatmap for female director (strongly focuses on gender prefix \'여-\').'
          ]
        }
      ],
      conclusion: '본 연구는 모델의 겉보기 분류 성능과 실제 내부 동작 메커니즘 사이에 큰 차이가 존재함을 드러냅니다. 겉으로는 중립적으로 보일지라도, 모델 내부는 성별 접두사를 감성 특성으로 오인하고 있습니다. 이는 실제 서빙 환경에서 예측 신뢰도의 불안정성을 키우는 요인입니다. 향후 편향 완화 학습을 설계하여 올바른 맥락 정보에 주의를 기울이도록 유도해야 합니다.\n\nOur study reveals a stark contrast between surface-level performance and internal model behavior. Looking only at prediction scores, no consistent bias was found. However, XAI tools (LIME and Attention Heatmaps) show that the model fixates on gender prefixes as sentiment features. While it currently produces correct predictions by chance, this poses a latent risk. Future research must focus on guiding models to attend to appropriate contextual cues rather than gender.'
    }
  },
  mus: {
    id: 'mus',
    title: "µ's: Music Understanding via Spectrogram evaluation",
    subtitle: 'Music Genre Classification using Transfer Learning on Log-Mel Spectrogram Images / 전이 학습 기반 음악 장르 이미지 분류 시스템',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@sogang.ac.kr',
    link: '',
    page: '',
    tags: ['Deep Learning', 'PyTorch', 'Audio DSP', 'Spectrogram Trans', 'Transfer Learning', 'ResNet50'],
    abstract: '본 프로젝트는 음악 장르 분류 문제를 컴퓨터 비전 작업으로 재정의하여 오디오 영역의 분류 난제를 해결합니다. 오디오 신호를 2D Mel-Spectrogram 이미지로 변환하여 시각적 특징을 추출하고, ImageNet으로 사전 학습된 ResNet50 모델을 활용하는 전이 학습 방법론을 적용했습니다. 표준 GTZAN 데이터셋을 통한 실험 결과 10개 장르 분류에서 72.56%의 테스트 정확도를 보였으며, 오차 행렬(Confusion Matrix) 분석을 통해 유사한 청각적 특징을 공유하는 장르 간의 오분류 패턴을 시각적으로 규명했습니다.\n\nThis project addresses the problem of Music Genre Classification in the audio domain by approaching it as a Computer Vision task. We extract visual features by converting audio signals into 2D Mel-Spectrogram images and employ a Transfer Learning methodology using a ResNet50 model pre-trained on ImageNet. Experimental results on the standard GTZAN dataset demonstrate a test accuracy of 72.56% across 10 genre classifications. Furthermore, we visually clarify misclassification patterns between genres sharing similar auditory characteristics through Confusion Matrix analysis.',
    sections: {
      introduction: '음악 정보 검색(MIR) 분야에서 합성곱 신경망(CNN)은 최근 스펙트로그램을 시각적 표상으로 분석하여 탁월한 성능을 발휘해 왔습니다. 우리는 전통적인 수작업 특징(MFCC 등)에 의존하는 대신 Mel-Spectrogram에서 직접 복잡한 특성을 자동으로 학습하는 컴퓨터 비전 접근 방식의 음악 장르 분류 시스템인 µ\'s를 제안합니다. 소규모 음악 데이터셋의 학습 한계를 극복하기 위해 ImageNet 사전 학습 ResNet50 백본을 활용한 전이 학습을 적용하여 오디오 데이터로부터 풍부한 시각적 텍스처 패턴을 추출했습니다.\n\nIn Music Information Retrieval (MIR), Convolutional Neural Networks (CNNs) have recently demonstrated remarkable performance by analyzing spectrograms as visual representations. We propose µ\'s, a music genre classification system that adopts a computer vision approach, enabling the automatic learning of complex features directly from Mel-Spectrograms rather than relying on traditional hand-crafted features like MFCCs. To overcome the small scale of music datasets, we leverage transfer learning using a ResNet50 backbone pre-trained on ImageNet, extracting visual patterns (textures) from audio data.',
      methodology: [
        {
          title: '데이터 전처리 파이프라인 (Data Preprocessing Pipeline)',
          desc: '1. 세그멘테이션: GTZAN 데이터셋의 30초 음원을 3초 단위의 클립 10개로 분할하여 데이터 크기를 1,000개에서 10,000개로 10배 확장하고 짧은 시간대의 특징 학습을 유도.\n2. 멜-스펙트로그램 변환: STFT(단시간 푸리에 변환)를 거쳐 멜 스케일(n_mels: 128) 이미지로 변환.\n3. 채널 복제: 1채널 그레이스케일 스펙트로그램을 3번 쌓아 RGB와 유사한 (128x130x3) 텐서로 변환하여 ResNet50의 입력 요구 규격 충족.\n\n1. Segmentation: Dividing 30-second tracks in the GTZAN dataset into ten 3-second clips. This expands the dataset from 1,000 to 10,000 samples and enables learning from short-interval features.\n2. Mel-Spectrogram Conversion: Performing STFT and converting to Mel scale (n_mels: 128).\n3. 3-Channel Adaptation: Stacking the 1-channel grayscale spectrograms three times to create an RGB-like (128x130x3) tensor, fitting ResNet50 input requirements.',
          fig: mus_fig_1,
          caption: '그림 1: 전처리 파이프라인. 원본 오디오를 3초 클립으로 분할하고, 로그-멜 스펙트로그램으로 변환 후 채널을 복제합니다.\n\nFigure 1: Preprocessing pipeline. Segments original audio to 3-second clips, converts to log-mel spectrogram, and replicates channels.'
        },
        {
          title: '모델 및 학습 전략 (Model & Training Strategy)',
          desc: '분류 레이어(GlobalAveragePooling2D, Dropout 0.3, Softmax Dense Layer)가 탑재된 ResNet50 모델을 구성하고 2단계 학습 전략을 취했습니다.\n- 1단계 (특징 추출): ResNet50 백본 가중치를 동결하고 커스텀 분류 헤드만 프리징을 유지한 채 Adam 옵티마이저(학습률 1e-3)로 학습.\n- 2단계 (미세 조정): 백본 동결을 해제하고 전체 네트워크를 극소 학습률(1e-5)로 학습시켜 급격한 정보 유실(Catastrophic Forgetting)을 방지했습니다.\n\nWe used ResNet50 with custom classification top layers (GlobalAveragePooling2D, Dropout 0.3, and 10-unit Softmax Dense layer). Training followed a two-phase strategy:\n- Phase 1 (Feature Extraction): Freezing ResNet50 weights, training only the classification head using Adam (learning rate: 1e-3).\n- Phase 2 (Fine-Tuning): Unfreezing the backbone, training the entire model with a very low learning rate (1e-5) to prevent catastrophic forgetting.'
        }
      ],
      results: [
        {
          title: '양적 성능 지표 (Quantitative Performance)',
          desc: '독립된 테스트 세트(1,498개 세그먼트)에서 최종 평가를 실시하여 72.56%의 정확도를 획득했습니다. 짧은 3초 클립만으로 정확하게 장르를 분류할 수 있다는 점은 스펙트로그램 기반의 시각적 특징 추출 성능이 뛰어남을 증명합니다.\n\nThe final model evaluated on the independent test set (1,498 segments) achieved a test accuracy of 72.56%. The ability to classify genres accurately using only short 3-second clips demonstrates the effectiveness of spectrogram-based visual feature extraction.',
          figs: [mus_fig_2, mus_fig_4],
          captions: [
            '그림 2: 안정적인 수렴을 보이는 정확도 및 손실 곡선.\n\nFigure 2: Accuracy & Loss curves showing stable convergence.',
            '그림 4: 오차 행렬. 클래식(99.3%)과 디스코(76.7%) 장르에서 두드러진 성능을 보였습니다.\n\nFigure 4: Confusion Matrix. Exceptional performance on Classical (99.3%) and Disco (76.7%).'
          ]
        },
        {
          title: '시각적 패턴 및 정성적 분석 (Visual Patterns & Qualitative Analysis)',
          desc: '모델은 이미지의 시각적 텍스처 특징에 의존해 장르를 분류합니다:\n- 수직 줄무늬: 비트가 뚜렷한 힙합이나 디스코는 저주파 영역에 수직선 형태로 나타납니다.\n- 수평 흐름: 화성이 풍부한 클래식이나 재즈는 부드럽고 일정한 수평선 텍스처를 십니다.\n- 노이즈 밀도: 메탈과 록은 고주파 대역에 노이지하고 왜곡된 거친 텍스처 분포를 가집니다.\n\nThe model distinguishes genres based on key visual patterns:\n- Vertical Patterns: Consistent beats (Hip-hop, Disco) show vertical lines in low-frequency bands.\n- Horizontal Textures: Harmonic instruments (Classical, Jazz) show smooth horizontal textures.\n- Noise Density (Complexity): Metal and Rock show rough, noisy, high-frequency distortion textures.',
          figs: [mus_fig_3, mus_fig_5, mus_fig_6],
          captions: [
            '그림 3: 대조적인 장르(클래식 vs 메탈)의 스펙트로그램 시각적 비교.\n\nFigure 3: Spectrogram comparison of contrasting genres (Classical vs Metal).',
            '그림 5 & 6: 정성 분석 케이스 스터디: 어쿠스틱 기타 선율 텍스처 때문에 록에서 컨트리로 오분류된 Yesterday, 클래식으로 정확히 분류된 운명 교향곡, 팝 장르로 정확히 분류된 Snow Halation.\n\nFigure 5 & 6: Qualitative analysis case studies: Yesterday (misclassified Rock->Country due to acoustic guitar strings textures), Symphony No. 5 (correct Classical), and Snow Halation (correct Pop).'
          ]
        }
      ],
      conclusion: '우리는 음악 장르 분류 문제를 컴퓨터 비전 전이 학습(ResNet50)으로 해결하는 프레임워크를 제안하여 72.56%의 정확도를 달성했습니다. 정성 분석 결과 모델이 전통적인 음향 변수 대신 실제 스펙트로그램 이미지의 시각적 텍스처(화성, 비트, 노이즈)에 의존하고 있음이 입증되었습니다. 다만 가사나 음악적 구조 맥락을 포착하기 어렵다는 한계가 존재합니다.\n\nWe proposed a computer vision framework for music genre classification. By combining log-mel spectrograms with transfer learning (ResNet50), we reached a test accuracy of 72.56%. Qualitative analysis verified that the model indeed relies on visual textures (harmonics, beats, and noise) rather than traditional symbolic metrics. Limitations include the model relying on texture details instead of structural musical context (lyrics, tonality).'
    }
  },
  scout: {
    id: 'scout',
    title: 'AI Football Scouter',
    subtitle: 'Data and Sentiment Driven Player Recommendation System / 데이터 및 감성 분석 기반 축구 선수 추천 시스템',
    author: 'Joohyoung Yi, Yongseop Shin, Changyoung Lee',
    affiliation: 'NLP Class Project, Sogang University (2025 1st Semester)',
    email: 'yjh020701@sogang.ac.kr',
    link: '',
    page: '',
    tags: ['Python', 'NLP', 'KoBERT', 'Sentiment Analysis', 'Stat Filtering'],
    abstract: '본 프로젝트는 축구 선수의 객관적인 능력치 데이터와 Reddit 커뮤니티의 주관적인 팬 여론 감성을 결합한 데이터 기반의 하이브리드 선수 추천 시스템인 AI Football Scouter를 제안합니다. 능력치 기반 필터링으로 후보군을 1차 선별한 뒤, Reddit 댓글 데이터를 수집하여 BERT 다국어 감성 모델 및 독성(Toxicity) 분석을 수행하고, 자체 정의한 규칙 기반 알고리즘을 적용한 후 로컬 경량 LLM(phi-1.5)을 사용해 자연어 스카우팅 보고서를 생성합니다. 더불어 포지션 키워드 정규화 처리와 축구 팬 특유의 강한 슬랭 및 sarcastic 표현으로 인한 오분류 예외 처리 모델 고도화 결과도 포함합니다.\n\nThis project introduces AI Football Scouter, a data-driven recommendation system that combines objective player statistics with subjective community sentiments from Reddit. Designed to overcome the limitations of numbers-only scouting, the system filters candidates from a dataset of player attributes, performs 3-way BERT sentiment and separate toxicity analyses on Reddit fan comments, applies a rule-based recommendation logic, and generates a human-like scouting summary using a local lightweight LLM (phi-1.5). We also report key edge cases including position query normalization fixes and contextual toxicity classification errors caused by strong football fan slang.',
    sections: {
      introduction: '현대 축구 스카우팅은 단순히 기록 수치에만 의존하지 않습니다. 팬들의 반응과 여론은 선수의 시장 가치, 심리적 상태, 미디어 노출에 지대한 영향을 미칩니다. 본 프로젝트는 CSV 데이터의 선수 스태츠와 Reddit에 누적된 팬들의 여론 데이터를 유기적으로 융합합니다. 자연어 프로필 쿼리를 입력받아 조건에 맞는 후보군을 필터링하고, Reddit API를 호출해 감성 수치 및 독성을 분석한 뒤 감독과 구단 프런트가 직관적인 결정을 내릴 수 있도록 자연어 보고서 형태로 요약 제공합니다.\n\nModern football scouting is no longer just about numbers. Community perception and fan sentiment increasingly affect player valuation, confidence, and media representation. The goal of this project is to combine players\' objective statistics with community opinions on Reddit. Our system ingests player metrics from a CSV file, accepts natural language profile queries, performs Reddit API extraction and sentiment/toxicity categorization, and outputs a synthesized scouting report to help head coaches and technical directors make informed decisions.',
      methodology: [
        {
          title: 'Step 01: CSV 기반 선수 필터링 및 쿼리 정규화 (CSV-Based Player Filtering & Query Normalization)',
          desc: '선수의 상세 객관적 능력치 속성을 로드하여 조건부 스코어링을 수행합니다. 초기 개발 시 "goalkeeper"를 검색했을 때 defending이나 stamina 등 범용 속성이 높게 측정된 살라와 같은 공격수가 최상위에 추천되는 문제가 존재했습니다. 이를 해결하기 위해 입력된 자연어 쿼리를 표준 포지션 코드(GK, DF, MF, FW)로 자동 매핑해 주는 `normalize_position_input()` 함수 및 해당 축구 구역에 할당된 선수군만 1차로 필터링하는 `filter_players_by_position()` 로직을 추가하여 포지션 오류를 원천 차단했습니다.\n\nThe system loads objective player attributes (pace, stamina, shooting, dribbling, etc.). Initially, searching a query like "goalkeeper" returned forwards like Salah because the classifier selected general attributes like "defending" or "stamina".\n\nTo resolve this, we implemented `normalize_position_input()` to map natural language queries directly to standard position codes (GK, DF, MF, FW) and added `filter_players_by_position()` to restrict recommendations to the appropriate playing zone before applying attribute scores.',
          figs: [scout_report_fig_1, scout_report_fig_13],
          captions: [
            '그림 1: 자연어 쿼리를 표준 포지션 코드로 변환하는 normalize_position_input() 함수 코드 스니펫.\n\nFigure 1: Code snippet for normalize_position_input() mapping query keywords to position codes.',
            '그림 2: 엄격한 포지션 필터링을 보장하는 filter_players_by_position() 함수 코드 스니펫.\n\nFigure 2: Code snippet for filter_players_by_position() ensuring strict position filtering.'
          ]
        },
        {
          title: 'Step 02: Reddit 팬 의견 감성 및 독성 분석 (Reddit Fan Sentiment & Toxicity Analysis)',
          desc: 'PRAW 라이브러리를 활용해 특정 선수명으로 Reddit 내 최근 게시글과 댓글 데이터를 크롤링합니다. 수집된 텍스트는 `nlptown/bert-base-multilingual-uncased-sentiment` 허깅페이스 모델을 활용해 긍정/중립/부정 비율로 분류하며, 동시에 독성 욕설 유무는 `unitary/toxic-bert` 모델을 통해 교차 분석합니다.\n\nWe collect recent Reddit posts and comments using PRAW. The sentiment is analyzed using the `nlptown/bert-base-multilingual-uncased-sentiment` model (predicting positive, neutral, negative ratios). Concurrently, toxicity is measured separately using `unitary/toxic-bert` from Hugging Face.'
        },
        {
          title: 'Step 03: 추천 로직 결정 및 LLM 요약 (Recommendation Logic & LLM Summarization)',
          desc: '자체 수립한 규칙 기반 필터링 알고리즘을 사용해 최종 등급을 분류합니다:\n- 독성 점수 >= 0.55 -> 추천 보류 (비난 여론 우세)\n- 긍정 비율 >= 0.5 & 저독성 -> 추천 대상\n- 부정 비율 >= 0.5 -> 추천 제외\n추천된 최상위 선수 리스트는 기기에 탑재된 경량 로컬 LLM인 phi-1.5를 통해 정량 지표와 정성 지표를 종합한 인간 스카우터 수준의 보고서로 자동 생성됩니다.\n\nWe apply a rule-based labeling algorithm:\n- Toxicity >= 0.55 -> Not Recommended\n- Positive >= 0.5 & low toxicity -> Recommended\n- Negative >= 0.5 -> Not Recommended\n\nFor the recommended top players, a locally-run phi-1.5 model synthesizes a detailed scouting report combining objective ratings and public fan sentiment statistics.',
          fig: scout_slides_fig_25,
          caption: '그림: 로컬 phi-1.5 모델을 구동하여 생성한 자연어 형태의 선수 분석 및 종합 보고서 출력 샘플.\n\nFigure: Output sample from local phi-1.5 model generating a human-like scouting report.'
        }
      ],
      results: [
        {
          title: '시스템 실행 방식 및 코드 결과 (System Walkthrough & Code Details)',
          desc: 'Streamlit 기반 사용자 UI에서 "strong midfielder"와 같은 자연어 요구 성능을 입력하면 시스템이 백엔드 속성 스코어링을 통해 Palmer, Fernandes 등의 후보를 선별하고, 이들의 최근 해외 팬 여론을 분석해 요약 보고서를 즉각 화면에 뿌려줍니다.\n\nThe user enters a profile query like "strong midfielder" in the Streamlit UI. The system matches attributes, filters candidates (e.g., Bruno Fernandes, Cole Palmer), retrieves fan sentiments, and generates the scouting summaries.',
          figs: [scout_slides_fig_22, scout_slides_fig_18, scout_slides_fig_17],
          captions: [
            '그림 3: Streamlit 검색 UI 메인 화면.\n\nFigure 3: Streamlit Search UI interface.',
            '그림 4: "strong midfielder" 쿼리에 따라 선별된 선수 후보 필터링 결과 테이블.\n\nFigure 4: Candidate filtering results table for "strong midfielder".',
            '그림 5: 팬 감성 및 독성 분석 JSON 출력 값 (Cole Palmer: 긍정 0.53, 독성 0.03).\n\nFigure 5: Fan sentiment analysis JSON output (Cole Palmer: positive_ratio: 0.53, toxic: 0.03).'
          ]
        },
        {
          title: '한계 극복: 슬랭, 반어법 및 맥락적 독성 탐지 오류 (Key Challenge: Slang, Sarcasm & Positive Toxicity)',
          desc: '축구 커뮤니티 특유의 거친 격려 및 슬랭 표현을 모델이 단순 욕설로 오판하는 한계가 발견되었습니다. 예컨대 Cole Palmer의 팬들이 남긴 "...thank fuck he\'s good" 문장은 감정적 찬사임에도 toxic-bert가 욕설 토큰 때문에 위험군으로 판단했습니다. Bruno Guimarães의 "Cunt but he\'s our cunt" 역시 강한 애착 표현임에도 높은 독성 수치로 감지되었습니다. 이는 도메인 특화 슬랭 분류 모델의 미세 조정 필요성을 시사합니다.\n\nA significant challenge arose with the model misinterpreting strong fan language as negative. For example, Cole Palmer\'s comment "...thank fuck he\'s good at football" contains toxic words but is contextually positive. Similarly, Bruno Guimarães\'s comment "Cunt but he\'s their cunt" was flagged as toxic, yet contextually expresses deep admiration. These examples show the difficulty models face in capturing sarcasm and positive-use profanity in passionate online sports forums.'
        }
      ],
      conclusion: 'AI Football Scouter는 수치 통계와 텍스트 여론을 결합한 유의미한 추천 방법론을 제시했습니다. 로컬 경량 모델(BERT, phi-1.5)이 효율적으로 잘 동작하지만, 온라인 스포츠 포럼의 맥락적 슬랭과 반어법을 정확히 해석하기엔 한계가 있습니다. 향후 트위터, 유튜브 등으로 데이터 채널을 확장하고 도메인 슬랭 코퍼스로 추가 파인튜닝을 계획하고 있습니다.\n\nAI Football Scouter successfully showcases a hybrid recommendation system bridging numerical statistics and public opinion. While the local lightweight models (BERT, phi-1.5) perform adequately, contextual slang and sarcasm pose limitations on sentiment accuracy. Future improvements include integrating multi-platform data (Twitter, YouTube) and fine-tuning models on domain-specific football fan vernacular.'
    }
  },
  yenafanpage: {
    id: 'yenafanpage',
    title: 'YENA Fanpage',
    subtitle: '아티스트 최예나 반응형 웹 팬페이지 / Responsive Fan Website for Artist Choi Ye-na',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University (2022 2nd Semester)',
    email: 'yjh020701@gmail.com',
    link: 'https://github.com/meisteryi/YENA_Fanpage_2022',
    page: '',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web', 'Class Project'],
    abstract: '최예나 아티스트 팬페이지는 2022년 2학기 서강대학교 아트&테크놀로지 학과의 "Network Media" 과목 기말 프로젝트로 제작된 반응형 웹사이트입니다. 아티스트의 정보, 앨범 소개, 관련 공지, 미디어 갤러리 및 월간 스케줄러 등 팬페이지에 필수적인 기능들을 설계 및 구현하였습니다. 데스크톱과 모바일 등 서로 다른 스케줄 및 해상도 환경을 모두 커버하는 미디어 쿼리 기반 반응형 네비게이션을 설계하였으며, 바닐라 자바스크립트 기반의 홈배너 이미지 슬라이드쇼, jQuery 및 Lightbox 라이브러리를 활용한 고해상도 이미지 오버레이 뷰어, 유기적인 앨범 카드 인터랙션을 적용했습니다.\n\nThe YENA Fanpage is a responsive web application designed and built as a final project for the "Network Media" course (2022 2nd Semester) in Art & Technology at Sogang University. Dedicated to the artist Choi Ye-na, the platform consolidates biography details, rich album cards, multimedia newsletters, a photo gallery with lightbox support, and an active schedule calendar. By using CSS Media Queries, it delivers a fully responsive responsive layout supporting seamless navigation toggles across mobile and desktop. It incorporates a vanilla JavaScript banner slideshow, hover-responsive profile states, and interactive jQuery Lightbox popups for high-resolution image viewing.',
    sections: {
      introduction: 'Network Media 과목의 기말 과제로서, 웹 인터랙션과 미디어 연동을 유기적으로 결합하는 실용적인 웹 환경 설계를 목적으로 삼았습니다. 단순한 정보 나열을 넘어 아티스트의 타이틀곡 분위기에 어울리는 화사하고 키치한 핑크빛 비주얼 테마를 구성하고, 사용자 친화적인 레이아웃과 미디어 쿼리를 통한 유연한 다바이스 대응 방안을 연구했습니다.\n\nAs the final project for the Network Media course, this project aims to create a highly practical and visually cohesive web portfolio. Striving beyond plain list displays, the fanpage adopts a vibrant, kitsch pink palette inspired by the artist\'s signature concepts ("SMiLEY" & "SMARTPHONE"). It focuses on designing user-friendly interactive grids and responsive media wrappers to adapt dynamically to diverse viewing resolutions.',
      methodology: [
        {
          title: '반응형 네비게이션 및 슬라이드쇼 (Responsive Navigation & Javascript Slideshow)',
          desc: '1. 미디어 쿼리(Media Query)를 사용해 화면 너비가 768px 이하로 감소하면 데스크톱 메뉴바가 숨겨지고, 우측 상단의 햄버거 아이콘 클릭 시 모바일용 메뉴 슬라이드가 토글(mnavbar active)되는 CSS 레이아웃 구조를 완성했습니다.\n2. 메인 페이지 전면에 표시되는 배너는 `moveSlides()` 함수와 fade 트랜지션을 이용해 SMiLEY와 SMARTPHONE 앨범 메인 이미지 간을 순환하는 모달 슬라이드쇼로 설계되었습니다.\n\n1. Built a responsive CSS navigation system utilizing media queries. When the width shrinks below 768px, the standard horizontal bar hides, and a modular hamburger icon allows toggling a vertical sliding menu (`.mnavbar.active`).\n2. Implemented a custom vanilla JavaScript slideshow for the main banner, animating image cards using timer intervals and manual slide index controllers (`moveSlides()`).',
          fig: yena_fanpage_profile,
          caption: '그림 1: 메인 프로필 일러스트 및 키치한 테마 레이아웃.\n\nFigure 1: Main profile illustration and kitsch theme layout.'
        },
        {
          title: 'jQuery Lightbox 기반 미디어 갤러리 (jQuery & Lightbox Photo Gallery Integration)',
          desc: '1. 갤러리 섹션에서는 사용자가 썸네일을 클릭하면 화면이 어두워지며 원본 이미지가 모달 창으로 확대 노출되는 Lightbox 라이브러리를 jQuery와 결합했습니다.\n2. 이미지 간의 슬라이딩 이동, 로딩 인디케이터, 간편한 닫기 모션 등 최적화된 모바일 브라우저 터치 경험과 높은 시각적 만족도를 보장합니다.\n\n1. Integrated the jQuery Lightbox script within the photo gallery page to allow instant image magnification. Clicking any thumbnail fades out the background and reveals a smooth image popup with responsive margins.\n2. Features loading progress Indicators, previous/next image buttons, and close gestures, enhancing user navigation flow across touch devices.',
          figs: [yena_smiley_albumcover, yena_smartphone_albumcover],
          captions: [
            '그림 2: SMiLEY 앨범 정보 및 트랙리스트 섹션.\n\nFigure 2: SMiLEY album information and tracklist section.',
            '그림 3: SMARTPHONE 앨범 테마 연동 카드 컴포넌트.\n\nFigure 3: SMARTPHONE album theme companion card component.'
          ]
        }
      ],
      results: [
        {
          title: '팬페이지 구조 구성 및 연동 (Web Page Architecture & Pages Map)',
          desc: '프로젝트는 6개의 HTML 서브페이지와 CSS/JS 리소스 파일로 모듈화되어 분리 설계되었습니다:\n- `yena_main.html`: 슬라이드쇼 및 최신 앨범 퀵 링크.\n- `yena_profile.html`: 마우스 호버 시 다른 프로필 이미지가 로드되는 인터랙티브 디테일 카드.\n- `yena_album.html`: 앨범 수록곡 리스트 및 트랙 설명.\n- `yena_multimedia.html`: 외부 유튜브 공식 영상 임베드 플레이어 연동.\n- `yena_gallery.html`: Lightbox 갤러리 그리드.\n- `yena_schedule.html`: 일정 데이터 테이블.\n\nThe project consists of 6 core HTML pages modularized with centralized assets:\n- `yena_main.html`: Main slide banner and album entries.\n- `yena_profile.html`: Profile detail card changing image on mouse hover.\n- `yena_album.html`: Interactive track list display.\n- `yena_multimedia.html`: Embedded YouTube official music video player.\n- `yena_gallery.html`: Lightbox gallery grid.\n- `yena_schedule.html`: Timetable schedule logs.',
          fig: yenalogo_pink,
          caption: '그림 4: 핑크색 YENA 커스텀 타이틀 로고.\n\nFigure 4: Pink custom YENA title logo.'
        }
      ],
      conclusion: 'YENA Fanpage는 HTML5, CSS3, Vanilla JS 및 전통적인 jQuery 라이브러리 조합을 효과적으로 조화시켜 구현한 클래식 반응형 웹 애플리케이션입니다. 사용자 경험을 높이기 위한 세심한 트랜지션 처리 및 모바일 해상도 고려를 통해 당시 웹 개발의 기본기를 견고히 다진 프로젝트입니다.\n\nThe YENA Fanpage showcases standard front-end design, combining HTML5/CSS3 with vanilla JavaScript and jQuery plugin ecosystems. By prioritizing smooth visual layout adjustments and intuitive menu systems, the project represents a foundational milestone in building high-fidelity responsive websites.'
    }
  },
  archive: {
    id: 'archive',
    title: 'Milestone & Project Archive',
    subtitle: 'Comprehensive record of academic milestones, research publications, and engineering projects / 학업 이력 및 연구 프로젝트 아카이브',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@sogang.ac.kr',
    link: '',
    tags: ['Academic', 'Research', 'Engineering', 'Timeline'],
    abstract: '본 타임라인 아카이브는 서강대학교 입학 이후 수행한 학업 마일스톤, 학술 논문 게재 이력, 소프트웨어 엔지니어링 및 인터랙티브 프로젝트들을 상세히 문서화한 기록 보관소입니다. 젠더 편향 감성 분석, 음악 장르 스펙트로그램 변환 분류, NLP 추천 스카우터 및 웹 아키텍처 연동 이력을 망라합니다.\n\nThis timeline archive provides a detailed documentation of my academic milestones, published research papers, software engineering projects, and interactive designs since joining Sogang University. It encapsulates key projects spanning Sentiment Bias Analysis, Music Genre Recognition, NLP-based Recommendation Engines, and Web Architectures.',
    sections: {
      introduction: '학업 과정 및 개인 프로젝트 일람입니다. 하단 타임라인을 통해 대학 재학 중 구축한 핵심 시스템과 연구 논문 성과를 한눈에 살펴보실 수 있습니다.\n\nWelcome to the complete milestone and archive list. Below is a detailed view of academic achievements, publications, and software systems developed during my university curriculum.',
      methodology: [
        {
          title: '2026: Modern Web & Systems Deployments',
          desc: '• Bento Portfolio v1.1: React, Vite, Tailwind CSS를 활용해 다크/라이트 모드와 최신 레이아웃을 지원하는 프리미엄 반응형 포트폴리오 웹사이트 구축.\n• 설명 가능 인공지능(XAI) 분석 결과를 직관적으로 이해할 수 있는 웹 모달 인터페이스 구현.\n\n• Bento Portfolio v1.1: Designed and built a premium responsive Bento Grid website with custom interactive dark/light modes using React, Vite, and Tailwind CSS.\n• Explored Explainable AI user interface designs to present complex model decisions visually.'
        },
        {
          title: '2025: NLP & Computer Vision Advancements',
          desc: '• SHEN 논문: 한국어 PLM의 젠더 편향을 어텐션과 LIME 기법을 통해 특성 오귀인 현상으로 분석한 학술지 논문 공동 게재.\n• µ\'s 장르 분류기: 오디오 파형을 멜-스펙트로그램 이미지로 변환하여 ResNet50 전이 학습을 적용한 분류 파이프라인 개발 (정확도 72.56%).\n• AI Football Scouter: 선수 데이터 분석 필터 및 Reddit API 감성 분류, 로컬 LLM 보고서 생성을 통합한 축구 추천 서비스 구현.\n\n• SHEN Publication: Co-authored research investigating gender bias prefix allocations in Korean language models, identifying feature misattributions.\n• µ\'s Framework: Built a spectrogram-based classification pipeline with ResNet50 for musical genre recognition, achieving a test accuracy of 72.56%.\n• AI Football Scouter: Integrated statistical player filters, multilingual sentiment analyses, and local LLM summary generation into a single recommendation application.'
        },
        {
          title: '2021: Foundational Computing & Department Admission',
          desc: '• 서강대학교 아트&테크놀로지 학과 학사 과정 입학.\n• 파이썬 기본 코딩 역량, PyTorch 딥러닝 API 활용법, 디지털 오디오 가공의 기초 전처리 이론 습득.\n\n• Admission to Sogang University Department of Art & Technology.\n• Developed core programming competencies in Python, deep learning framework APIs (PyTorch), and digital signal processing basics.'
        }
      ],
      results: [
        {
          title: '타임라인 주요 이벤트 요약 (Historical Milestone Logs Summary)',
          desc: '1. 2025년 12월: SHEN 젠더 편향 분석 논문 완료 (Paper / NLP)\n2. 2025년 11월: µ\'s 멜-스펙트로그램 음악 분류 완료 (Project / CV & Audio)\n3. 2025년 6월: AI Football Scouter 추천 시스템 개발 (Project / BERT & LLM)\n4. 2021년 3월: 서강대학교 아트&테크놀로지 입학 (Academic / Admission)'
        }
      ],
      conclusion: '본 아카이브는 프로젝트가 완료되고 논문이 게재됨에 따라 지속적으로 업데이트되는 살아있는 보존 기록입니다. 협업 및 기술적 소통은 언제든 열려 있습니다.\n\nThis archive acts as a living document, updated as new projects are completed and papers are published. For collaborations or technical discussions, feel free to get in touch.'
    }
  }
};

export const ProjectModal = ({ projectId, onClose, onOpenPhotoExhibition }) => {
  const project = projectsData[projectId];
  const [activeTab, setActiveTab] = useState('overview');
  const [isClosing, setIsClosing] = useState(false);
  const scrollContainerRef = useRef(null);

  // Reset scroll position to top when switching tabs or projects
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeTab, projectId]);

  const getSectionsForTab = () => {
    if (activeTab === 'overview') {
      return [
        { id: 'sec-abstract', label: 'Abstract' },
        { id: 'sec-introduction', label: '1. Introduction' }
      ];
    }
    if (activeTab === 'methodology') {
      return project.sections.methodology.map((m, idx) => ({
        id: `sec-methodology-${idx}`,
        label: m.title.split(' (')[0]
      }));
    }
    if (activeTab === 'results') {
      const items = project.sections.results ? project.sections.results.map((r, idx) => ({
        id: `sec-results-${idx}`,
        label: r.title.split(' (')[0]
      })) : [];
      if (project.sections.conclusion) {
        items.push({ id: 'sec-conclusion', label: 'Conclusion' });
      }
      return items;
    }
    return [];
  };

  const scrollToSection = (id) => {
    const container = scrollContainerRef.current;
    const target = document.getElementById(id);
    if (container && target) {
      const containerTop = container.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;
      const scrollOffset = targetTop - containerTop + container.scrollTop - 20;
      container.scrollTo({ top: scrollOffset, behavior: 'smooth' });
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 200);
  };

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/70 ${isClosing ? 'animate-backdrop-out' : 'animate-backdrop-in'
        }`}
      onClick={handleClose}
    >
      <div
        className={`glass-panel w-full max-w-5xl max-h-[95vh] md:max-h-[90vh] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-slate-200/55 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 transition-all duration-300 ${isClosing ? 'animate-modal-out' : 'animate-modal-in'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-3.5 sm:p-5 md:py-4 md:px-6 border-b border-slate-200/40 dark:border-slate-800/40 flex justify-between items-start gap-3 sm:gap-4">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-1.5 py-0.5 rounded text-[8px] sm:text-[10px] font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug">
              {project.title}
            </h1>
            <p className="text-[11px] sm:text-xs md:text-sm text-slate-500 dark:text-slate-350 font-medium">
              {project.subtitle}
            </p>
            <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 dark:text-slate-500 flex flex-wrap gap-x-4">
              <span>{project.author}</span>
              <span>{project.affiliation}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {project.id === 'photoexhibition' ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenPhotoExhibition) {
                    onOpenPhotoExhibition();
                  }
                }}
                className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] sm:text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border border-transparent"
              >
                <span>Visit Pages</span>
                <Globe size={12} sm:size={14} className="shrink-0" />
              </button>
            ) : (
              <a
                href={project.page || '#'}
                onClick={(e) => {
                  if (!project.page) {
                    e.preventDefault();
                    alert('해당 프로젝트의 라이브 웹 페이지(Pages)가 등록되어 있지 않거나 준비 중입니다.');
                  }
                }}
                target={project.page ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] sm:text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border border-transparent"
              >
                <span>Visit Pages</span>
                <Globe size={12} sm:size={14} className="shrink-0" />
              </a>
            )}
            <a
              href={project.link || '#'}
              onClick={(e) => {
                if (!project.link) {
                  e.preventDefault();
                  alert('해당 프로젝트의 소스 코드 저장소(Github)가 등록되어 있지 않거나 제공되지 않습니다.');
                }
              }}
              target={project.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-[10px] sm:text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border border-transparent"
            >
              <span>Visit Project</span>
              <ArrowUpRight size={12} sm:size={14} className="shrink-0" />
            </a>
            <button
              onClick={handleClose}
              className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors duration-150 cursor-pointer"
            >
              <X size={16} sm:size={20} />
            </button>
          </div>
        </div>

        {/* Main Body Layout: Sidebar + Main Content + Right TOC */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0">
          {/* Left Sidebar: Modal Navigation Tabs */}
          <div className="flex md:flex-col shrink-0 border-b md:border-b-0 md:border-r border-slate-200/30 dark:border-slate-800/30 bg-slate-50/50 dark:bg-slate-950/20 px-2 sm:px-3 md:px-2 md:py-4 overflow-x-auto md:overflow-x-visible md:overflow-y-auto md:w-40">
            <div className="flex flex-row md:flex-col w-full md:space-y-0.5">
              {[
                { id: 'overview', label: 'Abstract & Intro', icon: BookOpen },
                { id: 'methodology', label: 'Methodology', icon: Cpu },
                { id: 'results', label: 'Results & Figures', icon: BarChart2 }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-2.5 py-2 sm:px-3 sm:py-2.5 md:py-2 md:px-3 text-xs md:text-xs font-semibold transition-all duration-200 cursor-pointer w-auto md:w-full md:rounded-lg text-left shrink-0 ${activeTab === tab.id
                    ? 'border-b-2 border-indigo-500 md:border-b-0 md:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold'
                    : 'border-b-2 border-transparent md:border-b-0 text-slate-500 hover:text-slate-800 dark:hover:text-slate-350 hover:bg-slate-100/50 dark:hover:bg-slate-800/30'
                    }`}
                >
                  <tab.icon size={12} sm:size={13} className="shrink-0" />
                  <span className="truncate">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Modal Content - Scrollable */}
          <div ref={scrollContainerRef} className="flex-1 min-w-0 overflow-y-auto p-3.5 sm:p-5 md:p-6 space-y-4 sm:space-y-6">
            {activeTab === 'overview' && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <div id="sec-abstract" className="space-y-2 sm:space-y-3">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 flex items-center gap-1.5">
                    <Award size={12} sm:size={14} /> Abstract
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200/30 dark:border-slate-800/20 whitespace-pre-line">
                    {project.abstract}
                  </p>
                </div>

                <div id="sec-introduction" className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">1. Introduction</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed whitespace-pre-line">
                    {project.sections.introduction}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'methodology' && (
              <div className="space-y-6 animate-fade-in">
                <div className={['mus', 'shen', 'scout'].includes(project.id) ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : "space-y-6"}>
                  <div className="space-y-6">
                    {project.sections.methodology.map((m, idx) => (
                      <div id={`sec-methodology-${idx}`} key={idx} className="space-y-2 bg-slate-50 dark:bg-slate-950/20 p-5 rounded-2xl border border-slate-200/20 dark:border-slate-800/10">
                        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                          {m.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                          {m.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Show Methodology Diagram if it exists */}
                  {project.id === 'mus' && (
                    <div className="flex flex-col justify-center items-center p-4 bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200/55 dark:border-slate-800/50 rounded-2xl">
                      <img
                        src={mus_fig_1}
                        alt="Preprocessing Pipeline"
                        className="max-h-56 md:max-h-64 object-contain rounded-xl shadow-md border border-slate-200/40 dark:border-slate-800/40 bg-white p-2"
                      />
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 text-center max-w-sm whitespace-pre-line">
                        {project.sections.methodology[0].caption}
                      </p>
                    </div>
                  )}

                  {project.id === 'shen' && (
                    <div className="flex flex-col justify-center items-center p-4 bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200/55 dark:border-slate-800/50 rounded-2xl">
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="flex flex-col items-center">
                          <img src={SHEN_fig_5} alt="Attention Heatmap Male" className="max-h-24 md:max-h-28 object-contain rounded border border-slate-200 dark:border-slate-800 bg-white" />
                          <span className="text-[8px] text-slate-400 mt-1">Male Director Attention</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <img src={SHEN_fig_6} alt="Attention Heatmap Female" className="max-h-24 md:max-h-28 object-contain rounded border border-slate-200 dark:border-slate-800 bg-white" />
                          <span className="text-[8px] text-slate-400 mt-1">Female Director Attention</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 text-center max-w-sm whitespace-pre-line">
                        Figure: Attention weights comparison between male/female directors (highlights the misattribution on the gender prefix '여-').
                      </p>
                    </div>
                  )}

                  {project.id === 'scout' && (
                    <div className="flex flex-col justify-center items-center p-4 bg-slate-100/50 dark:bg-slate-950/40 border border-slate-200/55 dark:border-slate-800/50 rounded-2xl gap-4">
                      <img
                        src={scout_report_fig_1}
                        alt="normalize_position_input"
                        className="max-h-36 object-contain rounded border border-slate-200 dark:border-slate-800 bg-white p-1"
                      />
                      <img
                        src={scout_report_fig_13}
                        alt="filter_players_by_position"
                        className="max-h-24 object-contain rounded border border-slate-200 dark:border-slate-800 bg-white p-1"
                      />
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center max-w-sm whitespace-pre-line">
                        Figures: Python code snippets implementing query position normalization and candidate filtering based on player positions to resolve recommendations error.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-8 animate-fade-in">
                {project.sections.results.map((r, idx) => (
                  <div id={`sec-results-${idx}`} key={idx} className="space-y-4 border-b border-slate-200/20 dark:border-slate-800/20 pb-6 last:border-0 last:pb-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                      {/* Left Column: Description */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                          <Zap size={14} className="text-indigo-500" />
                          {r.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-350 leading-relaxed whitespace-pre-line bg-slate-50/50 dark:bg-slate-950/20 p-4 rounded-xl border border-slate-200/10 dark:border-slate-800/10">
                          {r.desc}
                        </p>
                      </div>

                      {/* Right Column: Figures */}
                      <div className="w-full">
                        {/* Figure displays */}
                        {r.fig && (
                          <div className="flex flex-col items-center p-3 sm:p-4 bg-slate-50 dark:bg-slate-950/30 border border-slate-200/30 dark:border-slate-800/20 rounded-2xl w-full mx-auto">
                            <img
                              src={r.fig}
                              alt={r.caption}
                              className="max-h-[300px] sm:max-h-[380px] md:max-h-[420px] object-contain rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 bg-white p-2 w-full"
                            />
                            <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 mt-2.5 text-center max-w-xl whitespace-pre-line">
                              {r.caption}
                            </p>
                          </div>
                        )}

                        {/* Multi-Figure displays */}
                        {r.figs && (
                          <div className="space-y-4">
                            <div className={r.figs.length === 1
                              ? "flex justify-center"
                              : "grid grid-cols-1 sm:grid-cols-2 gap-4"
                            }>
                              {r.figs.map((f, fIdx) => (
                                <div
                                  key={fIdx}
                                  className={`flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-950/30 border border-slate-200/30 dark:border-slate-800/20 rounded-xl ${r.figs.length === 1 ? 'max-w-md w-full' : ''
                                    }`}
                                >
                                  <img
                                    src={f}
                                    alt="Figure component"
                                    className={`object-contain rounded border border-slate-200 dark:border-slate-800 bg-white p-1.5 w-full ${r.figs.length === 1 ? 'max-h-[300px] sm:max-h-[380px] md:max-h-[420px]' : 'max-h-36 sm:max-h-40 md:max-h-48'
                                      }`}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="space-y-1.5 text-center">
                              {r.captions.map((cap, cIdx) => (
                                <p key={cIdx} className="text-[10px] text-slate-400 dark:text-slate-500 whitespace-pre-line">
                                  {cap}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div id="sec-conclusion" className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">Conclusion</h4>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {project.sections.conclusion}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Table of Contents / Outline */}
          <div className="hidden lg:flex flex-col w-36 shrink-0 border-l border-slate-200/30 dark:border-slate-800/30 bg-slate-50/20 dark:bg-slate-950/10 p-4 space-y-3 overflow-y-auto min-h-0">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                On this page
              </span>
              <div className="h-0.5 w-8 bg-indigo-500 rounded-full"></div>
            </div>
            <nav className="flex flex-col space-y-3">
              {getSectionsForTab().map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="text-left text-[10px] font-semibold text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors duration-150 cursor-pointer hover:underline line-clamp-2 leading-tight"
                >
                  {sec.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950/30 border-t border-slate-200/40 dark:border-slate-800/40 flex justify-between items-center px-5 md:px-6">
          <span className="text-[10px] text-slate-400 font-mono">[Sogang Univ. Art & Tech Portfolio Project]</span>
          <button
            onClick={handleClose}
            className="px-4 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold transition-colors duration-150"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
