import React from 'react'
import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import theme, { Color } from '../../../../theme'
import { Folder as FolderModel } from '../../domain/models/Folder'
import { Folder } from '../Folder/Folder'
import { Texto } from '../../../../common/Texto/Texto'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  data: FolderModel[] | undefined
}

const Item = () => <Folder />

export const FolderList: React.FC<Props> = ({ data }) => {
  if (!data) {
    return (
      <View style={styles.noNotesContainer}>
        <MaterialIcons name="folder" size={40} />
        <View>
          <Texto estilo="montserratBold">No tienes carpetas</Texto>
          <Texto>Prueba a crear una!</Texto>
        </View>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        style={{ marginBottom: 20 }}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        renderItem={() => <Item />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  noNotesContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: 200,
    height: 125,
    backgroundColor: theme.colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
  },
})
