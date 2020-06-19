import React, { Component } from "react";
import {
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";
import Heading from "./resumeComponents/Heading";
import IntroductionSection from "./resumeComponents/IntroductionSection";
import EducationSection from "./resumeComponents/EducationSection";
import ExperianceSection from "./resumeComponents/ExperianceSection";
import SkillSection from "./resumeComponents/SkillSection";
import ProjectSection from './resumeComponents/ProjectSection';
import { connect } from 'react-redux';
import { getResumeEducation} from '../Redux/actions/educationActions';
import { getResumeExperiance} from '../Redux/actions/experianceActions';
import { getResumeProject} from '../Redux/actions/projectActions';
import {getResumeHeading } from '../Redux/actions/resumeActions';

class GenerateResume extends Component {
  check=()=>{
      console.log('================check==================')
    var {heading,education,experiance,project}=this.props;
    if(heading.loading && education.loading && experiance.loading && project.loading){
        return true;
    }else{

        return false;
    }
  }
  render() {
      console.log(this.props)
      var {heading,education,experiance,project,token}=this.props;
      
    // if(!this.check() ){  
        var token=token.token;
        return(
        heading.loading ?  ()=>{
          this.props.getResumeHeading(token)
          return (
            <ActivityIndicator>

            </ActivityIndicator>
          )
        }:
      
        experiance.loading ? ()=> {
          
          this.props.getResumeExperiance(token)
          return (
            <ActivityIndicator>

            </ActivityIndicator>
          )
        }:
        project.loading ? ()=>{
          this.props.getResumeProject(token)
          return (
            <ActivityIndicator>

            </ActivityIndicator>
          )
       
        }
        :
        education.loading ? ()=>{
          
          
          this.props.getResumeEducation(token) 
          return (
            <ActivityIndicator>

            </ActivityIndicator>
          )
        }:
    // return(
    //   <View>
    //       <ActivityIndicator></ActivityIndicator>
    //   </View>
    // )

    // }else{
    
    // return (
    //    this.check() ? 
    //     (
    //       <View>
    //         <ActivityIndicator></ActivityIndicator>
    //       </View>
    //       ):(
            
        
      <ScrollView>
        <Heading heading={heading.heading} />
        <IntroductionSection introduction={heading.heading.introduction}/>
        <EducationSection  education={education.education}/>
        <ExperianceSection experiance={experiance.experiance}/>
        <ProjectSection project={project.project}></ProjectSection>
        {/* <SkillSection  /> */}
      </ScrollView>
    // )
    );
  }
}
// }
const mapStateToProps = state => ({
  token: state.token,
  heading:state.resume,
  education:state.education,
  experiance:state.experiance,
  project:state.project
});


const mapDispatchToProps = dispatch => ({
//   postEducation: (data) => dispatch(postEducation(data)),
  getResumeEducation:(data)=>dispatch(getResumeEducation(data)),
  getResumeExperiance:(data)=>dispatch(getResumeExperiance(data)),
  getResumeProject:(data)=>dispatch(getResumeProject(data)),
  getResumeHeading:(data)=>dispatch(getResumeHeading(data))
//   deleteEducationInfo:(data)=>dispatch(deleteEducationInfo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(GenerateResume);