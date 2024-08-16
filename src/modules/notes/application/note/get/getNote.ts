import { NotesRepository } from '../../../domain/repositories/NotesRepository'

export function getNoteById(repository: NotesRepository, id: number) {
  return repository.getNoteById(id)
}
