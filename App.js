import { StatusBar } from "expo-status-bar";

import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabss from "./navigation/Tabss";

export default function App() {
  return (
    <NavigationContainer>
      <Tabss />
    </NavigationContainer>
  );
}
