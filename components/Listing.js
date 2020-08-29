import React from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button, Text, ListItem } from "react-native-elements";

export default class Listing extends React.Component {
  state = {
    data: [
      {
        Item: "Shirt",
        Price: "Free",
        Image: "https://gd.image-gmkt.com/li/134/590/1129590134.g_520-w_g.jpg",
        Description: "Size large",
        Poster: "uid_1",
      },
      {
        Item: "Microphone",
        Price: 20,
        Image:
          "https://static.bhphoto.com/images/images2500x2500/1574693242_1297189.jpg",
        Description: "Like new!",
        Poster: "uid_2",
      },
      {
        Item: "Shirt",
        Price: "Free",
        Image: "https://gd.image-gmkt.com/li/134/590/1129590134.g_520-w_g.jpg",
        Description: "Size large",
        Poster: "uid_1",
      },
      {
        Item: "Microphone",
        Price: 20,
        Image:
          "https://static.bhphoto.com/images/images2500x2500/1574693242_1297189.jpg",
        Description: "Like new!",
        Poster: "uid_2",
      },
    ],
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "column",
              marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#E2E2E2",
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <Image
                style={styles.imageThumbnail}
                source={{ uri: item.Image }}
              />
              <Text style={styles.Title}>{item.Item}</Text>
              <Text style={styles.Price}>${item.Price}</Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 160,
    margin: 10,
  },
  Title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  Price: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
  },
});
