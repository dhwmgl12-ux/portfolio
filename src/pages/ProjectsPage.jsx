import { Link } from "react-router-dom";
import ProjectPreview from "../components/sections/ProjectPreview/ProjectPreview";
import * as S from "./ProjectsPage.styles";

export default function ProjectsPage() {
  return (
    <>
      <S.SkipLink href="#projects-main">본문 바로가기</S.SkipLink>

      <S.Header>
        <S.HeaderInner>
          <S.Logo as={Link} to="/" aria-label="박형우 포트폴리오 홈">
            PHW
          </S.Logo>

          <S.Navigation aria-label="주요 메뉴">
            <S.NavigationLink as={Link} to="/">
              Home
            </S.NavigationLink>

            <S.NavigationLink as={Link} to="/projects" aria-current="page">
              Project
            </S.NavigationLink>
          </S.Navigation>
        </S.HeaderInner>
      </S.Header>

      <S.Main id="projects-main" tabIndex={-1}>
        <S.Introduction>
          <S.Eyebrow>PROJECTS</S.Eyebrow>
          <S.Title>프로젝트</S.Title>
          <S.Description>
            직접 구현한 기능과 문제 해결 과정을 소개합니다. 프로젝트를 선택하면
            담당 영역과 라이브 데모를 확인할 수 있습니다.
          </S.Description>
        </S.Introduction>

        <ProjectPreview />
      </S.Main>
    </>
  );
}
