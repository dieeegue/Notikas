import React from 'react'
import { Pressable, View } from 'react-native'
import theme, { FileColor } from '../../../../theme'
import { NoteCard } from '../Note/Note'
import { Note } from '../../../../../db/schema'
import MasonryList from '@react-native-seoul/masonry-list'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../../../../../type'

type Props = {
  data: Note[]
}

type ItemProps = {
  id: number
  title: string
  color: FileColor
  createdAt: string
  isFavorite: boolean
}

const Item: React.FC<ItemProps> = ({ id, title, createdAt, color }) => {
  const navigation = useNavigation<RootStackNavigationProp>()

  const handlePressItem = (id: number) => () => {
    navigation.navigate('EditNote', { noteId: id })
  }

  return (
    <View
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        margin: 5,
      }}
    >
      <Pressable
        android_ripple={{ color: theme.colors.primary, foreground: true }}
        onPress={handlePressItem(id)}
      >
        <NoteCard title={title} color={color} createdAt={createdAt} />
      </Pressable>
    </View>
  )
}

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
              id={note.id}
              title={note.title}
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
