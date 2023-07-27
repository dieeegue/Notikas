const theme = {
  colors: {
    white: "#ffffff",
    primary: "#000000",
    secondary: "#EDEEF0",
    pastelGreen: "#B4EECD",
    pastelYellow: "#FAECA7",
    pastelOrange: "#F6D3AE",
    pastelPurple: "#DDC6E7",
  },
  fontSizes: {
    base: 14,
    medium: 18,
    heading: 28,
  },
  fonts: {
    montserratRegular: "mrt-regular",
    montserratBold: "mrt-bold",
    montserratExtraBold: "mrt-extraBold",
    montserratLight: "mrt-light",
  },
};
export type Color = keyof typeof theme.colors;
export type FontSize = keyof typeof theme.fontSizes;
export type FontFamily = keyof typeof theme.fonts;
export default theme;
