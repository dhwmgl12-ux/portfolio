import { useRef, useState } from "react";
import { zooleafProject as project } from "../../../data/projects";
import * as S from "./FeaturedProject.styles";

export default function FeaturedProject() {
  const dialogRef = useRef(null);
  const [selectedScreen, setSelectedScreen] = useState(project.screens[0]);

  const openScreen = (screen) => {
    setSelectedScreen(screen);
    dialogRef.current?.showModal();
  };

  const closeScreen = () => {
    dialogRef.current?.close();
  };

  return (
    <S.ProjectSection id="project" aria-labelledby="project-title">
      <S.FeaturedLayout>
        <S.Introduction>
          <S.Eyebrow>02 / FEATURED PROJECT</S.Eyebrow>
          <S.ProjectTitle id="project-title">{project.name}</S.ProjectTitle>

          <S.Subtitle>{project.subtitle}</S.Subtitle>
          <S.Description>{project.description}</S.Description>

          <S.TagList aria-label="프로젝트 사용 기술">
            {project.skills.map((skill) => (
              <S.Tag key={skill}>{skill}</S.Tag>
            ))}
          </S.TagList>

          <S.LinkGroup>
            {project.siteUrl ? (
              <S.ProjectLink
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                $primary
              >
                사이트 바로가기 ↗
                <S.ScreenReaderText> (새 탭)</S.ScreenReaderText>
              </S.ProjectLink>
            ) : (
              <S.PendingLink>사이트 주소 · TODO</S.PendingLink>
            )}

            <S.ProjectLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub 보기 ↗<S.ScreenReaderText> (새 탭)</S.ScreenReaderText>
            </S.ProjectLink>
          </S.LinkGroup>
        </S.Introduction>

        <S.PreviewButton
          type="button"
          onClick={() => openScreen(project.screens[0])}
          aria-label="ZooLeaf 메인 화면 확대 보기"
          aria-haspopup="dialog"
        >
          <S.PreviewImage
            src={project.screens[0].image}
            alt="ZooLeaf 메인 페이지"
            loading="lazy"
            decoding="async"
          />
          <S.PreviewCaption>실제 서비스 화면 · 클릭하여 확대</S.PreviewCaption>
        </S.PreviewButton>

        <S.ContributionPanel aria-labelledby="contribution-title">
          <S.Eyebrow id="contribution-title">MY CONTRIBUTION</S.Eyebrow>

          <S.ContributionList>
            {project.contributions.map((item) => (
              <S.ContributionItem key={item.title}>
                <S.CheckMark aria-hidden="true">✓</S.CheckMark>
                <div>
                  <S.ContributionTitle>{item.title}</S.ContributionTitle>
                  <S.Description>{item.description}</S.Description>
                </div>
              </S.ContributionItem>
            ))}
          </S.ContributionList>

          <S.TeamInfo>{project.team}</S.TeamInfo>
        </S.ContributionPanel>
      </S.FeaturedLayout>

      <S.Overview aria-labelledby="overview-title">
        <S.Eyebrow>03 / PROJECT OVERVIEW</S.Eyebrow>
        <S.SectionTitle id="overview-title">
          주요 페이지 미리보기
        </S.SectionTitle>
        <S.Description>
          팀 전체 화면과 제가 직접 담당한 화면을 구분했습니다. 화면을 선택하면
          확대해서 볼 수 있습니다.
        </S.Description>

        <S.ScreenList>
          {project.screens.map((screen) => (
            <li key={screen.id}>
              <S.ScreenButton
                type="button"
                onClick={() => openScreen(screen)}
                aria-haspopup="dialog"
                aria-label={`${screen.title} 확대 보기`}
              >
                <S.Thumbnail
                  src={screen.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <S.ScreenTitle>{screen.title}</S.ScreenTitle>
                <S.Ownership $isMine={screen.isMine}>
                  {screen.isMine ? "직접 담당" : "팀 구현"}
                </S.Ownership>
              </S.ScreenButton>
            </li>
          ))}
        </S.ScreenList>
      </S.Overview>

      <S.ScreenDialog
        ref={dialogRef}
        aria-labelledby="screen-dialog-title"
        aria-describedby="screen-dialog-description"
      >
        <S.DialogHeader>
          <S.SectionTitle id="screen-dialog-title">
            {selectedScreen.title}
          </S.SectionTitle>
          <S.CloseButton type="button" onClick={closeScreen}>
            닫기
          </S.CloseButton>
        </S.DialogHeader>

        <S.Description id="screen-dialog-description">
          {selectedScreen.description}
        </S.Description>

        <S.FullImage
          src={selectedScreen.image}
          alt={`ZooLeaf ${selectedScreen.title} 전체 화면`}
        />
      </S.ScreenDialog>
    </S.ProjectSection>
  );
}
