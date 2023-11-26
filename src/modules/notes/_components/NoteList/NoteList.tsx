import React from 'react'
import { Note, Note as NoteModel } from '../Note/Note'
import { FlatList, Pressable, View } from 'react-native'
import theme from '../../../../theme'

type Props = {
  data: NoteModel[] | undefined
}

type ItemProps = {
  title: string
  content: string
  preview: string
  createdAt: string
}

const handlePressItem = () => {
  console.log('pressed')
}

const Item = ({ title, preview, content, createdAt }: ItemProps) => (
  <View style={{ borderRadius: 10, overflow: 'hidden', flex: 1 / 2.1 }}>
    <Pressable
      android_ripple={{ color: theme.colors.primary, foreground: true }}
      onPress={() => handlePressItem()}
    >
      <Note
        title={title}
        preview={preview}
        content={content}
        createdAt={createdAt}
      />
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
            preview={item.preview}
            content={item.content}
            createdAt={item.createdAt}
          />
        )}
      />
    </View>
  )
}
