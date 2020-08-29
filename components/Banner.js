import React from "react";
import { Image, Dimensions, TouchableOpacity, Animated } from "react-native";
import { Icon, Text, Button } from "react-native-elements";
import Carousel from "react-native-banner-carousel";

export default class Banner extends React.Component {
  BannerWidth = Dimensions.get("window").width;
  BannnerHeight = 180;

  images = [
    "https://www.kaaltv.com/apimages/ap9c754833eae142348cefc4f912c8b56f.jpg",
    "https://news.cornell.edu/sites/default/files/styles/full_size/public/2020-08/0827_peer2.jpg?itok=QEp57ruv",
    "https://covid.cornell.edu/_assets/img/meta/coronavirus-highres.jpg",
  ];

  renderPage(image, index) {
    return (
      <TouchableOpacity onPress={}>
        <Image
          style={{
            width: this.BannerWidth - 35,
            height: this.BannnerHeight,
            alignSelf: "center",
          }}
          source={{ uri: image }}
          Button
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Carousel autoplay loop index={0} pageSize={this.BannerWidth}>
        {this.images.map((image, index) => this.renderPage(image, index))}
      </Carousel>
    );
  }
}
