//NOTE: NPM Packages
import React, { useContext, useState } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-view";
//NOTE: Components
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourite/favourites-bar.component";
//NOTE: Services
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../components/restaurant-list.styles";

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
  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeArea>
        {isLoading && <LoadingList />}
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />

        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16, marginTop: 16 }}
        />
      </SafeArea>
    </SafeAreaProvider>
  );
};

//TODO: Fix Card Error with safe area when coming back from Restaurant detail Screen.
