import React from "react";
import { FlatList, View } from "react-native";
import { Chip } from "../Chip/Chip";
import { Chip as ChipModel } from "../../domain/models/Chip";
import { Color } from "../../../../theme";

type Props = {
  data: ChipModel[];
};

type ItemProps = {
  text: string;
  backgroundColor: Color;
};

const Item = ({ text, backgroundColor }: ItemProps) => (
  <Chip backgroundColor={backgroundColor} text={text} />
);

export const ChipList: React.FC<Props> = ({ data }) => {
  return (
    <View>
      <FlatList
        style={{ marginBottom: 20 }}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        renderItem={({ item }) => (
          <Item text={item.text} backgroundColor={item.backgroundColor} />
        )}
      />
    </View>
  );
};
