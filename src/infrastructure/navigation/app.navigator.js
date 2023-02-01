import React from "react";
import { Text } from "react-native-paper";

//NOTE: Tab Navigation Imports
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

//NOTE: Navigation
function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings Screen</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

const routeName = {
  Restaurants: "md-restaurant",
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

//Allows for more Complex Navigation
/* function renderIcons({ route }) {
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
} */

export const AppNavigator = () => {
  return (

      <Tab.Navigator screenOptions={NavIcons}>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>

  );
};
