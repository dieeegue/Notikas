import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";
import theme, { Color, FontFamily, FontSize } from "../../theme";

type Props = {
  children: string;
  estilo?: FontFamily;
  color?: Color;
  size?: FontSize;
};

export const Texto: FC<Props> = ({ children, estilo, color, size }) => {
  const textStyles = [
    styles.primary,
    styles.regular,
    styles.sizeBase,
    estilo === "montserratLight" && styles.light,
    estilo === "montserratBold" && styles.bold,
    estilo === "montserratExtraBold" && styles.extraBold,
    color === "secondary" && styles.secondary,
    color === "white" && styles.white,
    size === "medium" && styles.sizeMedium,
    size === "heading" && styles.sizeHeading,
  ];
  return <Text style={textStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
  primary: {
    color: theme.colors.primary,
  },
  secondary: {
    color: theme.colors.secondary,
  },
  white: {
    color: theme.colors.white,
  },

  light: {
    fontFamily: theme.fonts.montserratLight,
  },
  regular: {
    fontFamily: theme.fonts.montserratRegular,
  },
  extraBold: {
    fontFamily: theme.fonts.montserratExtraBold,
  },
  bold: {
    fontFamily: theme.fonts.montserratBold,
  },

  sizeBase: {
    fontSize: theme.fontSizes.base,
  },
  sizeMedium: {
    fontSize: theme.fontSizes.medium,
  },
  sizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
});
