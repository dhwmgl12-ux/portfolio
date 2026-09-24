import { useState } from "react";
import styled from "@emotion/styled";
import heroImage from "./assets/hero.png";

const skills = ["React", "JavaScript", "Zustand", "REST API"];

export default function App() {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  return (
    <>
      <SkipLink href="#main">본문 바로가기</SkipLink>

      <Header>
        <HeaderInner>
          <Logo href="#home" aria-label="박형우 포트폴리오 홈">
            PHW<span>.</span>
          </Logo>

          <Nav aria-label="주요 메뉴">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#project">Project</NavLink>
          </Nav>

          <SummaryButton
            type="button"
            aria-expanded={isSummaryOpen}
            aria-controls="recruiter-summary"
            onClick={() => setIsSummaryOpen((prev) => !prev)}
          >
            {isSummaryOpen ? "요약 닫기" : "30초 요약"}
          </SummaryButton>
        </HeaderInner>
      </Header>

      <main id="main">
        <Summary
          id="recruiter-summary"
          hidden={!isSummaryOpen}
          aria-labelledby="summary-title"
        >
          <Eyebrow>RECRUITER MODE</Eyebrow>
          <h2 id="summary-title">Frontend Developer 박형우</h2>
          <p>React · JavaScript · Zustand · Emotion</p>
          <p>
            ZooLeaf에서 장바구니, 마이페이지, 404 페이지를 담당했습니다. 상품
            구분과 수량 관리, 회원정보·배송지·주문 관리 기능을 구현했습니다.
          </p>
          <Muted>이력서 · GitHub · 연락처: TODO</Muted>
        </Summary>

        <Hero id="home" aria-labelledby="hero-title">
          <HeroContent>
            <Eyebrow>FRONTEND DEVELOPER</Eyebrow>
            <Name>PARK HYEONGWOO</Name>

            <Title id="hero-title">
              사용자의 불편을
              <br />
              발견하고,
              <br />
              <span>동작하는 화면</span>으로
              <br />
              해결합니다.
            </Title>

            <Description>
              React와 JavaScript로 사용자 흐름을 구현하는 프론트엔드 개발자
              박형우입니다.
              <br />
              작은 불편을 살피고, 구현한 코드로 설명합니다.
            </Description>

            <Actions>
              <PrimaryLink href="#project">
                프로젝트 보기 <span aria-hidden="true">↗</span>
              </PrimaryLink>

              <PendingButton type="button" disabled>
                이력서 · 준비 중
              </PendingButton>

              <PendingButton type="button" disabled>
                GitHub · 준비 중
              </PendingButton>
            </Actions>

            <SkillList aria-label="주요 기술">
              {skills.map((skill) => (
                <Skill key={skill}>{skill}</Skill>
              ))}
            </SkillList>
          </HeroContent>

          <ScrollHint aria-hidden="true">SCROLL TO EXPLORE ↓</ScrollHint>
        </Hero>

        {/* 다음 단계에서 FeaturedProject 컴포넌트로 확장 */}
        <ProjectSection id="project" aria-labelledby="project-title">
          <Eyebrow>01 / FEATURED PROJECT</Eyebrow>
          <h2 id="project-title">ZooLeaf</h2>
          <p>동물원 예약 및 쇼핑 전문 e-Commerce</p>
          <Muted>담당: 장바구니 · 마이페이지 · 404 페이지</Muted>
        </ProjectSection>
      </main>
    </>
  );
}

const SkipLink = styled.a`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 100;
  padding: 12px 20px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  transform: translateY(-160%);

  &:focus {
    transform: translateY(0);
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  min-height: 76px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-height: 68px;
    gap: 16px;
    padding-inline: 16px;
    flex-wrap: wrap;
  }
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -1px;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 12px;
  }
`;

const NavLink = styled.a`
  padding-block: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SummaryButton = styled.button`
  margin-left: auto;
  min-height: 44px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 999px;
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 13px;
  cursor: pointer;

  &[aria-expanded="true"] {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const Summary = styled.section`
  max-width: 1152px;
  margin: 24px auto;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-inline: 16px;
  }
`;

const Hero = styled.section`
  position: relative;
  isolation: isolate;
  max-width: 1440px;
  min-height: 700px;
  margin: 0 auto;
  padding: 88px max(24px, calc((100% - 1152px) / 2));
  display: flex;
  align-items: center;
  background-image:
    linear-gradient(
      90deg,
      rgba(11, 13, 12, 0.97) 0%,
      rgba(11, 13, 12, 0.8) 45%,
      rgba(11, 13, 12, 0.2) 100%
    ),
    url(${heroImage});
  background-size: cover;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-height: 640px;
    padding: 56px 20px 80px;
    background-position: 65% center;
    background-image:
      linear-gradient(90deg, rgba(11, 13, 12, 0.94), rgba(11, 13, 12, 0.72)),
      url(${heroImage});
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 640px;
`;

const Eyebrow = styled.p`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Name = styled.p`
  margin: 0 0 28px;
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 700;
  letter-spacing: 1px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(32px, 4.8vw, 60px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.045em;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Description = styled.p`
  max-width: 460px;
  margin: 24px 0 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 1.8;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`;

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 48px;
  padding: 12px 24px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  font-size: 14px;
  font-weight: 800;
  transition: transform 160ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const PendingButton = styled.button`
  min-height: 48px;
  padding: 12px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  cursor: not-allowed;
`;

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 32px 0 0;
  padding: 0;
  list-style: none;
`;

const Skill = styled.li`
  padding: 6px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surface};
  font-size: 12px;
`;

const ScrollHint = styled.span`
  position: absolute;
  right: 24px;
  bottom: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 10px;
  letter-spacing: 2px;
`;

const ProjectSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  h2 {
    margin: 0;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Muted = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;
