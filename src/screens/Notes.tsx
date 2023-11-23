import React, { useEffect, useState } from "react";
import { Layout } from "../common/Layout/Layout";
import { Texto } from "../common/Texto/Texto";
import { View, StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Chip } from "../modules/notes/domain/models/Chip";
import { StatusBar } from "expo-status-bar";
import * as SQLite from "expo-sqlite";
import { Logs } from "expo";
import { ChipList } from "../modules/notes/_components/ChipList/ChipList";
import { NoteList } from "../modules/notes/_components/NoteList/NoteList";
import { Note } from "../modules/notes/_components/Note/Note";
import { CurrentDate } from "../modules/notes/_components/CurrentDate/CurrentDate";
import { DatabaseService } from "../database/Database";
import { RootStackNavigationProp } from "../../type";

Logs.enableExpoCliLogging();

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

export const Notes = ({ navigation }: RootStackNavigationProp) => {
  const [notes, setNotes] = useState<Note[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const databaseService = new DatabaseService(
    SQLite.openDatabase("db.notikasDB")
  );

  const onLoad = () => {
    databaseService.query("CREATE TABLE IF NOT EXISTS notes (?, ?, ?, ?, ?);", [
      "id INTEGER PRIMARY KEY AUTOINCREMENT",
      "title TEXT",
      "content TEXT",
      "preview TEXT",
      "createdAt TEXT",
    ]);
    loadNotes();
  };

  useEffect(() => {
    try {
      onLoad();
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
    }
  }, []);

  const loadNotes = () => {
    databaseService.selectAllFromTable("notes", (_, result) => {
      setNotes(result.rows._array);
    });
  };

  const handlePressAdd = () => {
    // databaseService.query(
    //   "INSERT INTO notes (title, preview, content, createdAt) values (?, ?, ?, ?);",
    //   [
    //     "Una nota cualquiera 🤍",
    //     "Y esta una vista previa cualquiera también jeje",
    //     "El contenido",
    //     "La fecha de creacion",
    //   ]
    // );
    // loadNotes();
    navigation.navigate("AddNote");
  };

  const handlePressMenu = () => {
    databaseService.query("DELETE FROM notes;", []);
    loadNotes();
  };

  if (isLoading) {
    return (
      <Layout>
        <Texto>Loading...</Texto>
      </Layout>
    );
  }

  if (hasError) {
    return (
      <Layout>
        <Texto>
          An error has occurred while trying to retrieve data from the database.
        </Texto>
      </Layout>
    );
  }

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
              <View
                style={{
                  alignSelf: "center",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Pressable
                  android_ripple={{ color: theme.colors.primary }}
                  style={styles.addButton}
                  onPress={handlePressAdd}
                >
                  <MaterialIcons
                    name="add"
                    size={23}
                    color={theme.colors.white}
                  />
                </Pressable>
              </View>
              <View
                style={{
                  alignSelf: "center",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Pressable
                  android_ripple={{ color: theme.colors.primary }}
                  style={styles.menuButton}
                  onPress={handlePressMenu}
                >
                  <Ionicons name="menu" size={23} />
                </Pressable>
              </View>
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
    height: "100%",
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
    backgroundColor: theme.colors.white,
    borderRadius: 10,
  },
  addButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 43,
    height: 43,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  addFAB: {
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
