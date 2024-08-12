import React from 'react'
import { Note } from '../../../../../db/schema'

export interface Context {
  notes: Note[]
  loadNotes: () => Promise<void>
}

export const NotesContext = React.createContext<Context | undefined>(undefined)
