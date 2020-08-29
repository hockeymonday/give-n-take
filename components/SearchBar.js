import React from "react";
import { SearchBar } from "react-native-elements";
import Emblem from "../assets/logo-cornell.png";

export default class TopBar extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search For Something"
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={{
          backgroundColor: "#fff",
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
          marginTop: 5,
          height: 40,
          borderBottomColor: "transparent",
          borderTopColor: "transparent",
        }}
        inputContainerStyle={{ backgroundColor: "#E5E5E5", height: 40 }}
        round
      ></SearchBar>
    );
  }
}
