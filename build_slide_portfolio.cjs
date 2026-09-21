const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const assetsDir = path.join(rootDir, 'src', 'assets');

// Helper to convert image to base64
function getBase64Image(filename) {
  const filePath = path.join(assetsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return '';
  }
  const ext = path.extname(filename).toLowerCase().replace('.', '');
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png';
  const data = fs.readFileSync(filePath);
  return `data:${mime};base64,${data.toString('base64')}`;
}

console.log('Loading project assets for slide PDF...');
const imgTabilens1 = getBase64Image('tabilens_1.png');
const imgTabilens3 = getBase64Image('tabilens_3.png');
const imgShen1 = getBase64Image('SHEN_fig_1.png');
const imgShen3 = getBase64Image('SHEN_fig_3.png');
const imgKkumteul1 = getBase64Image('kkumteul_1.jpeg');
const imgKkumteul2 = getBase64Image('kkumteul_2.jpeg');
const imgAstra1 = getBase64Image('astra_1.png');
const imgAstra2 = getBase64Image('astra_2.png');
const imgScout = getBase64Image('scout_report_fig_13.png');
const imgMus = getBase64Image('mus_fig_1.png');
const imgEisenhower = getBase64Image('eisenhower_1.png');
const imgLiarGame = getBase64Image('liargame_1.png');
const imgGachaTodo = getBase64Image('gachatodo_preview.png');

const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>이주형(Joohyoung Yi) - AI 기획 포트폴리오 (가로형 슬라이드)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">
  <style>
    @page {
      size: 297mm 210mm; /* A4 Landscape (16:9 ratio feel) */
      margin: 0;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      /* Parsed Colors from Website index.css */
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
      font-size: 16.5px;
      line-height: 1.42;
    }

    .slide {
      width: 297mm;
      height: 210mm;
      max-height: 210mm;
      padding: 7mm 13mm 6.5mm 13mm;
      margin: 0 auto;
      background: linear-gradient(135deg, var(--bg-cream-1) 0%, var(--bg-cream-2) 100%);
      position: relative;
      page-break-after: always;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Ambient Background Glow */
    .slide::before {
      content: '';
      position: absolute;
      top: -80px;
      right: -80px;
      width: 360px;
      height: 360px;
      background: radial-gradient(circle, rgba(129, 98, 113, 0.1) 0%, rgba(129, 98, 113, 0) 70%);
      border-radius: 50%;
      pointer-events-none;
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

    /* Header Bar (1.5x scaled) */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 5px;
      border-bottom: 2.5px solid var(--card-border);
      margin-bottom: 7px;
    }
    .header-tag-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .section-pill {
      font-size: 14.5px;
      font-weight: 800;
      color: #ffffff;
      background: var(--color-plum);
      padding: 3px 10px;
      border-radius: 5px;
      letter-spacing: 0.4px;
      font-family: 'JetBrains Mono', monospace;
    }
    .slide-title {
      font-size: 26px;
      font-weight: 800;
      color: var(--color-deep-slate);
      letter-spacing: -0.4px;
    }
    .slide-subtitle {
      font-size: 14.5px;
      font-weight: 600;
      color: var(--color-plum);
      margin-top: 1px;
    }
    .header-meta {
      font-size: 13.5px;
      font-weight: 700;
      color: var(--color-dark-purple);
      font-family: 'JetBrains Mono', monospace;
      display: flex;
      gap: 14px;
    }

    /* Footer Bar (1.5x scaled) */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 5px;
      border-top: 2.5px solid var(--card-border);
      font-size: 13.5px;
      color: var(--color-plum);
      font-weight: 600;
    }
    .footer-left {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    .page-number {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 800;
      color: var(--color-deep-slate);
      font-size: 14.5px;
    }

    /* Standard Glass Card */
    .glass-card {
      background: var(--card-bg);
      border: 1.5px solid var(--card-border);
      border-radius: 10px;
      box-shadow: var(--shadow-sm);
      padding: 12px 15px;
    }

    /* Content Card: Image fills from text end to the very bottom border */
    .content-card-tight {
      background: var(--card-bg);
      border: 1.5px solid var(--card-border);
      border-radius: 10px;
      box-shadow: var(--shadow-sm);
      padding: 11px 14px 0 14px; /* Zero bottom padding so image touches bottom */
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 0;
      overflow: hidden;
    }

    .card-text-area {
      flex-shrink: 0;
      margin-bottom: 7px;
    }

    /* Image section: fills 100% of remaining vertical height down to card bottom */
    .card-image-section {
      flex: 1;
      min-height: 0;
      width: calc(100% + 28px);
      margin: 0 -14px 0 -14px;
      border-top: 1.5px solid rgba(195, 163, 138, 0.45);
      background: #ffffff;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom-left-radius: 9px;
      border-bottom-right-radius: 9px;
    }
    .card-image-section img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      display: block;
    }
    .card-image-section .image-badge {
      position: absolute;
      bottom: 6px;
      right: 8px;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(195, 163, 138, 0.5);
      border-radius: 4px;
      padding: 2px 8px;
      font-size: 11.5px;
      font-weight: 700;
      color: var(--color-plum);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
      pointer-events: none;
      z-index: 2;
    }

    /* Grid Layouts */
    .grid-2col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 13px;
      flex: 1;
      min-height: 0;
    }
    .grid-3col {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 13px;
      flex: 1;
      min-height: 0;
    }
    .grid-asym-left {
      display: grid;
      grid-template-columns: 1.12fr 0.88fr;
      gap: 13px;
      flex: 1;
      min-height: 0;
    }

    /* Badges & Chips (1.5x scaled) */
    .chip {
      display: inline-block;
      font-size: 13.5px;
      font-weight: 700;
      padding: 3px 9px;
      border-radius: 5px;
      background: rgba(195, 163, 138, 0.28);
      color: var(--color-dark-purple);
      white-space: nowrap;
      flex-shrink: 0;
    }
    .chip-primary {
      background: var(--color-plum);
      color: #ffffff;
      font-weight: 700;
      padding: 3px 9px;
      border-radius: 5px;
      font-size: 13.5px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .chip-green {
      background: rgba(46, 125, 50, 0.14);
      color: var(--color-green);
      font-weight: 800;
      font-family: 'JetBrains Mono', monospace;
      padding: 3px 9px;
      border-radius: 5px;
      font-size: 13.5px;
      white-space: nowrap;
    }

    /* Problem / Pipeline Banner (1.5x scaled) */
    .problem-banner {
      display: block;
      width: 100%;
      font-size: 15px;
      font-weight: 700;
      color: var(--color-plum);
      background: rgba(129, 98, 113, 0.08);
      border-left: 4px solid var(--color-plum);
      padding: 4px 9px;
      border-radius: 4px;
      margin-bottom: 6px;
    }

    /* Typography Utilities (1.5x scaled) */
    .text-headline {
      font-size: 46px;
      font-weight: 900;
      color: var(--color-deep-slate);
      line-height: 1.25;
      letter-spacing: -0.8px;
    }
    .highlight-text {
      color: var(--color-plum);
      font-weight: 900;
    }
    .card-title {
      font-size: 18.5px;
      font-weight: 800;
      color: var(--color-deep-slate);
      letter-spacing: -0.3px;
      margin-bottom: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6px;
    }
    .bullet-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .bullet-list li {
      position: relative;
      padding-left: 17px;
      margin-bottom: 4px;
      font-size: 16px;
      line-height: 1.42;
      color: var(--color-steel-blue);
    }
    .bullet-list li::before {
      content: '•';
      position: absolute;
      left: 0;
      top: -2px;
      color: var(--color-plum);
      font-weight: 900;
      font-size: 18px;
    }
    .bullet-list li strong {
      color: var(--color-deep-slate);
      font-weight: 700;
    }

    /* Table Styling for Matrix (P2) - 1.5x scaled */
    .matrix-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14.5px;
      background: var(--card-bg);
      border-radius: 8px;
      overflow: hidden;
      border: 1.5px solid var(--card-border);
    }
    .matrix-table th {
      background: rgba(129, 98, 113, 0.13);
      color: var(--color-deep-slate);
      font-weight: 800;
      padding: 7px 11px;
      text-align: left;
      border-bottom: 1.5px solid var(--card-border);
      font-size: 15px;
    }
    .matrix-table td {
      padding: 6px 11px;
      border-bottom: 1px solid rgba(195, 163, 138, 0.35);
      vertical-align: middle;
      font-size: 14.5px;
      line-height: 1.38;
    }
    .matrix-table tr:last-child td {
      border-bottom: none;
    }
  </style>
</head>
<body>

  <!-- ================= SLIDE 1: COVER ================= -->
  <div class="slide">
    <div class="slide-content" style="justify-content: space-between;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="chip-primary" style="font-size: 15px; padding: 5px 14px;">AI PRODUCT PLANNER & DIGITAL STRATEGIST</span>
        <span style="font-size: 15px; font-weight: 800; color: var(--color-plum); font-family: 'JetBrains Mono', monospace;">2026 PORTFOLIO</span>
      </div>

      <div style="margin: auto 0; max-width: 960px;">
        <div style="font-size: 18px; font-weight: 800; color: var(--color-plum); margin-bottom: 10px; letter-spacing: 0.5px;">
          SOGANG UNIV. ART & TECHNOLOGY & ARTIFICIAL INTELLIGENCE
        </div>
        <h1 class="text-headline" style="font-size: 46px; margin-bottom: 18px; line-height: 1.25;">
          도메인 문제 분석에서 <span class="highlight-text">모델 파이프라인 엔지니어링</span>,<br>
          인간 중심 <span class="highlight-text">AI-UX 인터랙션</span>까지 완결하는 기획자
        </h1>
        <p style="font-size: 18.5px; color: var(--color-steel-blue); line-height: 1.6; max-width: 900px;">
          서강대학교에서 <strong>Art & Technology(기획·UX)</strong>와 <strong>인공지능(AI)</strong>을 복수전공하는 <strong>이주형</strong>입니다.<br>
          단순 API 래퍼를 넘어 도메인 페인포인트를 규명하고, <strong>LLM·Vision·XAI·Diffusion</strong> 최적 파이프라인과 인지 부하를 제어하는 <strong>실전 프로덕트 인터랙션</strong>을 직접 설계합니다.
        </p>

        <!-- 3 Giant Competency Tags (1.5x scaled) -->
        <div style="display: flex; gap: 14px; margin-top: 26px;">
          <div style="background: rgba(255,255,255,0.96); border: 1.5px solid var(--card-border); padding: 15px 20px; border-radius: 8px; border-left: 5px solid var(--color-plum); flex: 1;">
            <div style="font-size: 18px; font-weight: 800; color: var(--color-deep-slate);">#도메인분석 (Domain Analysis)</div>
            <div style="font-size: 14px; color: var(--color-rose); margin-top: 4px; line-height: 1.4;">산업·사용자 페인포인트 규명 & 비정형 데이터 맥락화</div>
          </div>
          <div style="background: rgba(255,255,255,0.96); border: 1.5px solid var(--card-border); padding: 15px 20px; border-radius: 8px; border-left: 5px solid var(--color-rose); flex: 1;">
            <div style="font-size: 18px; font-weight: 800; color: var(--color-deep-slate);">#AI파이프라인 (AI Pipeline)</div>
            <div style="font-size: 14px; color: var(--color-rose); margin-top: 4px; line-height: 1.4;">멀티모달 모델 파이프라인 설계 & XAI 신뢰성 평가</div>
          </div>
          <div style="background: rgba(255,255,255,0.96); border: 1.5px solid var(--card-border); padding: 15px 20px; border-radius: 8px; border-left: 5px solid var(--color-tan); flex: 1;">
            <div style="font-size: 18px; font-weight: 800; color: var(--color-deep-slate);">#AI-UX (Interaction Design)</div>
            <div style="font-size: 14px; color: var(--color-rose); margin-top: 4px; line-height: 1.4;">Latency 완화 인터랙션 & 정량 통계 A/B 테스트 검증</div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <div class="footer-left">
          <span>📧 yjh020701@gmail.com</span>
          <span>🔗 github.com/meisteryi</span>
          <span>🌐 meisteryi.github.io/YJH_Personal_Website</span>
          <span class="chip-green">OPIc IH · JLPT N1 · TESAT S등급</span>
        </div>
        <div class="page-number">P.01 / 08</div>
      </div>
    </div>
  </div>

  <!-- ================= SLIDE 2: COMPETENCY ARCHITECTURE & MATRIX ================= -->
  <div class="slide">
    <div class="slide-content">
      <div class="slide-header">
        <div>
          <div class="header-tag-group">
            <span class="section-pill">COMPETENCY MATRIX</span>
            <h2 class="slide-title">핵심 역량 프레임워크 및 프로젝트 매핑</h2>
          </div>
          <div class="slide-subtitle">문제 정의(도메인) → 기술 연결(파이프라인) → 경험 완결(AI-UX)의 3대 축</div>
        </div>
        <div class="header-meta">
          <span>FRAMEWORK OVERVIEW</span>
        </div>
      </div>

      <!-- 3 Pillar Framework Architecture Cards (70% text, large fonts) -->
      <div class="grid-3col" style="margin-bottom: 9px;">
        <!-- Pillar 1 -->
        <div class="glass-card" style="border-top: 4.5px solid var(--color-plum); display: flex; flex-direction: column; gap: 6px; padding: 11px 14px;">
          <div class="card-title">
            <span>1. 도메인 분석 (Domain)</span>
            <span class="chip">Problem Definition</span>
          </div>
          <ul class="bullet-list">
            <li><strong>비정형 데이터 맥락 발굴</strong>: 언어 편향, 스포츠 스카우팅, 식문화 고유 문제 정의</li>
            <li><strong>AI 도입 당위성 검증</strong>: 단순 기능 탑재가 아닌 실질적 사용자 가치 병목 타겟팅</li>
          </ul>
          <div style="background: rgba(129,98,113,0.08); padding: 5px 8px; border-radius: 5px; font-size: 13px; color: var(--color-plum); font-weight: 700;">
            📦 산출물: 비정형 데이터셋 구축, 문제 정의서, 거버넌스 가이드
          </div>
        </div>

        <!-- Pillar 2 -->
        <div class="glass-card" style="border-top: 4.5px solid var(--color-rose); display: flex; flex-direction: column; gap: 6px; padding: 11px 14px;">
          <div class="card-title">
            <span>2. AI 파이프라인 (Pipeline)</span>
            <span class="chip">Model & Engineering</span>
          </div>
          <ul class="bullet-list">
            <li><strong>최적 모델 융합</strong>: LLM, Vision OCR, Diffusion, Speech(TTS) 유기적 연동</li>
            <li><strong>신뢰성 평가 & 튜닝</strong>: LIME/SHAP, Attention Map 기반 편향 방어 및 LoRA 제어</li>
          </ul>
          <div style="background: rgba(153,117,119,0.09); padding: 5px 8px; border-radius: 5px; font-size: 13px; color: var(--color-rose); font-weight: 700;">
            ⚙️ 핵심 스택: PyTorch, KoGPT-2, SDXL, Gemini API, LIME/SHAP
          </div>
        </div>

        <!-- Pillar 3 -->
        <div class="glass-card" style="border-top: 4.5px solid var(--color-tan); display: flex; flex-direction: column; gap: 6px; padding: 11px 14px;">
          <div class="card-title">
            <span>3. AI-UX (Interaction)</span>
            <span class="chip">Usability & Validation</span>
          </div>
          <ul class="bullet-list">
            <li><strong>지연시간·인지 부하 해소</strong>: 3초 대기 감쇄 피드백, 자동 소각, 친숙도 유지 UI</li>
            <li><strong>정량 가설 검증</strong>: GOMS 인지 모델링, 36인 A/B 테스트 및 Wilcoxon 통계 검정</li>
          </ul>
          <div style="background: rgba(195,163,138,0.14); padding: 5px 8px; border-radius: 5px; font-size: 13px; color: var(--color-dark-purple); font-weight: 700;">
            📊 검증 툴킷: Figma 프로토타입, GOMS 모델링, R/Python 통계 검정
          </div>
        </div>
      </div>

      <!-- Mapping Table: 6 Key Projects -->
      <table class="matrix-table">
        <thead>
          <tr>
            <th style="width: 21%;">프로젝트명</th>
            <th style="width: 19%;">도메인 / 서비스 유형</th>
            <th style="width: 26%;">적용 AI 모델 & 기술 스택</th>
            <th style="width: 8%; text-align: center;">도메인</th>
            <th style="width: 8%; text-align: center;">파이프라인</th>
            <th style="width: 6%; text-align: center;">AI-UX</th>
            <th style="width: 12%;">핵심 정량 성과 및 검증</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>TabiLenS (타비렌즈)</strong></td>
            <td>해외 여행 / 다문화 식문화</td>
            <td>Gemini 2.5 Flash, Vision OCR, flutter_tts</td>
            <td style="text-align: center;">●</td>
            <td style="text-align: center;">●</td>
            <td style="text-align: center;">●</td>
            <td><span class="chip-green">평균 3초 내 생성 / 크로스플랫폼</span></td>
          </tr>
          <tr>
            <td><strong>SHEN (PLM 편향 연구)</strong></td>
            <td>한국어 NLP / 신뢰성 연구</td>
            <td>KoBERT, KoELECTRA, LIME, SHAP, Attention</td>
            <td style="text-align: center;">●</td>
            <td style="text-align: center;">●</td>
            <td style="text-align: center;">-</td>
            <td><span class="chip-green">특성 오귀인 실증 / XAI 파이프라인</span></td>
          </tr>
          <tr>
            <td><strong>꿈틀 (Kkumteul)</strong></td>
            <td>미디어아트 / 꿈 심상 시각화</td>
            <td>KoGPT-2 Fine-tuning, SDXL 1.0, LoRA, Flask</td>
            <td style="text-align: center;">●</td>
            <td style="text-align: center;">●</td>
            <td style="text-align: center;">●</td>
            <td><span class="chip-green">SCG 학부연구 완결 / 3p 동화책</span></td>
          </tr>
          <tr>
            <td><strong>ASTRA 사용성 리서치</strong></td>
            <td>모바일 LMS / 학업 플랫폼</td>
            <td>GOMS 모델링, Figma, Wilcoxon Signed-Rank</td>
            <td style="text-align: center;">●</td>
            <td style="text-align: center;">-</td>
            <td style="text-align: center;">●</td>
            <td><span class="chip-green">만족도 100%↑, 시간 급감 (p&lt;0.003)</span></td>
          </tr>
          <tr>
            <td><strong>Eisenhower To-Do</strong></td>
            <td>생산성 / 인지 부하 감소</td>
            <td>4분면 우선순위 엔진, 7일 자동 소각, Flutter</td>
            <td style="text-align: center;">-</td>
            <td style="text-align: center;">-</td>
            <td style="text-align: center;">●</td>
            <td><span class="chip-green">iOS·Android·macOS 릴리즈</span></td>
          </tr>
          <tr>
            <td><strong>AI Football Scouter</strong></td>
            <td>스포츠 의사결정 / 스카우팅</td>
            <td>NLP Sentiment, 360° Radar, Streamlit</td>
            <td style="text-align: center;">●</td>
            <td style="text-align: center;">●</td>
            <td style="text-align: center;">-</td>
            <td><span class="chip-green">수천 명 데이터 정규화 매트릭스</span></td>
          </tr>
        </tbody>
      </table>

      <div class="slide-footer">
        <div class="footer-left">
          <span>AI Product Planner Portfolio</span>
          <span>Core Competency Matrix & Project Mapping</span>
        </div>
        <div class="page-number">P.02 / 08</div>
      </div>
    </div>
  </div>

  <!-- ================= SLIDE 3: DOMAIN ANALYSIS 1 ================= -->
  <div class="slide">
    <div class="slide-content">
      <div class="slide-header">
        <div>
          <div class="header-tag-group">
            <span class="section-pill">SECTION 1. DOMAIN ANALYSIS</span>
            <h2 class="slide-title">도메인 분석 ① 언어·사회적 편견 및 비정형 심상 데이터</h2>
          </div>
          <div class="slide-subtitle">보이지 않는 구조적 결함과 무의식적 감성의 본질을 짚어내어 AI 기획의 당위성을 정립합니다.</div>
        </div>
        <div class="header-meta">
          <span>SHEN & KKUMTEUL</span>
        </div>
      </div>

      <div class="grid-2col">
        <!-- Left: SHEN (70% concise text, large fonts, image section fills to bottom) -->
        <div class="content-card-tight">
          <div class="card-text-area">
            <div class="card-title">
              <span>SHEN: PLM 젠더 편향 심층 리서치</span>
              <span class="chip-primary">XAI Research</span>
            </div>
            <div class="problem-banner">
              [도메인 문제] 한국어 언어 모델이 성별 접두사('여-')에 부당 가중치를 두는 신뢰성 결함
            </div>
            <ul class="bullet-list">
              <li><strong>모델 편향 포착</strong>: 실제 배포 KoBERT·KoELECTRA의 성별 토큰 감성 왜곡 취약점 규명</li>
              <li><strong>정밀 대조군 설계</strong>: 문맥 의미를 엄격히 통제 치환한 10개 직업군 대조 데이터셋 구축</li>
              <li><strong>특성 오귀인 실증</strong>: 성별 접두사가 감성 부사 수준으로 모델 어텐션을 왜곡하는 현상 실증</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgShen1}" alt="SHEN Attention Map" />
            <span class="image-badge">▲ 그림 1: 직업군별 젠더 접두사 어텐션 가중치 및 감성 왜곡 실증 시각화</span>
          </div>
        </div>

        <!-- Right: Kkumteul (70% concise text, large fonts, image section fills to bottom) -->
        <div class="content-card-tight">
          <div class="card-text-area">
            <div class="card-title">
              <span>꿈틀: 무의식 심상 시각화 및 인터랙티브 동화</span>
              <span class="chip-primary">SCG 학부연구 (팀장)</span>
            </div>
            <div class="problem-banner">
              [도메인 문제] 각성 후 급격히 소실되는 비정형 꿈 데이터를 자기 성찰로 전환하는 미디어아트
            </div>
            <ul class="bullet-list">
              <li><strong>꿈 데이터 한계 극복</strong>: 텍스트 메모로 복원 불가능한 몽환적 심상 시각화 가치 제안</li>
              <li><strong>참여형 미디어아트</strong>: 관람객 키워드(인물·장소·감정) 입력으로 3p 디지털 동화 자동 생성</li>
              <li><strong>내면 탐색 인터랙션</strong>: 서사와 일러스트 결합으로 무의식 패턴을 성찰하는 경험 설계</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgKkumteul1}" alt="Kkumteul Storyboard" />
            <span class="image-badge">▲ 그림 2: 참여형 꿈 시각화 및 디지털 동화책 생성 인터랙티브 스토리보드</span>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <div class="footer-left">
          <span>#도메인분석: 비정형 데이터의 구조적 취약점과 심리적 본질 파악</span>
          <span class="chip-green">서강대 AI 심화 리서치 & SCG 학부연구 완결</span>
        </div>
        <div class="page-number">P.03 / 08</div>
      </div>
    </div>
  </div>

  <!-- ================= SLIDE 4: DOMAIN ANALYSIS 2 ================= -->
  <div class="slide">
    <div class="slide-content">
      <div class="slide-header">
        <div>
          <div class="header-tag-group">
            <span class="section-pill">SECTION 1. DOMAIN ANALYSIS</span>
            <h2 class="slide-title">도메인 분석 ② 스포츠 의사결정 & 일상 학습/이동 맥락</h2>
          </div>
          <div class="slide-subtitle">정량 스탯에 가려진 정성적 리스크를 발굴하고, 일상 속 내비게이션 병목을 현장에서 규명합니다.</div>
        </div>
        <div class="header-meta">
          <span>FOOTBALL SCOUTER & ASTRA</span>
        </div>
      </div>

      <div class="grid-2col">
        <!-- Left: Football Scouter -->
        <div class="content-card-tight">
          <div class="card-text-area">
            <div class="card-title">
              <span>AI Football Scouter: 다차원 감성 기반 스카우팅</span>
              <span class="chip-primary">Sports Intelligence</span>
            </div>
            <div class="problem-banner">
              [도메인 문제] 경기 정량 스탯만으로는 포착 불가능한 선수의 멘탈리티 및 영입 리스크 분석
            </div>
            <ul class="bullet-list">
              <li><strong>정보 비대칭 포착</strong>: 스탯 중심 영입이 부르는 라커룸 불화·팬덤 갈등 등 실패 리스크 헷징</li>
              <li><strong>비정형 여론 정량화</strong>: Reddit 수만 건 비정형 반응을 수집하여 다차원 감성 지표화</li>
              <li><strong>360도 비교 플로우</strong>: 스탯 축과 정성 감성 축을 결합한 통합 레이더 차트로 의사결정 지원</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgScout}" alt="Reddit Sentiment Dataset" />
            <span class="image-badge">▲ 그림 3: Reddit 비정형 축구 팬덤 코멘트 크롤링 및 감성 분석 원천 데이터셋</span>
          </div>
        </div>

        <!-- Right: ASTRA -->
        <div class="content-card-tight">
          <div class="card-text-area">
            <div class="card-title">
              <span>ASTRA: 모바일 LMS 3대 내비게이션 병목 현장 분석</span>
              <span class="chip-primary">Academic Usability</span>
            </div>
            <div class="problem-banner">
              [도메인 문제] 서강대 필수 학업 앱의 비직관적 페이지 연결로 인한 사용자 인지 피로도 규명
            </div>
            <ul class="bullet-list">
              <li><strong>알림 딥링크 단절</strong>: 푸시 알림 클릭 시 해당 게시글이 아닌 홈 배너로 튕기는 마찰 규명</li>
              <li><strong>제출 구조 이탈</strong>: 공지 열람 중 '뒤로가기' 클릭 시 강좌 목록이 아닌 전체 홈으로 이탈</li>
              <li><strong>과거순 정렬 강제</strong>: 강의자료가 과거순으로 고정되어 최신 자료 탐색 시 반복 스크롤 강제</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgAstra1}" alt="LMS Usability Problems" />
            <span class="image-badge">▲ 그림 4: 실사용자 과업 수행 중 반복이 발생하는 3대 핵심 내비게이션 플로우 분석</span>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <div class="footer-left">
          <span>#도메인분석: 수치 이면의 맥락을 분석하여 실패 확률을 낮추는 서비스 정책 수립</span>
          <span class="chip-green">정량 스탯 + 소셜 텍스트 결합 & 현장 UX 감사 완료</span>
        </div>
        <div class="page-number">P.04 / 08</div>
      </div>
    </div>
  </div>

  <!-- ================= SLIDE 5: AI PIPELINE 1 ================= -->
  <div class="slide">
    <div class="slide-content">
      <div class="slide-header">
        <div>
          <div class="header-tag-group">
            <span class="section-pill">SECTION 2. AI PIPELINE</span>
            <h2 class="slide-title">AI 파이프라인 ① Vision-LLM-TTS & 서사-확산 복합 연동</h2>
          </div>
          <div class="slide-subtitle">단일 API 호출을 넘어, 모델 간 데이터 흐름과 텍스트-시각 일관성을 제어하는 아키텍처를 구축합니다.</div>
        </div>
        <div class="header-meta">
          <span>TABILENS & KKUMTEUL</span>
        </div>
      </div>

      <div class="grid-2col">
        <!-- Left: TabiLenS -->
        <div class="content-card-tight">
          <div class="card-text-area">
            <div class="card-title">
              <span>TabiLenS: Vision-LLM-TTS 파이프라인</span>
              <span class="chip-primary">Multimodal Pipeline</span>
            </div>
            <div class="problem-banner">
              [파이프라인] 메뉴판 이미지 → 2D 좌표 바운딩 박스 → 문화 맥락 프롬프트 → 음성 합성
            </div>
            <ul class="bullet-list">
              <li><strong>2D 좌표 추출 & 정렬</strong>: Gemini 2.5 Flash로 텍스트·좌표 추출 및 회전각 자동 정렬</li>
              <li><strong>식문화 해설 체인</strong>: 직역을 배제하고 요리 유래·식재료·알레르기를 구조화 JSON 카드로 생성</li>
              <li><strong>실전 회화 & TTS</strong>: 맞춤 회화 문장("와사비 빼주세요") 동적 조립 및 원어민 음성 합성</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgTabilens1}" alt="TabiLenS Vision OCR" style="object-position: center 30%;" />
            <span class="image-badge">▲ 그림 5: Vision OCR 좌표 매핑 및 식문화 맥락·알레르기 분석 카드 렌더링 화면</span>
          </div>
        </div>

        <!-- Right: Kkumteul -->
        <div class="content-card-tight">
          <div class="card-text-area">
            <div class="card-title">
              <span>꿈틀: KoGPT-2 & SDXL LoRA 파이프라인</span>
              <span class="chip-primary">Generative Visual</span>
            </div>
            <div class="problem-banner">
              [파이프라인] 키워드 입력 → KoGPT-2 서사 생성 → SDXL 동화 일러스트 → Flask 서빙
            </div>
            <ul class="bullet-list">
              <li><strong>KoGPT-2 파인튜닝</strong>: 전래동화 코퍼스 학습을 통해 3페이지 기승전결 서사 자동 생성</li>
              <li><strong>SDXL & LoRA 결합</strong>: 서사 프롬프트에 동화 LoRA 연동 및 7-step 추론 가속 최적화</li>
              <li><strong>화풍 시드 제어(Seed Lock)</strong>: 페이지 간 캐릭터 일관성을 유지하는 시드 알고리즘 구축</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgKkumteul2}" alt="Kkumteul Generative Output" />
            <span class="image-badge">▲ 그림 6: Flask 백엔드 연동을 통해 생성된 책들이 3D 틸트로 진열된 아카이브 화면</span>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <div class="footer-left">
          <span>#AI파이프라인: 멀티모달(Vision+LLM+Audio) 및 생성형 AI 결합 아키텍처 완결</span>
          <span class="chip-green">평균 3초 이내 응답 / Seed 고정 스타일 일관성 확보</span>
        </div>
        <div class="page-number">P.05 / 08</div>
      </div>
    </div>
  </div>

  <!-- ================= SLIDE 6: AI PIPELINE 2 ================= -->
  <div class="slide">
    <div class="slide-content">
      <div class="slide-header">
        <div>
          <div class="header-tag-group">
            <span class="section-pill">SECTION 2. AI PIPELINE</span>
            <h2 class="slide-title">AI 파이프라인 ② XAI 신뢰성 검증 & 다차원 데이터 융합</h2>
          </div>
          <div class="slide-subtitle">블랙박스 AI의 의사결정을 시각적으로 해석하고, 이종 도메인 데이터를 융합하는 파이프라인을 설계합니다.</div>
        </div>
        <div class="header-meta">
          <span>SHEN & AUDIO-VISION RESNET</span>
        </div>
      </div>

      <div class="grid-2col">
        <!-- Left: SHEN XAI Pipeline -->
        <div class="content-card-tight">
          <div class="card-text-area">
            <div class="card-title">
              <span>SHEN: XAI(LIME·SHAP·Attention) 모델 신뢰성 검증</span>
              <span class="chip-primary">Explainable AI</span>
            </div>
            <div class="problem-banner">
              [파이프라인] 텍스트 입력 → Attention 가중치 추출 → LIME/SHAP 기여도 분석 → 편향 계측
            </div>
            <ul class="bullet-list">
              <li><strong>Attention Map 추출</strong>: Transformer 내부 Self-Attention 텐서를 계층별 추출·시각화</li>
              <li><strong>LIME & SHAP 결합</strong>: 형태소별 Shapley Value를 정량 계산하여 성별 부당 기여도 입증</li>
              <li><strong>AI 거버넌스 수립</strong>: 정확도 뒤에 숨은 '특성 오귀인'을 필터링하는 신뢰성 가이드라인 제안</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgShen3}" alt="SHEN XAI Waterfall Chart" />
            <span class="image-badge">▲ 그림 7: LIME/SHAP 기여도와 어텐션 가중치를 결합한 설명가능 AI(XAI) 분석 파이프라인</span>
          </div>
        </div>

        <!-- Right: μ's Audio-to-Vision -->
        <div class="content-card-tight">
          <div class="card-text-area">
            <div class="card-title">
              <span>μ's: 오디오 2D 스펙트로그램 변환 비전 전이학습</span>
              <span class="chip-primary">Audio-to-Vision</span>
            </div>
            <div class="problem-banner">
              [파이프라인] 1D 시계열 오디오 → Librosa Log-Mel Spectrogram → ResNet50 분류
            </div>
            <ul class="bullet-list">
              <li><strong>도메인 변환 전처리</strong>: 1차원 음향 하모닉스를 2D Log-Mel Spectrogram 이미지로 변환</li>
              <li><strong>ResNet50 전이학습</strong>: 대규모 비전 모델을 음악 장르 특징 추출기로 전이학습하여 수렴 가속</li>
              <li><strong>다학제적 기술 융합</strong>: 장르 분류 정확도 72.56% 달성 및 레이어 특징 맵 시각화 완결</li>
            </ul>
          </div>
          <div class="card-image-section">
            <img src="${imgMus}" alt="Mel-Spectrogram" />
            <span class="image-badge">▲ 그림 8: 1D 오디오 신호를 2D 이미지로 변환한 멜-스펙트로그램 및 전이학습 특징 맵</span>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <div class="footer-left">
          <span>#AI파이프라인: 설명가능 AI(XAI) 신뢰성 검증 및 이종 도메인 치환 엔지니어링</span>
          <span class="chip-green">LIME/SHAP 융합 분석 완료 / 분류 정확도 72.56%</span>
        </div>
        <div class="page-number">P.06 / 08</div>
      </div>
    </div>
  </div>

  <!-- ================= SLIDE 7: AI-UX & USABILITY ================= -->
  <div class="slide">
    <div class="slide-content">
      <div class="slide-header">
        <div>
          <div class="header-tag-group">
            <span class="section-pill">SECTION 3. AI-UX & INTERACTION DESIGN</span>
            <h2 class="slide-title" style="font-size: 21.5px; white-space: nowrap; letter-spacing: -0.5px;">AI-UX: 인터랙션 설계, 인지 부하 제어 & 정량 검증</h2>
          </div>
          <div class="slide-subtitle">기술적 지연시간(Latency)을 해소하고, 가설을 통계적 A/B 테스트로 완벽히 입증합니다.</div>
        </div>
        <div class="header-meta">
          <span>USABILITY EVALUATION & A/B TEST</span>
        </div>
      </div>

      <div class="grid-asym-left">
        <!-- Left: ASTRA Usability Research (70% text, compact, image fills to bottom) -->
        <div class="content-card-tight">
          <div class="card-text-area">
            <div class="card-title">
              <span>ASTRA: GOMS 모델링 & 36인 A/B 테스트 검증</span>
              <span class="chip-primary">통계적 유의성 입증</span>
            </div>
            <div class="problem-banner">
              [UX 철학] 전면 재설계 대신 기존 멘탈 모델을 존중하는 '점진적 개선(Familiarity Preservation)'
            </div>
            <ul class="bullet-list">
              <li><strong>GOMS 정량 인지 모델링</strong>: 공지 확인 조작 단계, 클릭 수, 멘탈 준비 시간의 이론적 계측</li>
              <li><strong>Wilcoxon 비모수 통계 검정</strong>: 실사용자 36인 화면 녹화 데이터 기반 유의수준 검증 완결</li>
              <li><strong>검증 정량 성과</strong>: 만족도 100%↑(p&lt;0.003), 과업 시간 유의미 급감(p&lt;0.0006), 스크롤 횟수 급감</li>
            </ul>
          </div>

          <div class="card-image-section">
            <img src="${imgAstra2}" alt="ASTRA Improved UI" style="object-position: center top;" />
            <span class="image-badge">▲ 그림 9: 최신순 정렬 및 뒤로가기 내비게이션 개선 Figma 프로토타입</span>
          </div>
        </div>

        <!-- Right: AI Latency UX & Gamification (2 stacked cards, each fills to bottom) -->
        <div style="display: flex; flex-direction: column; gap: 10px; height: 100%; min-height: 0;">
          <div class="content-card-tight" style="flex: 1;">
            <div class="card-text-area">
              <div class="card-title">
                <span>AI 지연시간(Latency) 완화 & Fail-safe</span>
                <span class="chip">TabiLenS</span>
              </div>
              <ul class="bullet-list">
                <li><strong>대기감 완화</strong>: Gemini 3초 생성 지연 동안 단계별 인식 시각화 피드백 제공</li>
                <li><strong>오류 보정 UX</strong>: OCR 누락 시 텍스트 블록 직접 탭 수정 Fail-safe 설계</li>
              </ul>
            </div>
            <div class="card-image-section">
              <img src="${imgTabilens3}" alt="TabiLenS UI" style="object-position: center top;" />
              <span class="image-badge">▲ TabiLenS 인터랙션</span>
            </div>
          </div>

          <div class="content-card-tight" style="flex: 1;">
            <div class="card-text-area">
              <div class="card-title">
                <span>인지 부하 최소화 & 도파민 리텐션</span>
                <span class="chip">Eisenhower</span>
              </div>
              <ul class="bullet-list">
                <li><strong>4분면 매트릭스 & 7일 자동 소각</strong>: 결정 피로도 및 미완료 할 일 죄책감 해소</li>
                <li><strong>게이미피케이션</strong>: '할 일 완료 코인 → 가챠 뽑기 → 수족관 육성' 동기 부여</li>
              </ul>
            </div>
            <div class="card-image-section">
              <img src="${imgEisenhower}" alt="Eisenhower Matrix" />
              <span class="image-badge">▲ Eisenhower & Gacha-Todo</span>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <div class="footer-left">
          <span>#AI-UX: 감이 아닌 정량적 A/B 테스트와 인지 부하 감소 규칙으로 사용자 가치를 증명합니다.</span>
          <span class="chip-green">Wilcoxon Test 유의수준 p &lt; 0.05 전 항목 통과</span>
        </div>
        <div class="page-number">P.07 / 08</div>
      </div>
    </div>
  </div>

  <!-- ================= SLIDE 8: CREDENTIALS & CONTACT ================= -->
  <div class="slide">
    <div class="slide-content">
      <div class="slide-header">
        <div>
          <div class="header-tag-group">
            <span class="section-pill">PROFILE & CREDENTIALS</span>
            <h2 class="slide-title">학력, 글로벌 역량, 대외활동 및 연락처</h2>
          </div>
          <div class="slide-subtitle">인문·예술적 기획력과 인공지능 공학 지식, 탄탄한 조직 리더십을 갖추었습니다.</div>
        </div>
        <div class="header-meta">
          <span>JOOHYOUNG YI</span>
        </div>
      </div>

      <div class="grid-3col">
        <!-- Left: Education & Global -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; gap: 7px; padding: 10px 13px;">
          <div class="card-title">
            <span>학력 및 글로벌 교환학생</span>
            <span class="chip-primary">Education</span>
          </div>

          <div style="background: rgba(255,255,255,0.9); border: 1px solid var(--card-border); border-radius: 7px; padding: 8px 11px;">
            <div style="font-size: 16px; font-weight: 800; color: var(--color-deep-slate);">서강대학교 (Sogang University)</div>
            <div style="font-size: 13.5px; font-weight: 700; color: var(--color-plum); margin-top: 1px;">Art & Technology (주전공) · 인공지능 AI (복수전공)</div>
            <div style="font-size: 13px; color: var(--color-steel-blue); margin-top: 2px;">2021.03 ~ 재학 중 · 누적 학점 <strong>3.8 / 4.3</strong> (전공 심화)</div>
          </div>

          <div style="background: rgba(255,255,255,0.9); border: 1px solid var(--card-border); border-radius: 7px; padding: 8px 11px;">
            <div style="font-size: 16px; font-weight: 800; color: var(--color-deep-slate);">일본 조치대학교 (Sophia University)</div>
            <div style="font-size: 13.5px; font-weight: 700; color: var(--color-plum); margin-top: 1px;">FLA (Faculty of Liberal Arts) 교환학생 수료</div>
            <div style="font-size: 13px; color: var(--color-steel-blue); margin-top: 2px;">2026.04 ~ 2026.07 · 영·일 다문화 협업 세미나 이수</div>
          </div>

          <div>
            <div style="font-size: 13.5px; font-weight: 800; color: var(--color-deep-slate); margin-bottom: 4px;">핵심 전공 교과 이수</div>
            <div style="display: flex; flex-wrap: wrap; gap: 5px;">
              <span class="chip" style="font-size: 12px; background: rgba(129,98,113,0.12); padding: 2px 7px;">인간-컴퓨터 상호작용 (HCI)</span>
              <span class="chip" style="font-size: 12px; background: rgba(129,98,113,0.12); padding: 2px 7px;">AI 심화 모델링 & 딥러닝</span>
              <span class="chip" style="font-size: 12px; background: rgba(129,98,113,0.12); padding: 2px 7px;">프로덕트 매니지먼트 (PM)</span>
              <span class="chip" style="font-size: 12px; background: rgba(129,98,113,0.12); padding: 2px 7px;">인터랙티브 미디어아트</span>
            </div>
          </div>

          <div style="background: rgba(129,98,113,0.08); padding: 9px 11px; border-radius: 7px; border: 1.5px solid rgba(129,98,113,0.3);">
            <div style="font-size: 13.5px; font-weight: 800; color: var(--color-plum); margin-bottom: 3px;">🌐 글로벌 비즈니스 어학 역량</div>
            <div style="font-size: 13px; color: var(--color-steel-blue); line-height: 1.5;">
              • 영어: <strong>OPIc IH</strong>, TOEFL iBT 84점 (프리젠테이션/실무 소통)<br>
              • 일본어: <strong>JLPT N1</strong> (최고등급), <strong>FLEX 865점</strong> (1B 비즈니스급)
            </div>
          </div>
        </div>

        <!-- Middle: Leadership & Skills -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; gap: 7px; padding: 10px 13px;">
          <div class="card-title">
            <span>리더십, 스킬 및 자격</span>
            <span class="chip-primary">Leadership & Skills</span>
          </div>

          <ul class="bullet-list" style="margin-bottom: 2px;">
            <li><strong>아트&테크놀로지 학생회장 (2022.03~12)</strong>: 학과 대표, 예산 집행 총괄, 소통 총괄</li>
            <li><strong>제11회 ATC 전시 홍보팀 (2022.07~11)</strong>: 4,800여 명 관람객 바이럴 기획</li>
            <li><strong>SCG 학부연구 팀장 (2024.12~2025.02)</strong>: 생성형 AI '꿈틀' 기획 총괄 및 연구 완결</li>
            <li><strong>공군 병장 만기전역 (2023.02~2024.11)</strong>: 규율 준수와 위기 대처 역량 체득</li>
          </ul>

          <div style="border-top: 1.5px solid var(--card-border); padding-top: 6px;">
            <div style="font-size: 13.5px; font-weight: 800; color: var(--color-deep-slate); margin-bottom: 3px;">테크니컬 스킬 셋 (Technical Stack)</div>
            <div style="font-size: 13px; color: var(--color-steel-blue); line-height: 1.5;">
              • <strong>AI & Data</strong>: Python, PyTorch, Hugging Face, Gemini API, Librosa, LIME/SHAP<br>
              • <strong>UX & Product</strong>: Figma, GOMS Usability Modeling, Jira, Flutter, WebRTC
            </div>
          </div>

          <div style="border-top: 1.5px solid var(--card-border); padding-top: 6px;">
            <div style="font-size: 13.5px; font-weight: 800; color: var(--color-deep-slate); margin-bottom: 4px;">공인 자격 이력 (Credentials)</div>
            <div style="display: flex; flex-wrap: wrap; gap: 5px;">
              <span class="chip" style="font-size: 12px; padding: 3px 8px; font-weight: 800;">TESAT 경제이해력 S등급 (상위 0.7%)</span>
              <span class="chip" style="font-size: 12px; padding: 3px 8px; font-weight: 800;">한국사능력검정시험 1급 (심화)</span>
              <span class="chip" style="font-size: 12px; padding: 3px 8px; font-weight: 800;">자동차운전면허 1종 보통</span>
            </div>
          </div>
        </div>

        <!-- Right: Other Projects & Contact Card -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between; border-color: var(--color-plum); gap: 7px; padding: 10px 13px;">
          <div>
            <div class="card-title">
              <span>기타 프로젝트 아카이브</span>
              <span class="chip">More Projects</span>
            </div>
            <div style="font-size: 13px; color: var(--color-steel-blue); line-height: 1.5; margin-bottom: 4px;">
              • <strong>Liar Game</strong>: Gemini API 동적 단어 생성 파티 게임<br>
              • <strong>Gacha To-Do</strong>: 픽셀 아쿠아리움 육성 게이미피케이션<br>
              • <strong>Unseen Map</strong>: EXIF GPS 기반 여행 여정 공간 매핑 웹<br>
              • <strong>Online HalliGalli</strong>: WebRTC 50ms 실시간 대전 게임
            </div>
          </div>

          <div style="flex: 1; min-height: 120px; max-height: 160px; border-radius: 8px; overflow: hidden; border: 1.5px solid var(--card-border); background: #ffffff; display: flex; align-items: center; justify-content: center;">
            <img src="${imgGachaTodo}" alt="Gacha To-Do Preview" style="width: 100%; height: 100%; object-fit: cover; object-position: center 30%;" />
          </div>

          <!-- Contact Box -->
          <div style="background: linear-gradient(135deg, rgba(255,255,255,0.96), rgba(246,214,189,0.35)); border: 1.5px solid var(--card-border); border-radius: 8px; padding: 9px 12px;">
            <div style="font-size: 14px; font-weight: 800; color: var(--color-deep-slate); margin-bottom: 2px;">
              Ready for the Next Challenge 🤝
            </div>
            <div style="font-size: 12px; color: var(--color-plum); font-weight: 700; margin-bottom: 5px;">
              AI 프로덕트 기획, 인턴십, 서비스 기획 협업 제안 언제든 환영합니다.
            </div>
            <div style="font-size: 12px; color: var(--color-dark-purple); font-family: 'JetBrains Mono', monospace; line-height: 1.5;">
              <div>Email: <strong>yjh020701@gmail.com</strong></div>
              <div>GitHub: <strong>github.com/meisteryi</strong></div>
              <div>Web: <strong>meisteryi.github.io/YJH_Personal_Website</strong></div>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-footer">
        <div class="footer-left">
          <span>이주형(Joohyoung Yi) | AI Product Planner & Digital Strategist</span>
          <span>Sogang Univ. Art & Tech & AI</span>
        </div>
        <div class="page-number">P.08 / 08 (END)</div>
      </div>
    </div>
  </div>

</body>
</html>`;

const outputPath = path.join(rootDir, 'slide_portfolio.html');
fs.writeFileSync(outputPath, htmlContent, 'utf-8');
console.log(`Saved Slide HTML to ${outputPath}`);

const pdfOutputPath = path.join(rootDir, 'Joohyoung_Yi_AI_Product_Portfolio.pdf');
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

if (fs.existsSync(chromePath)) {
  console.log('Generating A4 Landscape Vector PDF via Chrome Headless (with virtual time budget)...');
  const cmd = `"${chromePath}" --headless --disable-gpu --virtual-time-budget=10000 --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf-no-header --print-to-pdf="${pdfOutputPath}" "file://${outputPath}"`;
  try {
    const result = execSync(cmd, { encoding: 'utf-8' });
    console.log(result);
    console.log(`Successfully generated PDF at: ${pdfOutputPath}`);
  } catch (err) {
    console.error('Error generating PDF with Chrome:', err);
  }
} else {
  console.log('Chrome executable not found at default Mac location.');
}
