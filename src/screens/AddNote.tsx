import { StatusBar } from 'expo-status-bar'
import { Layout } from '../common/Layout/Layout'
import { DatabaseService } from '../database/Database'
import * as SQLite from 'expo-sqlite'
import { Header } from '../modules/notes/_components/Header/Header'
import { Texto } from '../common/Texto/Texto'
import { View, StyleSheet, FlatList, ViewStyle, Pressable } from 'react-native'
import theme, { NoteColors } from '../theme'
import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import Animated, { ZoomIn } from 'react-native-reanimated'

interface ColorOption {
  color: string
  value: NoteColors
}

const COLOR_OPTIONS: ColorOption[] = [
  {
    color: theme.colors.notes.pastelDarkPurple,
    value: 'pastelDarkPurple',
  },
  {
    color: theme.colors.notes.pastelLightPurple,
    value: 'pastelLightPurple',
  },
  {
    color: theme.colors.notes.pastelPink,
    value: 'pastelPink',
  },
  {
    color: theme.colors.notes.pastelOrange,
    value: 'pastelOrange',
  },
  {
    color: theme.colors.notes.pastelYellow,
    value: 'pastelYellow',
  },
  {
    color: theme.colors.notes.pastelGreen,
    value: 'pastelGreen',
  },
  {
    color: theme.colors.notes.pastelLightBlue,
    value: 'pastelLightBlue',
  },
  {
    color: theme.colors.notes.pastelDarkBlue,
    value: 'pastelDarkBlue',
  },
]

export const AddNote = () => {
  const [selectedColor, setSelectedColor] =
    useState<NoteColors>('pastelDarkPurple')

  const databaseService = new DatabaseService(
    SQLite.openDatabase('db.notikasDB')
  )

  const circleInput = (color: string): ViewStyle => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    borderRadius: 100,
    height: 34,
    width: 34,
  })

  const checkedCircle = (colorOption: ColorOption): ViewStyle => {
    if (colorOption.value === selectedColor) {
      return {
        width: 45,
        height: 45,
        borderRadius: 100,
        borderColor: colorOption.color,
        borderWidth: 2.5,
      }
    }
    return {}
  }

  const handleColorChange = (colorOption: ColorOption) => {
    setSelectedColor(colorOption.value)
  }

  const Item = (colorOption: ColorOption) => (
    <Pressable
      style={circleInput(colorOption.color)}
      onPress={() => handleColorChange(colorOption)}
    >
      <Animated.View
        style={checkedCircle(colorOption)}
        entering={ZoomIn.duration(400)}
      />
    </Pressable>
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
          <Animated.View style={styles.button} entering={ZoomIn.duration(400)}>
            <View style={styles.buttonContent}>
              <FontAwesome name="file" size={24} color="black" />
              <Texto estilo="montserratBold">Una nota</Texto>
            </View>
          </Animated.View>
          <Animated.View style={styles.button} entering={ZoomIn.duration(400)}>
            <View style={styles.buttonContent}>
              <FontAwesome name="folder-open" size={30} color="black" />
              <Texto estilo="montserratBold">Una carpeta</Texto>
            </View>
          </Animated.View>
        </View>
        <Texto estilo="montserratBold" marginBottom="medium">
          Elige un color para mostrarla
        </Texto>
        <View>
          <FlatList
            data={COLOR_OPTIONS}
            contentContainerStyle={styles.colorPickerContainer}
            overScrollMode="auto"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Item color={item.color} value={item.value} />
            )}
          />
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.small,
    minHeight: 60,
    paddingHorizontal: theme.spacing.xsmall,
    marginBottom: theme.spacing.large,
  },
})
