import styled from "@emotion/styled";
import heroImage from "../../../assets/note.webp";

export const HeroSection = styled.section`
  position: relative;
  isolation: isolate;
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  min-width: 0;
  min-height: 640px;
  padding: ${({ theme }) =>
    `${theme.spacing.xl} ${theme.spacing.md} ${theme.spacing.xxl}`};

  background-image:
    linear-gradient(
      90deg,
      rgba(11, 13, 12, 0.97) 0%,
      rgba(11, 13, 12, 0.8) 45%,
      rgba(11, 13, 12, 0.2) 100%
    ),
    url(${heroImage});
  background-size: cover;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    min-height: 580px;
    padding: ${({ theme }) => theme.spacing.xl}
      ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xxl};

    background-position: 65% center;
    background-image:
      linear-gradient(90deg, rgba(11, 13, 12, 0.94), rgba(11, 13, 12, 0.72)),
      url(${heroImage});
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  min-width: 0;
  max-width: 460px;
  text-align: left;
`;

export const Eyebrow = styled.p`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const Name = styled.p`
  margin: 0 0 28px;
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 700;
  letter-spacing: 1px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.heroTitle};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  line-height: 1.2;
  letter-spacing: -0.045em;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Description = styled.p`
  max-width: 460px;
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 1.8;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
`;

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 48px;
  padding: 12px ${({ theme }) => theme.spacing.lg};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  font-size: 14px;
  font-weight: 800;
  transition: transform 160ms ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PendingButton = styled.button`
  min-height: 48px;
  padding: 12px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  cursor: not-allowed;
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 32px 0 0;
  padding: 0;
  list-style: none;
`;

export const SkillTag = styled.li`
  padding: 6px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surface};
  font-size: 12px;
`;

export const ScrollHint = styled.span`
  position: absolute;
  right: ${({ theme }) => theme.spacing.lg};
  bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 10px;
  letter-spacing: 2px;
`;

export const SecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.small};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;
