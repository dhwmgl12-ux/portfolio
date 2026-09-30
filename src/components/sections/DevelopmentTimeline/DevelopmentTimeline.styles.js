import styled from "@emotion/styled";
import teamStoryImage from "../../../assets/pets2.webp";

export const TimelineSection = styled.section`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
`;

export const TimelineInner = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing.lg};

  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: minmax(0, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-inline: ${({ theme }) => theme.spacing.md};
  }
`;

export const ProcessContent = styled.div`
  min-width: 0;
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
  letter-spacing: 0.08em;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sectionTitle};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  line-height: 1.4;
`;

export const Context = styled.p`
  margin: ${({ theme }) => theme.spacing.sm} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
`;

export const StepList = styled.ol`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StepCard = styled.li`
  position: relative;
  min-width: 0;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.sm}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.surface};

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    width: ${({ theme }) => theme.spacing.md};
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    &:nth-child(3n)::after {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMobile}) {
    &:nth-child(3n)::after {
      display: block;
    }

    &:nth-child(2n)::after {
      display: none;
    }
  }
`;

export const StepNumber = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.caption};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-variant-numeric: tabular-nums;
`;

export const StepTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StepDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
  line-height: 1.6;
  overflow-wrap: anywhere;
`;

export const TeamCard = styled.aside`
  display: flex;
  align-items: center;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.surface};
  background-image:
    linear-gradient(90deg, rgba(11, 13, 12, 0.85), rgba(11, 13, 12, 0.65)),
    url(${teamStoryImage});
  background-size: cover;
  background-position: center;
`;

export const TeamContent = styled.div`
  min-width: 0;
`;

export const TeamLabel = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.caption};
  letter-spacing: 0.08em;
`;

export const TeamTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.6;
`;

export const TeamDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.small};
  line-height: 1.8;
`;
