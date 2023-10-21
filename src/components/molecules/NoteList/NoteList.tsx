import React from "react";
import { Note, Note as NoteModel } from "../../atoms/Note/Note";
import { FlatList, View } from "react-native";

type Props = {
  data: NoteModel[];
};

type ItemProps = {
  title: string;
  content: string;
  preview: string;
  createdAt: string;
};

const Item = ({ title, preview, content, createdAt }: ItemProps) => (
  <Note title={title} preview={preview} content={content} createdAt={createdAt} />
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
          <Item title={item.title} preview={item.preview} content={item.content} createdAt={item.createdAt} />
        )}
      />
    </View>
  );
};
