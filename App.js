import React from "react";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { ThemeProvider } from "styled-components/native";
import { Text } from "react-native-paper";

//NOTE: Tab Navigation Imports
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infostructure/theme";

import { SafeArea } from "./src/components/utility/safe-area.component";

//NOTE: API and Mock requests
import { restaurantRequest } from "./src/services/restaurant/restaurants.service";

//NOTE: Navigation
function RestaurantScreen() {
  return <RestaurantsScreen />;
}

function MapsScreen() {
  return (
    <SafeArea>
      <Text>Map Screen</Text>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings Screen</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

function renderIcons({ route }) {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Home") {
        iconName = focused
          ? "ios-information-circle"
          : "ios-information-circle-outline";
      } else if (route.name === "Settings") {
        iconName = focused ? "ios-list" : "ios-list-outline";
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
}

const routeName = {
  Restaurant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const NavIcons = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = routeName[route.name];

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

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
        <ExpoStatusBar hidden={false} barStyle="dark-content" />
        <NavigationContainer>
          <Tab.Navigator screenOptions={NavIcons}>
            <Tab.Screen name="Restaurant" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={MapsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
