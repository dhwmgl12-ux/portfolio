import { useState } from "react";

import Header from "./components/layout/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import Snapshot from "./components/sections/Snapshot/Snapshot";
import FeaturedProject from "./components/sections/FeaturedProject/FeaturedProject";
import DevelopmentTimeline from "./components/sections/DevelopmentTimeline/DevelopmentTimeline";
import LiveDemo from "./components/sections/LiveDemo/LiveDemo";
import HowIThink from "./components/sections/HowIThink/HowIThink";
import ProblemSolving from "./components/sections/ProblemSolving/ProblemSolving";
import Improvements from "./components/sections/Improvements/Improvements";
import * as S from "./App.styles";

export default function App() {
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  return (
    <>
      <S.SkipLink href="#home">본문 바로가기</S.SkipLink>

      <main>
        <S.IntroBackground>
          <S.IntroLayout>
            <S.IntroLeft>
              <Header
                isSummaryOpen={isSummaryOpen}
                onToggleSummary={() =>
                  setIsSummaryOpen((previous) => !previous)
                }
              />

              <S.Summary
                id="recruiter-summary"
                hidden={!isSummaryOpen}
                aria-labelledby="summary-title"
              >
                <S.Eyebrow>RECRUITER MODE</S.Eyebrow>

                <h2 id="summary-title">Frontend Developer 박형우</h2>

                <p>React · JavaScript · Zustand · Emotion</p>

                <p>
                  ZooLeaf에서 장바구니, 마이페이지, 404 페이지를 담당했습니다.
                  상품 구분과 수량 관리, 회원정보·배송지·주문 관리 기능을
                  구현했습니다.
                </p>

                <S.Muted>이력서 · GitHub · 연락처: TODO</S.Muted>
              </S.Summary>

              <Hero />
            </S.IntroLeft>

            <Snapshot />
          </S.IntroLayout>
        </S.IntroBackground>

        <FeaturedProject />
        <DevelopmentTimeline />
        <LiveDemo />
        <HowIThink />
        <ProblemSolving />
        <Improvements />
      </main>
    </>
  );
}
