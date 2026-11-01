import os
import docx
from docx.shared import Inches, Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn, nsdecls

def create_element(name):
    return OxmlElement(name)

def set_cell_margins(cell, top=50, bottom=50, left=70, right=70):
    """Set cell margins in dxa (1 pt = 20 dxa)"""
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}>'
                      f'<w:top w:w="{top}" w:type="dxa"/>'
                      f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
                      f'<w:left w:w="{left}" w:type="dxa"/>'
                      f'<w:right w:w="{right}" w:type="dxa"/>'
                      f'</w:tcMar>')
    tcPr.append(tcMar)

def set_cell_shading(cell, color_hex):
    """Set cell background color"""
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{color_hex}"/>')
    tcPr.append(shd)

def set_cell_borders(cell, top=None, bottom=None, left=None, right=None):
    """Set custom borders on a cell"""
    tcPr = cell._tc.get_or_add_tcPr()
    borders_elm = create_element('w:tcBorders')
    
    borders = {'top': top, 'bottom': bottom, 'left': left, 'right': right}
    for border_name, border_style in borders.items():
        if border_style is not None:
            val = border_style.get('val', 'single')
            sz = border_style.get('sz', '4')
            color = border_style.get('color', 'auto')
            b_elm = parse_xml(f'<w:{border_name} {nsdecls("w")} w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>')
            borders_elm.append(b_elm)
        else:
            b_elm = parse_xml(f'<w:{border_name} {nsdecls("w")} w:val="none"/>')
            borders_elm.append(b_elm)
            
    tcPr.append(borders_elm)

def prevent_row_split(row):
    """Prevent table row from splitting across pages"""
    trPr = row._tr.get_or_add_trPr()
    trPr.append(parse_xml(f'<w:cantSplit {nsdecls("w")}/>'))

def set_run_fonts(run, font_name="맑은 고딕", is_bold=False, size_pt=8.5, color_rgb=None):
    run.font.name = font_name
    run.font.bold = is_bold
    run.font.size = Pt(size_pt)
    if color_rgb:
        run.font.color.rgb = color_rgb
    rPr = run._r.get_or_add_rPr()
    rFonts = parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="{font_name}" w:hAnsi="{font_name}" w:eastAsia="{font_name}" w:cs="{font_name}"/>')
    rPr.append(rFonts)

def add_section_header(doc, title_ko, title_en, number="", space_before=9):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.keep_with_next = True
    
    pPr = p._p.get_or_add_pPr()
    pBdr = parse_xml(f'<w:pBdr {nsdecls("w")}><w:bottom w:val="single" w:sz="12" w:space="3" w:color="2563EB"/></w:pBdr>')
    pPr.append(pBdr)
    
    if number:
        r_num = p.add_run(f"{number}. ")
        set_run_fonts(r_num, "맑은 고딕", is_bold=True, size_pt=11.0, color_rgb=RGBColor(37, 99, 235))
        
    r_ko = p.add_run(title_ko)
    set_run_fonts(r_ko, "맑은 고딕", is_bold=True, size_pt=11.0, color_rgb=RGBColor(15, 23, 42))
    
    if title_en:
        r_en = p.add_run(f"  |  {title_en}")
        set_run_fonts(r_en, "맑은 고딕", is_bold=False, size_pt=8.5, color_rgb=RGBColor(100, 116, 139))
        
    return p

def build_cv():
    doc = docx.Document()
    
    # Page Setup (A4, 1.4cm top/bottom, 1.6cm left/right)
    for section in doc.sections:
        section.page_width = Cm(21.0)
        section.page_height = Cm(29.7)
        section.top_margin = Cm(1.4)
        section.bottom_margin = Cm(1.4)
        section.left_margin = Cm(1.6)
        section.right_margin = Cm(1.6)
        
    PAGE_WIDTH_CM = 17.8
    
    # ==========================================
    # PAGE 1: Profile & Background & Competencies
    # ==========================================
    
    # 1. Header Table
    header_table = doc.add_table(rows=1, cols=2)
    header_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    header_table.autofit = False
    prevent_row_split(header_table.rows[0])
    
    cell_info = header_table.cell(0, 0)
    cell_photo = header_table.cell(0, 1)
    
    cell_info.width = Cm(14.3)
    cell_photo.width = Cm(3.5)
    
    set_cell_margins(cell_info, top=0, bottom=20, left=0, right=60)
    set_cell_margins(cell_photo, top=0, bottom=20, left=40, right=0)
    set_cell_borders(cell_info)
    set_cell_borders(cell_photo)
    
    # Name
    p_name = cell_info.paragraphs[0]
    p_name.paragraph_format.space_before = Pt(0)
    p_name.paragraph_format.space_after = Pt(1)
    r_name = p_name.add_run("이 주 형")
    set_run_fonts(r_name, "맑은 고딕", is_bold=True, size_pt=18, color_rgb=RGBColor(15, 23, 42))
    r_eng_name = p_name.add_run("  Joohyoung Yi")
    set_run_fonts(r_eng_name, "맑은 고딕", is_bold=True, size_pt=12, color_rgb=RGBColor(71, 85, 105))
    
    # Headline Role
    p_title = cell_info.add_paragraph()
    p_title.paragraph_format.space_before = Pt(0)
    p_title.paragraph_format.space_after = Pt(2)
    r_title = p_title.add_run("AI Product Planner & UX Specialist  (인공지능 서비스 기획자)")
    set_run_fonts(r_title, "맑은 고딕", is_bold=True, size_pt=10.0, color_rgb=RGBColor(37, 99, 235))
    
    # Contact Details
    p_contact = cell_info.add_paragraph()
    p_contact.paragraph_format.space_before = Pt(0)
    p_contact.paragraph_format.space_after = Pt(0)
    p_contact.paragraph_format.line_spacing = 1.15
    
    r_c1 = p_contact.add_run("✉ 이메일: ")
    set_run_fonts(r_c1, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(51, 65, 85))
    r_c1_val = p_contact.add_run("yjh020701@gmail.com   |   ")
    set_run_fonts(r_c1_val, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(51, 65, 85))
    
    r_c2 = p_contact.add_run("⚲ 활동지: ")
    set_run_fonts(r_c2, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(51, 65, 85))
    r_c2_val = p_contact.add_run("서울특별시 마포구 (서강대학교)\n")
    set_run_fonts(r_c2_val, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(51, 65, 85))
    
    r_c3 = p_contact.add_run("🌐 포트폴리오 웹: ")
    set_run_fonts(r_c3, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(51, 65, 85))
    r_c3_val = p_contact.add_run("https://meisteryi.github.io/YJH_Personal_Website/\n")
    set_run_fonts(r_c3_val, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(37, 99, 235))
    
    r_c4 = p_contact.add_run("💻 GitHub: ")
    set_run_fonts(r_c4, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(51, 65, 85))
    r_c4_val = p_contact.add_run("https://github.com/meisteryi   |   ")
    set_run_fonts(r_c4_val, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(51, 65, 85))
    
    r_c5 = p_contact.add_run("🔗 LinkedIn: ")
    set_run_fonts(r_c5, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(51, 65, 85))
    r_c5_val = p_contact.add_run("linkedin.com/in/meisteryi")
    set_run_fonts(r_c5_val, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(51, 65, 85))
    
    # ID Photo
    p_photo = cell_photo.paragraphs[0]
    p_photo.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_photo.paragraph_format.space_before = Pt(0)
    p_photo.paragraph_format.space_after = Pt(0)
    
    photo_path = '/Users/yijoohyoung/.gemini/antigravity/brain/ca6d52b0-35a4-4c20-b060-67bda2c527d0/.user_uploaded/media_1793511587699_284989a1.jpg'
    if os.path.exists(photo_path):
        run_img = p_photo.add_run()
        run_img.add_picture(photo_path, width=Cm(3.0))
        
    # Executive Summary Card
    summary_table = doc.add_table(rows=1, cols=1)
    summary_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    prevent_row_split(summary_table.rows[0])
    summary_cell = summary_table.cell(0, 0)
    summary_cell.width = Cm(PAGE_WIDTH_CM)
    set_cell_margins(summary_cell, top=50, bottom=50, left=80, right=80)
    set_cell_shading(summary_cell, "F8FAFC")
    set_cell_borders(summary_cell, 
                     top={'val': 'single', 'sz': '4', 'color': 'E2E8F0'},
                     bottom={'val': 'single', 'sz': '4', 'color': 'E2E8F0'},
                     left={'val': 'single', 'sz': '14', 'color': '2563EB'},
                     right={'val': 'single', 'sz': '4', 'color': 'E2E8F0'})
    
    p_sum = summary_cell.paragraphs[0]
    p_sum.paragraph_format.space_before = Pt(0)
    p_sum.paragraph_format.space_after = Pt(0)
    p_sum.paragraph_format.line_spacing = 1.15
    
    r_sum_title = p_sum.add_run("■ 프로필 요약 (Executive Summary)\n")
    set_run_fonts(r_sum_title, "맑은 고딕", is_bold=True, size_pt=8.5, color_rgb=RGBColor(30, 41, 59))
    
    r_sum_body = p_sum.add_run(
        "AI 기술의 가능성을 실용적인 사용자 경험과 프로덕트로 기획하는 AI 서비스 기획자입니다. 서강대학교에서 Art & Technology(기획·UX·인터랙션)와 인공지능(AI)을 복수전공하며, 단순한 AI 래퍼(Wrapper) 개발을 넘어 LLM, XAI, 멀티모달, 3D WebGL, E2EE 보안 기술의 원리를 깊이 이해하고 실질적인 사용자 문제를 해결하는 서비스를 직접 기획하고 1인 프로토타이핑/라이브 운영까지 완결합니다. 일본 조치대학교 교환학생 수료를 통한 다문화 협업 및 외국어 소통 역량, 학과 학생회장 및 대형 컨퍼런스 홍보 총괄 리더십을 두루 갖추고 있습니다."
    )
    set_run_fonts(r_sum_body, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(51, 65, 85))

    # Education Section
    add_section_header(doc, "학력 및 글로벌 파견 이력", "Education & Global Academic Experience", "01", space_before=7)
    
    edu_table = doc.add_table(rows=2, cols=2)
    edu_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    edu_table.autofit = False
    
    for r in edu_table.rows:
        prevent_row_split(r)
        
    c00 = edu_table.cell(0, 0)
    c01 = edu_table.cell(0, 1)
    c00.width = Cm(14.0)
    c01.width = Cm(3.8)
    set_cell_margins(c00, top=25, bottom=25, left=25, right=25)
    set_cell_margins(c01, top=25, bottom=25, left=25, right=25)
    set_cell_borders(c00, bottom={'val': 'dashed', 'sz': '4', 'color': 'E2E8F0'})
    set_cell_borders(c01, bottom={'val': 'dashed', 'sz': '4', 'color': 'E2E8F0'})
    
    p_sg = c00.paragraphs[0]
    p_sg.paragraph_format.space_before = Pt(0)
    p_sg.paragraph_format.space_after = Pt(1)
    r_sg1 = p_sg.add_run("서강대학교 (Sogang University)")
    set_run_fonts(r_sg1, "맑은 고딕", is_bold=True, size_pt=9.0, color_rgb=RGBColor(15, 23, 42))
    r_sg2 = p_sg.add_run("  |  지식융합미디어대학 (재학)")
    set_run_fonts(r_sg2, "맑은 고딕", is_bold=False, size_pt=8.5, color_rgb=RGBColor(100, 116, 139))
    
    p_sg_sub = c00.add_paragraph()
    p_sg_sub.paragraph_format.space_before = Pt(0)
    p_sg_sub.paragraph_format.space_after = Pt(0)
    p_sg_sub.paragraph_format.line_spacing = 1.15
    r_sg_m1 = p_sg_sub.add_run("• 주전공: Art & Technology ")
    set_run_fonts(r_sg_m1, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(37, 99, 235))
    r_sg_m1_desc = p_sg_sub.add_run("(미디어아트 기획, 인터랙션 디자인, 사용자 중심 서비스 기획 및 프로토타이핑)\n")
    set_run_fonts(r_sg_m1_desc, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(71, 85, 105))
    r_sg_m2 = p_sg_sub.add_run("• 복수전공: 인공지능 (Artificial Intelligence) ")
    set_run_fonts(r_sg_m2, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(37, 99, 235))
    r_sg_m2_desc = p_sg_sub.add_run("(기계학습, 딥러닝, 설명가능 AI(XAI), LLM 프롬프트/파이프라인, 데이터 사이언스)")
    set_run_fonts(r_sg_m2_desc, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(71, 85, 105))
    
    p_sg_date = c01.paragraphs[0]
    p_sg_date.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_sg_date.paragraph_format.space_before = Pt(0)
    p_sg_date.paragraph_format.space_after = Pt(0)
    r_sg_date = p_sg_date.add_run("2021.03 ~ 재학 중")
    set_run_fonts(r_sg_date, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(71, 85, 105))

    c10 = edu_table.cell(1, 0)
    c11 = edu_table.cell(1, 1)
    c10.width = Cm(14.0)
    c11.width = Cm(3.8)
    set_cell_margins(c10, top=25, bottom=25, left=25, right=25)
    set_cell_margins(c11, top=25, bottom=25, left=25, right=25)
    set_cell_borders(c10)
    set_cell_borders(c11)
    
    p_sp = c10.paragraphs[0]
    p_sp.paragraph_format.space_before = Pt(1)
    p_sp.paragraph_format.space_after = Pt(1)
    r_sp1 = p_sp.add_run("일본 조치대학교 (Sophia University, Tokyo)")
    set_run_fonts(r_sp1, "맑은 고딕", is_bold=True, size_pt=9.0, color_rgb=RGBColor(15, 23, 42))
    r_sp2 = p_sp.add_run("  |  FLA (Faculty of Liberal Arts) 교환학생 파견")
    set_run_fonts(r_sp2, "맑은 고딕", is_bold=False, size_pt=8.5, color_rgb=RGBColor(100, 116, 139))
    
    p_sp_sub = c10.add_paragraph()
    p_sp_sub.paragraph_format.space_before = Pt(0)
    p_sp_sub.paragraph_format.space_after = Pt(0)
    r_sp_desc = p_sp_sub.add_run("• 도쿄 현지에서 전 세계 유학생들과 인문·교양 과정을 이수하며 다문화 협업 및 실전 글로벌 외국어(영어/일본어) 소통 역량 체득")
    set_run_fonts(r_sp_desc, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(71, 85, 105))
    
    p_sp_date = c11.paragraphs[0]
    p_sp_date.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_sp_date.paragraph_format.space_before = Pt(1)
    p_sp_date.paragraph_format.space_after = Pt(0)
    r_sp_date = p_sp_date.add_run("2026.04 ~ 2026.07")
    set_run_fonts(r_sp_date, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(71, 85, 105))

    # Core Competencies Section: MODERN 3-COLUMN DASHBOARD CARDS
    add_section_header(doc, "핵심 역량", "Core Competencies", "02", space_before=7)
    
    comp_table = doc.add_table(rows=1, cols=3)
    comp_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    comp_table.autofit = False
    prevent_row_split(comp_table.rows[0])
    
    col_w = Cm(5.93)
    categories = [
        (
            "AI & Data Comprehension",
            "인공지능 & 데이터 이해",
            [
                ("LLM Prompt & Flow", "Gemini, GPT Few-shot 프롬프트 최적화, 페르소나 및 안전 필터 설계"),
                ("XAI 모델 편향 분석", "Attention 가중치 추출, LIME 결합 모델 의사결정 시각화 & 편향 규명"),
                ("멀티모달 파이프라인", "Vision OCR, 2D Mel-Spectrogram 음향 변환, EXIF 메타데이터 분석"),
                ("AI 모델링 & 전이학습", "PyTorch, Transformers, ResNet50 전이학습, KoGPT-2 파인튜닝 실험")
            ]
        ),
        (
            "Product Planning & UX",
            "프로덕트 기획 & UX 전략",
            [
                ("문제 정의 & 가치 제안", "도메인별 페인포인트 기반 AI 도입 실질적 가치 정의 & 기능 기획"),
                ("AI 특화 Fail-safe UX", "추론 지연(Latency) 완화 UI, AI 환각(Hallucination) 방어 인터랙션"),
                ("User Journey & IA 설계", "온보딩-코어루프-아카이빙 전 과정 정보 구조(IA) & 와이어프레임"),
                ("게이미피케이션 & 리텐션", "보상 체계, 3대 잠금 해제 관문 퀘스트, 3초 실링 왁스 피지컬 UX")
            ]
        ),
        (
            "Prototyping & Tech Stack",
            "프로토타이핑 & 기술 실행력",
            [
                ("Cross-Platform App", "Flutter(Dart) iOS/Android 네이티브 앱 제작, 햅틱(Taptic) & 모션 센서"),
                ("Modern Web Frontend", "React, Next.js 16, TypeScript, Tailwind CSS, Three.js 3D WebGL"),
                ("Serverless & Security", "Firebase Firestore/Auth, Web Crypto E2EE 암호화, VAPID Web Push"),
                ("UX Research & Analysis", "Figma 고충실도 프로토타입, GOMS 정량 모델링, Wilcoxon 통계 검정")
            ]
        )
    ]
    
    for c_idx, (cat_en, cat_ko, skills) in enumerate(categories):
        cell = comp_table.cell(0, c_idx)
        cell.width = col_w
        set_cell_margins(cell, top=35, bottom=35, left=45, right=45)
        set_cell_shading(cell, "F8FAFC")
        
        border_box = {'val': 'single', 'sz': '4', 'color': 'E2E8F0'}
        set_cell_borders(cell, top={'val': 'single', 'sz': '8', 'color': '2563EB'}, bottom=border_box, left=border_box, right=border_box)
        
        p = cell.paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(2)
        r_k = p.add_run(cat_ko + "\n")
        set_run_fonts(r_k, "맑은 고딕", is_bold=True, size_pt=8.5, color_rgb=RGBColor(15, 23, 42))
        r_e = p.add_run(cat_en + "\n")
        set_run_fonts(r_e, "맑은 고딕", is_bold=False, size_pt=7.0, color_rgb=RGBColor(100, 116, 139))
        
        p_body = cell.add_paragraph()
        p_body.paragraph_format.space_before = Pt(0)
        p_body.paragraph_format.space_after = Pt(0)
        p_body.paragraph_format.line_spacing = 1.12
        
        for s_idx, (stitle, sdesc) in enumerate(skills):
            r_st = p_body.add_run(f"• {stitle}\n")
            set_run_fonts(r_st, "맑은 고딕", is_bold=True, size_pt=7.5, color_rgb=RGBColor(30, 41, 59))
            r_sd = p_body.add_run(f"  {sdesc}\n" if s_idx < len(skills) - 1 else f"  {sdesc}")
            set_run_fonts(r_sd, "맑은 고딕", is_bold=False, size_pt=7.0, color_rgb=RGBColor(71, 85, 105))

    # ==========================================
    # PAGE 2: Flagship Projects (Warmth & SHEN & TabiLenS)
    # ==========================================
    doc.add_page_break()
    
    add_section_header(doc, "주요 프로덕트 및 프로젝트 이력", "Key Projects & Products (Flagship AI & Research)", "03", space_before=0)
    
    projects_p2 = [
        {
            "name": "온기 (Warmth) — 생성형 감성 AI & 피지컬 인터랙션 비밀 교환일기",
            "period": "2026.09 ~ 현재 (실서비스 라이브 운영 중)",
            "role": "1인 기획, 프롬프트 엔지니어링, 풀스택 개발 및 실사용자 배포·운영 (기여도 100%)",
            "tech": "Next.js 16 (Turbopack), TypeScript, Google Gemini LLM API, Three.js (WebGL 3D), Web Crypto API (E2EE), Web Audio API, iOS Capacitor (Taptic Engine), Firebase Firestore, VAPID Web Push",
            "link": "https://meisteryi.github.io/Warmth/   |   GitHub: meisteryi/Warmth",
            "situation": "인스턴트 메신저의 피상적인 대화를 극복하고, Google Gemini LLM API, Three.js 3D 물리 시뮬레이션, E2EE 보안을 융합하여 실제 연인들이 매일 사용하는 1:1 프라이빗 라이브 프로덕션 교환일기 프로덕트를 기획 및 운영함.",
            "problem": "교환일기 사용자들이 겪는 '오늘 뭐 쓰지?'라는 소재 고갈(Writer's Block), 텍스트 속 감정 피드백 부재, 사적인 일기에 대한 완벽한 프라이버시(E2EE) 요구, 야간 작성 패턴에 맞춘 턴 리셋 및 텍스트 유실 방지 등 실제 운영 환경의 다차원적 페인포인트를 해결해야 함.",
            "actions": [
                "Google Gemini LLM 연동 8대 감성 테마 기반 '오늘 뭐 쓰지? 글감 질문 자동 생성 파이프라인' 및 서정적 맞춤형 AI 편지 삽화 생성 엔진 구축",
                "일기 본문 심층 분석 NLP 감정 엔진 설계: 사계절 기온(-20°C~40°C) 메타포 산출, 사실 나열 필터링, 25자 시적 코멘트 및 매월 말일 '월간 온기 리포트(Recap)' 자동 발행",
                "Three.js WebGL 3D 추억 유리병 및 모바일 기기를 흔들면 가속도 센서(DeviceMotionEvent)에 반응해 왁스가 튀어오르는 인터랙티브 물리 시뮬레이션 구현",
                "편지 본문과 포스트잇 리액션(최대 100자)까지 유출을 원천 차단하는 Web Crypto API 기반 E2EE 종단간 암호화 및 무유실 Auto-Save/복원 완비",
                "3초 롱프레스 실링 왁스(Web Audio 사운드 + iOS Taptic Engine 햅틱), 앤틱 우표 2×2 직소 퍼즐, 단행본 소책자(Booklet) 모바일 PDF 인쇄 브릿지 및 새벽 04:00 자동 리셋 배포"
            ],
            "metrics": "실제 연인 대상 라이브 운영 중, LLM 질문 및 감정 분석 응답 1.5초 이내, E2EE 암호화 100%, 3D 렌더링 60fps 유지, 글 작성 텍스트 유실률 0% 달성"
        },
        {
            "name": "SHEN: Sentiment Hidden Eye aNalysis — XAI 기반 한국어 PLM 젠더 편향성 평가 연구",
            "period": "2024.03 ~ 2024.06",
            "role": "연구 기획, XAI 파이프라인 모델링, 데이터셋 구축 및 논문 작성 (기여도 100%)",
            "tech": "Python, PyTorch, HuggingFace Transformers, KcELECTRA, KoBERT, LIME (Local Interpretable Model-agnostic Explanations)",
            "link": "GitHub: meisteryi/SHEN",
            "situation": "한국어 사전학습 언어모델(PLM)이 대규모 말뭉치를 학습하는 과정에서 사회적·성별 고정관념 편향을 내재화하여, 특정 직업군과 성별 대명사가 결합되었을 때 감성 예측을 왜곡하는 문제를 정량 규명하고자 함.",
            "problem": "블랙박스 인공지능 모델 내부에서 어떤 토큰과 계층이 편향된 의사결정을 유발하는지 해석하기 어렵고, 한국어 문맥에 특화된 설명가능 AI(XAI) 편향 검증 프레임워크가 부재했음.",
            "actions": [
                "성별 대명사와 직업 토큰을 통제한 한국어 템플릿 평가 데이터셋을 직접 구축하고 감성 점수 변화 통계 검정 수행",
                "Self-Attention Layer 가중치 추출과 LIME 기법을 교차 결합한 정밀 XAI 설명 분석 파이프라인 설계",
                "'의사/간호사', '소방관' 등 특정 직업 토큰과 성별 대명사 간의 Attention 가중치 이상 왜곡 및 모델의 특성 오귀인(Spurious Correlation) 메커니즘을 시각화하여 실증 규명"
            ],
            "metrics": "한국어 PLM 편향 분석 프레임워크 완성, 성별 대명사에 따른 감성 예측 왜곡 정량화, AI 모델의 윤리적 배포를 위한 디바이어싱(Debiasing) 가이드라인 도출"
        },
        {
            "name": "TabiLenS: AI Travel Menu & Culture Guide — 여행자 특화 Vision-LLM 가이드 앱",
            "period": "2024.09 ~ 2024.12",
            "role": "서비스 기획, AI-UX 플로우 설계, Flutter 모바일 앱 개발 (기여도 100%)",
            "tech": "Flutter, Dart, Google ML Kit (On-Device OCR), Google Gemini LLM API, Firebase",
            "link": "GitHub: meisteryi/TabiLenS",
            "situation": "해외 여행객이 현지 식당에서 낯선 외국어 메뉴판을 마주했을 때, 단순 텍스트 직역만으로는 음식의 재료, 조리 방식, 식문화 맥락을 알 수 없어 주문 실패를 겪는 페인포인트를 해결하고자 기획함.",
            "problem": "단순 번역 앱은 요리의 문화적 맥락(매운 정도, 알레르기 유발 물질, 추천 조합)을 제공하지 못하며, 해외 현지의 불안정한 네트워크 환경에서 무거운 AI 호출 시 지연 시간(Latency)이 길어지는 한계가 존재함.",
            "actions": [
                "낯선 메뉴판의 탐색 부하를 최소화하는 '촬영 → 핵심 요약 → 원클릭 주문 카드'의 3단계 주문 UX 플로우 설계",
                "On-Device OCR(Google ML Kit)을 통해 250ms 내 텍스트를 초고속 추출하고, Gemini LLM을 통해 식재료, 조리법, 알레르기 유의사항, 현지 발음 표기까지 자동 큐레이션하는 파이프라인 구현",
                "네트워크 불안정 환경에 대비한 로컬 캐싱 및 Fail-safe 인터랙션(오프라인 안내 카드) 구축"
            ],
            "metrics": "OCR 인식 속도 250ms, LLM 문화 맥락 요약 지연 2초 이내 달성, 여행자 사용성 테스트에서 메뉴 선택 확신도 및 주문 편의성 대폭 개선"
        }
    ]
    
    for p_idx, prj in enumerate(projects_p2):
        card_table = doc.add_table(rows=1, cols=1)
        card_table.alignment = WD_TABLE_ALIGNMENT.CENTER
        prevent_row_split(card_table.rows[0])
        c_card = card_table.cell(0, 0)
        c_card.width = Cm(PAGE_WIDTH_CM)
        
        set_cell_margins(c_card, top=45, bottom=45, left=75, right=75)
        set_cell_shading(c_card, "F8FAFC" if p_idx == 0 else "FFFFFF")
        
        border_l = {'val': 'single', 'sz': '10', 'color': '2563EB' if p_idx == 0 else '4F46E5'}
        border_box = {'val': 'single', 'sz': '4', 'color': 'E2E8F0'}
        set_cell_borders(c_card, top=border_box, bottom=border_box, left=border_l, right=border_box)
        
        p_head = c_card.paragraphs[0]
        p_head.paragraph_format.space_before = Pt(0)
        p_head.paragraph_format.space_after = Pt(1)
        
        r_title = p_head.add_run(f"■ {prj['name']}\n")
        set_run_fonts(r_title, "맑은 고딕", is_bold=True, size_pt=9.0, color_rgb=RGBColor(15, 23, 42))
        
        r_meta1 = p_head.add_run(f"• 수행 기간: {prj['period']}   |   역할: {prj['role']}\n")
        set_run_fonts(r_meta1, "맑은 고딕", is_bold=False, size_pt=7.5, color_rgb=RGBColor(71, 85, 105))
        
        r_tech_lbl = p_head.add_run("• 기술 스택: ")
        set_run_fonts(r_tech_lbl, "맑은 고딕", is_bold=True, size_pt=7.5, color_rgb=RGBColor(37, 99, 235))
        r_tech_val = p_head.add_run(f"{prj['tech']}\n")
        set_run_fonts(r_tech_val, "맑은 고딕", is_bold=False, size_pt=7.5, color_rgb=RGBColor(51, 65, 85))
        
        p_desc = c_card.add_paragraph()
        p_desc.paragraph_format.space_before = Pt(1)
        p_desc.paragraph_format.space_after = Pt(0)
        p_desc.paragraph_format.line_spacing = 1.15
        
        r_sit = p_desc.add_run("• 기획 배경 & 핵심 과제: ")
        set_run_fonts(r_sit, "맑은 고딕", is_bold=True, size_pt=7.5, color_rgb=RGBColor(30, 41, 59))
        r_sit_val = p_desc.add_run(f"{prj['situation']} {prj['problem']}\n")
        set_run_fonts(r_sit_val, "맑은 고딕", is_bold=False, size_pt=7.5, color_rgb=RGBColor(71, 85, 105))
        
        r_act_lbl = p_desc.add_run("• 주요 수행 내용:\n")
        set_run_fonts(r_act_lbl, "맑은 고딕", is_bold=True, size_pt=7.5, color_rgb=RGBColor(30, 41, 59))
        for act in prj['actions']:
            r_act_item = p_desc.add_run(f"  - {act}\n")
            set_run_fonts(r_act_item, "맑은 고딕", is_bold=False, size_pt=7.5, color_rgb=RGBColor(51, 65, 85))
            
        r_res_lbl = p_desc.add_run("• 주요 성과 & Metrics: ")
        set_run_fonts(r_res_lbl, "맑은 고딕", is_bold=True, size_pt=7.5, color_rgb=RGBColor(37, 99, 235))
        r_res_val = p_desc.add_run(f"{prj['metrics']}")
        set_run_fonts(r_res_val, "맑은 고딕", is_bold=True, size_pt=7.5, color_rgb=RGBColor(30, 41, 59))
        
        if p_idx < len(projects_p2) - 1:
            p_space = doc.add_paragraph()
            p_space.paragraph_format.space_before = Pt(0)
            p_space.paragraph_format.space_after = Pt(2)

    # ==========================================
    # Projects p3 continued
    
    projects_p3 = [
        {
            "name": "ASTRA: 모바일 LMS 사용성 리서치 & A/B 테스트",
            "period": "2024.09 ~ 2024.12",
            "role": "UX 리서처, Figma 프로토타입 제작, A/B 테스트 설계 및 통계 검정 (기여도 100%)",
            "tech": "Figma, GOMS 정량 모델링, Wilcoxon Signed-Rank Test, SPSS/Python 통계 분석",
            "situation": "서강대학교 공식 사이버캠퍼스 모바일 앱의 복잡한 내비게이션으로 인해 수천 명의 학부생들이 학사 공지 확인 및 과제 제출 과정에서 지속적인 마찰을 겪고 있었음.",
            "problem": "과도한 뎁스 구조, 불필요한 스크롤, 비직관적 과제 제출 플로우로 인해 과업 완료 시간이 불필요하게 지연되고 모바일 사용 만족도가 저하됨.",
            "actions": [
                "GOMS(Goals, Operators, Methods, Selection Rules) 정량 모델링을 통해 기존 인터페이스의 인지·조작 오버헤드 측정",
                "대시보드 위젯 중심의 정보 구조(IA) 재배치 및 Figma 고충실도 인터랙티브 프로토타입 제작",
                "36인 실사용자 대상 과업 수행 A/B 테스트 실시 및 비모수 통계 검정(Wilcoxon Signed-Rank Test) 수행"
            ],
            "metrics": "사용자 만족도 중앙값 100% 상승(2.0 → 4.0, p < 0.003), 과업 완료 시간 및 불필요 스크롤 횟수(p < 0.0001) 통계적 유의미한 급감 입증"
        },
        {
            "name": "꿈틀 (Kkumteul) — 생성형 AI 기반 꿈 시각화 & 인터랙티브 동화책 플랫폼",
            "period": "2024.03 ~ 2024.06",
            "role": "서비스 기획, 생성형 AI 파이프라인 설계, 인터랙티브 프론트엔드 개발 (기여도 100%)",
            "tech": "KoGPT-2 (Fine-tuning), Stable Diffusion XL (LoRA), React, Tailwind CSS",
            "situation": "사람들이 깨어난 직후 빠르게 휘발되는 꿈의 기억을 감성적인 서사와 일러스트 동화책으로 영구 소장할 수 있도록 돕고자 기획함.",
            "problem": "단편적인 꿈 키워드만으로는 기승전결이 완결된 이야기를 만들기 어렵고, AI 생성 이미지와 텍스트의 스타일 일관성을 유지하기 어려움.",
            "actions": [
                "꿈 키워드를 5챕터 동화 내러티브로 확장하는 KoGPT-2 파인튜닝 파이프라인 및 챕터별 맞춤 일러스트를 자동 렌더링하는 SDXL LoRA 파이프라인 구축",
                "실제 종이책을 넘기는 듯한 양면 책장 넘기기(Page Flip) 인터랙션 구현 및 비윤리적 프롬프트 인젝션 방어 안전 필터 설계"
            ],
            "metrics": "키워드 입력부터 5챕터 동화책 생성까지 전 과정 자동화, 아동·학부모 타깃 인터랙티브 창작 몰입도 제고"
        },
        {
            "name": "AI Football Scouter — 정량 스탯 & 정성 감성 분석 기반 축구 선수 추천 시스템",
            "period": "2024.03 ~ 2024.06",
            "role": "프로덕트 기획, 데이터 전처리 및 감성 분석 파이프라인 설계 (기여도 100%)",
            "tech": "Python, Pandas, Scikit-learn, RoBERTa, Matplotlib/Seaborn",
            "link": "GitHub: meisteryi/AI_Football_Scouter",
            "situation": "기존 축구 선수 스카우팅이 정량 스탯에만 치중되어 선수의 멘탈리티, 팀 케미스트리, 팬 여론 등 정성적 평가를 포착하지 못하는 한계를 극복하고자 기획함.",
            "problem": "방대한 커뮤니티 텍스트에서 신뢰성 있는 여론을 추출하고 정량 지표와 정합성 있게 결합하는 다차원 분석 체계가 필요했음.",
            "actions": [
                "선수별 경기 세부 스탯(패스 성공률, 태클, xG 등) 필터링과 글로벌 축구 커뮤니티 팬 오피니언 다차원 감성 분석(Sentiment Analysis) 결합",
                "360도 스카우팅 지표 레이더 차트 및 선수 간 정량·정성 비교 대시보드 플로우 완결"
            ],
            "metrics": "정량·정성 융합 스카우팅 지표 도출 및 다차원 선수 비교 시각화 대시보드 완성"
        }
    ]
    
    for p_idx, prj in enumerate(projects_p3):
        card_table = doc.add_table(rows=1, cols=1)
        card_table.alignment = WD_TABLE_ALIGNMENT.CENTER
        prevent_row_split(card_table.rows[0])
        c_card = card_table.cell(0, 0)
        c_card.width = Cm(PAGE_WIDTH_CM)
        
        set_cell_margins(c_card, top=45, bottom=45, left=75, right=75)
        set_cell_shading(c_card, "FFFFFF")
        
        border_l = {'val': 'single', 'sz': '8', 'color': '3B82F6'}
        border_box = {'val': 'single', 'sz': '4', 'color': 'E2E8F0'}
        set_cell_borders(c_card, top=border_box, bottom=border_box, left=border_l, right=border_box)
        
        p_head = c_card.paragraphs[0]
        p_head.paragraph_format.space_before = Pt(0)
        p_head.paragraph_format.space_after = Pt(1)
        
        r_title = p_head.add_run(f"■ {prj['name']}\n")
        set_run_fonts(r_title, "맑은 고딕", is_bold=True, size_pt=9.0, color_rgb=RGBColor(15, 23, 42))
        
        r_meta1 = p_head.add_run(f"• 기간: {prj['period']}   |   역할: {prj['role']}\n")
        set_run_fonts(r_meta1, "맑은 고딕", is_bold=False, size_pt=7.5, color_rgb=RGBColor(71, 85, 105))
        
        r_tech_lbl = p_head.add_run("• 기술 스택: ")
        set_run_fonts(r_tech_lbl, "맑은 고딕", is_bold=True, size_pt=7.5, color_rgb=RGBColor(37, 99, 235))
        r_tech_val = p_head.add_run(f"{prj['tech']}\n")
        set_run_fonts(r_tech_val, "맑은 고딕", is_bold=False, size_pt=7.5, color_rgb=RGBColor(51, 65, 85))
        
        p_desc = c_card.add_paragraph()
        p_desc.paragraph_format.space_before = Pt(1)
        p_desc.paragraph_format.space_after = Pt(0)
        p_desc.paragraph_format.line_spacing = 1.15
        
        r_sit = p_desc.add_run("• 기획 배경 & 핵심 과제: ")
        set_run_fonts(r_sit, "맑은 고딕", is_bold=True, size_pt=7.5, color_rgb=RGBColor(30, 41, 59))
        r_sit_val = p_desc.add_run(f"{prj['situation']} {prj['problem']}\n")
        set_run_fonts(r_sit_val, "맑은 고딕", is_bold=False, size_pt=7.5, color_rgb=RGBColor(71, 85, 105))
        
        r_act_lbl = p_desc.add_run("• 주요 수행 내용:\n")
        set_run_fonts(r_act_lbl, "맑은 고딕", is_bold=True, size_pt=7.5, color_rgb=RGBColor(30, 41, 59))
        for act in prj['actions']:
            r_act_item = p_desc.add_run(f"  - {act}\n")
            set_run_fonts(r_act_item, "맑은 고딕", is_bold=False, size_pt=7.5, color_rgb=RGBColor(51, 65, 85))
            
        r_res_lbl = p_desc.add_run("• 주요 성과 & Metrics: ")
        set_run_fonts(r_res_lbl, "맑은 고딕", is_bold=True, size_pt=7.5, color_rgb=RGBColor(37, 99, 235))
        r_res_val = p_desc.add_run(f"{prj['metrics']}")
        set_run_fonts(r_res_val, "맑은 고딕", is_bold=True, size_pt=7.5, color_rgb=RGBColor(30, 41, 59))
        
        if p_idx < len(projects_p3) - 1:
            p_space = doc.add_paragraph()
            p_space.paragraph_format.space_before = Pt(0)
            p_space.paragraph_format.space_after = Pt(2)

    # ==========================================
    # Leadership, Certifications, Military & Sign-off (Follows Project 6 on Page 4)
    # ==========================================
    # 4. Leadership & Activities
    add_section_header(doc, "대외활동 및 리더십 이력", "Leadership & Extracurricular Activities", "04", space_before=0)
    
    lead_table = doc.add_table(rows=2, cols=2)
    lead_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    lead_table.autofit = False
    
    leads = [
        (
            "서강대학교 아트&테크놀로지 학과 학생회장",
            "2022.03 ~ 2022.12",
            "리더십 / 학과 총괄",
            [
                "학과 대표로서 교수진, 학생회 집행부, 재학생, 외부 협력사 간 공식 소통 채널 총괄 및 신뢰 형성",
                "학술 세미나, 인터랙티브 미디어아트 전시 행사, 산학 프로젝트 예산 편성 및 기획·운영 전반 총괄"
            ]
        ),
        (
            "제11회 아트&테크놀로지 컨퍼런스 (11th ATC) 홍보팀 (PR)",
            "2022.07 ~ 2022.11",
            "PR 기획 / 소셜 프로모션",
            [
                "누적 관람객 약 4,800여 명 규모의 컨퍼런스 및 인터랙티브 전시에서 홍보 스태프로 활동",
                "인스타그램 스토리 커스텀 스티커 바이럴 이벤트를 직접 기획·운영하여 소셜 미디어 도달률 대폭 증대",
                "스마일게이트, 현대차 정몽구 재단 온드림 소사이어티 등 파트너십 협업 홍보 지원"
            ]
        )
    ]
    
    for idx, (title, period, badge, points) in enumerate(leads):
        prevent_row_split(lead_table.rows[idx])
        c0 = lead_table.cell(idx, 0)
        c1 = lead_table.cell(idx, 1)
        c0.width = Cm(14.0)
        c1.width = Cm(3.8)
        
        set_cell_margins(c0, top=40, bottom=40, left=40, right=40)
        set_cell_margins(c1, top=40, bottom=40, left=40, right=40)
        
        border_b = {'val': 'dashed' if idx == 0 else 'none', 'sz': '4', 'color': 'E2E8F0'}
        set_cell_borders(c0, bottom=border_b)
        set_cell_borders(c1, bottom=border_b)
        
        p_t = c0.paragraphs[0]
        p_t.paragraph_format.space_before = Pt(0)
        p_t.paragraph_format.space_after = Pt(1)
        r_t1 = p_t.add_run(f"{title} ")
        set_run_fonts(r_t1, "맑은 고딕", is_bold=True, size_pt=9.0, color_rgb=RGBColor(15, 23, 42))
        r_t2 = p_t.add_run(f" |  {badge}")
        set_run_fonts(r_t2, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(100, 116, 139))
        
        p_pts = c0.add_paragraph()
        p_pts.paragraph_format.space_before = Pt(0)
        p_pts.paragraph_format.space_after = Pt(0)
        p_pts.paragraph_format.line_spacing = 1.15
        for pt in points:
            r_pt = p_pts.add_run(f"• {pt}\n")
            set_run_fonts(r_pt, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(71, 85, 105))
            
        p_d = c1.paragraphs[0]
        p_d.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        p_d.paragraph_format.space_before = Pt(0)
        p_d.paragraph_format.space_after = Pt(0)
        r_d = p_d.add_run(period)
        set_run_fonts(r_d, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(71, 85, 105))

    # 5. Certifications & Languages
    add_section_header(doc, "어학 및 공인 자격 사항", "Certifications & Languages", "05", space_before=10)
    
    cert_data = [
        ("OPIc (영어 말하기)", "IH (Intermediate High)", "ACTFL", "2026.09"),
        ("TOEFL iBT", "85점", "ETS", "2025.04"),
        ("JLPT (일본어능력시험)", "N1 (최고 등급 합격)", "일본국제교류기금", "2024.01"),
        ("FLEX 일본어", "865점", "한국외국어대학교", "2024.03"),
        ("매경TEST", "705점 (우수 등급)", "매일경제신문사", "2024.05"),
        ("TESAT (경제이해력검증시험)", "275점 (2급)", "한국경제신문사", "2024.04"),
        ("한국사능력검정시험", "1급 (심화 최고 등급)", "국사편찬위원회", "2024.02")
    ]
    
    cert_table = doc.add_table(rows=len(cert_data) + 1, cols=4)
    cert_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cert_table.autofit = False
    
    for r in cert_table.rows:
        prevent_row_split(r)
        
    col_widths = [Cm(6.0), Cm(4.4), Cm(4.4), Cm(3.0)]
    headers = ["자격 / 시험명", "취득 점수 / 등급", "발급 및 주관 기관", "취득 일자"]
    
    for col_idx, text in enumerate(headers):
        c = cert_table.cell(0, col_idx)
        c.width = col_widths[col_idx]
        set_cell_margins(c, top=35, bottom=35, left=45, right=45)
        set_cell_shading(c, "F1F5F9")
        set_cell_borders(c, 
                         top={'val': 'single', 'sz': '4', 'color': 'CBD5E1'},
                         bottom={'val': 'single', 'sz': '8', 'color': '2563EB'})
        p = c.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER if col_idx > 0 else WD_ALIGN_PARAGRAPH.LEFT
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        r = p.add_run(text)
        set_run_fonts(r, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(30, 41, 59))
        
    for row_idx, data in enumerate(cert_data, start=1):
        shd = "F8FAFC" if row_idx % 2 == 1 else "FFFFFF"
        for col_idx, text in enumerate(data):
            c = cert_table.cell(row_idx, col_idx)
            c.width = col_widths[col_idx]
            set_cell_margins(c, top=28, bottom=28, left=45, right=45)
            set_cell_shading(c, shd)
            set_cell_borders(c, bottom={'val': 'single', 'sz': '4', 'color': 'E2E8F0'})
            p = c.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER if col_idx > 0 else WD_ALIGN_PARAGRAPH.LEFT
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            r = p.add_run(text)
            is_bold = (col_idx == 1)
            color = RGBColor(37, 99, 235) if col_idx == 1 else RGBColor(51, 65, 85)
            set_run_fonts(r, "맑은 고딕", is_bold=is_bold, size_pt=8.0, color_rgb=color)

    # 6. Military Service
    add_section_header(doc, "병역 사항", "Military Service", "06", space_before=10)
    
    mil_table = doc.add_table(rows=1, cols=2)
    mil_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    mil_table.autofit = False
    prevent_row_split(mil_table.rows[0])
    
    c_m0 = mil_table.cell(0, 0)
    c_m1 = mil_table.cell(0, 1)
    c_m0.width = Cm(14.0)
    c_m1.width = Cm(3.8)
    
    set_cell_margins(c_m0, top=35, bottom=35, left=45, right=45)
    set_cell_margins(c_m1, top=35, bottom=35, left=45, right=45)
    set_cell_borders(c_m0)
    set_cell_borders(c_m1)
    
    p_m = c_m0.paragraphs[0]
    p_m.paragraph_format.space_before = Pt(0)
    p_m.paragraph_format.space_after = Pt(1)
    r_m1 = p_m.add_run("대한민국 공군 만기전역 (공군 병 845기 병장)")
    set_run_fonts(r_m1, "맑은 고딕", is_bold=True, size_pt=9.0, color_rgb=RGBColor(15, 23, 42))
    r_m2 = p_m.add_run("  |  군필")
    set_run_fonts(r_m2, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(16, 185, 129))
    
    p_m_sub = c_m0.add_paragraph()
    p_m_sub.paragraph_format.space_before = Pt(0)
    p_m_sub.paragraph_format.space_after = Pt(0)
    r_m_desc = p_m_sub.add_run("• 군 복무 간 엄격한 규율 준수, 팀 단위 협업 능력, 위기 상황 대처 역량을 체득하고 성실히 복무 완료")
    set_run_fonts(r_m_desc, "맑은 고딕", is_bold=False, size_pt=8.0, color_rgb=RGBColor(71, 85, 105))
    
    p_md = c_m1.paragraphs[0]
    p_md.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_md.paragraph_format.space_before = Pt(0)
    p_md.paragraph_format.space_after = Pt(0)
    r_md = p_md.add_run("2023.02 ~ 2024.11")
    set_run_fonts(r_md, "맑은 고딕", is_bold=True, size_pt=8.0, color_rgb=RGBColor(71, 85, 105))

    # Verification / Sign-off Footer Box
    p_ft = doc.add_paragraph()
    p_ft.paragraph_format.space_before = Pt(32)
    p_ft.paragraph_format.space_after = Pt(0)
    p_ft.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_ft = p_ft.add_run("위 기재 사항은 사실과 틀림없음을 확인합니다.\n\n지원자 :  이  주  형   (인 / 서명)")
    set_run_fonts(r_ft, "맑은 고딕", is_bold=True, size_pt=9.0, color_rgb=RGBColor(51, 65, 85))

    output_filename = "이주형_CV_AI_Product_Planner.docx"
    doc.save(output_filename)
    print(f"Generated clean CV Word document: {output_filename}")

if __name__ == "__main__":
    build_cv()
