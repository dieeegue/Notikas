import { useContext } from 'react'
import { NotesContext } from './NotesContext'

export const useNotes = () => {
  const repository = useContext(NotesContext)
  if (repository === undefined) {
    throw new Error('useNotes debe ser usado dentro de un NotesProvider')
  }
  return repository
}
