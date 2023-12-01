import React from 'react'
import { FlatList, Pressable, View } from 'react-native'
import theme from '../../../../theme'
import { Note } from '../Note/Note'
import { Note as NoteModel } from '../../domain/models/Note'

type Props = {
  data: NoteModel[] | undefined
}

type ItemProps = {
  title: string
  content: string
  color: string
  createdAt: string
  isFavorite: boolean
}

const handlePressItem = () => {
  console.log('pressed')
}

const Item = ({ title, content, color, createdAt, isFavorite }: ItemProps) => (
  <View style={{ borderRadius: 10, overflow: 'hidden', flex: 1 / 2.1 }}>
    <Pressable
      android_ripple={{ color: theme.colors.primary, foreground: true }}
      onPress={() => handlePressItem()}
    >
      <Note title={title} content={content} createdAt={createdAt} />
    </Pressable>
  </View>
)

export const NoteList: React.FC<Props> = ({ data }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        numColumns={2}
        overScrollMode="auto"
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ gap: theme.spacing.medium }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            content={item.content}
            color={item.color}
            createdAt={item.createdAt}
            isFavorite={item.isFavorite}
          />
        )}
      />
    </View>
  )
}
