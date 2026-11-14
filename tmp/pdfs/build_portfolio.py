import sys
sys.path.insert(0, '/private/tmp/portfolio-py')
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from PIL import Image, ImageOps, ImageDraw
import fitz
from pathlib import Path

ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'output/pdf/Joohyoung_Yi_Portfolio.pdf'
pdfmetrics.registerFont(TTFont('KR','/Library/Fonts/Arial Unicode.ttf'))
W,H=595.28,841.89
c=canvas.Canvas(str(OUT),pagesize=(W,H))
c.setTitle('이주형 | AI Product Portfolio')
c.setAuthor('Joohyoung Yi')
INK='#172137'; GRAY='#617087'; ACC='#5956DD'; BG='#F6F7FB'
def rect(x,y,w,h,col,r=0):
 c.setFillColor(HexColor(col)); c.roundRect(x,H-y-h,w,h,r,fill=1,stroke=0)
def text(x,y,s,size=11,col=INK,font='KR'):
 c.setFillColor(HexColor(col));c.setFont(font,size);c.drawString(x,H-y-size,s)
def line(y):
 c.setStrokeColor(HexColor('#DFE3ED'));c.line(40,H-y,W-40,H-y)
def para(x,y,lines,size=11,col=INK,gap=19):
 for i,s in enumerate(lines):text(x,y+i*gap,s,size,col)
def image(name,x,y,w,h):
 im=Image.open(ROOT/'src/assets'/name);iw,ih=im.size
 scale=min(w/iw,h/ih); nw,nh=iw*scale,ih*scale
 c.drawImage(ImageReader(im),x+(w-nw)/2,H-y-nh,nw,nh,mask='auto')
def link(x,y,label,url):
 text(x,y,label,9,ACC,'Helvetica');c.linkURL(url,(x,H-y-14,x+pdfmetrics.stringWidth(label,'Helvetica',9),H-y),relative=0)
def base(n,label):
 rect(0,0,W,H,'#FFFFFF');rect(40,36,23,4,ACC)
 text(40,52,'JOOHYOUNG YI / PORTFOLIO',9,GRAY,'Helvetica-Bold')
 text(40,786,label,8,GRAY,'Helvetica');text(522,786,f'{n:02d} / 04',8,GRAY,'Helvetica')
def title(k,t,sub):
 text(40,94,k,10,ACC,'Helvetica-Bold');text(40,117,t,28);text(40,164,sub,11,GRAY)
def block(y,label,lines):
 text(40,y,label,10,ACC);para(40,y+24,lines,12,gap=21)

base(1,'PROFILE / CAPABILITIES')
text(40,100,'AI PRODUCT PLANNING & UX',11,ACC,'Helvetica-Bold')
text(40,135,'이주형',43)
text(193,159,'Joohyoung Yi',18,GRAY,'Helvetica')
para(40,218,['AI의 가능성을', '사용자의 일상에 닿는 경험으로.'],27,gap=41)
text(40,323,'문제 정의  /  AI 플로우 설계  /  인터랙션  /  프로토타이핑',12,ACC)
line(366)
for y,num,head,desc in [(392,'01','AI 이해','LLM · 멀티모달 · XAI · 데이터 분석'),(458,'02','제품과 UX 설계','사용자 여정 · 프롬프트 · 게이미피케이션'),(524,'03','직접 구현','React / Next.js · Flutter · Firebase · Python')]:
 text(40,y,num,12,ACC,'Helvetica-Bold');text(80,y-3,head,16);text(80,y+24,desc,11,GRAY)
line(590)
para(40,613,['서강대학교  Art & Technology + 인공지능 복수전공','조치대학교 교환학생  |  2026.04 - 2026.07','학과 학생회장  |  영어 OPIc IH · 일본어 JLPT N1'],10,gap=24)
link(40,713,'yjh020701@gmail.com','mailto:yjh020701@gmail.com')
link(40,735,'github.com/meisteryi','https://github.com/meisteryi')
c.showPage()

base(2,'SELECTED WORK / EMOTIONAL AI')
title('01 / WARMTH','온기 Warmth','생성형 AI와 아날로그 인터랙션을 결합한 1:1 교환일기')
text(40,191,'2026.09 - 현재  |  라이브 서비스',10,GRAY)
rect(40,230,515,306,BG,12)
image('warmth_letter.png',51,243,165,271)
image('warmth_score.png',221,243,165,271)
image('warmth_memory_jar.png',396,243,146,271)
text(70,515,'편지 열람',8,GRAY);text(249,515,'AI 감정 온도',8,GRAY);text(429,515,'3D 추억 유리병',8,GRAY)
block(555,'PROBLEM',['매일 마주하는 글감 부족, 가벼운 대화 속 사라진 정서적 깊이'])
block(615,'DESIGN & BUILD',['Gemini 글감 생성 · 감정 분석 / 실링 왁스 롱프레스','Three.js 추억 유리병 / E2EE / iOS 햅틱·알림'])
text(40,704,'기획 → AI·인터랙션 설계 → 풀스택 구현·운영',12,ACC)
text(40,735,'Next.js · TypeScript · Gemini · Three.js · Firebase',9,GRAY,'Helvetica')
link(40,756,'LIVE DEMO','https://meisteryi.github.io/Warmth/')
link(125,756,'GITHUB','https://github.com/meisteryi/Warmth')
c.showPage()

base(3,'SELECTED WORK / VOICE AI')
title('02 / RENDI','렌디 RENDI','낯선 렌터카의 조작 불안을 줄이는 차량용 AI 코칭 비서')
text(40,191,'2026.10 - 2026.11  |  AAOS 프로토타입 + 웹 쇼케이스',10,GRAY)
rect(40,230,515,173,'#F2F5FA',12)
image('rendi_logo.png',62,240,305,151);image('rendi_icon.png',398,262,102,102)
for x,big,small in [(40,'58%','STT 캡처 지연 단축'),(218,'133','시나리오 QA 통과'),(396,'5종','차량 MVP 지원')]:
 text(x,428,big,32,ACC,'KR');text(x,475,small,10,GRAY)
line(514)
block(534,'PROBLEM',['차량마다 다른 버튼과 차체 크기, 주행 중 매뉴얼 탐색 부담'])
block(596,'DESIGN & BUILD',['Vosk 호출어 → STT → LLM 의도 분류 → 검증 DB → TTS','주행 중 1~2문장 음성 안내 / 오프라인 키워드 폴백'])
text(40,690,'2,358ms → 980ms',21,ACC,'Helvetica-Bold')
text(40,725,'AAOS 에뮬레이터 실측 · STT 요청부터 오디오 캡처 시작까지 중앙값',9,GRAY)
text(40,753,'AAOS · Pleos Connect SDK · Vosk · Gemini · CarUxRestrictions',9,GRAY,'Helvetica')
c.showPage()

base(4,'SELECTED WORK / MULTIMODAL & XAI')
text(40,99,'03 / TABILENS',10,ACC,'Helvetica-Bold')
text(40,123,'TabiLenS',26,INK,'Helvetica-Bold')
text(40,163,'메뉴판 번역에서 실제 주문까지',14)
text(40,193,'2026.06 - 2026.07',9,GRAY,'Helvetica')
para(40,227,['문제  |  직역만으로 알기 어려운 음식·문화','설계  |  OCR → 식문화 해설 → 주문 문장·TTS','구현  |  터치 영역 매핑 · Flutter 모바일 UI'],10,gap=25)
text(40,326,'Vision OCR · Gemini · Flutter · TTS',9,ACC,'Helvetica')
link(40,353,'LIVE DEMO','https://meisteryi.github.io/TabiLenS/')
link(125,353,'GITHUB','https://github.com/meisteryi/TabiLenS')
rect(402,111,153,267,BG,10);image('tabilens_3.png',416,122,125,244)
line(408)
text(40,435,'04 / SHEN',10,ACC,'Helvetica-Bold')
text(40,459,'SHEN',26,INK,'Helvetica-Bold')
text(40,499,'한국어 감성 모델의 젠더 편향 분석',14)
text(40,529,'2025.09 - 2025.12',9,GRAY,'Helvetica')
para(40,562,['질문  |  비슷한 예측 점수, 같은 판단 근거일까?','방법  |  KcELECTRA · 성별 단어 치환 · XAI','관찰  |  젠더 접두사에 주의를 두는 특성 오귀인'],10,gap=25)
text(40,657,'일관된 여성 부정 편향은 관찰되지 않음.',10,GRAY)
text(40,680,'예측 결과와 내부 판단 근거를 함께 검토.',10,ACC)
rect(402,458,153,203,BG,10);image('SHEN_fig_6.png',409,477,139,164)
text(411,646,'원문 Attention Map',8,GRAY)
text(40,731,'RESEARCH TO PRODUCT',9,ACC,'Helvetica-Bold')
text(40,750,'기술의 작동 원리를 이해하고, 사용자가 쓸 수 있는 경험으로 연결합니다.',11)
c.save()
doc=fitz.open(OUT)
thumbs=[]
for i,p in enumerate(doc):
 pix=p.get_pixmap(matrix=fitz.Matrix(1.3,1.3),alpha=False)
 pix.save(str(ROOT/f'tmp/pdfs/page-{i+1}.png'))
 assert len(p.get_text())>250
 im=Image.open(ROOT/f'tmp/pdfs/page-{i+1}.png');im.thumbnail((420,595));thumbs.append(im)
sheet=Image.new('RGB',(840,1190),'#dce0e8')
for i,im in enumerate(thumbs):sheet.paste(im,((i%2)*420,(i//2)*595))
sheet.save(ROOT/'tmp/pdfs/contact-sheet.png')
print(OUT)
print('Pages:',len(doc),'Bytes:',OUT.stat().st_size)
