import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 20;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;
  min-height: 64px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: space-between;
    padding-inline: ${({ theme }) => theme.spacing.md};
  }
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.04em;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: ${({ theme }) => theme.spacing.lg};
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing.md};
    max-height: calc(100dvh - 64px);
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const NavigationLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding-inline: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  transition:
    color 160ms ease,
    background-color 160ms ease;

  &:hover,
  &:focus-visible,
  &[aria-current="location"] {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.surface};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: flex-start;
  }
`;

export const SummaryButton = styled.button`
  flex-shrink: 0;
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 999px;
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition:
    color 160ms ease,
    background-color 160ms ease;

  &:hover,
  &[aria-expanded="true"] {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    span {
      display: none;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: inline-flex;
  }
`;

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;
`;
