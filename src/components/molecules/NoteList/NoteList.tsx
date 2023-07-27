import React from "react";
import { Note, Note as NoteModel } from "../../atoms/Note/Note";
import { FlatList, View } from "react-native";

type Props = {
  data: NoteModel[];
};

type ItemProps = {
  title: string;
  notePreview: string;
};

const Item = ({ title, notePreview }: ItemProps) => (
  <Note title={title} notePreview={notePreview} />
);

export const NoteList: React.FC<Props> = ({ data }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        data={data}
        overScrollMode="never"
        renderItem={({ item }) => (
          <Item title={item.title} notePreview={item.notePreview} />
        )}
      />
    </View>
  );
};
