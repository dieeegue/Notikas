import { NotesRepository } from '../../../domain/repositories/NotesRepository'

export function getAllNotes(repository: NotesRepository) {
  return repository.getAll()
}
