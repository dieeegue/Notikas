import React from 'react'

import * as SQLite from 'expo-sqlite/legacy'
import { NotesRepository } from '../../domain/repositories/NotesRepository'
import { ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite/driver'

export interface Context {
  db: ExpoSQLiteDatabase
  notesRepository: NotesRepository
}

export const NotesRepositoryContext = React.createContext<Context | undefined>(
  undefined
)
