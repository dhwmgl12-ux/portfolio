import { useDemoCartStore } from "../../../store/demoCartStore";
import { calculateDemoAmounts, formatWon } from "../../../utils/demoCart";
import DiscountVerification from "./DiscountVerification";
import { useRef } from "react";
import DemoOrderDialog from "./DemoOrderDialog";
import * as S from "./LiveDemo.styles";

export default function DemoCart() {
  const items = useDemoCartStore((state) => state.items);
  const usePartnerDiscount = useDemoCartStore(
    (state) => state.usePartnerDiscount,
  );
  const changeQuantity = useDemoCartStore((state) => state.changeQuantity);
  const removeItem = useDemoCartStore((state) => state.removeItem);
  const clearCart = useDemoCartStore((state) => state.clearCart);
  const orderDialogRef = useRef(null);

  const amounts = calculateDemoAmounts(items, usePartnerDiscount);

  const handleDemoOrder = () => {
    if (items.length === 0) return;

    orderDialogRef.current?.showModal();
  };

  return (
    <S.CartPanel aria-labelledby="demo-cart-title">
      <S.CartHeader>
        <h3 id="demo-cart-title">
          장바구니{" "}
          <span aria-label={`총 수량 ${amounts.count}개`}>
            ({amounts.count > 98 ? "99+" : amounts.count})
          </span>
        </h3>

        <S.TextButton
          type="button"
          disabled={items.length === 0}
          onClick={clearCart}
        >
          전체 삭제
        </S.TextButton>
      </S.CartHeader>

      {items.length === 0 ? (
        <S.EmptyMessage>
          장바구니가 비어 있습니다.
          <br />
          왼쪽에서 상품을 담아보세요.
        </S.EmptyMessage>
      ) : (
        <S.CartList>
          {items.map((item) => (
            <S.CartItem key={item.key}>
              <S.CartItemHeader>
                <S.CartProduct>
                  <S.CartThumbnail src={item.imageUrl} alt="" loading="lazy" />
                  <strong>{item.name}</strong>
                </S.CartProduct>

                <S.TextButton
                  type="button"
                  aria-label={`${item.name} ${item.option} ${item.visitDate ?? ""} ${item.time ?? ""} 삭제`}
                  onClick={() => removeItem(item.key)}
                >
                  삭제
                </S.TextButton>
              </S.CartItemHeader>

              <S.Note>
                {[item.option, item.visitDate, item.time]
                  .filter(Boolean)
                  .join(" · ")}
              </S.Note>

              <S.CartItemFooter>
                <span>{formatWon(item.price * item.quantity)}</span>

                <S.QuantityControl>
                  <S.SmallButton
                    type="button"
                    disabled={item.quantity === 1}
                    aria-label={`${item.name} 수량 감소`}
                    onClick={() => changeQuantity(item.key, -1)}
                  >
                    −
                  </S.SmallButton>
                  <span>{item.quantity}</span>
                  <S.SmallButton
                    type="button"
                    aria-label={`${item.name} 수량 증가`}
                    onClick={() => changeQuantity(item.key, 1)}
                  >
                    +
                  </S.SmallButton>
                </S.QuantityControl>
              </S.CartItemFooter>
            </S.CartItem>
          ))}
        </S.CartList>
      )}

      <DiscountVerification />

      <S.AmountList>
        <div>
          <dt>상품 금액</dt>
          <dd>{formatWon(amounts.subtotal)}</dd>
        </div>
        <div>
          <dt>할인</dt>
          <dd>−{formatWon(amounts.discount)}</dd>
        </div>
        <div>
          <dt>배송비</dt>
          <dd>{formatWon(amounts.shippingFee)}</dd>
        </div>
        <div>
          <dt>최종 금액</dt>
          <dd>
            <strong>{formatWon(amounts.total)}</strong>
          </dd>
        </div>
      </S.AmountList>

      <S.PrimaryButton
        type="button"
        disabled={items.length === 0}
        onClick={handleDemoOrder}
      >
        주문하기 (데모)
      </S.PrimaryButton>

      <S.TextButton
        type="button"
        disabled={items.length === 0}
        onClick={() => changeQuantity(items[0].key, 98)}
      >
        99+ 표시 체험: 첫 상품에 98개 추가
      </S.TextButton>
      <DemoOrderDialog
        dialogRef={orderDialogRef}
        items={items}
        amounts={amounts}
      />
    </S.CartPanel>
  );
}
