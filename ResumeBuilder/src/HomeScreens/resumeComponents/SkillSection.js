import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import Education from "./Education";
import Section from './Section';
class SkillSection extends Component {
  render() {
    return (
        <Section title="Skills">
          <Education />
          <Education />
        </Section>
    );
  }
}
export default SkillSection;
