import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import Heading from "../resumeComponents/Heading";
import IntroductionSection from "../resumeComponents/IntroductionSection";
import EducationSection from "../resumeComponents/EducationSection";
import ExperianceSection from "../resumeComponents/ExperianceSection";
import SkillSection from "../resumeComponents/SkillSection";

import {connect} from 'react-redux';
import { removeUserToken } from '../../Redux/actions/actions';
class GenerateResume extends Component{
    logout=()=>{
        this.props.removeUserToken();
    }
    render(){
        return(
            <View style={{padding:4,backgroundColor:'green'}}>
                <Text> MyResumeScreen Screen</Text>
                <TouchableOpacity 
                onPress={()=>this.logout()}>
                    <Text>Logout</Text>
                </TouchableOpacity>
                <ScrollView style={{backgroundColor:'white'}}>
                    <Heading />
                    <IntroductionSection />
                    <EducationSection />
                    <ExperianceSection />
                    <SkillSection />
                </ScrollView>

            </View>
        )
    }
}

const mapStateToProps = state => ({
    token: state.token,
  });
  
  
  const mapDispatchToProps = dispatch => ({
    removeUserToken: () => dispatch(removeUserToken()),
    // setUserToken:(token)=>dispatch(setUserToken(token))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(GenerateResume);