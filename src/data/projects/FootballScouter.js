import scout_report_fig_1 from '../../assets/scout_report_fig_1.png';
import scout_report_fig_13 from '../../assets/scout_report_fig_13.png';
import scout_slides_fig_17 from '../../assets/scout_slides_fig_17.png';
import scout_slides_fig_18 from '../../assets/scout_slides_fig_18.png';
import scout_slides_fig_22 from '../../assets/scout_slides_fig_22.png';
import scout_slides_fig_25 from '../../assets/scout_slides_fig_25.png';

export const scout = {
  id: 'scout',
  title: 'AI Football Scouter',
  subtitle: 'Data and Sentiment Driven Player Recommendation System / 데이터 및 감성 분석 기반 축구 선수 추천 시스템',
  author: 'Joohyoung Yi, Yongseop Shin, Changyoung Lee',
  affiliation: 'NLP Class Project, Sogang University (2025 1st Semester)',
  email: 'yjh020701@sogang.ac.kr',
  link: '',
  page: '',
  tags: ['Python', 'NLP', 'KoBERT', 'Sentiment Analysis', 'Stat Filtering'],
  featuredImage: scout_slides_fig_22,
  abstract: '본 프로젝트는 축구 선수의 객관적인 능력치 데이터와 Reddit 커뮤니티의 주관적인 팬 여론 감성을 결합한 데이터 기반의 하이브리드 선수 추천 시스템인 AI Football Scouter를 제안합니다. 능력치 기반 필터링으로 후보군을 1차 선별한 뒤, Reddit 댓글 데이터를 수집하여 BERT 다국어 감성 모델 및 독성(Toxicity) 분석을 수행하고, 자체 정의한 규칙 기반 알고리즘을 적용한 후 로컬 경량 LLM(phi-1.5)을 사용해 자연어 스카우팅 보고서를 생성합니다. 더불어 포지션 키워드 정규화 처리와 축구 팬 특유의 강한 슬랭 및 sarcastic 표현으로 인한 오분류 예외 처리 모델 고도화 결과도 포함합니다.\n\nThis project introduces AI Football Scouter, a data-driven recommendation system that combines objective player statistics with subjective community sentiments from Reddit. Designed to overcome the limitations of numbers-only scouting, the system filters candidates from a dataset of player attributes, performs 3-way BERT sentiment and separate toxicity analyses on Reddit fan comments, applies a rule-based recommendation logic, and generates a human-like scouting summary using a local lightweight LLM (phi-1.5). We also report key edge cases including position query normalization fixes and contextual toxicity classification errors caused by strong football fan slang.',
  sections: {
    introduction: '현대 축구 스카우팅은 단순히 기록 수치에만 의존하지 않습니다. 팬들의 반응과 여론은 선수의 시장 가치, 심리적 상태, 미디어 노출에 지대한 영향을 미칩니다. 본 프로젝트는 CSV 데이터의 선수 스태츠와 Reddit에 누적된 팬들의 여론 데이터를 유기적으로 융합합니다. 자연어 프로필 쿼리를 입력받아 조건에 맞는 후보군을 필터링하고, Reddit API를 호출해 감성 수치 및 독성을 분석한 뒤 감독과 구단 프런트가 직관적인 결정을 내릴 수 있도록 자연어 보고서 형태로 요약 제공합니다.\n\nModern football scouting is no longer just about numbers. Community perception and fan sentiment increasingly affect player valuation, confidence, and media representation. The goal of this project is to combine players\' objective statistics with community opinions on Reddit. Our system ingests player metrics from a CSV file, accepts natural language profile queries, performs Reddit API extraction and sentiment/toxicity categorization, and outputs a synthesized scouting report to help head coaches and technical directors make informed decisions.',
    methodology: [
      {
        title: 'Step 01: CSV 기반 선수 필터링 및 쿼리 정규화 (CSV-Based Player Filtering & Query Normalization)',
        desc: '선수의 상세 객관적 능력치 속성을 로드하여 조건부 스코어링을 수행합니다. 초기 개발 시 "goalkeeper"를 검색했을 때 defending이나 stamina 등 범용 속성이 높게 측정된 살라와 같은 공격수가 최상위에 추천되는 문제가 존재했습니다. 이를 해결하기 위해 입력된 자연어 쿼리를 표준 포지션 코드(GK, DF, MF, FW)로 자동 매핑해 주는 `normalize_position_input()` 함수 및 해당 축구 구역에 할당된 선수군만 1차로 필터링하는 `filter_players_by_position()` 로직을 추가하여 포지션 오류를 원천 차단했습니다.\n\nThe system loads objective player attributes (pace, stamina, shooting, dribbling, etc.). Initially, searching a query like "goalkeeper" returned forwards like Salah because the classifier selected general attributes like "defending" or "stamina".\n\nTo resolve this, we implemented `normalize_position_input()` to map natural language queries directly to standard position codes (GK, DF, MF, FW) and added `filter_players_by_position()` to restrict recommendations to the appropriate playing zone before applying attribute scores.'
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
};
