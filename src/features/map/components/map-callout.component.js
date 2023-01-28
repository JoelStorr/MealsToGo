import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const RestaurantName = styled.Text`
  font-size: 20px;
`;

const RestaurantImage = styled.Image`
  height: 80px;
  border-radius: 5px;
`;
export const MapCallout = ({ restaurant }) => {
  const { photos } = restaurant;

  return (
    <View>
      <RestaurantImage source={{ uri: photos[0] }} />
      <RestaurantName>{restaurant.name}</RestaurantName>
    </View>
  );
};
