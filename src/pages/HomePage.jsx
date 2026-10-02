import { useState } from "react";

import Header from "../components/layout/Header/Header";
import Hero from "../components/sections/Hero/Hero";
import Snapshot from "../components/sections/Snapshot/Snapshot";
import Skills from "../components/sections/Skills/Skills";
import Contact from "../components/sections/Contact/Contact";
import RecruiterSummary from "../components/sections/RecruiterSummary/RecruiterSummary";
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

              <RecruiterSummary isOpen={isSummaryOpen} />

              <Hero />
            </S.IntroLeft>

            <Snapshot />
          </S.IntroLayout>
        </S.IntroBackground>

        <Skills />
        <Contact />
      </main>
    </>
  );
}
