import { heroSkills } from "../../../data/skills";
import { contact } from "../../../data/contact";
import * as S from "./Hero.styles";

export default function Hero() {
  return (
    <S.HeroSection id="home" tabIndex={-1} aria-labelledby="hero-title">
      <S.HeroContent>
        <S.Eyebrow>FRONTEND DEVELOPER</S.Eyebrow>
        <S.Name>PARK HYEONGWOO</S.Name>
        <S.Title id="hero-title">
          사용자의 불편을
          <br />
          발견하고,
          <br />
          <span>동작하는 화면</span>으로
          <br />
          해결합니다.
        </S.Title>

        <S.Description>
          React와 JavaScript로 사용자 흐름을 구현하는 프론트엔드 개발자
          박형우입니다.
          <br />
          작은 불편을 살피고, 구현한 코드로 설명합니다.
        </S.Description>

        <S.Actions>
          <S.PrimaryLink href="#project">
            프로젝트 보기 <span aria-hidden="true">↗</span>
          </S.PrimaryLink>

          {contact.resumeUrl ? (
            <S.SecondaryLink
              href={contact.resumeUrl}
              download="박형우_이력서.pdf"
            >
              이력서 다운로드 ↓
            </S.SecondaryLink>
          ) : (
            <S.PendingButton type="button" disabled>
              이력서 · 준비 중
            </S.PendingButton>
          )}

          <S.SecondaryLink
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="박형우 GitHub 보기 (새 탭)"
          >
            GitHub ↗
          </S.SecondaryLink>
        </S.Actions>

        <S.SkillList aria-label="주요 기술">
          {heroSkills.map((skill) => (
            <S.SkillTag key={skill}>{skill}</S.SkillTag>
          ))}
        </S.SkillList>
      </S.HeroContent>

      <S.ScrollHint aria-hidden="true">SCROLL TO EXPLORE ↓</S.ScrollHint>
    </S.HeroSection>
  );
}
