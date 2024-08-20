import React from 'react'
import theme from '../../../../../../theme'
import { View, StyleSheet, Pressable } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Texto } from '../../../../../../common/Texto/Texto'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../../../../../../../type'

export const Header = () => {
  const navigation = useNavigation<RootStackNavigationProp>()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTitle}>
        <Texto estilo="montserratExtraBold" size="heading">
          Notikas.
        </Texto>
      </View>
      <View>
        <Pressable style={styles.arrowBackContainer} onPress={handleGoBack}>
          <MaterialIcons name="keyboard-arrow-left" size={23} />
          <Texto>Volver</Texto>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.medium,
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
