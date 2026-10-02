import { improvements } from "../../../data/improvements";
import * as S from "./Improvements.styles";

const priorityImprovements = improvements.filter(
  (item) => item.id === "calculation" || item.id === "testing",
);

export default function Improvements() {
  return (
    <S.Section id="improvements" aria-labelledby="improvements-title">
      <S.Inner>
        <S.Introduction>
          <S.Eyebrow>08 / IF I BUILD IT AGAIN</S.Eyebrow>

          <S.Title id="improvements-title">다음으로 개선할 두 가지</S.Title>

          <S.Description>
            금액 계산을 분리하고, 장바구니의 경계 조건을 자동으로 검증하고
            싶습니다.
          </S.Description>

          <S.PlanBadge>앞으로 적용하고 싶은 개선 계획</S.PlanBadge>
        </S.Introduction>

        <S.ImprovementList>
          {priorityImprovements.map((item, index) => (
            <S.ImprovementCard key={item.id}>
              <S.CardHeader>
                <S.Number aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </S.Number>
                <S.CardTitle>{item.title}</S.CardTitle>
              </S.CardHeader>

              <S.DetailList>
                <div>
                  <dt>개선 방향</dt>
                  <dd>{item.plan}</dd>
                </div>

                <div>
                  <dt>기대 효과</dt>
                  <dd>{item.benefit}</dd>
                </div>
              </S.DetailList>
            </S.ImprovementCard>
          ))}
        </S.ImprovementList>
      </S.Inner>
    </S.Section>
  );
}
