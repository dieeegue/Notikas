import { eq } from 'drizzle-orm'
import { NotesRepository } from '../../domain/repositories/NotesRepository'
import { ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite/driver'
import { Note, notes } from '../../../../../db/schema'

export class SQLiteNotesRepository implements NotesRepository {
  constructor(private db: ExpoSQLiteDatabase) {}

  async getAll() {
    return this.db.select().from(notes).all()
  }

  async getNoteById(id: number) {
    return this.db.select().from(notes).where(eq(notes.id, id))
  }

  async create(note: Omit<Note, 'id'>) {
    await this.db.insert(notes).values(note)
  }

  async update(note: Note) {
    await this.db.update(notes).set(note).where(eq(notes.id, note.id))
  }

  async delete(id: number) {
    await this.db.delete(notes).where(eq(notes.id, id))
  }
}
