import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList, StatusBar, Platform } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-view";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
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

        <RestaurantList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
          ]}
          renderItem={() => <RestaurantInfoCard />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16, marginTop: 16 }}
        />
      </SafeArea>
    </SafeAreaProvider>
  );
};
