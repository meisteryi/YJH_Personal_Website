import sameThumbCover from '../../assets/samethumbdetect_cover.svg';

export const samethumbdetect = {
  id: 'samethumbdetect',
  title: 'SameThumbDetect: 같은 썸네일 중복 미디어 정리기',
  subtitle: '128-bit dHash + 2×2 RGB 시그니처와 NumPy 벡터 해밍 거리, OS 네이티브 썸네일 추출을 결합한 크로스플랫폼 PyQt5 정리기',
  tags: ['Python', 'PyQt5', 'NumPy', '128-bit dHash', 'PyAV', 'Win32 COM / QuickLook'],
  period: '2026.11',
  link: 'https://github.com/meisteryi/SameThumbDetect',
  featuredImage: sameThumbCover,
  abstract: `대용량 폴더 속 중복·유사 이미지(12종)와 동영상(18종)을 썸네일 유사도 기반으로 고속 탐지하고 안전하게 정리하는 **크로스플랫폼(Windows · macOS) 데스크톱 유틸리티 'SameThumbDetect'**입니다. Windows Shell COM API(\`IShellItemImageFactory\`)와 macOS QuickLook(\`qlmanage\`) + \`PyAV\` 동영상 프레임 추출을 통합한 멀티스레드 스캐너를 구축했으며, **128-bit dHash(수평 64bit + 수직 64bit)와 2×2 RGB 컬러 시그니처**를 결합한 하이브리드 특징 추출 후 **NumPy 8-bit Popcount LUT 벡터화 해밍 거리**와 **Union-Find 군집화**로 유사 미디어 그룹 및 절약 가능 용량을 실시간 산출합니다.`,
  sections: {
    introduction:
      '파일명이나 확장자, 인코딩 해상도가 달라 일반 파일 해시(MD5/SHA-256)로는 찾을 수 없는 중복 이미지와 동영상 파일은 저장 공간을 크게 차지합니다. SameThumbDetect는 사용자가 직관적으로 눈으로 보며 썸네일이 같은 미디어를 한눈에 묶어 비교하고, 가장 큰 원본은 보존한 채 나머지 사본을 안전하게 OS 휴지통으로 정리할 수 있도록 설계한 데스크톱 애플리케이션입니다.',
    methodology: [
      {
        title: '크로스플랫폼 OS 네이티브 썸네일 추출 & 멀티스레드 스캐너',
        desc: '이미지 12종(.jpg, .heic, .webp, .avif 등)과 동영상 18종(.mp4, .mkv, .mov 등)을 지원하며, Windows에서는 Win32 COM(IShellItemImageFactory) API로, macOS에서는 QuickLook 및 PyAV 프레임 추출로 썸네일을 고속 확보합니다. EXIF 회전 보정(exif_transpose)과 macOS 시스템 파일 필터링을 적용하고 QThread 기반 ScanWorker로 UI 프리징 없는 스캔을 구현했습니다.'
      },
      {
        title: '128-bit dHash + 2×2 RGB 컬러 시그니처 하이브리드 유사도 엔진',
        desc: '단순 픽셀 비교의 해상도·비율 민감도를 극복하기 위해 수평(9×8 → 64bit) 및 수직(8×9 → 64bit) dHash(총 128bit)와 2×2 RGB 색상 시그니처(12 floats)를 결합(0.85 × hash_sim + 0.15 × color_sim)했습니다. 또한 표준편차 3.0 미만의 단색/저분산 이미지는 별도 분기 처리해 오탐지(False Positive)를 방지합니다.'
      },
      {
        title: 'NumPy Popcount LUT 벡터 연산 & Union-Find 군집화',
        desc: '사전 계산된 8-bit popcount 룩업 테이블(_POPCOUNT_LUT)과 np.bitwise_xor 벡터 연산으로 다수 미디어 간의 해밍 거리를 고속 계산합니다. 유사도 임계값(기본 92.0%) 이상인 항목들을 경로 압축 Union-Find 알고리즘으로 DuplicateGroup으로 묶고 그룹별 회수 가능 용량(reclaimable_size)을 자동 집계합니다.'
      },
      {
        title: '오삭제 방지 PyQt5 정리 UX & Send2Trash 휴지통 연동',
        desc: '드래그 앤 드롭 폴더 탐색, 실시간 유사도 슬라이더 재그룹핑, 대표/최대 파일 자동 유지(KEEP/TRASH 상태 분리), 내장 미디어 플레이어 미리보기(MediaPreviewDialog), 그리고 영구 삭제 대신 OS 휴지통으로 보내는 send2trash 안전 삭제 워크플로우를 구현했습니다.'
      }
    ],
    results: [
      {
        title: 'SameThumbDetect 아키텍처 & 유사 미디어 비교·정리 워크플로우',
        desc: '그룹별 유사도(%)와 회수 가능 용량을 좌측 리스트에 표시하고, 우측 카드 비교 뷰에서 유지(KEEP)할 대표 파일과 휴지통 이동(TRASH) 대상을 직관적으로 선택·미리보기할 수 있는 PyQt5 데스크톱 UI를 완성했습니다.',
        figs: [sameThumbCover],
        captions: ['그림 1: SameThumbDetect 128-bit dHash 벡터 매칭 및 유사 미디어 그룹 정리 UI 아키텍처']
      }
    ],
    conclusion: 'SameThumbDetect는 OS별 네이티브 썸네일 파이프라인(Win32 COM / macOS QuickLook · PyAV)과 NumPy 기반 벡터화 퍼셉추얼 해싱(128-bit dHash + RGB 시그니처), Union-Find 클러스터링을 결합해 실용적인 대용량 미디어 중복 정리 도구를 완성한 프로젝트입니다.'
  }
};
