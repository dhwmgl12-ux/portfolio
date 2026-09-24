// styles/theme.js

export const theme = {
  colors: {
    background: "#0B0D0C",
    surface: "#131614",
    text: "#F5F7F5",
    textSecondary: "#9CA39D",
    accent: "#C7FF3D",
    border: "#2A2E2B",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
    xxl: "64px",
  },

  radius: {
    sm: "6px",
    md: "12px",
    lg: "20px",
  },

  breakpoint: {
    mobile: "767px",
    tablet: "1023px",
    desktop: "1439px",
  },

  layout: {
    contentWidth: "1200px",
    introColumns: "minmax(0, 7fr) minmax(0, 3fr)",
  },

  typography: {
    caption: "12px",
    small: "14px",
    body: "16px",
    sectionTitle: "clamp(22px, 2.2vw, 28px)",
    heroTitle: "clamp(32px, 3.4vw, 48px)",
  },

  fontWeight: {
    medium: 500,
    bold: 700,
    extraBold: 800,
  },
};
