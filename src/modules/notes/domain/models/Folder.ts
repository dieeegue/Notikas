import { FileColor } from '../../../../theme'
import { Note } from './Note'

export interface Folder {
  id: string
  name: string
  contents: Note[]
  color: FileColor
  isFavorite: boolean
}
