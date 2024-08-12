import React from 'react'
import { Pressable, View } from 'react-native'
import theme, { FileColor } from '../../../../theme'
import { NoteComponent } from '../Note/Note'
import { Note } from '../../../../../db/schema'
import MasonryList from '@react-native-seoul/masonry-list'

type Props = {
  data: Note[]
}

type ItemProps = {
  title: string
  content: string
  color: FileColor
  createdAt: string
  isFavorite: boolean
}

const handlePressItem = () => {
  console.log('pressed')
}

const Item = ({ title, content, color, createdAt, isFavorite }: ItemProps) => (
  <View
    style={{
      borderRadius: 10,
      overflow: 'hidden',
      margin: 5,
    }}
  >
    <Pressable
      android_ripple={{ color: theme.colors.primary, foreground: true }}
      onPress={() => handlePressItem()}
    >
      <NoteComponent
        title={title}
        color={color}
        content={content}
        createdAt={createdAt}
      />
    </Pressable>
  </View>
)

export const NoteList: React.FC<Props> = ({ data }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* TODO Use the method onEndReached to load more notes */}
      <MasonryList
        data={data}
        numColumns={2}
        overScrollMode="auto"
        refreshControl={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const note = item as Note
          return (
            <Item
              title={note.title}
              content={note.content}
              color={note.color}
              createdAt={note.createdAt}
              isFavorite={note.isFavorite}
            />
          )
        }}
      />
    </View>
  )
}
