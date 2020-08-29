import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Icon, Text, Button } from "react-native-elements";
import Emblem from "../assets/logo-cornell.png";

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          icon={<Icon type="entypo" name="menu" size={26} color="#fff"></Icon>}
          buttonStyle={{ backgroundColor: "transparent" }}
          onPress={() => {
            this.props.hamburger;
          }}
        ></Button>

        <Text h4 h4Style={{ color: "#fff" }}>
          Give+Take
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.account;
          }}
        >
          <Image
            source={{
              uri:
                "https://rossszabo.com/wp-content/uploads/2017/04/logo-cornell.png",
            }}
            style={{ width: 35, height: 35, marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 52,
    flexDirection: "row", // row
    backgroundColor: "#9C2E24",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TopBar;
