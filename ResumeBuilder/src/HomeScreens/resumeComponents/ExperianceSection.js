import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import Experiance from "./Experiance";
import Section from "./Section";

class ExperianceSection extends Component {
  render() {
    return (
      <Section title="Experiences">
        {/* <Education /> */}
        {/* <Education /> */}
        {
            this.props.experiance.map((exp)=>{
              return(
              <Experiance experiance={exp}/>
              )
            })
          }

      </Section>
    );
  }
}
export default ExperianceSection;
