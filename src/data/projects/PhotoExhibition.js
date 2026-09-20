import photo_exhibition_1 from '../../assets/photo_exhibition_1.png';
import photo_exhibition_2 from '../../assets/photo_exhibition_2.png';
import photo_exhibition_3 from '../../assets/photo_exhibition_3.png';
import photo_exhibition_cover from '../../assets/photo_exhibition_cover.png';

export const photoexhibition = {
  id: 'photoexhibition',
  title: 'Photo Exhibition',
  subtitle: '감성적인 사진 전시회 & 아카이브 웹 서비스',
  author: 'Joohyoung Yi',
  affiliation: 'Art & Technology, Sogang University',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/PhotoExhibition',
  page: 'https://meisteryi.github.io/PhotoExhibition/',
  tags: ['React', 'exifreader', 'CSS Variables', 'Responsive Grid', 'UX/UI'],
  period: '2026.06 - 2026.07',
  featuredImage: photo_exhibition_cover,
  abstract: 'Photo Exhibition은 사진 촬영 시 함께 메타데이터로 저장되는 EXIF 정보를 자동으로 추출하여 에세이와 함께 전시하는 예술적 온라인 아카이브 플랫폼입니다. 반응형 메이슨리 그리드 레이아웃을 통해 자유롭게 사진들을 탐색하고, 감성적인 모노그래프 모드를 통해 사진들을 한 장씩 몰입하여 감상할 수 있습니다. 또한, 사용자는 모바일 기기 터치 및 PC 마우스 휠을 통해 직관적이고 부드러운 스냅 스크롤링과 더블 탭 하트 리액션을 경험할 수 있습니다.',
  sections: {
    introduction: '이 프로젝트는 아티스트이자 개발자로서, 일상의 찰나들을 포착한 사진 데이터와 그 이면의 생각(에세이)들을 웹상에서 가장 세련되고 몰입감 있는 레이아웃으로 표현하기 위해 기획되었습니다. EXIF 정보를 직접 파싱하여 작품의 무드를 결정짓는 기술적 세부사항을 투명하게 노출하고, 갤러리 관람 경험과 유사한 전시 모드를 구축하였습니다.',
    methodology: [
      {
        title: 'EXIF 메타데이터 파싱',
        desc: '`exifreader` 라이브러리를 사용해 사진 파일이 보유한 노출 시간, 조리개 값, 카메라 제조사 및 모델, 렌즈 초점 거리, ISO 값, GPS 좌표 등의 촬영 데이터를 클라이언트 측에서 즉시 추출하여 전시 카드 정보로 구조화합니다.',
        fig: photo_exhibition_3,
        caption: '그림 1: 업로드된 이미지에서 추출된 상세 EXIF 메타데이터 뷰어 모달.'
      },
      {
        title: '모노그래프 스냅 스크롤링 및 인터랙션',
        desc: '1. `requestAnimationFrame`과 `easeInOutCubic` 이징 함수를 활용한 커스텀 스크롤 글라이더를 제작하여 부드러운 페이지 스냅 전환 효과를 부여했습니다.\n2. `HeartButton` 컴포넌트는 사용자의 클릭 시 방사형으로 날아가는 8개의 입자 하트 애니메이션(CSS custom variables 및 keyframe 연동)을 트리거합니다.\n\n1. Implemented a custom scroll glider leveraging `requestAnimationFrame` and an `easeInOutCubic` easing utility to provide smooth vertical snap slide transitions.\n2. Features a physics-inspired `HeartButton` component triggering radiating heart particles driven by CSS custom property mappings and keyframe animations.',
        fig: photo_exhibition_2,
        caption: '그림 2: 세로 스냅 스크롤 및 감성적 타이포그래피가 적용된 모노그래프 전시 모드.'
      }
    ],
    results: [
      {
        title: '아카이브 메이슨리 그리드 및 관리 모드',
        desc: '반응형 메이슨리 그리드를 구성하여 가로세로 비율이 서로 다른 사진들을 고르게 레이아웃하고 마우스 호버 시 촬영 정보 요약을 오버레이로 제공합니다. 또한 비밀번호로 보호된 관리자 모드(기본값: admin)에서 카테고리를 편집하거나 사진을 삭제하고, EXIF 정보와 함께 에세이를 업로드할 수 있습니다.',
        fig: photo_exhibition_1,
        caption: '그림 3: 반응형 카테고리 필터와 메이슨리 레이아웃이 연동된 아카이브 메인 그리드.'
      }
    ],
    conclusion: 'Photo Exhibition은 바닐라 CSS의 자유도 높은 스타일링과 React의 모듈식 상태 머신을 융합하여 개발된 하이엔드 온라인 사진 전시 플랫폼입니다. 로컬 스토리지를 활용한 데이터 동기화와 최적화된 모바일 반응형 터치 인터랙션을 결합하여 사용자에게 오프라인 갤러리 이상의 깊이 있는 감상 경험을 제공합니다.',
  }
};
