import React from "react";
import { Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";

export const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <Text>Hello World 2</Text>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          LOGIN
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="mail"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            REGISTER
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
