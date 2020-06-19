import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

class Experiance extends Component {
  render() {
    console.log('---in experiance section---')
    console.log(this.props)
    var {job_title,from,to,details}=this.props.experiance;
    return (
      <View
        style={{
          padding: 5,
          flex: 1,
          flexDirection: "row"
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{job_title}</Text>
        </View>
        <View style={{ flexDirection: "row-reverse", flex: 1 }}>
          <View>
            
            <Text>{from} - {to}</Text>
            <Text>{details}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Experiance;
