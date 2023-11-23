import React from "react";
import { Note, Note as NoteModel } from "../Note/Note";
import { FlatList, Pressable, View } from "react-native";
import theme from "../../../../theme";

type Props = {
  data: NoteModel[] | undefined; // TODO tiene que salir un mensaje cuando esté undefined
};

type ItemProps = {
  title: string;
  content: string;
  preview: string;
  createdAt: string;
};

const handlePressItem = () => {
  console.log("pressed");
};

const Item = ({ title, preview, content, createdAt }: ItemProps) => (
  <View style={{ borderRadius: 10, overflow: "hidden" }}>
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
);

export const NoteList: React.FC<Props> = ({ data }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        contentContainerStyle={{ gap: 15 }}
        showsVerticalScrollIndicator={false}
        data={data}
        overScrollMode="never"
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
  );
};
