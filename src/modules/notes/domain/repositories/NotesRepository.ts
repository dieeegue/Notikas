import { Note } from '../../../../../db/schema'

export interface NotesRepository {
  getAll(): Promise<Note[]>
  getNoteById(id: number): Promise<Note[]>
  create(note: Omit<Note, 'id'>): Promise<{ id: number }>
  update(note: Note): void
  delete(id: number): void
}
