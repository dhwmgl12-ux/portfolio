import { problemSolvingCases } from "../../../data/problemSolving";
import * as S from "./ProblemSolving.styles";

export default function ProblemSolving() {
  return (
    <S.Section id="problem-solving" aria-labelledby="problem-solving-title">
      <S.Inner>
        <S.Eyebrow>07 / PROBLEM SOLVING</S.Eyebrow>

        <S.Title id="problem-solving-title">트러블슈팅 & 성능 개선</S.Title>

        <S.Introduction>
          ZooLeaf에서 예외 상황을 처리하고, 로딩 부담을 고려한 구현 사례입니다.
          카드를 펼치면 판단 과정과 코드 근거를 볼 수 있습니다.
        </S.Introduction>

        <S.CaseGrid>
          {problemSolvingCases.map((item) => (
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
                    <dt>판단</dt>
                    <dd>{item.decision}</dd>
                  </div>
                  <div>
                    <dt>구현</dt>
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

        <S.MeasurementNote>
          성능 항목은 현재 코드에서 확인한 적용 내용입니다. 측정하지 않은
          개선율이나 점수는 표시하지 않았습니다.
        </S.MeasurementNote>
      </S.Inner>
    </S.Section>
  );
}
