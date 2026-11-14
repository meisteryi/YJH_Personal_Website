const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const assetsDir = path.join(rootDir, 'src', 'assets');
const outputPdfDir = path.join(rootDir, 'output', 'pdf');

if (!fs.existsSync(outputPdfDir)) {
  fs.mkdirSync(outputPdfDir, { recursive: true });
}

function getBase64Image(filename) {
  const filePath = path.join(assetsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return '';
  }
  const ext = path.extname(filename).toLowerCase().replace('.', '');
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'webp' ? 'image/webp' : 'image/png';
  const data = fs.readFileSync(filePath);
  return `data:${mime};base64,${data.toString('base64')}`;
}

console.log('Loading academic project assets for 4-page compact PDF...');
const imgShen1 = getBase64Image('SHEN_fig_1.png');
const imgShen3 = getBase64Image('SHEN_fig_3.png');
const imgKkumteul1 = getBase64Image('kkumteul_1.jpeg');
const imgKkumteul2 = getBase64Image('kkumteul_2.jpeg');
const imgAstra1 = getBase64Image('astra_1.png');
const imgAstra2 = getBase64Image('astra_2.png');

const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>이주형(Joohyoung Yi) - 컴팩트 포트폴리오 (4P)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    @page {
      size: 297mm 210mm;
      margin: 0;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    :root {
      --bg-cream-1: #fdfbf7;
      --bg-cream-2: #f7ede2;
      --card-bg: rgba(255, 255, 255, 0.97);
      --card-border: rgba(195, 163, 138, 0.65);
      --color-tan: #c3a38a;
      --color-rose: #997577;
      --color-plum: #816271;
      --color-dark-purple: #4e495f;
      --color-steel-blue: #1c3144;
      --color-deep-slate: #08141e;
      --color-green: #1b5e20;
      --shadow-sm: 0 4px 16px rgba(78, 73, 95, 0.08);
    }
    body {
      font-family: 'Outfit', 'Pretendard', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: var(--bg-cream-2);
      color: var(--color-steel-blue);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      font-size: 16px;
      line-height: 1.42;
      word-break: keep-all;
      overflow-wrap: break-word;
    }
    .slide {
      width: 297mm;
      height: 210mm;
      max-height: 210mm;
      padding: 8mm 13mm 7mm 13mm;
      margin: 0 auto;
      background: linear-gradient(135deg, var(--bg-cream-1) 0%, var(--bg-cream-2) 100%);
      position: relative;
      page-break-after: always;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .slide:last-child {
      page-break-after: auto;
    }
    .slide::before {
      content: '';
      position: absolute;
      top: -60px;
      right: -60px;
      width: 280px;
      height: 280px;
      background: radial-gradient(circle, rgba(129, 98, 113, 0.12) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
    }
    .slide-content {
      position: relative;
      z-index: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
      padding-bottom: 6px;
      border-bottom: 1.5px solid rgba(195, 163, 138, 0.5);
    }
    .header-tag-group {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 2px;
    }
    .section-pill {
      background: var(--color-plum);
      color: #ffffff;
      font-size: 12px;
      font-weight: 800;
      padding: 2.5px 8px;
      border-radius: 4px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .slide-title {
      font-size: 22px;
      font-weight: 900;
      color: var(--color-deep-slate);
      letter-spacing: -0.4px;
    }
    .slide-subtitle {
      font-size: 13.5px;
      color: var(--color-rose);
      font-weight: 600;
    }
    .header-meta {
      text-align: right;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11.5px;
      font-weight: 700;
      color: var(--color-plum);
      white-space: nowrap;
    }
    .glass-card {
      background: var(--card-bg);
      border: 1.5px solid var(--card-border);
      border-radius: 10px;
      padding: 12px 14px;
      box-shadow: var(--shadow-sm);
    }
    .card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15.5px;
      font-weight: 800;
      color: var(--color-deep-slate);
      margin-bottom: 6px;
      gap: 8px;
    }
    .chip {
      font-size: 11px;
      font-weight: 700;
      color: var(--color-plum);
      background: rgba(129, 98, 113, 0.1);
      padding: 2px 7px;
      border-radius: 4px;
      white-space: nowrap;
    }
    .chip-primary {
      font-size: 11px;
      font-weight: 800;
      color: #ffffff;
      background: var(--color-plum);
      padding: 2.5px 8px;
      border-radius: 4px;
      white-space: nowrap;
    }
    .chip-green {
      font-size: 11.5px;
      font-weight: 800;
      color: var(--color-green);
      background: rgba(27, 94, 32, 0.1);
      border: 1px solid rgba(27, 94, 32, 0.25);
      padding: 2px 8px;
      border-radius: 4px;
      white-space: nowrap;
    }
    .problem-banner {
      background: rgba(129, 98, 113, 0.09);
      border-left: 3.5px solid var(--color-plum);
      padding: 6px 10px;
      border-radius: 4px;
      font-size: 12.5px;
      font-weight: 700;
      color: var(--color-deep-slate);
      margin-bottom: 7px;
    }
    .bullet-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 13px;
      color: var(--color-steel-blue);
    }
    .bullet-list li {
      position: relative;
      padding-left: 12px;
      line-height: 1.42;
    }
    .bullet-list li::before {
      content: '▪';
      position: absolute;
      left: 0;
      top: 0;
      color: var(--color-plum);
      font-weight: 900;
    }
    .grid-2col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      flex: 1;
      min-height: 0;
    }
    .grid-3col {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .content-card-tight {
      background: var(--card-bg);
      border: 1.5px solid var(--card-border);
      border-radius: 10px;
      padding: 10px 13px;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 8px;
      min-height: 0;
    }
    .card-image-section {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .card-image-section img {
      width: 100%;
      flex: 1;
      min-height: 0;
      max-height: 255px;
      object-fit: cover;
      border-radius: 6px;
      border: 1px solid rgba(195, 163, 138, 0.45);
      background: #ffffff;
    }
    .image-badge {
      font-size: 11px;
      font-weight: 700;
      color: var(--color-rose);
      text-align: center;
    }
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      padding-top: 6px;
      border-top: 1px solid rgba(195, 163, 138, 0.45);
      font-size: 12px;
      font-weight: 600;
      color: var(--color-dark-purple);
    }
    .footer-left {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    .page-number {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 800;
      color: var(--color-plum);
      white-space: nowrap;
    }
  </style>
</head>
<body>

  <!-- ================= SLIDE 1: SELF-INTRODUCTION & COMPETENCY OVERVIEW ================= -->
  <div class="slide">
    <div class="slide-content">
      <div class="slide-header">
        <div>
          <div class="header-tag-group">
            <span class="section-pill">01. SELF-INTRODUCTION</span>
            <h1 class="slide-title" style="font-size: 25px;">이주형 (Joohyoung Yi) · AI 프로덕트 기획 &amp; AI-UX</h1>
          </div>
          <div class="slide-subtitle">도메인 문제 정의부터 AI 파이프라인 설계, 정량 A/B 테스트 검증까지 연결하는 융합형 기획자</div>
        </div>
        <div class="header-meta">
          <span>COMPACT PORTFOLIO (4P)</span>
        </div>
      </div>

      <!-- Top Hero Statement + 3 Competency Pillars -->
      <div class="glass-card" style="padding: 11px 15px; border-left: 5px solid var(--color-plum); margin-bottom: 9px;">
        <div style="font-size: 15px; font-weight: 800; color: var(--color-deep-slate); margin-bottom: 4px;">
          "인문·예술적 기획 감각(Art &amp; Technology)과 공학적 AI 구현 역량(인공지능 AI)을 결합해 사용자 가치를 숫자로 증명합니다."
        </div>
        <div style="font-size: 13px; color: var(--color-steel-blue); line-height: 1.45;">
          서강대학교에서 <strong>Art &amp; Technology(주전공)</strong>와 <strong>인공지능 AI(복수전공)</strong>를 전공하며, 단순 기능 탑재를 넘어 <strong>① 도메인 본질 규명(#도메인분석)</strong> → <strong>② 모델·파이프라인 구축(#AI파이프라인)</strong> → <strong>③ 정량적 사용성 검증(#AI-UX)</strong>으로 이어지는 학부 전공 프로젝트들을 완결해왔습니다.
        </div>
      </div>

      <!-- 3 Columns: Education / Leadership & Experience / Skills & Credentials -->
      <div class="grid-3col" style="flex: 1; min-height: 0;">
        <!-- Col 1: Education & Global -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; gap: 7px;">
          <div class="card-title">
            <span>학력 및 전공 이수</span>
            <span class="chip-primary">Education</span>
          </div>
          <div style="background: rgba(247,237,226,0.55); border: 1px solid var(--card-border); border-radius: 7px; padding: 8px 10px;">
            <div style="font-size: 15px; font-weight: 800; color: var(--color-deep-slate);">서강대학교 (Sogang Univ.)</div>
            <div style="font-size: 12.5px; font-weight: 700; color: var(--color-plum);">Art &amp; Technology · 인공지능 AI 복수전공</div>
            <div style="font-size: 12px; color: var(--color-steel-blue); margin-top: 2px;">2021.03 ~ 재학 중 · 누적 평점 <strong>3.8 / 4.3</strong></div>
          </div>
          <div style="background: rgba(247,237,226,0.55); border: 1px solid var(--card-border); border-radius: 7px; padding: 8px 10px;">
            <div style="font-size: 15px; font-weight: 800; color: var(--color-deep-slate);">일본 조치대학교 (Sophia Univ.)</div>
            <div style="font-size: 12.5px; font-weight: 700; color: var(--color-plum);">FLA (Faculty of Liberal Arts) 교환학생</div>
            <div style="font-size: 12px; color: var(--color-steel-blue); margin-top: 2px;">2026.04 ~ 2026.07 · 영·일 다문화 세미나 이수</div>
          </div>
          <div>
            <div style="font-size: 12.5px; font-weight: 800; color: var(--color-deep-slate); margin-bottom: 4px;">핵심 전공 교과</div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px;">
              <span class="chip">HCI (인간-컴퓨터 상호작용)</span>
              <span class="chip">딥러닝 &amp; NLP</span>
              <span class="chip">프로덕트 매니지먼트</span>
              <span class="chip">미디어아트</span>
            </div>
          </div>
        </div>

        <!-- Col 2: Leadership & Academic Research -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; gap: 7px;">
          <div class="card-title">
            <span>리더십 및 전공 프로젝트</span>
            <span class="chip-primary">Leadership</span>
          </div>
          <ul class="bullet-list">
            <li><strong>SCG 학부연구 팀장 (2025.03~12)</strong>: 생성형 AI '꿈틀' 프로젝트 총괄 기획·파이프라인 설계 및 연구 완결</li>
            <li><strong>아트&amp;테크놀로지 학생회장 (2022.03~12)</strong>: 학과 대표, 예산 집행 및 학생회 소통 총괄</li>
            <li><strong>제11회 ATC 전시 홍보팀 (2022.07~11)</strong>: 4,800여 명 관람객 대상 전시 브랜딩 및 바이럴 기획</li>
            <li><strong>공군 병장 만기전역 (2023.02~2024.11)</strong>: 조직 내 책임감 및 위기 대처 역량 체득</li>
          </ul>
          <div style="background: rgba(129,98,113,0.08); padding: 7px 9px; border-radius: 6px; border: 1px solid rgba(129,98,113,0.25); font-size: 12px; line-height: 1.45;">
            <strong style="color: var(--color-plum);">📌 본 4P 포트폴리오 구성 (학부 전공 핵심 3선)</strong><br>
            • <strong>P.02 [#도메인분석]</strong> SHEN: 한국어 PLM 젠더 편향 XAI 연구<br>
            • <strong>P.03 [#AI파이프라인]</strong> 꿈틀: KoGPT-2 + SDXL 동화책 생성<br>
            • <strong>P.04 [#AI-UX]</strong> ASTRA: GOMS 모델링 &amp; 36인 A/B 테스트
          </div>
        </div>

        <!-- Col 3: Skills, Languages & Credentials -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; gap: 7px;">
          <div class="card-title">
            <span>기술 스택 · 어학 · 자격</span>
            <span class="chip-primary">Credentials</span>
          </div>
          <div>
            <div style="font-size: 12.5px; font-weight: 800; color: var(--color-deep-slate); margin-bottom: 3px;">Tech &amp; UX Stack</div>
            <div style="font-size: 12px; color: var(--color-steel-blue); line-height: 1.48;">
              • <strong>AI/Data</strong>: Python, PyTorch, Hugging Face, KoGPT-2, SDXL, LIME/SHAP, Gemini API<br>
              • <strong>UX/Design</strong>: Figma, GOMS Modeling, Wilcoxon A/B Test
            </div>
          </div>
          <div style="border-top: 1px solid var(--card-border); padding-top: 6px;">
            <div style="font-size: 12.5px; font-weight: 800; color: var(--color-deep-slate); margin-bottom: 3px;">글로벌 어학 &amp; 공인 자격</div>
            <div style="font-size: 12px; color: var(--color-steel-blue); line-height: 1.48;">
              • <strong>영어</strong>: OPIc IH · TOEFL iBT 84<br>
              • <strong>일본어</strong>: JLPT N1 (최고등급) · FLEX 865점 (1B)<br>
              • <strong>자격</strong>: TESAT S등급 (상위 0.7%) · 한국사 1급
            </div>
          </div>
          <div style="background: rgba(247,237,226,0.6); border: 1px solid var(--card-border); border-radius: 6px; padding: 7px 10px; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; line-height: 1.5;">
            <div>📧 <strong>yjh020701@gmail.com</strong></div>
            <div>🔗 <a href="https://github.com/meisteryi" target="_blank" style="color: inherit;">github.com/meisteryi</a></div>
            <div>🌐 <a href="https://meisteryi.github.io/YJH_Personal_Website/" target="_blank" style="color: var(--color-plum); font-weight: 700;">meisteryi.github.io/YJH_Personal_Website</a></div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <div class="footer-left">
          <span>이주형 (Joohyoung Yi) | 서강대학교 Art &amp; Technology · 인공지능 AI</span>
          <span class="chip-green">OPIc IH · JLPT N1 · TESAT S등급</span>
        </div>
        <div class="page-number">P.01 / 04</div>
      </div>
    </div>
  </div>

  <!-- ================= SLIDE 2: #도메인분석 — SHEN (XAI BIAS RESEARCH) ================= -->
  <div class="slide">
    <div class="slide-content">
      <div class="slide-header">
        <div>
          <div class="header-tag-group">
            <span class="section-pill">02. #도메인분석</span>
            <h2 class="slide-title">SHEN: 한국어 PLM 젠더 편향성 심층 XAI 분석</h2>
          </div>
          <div class="slide-subtitle">인공지능 전공 프로젝트 (2025.09 – 2025.12) · 한국어 고유 언어 편향 도메인 규명 및 설명가능 AI 실증</div>
        </div>
        <div class="header-meta">
          <span>ACADEMIC RESEARCH · XAI</span>
        </div>
      </div>

      <div class="grid-2col">
        <div class="content-card-tight">
          <div>
            <div class="card-title">
              <span>도메인 문제 정의 &amp; XAI 다각도 진단 설계</span>
              <span class="chip-primary">Domain &amp; XAI</span>
            </div>
            <div class="problem-banner">
              [도메인 병목] 외형적 성별 중립 문장 내부에 잠재된 한국어 PLM의 구조적 특성 오귀인(Attribute Misattribution) 규명
            </div>
            <ul class="bullet-list">
              <li><strong>한국어 편향 도메인 데이터셋 구축</strong>: K-StereoSet, K-BBQ, KoSBi 기반 문장 페어 및 성별·직업 대조 시나리오 정제</li>
              <li><strong>다중 XAI 교차 검증 파이프라인</strong>: Attention Map, LIME, SHAP(Kernel/Partition)을 결합해 KoBERT · KoELECTRA · KcELECTRA 내부 판단 근거 추적</li>
              <li><strong>핵심 발견</strong>: 모델이 문맥의 객관적 근거 대신 특정 성별·직업 토큰에 과도한 주의(Attention)를 기울여 왜곡 추론하는 <strong>특성 오귀인(Misattribution)</strong> 실증</li>
              <li><strong>실무 기여</strong>: AI 프로덕트 배포 전 편향 리스크 사전 탐지용 <strong>XAI 거버넌스 진단 프레임워크</strong> 확립</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgShen1}" alt="SHEN Attention Heatmap" style="object-position: center;" />
            <span class="image-badge">▲ 그림 1: 한국어 PLM 어텐션 히트맵을 통한 젠더 편향 토큰 과집중 현상 시각화</span>
          </div>
        </div>

        <div class="content-card-tight">
          <div>
            <div class="card-title">
              <span>정량적 비교 실험 &amp; 편향 완화 인사이트</span>
              <span class="chip-primary">Empirical Results</span>
            </div>
            <div class="problem-banner">
              [핵심 성과] 모델별 편향 민감도 정량 비교 및 XAI 기반 신뢰성 검증 체계 구축 (동일 계열 전공작: AI Football Scouter)
            </div>
            <ul class="bullet-list">
              <li><strong>모델 아키텍처별 편향 패턴 도출</strong>: 사전학습 코퍼스 특성(뉴스 vs 커뮤니티 댓글)에 따른 KcELECTRA와 KoBERT 간 편향 양상 차이 정량화</li>
              <li><strong>LIME · SHAP 기여도 분해</strong>: 긍정/부정 및 고정관념 예측에 실제로 기여한 하위 토큰 가중치를 정량 수치로 추출</li>
              <li><strong>전공 도메인 분석 시너지</strong>: 동일 학기 수행한 <em>AI Football Scouter</em>(스포츠 스카우팅 비정형 감성 분석 + 정량 매트릭스)와 함께 도메인 특화 데이터 파이프라인 역량 입증</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgShen3}" alt="SHEN LIME SHAP Analysis" style="object-position: center;" />
            <span class="image-badge">▲ 그림 2: LIME · SHAP 기반 한국어 문장 내 편향 유발 토큰 기여도 정량 분석 결과</span>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <div class="footer-left">
          <span>#도메인분석: 한국어 NLP 편향성이라는 비정형 도메인 문제를 XAI 교차 검증으로 정량 규명</span>
          <span class="chip-green">KoBERT · KoELECTRA · LIME · SHAP</span>
        </div>
        <div class="page-number">P.02 / 04</div>
      </div>
    </div>
  </div>

  <!-- ================= SLIDE 3: #AI파이프라인 — 꿈틀 (KKUMTEUL) ================= -->
  <div class="slide">
    <div class="slide-content">
      <div class="slide-header">
        <div>
          <div class="header-tag-group">
            <span class="section-pill">03. #AI파이프라인</span>
            <h2 class="slide-title">꿈틀 (Kkumteul): 생성형 AI 기반 꿈 시각화 동화책 플랫폼</h2>
          </div>
          <div class="slide-subtitle">서강대 SCG 학부연구 팀장 (2025.03 – 2025.12) · KoGPT-2 + SDXL 1.0 + LoRA 2-Stage 멀티모달 파이프라인</div>
        </div>
        <div class="header-meta">
          <span>SCG UNDERGRADUATE RESEARCH</span>
        </div>
      </div>

      <div class="grid-2col">
        <div class="content-card-tight">
          <div>
            <div class="card-title">
              <span>2-Stage 생성형 AI 파이프라인 아키텍처</span>
              <span class="chip-primary">Multimodal Pipeline</span>
            </div>
            <div class="problem-banner">
              [파이프라인] 모호한 꿈 텍스트 → KoGPT-2 3단 서사 정제 → SDXL 1.0 + LoRA 일관 화풍 동화책 3p 자동 생성
            </div>
            <ul class="bullet-list">
              <li><strong>Stage 1 — 서사 구조화 (KoGPT-2 Fine-tuning)</strong>: 단편적이고 파편화된 꿈 기록을 기·승·전·결 3페이지 동화 내러티브 및 프롬프트로 자동 변환</li>
              <li><strong>Stage 2 — 화풍 일관성 제어 (SDXL 1.0 + LoRA)</strong>: 동화책 페이지마다 캐릭터·배경 화풍이 무너지는 문제를 LoRA 어댑터 가중치 제어로 해결</li>
              <li><strong>엔지니어링 완결성</strong>: Flask 추론 API 서버와 웹 인터페이스를 연동해 텍스트 입력부터 3페이지 삽화·텍스트 동화책 렌더링까지 엔드투엔드 자동화</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgKkumteul1}" alt="Kkumteul Architecture" style="object-position: center;" />
            <span class="image-badge">▲ 그림 3: 꿈틀(Kkumteul) 생성형 AI 2-Stage 내러티브·이미지 생성 파이프라인 결과</span>
          </div>
        </div>

        <div class="content-card-tight">
          <div>
            <div class="card-title">
              <span>팀장 리딩 성과 &amp; 학부 연구 완결</span>
              <span class="chip-primary">Leadership &amp; Output</span>
            </div>
            <div class="problem-banner">
              [리더십] SCG 학부연구 팀장으로서 기획·데이터 파인튜닝·화풍 튜닝·웹 배포까지 전 주기 리딩 (동일 계열: µ's 오디오 분류)
            </div>
            <ul class="bullet-list">
              <li><strong>사용자 정서 케어 UX</strong>: 불안하거나 모호한 무의식의 꿈을 따뜻한 동화책 서사로 재해석해 심리적 환기와 아카이빙 가치 제공</li>
              <li><strong>화풍 일관성 확보</strong>: 단일 프롬프트 기반 생성 대비 3페이지 연속 장면의 색감·화풍 통일성을 안정적으로 유지</li>
              <li><strong>전공 AI 파이프라인 확장성</strong>: 동일 학기 <em>µ's (Log-Mel Spectrogram 전이학습 음악 장르 분류)</em> 등 Vision·Audio·LLM 전반의 모델 파이프라인 구축 역량 입증</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgKkumteul2}" alt="Kkumteul Storybook UI" style="object-position: center;" />
            <span class="image-badge">▲ 그림 4: 3페이지 동화책 형태로 완결된 꿈 시각화 인터랙티브 UI</span>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <div class="footer-left">
          <span>#AI파이프라인: 텍스트(KoGPT-2)와 이미지(SDXL + LoRA)를 유기적으로 연결한 멀티모달 생성 파이프라인</span>
          <span class="chip-green">SCG 학부연구 팀장 · 3p 동화책 자동 생성</span>
        </div>
        <div class="page-number">P.03 / 04</div>
      </div>
    </div>
  </div>

  <!-- ================= SLIDE 4: #AI-UX — ASTRA (USABILITY & A/B TEST) ================= -->
  <div class="slide">
    <div class="slide-content">
      <div class="slide-header">
        <div>
          <div class="header-tag-group">
            <span class="section-pill">04. #AI-UX</span>
            <h2 class="slide-title">ASTRA: GOMS 모델링 &amp; 36인 A/B 테스트 기반 UX 개선</h2>
          </div>
          <div class="slide-subtitle">HCI / UX 전공 프로젝트 (2025.03 – 2025.06) · 인지 부하 정량 측정 및 Wilcoxon 비모수 통계 검증 완결</div>
        </div>
        <div class="header-meta">
          <span>HCI · QUANTITATIVE UX</span>
        </div>
      </div>

      <div class="grid-2col">
        <div class="content-card-tight">
          <div>
            <div class="card-title">
              <span>UX 진단: GOMS 모델링 &amp; 친숙도 보존 전략</span>
              <span class="chip-primary">Cognitive Modeling</span>
            </div>
            <div class="problem-banner">
              [UX 철학] 전면 재설계로 인한 학습 비용을 피하고 기존 멘탈 모델을 존중하는 '점진적 개선(Familiarity Preservation)'
            </div>
            <ul class="bullet-list">
              <li><strong>실사용 병목 발견</strong>: 대학 모바일 LMS(ASTRA) 공지 확인 과정에서 발생하는 불필요한 스크롤, 깊은 탐색 뎁스, 뒤로가기 맥락 상실 규명</li>
              <li><strong>GOMS 정량 인지 모델링</strong>: 과업 수행에 필요한 물리적 클릭 수, 시각 탐색, 멘탈 준비(M) 시간을 이론적으로 모델링해 병목 수치화</li>
              <li><strong>최소 침습 개선안 설계</strong>: 최신순 정렬·필터 직관화 및 내비게이션 동선을 최적화한 Figma 인터랙티브 프로토타입 제작</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgAstra1}" alt="ASTRA GOMS Analysis" style="object-position: center top;" />
            <span class="image-badge">▲ 그림 5: 기존 모바일 LMS 사용성 병목 진단 및 GOMS 인지 부하 분석</span>
          </div>
        </div>

        <div class="content-card-tight">
          <div>
            <div class="card-title">
              <span>36인 A/B 테스트 &amp; 통계적 유의성 입증</span>
              <span class="chip-primary">Statistical Proof</span>
            </div>
            <div class="problem-banner">
              [검증 결과] 실사용자 36인 화면 녹화 데이터 기반 Wilcoxon Signed-Rank 검정 전 항목 유의수준(p &lt; 0.05) 통과
            </div>
            <ul class="bullet-list">
              <li><strong>만족도 100% 향상 (p &lt; 0.003)</strong>: 기존 UI 대비 개선안의 주관적 사용성 평가 점수 및 선호도 통계적 유의미 상승</li>
              <li><strong>과업 수행 시간 유의미 급감 (p &lt; 0.0006)</strong>: 목표 공지 탐색 완료 시간 및 불필요한 스크롤 횟수 대폭 단축</li>
              <li><strong>AI-UX 실무 적용력</strong>: 직관에 의존하지 않고 <em>인지 모델링 → 프로토타이핑 → 통계적 가설 검증</em>으로 사용자 가치를 입증하는 프로세스 확립</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgAstra2}" alt="ASTRA Improved Prototype" style="object-position: center top;" />
            <span class="image-badge">▲ 그림 6: 최신순 정렬·내비게이션 개선 Figma 프로토타입 및 A/B 테스트 검증</span>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <div class="footer-left">
          <span>#AI-UX: GOMS 인지 모델링과 36인 A/B 테스트(Wilcoxon 검정)로 UX 개선 효과를 숫자로 입증</span>
          <span class="chip-green">만족도 100%↑ (p&lt;0.003) · 시간 급감 (p&lt;0.0006)</span>
        </div>
        <div class="page-number">P.04 / 04 (END)</div>
      </div>
    </div>
  </div>

</body>
</html>`;

const htmlOutputPath = path.join(rootDir, 'compact_portfolio.html');
fs.writeFileSync(htmlOutputPath, htmlContent, 'utf-8');
console.log(`Saved Compact HTML to ${htmlOutputPath}`);

const pdfOutputPath = path.join(outputPdfDir, 'Joohyoung_Yi_Compact_Portfolio.pdf');
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

if (fs.existsSync(chromePath)) {
  console.log('Generating 4-page Compact A4 Landscape PDF via Chrome Headless...');
  const cmd = `"${chromePath}" --headless --disable-gpu --virtual-time-budget=10000 --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf-no-header --print-to-pdf="${pdfOutputPath}" "file://${htmlOutputPath}"`;
  try {
    execSync(cmd, { encoding: 'utf-8' });
    console.log(`Successfully generated Compact PDF at: ${pdfOutputPath}`);
  } catch (err) {
    console.error('Error generating Compact PDF with Chrome:', err);
    process.exit(1);
  }
} else {
  console.error('Chrome executable not found at default Mac location.');
  process.exit(1);
}
