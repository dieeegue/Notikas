import { Note } from '../../../domain/models/Note'
import { NotesRepository } from '../../../domain/repositories/NotesRepository'

export function updateNote(repository: NotesRepository, note: Note) {
  return repository.update(note)
}
