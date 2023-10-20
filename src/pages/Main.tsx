import React, { useEffect, useState } from "react";
import { Layout } from "../components/atoms/Layout/Layout";
import { Texto } from "../components/atoms/Texto/Texto";
import { View, StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Note } from "../components/atoms/Note/Note";
import { Chip } from "../models/Chip";
import { ChipList } from "../components/molecules/ChipList/ChipList";
import { CurrentDate } from "../components/atoms/CurrentDate/CurrentDate";
import { NoteList } from "../components/molecules/NoteList/NoteList";
import { StatusBar } from "expo-status-bar";
import * as SQLite from 'expo-sqlite'

const chips: Chip[] = [
  {
    backgroundColor: "pastelGreen",
    text: "Juegos 🎮",
  },
  {
    backgroundColor: "pastelYellow",
    text: "Música 🎸",
  },
  {
    backgroundColor: "pastelOrange",
    text: "Amor ♥️",
  },
  {
    backgroundColor: "pastelPurple",
    text: "Tareas ✏️",
  },
  {
    backgroundColor: "pastelGreen",
    text: "Otra cosa 💀",
  },
];
const notes: Note[] = [
  {
    title: "Una nota maravillosa",
    notePreview: "Con una descripción no menos encantadora",
  },
  {
    title: "Otra nota maravillosa",
    notePreview: "Con una descripción no menos encantadora",
  },
  {
    title: "Una nota totalmente única",
    notePreview: "Con una descripción no menos encantadora",
  },
  {
    title: "Una increible nota",
    notePreview: "Con una descripción no menos encantadora",
  },
  {
    title: "Una nota sin igual",
    notePreview: "Con una descripción no menos encantadora",
  },
  {
    title: "Una nota maravillosa",
    notePreview: "Con una descripción no menos encantadora",
  },
];

const db = SQLite.openDatabase('db.notikasDB')

export const Main = () => {
  const [dbnotes, setDbnotes] = useState([]);
  
  useEffect(() => {
    db.transaction(tx => {
      // TODO es de tipo text pero realmente es un toISOString (concretamente un ISO8601)
      tx.executeSql('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, preview TEXT, createdAt TEXT)')
    })
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Layout>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.headerTitle}>
              <CurrentDate />
              <Texto estilo="montserratExtraBold" size="heading">
                Mis notas
              </Texto>
            </View>
            <View style={styles.buttonsContainer}>
              <Pressable
                android_ripple={{ color: theme.colors.primary }}
                style={styles.menuButton}
              >
                <MaterialIcons name="add" size={23} />
              </Pressable>
              <Pressable
                android_ripple={{ color: theme.colors.primary }}
                style={styles.menuButton}
              >
                <Ionicons name="menu" size={23} />
              </Pressable>
            </View>
          </View>
          <ChipList data={chips} />
          <NoteList data={notes} />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: '100%'
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
    gap: 8,
  },
});
