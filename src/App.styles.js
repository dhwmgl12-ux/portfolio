import styled from "@emotion/styled";

export const IntroLayout = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.layout.introColumns};
  align-items: stretch;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const IntroLeft = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const SkipLink = styled.a`
  position: fixed;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  transform: translateY(-200%);

  &:focus {
    transform: translateY(0);
  }
`;

export const Summary = styled.section`
  margin: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.08em;
`;

export const ProjectSection = styled.section`
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg}`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.typography.sectionTitle};
  }
`;

export const Muted = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const IntroBackground = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;
