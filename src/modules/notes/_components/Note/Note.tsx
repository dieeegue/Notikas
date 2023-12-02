import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from '../../../../theme'
import { Texto } from '../../../../common/Texto/Texto'

export type Note = {
  title: string
  content: string
  createdAt: string
  color: string
}

export const Note: React.FC<Note> = ({ title, color }) => {
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.notes[color] }]}
    >
      <View style={styles.content}>
        <Texto estilo="montserratMedium" size="medium">
          {title}
        </Texto>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 110,
    borderRadius: 15,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    gap: 6,
  },
})
