import React from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../../theme'

export const Layout = ({ children }: any) => {
  return <View style={styles.itemContainer}>{children}</View>
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing.large,
    paddingHorizontal: theme.spacing.medium,
    height: '100%',
  },
})
