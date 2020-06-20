import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

class Project extends Component {
  render() {
    console.log('---in project section---')
    console.log(this.props)
    var {title,description}=this.props.project;
    return (
      <View
        style={{
          padding: 5,
          flex: 1,
          flexDirection: "row"
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
        </View>
        <View style={{ flexDirection: "row-reverse", flex: 1 }}>
          <View>
            <Text>{description}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Project;
