import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme, { NoteColors } from '../../../../theme'
import { Texto } from '../../../../common/Texto/Texto'

export type Note = {
  title: string
  content: string
  createdAt: string
  color: NoteColors
}

const formatUTCDate = (_date: string) => {
  const date = new Date(_date)

  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export const Note: React.FC<Note> = ({ title, color, createdAt }) => {
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.notes[color] }]}
    >
      <View style={styles.content}>
        <Texto estilo="montserratMedium" size="medium">
          {title}
        </Texto>
        <Texto estilo="montserratLight" size="small">
          {formatUTCDate(createdAt)}
        </Texto>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 1,
    borderRadius: 15,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    gap: 6,
  },
})
