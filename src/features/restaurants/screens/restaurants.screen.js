//NOTE: NPM Packages
import React, { useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-view";

//NOTE: Components
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";

//NOTE: Services
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";

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

export const RestaurantsScreen = ({ navigation }) => {
  //Opens the Context for the Component
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaProvider>
      <SafeArea>
        <Search />
        {isLoading ? (
          <LoadingList />
        ) : (
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
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
