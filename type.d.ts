import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Notes: undefined
  AddNote: undefined
}

export type RootStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Notes,
  AddNote
>

export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Notes,
  AddNote
>
