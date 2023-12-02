import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from '@Notikas/theme'
import { Texto } from '@Notikas/common/Texto/Texto'

export type Note = {
  title: string
  content: string
  createdAt: string
}

export const Note: React.FC<Note> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Texto estilo="montserratBold" size="medium">
          {title}
        </Texto>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.notes.pastelYellow,
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
