import { Note } from '../../../domain/models/Note'
import { NotesRepository } from '../../../domain/repositories/NotesRepository'

export function createNote(repository: NotesRepository, note: Note) {
  return repository.create(note)
}
