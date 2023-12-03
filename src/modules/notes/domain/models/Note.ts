import { NoteColors } from '../../../../theme'

export interface Note {
  id: string
  title: string
  content: string
  color: NoteColors
  createdAt: string
  isFavorite: boolean
}
