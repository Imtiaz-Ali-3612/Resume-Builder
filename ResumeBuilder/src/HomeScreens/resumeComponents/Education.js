import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

class Education extends Component {
  render() {
    console.log('---in education section---')
    console.log(this.props)
    var {school,title,to,from,grade}=this.props.education;
    return (
      <View
        style={{
          padding: 5,
          flex: 1,
          // flexDirection: "row"
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{school}</Text>
        </View>
        <View  >
          <View>
            
            <Text>{title}</Text>
            <Text>{from} - {to}</Text>
            <Text>{grade}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Education;
