import React, { useEffect, useState } from 'react'
import { Layout } from '../../../../common/Layout/Layout'
import { Texto } from '../../../../common/Texto/Texto'
import { View, StyleSheet } from 'react-native'
import theme from '../../../../theme'
import { StatusBar } from 'expo-status-bar'
import * as SQLite from 'expo-sqlite'
import { Logs } from 'expo'
import { NoteList } from '../../_components/NoteList/NoteList'
import { MainHeader } from '../../_components/Header/MainHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SQLiteNotesRepository } from '../../infrastructure/repositories/SQLiteNotesRepository'
import { Note } from '../../domain/models/Note'
import { getAllNotes } from '../../application/getAll/getAllNotes'

Logs.enableExpoCliLogging()

export const Notes = () => {
  const [notes, setNotes] = useState<Note[] | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  const db = SQLite.openDatabase('db.notikasDB')
  const notesRepository = new SQLiteNotesRepository(db)

  useEffect(() => {
    try {
      const onLoad = async () => {
        const notes = await getAllNotes(notesRepository)
        setNotes(notes)
      }
      onLoad()
      setIsLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }, [])

  const loadNotes = async () => {
    const notes = await getAllNotes(notesRepository)
    setNotes(notes)
  }

  if (isLoading) {
    return (
      <Layout>
        <Texto>Loading...</Texto>
      </Layout>
    )
  }

  if (hasError) {
    return (
      <Layout>
        <Texto>
          An error has occurred while trying to retrieve data from the database.
        </Texto>
      </Layout>
    )
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Layout>
          <View style={styles.container}>
            <MainHeader loadNotes={loadNotes} />
            <NoteList data={notes} />
          </View>
        </Layout>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing.large,
    height: '100%',
  },
})
