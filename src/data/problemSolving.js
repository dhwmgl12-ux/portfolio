const repositoryUrl = "https://github.com/dhwmgl12-ux/zooleaf/blob/main";

export const problemSolvingCases = [
  {
    id: "order-cancel",
    icon: "🔄",
    title: "주문 취소와 재조회 실패 구분",
    category: "트러블슈팅",
    scope: "담당 영역 · 마이페이지",
    summary: "취소 성공을 조회 실패와 혼동하지 않도록 처리",
    problem:
      "주문 취소는 성공했지만, 이후 주문 목록을 가져오는 요청은 실패할 수 있습니다.",
    decision:
      "사용자가 이미 취소된 주문을 다시 취소하려 하지 않도록 두 요청의 결과를 구분했습니다.",
    implementation:
      "취소 성공 시 모달을 닫고 성공 메시지를 표시합니다. 이후 목록 재조회는 별도의 try/catch로 처리합니다.",
    result:
      "재조회에 실패하면 취소 완료 사실과 목록을 다시 불러와야 한다는 안내를 함께 표시합니다.",
    evidence: "OrderSection.jsx의 handleCancel",
    sourceUrl: `${repositoryUrl}/src/components/mypage/OrderSection.jsx`,
  },
  {
    id: "group-delete",
    icon: "🧩",
    title: "그룹 상품의 원본 항목 삭제",
    category: "데이터 정합성",
    scope: "담당 영역 · 장바구니",
    summary: "화면의 한 카드와 서버의 여러 항목을 연결",
    problem:
      "화면에서 하나로 묶인 상품이 서버에는 여러 장바구니 항목으로 존재할 수 있습니다.",
    decision:
      "대표 항목 하나만 삭제하면 나머지가 남기 때문에, 그룹에 속한 원본 항목을 모두 추적했습니다.",
    implementation:
      "그룹화할 때 sourceItems를 보관하고, 삭제 시 getSourceIds로 서버 항목 ID를 추출합니다.",
    result:
      "추출한 ID 수에 따라 개별 또는 선택 삭제 API를 호출하도록 구성했습니다.",
    evidence: "cartStore.js의 getSourceIds와 removeGroups",
    sourceUrl: `${repositoryUrl}/src/store/cartStore.js`,
  },
  {
    id: "route-splitting",
    icon: "⚡",
    title: "페이지 단위 코드 분리",
    category: "성능 설계",
    scope: "프로젝트 공통 적용",
    summary: "장바구니·마이페이지 등을 필요할 때 로드",
    problem:
      "사용자가 바로 방문하지 않는 페이지 코드까지 초기 로딩에 포함되면 초기 JavaScript 부담이 커질 수 있습니다.",
    decision:
      "페이지 단위로 코드를 분리해 해당 화면이 필요할 때 불러오도록 구성했습니다.",
    implementation:
      "CartPage, MyPage, NotFoundPage 등의 import에 React.lazy를 적용했습니다.",
    result:
      "해당 페이지들이 동적 import로 선언되어 있습니다. 실제 번들 크기와 로딩 시간의 전후 차이는 별도 측정이 필요합니다.",
    evidence: "AppRouter.jsx의 lazy import",
    sourceUrl: `${repositoryUrl}/src/routes/AppRouter.jsx`,
  },
  {
    id: "font-loading",
    icon: "🔤",
    title: "가변 폰트와 텍스트 표시",
    category: "성능 설계",
    scope: "프로젝트 공통 적용",
    summary: "Pretendard Variable과 font-display: swap 적용",
    problem:
      "웹폰트가 준비될 때까지 글자가 보이지 않으면 사용자가 내용을 확인하기 어렵습니다.",
    decision:
      "대체 글꼴로 먼저 내용을 보여주고 웹폰트를 사용할 수 있게 되면 교체하도록 설정했습니다.",
    implementation:
      "Pretendard 가변 폰트에 굵기 범위 400~900과 font-display: swap을 선언했습니다.",
    result:
      "가변 폰트 설정과 swap 적용을 확인했습니다. 폰트 교체 시 레이아웃 이동 여부와 실제 성능 변화는 별도 확인 대상입니다.",
    evidence: "GlobalStyle.jsx의 @font-face",
    sourceUrl: `${repositoryUrl}/src/styles/GlobalStyle.jsx`,
  },
];
