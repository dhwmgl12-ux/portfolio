import { create } from "zustand";
import { addDemoItem } from "../utils/demoCart";

export const useDemoCartStore = create((set) => ({
  items: [],
  usePartnerDiscount: false,
  message: "",

  addItem: (item) =>
    set((state) => ({
      items: addDemoItem(state.items, item),
      message: `${item.name} ${item.quantity}개를 담았습니다.`,
    })),

  changeQuantity: (key, delta) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.key === key
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
      message: "",
    })),

  removeItem: (key) =>
    set((state) => ({
      items: state.items.filter((item) => item.key !== key),
      message: "상품을 삭제했습니다.",
    })),

  clearCart: () =>
    set({
      items: [],
      usePartnerDiscount: false,
      message: "장바구니를 비웠습니다.",
    }),

  verifyPartnerDiscount: (code) => {
    const isValid = code.trim() === "1234";

    set({
      usePartnerDiscount: isValid,
      message: isValid
        ? "테스트 코드 확인이 완료되어 제휴 할인을 적용했습니다."
        : "테스트 코드가 일치하지 않습니다.",
    });

    return isValid;
  },

  clearPartnerDiscount: () =>
    set({
      usePartnerDiscount: false,
      message: "제휴 할인을 해제했습니다.",
    }),
}));
