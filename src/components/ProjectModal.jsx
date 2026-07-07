import React, { useState } from 'react';
import { X, BookOpen, Cpu, BarChart2, Award, ArrowUpRight, Zap, Play, CheckCircle } from 'lucide-react';

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

// Import HalliGalli screenshots
import halligalli_1 from '../assets/halligalli_1.png';
import halligalli_2 from '../assets/halligalli_2.png';

// Import Unseen Map Explorer preview
import unseenmap_1 from '../assets/unseenmap_1.png';

export const projectsData = {
  tabilens: {
    id: 'tabilens',
    title: 'TabiLenS',
    subtitle: '실시간 일본어 메뉴판 번역 및 주문 도우미 서비스 / Real-time Japanese Menu Translator & Ordering Assistant',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@gmail.com',
    tags: ['Flutter', 'Riverpod', 'Gemini API', 'TTS', 'Shared Preferences'],
    abstract: 'TabiLenS는 일본을 여행하는 한국인들이 메뉴판이나 간판을 읽을 때 겪는 언어적·문화적 장벽을 해소하기 위해 개발된 Flutter 기반의 멀티플랫폼 앱입니다. 단순히 기계적인 텍스트 번역을 넘어 Gemini 2.5 Flash를 통한 지능형 OCR 영역 검출 및 터치 매핑, 음식 유래/재료/알레르기 정보를 다루는 식문화 가이드 제공, 그리고 상황별 일본어 문장 생성 및 TTS 오디오 원어민 발음 기능을 한데 제공합니다.\n\nTabiLenS is a Flutter-based cross-platform (Android / iOS / Web) application designed to assist Korean travelers in Japan by translating menus and signs. It goes beyond simple literal translation by using Gemini 2.5 Flash for high-speed OCR bounding-box detection, providing detailed guides on local food culture (ingredients, allergies, origins, dining tips), and dynamically generating custom ordering sentences in Japanese with native Text-to-Speech (TTS) and pronunciation guides.',
    sections: {
      introduction: '일본 현지 식당의 세로쓰기, 손글씨 메뉴판은 관광객들에게 큰 진입장벽입니다. TabiLenS는 단순한 직역 번역기가 아닌, 친절한 식문화 안내서이자 대화형 주문 도우미로서 여행자들이 자신감 있게 식사할 수 있도록 돕습니다.\n\nNavigating Japanese restaurants can be a major hurdle for foreign travelers due to handwritten fonts, vertical writing formats, and a lack of visual food illustrations. TabiLenS was created to solve this problem. It acts as both a cultural food guide and an interactive ordering assistant, giving travelers the confidence to dine like locals by providing comprehensive context instead of word-for-word machine translation.',
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
          title: '인터랙티브 메뉴 스캔 화면 (Interactive Menu Scanning Interface)',
          desc: '메뉴판을 촬영하면 텍스트 블록 위에 직접 터치할 수 있는 인터랙티브 경계 박스가 오버레이되어 사용자가 번역하려는 대상을 직관적으로 고를 수 있습니다.\n\nThe user snaps a photo of a menu. The app processes the image and overlays touch-interactive bounding boxes directly over the Japanese text segments, allowing the user to select what they want to decipher.',
          figs: [tabilens_1],
          captions: ['Figure 1: Smart OCR boundary boxes mapped directly over Japanese characters on the image.']
        },
        {
          title: '식문화 가이드 및 음성 합성 출력 (Food Culture Guide & Audio Speech Synthesis)',
          desc: '선택된 요리의 한글 이름, 유래 설명, 포함 식재료 정보, 알레르기 안내를 확인하고 원하는 주문 문장을 골라 TTS 네이티브 오디오 발음을 듣거나 상대방에게 재생할 수 있습니다.\n\nTapping a menu item reveals a card displaying the translation, visual reference, dish origin, allergy check (ingredients), and recommended ordering phrases with TTS playback.',
          figs: [tabilens_2],
          captions: ['Figure 2: Translation detail showing cultural explanation, ingredient breakdown, and audio speech synthesis.']
        }
      ],
      conclusion: 'TabiLenS는 Flutter의 하이브리드 생산성과 Gemini의 고속 멀티모달 능력을 성공적으로 융합한 실제 여행 유틸리티입니다. 현지 컨텍스트에 맞춤화된 설명과 주문 보조 기능을 제공합니다. 향후 오프라인 사전 데이터베이스 내장 및 동아시아 다국어 확장을 계획 중입니다.\n\nTabiLenS successfully implements a highly responsive travel utility. By combining Flutter\'s cross-platform UI rendering with Gemini\'s multimodal capabilities, it delivers contextual translation and conversational assistance. Future updates will focus on fully offline translation dictionaries and additional Asian languages.'
    }
  },
  unseenmap: {
    id: 'unseenmap',
    title: 'Unseen Map Explorer',
    subtitle: 'EXIF 기반 여행 경로 시각화 및 미개척 골목 POI 탐색 서비스 / EXIF-Based Trip Route Visualization & Unvisited Alley Explorer',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@gmail.com',
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
    tags: ['XAI', 'NLP', 'Bias Analysis', 'KcELECTRA'],
    abstract: 'Although Pre-trained Language Models (PLMs) show high performance in sentiment analysis, they risk inheriting social biases. This study investigates how the KcELECTRA model processes gender information using Prediction Scores and Attention Mechanisms. Experimental results show that changes in prediction scores due to gender swapping vary by profession and context, with no consistent evidence that female terms are universally evaluated negatively. However, attention visualization revealed that the model assigns high attention weights to gender prefixes such as \'여-\', comparable to those assigned to sentiment-intensifying adverbs such as \'정말\' (e.g., "really"). This suggests a Feature Misattribution, where the model misidentifies gender as a salient feature for sentiment classification. We conclude that while directional bias is inconsistent, the model\'s over-attention to gender creates unpredictability in sentiment prediction.',
    sections: {
      introduction: 'As natural language processing models learn from human language, they inevitably acquire social attributes such as gender and race. This issue is particularly salient in Korean due to the prevalence of gender-marking prefixes such as \'여-\' and \'여류-\', which makes it important to examine how models process these linguistic forms. Previous studies have largely focused on allocational bias, emphasizing binary outcome patterns such as \'male = positive\' and \'female = negative\'. However, model behavior is more complex: even when prediction scores appear similar, models may internally rely on gender information as a basis for sentiment judgments. To address this issue, this study investigates the model by analyzing changes in prediction scores under gender term substitution and examining the extent to which the model\'s attention is allocated to gender-related tokens.',
      methodology: [
        {
          title: 'Model Selection & Fine-tuning',
          desc: 'We adopted KcELECTRA-base-v2022 as the backbone model for sentiment analysis. Unlike standard KoELECTRA, KcELECTRA is pre-trained on a large-scale corpus of Korean news comments, making it robust for processing colloquialisms, slang, and neologisms. We fine-tuned the model on the Naver Sentiment Movie Corpus (NSMC), using a randomly sampled 30,000 instances for training and 5,000 for testing, with the AdamW optimizer (learning rate: 5e-5, batch size: 32, 1 epoch).'
        },
        {
          title: 'Bias Analysis Framework',
          desc: '1. Word Swap Test: Substituting professions in fixed templates (e.g., "그 [직업]은 정말 천재적이다") with 10 pairs of gendered terms (e.g., 감독/여감독) to measure prediction score shifts.\n2. Surface-level Explanation: Utilizing SHAP and LIME to cross-validate feature importance.\n3. Attention Heatmap Analysis: Extracting the attention distribution of the [CLS] token from the final layer to visualize weight allocations.'
        }
      ],
      results: [
        {
          title: 'Word Swap Prediction Scores',
          desc: 'Score differences across genders vary by occupation. No consistent pattern of one gender being systematically favored or disadvantaged was observed, suggesting the model has not learned a simplistic bias like "disliking women."',
          fig: SHEN_fig_1,
          caption: 'Figure 1: Positive prediction scores for 10 Comparison pairs. Rather than a unilateral bias, the predictions vary depending on the occupation.'
        },
        {
          title: 'SHAP & LIME Comparison',
          desc: 'SHAP identifies explicit sentiment words (e.g., \'형편없-\') as top features while ranking gender terms very low. In contrast, LIME assigns high weights to gender-marking prefixes, designating \'여배우\' (actress) as a higher positive contributor than the intensifier \'정말\' (really). This discrepancy arises because LIME is highly sensitive to local perturbations, thus capturing latent biases.',
          figs: [SHEN_fig_2, SHEN_fig_3, SHEN_fig_4],
          captions: [
            'Figure 2 & 3: SHAP explanation for male/female acting issues. Sentiment words drive the negative prediction.',
            'Figure 4: LIME explanation. The model assigns a higher positive contribution to \'여배우\' than to \'정말\'.'
          ]
        },
        {
          title: 'Attention Heapmap Analysis (Feature Misattribution)',
          desc: 'Comparing attention weights for "그 감독은 정말 천재적이다" and "그 여감독은 정말 천재적이다". The [CLS] token assigns a high attention weight of 0.08 to the gender prefix \'여-\', which is comparable to the key sentiment word \'천재\' (0.11). This demonstrates that the model misattributes gender prefix as a salient sentiment feature.',
          figs: [SHEN_fig_5, SHEN_fig_6],
          captions: [
            'Figure 5: Attention Heatmap for male director (focuses on sentiment words).',
            'Figure 6: Attention Heatmap for female director (strongly focuses on gender prefix \'여-\').'
          ]
        }
      ],
      conclusion: 'Our study reveals a stark contrast between surface-level performance and internal model behavior. Looking only at prediction scores, no consistent bias was found. However, XAI tools (LIME and Attention Heatmaps) show that the model fixates on gender prefixes as sentiment features. While it currently produces correct predictions by chance, this poses a latent risk. Future research must focus on guiding models to attend to appropriate contextual cues rather than gender.'
    }
  },
  mus: {
    id: 'mus',
    title: "µ's: Music Understanding via Spectrogram evaluation",
    subtitle: 'Music Genre Classification using Transfer Learning on Log-Mel Spectrogram Images',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@sogang.ac.kr',
    tags: ['Computer Vision', 'Audio Processing', 'Transfer Learning', 'ResNet50'],
    abstract: 'This project addresses the problem of Music Genre Classification in the audio domain by approaching it as a Computer Vision task. We extract visual features by converting audio signals into 2D Mel-Spectrogram images and employ a Transfer Learning methodology using a ResNet50 model pre-trained on ImageNet. Experimental results on the standard GTZAN dataset demonstrate a test accuracy of 72.56% across 10 genre classifications. Furthermore, we visually clarify misclassification patterns between genres sharing similar auditory characteristics through Confusion Matrix analysis.',
    sections: {
      introduction: 'In Music Information Retrieval (MIR), Convolutional Neural Networks (CNNs) have recently demonstrated remarkable performance by analyzing spectrograms as visual representations. We propose µ\'s, a music genre classification system that adopts a computer vision approach, enabling the automatic learning of complex features directly from Mel-Spectrograms rather than relying on traditional hand-crafted features like MFCCs. To overcome the small scale of music datasets, we leverage transfer learning using a ResNet50 backbone pre-trained on ImageNet, extracting visual patterns (textures) from audio data.',
      methodology: [
        {
          title: 'Data Preprocessing Pipeline',
          desc: '1. Segmentation: Dividing 30-second tracks in the GTZAN dataset into ten 3-second clips. This expands the dataset from 1,000 to 10,000 samples and enables learning from short-interval features.\n2. Mel-Spectrogram Conversion: Performing STFT and converting to Mel scale (n_mels: 128).\n3. 3-Channel Adaptation: Stacking the 1-channel grayscale spectrograms three times to create an RGB-like (128x130x3) tensor, fitting ResNet50 input requirements.',
          fig: mus_fig_1,
          caption: 'Figure 1: Preprocessing pipeline. Segments original audio to 3-second clips, converts to log-mel spectrogram, and replicates channels.'
        },
        {
          title: 'Model & Training Strategy',
          desc: 'We used ResNet50 with custom classification top layers (GlobalAveragePooling2D, Dropout 0.3, and 10-unit Softmax Dense layer). Training followed a two-phase strategy:\n- Phase 1 (Feature Extraction): Freezing ResNet50 weights, training only the classification head using Adam (learning rate: 1e-3).\n- Phase 2 (Fine-Tuning): Unfreezing the backbone, training the entire model with a very low learning rate (1e-5) to prevent catastrophic forgetting.'
        }
      ],
      results: [
        {
          title: 'Quantitative Performance',
          desc: 'The final model evaluated on the independent test set (1,498 segments) achieved a test accuracy of 72.56%. The ability to classify genres accurately using only short 3-second clips demonstrates the effectiveness of spectrogram-based visual feature extraction.',
          figs: [mus_fig_2, mus_fig_4],
          captions: [
            'Figure 2: Accuracy & Loss curves showing stable convergence.',
            'Figure 4: Confusion Matrix. Exceptional performance on Classical (99.3%) and Disco (76.7%).'
          ]
        },
        {
          title: 'Visual Patterns & Qualitative Analysis',
          desc: 'The model distinguishes genres based on key visual patterns:\n- Vertical Patterns: Consistent beats (Hip-hop, Disco) show vertical lines in low-frequency bands.\n- Horizontal Textures: Harmonic instruments (Classical, Jazz) show smooth horizontal textures.\n- Noise Density (Complexity): Metal and Rock show rough, noisy, high-frequency distortion textures.',
          figs: [mus_fig_3, mus_fig_5, mus_fig_6],
          captions: [
            'Figure 3: Spectrogram comparison of contrasting genres (Classical vs Metal).',
            'Figure 5 & 6: Qualitative analysis case studies: Yesterday (misclassified Rock->Country due to acoustic guitar strings textures), Symphony No. 5 (correct Classical), and Snow Halation (correct Pop).'
          ]
        }
      ],
      conclusion: 'We proposed a computer vision framework for music genre classification. By combining log-mel spectrograms with transfer learning (ResNet50), we reached a test accuracy of 72.56%. Qualitative analysis verified that the model indeed relies on visual textures (harmonics, beats, and noise) rather than traditional symbolic metrics. Limitations include the model relying on texture details instead of structural musical context (lyrics, tonality).'
    }
  },
  scout: {
    id: 'scout',
    title: 'AI Football Scouter',
    subtitle: 'Data and Sentiment Driven Player Recommendation System',
    author: 'Joohyoung Yi, Yongseop Shin, Changyoung Lee',
    affiliation: 'NLP Class Project, Sogang University (2025 1st Semester)',
    email: 'yjh020701@sogang.ac.kr',
    tags: ['NLP', 'Sentiment Analysis', 'BERT', 'LLM', 'phi-1.5'],
    abstract: 'This project introduces AI Football Scouter, a data-driven recommendation system that combines objective player statistics with subjective community sentiments from Reddit. Designed to overcome the limitations of numbers-only scouting, the system filters candidates from a dataset of player attributes, performs 3-way BERT sentiment and separate toxicity analyses on Reddit fan comments, applies a rule-based recommendation logic, and generates a human-like scouting summary using a local lightweight LLM (phi-1.5). We also report key edge cases including position query normalization fixes and contextual toxicity classification errors caused by strong football fan slang.',
    sections: {
      introduction: 'Modern football scouting is no longer just about numbers. Community perception and fan sentiment increasingly affect player valuation, confidence, and media representation. The goal of this project is to combine players\' objective statistics with community opinions on Reddit. Our system ingests player metrics from a CSV file, accepts natural language profile queries, performs Reddit API extraction and sentiment/toxicity categorization, and outputs a synthesized scouting report to help head coaches and technical directors make informed decisions.',
      methodology: [
        {
          title: 'Step 01: CSV-Based Player Filtering & Query Normalization',
          desc: 'The system loads objective player attributes (pace, stamina, shooting, dribbling, etc.). Initially, searching a query like "goalkeeper" returned forwards like Salah because the classifier selected general attributes like "defending" or "stamina".\n\nTo resolve this, we implemented `normalize_position_input()` to map natural language queries directly to standard position codes (GK, DF, MF, FW) and added `filter_players_by_position()` to restrict recommendations to the appropriate playing zone before applying attribute scores.',
          figs: [scout_report_fig_1, scout_report_fig_13],
          captions: [
            'Figure 1: Code snippet for normalize_position_input() mapping query keywords to position codes.',
            'Figure 2: Code snippet for filter_players_by_position() ensuring strict position filtering.'
          ]
        },
        {
          title: 'Step 02: Reddit Fan Sentiment & Toxicity Analysis',
          desc: 'We collect recent Reddit posts and comments using PRAW. The sentiment is analyzed using the `nlptown/bert-base-multilingual-uncased-sentiment` model (predicting positive, neutral, negative ratios). Concurrently, toxicity is measured separately using `unitary/toxic-bert` from Hugging Face.'
        },
        {
          title: 'Step 03: Recommendation Logic & LLM Summarization',
          desc: 'We apply a rule-based labeling algorithm:\n- Toxicity >= 0.55 -> Not Recommended\n- Positive >= 0.5 & low toxicity -> Recommended\n- Negative >= 0.5 -> Not Recommended\n\nFor the recommended top players, a locally-run phi-1.5 model synthesizes a detailed scouting report combining objective ratings and public fan sentiment statistics.',
          fig: scout_slides_fig_25,
          caption: 'Figure: Output sample from local phi-1.5 model generating a human-like scouting report.'
        }
      ],
      results: [
        {
          title: 'System Walkthrough & Code Details',
          desc: 'The user enters a profile query like "strong midfielder" in the Streamlit UI. The system matches attributes, filters candidates (e.g., Bruno Fernandes, Cole Palmer), retrieves fan sentiments, and generates the scouting summaries.',
          figs: [scout_slides_fig_22, scout_slides_fig_18, scout_slides_fig_17],
          captions: [
            'Figure 3: Streamlit Search UI interface.',
            'Figure 4: Candidate filtering results table for "strong midfielder".',
            'Figure 5: Fan sentiment analysis JSON output (Cole Palmer: positive_ratio: 0.53, toxic: 0.03).'
          ]
        },
        {
          title: 'Key Challenge: Slang, Sarcasm & Positive Toxicity',
          desc: 'A significant challenge arose with the model misinterpreting strong fan language as negative. For example, Cole Palmer\'s comment "...thank fuck he\'s good at football" contains toxic words but is contextually positive. Similarly, Bruno Guimarães\'s comment "Cunt but he\'s their cunt" was flagged as toxic, yet contextually expresses deep admiration. These examples show the difficulty models face in capturing sarcasm and positive-use profanity in passionate online sports forums.',
        }
      ],
      conclusion: 'AI Football Scouter successfully showcases a hybrid recommendation system bridging numerical statistics and public opinion. While the local lightweight models (BERT, phi-1.5) perform adequately, contextual slang and sarcasm pose limitations on sentiment accuracy. Future improvements include integrating multi-platform data (Twitter, YouTube) and fine-tuning models on domain-specific football fan vernacular.'
    }
  },
  archive: {
    id: 'archive',
    title: 'Milestone & Project Archive',
    subtitle: 'Comprehensive record of academic milestones, research publications, and engineering projects',
    author: 'Joohyoung Yi',
    affiliation: 'Art & Technology, Sogang University',
    email: 'yjh020701@sogang.ac.kr',
    tags: ['Academic', 'Research', 'Engineering', 'Timeline'],
    abstract: 'This timeline archive provides a detailed documentation of my academic milestones, published research papers, software engineering projects, and interactive designs since joining Sogang University. It encapsulates key projects spanning Sentiment Bias Analysis, Music Genre Recognition, NLP-based Recommendation Engines, and Web Architectures.',
    sections: {
      introduction: 'Welcome to the complete milestone and archive list. Below is a detailed view of academic achievements, publications, and software systems developed during my university curriculum.',
      methodology: [
        {
          title: '2026: Modern Web & Systems Deployments',
          desc: '• Bento Portfolio v1.1: Designed and built a premium responsive Bento Grid website with custom interactive dark/light modes using React, Vite, and Tailwind CSS.\n• Explored Explainable AI user interface designs to present complex model decisions visually.'
        },
        {
          title: '2025: NLP & Computer Vision Advancements',
          desc: '• SHEN Publication: Co-authored research investigating gender bias prefix allocations in Korean language models, identifying feature misattributions.\n• µ\'s Framework: Built a spectrogram-based classification pipeline with ResNet50 for musical genre recognition, achieving a test accuracy of 72.56%.\n• AI Football Scouter: Integrated statistical player filters, multilingual sentiment analyses, and local LLM summary generation into a single recommendation application.'
        },
        {
          title: '2021: Foundational Computing & Department Admission',
          desc: '• Admission to Sogang University Department of Art & Technology.\n• Developed core programming competencies in Python, deep learning framework APIs (PyTorch), and digital signal processing basics.'
        }
      ],
      results: [
        {
          title: 'Historical Milestone Logs Summary',
          desc: '1. Dec 2025: Finished SHEN Gender Bias Research (Paper / NLP)\n2. Nov 2025: Designed µ\'s Mel-Spectrogram pipeline (Project / CV & Audio)\n3. Jun 2025: Finished AI Football Scouter NLP Project (Project / BERT & LLM)\n4. Mar 2021: Entered Sogang University Art & Technology (Academic / Admission)'
        }
      ],
      conclusion: 'This archive acts as a living document, updated as new projects are completed and papers are published. For collaborations or technical discussions, feel free to get in touch.'
    }
  }
};

export const ProjectModal = ({ projectId, onClose }) => {
  const project = projectsData[projectId];
  const [activeTab, setActiveTab] = useState('overview');
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 200);
  };

  if (!project) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-950/70 ${
        isClosing ? 'animate-backdrop-out' : 'animate-backdrop-in'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`glass-panel w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-slate-200/50 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 transition-all duration-300 ${
          isClosing ? 'animate-modal-out' : 'animate-modal-in'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-slate-200/40 dark:border-slate-800/40 flex justify-between items-start gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug">
              {project.title}
            </h1>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-300 font-medium">
              {project.subtitle}
            </p>
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 flex flex-wrap gap-x-4">
              <span>{project.author}</span>
              <span>{project.affiliation}</span>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors duration-150"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-200/30 dark:border-slate-800/30 bg-slate-50/50 dark:bg-slate-950/20 px-4 md:px-8">
          {[
            { id: 'overview', label: 'Abstract & Intro', icon: BookOpen },
            { id: 'methodology', label: 'Methodology', icon: Cpu },
            { id: 'results', label: 'Results & Figures', icon: BarChart2 }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3.5 text-xs md:text-sm font-semibold border-b-2 transition-all duration-200 ${
                activeTab === tab.id 
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' 
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
              }`}
            >
              <tab.icon size={14} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 flex items-center gap-1.5">
                  <Award size={14} /> Abstract
                </h3>
                <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-5 rounded-2xl border border-slate-200/30 dark:border-slate-800/20">
                  {project.abstract}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">1. Introduction</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed whitespace-pre-line">
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
                    <div key={idx} className="space-y-2 bg-slate-50 dark:bg-slate-950/20 p-5 rounded-2xl border border-slate-200/20 dark:border-slate-800/10">
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
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 text-center max-w-sm">
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
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 text-center max-w-sm">
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
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center max-w-sm">
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
                <div key={idx} className="space-y-4 border-b border-slate-200/20 dark:border-slate-800/20 pb-6 last:border-0 last:pb-0">
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                      <Zap size={14} className="text-indigo-500" />
                      {r.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>

                  {/* Figure displays */}
                  {r.fig && (
                    <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-950/30 border border-slate-200/30 dark:border-slate-800/20 rounded-2xl w-fit mx-auto max-w-full">
                      <img 
                        src={r.fig} 
                        alt={r.caption} 
                        className="max-h-[500px] object-contain rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 bg-white p-2" 
                      />
                      <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 mt-2.5 text-center max-w-xl">
                        {r.caption}
                      </p>
                    </div>
                  )}

                  {/* Multi-Figure displays */}
                  {r.figs && (
                    <div className="space-y-4">
                      <div className={r.figs.length === 1 
                        ? "flex justify-center" 
                        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      }>
                        {r.figs.map((f, fIdx) => (
                          <div 
                            key={fIdx} 
                            className={`flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-950/30 border border-slate-200/30 dark:border-slate-800/20 rounded-xl ${
                              r.figs.length === 1 ? 'max-w-md w-full' : ''
                            }`}
                          >
                            <img 
                              src={f} 
                              alt="Figure component" 
                              className={`object-contain rounded border border-slate-200 dark:border-slate-800 bg-white p-1.5 w-full ${
                                r.figs.length === 1 ? 'max-h-[520px]' : 'max-h-48'
                              }`} 
                            />
                          </div>
                        ))}
                      </div>
                      <div className="space-y-1.5 text-center">
                        {r.captions.map((cap, cIdx) => (
                          <p key={cIdx} className="text-[10px] text-slate-400 dark:text-slate-500">
                            {cap}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">Conclusion</h4>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.sections.conclusion}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/30 border-t border-slate-200/40 dark:border-slate-800/40 flex justify-between items-center px-6 md:px-8">
          <span className="text-[10px] text-slate-400 font-mono">[Sogang Univ. Art & Tech Portfolio Project]</span>
          <button 
            onClick={handleClose}
            className="px-5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold transition-colors duration-150"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
