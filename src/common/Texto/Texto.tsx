import React, { FC } from 'react'
import { Text, StyleSheet } from 'react-native'
import theme, { Color, FontFamily, FontSize, Spacing } from '../../theme'

type Props = {
  children: string
  estilo?: FontFamily
  color?: Color
  size?: FontSize
  marginBottom?: Spacing
}

export const Texto: FC<Props> = ({
  children,
  estilo,
  color,
  size,
  marginBottom,
}) => {
  const textStyles = [
    styles.primary,
    styles.regular,
    styles.sizeBase,
    estilo === 'montserratLight' && styles.light,
    estilo === 'montserratBold' && styles.bold,
    estilo === 'montserratExtraBold' && styles.extraBold,
    estilo === 'montserratMedium' && styles.medium,
    color === 'secondary' && styles.secondary,
    color === 'white' && styles.white,
    size === 'small' && styles.sizeSmall,
    size === 'medium' && styles.sizeMedium,
    size === 'heading' && styles.sizeHeading,
    marginBottom === 'xsmall' && styles.marginXSmall,
    marginBottom === 'small' && styles.marginSmall,
    marginBottom === 'medium' && styles.marginMedium,
    marginBottom === 'large' && styles.marginLarge,
    marginBottom === 'xlarge' && styles.marginXLarge,
  ]
  return <Text style={textStyles}>{children}</Text>
}

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
  medium: {
    fontFamily: theme.fonts.montserratMedium,
  },
  extraBold: {
    fontFamily: theme.fonts.montserratExtraBold,
  },
  bold: {
    fontFamily: theme.fonts.montserratBold,
  },

  sizeSmall: {
    fontSize: theme.fontSizes.small,
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

  marginXSmall: {
    marginBottom: theme.spacing.xsmall,
  },

  marginSmall: {
    marginBottom: theme.spacing.small,
  },

  marginMedium: {
    marginBottom: theme.spacing.medium,
  },

  marginLarge: {
    marginBottom: theme.spacing.large,
  },

  marginXLarge: {
    marginBottom: theme.spacing.xlarge,
  },
})
