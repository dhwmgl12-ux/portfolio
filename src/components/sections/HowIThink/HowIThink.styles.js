import styled from "@emotion/styled";

export const Section = styled.section`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 1.2fr)
    minmax(0, 0.85fr);
  align-items: start;
  gap: ${({ theme }) => theme.spacing.lg};

  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: minmax(0, 1fr);
    padding-inline: ${({ theme }) => theme.spacing.md};
  }
`;

export const QuestionColumn = styled.div`
  min-width: 0;
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
  letter-spacing: 0.08em;
`;

export const Title = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.sectionTitle};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  line-height: 1.4;
  letter-spacing: -0.04em;
`;

export const QuestionList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 0;
  padding: 0;
  list-style: none;

  > li {
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.surface};
  }
`;

export const QuestionHeading = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.small};
`;

export const QuestionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  min-height: 48px;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font: inherit;
  text-align: left;
  cursor: pointer;

  &[aria-expanded="true"] {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Chevron = styled.span`
  flex-shrink: 0;
  margin-left: auto;
`;

export const Answer = styled.p`
  margin: 0;
  padding: ${({ theme }) => `0 ${theme.spacing.md} ${theme.spacing.md}`};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.small};
  line-height: 1.8;
`;

export const CodePanel = styled.div`
  min-width: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
`;

export const CodeNavigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CodeButton = styled.button`
  flex: 1 1 auto;
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 0;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
  cursor: pointer;

  &[aria-pressed="true"] {
    border-bottom-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CodeHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.small};
  }
`;

export const SourceBadge = styled.span`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.caption};
`;

export const FileName = styled.p`
  margin: 0;
  padding-inline: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
  overflow-wrap: anywhere;
`;

export const CodeBlock = styled.pre`
  max-width: 100%;
  min-height: 220px;
  margin: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.caption};
  line-height: 1.9;
  tab-size: 2;

  code {
    font-family: Consolas, "Courier New", monospace;
  }
`;

export const CodeFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.radius.sm};
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.typography.caption};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-decoration: none;
  }

  a:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const DecisionCard = styled.aside`
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-column: 1 / -1;
  }
`;

export const DecisionIcon = styled.span`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  font-size: 22px;
`;

export const DecisionTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.body};
`;

export const DecisionText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.small};
  line-height: 1.8;
`;

export const Tradeoff = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  h4 {
    margin: 0 0 ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.small};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.caption};
    line-height: 1.8;
  }
`;

export const ScreenReaderText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
