import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerShown={false} headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => {
          return <Text>Hello World</Text>;
        }}
      />
    </RestaurantStack.Navigator>
  );
};
