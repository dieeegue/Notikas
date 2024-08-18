import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

export type RootStackParamList = {
  Notes: undefined
  AddNote: undefined
  EditNote: { noteId: number }
}

export type NotesScreenProps = NativeStackScreenProps<RootStackParamList, 'Notes'>
export type AddNoteScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AddNote'
>
export type EditNoteScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'EditNote'
>

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>
