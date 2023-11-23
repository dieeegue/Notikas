import React from "react";
import { View, StyleSheet } from "react-native";
import { Texto } from "../../../../common/Texto/Texto";
import theme, { Color } from "../../../../theme";

type Props = {
  backgroundColor: Color;
  text: string;
};

export const Chip: React.FC<Props> = ({ backgroundColor, text }) => {
  const chipStyles = [
    styles.chipContainer,
    styles.pastelGreen,
    backgroundColor === "pastelOrange" && styles.pastelOrange,
    backgroundColor === "pastelYellow" && styles.pastelYellow,
    backgroundColor === "pastelPurple" && styles.pastelPurple,
  ];

  return (
    <View style={{ display: "flex", flexDirection: "row", marginRight: 8 }}>
      <View style={chipStyles}>
        <Texto estilo="montserratBold" size="base" color="white">
          {text}
        </Texto>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    display: "flex",
    alignSelf: "center",
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
  pastelGreen: {
    backgroundColor: theme.colors.pastelGreen,
  },
  pastelYellow: {
    backgroundColor: theme.colors.pastelYellow,
  },
  pastelOrange: {
    backgroundColor: theme.colors.pastelOrange,
  },
  pastelPurple: {
    backgroundColor: theme.colors.pastelPurple,
  },
});
