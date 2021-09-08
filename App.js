import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ResuaurantsScreen } from "./src/features/restaruants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <ResuaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
