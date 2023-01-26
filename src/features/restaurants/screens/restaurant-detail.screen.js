import React from "react";
import { Text } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const { name } = route.params;
  console.log(name);
  return <Text>{name}</Text>;
};
