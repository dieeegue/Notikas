import React from "react";
import { View, StyleSheet } from "react-native";
import { Texto } from "../Texto/Texto";
import moment from "moment";
import "moment/locale/es";

export const CurrentDate = () => {
  return (
    <View style={styles.dateContainer}>
      <Texto estilo="montserratLight">{`${getCurrentDay()}, `}</Texto>
      <Texto estilo="montserratBold">{getLocaleDate()}</Texto>
    </View>
  );

  function getCurrentDay() {
    const day = `${moment().locale("es").format("dddd")}`;
    return day;
  }

  function getLocaleDate() {
    const fecha = `${moment().locale("es").format("D [de] MMMM")}`;
    return fecha;
  }
};

const styles = StyleSheet.create({
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
