import { Text } from 'react-native'
import { Notes } from './src/modules/notes/ui/screens/Notes'
import { useFonts } from 'expo-font'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddNote } from './src/modules/notes/ui/screens/AddNote'
import { RootStackParamList } from './type'
import React from 'react'
import { NotesRepositoryProvider } from './src/modules/notes/providers/NotesRepositoryProvider'

export default function App() {
  const [fontsLoaded] = useFonts({
    'mrt-regular': require('./assets/fonts/mrt-regular.ttf'),
    'mrt-bold': require('./assets/fonts/mrt-bold.ttf'),
    'mrt-extraBold': require('./assets/fonts/mrt-extraBold.ttf'),
    'mrt-light': require('./assets/fonts/mrt-light.ttf'),
    'mrt-medium': require('./assets/fonts/mrt-medium.ttf'),
  })

  if (!fontsLoaded) {
    return <Text>Cargando...</Text>
  }

  const Stack = createNativeStackNavigator<RootStackParamList>()

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  }

  return (
    <NotesRepositoryProvider>
      <NavigationContainer theme={customTheme}>
        <Stack.Navigator initialRouteName="Notes">
          <Stack.Screen
            name="Notes"
            component={Notes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddNote"
            component={AddNote}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesRepositoryProvider>
  )
}
