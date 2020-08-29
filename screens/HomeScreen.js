import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import Constants from "expo-constants";
import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar></TopBar>
        <SearchBar></SearchBar>
        <View style={{ height: 15 }}></View>
        <Banner
          click={() => {
            this.props.navigation.navigate("Banner");
          }}
        ></Banner>
      </View>
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
