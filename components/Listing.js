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
        Price: "0",
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
        Item: "Pants",
        Price: "0",
        Image:
          "https://cdn.shopify.com/s/files/1/0838/4441/products/cigarette-pants_black_USPA0258_11320_087_bfba9ef4-a41c-49ae-bec4-f15943546630_grande.jpg?v=1581623204",
        Description: "Size large",
        Poster: "uid_1",
      },
      {
        Item: "Charger",
        Price: 10,
        Image:
          "https://i5.walmartimages.com/asr/52a2df80-98ec-4e1b-9cfc-71a68d7575b3_1.4fbf81e4bfa56bc8feffa82b5b15ca83.jpeg",
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
