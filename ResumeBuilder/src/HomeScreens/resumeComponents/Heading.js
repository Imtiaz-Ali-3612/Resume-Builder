import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

class Heading extends Component {
  
  render() {
    console.log(this.props.heading)
    var { name ,mobile ,email,linkedIn}=this.props.heading;
    return (
      <View
        style={{
          // borderBottomWidth: 1,
          padding: 5,
          flex: 1,
          flexDirection: "row"
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ fontSize: 50, fontWeight: "bold"}}>{name}</Text>
        </View>
        <View style={{ flexDirection: "row-reverse", flex: 1, borderLeftWidth:1 ,paddingTop:5}}>
          <View>
            <Text>{mobile}</Text>
            <Text>{email}</Text>
            <Text>{linkedIn}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Heading;
