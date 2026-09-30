import { contact } from "../../../data/contact";
import * as S from "./Contact.styles";

export default function Contact() {
  return (
    <S.Section id="contact" aria-labelledby="contact-title">
      <S.Inner>
        <S.Content>
          <S.Eyebrow>CONTACT</S.Eyebrow>
          <S.Title id="contact-title">함께 일할 기회를 기다립니다.</S.Title>
          <S.Description>
            프로젝트와 구현 경험에 대해 더 이야기 나누고 싶습니다. 연락은
            이메일로 보내주세요.
          </S.Description>

          {contact.email ? (
            <S.EmailLink href={`mailto:${contact.email}`}>
              {contact.email}
            </S.EmailLink>
          ) : (
            <S.PendingText>이메일 · 준비 중</S.PendingText>
          )}
        </S.Content>

        <S.Actions aria-label="이력서와 개발 기록">
          {contact.resumeUrl ? (
            <S.ActionLink
              href={contact.resumeUrl}
              download="박형우_이력서.pdf"
              $primary
            >
              이력서 다운로드 ↓
            </S.ActionLink>
          ) : (
            <S.PendingText>이력서 · 준비 중</S.PendingText>
          )}

          <S.ActionLink
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="박형우 GitHub 보기 (새 탭)"
          >
            GitHub 보기 ↗
          </S.ActionLink>

          <S.ActionLink
            href={contact.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="포트폴리오 소스 코드 보기 (새 탭)"
          >
            포트폴리오 코드 보기 ↗
          </S.ActionLink>
        </S.Actions>
      </S.Inner>
    </S.Section>
  );
}
