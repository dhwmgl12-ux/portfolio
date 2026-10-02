import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RecruiterSummary from "../../sections/RecruiterSummary/RecruiterSummary";
import * as S from "./Header.styles";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Project", to: "/projects" },
  { label: "Skills", to: "/#skills" },
  { label: "Contact", to: "/#contact" },
];

export default function Header() {
  const { pathname, hash } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = () => {
    closeMenu();
    setIsSummaryOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Escape" || !isMenuOpen) return;

    closeMenu();
    menuButtonRef.current?.focus();
  };

  const isActive = (to) => {
    if (to === "/projects") {
      return pathname === "/projects" || pathname.startsWith("/projects/");
    }

    if (to === "/") {
      return pathname === "/" && !hash;
    }

    return `${pathname}${hash}` === to;
  };

  return (
    <>
      <S.HeaderContainer onKeyDown={handleKeyDown}>
        <S.HeaderInner>
          <S.Logo
            as={Link}
            to="/"
            aria-label="박형우 포트폴리오 홈"
            onClick={handleNavigation}
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
              {navigationItems.map(({ label, to }) => (
                <li key={to}>
                  <S.NavigationLink
                    as={Link}
                    to={to}
                    aria-current={isActive(to) ? "location" : undefined}
                    onClick={handleNavigation}
                  >
                    {label}
                  </S.NavigationLink>
                </li>
              ))}
            </S.NavigationList>

            <S.SummaryButton
              type="button"
              aria-expanded={isSummaryOpen}
              aria-controls="recruiter-summary"
              onClick={() => {
                setIsSummaryOpen((previous) => !previous);
                closeMenu();
              }}
            >
              {isSummaryOpen ? "요약 닫기" : "30초 요약"}
              <span lang="en"> (Recruiter Mode)</span>
            </S.SummaryButton>
          </S.Navigation>
        </S.HeaderInner>
      </S.HeaderContainer>

      <S.SummaryContainer>
        <RecruiterSummary isOpen={isSummaryOpen} />
      </S.SummaryContainer>
    </>
  );
}
