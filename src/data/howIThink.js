const repositoryUrl = "https://github.com/dhwmgl12-ux/zooleaf/blob/main";

export const thinkingItems = [
  {
    id: "identity",
    category: "상품 구분",
    question: "같은 상품인지 어떻게 판단했나요?",
    summary: "상품 종류, ID, 옵션, 방문일, 시간을 함께 비교했습니다.",
    decision:
      "같은 상품이라도 옵션이나 방문일, 체험 시간이 다르면 별도 구매 항목입니다. 이 조건들을 하나의 키로 만들어 동일한 조건의 상품만 묶었습니다.",
    tradeoff:
      "상품 구분에 필요한 조건이 추가되면 키 생성 기준도 함께 수정해야 합니다.",
    source: "ZooLeaf 원본",
    file: "src/utils/groupCartItems.js",
    sourceUrl: `${repositoryUrl}/src/utils/groupCartItems.js`,
    code: `export const getCartGroupKey = (item) =>
  JSON.stringify([
    item.itemType ?? item.type,
    String(item.productId ?? item.id),
    item.option ?? null,
    item.visitDate ?? null,
    item.time ?? null,
  ]);`,
  },
  {
    id: "sync",
    category: "서버 동기화",
    question: "수량을 변경한 뒤 왜 다시 조회하나요?",
    summary:
      "서버 요청이 끝난 후 최신 목록을 가져와 장바구니 상태를 갱신했습니다.",
    decision:
      "화면에서 수량만 먼저 바꾸는 대신 서버 변경이 끝난 후 목록을 다시 조회했습니다. 추가·수정·삭제에 같은 처리 함수를 사용하고, 요청 중에는 중복 변경을 막았습니다.",
    tradeoff:
      "변경 후 조회 요청이 추가됩니다. 현재 함수에서는 변경 성공 후 재조회가 실패한 경우도 실패로 반환하므로, 두 상황을 구분하는 개선 여지가 있습니다.",
    source: "ZooLeaf 원본",
    file: "src/store/cartStore.js",
    sourceUrl: `${repositoryUrl}/src/store/cartStore.js`,
    code: `const mutate = async (action) => {
  if (get().isUpdating || get().isLoading) return false;
  set({ isUpdating: true, error: "" });
  try {
    await action();
    set({ cartItems: await readItems() });
    return true;
  } catch (error) {
    set({ error: error.message });
    return false;
  } finally {
    set({ isUpdating: false });
  }
};`,
  },
  {
    id: "delete",
    category: "그룹 삭제",
    question: "묶어서 표시한 상품은 어떻게 삭제하나요?",
    summary: "화면의 그룹 ID를 서버 원본 항목 ID들로 변환해서 삭제합니다.",
    decision:
      "화면에서는 동일 상품이 한 카드로 보이지만, 서버에는 여러 항목으로 저장되어 있을 수 있습니다. 그룹에 원본 항목을 보관하고, 삭제할 때 원본 ID를 모두 추출하도록 구성했습니다.",
    tradeoff:
      "화면에서 사용하는 그룹과 서버 항목을 구분해야 합니다. 대표 ID 하나만 삭제하면 같은 카드에 묶인 다른 항목이 남을 수 있습니다.",
    source: "ZooLeaf 원본",
    file: "src/store/cartStore.js",
    sourceUrl: `${repositoryUrl}/src/store/cartStore.js`,
    code: `const getSourceIds = (groupIds) => {
  const selectedIds = new Set(groupIds);

  return get()
    .cartItems.filter((item) =>
      selectedIds.has(item.cartItemId)
    )
    .flatMap((item) =>
      item.sourceItems.map((source) => source.cartItemId)
    );
};`,
  },
  {
    id: "cancel",
    category: "주문 취소",
    question: "취소 성공과 목록 조회 실패를 왜 구분했나요?",
    summary:
      "주문은 취소됐는데 목록 조회만 실패한 상황을 정확히 안내하기 위해서입니다.",
    decision:
      "취소 요청이 성공하면 모달을 닫고 성공 메시지를 표시합니다. 이후 목록 재조회는 별도로 처리해서, 조회 실패를 주문 취소 실패처럼 안내하지 않도록 했습니다.",
    tradeoff:
      "사용자에게 재조회를 안내하고 목록 오류 상태도 관리해야 합니다. 아래 코드는 취소 처리 중 성공 이후 부분을 발췌한 것입니다.",
    source: "ZooLeaf 원본",
    file: "src/components/mypage/OrderSection.jsx",
    sourceUrl: `${repositoryUrl}/src/components/mypage/OrderSection.jsx`,
    code: `await cancelOrder(userId, selectedOrder.orderId);
setModal(null);
showToast("주문을 취소했습니다.");

setIsLoading(true);
setLoadError("");
try {
  await fetchOrders(userId);
} catch {
  setLoadError(
    "주문 취소는 완료됐지만 목록을 불러오지 못했습니다. 다시 불러오기를 눌러주세요.",
  );
} finally {
  setIsLoading(false);
}`,
  },
];
