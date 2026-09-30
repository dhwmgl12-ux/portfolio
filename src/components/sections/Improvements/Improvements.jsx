import { improvements } from "../../../data/improvements";
import * as S from "./Improvements.styles";

export default function Improvements() {
  return (
    <S.Section id="improvements" aria-labelledby="improvements-title">
      <S.Inner>
        <S.Introduction>
          <S.Eyebrow>08 / IF I BUILD IT AGAIN</S.Eyebrow>

          <S.Title id="improvements-title">
            더 나은 구조를 위해,
            <br />
            이렇게 개선하고 싶습니다.
          </S.Title>

          <S.Description>
            ZooLeaf의 현재 구현을 돌아보며 정리한 다음 개선 방향입니다. 동작하는
            기능을 유지하면서, 변경과 검증이 쉬운 구조로 발전시키고 싶습니다.
          </S.Description>

          <S.PlanBadge>앞으로 적용하고 싶은 개선 계획</S.PlanBadge>
        </S.Introduction>

        <S.ImprovementList>
          {improvements.map((item) => (
            <S.ImprovementCard key={item.id}>
              <S.CardHeader>
                <S.Number aria-hidden="true">{item.number}</S.Number>
                <S.CardTitle>{item.title}</S.CardTitle>
              </S.CardHeader>

              <S.DetailList>
                <div>
                  <dt>현재 구조</dt>
                  <dd>{item.current}</dd>
                </div>

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
