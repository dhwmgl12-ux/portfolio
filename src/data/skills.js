export const heroSkills = [
  "React",
  "JavaScript",
  "Zustand",
  "REST API",
  "Emotion",
  "Vite",
];

export const skillExperiences = [
  {
    id: "react",
    name: "React",
    category: "UI 구성",
    icon: "⚛️",
    description:
      "장바구니와 마이페이지를 역할별 컴포넌트로 나누고, 상태에 따라 화면을 표시했습니다.",
    examples: [
      "회원정보·배송지·주문 영역 분리",
      "로딩·오류·확인 모달 상태 처리",
    ],
    evidence: "MyPage.jsx · useCart.js",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "데이터 처리",
    icon: "🧩",
    description: "상품을 구분하는 조건과 할인 규칙을 함수로 구현했습니다.",
    examples: [
      "종류·옵션·방문일·시간 기준 상품 그룹화",
      "할인 대상과 적용 수량 계산",
    ],
    evidence: "groupCartItems.js · cartBenefits.js",
  },
  {
    id: "zustand",
    name: "Zustand",
    category: "상태 관리",
    icon: "🗂️",
    description:
      "장바구니·주문·배송지 데이터를 스토어에서 관리하고, 화면에서 필요한 상태와 액션을 사용했습니다.",
    examples: [
      "장바구니 변경 후 서버 목록 재조회",
      "조회·변경 중 상태와 오류 관리",
    ],
    evidence: "cartStore.js · orderStore.js · addressStore.js",
  },
  {
    id: "emotion",
    name: "Emotion",
    category: "스타일링",
    icon: "🎨",
    description:
      "컴포넌트별 스타일 파일과 테마를 활용해 담당 화면의 스타일을 구성했습니다.",
    examples: [
      "장바구니·마이페이지 반응형 레이아웃",
      "공통 모달의 화면별 스타일 구성",
    ],
    evidence: "CartPage.styles.js · Mypage.styles.js",
  },
  {
    id: "api",
    name: "REST API / Fetch",
    category: "서버 연동",
    icon: "🔄",
    description:
      "API 요청을 화면 코드와 분리하고, 요청 결과에 따라 상태와 안내를 갱신했습니다.",
    examples: [
      "장바구니 조회·수량 변경·삭제",
      "주문 취소와 목록 재조회 실패 구분",
    ],
    evidence: "cartApi.js · orderApi.js · OrderSection.jsx",
  },
];
