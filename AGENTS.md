# Portfolio Development Guidelines

## 프로젝트 목적

이 프로젝트는 박형우의 신입 프론트엔드 개발자 취업용 포트폴리오다.

화면 완성뿐만 아니라 면접관이 GitHub 코드를 확인했을 때
React의 컴포넌트 구조, 관심사 분리, 상태관리, 접근성,
유지보수성을 고려했다는 것이 드러나야 한다.

과도한 추상화보다 신입 개발자가 면접에서 직접 설명할 수 있는
단순하고 명확한 구조를 우선한다.

## 기술 스택

- React
- JavaScript
- Vite
- Emotion
- Zustand
- React Router (필요한 경우)

TypeScript와 Tailwind로 임의 변경하지 않는다.
불필요한 라이브러리를 추가하지 않는다.

## 기본 구조

src/
├── assets/
├── components/
│ ├── common/
│ └── layout/
├── sections/
├── data/
├── hooks/
├── store/
├── utils/
├── styles/
│ ├── theme.js
│ └── GlobalStyle.js
├── App.jsx
└── main.jsx

## 컴포넌트 원칙

독립적인 UI 역할, 재사용성, 자체 상태/이벤트 로직 중
명확한 이유가 있을 때 컴포넌트로 분리한다.

작은 텍스트나 wrapper까지 무조건 컴포넌트화하지 않는다.

App.jsx는 페이지를 조합하는 역할에 집중한다.

예:

<Header />

<main>
  <Hero />
  <Snapshot />
  <FeaturedProject />
  <LiveDemo />
  <HowIThink />
  <ProblemSolving />
  <Skills />
  <About />
  <Contact />
</main>

## 스타일

Emotion을 사용한다.

각 주요 컴포넌트는 기본적으로 다음 구조를 사용한다.

Header/
├── Header.jsx
└── Header.styles.js

Hero/
├── Hero.jsx
└── Hero.styles.js

공통 색상, spacing, typography, radius, breakpoint는
styles/theme.js에서 관리한다.

동일한 디자인 값을 여러 파일에서 반복해서 하드코딩하지 않는다.

## 관심사 분리

한 파일에 JSX, 대량의 스타일, 정적 데이터,
상태관리, 비즈니스 로직을 모두 몰아넣지 않는다.

반복되는 정적 데이터 → data/

공유 상태 → store/

재사용 가능한 순수 로직 → utils/

전역 스타일 → styles/

컴포넌트 스타일 → ComponentName.styles.js

## 상태관리

단순 UI 상태는 useState 등 local state를 사용한다.

여러 컴포넌트에서 공유해야 하는 상태나
Live Demo 장바구니처럼 명확한 이유가 있을 때 Zustand를 사용한다.

모든 상태를 Zustand에 넣지 않는다.

## 네이밍

역할이 드러나는 이름을 사용한다.

좋음:
ProjectCard
CartSummary
ContributionList
handleAddToCart
calculateDiscount

피함:
Box1
Wrapper2
Item1
Temp
handleClick2

## 접근성

가능한 경우 semantic HTML을 사용한다.

header
nav
main
section
article
button
ul
li
footer

클릭 가능한 div 대신 button 또는 a를 사용한다.

키보드 접근성과 visible focus를 고려한다.

## 주석

코드를 한국어로 그대로 번역한 주석은 작성하지 않는다.

"무엇을 하는 코드인지"보다
"왜 이렇게 구현했는지" 설명이 필요한 경우에만 주석을 작성한다.

## 가장 중요한 원칙

파일을 많이 나누는 것이 목표가 아니다.

각 파일이 왜 존재하는지 설명할 수 있는 구조가 목표다.

면접관이 GitHub를 처음 열었을 때

- 어디에 무엇이 있는지 예상할 수 있고
- App.jsx에서 전체 페이지 구조를 파악할 수 있고
- UI / Style / Data / State / Logic의 책임이 구분되고
- 과도한 추상화 없이 읽기 쉬워야 한다.

AI가 만든 것처럼 지나치게 복잡한 구조를 사용하지 않는다.
신입 개발자인 작성자가 면접에서 직접 설명할 수 있는 코드를 우선한다.
