import yena_fanpage_profile from '../../assets/yena_fanpage_profile.jpg';
import yena_smiley_albumcover from '../../assets/yena_smiley_albumcover.jpg';
import yena_smartphone_albumcover from '../../assets/yena_smartphone_albumcover.jpg';
import yenalogo_pink from '../../assets/yenalogo_pink.png';

export const yenafanpage = {
  id: 'yenafanpage',
  title: 'YENA Fanpage',
  subtitle: '아티스트 최예나 반응형 웹 팬페이지 / Responsive Fan Website for Artist Choi Ye-na',
  author: 'Joohyoung Yi',
  affiliation: 'Art & Technology, Sogang University (2022 2nd Semester)',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/YENA_Fanpage_2022',
  page: '',
  tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web', 'Class Project'],
  featuredImage: yena_fanpage_profile,
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
};
