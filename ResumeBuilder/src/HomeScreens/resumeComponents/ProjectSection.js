import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import Project from "./Project";
import Section from "./Section";

class ProjectSection extends Component {
  render() {
    return (
      <Section title="Projects">
        {/* <Education /> */}
        {/* <Education /> */}
        {
            this.props.project.map((proj)=>{
              return(
              <Project project={proj}/>
              )
            })
          }

      </Section>
    );
  }
}
export default ProjectSection;
