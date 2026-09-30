import { useState } from "react";

import Header from "../components/layout/Header/Header";
import Hero from "../components/sections/Hero/Hero";
import Snapshot from "../components/sections/Snapshot/Snapshot";
import Skills from "../components/sections/Skills/Skills";
import ProjectPreview from "../components/sections/ProjectPreview/ProjectPreview";
import Contact from "../components/sections/Contact/Contact";
import * as S from "../App.styles";

export default function HomePage() {
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

                <p>
                  <a href="#contact">이력서·GitHub·연락처 확인 →</a>
                </p>
              </S.Summary>

              <Hero />
            </S.IntroLeft>

            <Snapshot />
          </S.IntroLayout>
        </S.IntroBackground>

        <ProjectPreview />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
