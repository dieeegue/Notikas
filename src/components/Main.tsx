import React from "react";
import { Layout } from "./Layout/Layout";
import { Texto } from "./Texto/Texto";
import { View, StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Note } from "./Note/Note";

export const Main = () => {
  return (
    <Layout>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitle}>
          <View style={styles.dateContainer}>
            <Texto estilo="montserratLight">Martes, </Texto>
            <Texto estilo="montserratBold">25 de Julio</Texto>
          </View>
          <Texto estilo="montserratExtraBold" size="heading">
            Mis notas
          </Texto>
        </View>
        <Pressable
          android_ripple={{ color: theme.colors.primary }}
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={23} />
        </Pressable>
      </View>
      <Note />
      <Note />
      <Note />
      <View style={styles.buttonsContainer}>
        <Pressable
          android_ripple={{ color: theme.colors.primary }}
          style={styles.addButton}
        >
          <MaterialIcons name="add" size={40} color={theme.colors.white} />
        </Pressable>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    display: "flex",
    justifyContent: "flex-start",
  },
  menuButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 43,
    height: 43,
    backgroundColor: theme.colors.secondary,
    borderRadius: 7,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  addButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
