import { formatWon } from "../../../utils/demoCart";
import * as S from "./LiveDemo.styles";

export default function DemoOrderDialog({ dialogRef, items, amounts }) {
  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <S.OrderDialog
      ref={dialogRef}
      aria-labelledby="demo-order-title"
      aria-describedby="demo-order-description"
    >
      <S.OrderDialogHeader>
        <h3 id="demo-order-title">데모 주문 요약</h3>

        <S.TextButton type="button" onClick={closeDialog}>
          닫기
        </S.TextButton>
      </S.OrderDialogHeader>

      <S.Note id="demo-order-description">
        주문 흐름을 체험하는 화면입니다. 실제 주문이나 결제는 발생하지 않습니다.
      </S.Note>

      <S.OrderItemList>
        {items.map((item) => (
          <S.OrderItem key={item.key}>
            <div>
              <strong>{item.name}</strong>
              <S.Note>
                {[item.option, item.visitDate, item.time]
                  .filter(Boolean)
                  .join(" · ")}
              </S.Note>
              <S.Note>
                {formatWon(item.price)} × {item.quantity}개
              </S.Note>
            </div>

            <strong>{formatWon(item.price * item.quantity)}</strong>
          </S.OrderItem>
        ))}
      </S.OrderItemList>

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

      <S.PrimaryButton type="button" onClick={closeDialog}>
        확인 · 체험 계속하기
      </S.PrimaryButton>
    </S.OrderDialog>
  );
}
