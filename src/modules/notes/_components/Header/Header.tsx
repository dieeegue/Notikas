import React from 'react'
import theme from '../../../../theme'
import { View, StyleSheet, Pressable } from 'react-native'
import { Texto } from '../../../../common/Texto/Texto'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import * as SQLite from 'expo-sqlite'
import { DatabaseService } from '../../../../database/Database'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../../../../../type'

export const Header = ({ loadNotes }: { loadNotes: () => void }) => {
  const navigation = useNavigation<RootStackNavigationProp>()
  const databaseService = new DatabaseService(
    SQLite.openDatabase('db.notikasDB')
  )

  const handlePressMenu = () => {
    databaseService.query('DELETE FROM notes;', [])
    loadNotes()
  }

  const handlePressAdd = () => {
    // databaseService.query(
    //   'INSERT INTO notes (title, preview, content, createdAt) values (?, ?, ?, ?);',
    //   [
    //     'Una nota cualquiera 🤍',
    //     'Y esta una vista previa cualquiera también jeje',
    //     'El contenido',
    //     'La fecha de creacion',
    //   ]
    // )
    // loadNotes()
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
    flexGrow: 1,
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
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacing.xsmall,
  },
})
