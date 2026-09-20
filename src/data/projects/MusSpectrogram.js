import mus_fig_1 from '../../assets/mus_fig_1.png';
import mus_fig_2 from '../../assets/mus_fig_2.png';
import mus_fig_3 from '../../assets/mus_fig_3.png';
import mus_fig_4 from '../../assets/mus_fig_4.png';
import mus_fig_5 from '../../assets/mus_fig_5.png';
import mus_fig_6 from '../../assets/mus_fig_6.png';

export const mus = {
  id: 'mus',
  title: "µ's: Music Understanding via Spectrogram evaluation",
  subtitle: 'Music Genre Classification using Transfer Learning on Log-Mel Spectrogram Images / 전이 학습 기반 음악 장르 이미지 분류 시스템',
  author: 'Joohyoung Yi',
  affiliation: 'Art & Technology, Sogang University',
  email: 'yjh020701@sogang.ac.kr',
  link: '',
  page: '',
  tags: ['Deep Learning', 'PyTorch', 'Audio DSP', 'Spectrogram Trans', 'Transfer Learning', 'ResNet50'],
  featuredImage: mus_fig_1,
  abstract: '본 프로젝트는 음악 장르 분류 문제를 컴퓨터 비전 작업으로 재정의하여 오디오 영역의 분류 난제를 해결합니다. 오디오 신호를 2D Mel-Spectrogram 이미지로 변환하여 시각적 특징을 추출하고, ImageNet으로 사전 학습된 ResNet50 모델을 활용하는 전이 학습 방법론을 적용했습니다. 표준 GTZAN 데이터셋을 통한 실험 결과 10개 장르 분류에서 72.56%의 테스트 정확도를 보였으며, 오차 행렬(Confusion Matrix) 분석을 통해 유사한 청각적 특징을 공유하는 장르 간의 오분류 패턴을 시각적으로 규명했습니다.',
  sections: {
    introduction: '음악 정보 검색(MIR) 분야에서 합성곱 신경망(CNN)은 최근 스펙트로그램을 시각적 표상으로 분석하여 탁월한 성능을 발휘해  우리는 전통적인 수작업 특징(MFCC 등)에 의존하는 대신 Mel-Spectrogram에서 직접 복잡한 특성을 자동으로 학습하는 컴퓨터 비전 접근 방식의 음악 장르 분류 시스템인 µ\'s를 제안합니다. 소규모 음악 데이터셋의 학습 한계를 극복하기 위해 ImageNet 사전 학습 ResNet50 백본을 활용한 전이 학습을 적용하여 오디오 데이터로부터 풍부한 시각적 텍스처 패턴을 추출했습니다.',
    methodology: [
      {
        title: '데이터 전처리 파이프라인',
        desc: '1. 세그멘테이션: GTZAN 데이터셋의 30초 음원을 3초 단위의 클립 10개로 분할하여 데이터 크기를 1,000개에서 10,000개로 10배 확장하고 짧은 시간대의 특징 학습을 유도.\n2. 멜-스펙트로그램 변환: STFT(단시간 푸리에 변환)를 거쳐 멜 스케일(n_mels: 128) 이미지로 변환.\n3. 채널 복제: 1채널 그레이스케일 스펙트로그램을 3번 쌓아 RGB와 유사한 (128x130x3) 텐서로 변환하여 ResNet50의 입력 요구 규격 충족.\n\n1. Segmentation: Dividing 30-second tracks in the GTZAN dataset into ten 3-second clips. This expands the dataset from 1,000 to 10,000 samples and enables learning from short-interval features.\n2. Mel-Spectrogram Conversion: Performing STFT and converting to Mel scale (n_mels: 128).\n3. 3-Channel Adaptation: Stacking the 1-channel grayscale spectrograms three times to create an RGB-like (128x130x3) tensor, fitting ResNet50 input requirements.',
        fig: mus_fig_1,
        caption: '그림 1: 전처리 파이프라인. 원본 오디오를 3초 클립으로 분할하고, 로그-멜 스펙트로그램으로 변환 후 채널을 복제합니다.'
      },
      {
        title: '모델 및 학습 전략',
        desc: '분류 레이어(GlobalAveragePooling2D, Dropout 0.3, Softmax Dense Layer)가 탑재된 ResNet50 모델을 구성하고 2단계 학습 전략을 취했습니다.\n- 1단계 (특징 추출): ResNet50 백본 가중치를 동결하고 커스텀 분류 헤드만 프리징을 유지한 채 Adam 옵티마이저(학습률 1e-3)로 학습.\n- 2단계 (미세 조정): 백본 동결을 해제하고 전체 네트워크를 극소 학습률(1e-5)로 학습시켜 급격한 정보 유실(Catastrophic Forgetting)을 방지했습니다.'
      }
    ],
    results: [
      {
        title: '양적 성능 지표',
        desc: '독립된 테스트 세트(1,498개 세그먼트)에서 최종 평가를 실시하여 72.56%의 정확도를 획득했습니다. 짧은 3초 클립만으로 정확하게 장르를 분류할 수 있다는 점은 스펙트로그램 기반의 시각적 특징 추출 성능이 뛰어남을 증명합니다.',
        figs: [mus_fig_2, mus_fig_4],
        captions: [
          '그림 2: 안정적인 수렴을 보이는 정확도 및 손실 곡선.',
          '그림 4: 오차 행렬. 클래식(99.3%)과 디스코(76.7%) 장르에서 두드러진 성능을 보였습니다.'
        ]
      },
      {
        title: '시각적 패턴 및 정성적 분석',
        desc: '모델은 이미지의 시각적 텍스처 특징에 의존해 장르를 분류합니다:\n- 수직 줄무늬: 비트가 뚜렷한 힙합이나 디스코는 저주파 영역에 수직선 형태로 나타납니다.\n- 수평 흐름: 화성이 풍부한 클래식이나 재즈는 부드럽고 일정한 수평선 텍스처를 십니다.\n- 노이즈 밀도: 메탈과 록은 고주파 대역에 노이지하고 왜곡된 거친 텍스처 분포를 가집니다.',
        figs: [mus_fig_3, mus_fig_5, mus_fig_6],
        captions: [
          '그림 3: 대조적인 장르(클래식 vs 메탈)의 스펙트로그램 시각적 비교.',
          '그림 5 & 6: 정성 분석 케이스 스터디: Yesterday (어쿠스틱 기타 선율 때문에 록에서 컨트리로 오분류), Fate Symphony (클래식으로 올바르게 분류), Snow Halation (팝으로 올바르게 분류)'
        ]
      }
    ],
    conclusion: '우리는 음악 장르 분류 문제를 컴퓨터 비전 전이 학습(ResNet50)으로 해결하는 프레임워크를 제안하여 72.56%의 정확도를 달성했습니다. 정성 분석 결과 모델이 전통적인 음향 변수 대신 실제 스펙트로그램 이미지의 시각적 텍스처(화성, 비트, 노이즈)에 의존하고 있음이 입증되었습니다. 다만 가사나 음악적 구조 맥락을 포착하기 어렵다는 한계가 존재합니다.'
  }
};
