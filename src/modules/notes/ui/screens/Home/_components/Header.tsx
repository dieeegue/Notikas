import React from 'react'
import theme from '../../../../../../theme'
import { Texto } from '../../../../../../common/Texto/Texto'
import { View, StyleSheet, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../../../../../../../type'

interface Props {
  loadNotes: () => void
}

export const Header: React.FC<Props> = ({ loadNotes }) => {
  const navigation = useNavigation<RootStackNavigationProp>()

  const handlePressMenu = () => {
    loadNotes()
  }

  const handlePressAdd = () => {
    navigation.navigate('AddNote')
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTitle}>
        <Texto estilo="montserratExtraBold" size="heading">
          Notikas.
        </Texto>
      </View>
      <View style={styles.buttonsContainer}>
        <View
          style={{
            alignSelf: 'center',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          <Pressable
            android_ripple={{ color: theme.colors.primary }}
            style={styles.addButton}
            onPress={handlePressAdd}
          >
            <MaterialIcons name="add" size={23} color={theme.colors.white} />
          </Pressable>
        </View>
        <View
          style={{
            alignSelf: 'center',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          <Pressable
            android_ripple={{ color: theme.colors.primary }}
            style={styles.menuButton}
            onPress={handlePressMenu}
          >
            <Ionicons name="menu" size={23} />
          </Pressable>
        </View>
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
  menuButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 43,
    height: 43,
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
  },
  addButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 43,
    height: 43,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.medium,
    minHeight: 43,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacing.xsmall,
  },
})
