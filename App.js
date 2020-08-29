import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Constants from "expo-constants";
import HomeScreen from "./screens/HomeScreen";
import BannerInfo from "./screens/BannerInfo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator headerShown={false} initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Banner"
            component={BannerInfo}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
  },
});
