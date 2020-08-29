import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-elements";
import Constants from "expo-constants";
import TopBar from "../components/TopBar";
import Logo from "../assets/Untitled-1.png";

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <TopBar></TopBar>
        <Text h4 h4Style={{ textAlign: "center", marginTop: 10 }}>
          About Us
        </Text>
        <Text style={{ margin: 10 }}>
          Give and Take is a mobile application that seeks to reduce waste and
          help members of the Cornell community that are struggling as a result
          of COVID-19. Our mission is to create a safe way to donate and
          exchange goods by utilizing designated drop-off locations on campus.
        </Text>
        <Image
          source={Logo}
          style={{ width: 190, height: 200, margin: 10, alignSelf: "center" }}
        />

        <Text h4 h4Style={{ textAlign: "center", marginTop: 10 }}>
          How We Are Keeping You Safe
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ margin: 10 }}>
              To keep your experience safe and positive and eliminate the risk
              of transmission of COVID-19, we are using sanitizing products with
              at least 60% ethanol as per the CDC recommendation to stop the
              spread of COVID-19 on surfaces. Items will also be held for the
              duration of the virus’s half-life on the surface, depending on the
              material.
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={{
                uri:
                  "https://stockdaymedia.com/wp-content/uploads/2020/05/handsanitizer-6d1b07f00f8e498e8168b055b5439b70.jpg",
              }}
              style={{ width: 190, height: 200, margin: 10 }}
            />
          </View>
        </View>
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
