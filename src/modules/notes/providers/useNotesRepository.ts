import { useContext } from 'react'
import { NotesRepositoryContext } from './NotesRepositoryContext'

export const useNotesRepository = () => {
  const repository = useContext(NotesRepositoryContext)
  if (repository === undefined) {
    throw new Error(
      'useNotesRepository debe ser usado dentro de un NotesRepositoryProvider'
    )
  }
  return repository
}
