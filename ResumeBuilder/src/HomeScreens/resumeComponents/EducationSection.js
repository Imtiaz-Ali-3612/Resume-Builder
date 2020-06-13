import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import Education from "./Education";
import Section from './Section';
class Introduction extends Component {
  render() {
    return (
        <Section title="Education">
          <Education />
          <Education />
        </Section>
    );
  }
}
export default Introduction;
