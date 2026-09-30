import styled from "@emotion/styled";

export const Page = styled.main`
  display: grid;
  place-items: center;
  min-height: 100vh;
  min-height: 100dvh;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 560px;
  text-align: center;
`;

export const ErrorCode = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accent};
  font-size: clamp(96px, 20vw, 180px);
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  line-height: 1;
  letter-spacing: -0.06em;
`;

export const Title = styled.h1`
  margin: ${({ theme }) => theme.spacing.lg} 0
    ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.sectionTitle};
  line-height: 1.4;
  word-break: keep-all;
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.body};
  line-height: 1.8;
  word-break: keep-all;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 4px;
  }
`;
