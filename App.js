import React from "react";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";

//NOTE: React Context


//NOTE: Navigation
import { Navigation } from "./src/infrastructure/navigation";
import { AuthContextProvider } from "./src/services/auth/auth.context";
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar hidden={false} barStyle="dark-content" />
    </>
  );
}
