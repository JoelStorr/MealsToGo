import { StatusBar as ExposStatusBar } from "expo-status-bar";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <ExpoStatusBar hidden={false} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text style={styles.text}>Search</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  text: {
    color: "white",
  },
  search: {
    backgroundColor: "green",
    padding: 16,
  },
  list: {
    flexGrow: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
