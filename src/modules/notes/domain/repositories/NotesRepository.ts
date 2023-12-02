import { Note } from '../models/Note'

export interface NotesRepository {
  getAll(): Promise<Note[]>
  getNote(id: number): Promise<Note | null>
  create(note: Note): Promise<void>
  update(note: Note): Promise<void>
  delete(id: number): Promise<void>
}
