import * as SQLite from 'expo-sqlite/legacy'

import { NotesRepository } from '../../domain/repositories/NotesRepository'
import { Note } from '../../domain/models/Note'
import {
  CreationError,
  DeletionError,
  LoadingError,
  SearchError,
  UpdateError,
} from '../../../../errors'

export class SQLiteNotesRepository implements NotesRepository {
  constructor(private db: SQLite.SQLiteDatabase) {
    this.ensureTableExists()
  }

  private ensureTableExists() {
    this.db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS notes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          content TEXT NOT NULL,
          color TEXT NOT NULL,
          createdAt TEXT NOT NULL,
          isFavorite INTEGER NOT NULL DEFAULT 0
        );`
      )
    })
  }

  async getAll() {
    return new Promise<Note[]>((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM notes;',
          [],
          (_, result) => {
            const notes = result.rows._array.map((note) => ({
              id: note.id,
              title: note.title,
              content: note.content,
              color: note.color,
              createdAt: note.createdAt,
              isFavorite: note.isFavorite === 1,
            }))
            resolve(notes)
          },
          (_, error) => {
            reject(
              new LoadingError({
                name: 'LOADING_ERROR',
                message: error.message,
              })
            )
            return false
          }
        )
      })
    })
  }

  async getNote(id: number) {
    return new Promise<Note | null>((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM notes WHERE id = ?;',
          [id],
          (_, result) => {
            if (result.rows._array.length === 0) {
              resolve(null)
            } else {
              const note = result.rows._array[0]
              resolve({
                id: note.id,
                title: note.title,
                content: note.content,
                color: note.color,
                createdAt: note.createdAt,
                isFavorite: note.isFavorite === 1,
              })
            }
          },
          (_, error) => {
            reject(
              new SearchError({
                name: 'SEARCH_ERROR',
                message:
                  'The note you are looking for could not be found in the database',
              })
            )
            return false
          }
        )
      })
    })
  }

  async create(note: Note) {
    return new Promise<void>((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO notes (title, content, color, createdAt, isFavorite) VALUES (?, ?, ?, ?, ?);',
          [
            note.title,
            note.content,
            note.color,
            note.createdAt,
            note.isFavorite ? 1 : 0,
          ],
          (_, result) => {
            resolve()
          },
          (_, error) => {
            reject(
              new CreationError({
                name: 'CREATION_ERROR',
                message: error.message,
              })
            )
            return false
          }
        )
      })
    })
  }

  async update(note: Note) {
    return new Promise<void>((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'UPDATE notes SET title = ?, content = ?, color = ?, createdAt = ?, isFavorite = ? WHERE id = ?;',
          [
            note.title,
            note.content,
            note.color,
            note.createdAt,
            note.isFavorite ? 1 : 0,
            note.id,
          ],
          (_, result) => {
            resolve()
          },
          (_, error) => {
            reject(
              new UpdateError({
                name: 'UPDATE_ERROR',
                message: error.message,
              })
            )
            return false
          }
        )
      })
    })
  }

  async delete(id: number) {
    return new Promise<void>((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM notes WHERE id = ?;',
          [id],
          (_, result) => {
            resolve()
          },
          (_, error) => {
            reject(
              new DeletionError({
                name: 'DELETION_ERROR',
                message: error.message,
              })
            )
            return false
          }
        )
      })
    })
  }
}
