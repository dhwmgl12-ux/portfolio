import styled from "@emotion/styled";

export const SkipLink = styled.a`
  position: fixed;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  transform: translateY(-200%);

  &:focus {
    transform: translateY(0);
  }
`;

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: ${({ theme }) => theme.layout.contentWidth};
  min-height: 64px;
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.spacing.lg};
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 4px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const NavigationLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding-inline: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;

  &:hover,
  &[aria-current="page"] {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 4px;
  }
`;

export const Main = styled.main`
  min-height: calc(100dvh - 64px);
  background: ${({ theme }) => theme.colors.background};
`;

export const Introduction = styled.div`
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.caption};
  letter-spacing: 0.12em;
`;

export const Title = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.heroTitle};
`;

export const Description = styled.p`
  max-width: 600px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  word-break: keep-all;
`;
