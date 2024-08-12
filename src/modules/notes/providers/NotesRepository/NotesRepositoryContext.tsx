import React from 'react'

import * as SQLite from 'expo-sqlite/legacy'
import { NotesRepository } from '../../domain/repositories/NotesRepository'

export interface Context {
  db: SQLite.SQLiteDatabase
  notesRepository: NotesRepository
}

export const NotesRepositoryContext = React.createContext<Context | undefined>(
  undefined
)
