import React from 'react'
import theme from '../../../../../../theme'
import { View, StyleSheet, Pressable, Linking } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../../../../../../../type'
import { IconLink } from '../../../../../../common/IconLink/IconLink'
import { Texto } from '../../../../../../common/Texto/Texto'

export const Header = () => {
  const navigation = useNavigation<RootStackNavigationProp>()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.headerContainer}>
      <View>
        <Pressable style={styles.arrowBackContainer} onPress={handleGoBack}>
          <MaterialIcons name="keyboard-arrow-left" size={32} />
          <Texto>Volver</Texto>
        </Pressable>
      </View>
      <View>
        <IconLink
          url="https://www.markdownguide.org/cheat-sheet/"
          text="Sintaxis Markdown"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.medium,
    alignItems: 'center',
    minHeight: 43,
  },
  arrowBackContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.xsmall,
    flexGrow: 1,
  },
})
