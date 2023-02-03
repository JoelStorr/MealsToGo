import React from "react";

//NOTE: Context Mount
import { RestaurantsContextProvider } from "../../services/restaurant/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

//NOTE: Tab Navigation Imports

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

//NOTE: Navigation

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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
