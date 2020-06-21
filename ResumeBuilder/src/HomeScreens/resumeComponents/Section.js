import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import Education from "./Education";
class Section extends Component {
  render() {
    return (
      <View >
        <View style={{ paddingTop: 5 , paddingBottom:5 }}>
          <Text
            style={{
              // borderWidth: 1,
              backgroundColor:"#5DADE2",
              color:"white",
              borderRadius: 5,
              paddingLeft:10,
              fontSize: 20,
              // textAlign: "center",
              fontWeight: "bold",
              textAlign:"center",
              letterSpacing:2,
              padding:5
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
