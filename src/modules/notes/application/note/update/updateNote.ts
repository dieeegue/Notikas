import { Note } from '../../../../../../db/schema'
import { NotesRepository } from '../../../domain/repositories/NotesRepository'

export function updateNote(repository: NotesRepository, note: Note) {
  return repository.update(note)
}
