import snapbackIcon from '../../assets/snapback_icon.png';
import snapbackDesignB3 from '../../assets/snapback_design_B3.png';

export const snapback = {
  id: 'snapback',
  title: '스냅백 (Snapback): 기억 기반 대화형 AI 스마트 갤러리',
  subtitle: '흐릿하게 기억나는 장면을 문장으로 설명하면 AI가 사진을 찾아주고 기록·앨범으로 이어주는 iOS & 웹 스마트 갤러리',
  tags: ['Flutter', 'OpenAI gpt-4o-mini', 'Vercel Serverless', 'iOS Live Activity', 'AI파이프라인', 'AI-UX'],
  period: '2026.11 - 현재',
  page: 'https://snapback-virid.vercel.app',
  link: 'https://github.com/meisteryi/Snapback',
  featuredImage: snapbackIcon,
  abstract: `수천 장의 사진 속에서 날짜나 장소가 정확히 기억나지 않는 장면을 **"비 오는 날 창가에서 먹은 디저트"**처럼 자연어로 설명하면 AI가 사진을 찾아주는 **대화형 스마트 갤러리 'Snapback'**입니다. iOS 네이티브 앱(Flutter + Live Activity 다이내믹 아일랜드)과 테스트·피드백용 웹 앱(Vercel)을 동시 지원하며, **4대 관점(시각·의미·정보 추출·라이프로깅) AI 사진 분석**과 **512px 배치 + 1280px 고해상도 정밀 재분석** 파이프라인을 구축했습니다. 또한 사용자가 찾은 기억을 **'대기 → 2회 확인 확정'** 2단계로 학습해 검색 정밀도를 높이고, **\`temperature: 0 + seed\` 고정 및 서버 근거 검증**으로 일관성과 무결성을 확보했으며, 사진 원본을 외부에 저장하지 않는 **프라이버시 우선(Privacy-First) 아키텍처**를 구현했습니다.`,
  sections: {
    introduction:
      '스마트폰 갤러리에 사진이 수천 장 쌓이면서 스크롤이나 날짜·폴더 기반 탐색으로는 원하는 장면을 찾기 어렵고, 스크린샷·문서 속 정보는 다시 꺼내보기 힘듭니다. Snapback은 사용자가 기억나는 단편적인 문장만으로 사진을 찾고, AI가 후보를 좁히는 질문("질문 한 번 더하기")을 던져 목표 사진을 정확히 찾아내며, 그 사진에서 추억·장소·문서 기록과 AI 앨범 생성까지 자연스럽게 이어지는 스마트 갤러리 프로덕트입니다.',
    methodology: [
      {
        title: '4대 관점 AI 사진 분석 & 2단계 해상도 최적화 파이프라인',
        desc: 'OpenAI gpt-4o-mini(서버 전용 호출)를 연동해 시각(피사체·옷차림·배경), 의미(유형·출처·요약), 정보 추출(문서·영수증 텍스트), 라이프로깅(검색 키워드)의 4가지 관점으로 사진을 구조화해 기기 내 텍스트 DB에 저장합니다. 1차는 512px 축소 이미지로 병렬 배치 분석(iOS 5장, 웹 2장)하고, 스크린샷·문서처럼 글자가 많은 이미지는 1280px 고해상도로 정밀 재분석해 속도와 정확도를 모두 확보했습니다.'
      },
      {
        title: '대화형 기억 검색 & 2단계 검증 기반 기억 학습 (Memory Learning)',
        desc: '기억 문장 입력 시 상위 30개 후보 내에서 변별력이 가장 높은 질문 1개를 AI가 생성해 후보를 좁혀갑니다. 사용자가 "맞아요"로 찾은 사진에는 당시 문장에서 사진 정보와 모순되지 않는 단어만 추출해 \'대기\' 키워드로 저장하고, 다른 검색에서 재등장해 두 번 확인될 때만 \'확정\' 키워드로 승격시켜 잘못된 기억 오염을 원천 차단합니다.'
      },
      {
        title: '결정론적 AI 일관성 & AI 앨범 3단계 생성 파이프라인',
        desc: 'temperature 0 + seed 고정으로 동일 검색의 재현성을 보장하고, AI가 제시한 근거 단어가 실제 사진 메타데이터에 존재하는지 서버가 재검증해 환각(Hallucination)을 방지합니다. "신촌에서 먹은 음식 모아줘" 같은 앨범 요청은 ① 요청 해석(행정동·기간 확장) → ② 서버 주소/날짜 1차 필터 → ③ AI 주제 판정의 3단계로 처리합니다.'
      },
      {
        title: '프라이버시 우선 보안 & B3 화이트 오렌지 UI / iOS Live Activity',
        desc: '사진 원본은 복사·업로드하지 않고 분석용 축소본만 전송하며, OpenAI API store: false, PII(이름·주민번호·계좌 등) 마스킹, 좌표 대신 시·구·동 주소만 전송, 앨범 잠금(salt + SHA-256 해시)을 적용했습니다. 디자인 B3(화이트 + 오렌지 #F26B1D, 캐릭터 \'찰칵이\')와 iOS 잠금화면·다이내믹 아일랜드 Live Activity까지 구현했습니다.'
      }
    ],
    results: [
      {
        title: 'Snapback 브랜드 아이덴티티(찰칵이) & B3 디자인 시스템',
        desc: '카메라 몸통과 렌즈 눈을 형상화한 캐릭터 \'찰칵이\'와 화이트 오렌지(#F26B1D) B3 디자인 시스템을 구축하고, 사진·기억·기록·앨범 4대 탭과 iOS Live Activity를 일관된 비주얼로 완성했습니다.',
        figs: [snapbackIcon, snapbackDesignB3],
        captions: [
          '그림 1: Snapback 공식 앱 아이콘 및 마스코트 캐릭터 \'찰칵이\'',
          '그림 2: Snapback 디자인 B3 (화이트 오렌지) UI/UX 시스템 시안'
        ]
      }
    ],
    conclusion: 'Snapback은 단순한 이미지 태깅을 넘어, 인간의 불완전한 기억 단서를 AI의 다단계 질의응답과 2단계 키워드 학습으로 보완하는 새로운 갤러리 탐색 패러다임을 구현했습니다. iOS 네이티브(Flutter + Live Activity)와 Vercel 웹을 아우르는 실사용 프로덕트 완성도와 엄격한 프라이버시·할루시네이션 방어 설계를 통해 실용적인 AI 프로덕트 엔지니어링 역량을 입증했습니다.'
  }
};
