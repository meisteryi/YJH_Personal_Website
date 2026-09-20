import gachatodo_1 from '../../assets/gachatodo_1.png';
import gachatodo_2 from '../../assets/gachatodo_2.png';
import gachatodo_3 from '../../assets/gachatodo_3.png';
import gachatodo_4 from '../../assets/gachatodo_4.png';
import gachatodo_5 from '../../assets/gachatodo_5.png';
import gachatodo_preview from '../../assets/gachatodo_preview.png';

export const gachatodo = {
  id: 'gachatodo',
  title: 'Gacha To-Do',
  subtitle: '할 일 완료로 모으는 코인과 픽셀 아쿠아리움 방치형 육성 게임',
  author: 'Joohyoung Yi',
  affiliation: 'Art & Technology, Sogang University',
  email: 'yjh020701@gmail.com',
  link: 'https://github.com/meisteryi/Gachagame_todo',
  page: 'https://meisteryi.github.io/Gachagame_todo/',
  tags: ['Flutter', 'ValueNotifier', 'Shared Preferences', 'Pixel Art', 'State Management'],
  featuredImage: gachatodo_3,
  abstract: '가챠 투두(Gacha To-Do)는 일상적인 할 일 관리(To-Do List)에 가챠(Gacha)와 방치형 육성 요소를 결합하여 지속적인 동기부여를 제공하는 Flutter 기반 모바일 애플리케이션입니다. 할 일을 완료해 획득한 코인으로 20여 종의 독특한 픽셀 물고기와 10여 종의 다채로운 수초를 수집하고 수조를 취향껏 인테리어할 수 있습니다. 일일/주간 미션, 먹이 주기와 영양제를 활용한 물고기 육성, 고유 ID 기반 클라우드 백업 시스템을 제공하며, 한국어, 영어, 일본어, 스페인어의 4개국 다국어를 전면 탑재했습니다.',
  sections: {
    introduction: '가챠 투두는 따분한 일상 작업 관리에 귀여운 픽셀 아쿠아리움 꾸미기 게임을 결합하여, 유저에게 보상 중심의 지속 가능한 동기부여를 제공하려는 목표로 시작되었습니다. Flutter의 유연한 그래픽 엔진을 통해 매끄러운 픽셀 그래픽 렌더링과 드래그 앤 드롭 인테리어 에디터를 모바일 디바이스에 최적화했습니다.',
    methodology: [
      {
        title: '드래그 앤 드롭 수초 배치 및 물리 생태 알고리즘',
        desc: '물고기 수조 편집 모드를 구축했습니다. 물고기 캐릭터들은 디바이스 크기에 맞게 가속도와 마찰력이 반영된 랜덤 바운싱 수중 유영 알고리즘(Bouncing Physics)을 적용받아 살아 움직이는 아쿠아리움 생태를 묘사합니다.'
      },
      {
        title: '반응형 로컬 상태 연동 및 영구 저장',
        desc: '별도의 복잡한 상태 관리 라이브러리 없이, ValueNotifier와 Custom ThemeManager를 결합하여 테마 전환, 코인 변동, 물고기 경험치 상태를 고성능으로 동기화했습니다. 획득한 아이템 데이터와 할 일 히스토리는 shared_preferences 패키지를 이용해 영구적으로 기기 내에 보존됩니다.'
      },
      {
        title: '알파뉴메릭 고유 ID 기반 클라우드 백업',
        desc: '복잡한 소셜 로그인 연동 없이, 유저마다 발급되는 알파뉴메릭 난수 고유 ID를 키값으로 사용해 수조 정보와 컬렉션 데이터셋을 클라우드 서버에 저장하고 복원할 수 있는 http API 통신 파이프라인을 구축하여 사용자 편의성을 극대화했습니다.'
      }
    ],
    results: [
      {
        title: '가챠 머신 화면',
        desc: '할 일을 완료해 모은 코인을 사용하여 새로운 물고기나 수초를 뽑는 가챠 머신 화면입니다. 1회 뽑기(1 코인)와 10회 연속 뽑기(10 코인)를 지원하며, 슬롯이 돌아가는 형태의 릴(Reel) 회전 애니메이션 연출(slot_machine.dart)을 통해 뽑기의 몰입감을 높였습니다. 화면 상단에는 먹이 개수와 현재 보유 코인이 실시간으로 업데이트되어 표시됩니다.',
        figs: [gachatodo_1],
        captions: ['그림 1: 릴 회전 애니메이션과 코인 뽑기 시스템이 적용된 픽셀 가챠 머신']
      },
      {
        title: '할 일 관리 화면',
        desc: '날짜별 할 일(To-Do) 목록을 생성, 수정 및 완료 처리할 수 있는 할 일 관리 화면입니다. 당일 완료한 작업 비중에 따라 상단의 오늘의 달성률 프로그레스 바가 차오르며, 우측 하단의 추가(+) 버튼으로 세부 정보(시간, 알림 설정, 장소, 메모 등) 및 카테고리를 분류해 등록할 수 있습니다.',
        figs: [gachatodo_2],
        captions: ['그림 2: 당일 달성률 프로그레스 바와 카테고리별 분류를 지원하는 할 일 관리 플래너']
      },
      {
        title: '아쿠아리움 수조 화면',
        desc: '획득한 물고기들과 수초들로 나만의 수조를 자유롭게 가꾸는 메인 아쿠아리움 화면입니다. 수초는 드래그 앤 드롭 편집 모드를 통해 원하는 좌표에 자유롭게 배치하거나 더블 탭으로 제거할 수 있으며, 물고기는 가속도와 마찰력이 적용된 무작위 유영 알고리즘에 따라 돌아다닙니다. 먹이 투여를 통해 레벨업(Lv.Max 5)하거나 영양제를 사용해 경험치 버프를 줄 수 있습니다.',
        figs: [gachatodo_3],
        captions: ['그림 3: 수초 드래그 앤 드롭 편집 및 물고기 유영 물리 엔진이 적용된 수조 샌드박스']
      },
      {
        title: '미션 및 퀘스트 화면',
        desc: '출석체크, 가챠 실행, 물고기 먹이 주기, 특정 개수 이상의 투두 완료 등 매일 00시에 자동 리셋되는 일일 퀘스트와 연속 출석 등의 주간 미션을 추적하는 화면입니다. 조건 충족 시 비활성화되어 있던 \'보상 받기\' 버튼이 활성화되며, 누르면 코인, 먹이, 영양제 등의 인게임 아이템 보상이 지급됩니다.',
        figs: [gachatodo_4],
        captions: ['그림 4: 일일 미션 및 주간 퀘스트 달성 시 인게임 아이템을 지급하는 퀘스트 대시보드']
      },
      {
        title: '아이템 상점 카테고리 화면',
        desc: '가챠(동물/수초 뽑기)와 소모품(먹이/영양제 상점), 수조 내부 데코 장식물 상점 등 다양한 인게임 물품을 구매할 수 있는 상점 카테고리 진입 화면입니다. 각 카테고리 카드별로 고유 픽셀 아트 아이콘이 렌더링되며, 업데이트 예정인 슬롯에는 자물쇠가 달린 비활성 아이콘(Locked)이 표현됩니다.',
        figs: [gachatodo_5],
        captions: ['그림 5: 물고기·수초 뽑기 및 먹이·영양제 등 소모품을 구매할 수 있는 인게임 상점']
      }
    ],
    conclusion: '가챠 투두는 생산성 도구에 게임 요소를 정교하게 이식한 게이미피케이션(Gamification) 프로젝트입니다. 향후 사운드 효과 삽입, 물고기 간의 상호작용 인공지능 강화, 소셜 수조 공유 기능 도입을 통해 지속적인 사용자 경험 확장을 노리고 있습니다.'
  }
};
