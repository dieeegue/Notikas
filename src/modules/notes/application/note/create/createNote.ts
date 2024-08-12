import { Note } from '../../../../../../db/schema'
import { NotesRepository } from '../../../domain/repositories/NotesRepository'

export function createNote(
  repository: NotesRepository,
  note: Omit<Note, 'id'>
) {
  return repository.create(note)
}
