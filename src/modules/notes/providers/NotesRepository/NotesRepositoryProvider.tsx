import React, { ReactNode } from 'react'
import * as SQLite from 'expo-sqlite'
import { NotesRepositoryContext } from './NotesRepositoryContext'
import { SQLiteNotesRepository } from '../../infrastructure/repositories/SQLiteNotesRepository'

interface Props {
  children: ReactNode
}

export const NotesRepositoryProvider: React.FC<Props> = ({ children }) => {
  const db = SQLite.openDatabase('db.notikasDB')
  const notesRepository = new SQLiteNotesRepository(db)

  return (
    <NotesRepositoryContext.Provider value={{ db, notesRepository }}>
      {children}
    </NotesRepositoryContext.Provider>
  )
}
