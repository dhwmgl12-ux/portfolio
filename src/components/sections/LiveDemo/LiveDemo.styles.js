import styled from "@emotion/styled";

export const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin-inline: auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-inline: ${({ theme }) => theme.spacing.md};
  }
`;

export const Heading = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
  letter-spacing: 0.08em;
`;

export const Title = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sectionTitle};
`;

export const Note = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
  line-height: 1.7;
  overflow-wrap: anywhere;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1.5fr)
    minmax(0, 1.1fr)
    minmax(0, 0.9fr);
  align-items: start;
  gap: ${({ theme }) => theme.spacing.lg};

  > * {
    min-width: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const CategoryGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
`;

export const CategoryButton = styled.button`
  flex: 1;
  min-height: 44px;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;

  &[aria-pressed="true"] {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ProductCard = styled.article`
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
`;

export const ProductVisual = styled.div`
  display: grid;
  place-items: center;
  aspect-ratio: 4 / 3;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.background};
  font-size: 48px;
`;

export const ProductName = styled.h3`
  margin: ${({ theme }) => theme.spacing.sm} 0;
  font-size: ${({ theme }) => theme.typography.small};
`;

export const Price = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.small};
`;

export const ProductForm = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Field = styled.label`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  min-width: 0;
  font-size: ${({ theme }) => theme.typography.caption};

  input,
  select {
    width: 100%;
    min-width: 0;
    min-height: 44px;
    padding: ${({ theme }) => theme.spacing.xs};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    color-scheme: dark;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xs};

  span {
    min-width: 2ch;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }
`;

export const SmallButton = styled.button`
  flex-shrink: 0;
  width: 36px;
  min-height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.typography.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

export const TextButton = styled.button`
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.xs};
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.caption};
  cursor: pointer;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

export const CartPanel = styled.section`
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
`;

export const CartHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.body};
  }
`;

export const EmptyMessage = styled.p`
  padding-block: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.small};
`;

export const CartList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.md} 0;
  padding: 0;
  list-style: none;
`;

export const CartItem = styled.li`
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.typography.small};
`;

export const CartItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CartItemFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const DiscountLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: 44px;
  font-size: ${({ theme }) => theme.typography.small};
  cursor: pointer;

  input {
    accent-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const AmountList = styled.dl`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-block: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.small};

  div {
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  dd {
    margin: 0;
    text-align: right;
  }

  strong {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const RulePanel = styled.aside`
  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.body};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-column: 1 / -1;
  }
`;

export const RuleList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin: 0;
  padding-left: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.small};

  li::marker {
    color: ${({ theme }) => theme.colors.accent};
  }

  p {
    margin: ${({ theme }) => theme.spacing.xs} 0 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.caption};
    line-height: 1.7;
  }
`;

export const Status = styled.p`
  min-height: 3em;
  margin: ${({ theme }) => theme.spacing.md} 0 0;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.small};
`;
