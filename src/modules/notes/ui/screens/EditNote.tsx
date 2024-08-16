import React, { useEffect, useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../../../type'
import { Texto } from '../../../../common/Texto/Texto'
import { getNoteById } from '../../application/note/get/getNote'
import { useNotesRepository } from '../../providers/NotesRepository/useNotesRepository'
import { Note } from '../../../../../db/schema'
import { isUndefined } from '../../../../common/utilities/isUndefined'

interface Props {
  route: RouteProp<RootStackParamList, 'EditNote'>
}

export const EditNote: React.FC<Props> = ({ route }) => {
  const { noteId } = route.params
  const { notesRepository } = useNotesRepository()

  const [currentNote, setCurrentNote] = useState<Note | undefined>(undefined)

  useEffect(() => {
    const onLoad = async () => {
      const [currentNote] = await getNoteById(notesRepository, noteId)
      setCurrentNote(currentNote)
      console.log(currentNote)
    }
    onLoad()
  }, [])

  if (isUndefined(currentNote)) return <Texto>Loading...</Texto>

  return <Texto>{`La nota es: ${currentNote.id}`}</Texto>
}
