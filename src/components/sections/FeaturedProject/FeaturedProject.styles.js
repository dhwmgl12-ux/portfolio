import styled from "@emotion/styled";

export const ProjectSection = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const FeaturedLayout = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 1.25fr)
    minmax(0, 1fr);
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: minmax(0, 1fr);
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

export const Introduction = styled.div`
  min-width: 0;
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
  letter-spacing: 0.08em;
`;

export const ProjectTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.heroTitle};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  font-style: italic;
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.small};
  line-height: 1.7;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-block: ${({ theme }) => theme.spacing.lg};
  padding: 0;
  list-style: none;
`;

export const Tag = styled.li`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.typography.caption};
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid
    ${({ theme, $primary }) =>
      $primary ? theme.colors.accent : theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme, $primary }) =>
    $primary ? theme.colors.accent : theme.colors.surface};
  color: ${({ theme, $primary }) =>
    $primary ? theme.colors.background : theme.colors.text};
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export const PendingLink = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding-inline: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.small};
`;

export const PreviewButton = styled.button`
  display: block;
  width: 100%;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const PreviewImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: top;
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export const PreviewCaption = styled.span`
  display: block;
  padding-top: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.caption};
`;

export const ContributionPanel = styled.aside`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-column: 1 / -1;
  }
`;

export const ContributionList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  padding: 0;
  list-style: none;
`;

export const ContributionItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CheckMark = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ContributionTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.body};
`;

export const TeamInfo = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  margin: 0;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};

  span:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Overview = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const OverviewInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-inline: ${({ theme }) => theme.spacing.md};
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sectionTitle};
  line-height: 1.4;
`;

export const ScreenList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ScreenButton = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 4px;
  }
`;

export const Thumbnail = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export const ScreenTitle = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Ownership = styled.span`
  font-size: ${({ theme }) => theme.typography.caption};
  color: ${({ theme, $isMine }) =>
    $isMine ? theme.colors.accent : theme.colors.textSecondary};
`;

export const ScreenDialog = styled.dialog`
  width: min(960px, 94vw);
  max-height: 90dvh;
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  &::backdrop {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const CloseButton = styled.button`
  flex-shrink: 0;
  min-height: 44px;
  padding-inline: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const FullImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const ScreenReaderText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

export const ScreenDescription = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.small};
  line-height: 1.7;
  word-break: keep-all;
`;

export const TeamScreens = styled.details`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TeamScreensSummary = styled.summary`
  min-height: 44px;
  padding-block: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 4px;
  }
`;
