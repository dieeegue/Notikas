import { NotesRepository } from '../../../domain/repositories/NotesRepository'

export function getNote(repository: NotesRepository, id: number) {
  return repository.getNoteById(id)
}
