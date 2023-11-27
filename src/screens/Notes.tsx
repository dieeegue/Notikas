import React, { useEffect, useState } from 'react'
import { Layout } from '../common/Layout/Layout'
import { Texto } from '../common/Texto/Texto'
import { View, StyleSheet } from 'react-native'
import theme from '../theme'
import { StatusBar } from 'expo-status-bar'
import * as SQLite from 'expo-sqlite'
import { Logs } from 'expo'
import { NoteList } from '../modules/notes/_components/NoteList/NoteList'
import { Note } from '../modules/notes/_components/Note/Note'
import { DatabaseService } from '../database/Database'
import { MainHeader } from '../modules/notes/_components/Header/MainHeader'
import { SafeAreaView } from 'react-native-safe-area-context'

Logs.enableExpoCliLogging()

export const Notes = () => {
  const [notes, setNotes] = useState<Note[] | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  const databaseService = new DatabaseService(
    SQLite.openDatabase('db.notikasDB')
  )

  useEffect(() => {
    try {
      const onLoad = () => {
        databaseService.query(
          'CREATE TABLE IF NOT EXISTS notes (?, ?, ?, ?, ?);',
          [
            'id INTEGER PRIMARY KEY AUTOINCREMENT',
            'title TEXT',
            'content TEXT',
            'preview TEXT',
            'createdAt TEXT',
          ]
        )
        loadNotes()
      }
      onLoad()
      setIsLoading(false)
    } catch (error) {
      setHasError(true)
    }
  }, [])

  const loadNotes = () => {
    databaseService.selectAllFromTable('notes', (_, result) => {
      setNotes(result.rows._array)
    })
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
