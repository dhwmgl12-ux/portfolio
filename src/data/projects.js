export const zooleafProject = {
  name: "ZooLeaf",
  subtitle: "동물원 예약 및 쇼핑 전문 e-Commerce",
  description:
    "입장권 예매, 체험 프로그램 예약, 굿즈 구매를 한곳에서 제공하는 팀 프로젝트입니다.",
  githubUrl: "https://github.com/dhwmgl12-ux/zooleaf",
  siteUrl: "",
  team: "5인 팀 프로젝트",
  skills: ["React", "JavaScript", "Zustand", "Emotion", "REST API", "Vite"],
  contributions: [
    {
      title: "장바구니",
      description: "상품 그룹화, 수량 변경, 선택 삭제와 서버 상태 연동",
    },
    {
      title: "마이페이지",
      description: "회원정보 수정, 배송지 관리, 주문 조회와 취소",
    },
    {
      title: "404 페이지",
      description: "잘못된 경로 안내와 메인 페이지로 복귀하는 동선",
    },
  ],
  screens: [
    {
      id: "main",
      title: "메인 페이지",
      image: "/projects/zooleaf/main.png",
      isMine: false,
      description: "서비스의 입장권, 체험, 굿즈를 소개하는 메인 화면입니다.",
    },
    {
      id: "product",
      title: "상품 목록",
      image: "/projects/zooleaf/product.png",
      isMine: false,
      description: "입장권과 패키지 상품을 탐색하는 화면입니다.",
    },
    {
      id: "detail",
      title: "상품 상세",
      image: "/projects/zooleaf/detail.png",
      isMine: false,
      description: "상품 정보와 구매 옵션을 확인하는 화면입니다.",
    },
    {
      id: "cart",
      title: "장바구니",
      image: "/projects/zooleaf/cart.png",
      isMine: true,
      description:
        "장바구니 상품의 선택, 수량 변경과 삭제를 처리하는 화면을 담당했습니다.",
    },
    {
      id: "mypage",
      title: "마이페이지",
      image: "/projects/zooleaf/mypage.png",
      isMine: true,
      description:
        "회원정보, 배송지, 주문 내역과 주문 취소 기능을 담당했습니다.",
    },
    {
      id: "404",
      title: "404 페이지",
      image: "/projects/zooleaf/404.png",
      isMine: true,
      description:
        "존재하지 않는 경로를 안내하고 메인으로 돌아갈 수 있는 화면을 담당했습니다.",
    },
  ],
};
