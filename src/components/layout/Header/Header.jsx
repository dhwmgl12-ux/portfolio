import { useRef, useState } from "react";
import * as S from "./Header.styles";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#project" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ isSummaryOpen, onToggleSummary }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Escape" || !isMenuOpen) return;

    closeMenu();
    menuButtonRef.current?.focus();
  };

  const handleToggleSummary = () => {
    onToggleSummary();
    closeMenu();
  };

  return (
    <S.HeaderContainer onKeyDown={handleKeyDown}>
      <S.HeaderInner>
        <S.Logo
          href="#home"
          aria-label="박형우 포트폴리오 홈"
          onClick={closeMenu}
        >
          PHW
        </S.Logo>

        <S.MenuButton
          ref={menuButtonRef}
          type="button"
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isMenuOpen}
          aria-controls="header-navigation"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            focusable="false"
          >
            {isMenuOpen ? (
              <path d="M6 6 18 18M18 6 6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </S.MenuButton>

        <S.Navigation
          id="header-navigation"
          aria-label="주요 메뉴"
          $isOpen={isMenuOpen}
        >
          <S.NavigationList>
            {navigationItems.map(({ label, href }) => (
              <li key={href}>
                <S.NavigationLink href={href} onClick={closeMenu}>
                  {label}
                </S.NavigationLink>
              </li>
            ))}
          </S.NavigationList>

          <S.SummaryButton
            type="button"
            aria-expanded={isSummaryOpen}
            aria-controls="recruiter-summary"
            onClick={handleToggleSummary}
          >
            {isSummaryOpen ? "요약 닫기" : "30초 요약"}
            <span lang="en"> (Recruiter Mode)</span>
          </S.SummaryButton>
        </S.Navigation>
      </S.HeaderInner>
    </S.HeaderContainer>
  );
}
