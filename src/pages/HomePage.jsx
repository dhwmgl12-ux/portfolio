import Hero from "../components/sections/Hero/Hero";
import Snapshot from "../components/sections/Snapshot/Snapshot";
import Skills from "../components/sections/Skills/Skills";
import Contact from "../components/sections/Contact/Contact";
import * as S from "../App.styles";

export default function HomePage() {
  return (
    <>
      <S.SkipLink href="#home">본문 바로가기</S.SkipLink>

      <main>
        <S.IntroBackground>
          <S.IntroLayout>
            <S.IntroLeft>
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
