import React from "react";
import { Text } from "react-native";
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";
import {SafeArea} from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  console.log(restaurant);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
