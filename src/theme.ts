const theme = {
  colors: {
    white: '#ffffff',
    primary: '#000000',
    secondary: '#EDEEF0',
    files: {
      pastelDarkBlue: '#D8DAEF',
      pastelLightBlue: '#E6EDFD',
      pastelDarkPurple: '#E8DEF6',
      pastelLightPurple: '#F3E1F7',
      pastelPink: '#FDD9E3',
      pastelOrange: '#FCE6D8',
      pastelYellow: '#FDF5E2',
      pastelGreen: '#DBF4EE',
    },
  },
  fontSizes: {
    xsmall: 10,
    small: 12,
    base: 14,
    medium: 18,
    heading: 28,
  },
  fonts: {
    montserratRegular: 'mrt-regular',
    montserratBold: 'mrt-bold',
    montserratExtraBold: 'mrt-extraBold',
    montserratMedium: 'mrt-medium',
    montserratLight: 'mrt-light',
  },
  spacing: {
    xsmall: 8,
    small: 12,
    medium: 16,
    large: 24,
    xlarge: 32,
  },
}
export type Color = keyof typeof theme.colors
export type FileColor = keyof typeof theme.colors.files
export type FontSize = keyof typeof theme.fontSizes
export type FontFamily = keyof typeof theme.fonts
export type Spacing = keyof typeof theme.spacing
export default theme
