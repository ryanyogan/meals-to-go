import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { ResuaurantsScreen } from "./src/features/restaruants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResuaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
