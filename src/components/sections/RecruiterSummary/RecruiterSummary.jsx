import { Link } from "react-router-dom";
import { contact } from "../../../data/contact";
import { zooleafProject } from "../../../data/projects";
import * as S from "./RecruiterSummary.styles";

export default function RecruiterSummary({ isOpen }) {
  return (
    <S.Panel
      id="recruiter-summary"
      hidden={!isOpen}
      aria-labelledby="recruiter-summary-title"
    >
      <S.Eyebrow>30-SECOND SUMMARY</S.Eyebrow>

      <S.Title id="recruiter-summary-title">
        박형우 · Frontend Developer
      </S.Title>

      <S.Introduction>
        사용자의 흐름을 구현하고, 예외 상황까지 처리하는 프론트엔드 개발자를
        지향합니다.
      </S.Introduction>

      <S.FactList>
        <div>
          <dt>핵심 기술</dt>
          <dd>React · JavaScript · Zustand · Emotion · REST API</dd>
        </div>

        <div>
          <dt>대표 프로젝트</dt>
          <dd>
            {zooleafProject.name} — {zooleafProject.subtitle}
            <S.ProjectMeta>
              {zooleafProject.team} · {zooleafProject.period}
            </S.ProjectMeta>
          </dd>
        </div>

        <div>
          <dt>직접 담당</dt>
          <dd>
            {zooleafProject.contributions.map((item) => item.title).join(" · ")}
          </dd>
        </div>

        <div>
          <dt>문제 해결</dt>
          <dd>
            <S.EvidenceList>
              <li>
                상품 종류·옵션·방문일·시간을 비교해 같은 구매 조건의 장바구니
                항목만 그룹화했습니다.
              </li>
              <li>
                주문 취소 성공과 목록 재조회 실패를 구분해 사용자에게 정확한
                결과를 안내했습니다.
              </li>
            </S.EvidenceList>
          </dd>
        </div>
      </S.FactList>

      <S.Actions aria-label="프로젝트 및 지원 자료">
        <S.ActionLink as={Link} to="/projects/zooleaf" $primary>
          프로젝트 상세 보기 →
        </S.ActionLink>

        <S.ActionLink
          href={contact.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="박형우 GitHub 보기 (새 탭)"
        >
          GitHub ↗
        </S.ActionLink>

        {contact.resumeUrl ? (
          <S.ActionLink href={contact.resumeUrl} download="박형우_이력서.pdf">
            이력서 다운로드 ↓
          </S.ActionLink>
        ) : (
          <S.PendingText>이력서 · 준비 중</S.PendingText>
        )}

        {contact.email ? (
          <S.ActionLink href={`mailto:${contact.email}`}>
            이메일 보내기
          </S.ActionLink>
        ) : (
          <S.PendingText>이메일 · 준비 중</S.PendingText>
        )}
      </S.Actions>
    </S.Panel>
  );
}
