import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import Banner from "./components/Banner";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar></TopBar>
        <SearchBar></SearchBar>
        <View style={{ height: 15 }}></View>
        <Banner></Banner>
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
