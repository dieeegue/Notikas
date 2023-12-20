import React, { useState, useEffect, ReactNode } from 'react'
import { NotesContext } from './NotesContext'
import { useNotesRepository } from '../NotesRepository/useNotesRepository'
import { getAllNotes } from '../../application/getAll/getAllNotes'
import { Note } from '../../domain/models/Note'

interface Props {
  children: ReactNode
}

export const NotesProvider: React.FC<Props> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([])

  const { notesRepository } = useNotesRepository()

  const loadNotes = async () => {
    const notes = await getAllNotes(notesRepository)
    setNotes(notes)
  }

  useEffect(() => {
    loadNotes()
  }, [])

  return (
    <NotesContext.Provider value={{ notes, loadNotes }}>
      {children}
    </NotesContext.Provider>
  )
}
