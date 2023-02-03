import React, { useContext } from "react";
import { Text, Button } from "react-native-paper";

import { AuthContext } from "../../../services/auth/auth.context";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthContext);
  return (
    <SafeArea>
      <Text>Settings Screen</Text>
      <Button title="Log out" onPress={() => onLogout()}>
        Log out
      </Button>
    </SafeArea>
  );
};
