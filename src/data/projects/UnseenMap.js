import unseenmap_1 from '../../assets/unseenmap_1.png';

export const unseenmap = {
  id: 'unseenmap',
  title: 'Unseen Map Explorer',
  subtitle: 'EXIF 기반 여행 경로 시각화 및 미개척 골목 POI 탐색 서비스',
  author: 'Joohyoung Yi',
  affiliation: 'Art & Technology, Sogang University',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/FindAnUnknownPlace',
  page: 'https://meisteryi.github.io/FindAnUnknownPlace/',
  tags: ['Leaflet.js', 'exifr', 'Overpass API', 'Vanilla JS', 'CSS Animations'],
  featuredImage: unseenmap_1,
  abstract: 'Unseen Map Explorer는 사용자가 업로드한 다중 사진에서 EXIF GPS 메타데이터를 추출해 개별 여행 좌표로 변환하고 클러스터링(MarkerCluster) 기법으로 시각화합니다. 나아가 현재 지도상의 방문 지역을 300m x 300m의 동적 가상 그리드로 분할하여, 이미 방문한 그리드와 인접하지만 아직 가보지 않은 \'프론티어(Frontier) 미개척 그리드\'를 실시간으로 계산합니다. 그 후 Overpass API를 통해 해당 미개척 그리드 내부의 카페, 음식점, 베이커리 등 POI 데이터를 동적으로 쿼리하여 사용자에게 추천하며, 지도상의 경로가 애니메이션 형태로 뻗어나가는 커스텀 SVG 경로 연출을 더해 탐색의 흥미를 배가시킵니다.',
  sections: {
    introduction: '이 프로젝트는 여행 사진이라는 흔한 자원에서 위치 정보를 추출해 개인만의 디지털 지도를 생성하고, 더 나아가 \'내가 아직 걷지 않은 길과 장소\'를 시각적으로 제안하여 색다른 지역 탐색 경험을 유도합니다. 클라이언트 사이드 기술과 오픈소스 지도 API를 효과적으로 조율하여 별도의 고비용 서버 인프라 없이도 강력한 인터랙티브 공간 분석을 수행합니다.',
    methodology: [
      {
        title: 'EXIF 메타데이터 파싱 및 자동 좌표 보정',
        desc: '사용자가 여러 장의 사진을 업로드하면, exifr 라이브러리를 사용해 로컬 브라우저 환경에서 메타데이터를 즉시 파싱합니다. 위도, 경도 정보가 포함되지 않았거나 유실된 사진은 자동으로 필터링하며, GPS 데이터가 존재하는 항목만 지도 위의 타임라인과 마커 클러스터로 매핑합니다.'
      },
      {
        title: '그리드 기반 프론티어 및 인접 셀 탐색 알고리즘',
        desc: '사용자의 방문지를 기하학적 블록(약 300m 크기) 단위의 그리드로 매핑합니다. 방문한 그리드 셀의 상하좌우 인접 그리드 중 방문 흔적이 없는 셀들을 \'미개척지(Frontier)\'로 식별합니다. 사용자가 탐색 버튼을 누르면 이 미개척 영역 내부를 중심으로 분석 범위가 지정됩니다.'
      },
      {
        title: 'OSM Overpass API 동적 POI 쿼리 & SVG 애니메이션',
        desc: 'OpenStreetMap의 Overpass API를 활용하여 미개척지 그리드 경계 상자(Bounding Box) 내부의 음식점, 카페 등의 노드(node) 데이터를 실시간으로 수집합니다. 추천된 장소로 향하는 길은 stroke-dashoffset을 활용한 SVG 선 확장 애니메이션으로 표현되어 시각적 몰입감을 줍니다.'
      }
    ],
    results: [
      {
        title: 'Unseen Map Explorer 메인 인터페이스',
        desc: '사진 업로드 시, 각 위치가 맵 마커로 시각화되며 밀접한 마커들은 MarkerCluster 플러그인을 통해 수치화된 그룹으로 묶여 표시됩니다.',
        figs: [unseenmap_1],
        captions: ['그림 1: 사진 메타데이터 기반 여행 경로 시각화 및 미개척지 탐색 대시보드']
      }
    ],
    conclusion: 'Unseen Map Explorer는 단순한 이미지 뷰어를 넘어 공간 데이터 분석과 지도 인터페이스를 매끄럽게 결합한 웹 애플리케이션입니다. 클라이언트 기반 파싱으로 서버 연산 부하를 최소화했습니다. 향후 로컬 스토리지에 데이터를 백업하고 모바일 브라우저 터치 드래깅을 강화할 예정입니다.'
  }
};
