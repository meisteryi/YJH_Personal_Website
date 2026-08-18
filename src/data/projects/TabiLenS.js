import tabilens_1 from '../../assets/tabilens_1.png';
import tabilens_2 from '../../assets/tabilens_2.png';
import tabilens_3 from '../../assets/tabilens_3.png';

export const tabilens = {
  id: 'tabilens',
  title: 'TabiLenS',
  subtitle: '실시간 다국어 메뉴판 번역 및 주문 도우미 서비스 / Real-time Multilingual Menu Translator & Ordering Assistant',
  author: 'Joohyoung Yi',
  affiliation: 'Art & Technology, Sogang University',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/TabiLenS',
  page: 'https://meisteryi.github.io/TabiLenS/',
  tags: ['Flutter', 'Riverpod', 'Gemini API', 'TTS', 'Shared Preferences'],
  featuredImage: tabilens_1,
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
};
