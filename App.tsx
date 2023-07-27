import { Text } from "react-native";
import { Main } from "./src/pages/Main";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "mrt-regular": require("./assets/fonts/mrt-regular.ttf"),
    "mrt-bold": require("./assets/fonts/mrt-bold.ttf"),
    "mrt-extraBold": require("./assets/fonts/mrt-extraBold.ttf"),
    "mrt-light": require("./assets/fonts/mrt-light.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Cargando...</Text>;
  }

  return <Main />;
}
