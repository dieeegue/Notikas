import React from 'react'
import { Note } from '../../domain/models/Note'

export interface Context {
  notes: Note[]
  loadNotes: () => Promise<void>
}

export const NotesContext = React.createContext<Context | undefined>(undefined)
