import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List, Divider } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  console.log(restaurant);
  const [breakfastExpanded, setBreakfastExpanded] = React.useState(false);
  const [lunchExpanded, setLunchExpanded] = React.useState(false);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [drinksExpanded, setDrinksExpanded] = React.useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Meals">
          <List.Accordion
            title="Brakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <Divider />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Burger w/ Fries" />
            <Divider />
            <List.Item title="Steak Sandwich" />
            <Divider />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Spaghetti Bolognese" />
            <Divider />
            <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
            <Divider />
            <List.Item title="Steak Frites" />
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Coffee" />
            <Divider />
            <List.Item title="Tea" />
            <Divider />
            <List.Item title="Modelo" />
            <Divider />
            <List.Item title="Coke" />
            <Divider />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
