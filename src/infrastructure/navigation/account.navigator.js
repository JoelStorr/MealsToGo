import React from "react";
import { Text, View } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

function MainScreen() {
  return (
    <View>
      <Text>Account Screen</Text>
    </View>
  );
}

function LoginScreen() {
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
}

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" commponent={MainScreen} />
      <Stack.Screen name="Login" commponent={LoginScreen} />
    </Stack.Navigator>
  );
};
