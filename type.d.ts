import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Notes: undefined;
  AddNote: undefined;
};

export type RootStackNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  Notes,
  AddNote
>;
