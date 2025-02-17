export const defaultTheme = {
  colors: {
    blue: "#478BE6",
    white: "#FFFFFF",

    baseText: "#D1D7E0",
    baseSpan: "#9198A1",
    baseBackground: "#151B23",
    baseFocus: "#316DCA",
    baseBorder: "#3D444D",
    baseForeground: "#202830",
    baseCard: "#262C36",
    baseHover: "#21272F",
  },

  screens: {
    sm: "@media (max-width: 480px)",
    md: "@media (min-width: 481px) and (max-width: 768px)",
    lg: "@media (min-width: 769px) and (max-width: 1188px)",
    xl: "@media (min-width: 1189px)",

    min: {
      md: "@media (min-width: 481px)",
      lg: "@media (min-width: 769px)",
    },

    max: {
      md: "@media (max-width: 768px)",
      lg: "@media (max-width: 1188px)",
    },
  },

  sizes: {
    pageWidth: "896px",
    borderRadius: "6px",
  },

  fonts: {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    mono: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
  },
} as const;
