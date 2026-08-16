# YUMEHWA Studio Website Rebuild Notes

작성일: 2026-08-15  
대상 사이트: `C:\ai_workspace\work\web\YUMEHWASTUDIO\yumehwa.github.io`

이 문서는 유메화 스튜디오 홈페이지 전체를 나중에 다시 만들거나, 현재 구조를 수정하거나, 작업물이 유실되었을 때 빠르게 복구하기 위한 기준 문서다.  
`works`만이 아니라 인덱스 페이지, 서비스 상세 페이지, 영어 페이지, 이미지 톤, 문구 방향까지 포함한다.

## 1. 사이트의 역할

유메화 스튜디오는 하루담 상품 브랜드가 아니라, 디자인 서비스를 받는 클라이언트에게 신뢰를 주는 스튜디오 브랜드다.

핵심 역할:

- 브랜딩, 웹디자인, 그래픽, 패키지, 인쇄물, 굿즈 디자인을 다루는 디자인 스튜디오
- 감성적인 브랜드와 패키지, 인쇄물, 굿즈에 강점이 있는 작은 스튜디오
- 대형 에이전시처럼 보이기보다, 섬세하고 실무적인 제작 이해도가 있는 곳으로 보여야 함
- 하루담은 유메화의 상품 브랜드이자 포트폴리오 사례로 활용 가능

사이트에서 보여야 하는 인상:

- 차분함
- 감각적이지만 과장되지 않음
- 넓은 작업 범위를 다루지만 정돈되어 있음
- 실제 문의로 이어질 만큼 서비스 범위가 명확함
- 브랜드, 웹, 패키지, 인쇄물, 굿즈를 따로따로가 아니라 하나의 흐름으로 설계하는 스튜디오

피해야 할 인상:

- 대형 에이전시처럼 과장된 표현
- 하루담 상품 판매 페이지처럼 보이는 구성
- 감성 이미지만 있고 서비스 범위가 흐릿한 포트폴리오
- 작업 분야가 많지만 정리되지 않은 잡다한 이미지 모음

## 2. 현재 주요 파일 역할

사이트 루트:

```text
C:\ai_workspace\work\web\YUMEHWASTUDIO\yumehwa.github.io
```

핵심 페이지:

```text
index-ko.html      한국어 메인 랜딩 페이지
index.html         영어 메인 랜딩 페이지
services.html      현재 새 한국어 서비스 상세 페이지
services-en.html   영어 서비스 상세 페이지
works.html         현재 새 한국어 works 아카이브 페이지
```

보조 또는 이전 성격의 페이지:

```text
services-ko.html   이전 한국어 서비스 페이지 성격. 현재 새 톤은 services.html 쪽이 더 강함
works-ko.html      이전 한국어 works 페이지 성격. 현재 카드형 works 구조는 works.html 쪽
```

핵심 스타일/스크립트:

```text
style.css          메인/공통 기반 스타일
style-ko.css       한국어 레이아웃과 메인 페이지 중심 스타일
responsive.css     반응형 보정
services.css       새 서비스 상세 페이지 스타일
services.js        새 서비스 상세 페이지 상호작용
works.css          새 works 아카이브 페이지 스타일
works.js           works 필터, 팝업, 스크롤 상태
script-ko.js       한국어 메인 페이지 상호작용
script.js          영어 메인 페이지 상호작용
```

## 3. 전체 언어 기준

한국어 버전에서도 메뉴는 영어로 통일한다.

유지할 메뉴:

```text
Home
About
Works
Services
Contact
```

한국어 페이지 문구 기준:

- 메뉴, 섹션 라벨, 카드 제목 일부는 영어 사용 가능
- 설명, 설득, 서비스 내용, 문의 안내는 한국어 중심
- 카테고리명은 영어를 라벨처럼 쓰고, 부제목은 한국어로 이해시킨다

예시:

```text
Branding
브랜드의 방향과 시각 언어를 정리합니다.

Web Design
홈페이지와 랜딩페이지를 목적에 맞게 설계합니다.

Package / Goods
패키지, 카드, 스티커, 굿즈까지 제작 흐름을 고려해 디자인합니다.
```

영어 페이지 문구 기준:

- 영어 페이지는 해외 고객용이라기보다, 스튜디오의 영문 포트폴리오/참조 페이지 성격
- 문장은 간결하고 전문적으로 쓴다
- 한국어 페이지보다 감성 표현을 줄이고, deliverables와 process가 보이게 한다
- `YUMEHWA Studio`는 차분하고 섬세한 boutique design studio로 보이게 한다

## 4. 메인 인덱스 페이지 기준

현재 메인 페이지:

```text
index-ko.html
index.html
```

메인 페이지의 역할:

- 첫 화면에서 유메화가 무엇을 하는 스튜디오인지 보여준다
- About, Services, Works, Contact로 빠르게 이동하게 한다
- 서비스 상세와 works 상세로 진입하는 허브 역할을 한다

현재 메인 구성 흐름:

```text
Hero
About
Services
Works showcase
Branding Full Package
Works archive preview
Contact
Footer
```

Hero 방향:

- 커다란 브랜드 문장과 3개의 세로 카드형 진입점 유지
- 진입점은 Works, Services, Contact
- 이미지는 `images/ko-services`의 깨끗한 목업 톤 사용
- 첫 화면은 랜딩페이지처럼 보이되, 과한 마케팅 페이지가 아니라 스튜디오의 분위기를 보여주는 방향

한국어 Hero 핵심 문장 방향:

```text
우리는 모든 사람과 브랜드가
자기만의 고유한 이야기를 가지고 있다고 믿습니다.
```

영어 Hero 핵심 문장 방향:

```text
We believe every person and every brand
has its own quiet story.
```

About 기준:

- 유메화가 “숨은 이야기를 발견하고 브랜딩과 디자인으로 무대에 올리는 스튜디오”라는 관점 유지
- 너무 철학적이지만 않게, 브랜드 운영에 필요한 실무 감각도 함께 보이게 한다
- About 이미지는 현재처럼 흰 배경 목업 계열 유지

Services preview 기준:

- 메인에서는 상세 설명보다 서비스 폭을 보여주는 정도로 유지
- 자세한 설명은 `services.html` 또는 `services-en.html`로 이동
- 서비스 카테고리는 다음을 유지

```text
Brand Identity
Web Design
Graphic Design
Package Design
Print Design
Goods Production
```

Works preview 기준:

- 메인 works는 대표 사례 미리보기만 한다
- 전체 목록과 카드형 아카이브는 `works.html`에 둔다
- 메인에서 너무 많은 작업물을 보여주지 않는다

Contact 기준:

- 문의 폼은 프로젝트 타입, 브랜드 상황, 필요한 제작물, 참고 분위기 중심
- “무제한 수정” 같은 뉘앙스 금지
- 작은 스튜디오가 현실적인 범위 안에서 정리해주는 톤

## 5. 서비스 상세 페이지 기준

현재 새 서비스 상세 페이지:

```text
services.html
services-en.html
```

서비스 상세 페이지의 역할:

- 유메화가 어떤 작업을 할 수 있는지 명확히 설명
- 단순 서비스 나열이 아니라, 브랜드가 고객과 만나는 접점을 설계한다는 흐름을 보여줌
- 문의 전 “내 프로젝트를 맡길 수 있겠다”는 신뢰를 만드는 페이지

현재 서비스 페이지 구성:

```text
Hero
Service index
Catalog intro
Service catalog
Premium / Branding Full Package
Process
CTA
Footer
```

서비스 상세 카테고리:

```text
01 Brand Identity
02 Web Design
03 Graphic Design
04 Package Design
05 Print Design
06 Goods Production
```

각 서비스는 다음 식으로 설명한다.

```text
무엇을 하는지
어떤 상황에 필요한지
어떤 산출물이 나오는지
브랜드 운영에서 어떤 역할을 하는지
```

한국어 서비스 페이지 문구 방향:

- 고객이 바로 이해할 수 있는 한국어 설명
- 단, 서비스명은 영어 유지 가능
- “감성”만 말하지 말고 산출물을 구체적으로 말한다

예시:

```text
Brand Identity
브랜드의 방향, 로고, 컬러, 폰트, 그래픽 톤을 정리해 첫인상을 만듭니다.
```

영어 서비스 페이지 문구 방향:

- 섬세하고 단정한 boutique studio 톤
- deliverables를 분명하게 말한다
- 너무 감성적인 문장보다 명확한 서비스 설명을 우선한다

예시:

```text
Brand Identity
We define the visual foundation of a brand, from core direction and logo system to color, typography, and application rules.
```

서비스 이미지 기준:

- 서비스 상세 페이지 이미지는 현재 그대로 유지
- `index-ko.html`과 톤앤매너가 맞음
- 흰 배경, 차콜, 딥블루, 뮤트 퍼플 계열의 깔끔한 목업 톤이 사이트 전체 분위기와 어울림

서비스 이미지 위치:

```text
images/ko-services/
```

대표 이미지:

```text
service-hero-gallery.png
service-brand-identity.png
service-package-print.png
service-goods.png
service-web-sns.png
service-card-identity.png
service-card-web.png
service-card-graphic.png
service-card-package.png
service-card-print.png
service-card-goods.png
```

## 6. 영어 페이지 기준

영어 페이지:

```text
index.html
services-en.html
```

영어 페이지의 역할:

- 유메화의 영문 포트폴리오/소개 페이지
- 한국어 페이지와 같은 시각 톤 유지
- 한국어 페이지와 구조를 크게 다르게 만들지 않는다

영어 페이지에서 유지할 것:

- 메뉴는 영어
- 섹션 순서는 한국어 페이지와 유사하게 유지
- 이미지 톤은 한국어 페이지와 동일하게 유지
- `services-en.html`은 `services.html`의 영어 대응 페이지로 생각한다

영어 페이지 문구 원칙:

- 지나치게 화려한 agency copy 금지
- `small studio`, `careful direction`, `visual consistency`, `production-aware design` 느낌
- “we can do everything”이 아니라, 브랜드 운영에 필요한 시각 접점을 정리한다는 메시지

권장 영어 키워드:

```text
brand identity
visual system
package design
printed matter
branded goods
web design
e-commerce detail page
visual consistency
production-aware design
```

피할 영어 표현:

```text
world-class agency
full-service global creative powerhouse
unlimited revision
guaranteed sales
```

## 7. Works 페이지 운영 기준

현재 새 works 페이지:

```text
works.html
```

현재 카드 구성은 유지한다.

사용자가 명확히 좋다고 한 방향:

- works 카드 구성은 현재처럼 유지
- 카드형 아카이브 구조 유지
- 다양한 작업 분야를 보여주되, 전체 톤은 깔끔한 목업 중심으로 통일
- 추후 실제 굿즈 사진을 받으면 같은 카드 구조 안에서 이미지와 문구만 교체

works 상단 분야 인덱스:

```text
Branding
브랜드의 방향과 시각 언어를 정리합니다.

Web Design
홈페이지와 랜딩페이지를 목적에 맞게 설계합니다.

Package / Goods
패키지, 카드, 스티커, 굿즈까지 제작 흐름을 고려합니다.

Print
브랜드가 손에 닿는 인쇄물을 구성합니다.

Content
SNS와 캠페인 이미지를 일관된 톤으로 만듭니다.

E-commerce
상품이 잘 이해되는 상세페이지를 설계합니다.
```

필터 버튼:

```text
All
Branding
Web Design
Package / Goods
Print
Graphic
Content
E-commerce
```

현재 works 카드 목록:

```text
01 Brand Identity
브랜드 방향 · 로고 · 시각 언어

02 Logo & Identity System
로고 · 컬러 · 응용 그래픽

03 Package / Goods System
패키지 · 카드 · 스티커 · 굿즈

04 Printed Brand System
리플렛 · 카드 · 브랜드 인쇄물

05 Product Package
제품 패키지 · 라벨 · 안내 카드

06 Gift Package Direction
선물 구성 · 태그 · 포장 인쇄물

07 HARUDAM Illustration Goods
펫 일러스트 · 티셔츠 그래픽 · 굿즈 확장

08 Web / Landing Page
홈페이지 · 랜딩페이지 · 반응형 화면

09 E-commerce Detail Page
스마트스토어 · 상세페이지 · 구매 흐름

10 Graphic Campaign
캠페인 그래픽 · 배너 · 프로모션

11 Social Content Design
SNS 피드 · 광고 이미지 · 템플릿

12 Editorial / Proposal Design
제안서 · 소개서 · 편집 레이아웃
```

카드 문법:

```text
영어 제목
한국어 부제목
카테고리 필터
대표 이미지
팝업용 동일 이미지
```

작품 설명을 길게 넣고 싶을 때는 상세 팝업 또는 별도 case study 페이지로 확장한다.  
카드 자체는 간결하게 유지한다.

## 8. 이미지 톤 기준

현재 주요 이미지 폴더:

```text
images/ko-services/   현재 사이트 톤과 가장 잘 맞는 깨끗한 목업 이미지
images/works/         works용 이미지. 일부 톤이 섞여 있어 선별 사용 필요
images/services/      이전 서비스용 이미지 성격
images/portfolio/     이전 포트폴리오용 이미지 성격
images/about/         About 이미지
```

현재 가장 우선해서 사용할 이미지 톤:

```text
images/ko-services/
```

유지할 이미지 톤:

- 흰 배경 중심
- 차콜, 딥블루, 뮤트 퍼플 포인트
- 패키지와 인쇄물이 깔끔하게 놓인 목업
- 투명 아크릴, 종이, 리본, 카드, 패키지, 키링 등 제작물 느낌
- 실제 작업 사진이 들어와도 전체적으로 차분하고 정리된 톤

교체하거나 신중히 사용할 이미지:

- 너무 컬러풀한 패키지 목업
- 출처가 달라 보이는 웹디자인 목업
- 상업 템플릿 느낌이 강한 웹 화면
- 포트폴리오 전체가 한 스튜디오 작업처럼 보이지 않는 이미지

실제 작업 사진을 받을 때 필요한 컷:

```text
1. 완성품 정면 사진
2. 패키지에 담긴 사진
3. 구성품 전체가 보이는 사진
4. 카드, 스티커, 키링 등 디테일 컷
5. 손에 들거나 책상 위에 놓인 사용 장면
```

사진을 받은 뒤 작업:

- 이미지 톤 보정
- works 카드 대표 이미지 교체
- 카드 제목과 부제목 작성
- 카테고리 필터 연결
- 팝업 이미지와 대체 텍스트 정리

## 9. 하루담 관련 방향

하루담은 유메화의 상품 브랜드이자, works에 넣기 좋은 실제 사례다.

works에 넣을 수 있는 하루담 카드 후보:

```text
HARUDAM Brand Renewal
브랜딩 · 패키지 · 굿즈

HARUDAM Goods Package
선물 패키지 · 카드 · 스티커

Smartstore Detail Page Design
상세페이지 · 상품 구성 · 구매 흐름

Illustration Goods Package
일러스트 굿즈 · 패키지 · 인쇄물
```

현재 반영된 하루담 works 사례:

```text
카드 번호: 07
카드 제목: HARUDAM Illustration Goods
카드 부제: 펫 일러스트 · 티셔츠 그래픽 · 굿즈 확장
대표 이미지: images/works/harudam/harudam-tshirt-back-layout.jpg
팝업 이미지: images/works/harudam/harudam-tshirt-back-layout.jpg, images/works/harudam/harudam-tshirt-cafe-mockup-02.jpg
```

보관된 티셔츠 목업 이미지:

```text
images/works/harudam/harudam-tshirt-back-layout.jpg
images/works/harudam/harudam-tshirt-cafe-mockup-01.jpg
images/works/harudam/harudam-tshirt-cafe-mockup-02.jpg
```

티셔츠 작업은 카드 제목에서 직접 앞세우기보다 `HARUDAM Illustration Goods` 안의 첫 실제 사례로 보여준다. 티셔츠만 강조하면 굿즈 확장성이 좁아 보일 수 있으므로, works에서는 "펫 일러스트가 실제 굿즈로 확장되는 사례"로 정리한다.

티셔츠 작업 설명 방향:

- 반려견 일러스트를 그래픽 티셔츠로 확장한 하루담 굿즈 사례
- 감성적인 펫 커스텀 아트워크를 실제 착용 가능한 상품으로 전환한 작업
- 굿즈 제작, 그래픽 배치, 티셔츠 목업, 브랜드 감성 확장 사례로 사용 가능
- 향후 상세 케이스를 만들 경우, 세 이미지를 순서대로 보여주면 좋음: 디자인 중심 목업, 착용 장면 1, 착용 장면 2

팝업 운영 기준:

- 카드 썸네일은 한 장만 사용한다.
- 같은 프로젝트의 여러 이미지는 팝업 오른쪽 상단의 작은 썸네일 그리드로 보여준다.
- 썸네일은 3열 기준으로 배치하고, 클릭하면 왼쪽 메인 이미지가 교체된다.
- 화살표는 보조 조작으로 유지하되, 여러 장이 있는 프로젝트에서는 같은 프로젝트 안의 이미지를 넘긴다.
- 세로로 긴 이미지가 들어와도 팝업 화살표가 화면 아래로 밀려나지 않도록 `works.css`에서 팝업 높이와 컨트롤 영역을 고정한다.
- 여러 굿즈가 더 생기면 카드 하나를 계속 늘리기보다, `HARUDAM Illustration Goods` 팝업 안에 시리즈처럼 넣거나 반응이 좋은 상품만 별도 카드로 분리한다.

하루담 로고 방향 요약:

- 빠르게 상품을 올리고 판매 반응을 보는 것이 우선
- 메인 로고는 한글 워드마크 중심이 실용적
- 일러스트 감성은 로고 전체보다 보조 심볼, 라벨, 패키지 그래픽에 넣는 것이 좋음
- 강아지/고양이 심볼을 로고 중심에 두면 펫 전용 브랜드처럼 보일 수 있으므로 주의
- 추천 구조는 `하루담` 워드마크 + 작은 `HARUDAM` + 손그림 라벨/봉투/작은 기념 요소

## 10. 복구 또는 재제작 시 순서

사이트가 날아가거나 다시 만들어야 할 때는 이 순서로 복구한다.

```text
1. index-ko.html / index.html 구조 복구
2. style.css / style-ko.css / responsive.css 연결
3. images/ko-services 이미지 폴더 복구
4. 메인 Hero, About, Services, Works preview, Contact 순서 복구
5. services.html / services-en.html 복구
6. services.css / services.js 연결
7. works.html 복구
8. works.css / works.js 연결
9. 언어 전환 링크 확인
10. Contact 링크와 이메일/인스타/스마트스토어 링크 확인
```

링크 기준:

```text
한국어 메인: index-ko.html
영어 메인: index.html
한국어 서비스 상세: services.html
영어 서비스 상세: services-en.html
한국어 works 상세: works.html
```

주의:

- `services-ko.html`과 `works-ko.html`은 이전 성격의 페이지일 수 있으므로, 새 구조를 복구할 때 우선 기준으로 삼지 않는다.
- 현재 새 톤은 `services.html`, `services-en.html`, `works.html` 중심이다.

## 11. 수정 시 우선순위

수정할 때 우선순위:

```text
1. 인덱스 첫 화면에서 스튜디오 정체성이 바로 보여야 함
2. 메뉴는 영어 유지
3. 한국어 페이지의 설명은 한국어 중심
4. 서비스 범위는 명확하게 유지
5. works 카드 구성은 유지
6. 서비스 이미지와 works 이미지는 같은 톤으로 맞춤
7. 실제 작업 사진이 들어와도 전체 비율과 카드 리듬은 유지
8. 유메화는 디자인 스튜디오로 보이게 하고, 하루담은 포트폴리오 사례로 활용
```

피해야 할 것:

- works만 화려하고 services가 비어 보이는 구성
- 영어 문구만 많아서 한국 고객이 이해하기 어려운 한국어 페이지
- 하루담 상품 판매 페이지처럼 보이는 유메화 홈페이지
- 대형 에이전시처럼 과장해서 표현하기
- 카드마다 이미지 출처와 색감이 달라 보이게 만들기
- 서비스 설명이 “예쁘게 해드립니다” 수준으로 흐릿해지는 것
