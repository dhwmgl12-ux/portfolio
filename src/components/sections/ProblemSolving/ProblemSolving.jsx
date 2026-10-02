import { problemSolvingCases } from "../../../data/problemSolving";
import * as S from "./ProblemSolving.styles";

const featuredCases = problemSolvingCases.filter(
  (item) => item.id === "group-delete" || item.id === "order-cancel",
);

export default function ProblemSolving() {
  return (
    <S.Section id="problem-solving" aria-labelledby="problem-solving-title">
      <S.Inner>
        <S.Eyebrow>07 / PROBLEM SOLVING</S.Eyebrow>

        <S.Title id="problem-solving-title">
          구현 중 해결한 두 가지 문제
        </S.Title>

        <S.Introduction>
          장바구니 그룹 삭제와 주문 취소 과정에서 처리한 예외 상황입니다. 각
          사례를 펼치면 문제, 해결 과정과 원본 코드를 확인할 수 있습니다.
        </S.Introduction>

        <S.CaseGrid>
          {featuredCases.map((item) => (
            <S.CaseDetails key={item.id}>
              <S.CaseSummary>
                <S.CardHeading>
                  <S.Icon aria-hidden="true">{item.icon}</S.Icon>

                  <S.HeadingText>
                    <S.Category>{item.category}</S.Category>
                    <S.CaseTitle>{item.title}</S.CaseTitle>
                  </S.HeadingText>

                  <S.ToggleIcon aria-hidden="true" />
                </S.CardHeading>

                <S.CardDescription>{item.summary}</S.CardDescription>
                <S.Scope>{item.scope}</S.Scope>
              </S.CaseSummary>

              <S.CaseBody>
                <S.StepList>
                  <div>
                    <dt>문제</dt>
                    <dd>{item.problem}</dd>
                  </div>

                  <div>
                    <dt>해결 과정</dt>
                    <dd>{item.implementation}</dd>
                  </div>

                  <div>
                    <dt>결과</dt>
                    <dd>{item.result}</dd>
                  </div>
                </S.StepList>

                <S.Evidence>코드 근거: {item.evidence}</S.Evidence>

                <S.SourceLink
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} ZooLeaf 코드 보기 (새 탭)`}
                >
                  ZooLeaf 코드 보기 ↗
                </S.SourceLink>
              </S.CaseBody>
            </S.CaseDetails>
          ))}
        </S.CaseGrid>
      </S.Inner>
    </S.Section>
  );
}
