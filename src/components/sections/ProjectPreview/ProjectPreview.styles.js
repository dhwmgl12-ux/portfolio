import styled from "@emotion/styled";

export const Section = styled.section`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: minmax(0, 1fr);
    padding-inline: ${({ theme }) => theme.spacing.md};
  }
`;

export const Content = styled.div`
  min-width: 0;
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
  letter-spacing: 0.08em;
`;

export const Title = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.heroTitle};
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.small};
  line-height: 1.8;
`;

export const Contribution = styled.p`
  margin-block: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const DetailLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.small};
`;

export const PreviewImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`;
