import { useRef, useState } from "react";
import { zooleafProject as project } from "../../../data/projects";
import * as S from "./FeaturedProject.styles";

// 먼저 화면 데이터를 준비합니다.
const myScreens = project.screens.filter((screen) => screen.isMine);
const teamScreens = project.screens.filter((screen) => !screen.isMine);

const featuredScreen =
  myScreens.find((screen) => screen.id === "cart") ?? project.screens[0];

export default function FeaturedProject() {
  const dialogRef = useRef(null);
  const [selectedScreen, setSelectedScreen] = useState(featuredScreen);

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
          onClick={() => openScreen(featuredScreen)}
          aria-label={`직접 담당한 ${featuredScreen.title} 화면 확대 보기`}
          aria-haspopup="dialog"
        >
          <S.PreviewImage
            src={featuredScreen.image}
            alt={`ZooLeaf ${featuredScreen.title} 화면`}
            loading="lazy"
            decoding="async"
          />

          <S.PreviewCaption>
            직접 담당 · {featuredScreen.title} · 클릭하여 확대
          </S.PreviewCaption>
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

          <S.TeamInfo>
            <span>PROJECT PERIOD</span>
            <span>{project.period}</span>
            <span>{project.team}</span>
          </S.TeamInfo>
        </S.ContributionPanel>
      </S.FeaturedLayout>

      <S.Overview aria-labelledby="overview-title">
        <S.OverviewInner>
          <S.Eyebrow>03 / MY CONTRIBUTION</S.Eyebrow>

          <S.SectionTitle id="overview-title">
            직접 구현한 핵심 화면
          </S.SectionTitle>

          <S.Description>
            5인 팀 프로젝트에서 장바구니, 마이페이지, 404 페이지를 담당했습니다.
            각 화면을 선택하면 실제 구현 화면을 확대해서 볼 수 있습니다.
          </S.Description>

          <S.ScreenList>
            {myScreens.map((screen) => (
              <li key={screen.id}>
                <S.ScreenButton
                  type="button"
                  onClick={() => openScreen(screen)}
                  aria-haspopup="dialog"
                  aria-label={`직접 담당한 ${screen.title} 확대 보기`}
                >
                  <S.Thumbnail
                    src={screen.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />

                  <S.ScreenTitle>{screen.title}</S.ScreenTitle>

                  <S.Ownership $isMine>직접 담당</S.Ownership>

                  <S.ScreenDescription>
                    {screen.description}
                  </S.ScreenDescription>
                </S.ScreenButton>
              </li>
            ))}
          </S.ScreenList>

          <S.TeamScreens>
            <S.TeamScreensSummary>
              팀에서 함께 완성한 서비스 화면 보기
            </S.TeamScreensSummary>

            <S.Description>
              아래는 서비스 전체 흐름을 소개하는 팀 구현 화면입니다. 제 직접
              담당 범위는 위의 세 화면입니다.
            </S.Description>

            <S.ScreenList>
              {teamScreens.map((screen) => (
                <li key={screen.id}>
                  <S.ScreenButton
                    type="button"
                    onClick={() => openScreen(screen)}
                    aria-haspopup="dialog"
                    aria-label={`팀 구현 ${screen.title} 확대 보기`}
                  >
                    <S.Thumbnail
                      src={screen.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />

                    <S.ScreenTitle>{screen.title}</S.ScreenTitle>

                    <S.Ownership $isMine={false}>팀 구현</S.Ownership>
                  </S.ScreenButton>
                </li>
              ))}
            </S.ScreenList>
          </S.TeamScreens>
        </S.OverviewInner>
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
