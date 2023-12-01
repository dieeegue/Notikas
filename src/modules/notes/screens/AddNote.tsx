import { StatusBar } from 'expo-status-bar'
import { Layout } from '../../../common/Layout/Layout'
import { DatabaseService } from '../../../database/Database'
import * as SQLite from 'expo-sqlite'
import { Header } from '../_components/Header/Header'
import { Texto } from '../../../common/Texto/Texto'
import {
  View,
  StyleSheet,
  FlatList,
  ViewStyle,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import theme, { NoteColors } from '../../../theme'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import Animated, { ZoomIn } from 'react-native-reanimated'
import { Field, FieldProps, Formik, FormikErrors } from 'formik'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Yup from 'yup'
import { getColorOptions } from '../domain/services/getColorOptions'
import { ColorOption } from '../domain/models/ColorOption'

export const AddNote = () => {
  const [selectedColor, setSelectedColor] =
    useState<NoteColors>('pastelDarkPurple')
  const [colorOptions, setColorOptions] = useState<ColorOption[]>()

  useEffect(() => {
    const colorOptions = getColorOptions()
    setColorOptions(colorOptions)
  }, [])

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

  const checkedButton = (color: NoteColors): ViewStyle => {
    return {
      backgroundColor: theme.colors.notes[color],
      borderRadius: 10,
      height: 150,
      width: 150,
      padding: 30,
    }
  }

  const handleColorChange = (colorOption: ColorOption) => {
    setSelectedColor(colorOption.value)
  }

  const handleNoteCreation = (values: FormValues) => {
    const { fileType, color, fileName } = values
    console.log(`${fileType} + ${color} + ${fileName}`)
  }

  type ItemProps = {
    colorOption: ColorOption
    fieldName: string
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<FormValues>>
  }
  const Item = ({ colorOption, fieldName, setFieldValue }: ItemProps) => (
    <Pressable
      style={circleInput(colorOption.color)}
      onPress={() => {
        handleColorChange(colorOption)
        setFieldValue(fieldName, colorOption.value)
      }}
    >
      <Animated.View
        style={checkedCircle(colorOption)}
        entering={ZoomIn.duration(400)}
      />
    </Pressable>
  )

  interface FormValues {
    fileType: string
    color: string
    fileName: string
  }

  const initialValues: FormValues = {
    fileType: 'note',
    color: selectedColor,
    fileName: '',
  }

  const validationSchema = Yup.object().shape({
    fileType: Yup.string()
      .trim()
      .min(1, 'You have to choose a file type.')
      .required('You have to choose a file type.'),
    color: Yup.string()
      .trim()
      .min(1, 'You have to choose a color.')
      .required('You have to choose a color.'),
    fileName: Yup.string()
      .trim()
      .min(1, 'You have to name the file.')
      .required('You have to name the file.'),
  })

  type IconName = 'file' | 'folder-open'
  interface FileTypeButtonProps {
    iconName: IconName
    text: string
    value: string
    field: any
    selectedColor: NoteColors
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  }

  const FileTypeButton: React.FC<FileTypeButtonProps> = ({
    iconName,
    text,
    value,
    field,
    selectedColor,
    setFieldValue,
  }) => (
    <Pressable onPress={() => setFieldValue(field.name, value)}>
      <Animated.View
        style={
          field.value === value ? checkedButton(selectedColor) : styles.button
        }
        entering={ZoomIn.duration(400)}
      >
        <Pressable
          style={styles.buttonContent}
          onPress={() => setFieldValue(field.name, value)}
        >
          <FontAwesome name={iconName} size={24} color="black" />
          <Texto estilo="montserratBold">{text}</Texto>
        </Pressable>
      </Animated.View>
    </Pressable>
  )

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <StatusBar style="auto" />
        <ScrollView>
          <Layout>
            <Header />
            <Formik
              initialValues={initialValues}
              onSubmit={handleNoteCreation}
              validationSchema={validationSchema}
            >
              {({
                values,
                errors,
                handleChange,
                setFieldValue,
                handleSubmit,
              }) => (
                <>
                  <Texto estilo="montserratBold" marginBottom="medium">
                    ¿Qué deseas crear?
                  </Texto>
                  <Field name="fileType">
                    {({ field }: FieldProps<any>) => (
                      <View style={styles.buttonContainer}>
                        <FileTypeButton
                          iconName="file"
                          text="Una nota"
                          value="note"
                          field={field}
                          selectedColor={selectedColor}
                          setFieldValue={setFieldValue}
                        />
                        <FileTypeButton
                          iconName="folder-open"
                          text="Una carpeta"
                          value="folder"
                          field={field}
                          selectedColor={selectedColor}
                          setFieldValue={setFieldValue}
                        />
                      </View>
                    )}
                  </Field>

                  <Texto estilo="montserratBold" marginBottom="medium">
                    Elige un color para mostrarla
                  </Texto>
                  <Field name="color">
                    {({ field }: FieldProps<any>) => (
                      <View>
                        <FlatList
                          data={colorOptions}
                          contentContainerStyle={styles.colorPickerContainer}
                          overScrollMode="auto"
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                          renderItem={({ item }) => (
                            <Item
                              colorOption={item}
                              fieldName={field.name}
                              setFieldValue={setFieldValue}
                            />
                          )}
                        />
                      </View>
                    )}
                  </Field>

                  <Texto estilo="montserratBold" marginBottom="medium">
                    ¿Cómo la vas a llamar?
                  </Texto>
                  <Field name="fileName">
                    {({ field }: FieldProps<any>) => (
                      <View style={styles.nameContainer}>
                        <MaterialCommunityIcons
                          name="pencil"
                          size={18}
                          color="black"
                          style={styles.nameIcon}
                        />
                        <TextInput
                          style={styles.noteInput}
                          placeholder="Escribe aquí el nombre"
                          onChangeText={handleChange(field.name)}
                        />
                      </View>
                    )}
                  </Field>

                  <View style={styles.saveContainer}>
                    <Pressable
                      style={styles.saveButton}
                      android_ripple={{ color: theme.colors.white }}
                      onPress={() => {
                        handleSubmit()
                        console.log(errors)
                      }}
                    >
                      <Texto color="white">Crear</Texto>
                    </Pressable>
                  </View>
                </>
              )}
            </Formik>
          </Layout>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  nameContainer: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    marginBottom: theme.spacing.large,
  },
  nameIcon: {
    paddingHorizontal: 15,
  },
  noteInput: {
    minHeight: 50,
    flexGrow: 1,
    fontFamily: theme.fonts.montserratRegular,
  },
  saveContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  saveButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
})
