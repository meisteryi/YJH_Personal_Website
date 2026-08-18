import SHEN_fig_1 from '../../assets/SHEN_fig_1.png';
import SHEN_fig_2 from '../../assets/SHEN_fig_2.png';
import SHEN_fig_3 from '../../assets/SHEN_fig_3.png';
import SHEN_fig_4 from '../../assets/SHEN_fig_4.png';
import SHEN_fig_5 from '../../assets/SHEN_fig_5.png';
import SHEN_fig_6 from '../../assets/SHEN_fig_6.png';

export const shen = {
  id: 'shen',
  title: 'SHEN: Sentiment Hidden Eye aNalysis',
  subtitle: 'Investigating Gender Bias in Korean PLMs via Attention and Local Explanations',
  author: 'Joohyoung Yi',
  affiliation: 'Art & Technology, Sogang University',
  email: 'yjh020701@sogang.ac.kr',
  link: '',
  page: '',
  tags: ['XAI', 'NLP', 'Bias Analysis', 'KcELECTRA'],
  featuredImage: SHEN_fig_6,
  abstract: '사전 학습 언어 모델(PLM)은 감성 분석에서 뛰어난 성능을 보이지만, 성적 편향 등 사회적 편향을 상속할 위험이 있습니다. 본 연구는 KcELECTRA 모델이 예측 점수와 어텐션 메커니즘을 통해 젠더 정보를 처리하는 방식을 조사합니다. 실험 결과, 젠더어 교체에 따른 예측 점수의 변화는 직업 및 맥락에 따라 상이하여 여성이 항상 부정적으로 평가된다는 일관된 편향은 관찰되지 않았습니다. 그러나 어텐션 시각화 분석을 통해 모델이 감성 강조 부사(\'정말\' 등)와 유사한 수준의 높은 어텐션 가중치를 \'여-\'와 같은 젠더 접두사에 할당하는 \'특성 오귀인(Feature Misattribution)\' 현상을 발견했습니다. 이는 감성 분류에 불필요한 젠더 정보를 모델이 중요 특성으로 오인하고 있음을 보여주며, 예측 신뢰성에 잠재적인 무작위성을 초래함을 결론지었습니다.\n\nAlthough Pre-trained Language Models (PLMs) show high performance in sentiment analysis, they risk inheriting social biases. This study investigates how the KcELECTRA model processes gender information using Prediction Scores and Attention Mechanisms. Experimental results show that changes in prediction scores due to gender swapping vary by profession and context, with no consistent evidence that female terms are universally evaluated negatively. However, attention visualization revealed that the model assigns high attention weights to gender prefixes such as \'여-\', comparable to those assigned to sentiment-intensifying adverbs such as \'정말\' (e.g., "really"). This suggests a Feature Misattribution, where the model misidentifies gender as a salient feature for sentiment classification. We conclude that while directional bias is inconsistent, the model\'s over-attention to gender creates unpredictability in sentiment prediction.',
  sections: {
    introduction: '자연어 처리 모델이 인간의 언어로부터 사회적 편향을 상속받는 문제는 중요하며, 특히 한국어는 \'여-\'나 \'여류-\'와 같은 성별 접두사가 널리 쓰여 이의 영향력을 확인하는 것이 필수적입니다. 기존 연구들은 \'여성=부정적\', \'남성=긍정적\'과 같은 단순 이진 결과 매핑에 집중했습니다. 하지만 모델이 예측 점수를 유사하게 내더라도 내부적으로는 성별 정보에 크게 의존할 수 있습니다. 이에 본 연구는 성별 단어 치환에 따른 예측 변화와 어텐션 배포 패턴을 XAI 관점에서 정밀 분석합니다.\n\nAs natural language processing models learn from human language, they inevitably acquire social attributes such as gender and race. This issue is particularly salient in Korean due to the prevalence of gender-marking prefixes such as \'여-\' and \'여류-\', which makes it important to examine how models process these linguistic forms. Previous studies have largely focused on allocational bias, emphasizing binary outcome patterns such as \'male = positive\' and \'female = negative\'. However, model behavior is more complex: even when prediction scores appear similar, models may internally rely on gender information as a basis for sentiment judgments. To address this issue, this study investigates the model by analyzing changes in prediction scores under gender term substitution and examining the extent to which the model\'s attention is allocated to gender-related tokens.',
    methodology: [
      {
        title: '모델 선정 및 미세 조정 (Model Selection & Fine-tuning)',
        desc: '감성 분석 백본 모델로 KcELECTRA-base-v2022를 채택했습니다. KcELECTRA는 일반적인 뉴스 댓글 대규모 코퍼스로 사전 학습되어 신조어, 구어체 처리에 강력합니다. 네이버 영화 평점 코퍼스(NSMC) 데이터 중 학습용 30,000개, 평가용 5,000개를 무작위 샘플링하여 AdamW 옵티마이저를 통해 미세 조정을 수행했습니다.\n\nWe adopted KcELECTRA-base-v2022 as the backbone model for sentiment analysis. Unlike standard KoELECTRA, KcELECTRA is pre-trained on a large-scale corpus of Korean news comments, making it robust for processing colloquialisms, slang, and neologisms. We fine-tuned the model on the Naver Sentiment Movie Corpus (NSMC), using a randomly sampled 30,000 instances for training and 5,000 for testing, with the AdamW optimizer (learning rate: 5e-5, batch size: 32, 1 epoch).'
      },
      {
        title: '편향 분석 프레임워크 (Bias Analysis Framework)',
        desc: '1. 단어 치환 테스트: 10쌍의 성별 단어쌍(예: 감독/여감독)을 직업 템플릿 문장에 치환 적용하여 예측 점수 변동폭 측정.\n2. 설명 가능성 교차 검증: SHAP과 LIME 프레임워크를 통해 모델의 로컬 의사결정 시 특성 중요도를 시각화 및 비교.\n3. 어텐션 맵 추출: 최종 레이어의 [CLS] 토큰 어텐션 분포를 추출하여 단어별 가중치 할당 시각화.\n\n1. Word Swap Test: Substituting professions in fixed templates (e.g., "그 [직업]은 정말 천재적이다") with 10 pairs of gendered terms (e.g., 감독/여감독) to measure prediction score shifts.\n2. Surface-level Explanation: Utilizing SHAP and LIME to cross-validate feature importance.\n3. Attention Heatmap Analysis: Extracting the attention distribution of the [CLS] token from the final layer to visualize weight allocations.'
      }
    ],
    results: [
      {
        title: '단어 치환에 따른 예측 점수 변동 (Word Swap Prediction Scores)',
        desc: '성별 치환에 따른 예측 값 차이는 직업군별로 매우 다양하게 나타났습니다. 어느 한 성별이 일관되게 부정적이거나 긍정적으로 평가되는 경향은 관찰되지 않았으며, 이는 모델이 성별에 따른 단순 이진 할당 편향을 학습하지는 않았음을 시사합니다.\n\nScore differences across genders vary by occupation. No consistent pattern of one gender being systematically favored or disadvantaged was observed, suggesting the model has not learned a simplistic bias like "disliking women."',
        fig: SHEN_fig_1,
        caption: '그림 1: 10개 직업 대조군별 긍정 예측 점수 변화. 일방적인 편향이 아니라 직업에 따라 각기 다른 양상으로 나타납니다.\n\nFigure 1: Positive prediction scores for 10 Comparison pairs. Rather than a unilateral bias, the predictions vary depending on the occupation.'
      },
      {
        title: 'SHAP 및 LIME 분석 비교 (SHAP & LIME Comparison)',
        desc: 'SHAP은 감성 명시 단어(예: \'형편없-\')를 핵심 기여 요인으로 꼽고 성별 토큰은 매우 낮게 평가했습니다. 반면, LIME은 성별 마킹 접두사에 매우 높은 가중치를 주어 \'여배우\'라는 접두사가 강조 부사 \'정말\'보다 긍정 예측에 더 크게 기여했다고 표시했습니다. 이는 국소 섭동(Local Perturbation)에 민감한 LIME이 모델의 미세한 내부 젠더 토큰 의존도를 드러낸 결과입니다.\n\nSHAP identifies explicit sentiment words (e.g., \'형편없-\') as top features while ranking gender terms very low. In contrast, LIME assigns high weights to gender-marking prefixes, designating \'여배우\' (actress) as a higher positive contributor than the intensifier \'정말\' (really). This discrepancy arises because LIME is highly sensitive to local perturbations, thus capturing latent biases.',
        figs: [SHEN_fig_2, SHEN_fig_3, SHEN_fig_4],
        captions: [
          '그림 2 & 3: 배우 감성 문장에 대한 SHAP 설명. 실제 감성 단어가 최종 부정 예측을 유도합니다.\n\nFigure 2 & 3: SHAP explanation for male/female acting issues. Sentiment words drive the negative prediction.',
          '그림 4: LIME 분석. 모델이 \'여배우\' 접두사에 \'정말\' 부사보다 더 높은 긍정 기여도를 부여합니다.\n\nFigure 4: LIME explanation. The model assigns a higher positive contribution to \'여배우\' than to \'정말\'.'
        ]
      },
      {
        title: '어텐션 맵 분석 (특성 오귀인 규명) (Attention Heatmap Analysis)',
        desc: '"그 감독은 정말 천재적이다"와 "그 여감독은 정말 천재적이다"를 비교했습니다. [CLS] 토큰은 여성 접두사 \'여-\'에 0.08의 높은 가중치를 할당했는데, 이는 문장 내 핵심 감성 단어인 \'천재\'(0.11)에 육박하는 수준입니다. 즉, 모델이 단지 성별 정보일 뿐인 접두사를 강력한 감성 판단 근거로 오인하는 \'특성 오귀인\'이 입증되었습니다.\n\nComparing attention weights for "그 감독은 정말 천재적이다" and "그 여감독은 정말 천재적이다". The [CLS] token assigns a high attention weight of 0.08 to the gender prefix \'여-\', which is comparable to the key sentiment word \'천재\' (0.11). This demonstrates that the model misattributes gender prefix as a salient sentiment feature.',
        figs: [SHEN_fig_5, SHEN_fig_6],
        captions: [
          '그림 5: 남성 감독 문장의 어텐션 맵 (감성어 위주로 집중)\n\nFigure 5: Attention Heatmap for male director (focuses on sentiment words).',
          '그림 6: 여성 감독 문장의 어텐션 맵 (여- 접두사에 비정상적으로 집중)\n\nFigure 6: Attention Heatmap for female director (strongly focuses on gender prefix \'여-\').'
        ]
      }
    ],
    conclusion: '본 연구는 모델의 겉보기 분류 성능과 실제 내부 동작 메커니즘 사이에 큰 차이가 존재함을 드러냅니다. 겉으로는 중립적으로 보일지라도, 모델 내부는 성별 접두사를 감성 특성으로 오인하고 있습니다. 이는 실제 서빙 환경에서 예측 신뢰도의 불안정성을 키우는 요인입니다. 향후 편향 완화 학습을 설계하여 올바른 맥락 정보에 주의를 기울이도록 유도해야 합니다.\n\nOur study reveals a stark contrast between surface-level performance and internal model behavior. Looking only at prediction scores, no consistent bias was found. However, XAI tools (LIME and Attention Heatmaps) show that the model fixates on gender prefixes as sentiment features. While it currently produces correct predictions by chance, this poses a latent risk. Future research must focus on guiding models to attend to appropriate contextual cues rather than gender.'
  }
};
