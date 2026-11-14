import rendiIcon from '../../assets/rendi_icon.png';
import rendiLogo from '../../assets/rendi_logo.png';

export const rendi = {
  id: 'rendi',
  title: '렌디 (RENDI): 스마트 렌터카 AI 적응 코칭 비서',
  subtitle: '현대자동차 차량용 앱 개발 공모전 출품작 · AAOS 인포테인먼트 & Pleos Connect SDK 기반 음성 코칭 에이전트 + 공식 웹 쇼케이스',
  tags: ['현대자동차 공모전', 'AAOS', 'Pleos Connect SDK', 'Vosk', 'Gemini Intent Proxy', 'AI-UX'],
  period: '2026.10 - 2026.11',
  page: 'https://meisteryi.github.io/RenDiWebSite/',
  link: 'https://github.com/meisteryi/RentACarAgent',
  featuredImage: rendiIcon,
  abstract: `**현대자동차 차량용 앱 개발 공모전 출품작**으로, 렌터카 이용자가 낯선 차량에 탑승했을 때 겪는 조작 불안을 해소하기 위해 개발한 **Android Automotive OS(AAOS) 기반 차량용 AI 적응 코칭 비서 '렌디(RENDI, RENT + BUDDY)'**입니다. 시동 직후 자차/이전 대여 차량 대비 차체 크기 변화(전장·전폭·전고 차이)를 1~2문장 TTS로 브리핑하고, 주행 중에는 **온디바이스 Vosk 한국어 웨이크워드('렌디')**와 **Pleos Connect SDK STT**, **Gemini Intent Proxy(\`gemini-3.8-flash\` Structured Output)**를 결합해 시선을 뺏기지 않는 핸즈프리 음성 Q&A를 제공합니다. 할루시네이션을 원천 차단하는 **Zero-Hallucination DB v4.2.1 검증 정책**을 적용했으며, STT 캡처 지연 시간을 **2,358ms에서 980ms로 약 58% 단축**했습니다. 또한 브랜드 정체성(현대자동차 네이비 \`#002c5f\` & '하·허·호' \`ㅎ+R\` 심볼)과 인터랙티브 라이브 챗 시뮬레이터를 담은 **공식 프로덕트 소개 웹사이트(RenDiWebSite)**까지 엔드투엔드로 구축했습니다.`,
  sections: {
    introduction:
      '렌터카 운전자는 매번 달라지는 차량의 버튼 위치와 차체 크기(세단 ↔ SUV ↔ 경차)로 인해 주행 중 시선 분산과 조작 불안을 겪습니다. 특히 주행 중 매뉴얼을 찾아보는 행위는 안전사고로 직결되므로, 시선 이동 없는(Eyes-Free) 즉각적 음성 코칭이 필수적입니다. 본 프로젝트는 Android Automotive OS(AAOS) 차량 환경에서 동작하는 스마트 렌터카 AI 적응 코칭 에이전트 \'렌디(RENDI)\'를 설계·구현하고, 이에 더해 브랜드 아이덴티티(RENT + BUDDY, 현대자동차 네이비 #002c5f, 렌터카 번호판 \'하·허·호\'의 ㅎ과 R을 결합한 심볼)와 인터랙티브 라이브 챗 시뮬레이터를 담은 공식 프로덕트 소개 웹사이트(RenDiWebSite)까지 통합 구축한 프로젝트입니다.',
    methodology: [
      {
        title: 'AAOS & Pleos Connect SDK 기반 주행 안전 아키텍처 (CarUxRestrictions DO 준수)',
        desc: 'Android Automotive OS(minSdk 28) 환경에서 주행 안전 규제를 엄격히 준수합니다. 시동 직후 정차 상태에서만 차량 선택 UI(StartupCarSelectActivity)를 허용해 현대자동차 MVP 5종(아반떼, 쏘나타 디 엣지, 투싼, 아이오닉 5, 캐스퍼) 및 6개 비교 체급 프리셋(경차·세단·SUV·승합차·트럭·없음)을 설정하도록 하고, 주행 중에는 시선 분산을 막기 위해 1~2문장 이내의 간결한 TTS 음성 안내로만 응답합니다.'
      },
      {
        title: '온디바이스 Vosk 웨이크워드 & Gemini Intent Proxy 하이브리드 음성 파이프라인',
        desc: '상시 대기 호출을 위해 온디바이스 Vosk 한국어 경량 모델(vosk-model-small-ko-0.22)로 "렌디" 웨이크워드를 감지한 뒤 Pleos Connect STT로 발화를 수신합니다. 이후 HTTPS Gemini Intent Proxy(gemini-3.8-flash JSON Schema Structured Output)가 51개 차량 인텐트를 분류하고, 60초간 previous_intent 컨텍스트를 유지해 연속 후속 질문("그럼 크기는 어때?")을 자연스럽게 처리합니다. 오프라인 환경에서는 로컬 키워드 폴백 엔진으로 자동 전환됩니다.'
      },
      {
        title: 'Zero-Hallucination DB v4.2.1 검증 정책 ("어디에 있는 어떻게 생긴 버튼")',
        desc: '차량 제어 안내에서 LLM의 환각(Hallucination)은 안전사고로 이어질 수 있으므로, LLM이 조작법을 임의로 생성하지 못하도록 구조적으로 차단했습니다. 237개 차량 버튼 DB를 검증 등급(FULL / LOCATION_ONLY / OPERATION_ONLY / EXISTS_ONLY / UNVERIFIED)으로 엄격히 분리·관리하여, 검증된 정보만으로 "어디에 있는 어떻게 생긴 버튼"인지 정확하게 음성 코칭합니다.'
      },
      {
        title: 'STT 파이프라인 병렬화 최적화 (캡처 지연 시간 약 58% 단축)',
        desc: 'AAOS 에뮬레이터 실측을 통해 TTS 종료와 Pleos STT 시작 사이의 병목 구간을 분석하고 파이프라인을 병렬화했습니다. 그 결과 STT 요청부터 실제 오디오 캡처 시작까지의 중앙값 지연 시간을 2,358ms(개선 전)에서 980ms(개선 후)로 약 58% 단축하여 주행 중 즉각적인 대화 응답성을 확보했습니다.'
      },
      {
        title: '공식 프로덕트 소개 웹사이트(RenDiWebSite) 통합 구축 & 브랜드 UX',
        desc: 'RENDI의 기술적 차별성과 사업성을 전달하는 공식 웹 쇼케이스(RenDiWebSite)를 함께 구축했습니다. ① Brand Identity(ㅎ+R 심볼 & #002c5f 네이비) ② Service Overview & Core UX("어디에 있는 어떻게 생긴 버튼" 시각화, 16:9 데모 영상 및 라이브 챗 시뮬레이터) ③ Business Viability(초보·청년 운전자의 렌터카 경험 → 자차 구매 전환 퍼널) ④ Differentiation(내장 매뉴얼 대비 즉각성·안전성 비교)의 4개 인터랙티브 섹션으로 구성했습니다.'
      }
    ],
    results: [
      {
        title: 'RENDI 앱 아이콘 & 현대자동차 5종 MVP / 하이브리드 AI 코칭 아키텍처',
        desc: '렌터카 번호판(하·허·호)의 ㅎ과 R을 결합한 앱 아이콘과 함께 아반떼·쏘나타 디 엣지·투싼·아이오닉 5·캐스퍼 5종 및 6개 체급 비교 프리셋을 지원하는 AAOS 인포테인먼트 코칭 비서입니다. 133개 시나리오 QA 스위트를 통과했으며 STT 캡처 지연 시간 58% 단축(2,358ms → 980ms)을 달성했습니다.',
        figs: [rendiIcon],
        captions: ['그림 1: RENDI(RENT + BUDDY) 공식 앱 아이콘 및 AAOS 차량 적응 코칭 비서 대표 비주얼']
      },
      {
        title: '공식 프로덕트 웹 쇼케이스(RenDiWebSite) 브랜드 아이덴티티 & 4대 섹션',
        desc: 'Hyundai Navy(#002c5f)와 Pure White(#FFFFFF) 컬러 시스템을 기반으로 브랜드 아이덴티티, 라이브 챗 시뮬레이터, 16:9 데모, 자차 전환 비즈니스 모델(Business Viability) 및 경쟁 차별성을 인터랙티브하게 소개하는 공식 웹사이트를 통합 제작했습니다.',
        figs: [rendiLogo],
        captions: ['그림 2: 렌터카 번호판(하·허·호)의 ㅎ과 R 심볼을 결합한 RENDI 공식 브랜드 로고 (RenDiWebSite)']
      }
    ],
    conclusion: '렌디(RENDI)는 차량용 OS(AAOS)의 엄격한 주행 안전 규제(CarUxRestrictions) 속에서 온디바이스 음성 감지(Vosk) + 클라우드 LLM 의도 분류(Gemini Structured Output) + 무결성 검증 DB(v4.2.1)를 결합해 실용적인 차량 내 AI 코칭 경험을 구현했습니다. 특히 STT 병렬화를 통한 58% 지연 시간 단축과 LLM 할루시네이션을 구조적으로 배제한 DB 등급화 설계, 133개 시나리오 QA 검증, 그리고 브랜드·비즈니스 모델·라이브 시뮬레이터까지 연결한 공식 웹 쇼케이스(RenDiWebSite) 통합 구축을 통해 AI UX 엔지니어링의 완성도를 입증했습니다.'
  }
};
