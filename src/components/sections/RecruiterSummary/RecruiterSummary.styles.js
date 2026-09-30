import styled from "@emotion/styled";

export const Panel = styled.section`
  margin: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};

  &[hidden] {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.caption};
  letter-spacing: 0.08em;
`;

export const Title = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sectionTitle};
  line-height: 1.4;
`;

export const Introduction = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.small};
  line-height: 1.7;
`;

export const FactList = styled.dl`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;

  > div {
    display: grid;
    grid-template-columns: 96px minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }

  dt {
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.typography.small};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  dd {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.small};
    line-height: 1.7;
    overflow-wrap: anywhere;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    > div {
      grid-template-columns: minmax(0, 1fr);
      gap: ${({ theme }) => theme.spacing.xs};
    }
  }
`;

export const ProjectMeta = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
`;

export const EvidenceList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 0;
  padding-left: ${({ theme }) => theme.spacing.md};

  li::marker {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid
    ${({ theme, $primary }) =>
      $primary ? theme.colors.accent : theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme, $primary }) =>
    $primary ? theme.colors.accent : theme.colors.background};
  color: ${({ theme, $primary }) =>
    $primary ? theme.colors.background : theme.colors.text};
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export const PendingText = styled.span`
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
`;
