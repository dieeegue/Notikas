import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import { Texto } from "../Texto/Texto";

export const Note = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Texto estilo="montserratBold" size="medium">
          Comprarse el Rust
        </Texto>
        <Texto>
          Me tengo que comprar el Rust porque es un juego maravilloso que de
          verdad me gusta, no como el Valorant. La comunidad es mucho mejor, no
          son niños de 10 años... Pero bueno, nos puede gustar igualmente, es
          divertido de jugar... Ya le he metido bastantes más horas asique bien
        </Texto>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    minWidth: 100,
    minHeight: 150,
    borderRadius: 25,
    marginBottom: 20,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    gap: 6,
  },
});
