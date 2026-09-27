import { developmentSteps } from "../../../data/developmentTimeline";
import * as S from "./DevelopmentTimeline.styles";

export default function DevelopmentTimeline() {
  return (
    <S.TimelineSection aria-labelledby="timeline-title">
      <S.TimelineInner>
        <S.ProcessContent>
          <S.Eyebrow>04 / DEVELOPMENT TIMELINE</S.Eyebrow>

          <S.Title id="timeline-title">프로젝트 진행 과정</S.Title>

          <S.Context>ZooLeaf 팀 프로젝트의 전체 진행 흐름</S.Context>

          <S.StepList>
            {developmentSteps.map((step) => (
              <S.StepCard key={step.id}>
                <S.StepNumber aria-hidden="true">{step.number}</S.StepNumber>

                <S.StepTitle>{step.title}</S.StepTitle>
                <S.StepDescription>{step.description}</S.StepDescription>
              </S.StepCard>
            ))}
          </S.StepList>
        </S.ProcessContent>

        <S.TeamCard aria-labelledby="timeline-team-title">
          <S.TeamContent>
            <S.TeamLabel>MY ROLE IN THE TEAM</S.TeamLabel>

            <S.TeamTitle id="timeline-team-title">
              팀과 함께 만든 서비스,
              <br />
              제가 책임진 세 가지 화면.
            </S.TeamTitle>

            <S.TeamDescription>
              5인 팀 프로젝트에서 장바구니, 마이페이지, 404 페이지를
              담당했습니다. 사용자가 상품을 담고 주문 내역을 관리하는 흐름을
              구현했습니다.
            </S.TeamDescription>
          </S.TeamContent>
        </S.TeamCard>
      </S.TimelineInner>
    </S.TimelineSection>
  );
}
