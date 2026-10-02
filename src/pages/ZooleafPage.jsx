import { Link } from "react-router-dom";

import FeaturedProject from "../components/sections/FeaturedProject/FeaturedProject";
import DevelopmentTimeline from "../components/sections/DevelopmentTimeline/DevelopmentTimeline";
import LiveDemo from "../components/sections/LiveDemo/LiveDemo";
import HowIThink from "../components/sections/HowIThink/HowIThink";
import ProblemSolving from "../components/sections/ProblemSolving/ProblemSolving";
import Improvements from "../components/sections/Improvements/Improvements";
import * as S from "./ZooleafPage.styles";

export default function ZooleafPage() {
  return (
    <>
      <S.SkipLink href="#project-main">본문 바로가기</S.SkipLink>

      <main id="project-main" tabIndex={-1}>
        <S.PageIntroduction>
          <S.HomeLink as={Link} to="/projects">
            ← 프로젝트 목록
          </S.HomeLink>

          <h1>ZooLeaf 프로젝트 상세</h1>

          <p>
            장바구니·마이페이지·404 페이지의 구현 경험과 문제 해결 과정을
            소개합니다.
          </p>
        </S.PageIntroduction>
        <FeaturedProject />

        <S.ProcessDetails>
          <S.ProcessSummary>프로젝트 진행 과정 보기</S.ProcessSummary>
          <DevelopmentTimeline />
        </S.ProcessDetails>

        <LiveDemo />
        <HowIThink />
        <ProblemSolving />
        <Improvements />
      </main>
    </>
  );
}
