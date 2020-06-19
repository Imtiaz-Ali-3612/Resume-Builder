import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Section from './Section';
class Introduction extends Component {
  render() {
    return (
      <Section title='Introduction'> 
        <Text style={{ padding: 10 }}>
          {this.props.introduction}
        </Text>
      </Section>
    );
  }
}
export default Introduction;
