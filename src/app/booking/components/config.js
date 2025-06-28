// Global color configuration
export const colors = {
  // Primary colors
  primary: {
    cyan: "#00ffff",
    green: "#00ffab",
    white: "#ffffff",
    black: "#000000",
  },

  // Background colors
  background: {
    primary: "#0a0a0f",
    secondary: "#0e0e12",
    card: "rgba(0, 0, 0, 0.6)",
    cardHover: "rgba(0, 0, 0, 0.8)",
  },

  // Text colors
  text: {
    primary: "#ffffff",
    secondary: "#b0b0b0",
    muted: "#888888",
    placeholder: "#666666",
  },

  // Border colors
  border: {
    primary: "#333333",
    hover: "#555555",
    focus: "#00ffff",
  },

  // State colors
  state: {
    success: "#00ffab",
    error: "#ff4444",
    warning: "#ffaa00",
  },

  // Gradients
  gradients: {
    primary: "linear-gradient(to right, #00ffff, #00ffab)",
    primaryReverse: "linear-gradient(to right, #00ffab, #00ffff)",
    background: "linear-gradient(to bottom right, #0a0a0f, #0e0e12, #0a0a0f)",
    text: "linear-gradient(to right, #00ffff, #ffffff, #00ffab)",
    textReverse: "linear-gradient(to right, #00ffab, #00ffff, #ffffff)",
  },

  // Opacity variations
  opacity: {
    low: "0.1",
    medium: "0.2",
    high: "0.6",
  },
}

// CSS custom properties helper
export const getCSSVariables = () => {
  return {
    "--color-primary-cyan": colors.primary.cyan,
    "--color-primary-green": colors.primary.green,
    "--color-primary-white": colors.primary.white,
    "--color-primary-black": colors.primary.black,
    "--color-bg-primary": colors.background.primary,
    "--color-bg-secondary": colors.background.secondary,
    "--color-text-primary": colors.text.primary,
    "--color-text-secondary": colors.text.secondary,
    "--color-text-muted": colors.text.muted,
    "--color-border-primary": colors.border.primary,
    "--color-border-hover": colors.border.hover,
    "--color-border-focus": colors.border.focus,
  }
}
