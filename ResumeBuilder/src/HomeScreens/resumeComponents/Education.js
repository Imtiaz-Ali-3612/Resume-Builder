import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

class Education extends Component {
  render() {
    return (
      <View
        style={{
          padding: 5,
          flex: 1,
          flexDirection: "row"
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Imtiaz Ali</Text>
        </View>
        <View style={{ flexDirection: "row-reverse", flex: 1 }}>
          <View>
            <Text>0315-3854801</Text>
            <Text>imtiaz.ali.3612@gmail.com</Text>
            <Text>www.linkedIn.com/imtiaz.ali.3612</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Education;
