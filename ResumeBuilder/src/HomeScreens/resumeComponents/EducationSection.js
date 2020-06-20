import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import Education from "./Education";
import Section from './Section';
class EducationSection extends Component {
  render() {
    console.log('---in education section====')
    console.log(this.props)
    return (
        <Section title="Education">
          {
            this.props.education.map((edu)=>{
              return(
              <Education education={edu}/>
              )
            })
          }
          {/* <Education /> */}
        </Section>
    );
  }
}
export default EducationSection;
