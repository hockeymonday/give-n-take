import React from "react";
import { Image, Dimensions, TouchableOpacity, Animated } from "react-native";
import { Icon, Text, Button } from "react-native-elements";
import Carousel from "react-native-banner-carousel";
import img1 from "../assets/11.png";
import img2 from "../assets/22.png";
import img3 from "../assets/33.png";

export default class Banner extends React.Component {
  BannerWidth = Dimensions.get("window").width;
  BannnerHeight = 220;

  images = [img1, img2, img3];

  renderPage(image, index) {
    return (
      <TouchableOpacity onPress={this.props.click}>
        <Image
          style={{
            width: this.BannerWidth - 20,
            height: this.BannnerHeight,
            alignSelf: "center",
          }}
          source={image}
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
