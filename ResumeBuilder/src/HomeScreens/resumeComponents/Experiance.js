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
          flexDirection: "row",
          marginBottom:5
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{job_title}</Text>
          <Text style={{fontStyle:"italic"}}>{from} - {to}</Text>

        </View>
        <View style={{ flexDirection: "row-reverse", flex: 1 }}>
          <View style={{justifyContent:"flex-end"}}>
            
          <Text>{details}</Text>

          </View>
        </View>
      </View>
    );
  }
}
export default Experiance;
