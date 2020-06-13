import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import Education from "./Education";
class Section extends Component {
  render() {
    return (
      <View style={{ borderBottomWidth: 0.5 }}>
        <View style={{ paddingTop: 5, borderBottomWidth: 1 }}>
          <Text
            style={{
              // borderWidth: 1,
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderRadius: 5,
              width: "30%",
              paddingLeft:10,
              fontSize: 20,
              // textAlign: "center",
              fontWeight: "bold"
            }}
          >
            {this.props.title}
          </Text>
        </View>
        <View>{this.props.children}</View>
      </View>
    );
  }
}
export default Section;
