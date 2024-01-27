import { NotesRepository } from '../../../domain/repositories/NotesRepository'

export function deleteNote(repository: NotesRepository, id: number) {
  return repository.delete(id)
}
