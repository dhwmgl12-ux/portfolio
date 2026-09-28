import { useId, useState } from "react";
import { useDemoCartStore } from "../../../store/demoCartStore";
import * as S from "./LiveDemo.styles";

export default function DiscountVerification() {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;

  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const isVerified = useDemoCartStore((state) => state.usePartnerDiscount);
  const verify = useDemoCartStore((state) => state.verifyPartnerDiscount);
  const clearDiscount = useDemoCartStore((state) => state.clearPartnerDiscount);

  const hasEligibleTicket = useDemoCartStore((state) =>
    state.items.some(
      (item) => item.type === "ticket" && [1, 3].includes(Number(item.id)),
    ),
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!hasEligibleTicket) {
      setError("할인 대상 입장권을 먼저 담아주세요.");
      return;
    }

    if (!verify(code)) {
      setError("테스트 코드 1234를 입력해주세요.");
      return;
    }

    setError("");
    setCode("");
  };

  const handleCancel = () => {
    clearDiscount();
    setCode("");
    setError("");
  };

  return (
    <S.VerificationPanel aria-labelledby={`${inputId}-title`}>
      <h4 id={`${inputId}-title`}>제휴 할인 체험</h4>

      <S.Note id={hintId}>
        대인·소인 입장권 50%, 최대 2개에 적용합니다. 테스트 코드는 1234이며,
        실제 카드번호는 입력하지 마세요.
      </S.Note>

      {isVerified ? (
        <>
          <S.VerifiedText>✓ 테스트 코드 확인 완료</S.VerifiedText>

          {!hasEligibleTicket && (
            <S.Note>현재 할인 대상 상품이 없어 할인 금액은 0원입니다.</S.Note>
          )}

          <S.TextButton type="button" onClick={handleCancel}>
            할인 해제
          </S.TextButton>
        </>
      ) : (
        <S.VerificationForm onSubmit={handleSubmit}>
          <S.Field>
            <span>테스트 코드</span>
            <input
              id={inputId}
              type="text"
              inputMode="numeric"
              maxLength={4}
              autoComplete="off"
              value={code}
              aria-invalid={Boolean(error)}
              aria-describedby={`${hintId}${error ? ` ${errorId}` : ""}`}
              onChange={(event) => {
                setCode(event.target.value.replace(/\D/g, ""));
                setError("");
              }}
            />
          </S.Field>

          {error && (
            <S.ValidationError id={errorId} role="alert">
              {error}
            </S.ValidationError>
          )}

          {!hasEligibleTicket && (
            <S.Note>대인 또는 소인 입장권을 먼저 담아주세요.</S.Note>
          )}

          <S.PrimaryButton type="submit" disabled={!hasEligibleTicket}>
            코드 확인 후 할인 적용
          </S.PrimaryButton>
        </S.VerificationForm>
      )}
    </S.VerificationPanel>
  );
}
