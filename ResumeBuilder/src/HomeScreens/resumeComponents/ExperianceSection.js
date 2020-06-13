import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import Education from "./Education";
import Section from "./Section";
class ExperianceSection extends Component {
  render() {
    return (
      <Section title="Experiances">
        <Education />
        <Education />
      </Section>
    );
  }
}
export default ExperianceSection;
