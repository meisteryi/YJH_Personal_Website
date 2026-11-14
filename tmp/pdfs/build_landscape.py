import sys
sys.path.insert(0,'/private/tmp/portfolio-py')
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from PIL import Image
import fitz
ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'output/pdf/Joohyoung_Yi_Portfolio.pdf'
pdfmetrics.registerFont(TTFont('KR','/Library/Fonts/Arial Unicode.ttf'))
W,H=960,540
c=canvas.Canvas(str(OUT),pagesize=(W,H));c.setTitle('이주형 | AI Product Portfolio');c.setAuthor('Joohyoung Yi')
BG='#F6D6BD';INK='#0F2A3F';MUT='#4E495F';PLUM='#816271';ROSE='#997577';TAN='#C3A38A'
def rect(x,y,w,h,col,r=0):
 c.setFillColor(HexColor(col));c.roundRect(x,H-y-h,w,h,r,fill=1,stroke=0)
def text(x,y,s,size=11,col=INK,font='KR'):
 c.setFillColor(HexColor(col));c.setFont(font,size);c.drawString(x,H-y-size,s)
def lines(x,y,ss,size=11,gap=20,col=MUT):
 for i,s in enumerate(ss):text(x,y+i*gap,s,size,col)
def panel(x,y,w,h):
 c.saveState();c.setFillAlpha(.75);c.setFillColor(HexColor('#FFFFFF'));c.setStrokeColor(HexColor(TAN));c.setStrokeAlpha(.45);c.roundRect(x,H-y-h,w,h,18,fill=1,stroke=1);c.restoreState()
def image(name,x,y,w,h):
 im=Image.open(ROOT/'src/assets'/name);iw,ih=im.size;s=min(w/iw,h/ih);nw,nh=iw*s,ih*s
 c.drawImage(ImageReader(im),x+(w-nw)/2,H-y-(h+nh)/2,nw,nh,mask='auto')
def pill(x,y,label):
 w=pdfmetrics.stringWidth(label,'KR',10)+24;rect(x,y,w,24,'#EBD4C8',12);text(x+12,y+5,label,10,MUT);return w

def link(x,y,label,url):
 text(x,y,label,10,PLUM,'Helvetica-Bold');c.linkURL(url,(x,H-y-16,x+pdfmetrics.stringWidth(label,'Helvetica-Bold',10),H-y),relative=0)
def base(n,label):
 rect(0,0,W,H,BG);image('logo.png',34,13,40,40)
 text(82,27,'JOOHYOUNG YI',10,MUT,'Helvetica-Bold');text(709,27,'AI PRODUCT PLANNING / UX',9,PLUM,'Helvetica-Bold')
 text(36,513,label,8,PLUM,'Helvetica');text(875,513,f'{n:02d} / 04',8,PLUM,'Helvetica')
def heading(k,title,sub):
 pill(36,75,k);text(36,112,title,31);text(36,157,sub,12,MUT)
def label(x,y,s):text(x,y,s,9,PLUM,'Helvetica-Bold')

base(1,'ABOUT / CORE KEYWORDS')
pill(36,76,'Art & Technology × Artificial Intelligence')
text(36,122,'AI 기술의 가능성을',31)
text(36,166,'실용적인 사용자 경험과 프로덕트',31,PLUM)
text(36,210,'로 기획합니다.',31)
text(36,275,'이주형',21);text(111,283,'Joohyoung Yi',13,MUT,'Helvetica')
lines(36,314,['서강대학교 Art & Technology · 인공지능 복수전공','LLM·XAI·멀티모달의 원리와 한계를 이해하고,','사용자 문제를 해결하는 서비스를 기획하고 구현합니다.'],12,23)
link(36,414,'yjh020701@gmail.com','mailto:yjh020701@gmail.com');link(36,438,'github.com/meisteryi','https://github.com/meisteryi')
text(36,477,'조치대학교 교환학생 · 학과 학생회장 · OPIc IH · JLPT N1',10,MUT)
for y,tag,en,desc in [(83,'#도메인분석','DOMAIN ANALYSIS',['여행 · 모빌리티 · 언어 편향','분야의 맥락에서 문제를 정의']),(215,'#AI파이프라인','AI PIPELINE',['LLM · Vision · XAI','모델 선정부터 데이터 흐름 설계']),(347,'#AI-UX','INTERACTION DESIGN',['지연 · 오류 · 환각을 고려한 UX','프로토타입 구현과 인터랙션'])]:
 panel(650,y,274,115);text(670,y+15,tag,21,PLUM);text(670,y+46,en,8,ROSE,'Helvetica-Bold');lines(670,y+65,desc,11,18)
c.showPage()

base(2,'SELECTED WORK / WARMTH')
heading('01 / 감성 AI · 인터랙션','온기 Warmth','생성형 AI와 아날로그 감각을 결합한 1:1 교환일기')
text(36,185,'2026.09 - 현재  |  라이브 서비스',10,PLUM)
panel(36,220,355,252)
label(56,239,'PROBLEM');lines(56,258,['매일 마주하는 글감 부족,','가벼운 소통 속 사라진 정서적 깊이'],12,21)
label(56,317,'DESIGN & BUILD');lines(56,336,['Gemini 글감 생성 · 감정 분석','3초 실링 왁스 개봉 · 3D 추억 유리병','E2EE · iOS 햅틱 · 알림'],12,22)
text(56,420,'기획 → AI·UX 설계 → 구현·운영',12,PLUM)
text(56,446,'Next.js · Gemini · Three.js · Firebase',9,MUT,'Helvetica')
panel(411,220,513,252)
for name,x,w in [('warmth_letter.png',424,154),('warmth_score.png',586,154),('warmth_memory_jar.png',754,151)]:image(name,x,230,w,218)
text(469,451,'편지 열람',9,MUT);text(624,451,'AI 감정 온도',9,MUT);text(792,451,'추억 유리병',9,MUT)
link(417,486,'LIVE DEMO','https://meisteryi.github.io/Warmth/');link(508,486,'GITHUB','https://github.com/meisteryi/Warmth')
c.showPage()

base(3,'SELECTED WORK / RENDI')
heading('02 / 음성 AI · 모빌리티 UX','렌디 RENDI','낯선 렌터카의 조작 불안을 줄이는 차량용 AI 코칭 비서')
text(36,185,'2026.10 - 2026.11  |  AAOS 프로토타입 + 웹 쇼케이스',10,PLUM)
panel(36,220,370,264)
label(56,239,'PROBLEM');lines(56,258,['차량마다 다른 버튼과 차체 크기,','주행 중 매뉴얼 탐색 부담'],12,21)
label(56,314,'DESIGN & BUILD');lines(56,335,['Vosk → STT → 의도 분류 → 검증 DB → TTS','검증된 DB 기반 안내 · 오프라인 폴백','주행 중 1~2문장 음성 코칭'],11,23)
text(56,426,'2,358ms → 980ms',23,PLUM,'Helvetica-Bold')
text(56,461,'AAOS · Pleos Connect SDK · Vosk · Gemini',9,MUT,'Helvetica')
panel(426,220,498,126);image('rendi_logo.png',447,226,298,112);image('rendi_icon.png',786,239,86,86)
for x,num,desc in [(426,'58%','STT 캡처 지연 단축'),(597,'133','시나리오 QA 통과'),(768,'5종','차량 MVP 지원')]:
 panel(x,362,156,98);text(x+17,375,num,30,PLUM);text(x+17,421,desc,10,MUT)
lines(430,472,['AAOS 에뮬레이터 실측 · STT 요청부터 오디오 캡처 시작까지 중앙값'],8,16)
c.showPage()

base(4,'SELECTED WORK / MULTIMODAL & XAI')
text(36,78,'기술 이해를 사용자 가치로 연결합니다.',28)
text(36,123,'Vision 기반 여행 UX부터 모델의 판단 근거를 검토하는 XAI 리서치까지',12,MUT)
panel(36,168,434,322);panel(490,168,434,322)
pill(55,186,'03 / Vision-LLM App');text(55,223,'TabiLenS',27,INK,'Helvetica-Bold')
text(55,264,'메뉴판 번역에서 실제 주문까지',12)
text(55,290,'2026.06 - 2026.07',9,PLUM,'Helvetica')
lines(55,324,['문제  |  직역으로 부족한 식문화 맥락','설계  |  OCR → 해설 → 주문·TTS','구현  |  터치 매핑 · Flutter UI'],10,24)
text(55,416,'Vision OCR · Gemini · Flutter',9,PLUM,'Helvetica')
link(55,454,'LIVE DEMO','https://meisteryi.github.io/TabiLenS/');link(145,454,'GITHUB','https://github.com/meisteryi/TabiLenS')
image('tabilens_3.png',326,231,123,232)
pill(509,186,'04 / XAI Research');text(509,223,'SHEN',27,INK,'Helvetica-Bold')
text(509,264,'한국어 감성 모델의 젠더 편향 분석',12)
text(509,290,'2025.09 - 2025.12',9,PLUM,'Helvetica')
lines(509,324,['방법  |  KcELECTRA · 성별 단어 치환','분석  |  Attention · SHAP · LIME','관찰  |  젠더 접두사의 특성 오귀인'],10,24)
lines(509,416,['일관된 여성 부정 편향은 관찰되지 않음.','예측 결과와 내부 판단 근거를 함께 검토.'],10,20,col=PLUM)
image('SHEN_fig_6.png',786,322,119,113);text(802,447,'Attention Map',8,PLUM,'Helvetica')
c.save()
doc=fitz.open(OUT);sheet=Image.new('RGB',(1440,810),'white')
for i,p in enumerate(doc):
 assert p.rect.width>p.rect.height
 pix=p.get_pixmap(matrix=fitz.Matrix(1.5,1.5),alpha=False);pix.save(str(ROOT/f'tmp/pdfs/landscape-{i+1}.png'))
 im=Image.frombytes('RGB',(pix.width,pix.height),pix.samples);im.thumbnail((720,405));sheet.paste(im,((i%2)*720,(i//2)*405))
 for b in p.get_text('blocks'):
  assert b[0]>=0 and b[1]>=0 and b[2]<=W and b[3]<=H, b
sheet.save(ROOT/'tmp/pdfs/landscape-sheet.png');print(str(OUT));print(len(doc),'pages',OUT.stat().st_size,'bytes')
