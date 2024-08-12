import React from 'react'

import { NotesRepository } from '../../domain/repositories/NotesRepository'

export interface Context {
  notesRepository: NotesRepository
}

export const NotesRepositoryContext = React.createContext<Context | undefined>(
  undefined
)
