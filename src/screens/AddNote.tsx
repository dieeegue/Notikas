import { StatusBar } from 'expo-status-bar'
import { Layout } from '../common/Layout/Layout'
import { DatabaseService } from '../database/Database'
import * as SQLite from 'expo-sqlite'
import { Header } from '../modules/notes/_components/Header/Header'
import { Texto } from '../common/Texto/Texto'
import { View, StyleSheet } from 'react-native'
import theme from '../theme'
import { FontAwesome } from '@expo/vector-icons'

export const AddNote = () => {
  const databaseService = new DatabaseService(
    SQLite.openDatabase('db.notikasDB')
  )

  return (
    <>
      <StatusBar style="auto" />
      <Layout>
        <Header />
        <Texto estilo="montserratBold" marginBottom="medium">
          ¿Qué deseas crear?
        </Texto>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <View style={styles.buttonContent}>
              <FontAwesome name="file" size={24} color="black" />
              <Texto estilo="montserratBold">Una nota</Texto>
            </View>
          </View>
          <View style={styles.button}>
            <View style={styles.buttonContent}>
              <FontAwesome name="folder-open" size={30} color="black" />
              <Texto estilo="montserratBold">Una carpeta</Texto>
            </View>
          </View>
        </View>
        <Texto estilo="montserratBold" marginBottom="medium">
          Elige un color para mostrarla
        </Texto>
        <View style={styles.colorPickerContainer}>
          <View style={styles.circleInput}></View>
          <View style={styles.circleInput}></View>
          <View style={styles.circleInput}></View>
          <View style={styles.circleInput}></View>
          <View style={styles.circleInput}></View>
          <View style={styles.circleInput}></View>
          <View style={styles.circleInput}></View>
          <View style={styles.circleInput}></View>
        </View>
        <Texto estilo="montserratBold" marginBottom="medium">
          ¿Cómo la vas a llamar?
        </Texto>
      </Layout>
    </>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.large,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    height: 150,
    width: 150,
    padding: 30,
  },
  buttonContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.xsmall,
    flexGrow: 1,
  },
  colorPickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing.small,
    marginBottom: theme.spacing.large,
  },
  circleInput: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 100,
    height: 30,
    width: 30,
  },
})
