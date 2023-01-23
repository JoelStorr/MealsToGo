import React, { useContext } from "react";
import { Searchbar, ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList, Platform } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-view";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";

const isAndroid = Platform.OS === "android";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingList = styled(ActivityIndicator).attrs({
  size: 50,
  animating: true,
  color: MD2Colors.blue800,
})`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  //Opens the Context foer the Component
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaProvider>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>

        {isLoading ? (
          <LoadingList />
        ) : (
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              console.log(item);
              return <RestaurantInfoCard restaurant={item} />;
            }}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16, marginTop: 16 }}
          />
        )}
      </SafeArea>
    </SafeAreaProvider>
  );
};
