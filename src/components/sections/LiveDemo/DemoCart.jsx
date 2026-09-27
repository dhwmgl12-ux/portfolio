import { useDemoCartStore } from "../../../store/demoCartStore";
import { calculateDemoAmounts, formatWon } from "../../../utils/demoCart";
import * as S from "./LiveDemo.styles";

export default function DemoCart() {
  const items = useDemoCartStore((state) => state.items);
  const usePartnerDiscount = useDemoCartStore(
    (state) => state.usePartnerDiscount,
  );
  const changeQuantity = useDemoCartStore((state) => state.changeQuantity);
  const removeItem = useDemoCartStore((state) => state.removeItem);
  const clearCart = useDemoCartStore((state) => state.clearCart);
  const setPartnerDiscount = useDemoCartStore(
    (state) => state.setPartnerDiscount,
  );
  const announce = useDemoCartStore((state) => state.announce);

  const amounts = calculateDemoAmounts(items, usePartnerDiscount);

  const handleDemoOrder = () => {
    announce(
      `데모 주문 금액은 ${formatWon(amounts.total)}입니다. 실제 주문이나 결제는 발생하지 않습니다.`,
    );
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
                <strong>
                  <span aria-hidden="true">{item.emoji} </span>
                  {item.name}
                </strong>

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

      <S.DiscountLabel>
        <input
          type="checkbox"
          checked={usePartnerDiscount}
          onChange={(event) => setPartnerDiscount(event.target.checked)}
        />
        제휴 할인 체험
      </S.DiscountLabel>

      <S.Note>
        대인·소인 입장권 50%, 최대 2개. 대인부터 적용하며, 실제 카드 인증은
        진행하지 않습니다.
      </S.Note>

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
    </S.CartPanel>
  );
}
