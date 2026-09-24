import { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/layout/Header/Header";
import Hero from "./components/sections/Hero/Hero";

export default function App() {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  return (
    <>
      <SkipLink href="#main">본문 바로가기</SkipLink>

      <Header
        isSummaryOpen={isSummaryOpen}
        onToggleSummary={() => setIsSummaryOpen((previous) => !previous)}
      />

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

        <Hero />

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

const Eyebrow = styled.p`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 12px;
  font-weight: 700;
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
