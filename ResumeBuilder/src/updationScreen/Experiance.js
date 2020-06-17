import React,{Component} from 'react'

import { TextInput,TouchableOpacity,Image,View,Text,StyleSheet,ScrollView} from 'react-native'
import App from '../../App';
import { connect } from 'react-redux';
import {  getResumeHeading, postHeading } from '../Redux/actions/resumeActions';

class Experiance extends Component{
    state = {
        formDate: {
          name:"",
          mobile: "",
          linkedIn: "",
          introduction:""
        },
        message: ""
      };
      onChangeText = (name, text) => {
        var formDate = this.state.formDate;
        formDate[name] = text;
        this.setState({ formDate: formDate});
      };
      
      updateDetails = (data) => {
        this.props.postLogin(data);
        console.log('----signIn--')
        console.log(this.props.token)        
        if(!this.props.token.error){
        
        }else{
          this.setState({message:'Failed to login'})
        }
    };
    componentWillMount(){
      console.log('----component will mount ----')
      this.props.getResumeHeading(this.props.token.token);
    }
      submit = () => {
        var formDate = this.state.formDate;
        console.log(formDate)
        var data={       
            token:this.props.token.token,
            name:formDate.name,
            mobile: formDate.mobile,
            linkedIn: formDate.linkedIn,
            introduction:formDate.introduction
         }
         this.props.postHeading(data)
          // this.updateDetails(data)
      };
      render() {
        var heading=this.props.heading;
        return (
              <ScrollView style={{ flex: 1, paddingTop: 3,backgroundColor:"#ffffff" }}> 
                <Text> Education</Text>
              </ScrollView>
              );
      }
}
const styles=StyleSheet.create({
  tinyLogo: { width: 50, height: 50 }, 
  TextInput: { 
    padding: 4,
     borderWidth: 1,
    //  selectionColor: '#428AF8', 
     borderTopLeftRadius:15,
      borderBottomRightRadius:15, }, 
  textInputView:{paddingTop:5},
  updateButtonView:{
    flex:1,alignItems:'center',
    paddingTop:20
    
  },
  updateButton:{
    borderBottomLeftRadius:20,
    backgroundColor:'#ff4242',
    borderTopRightRadius:20,
    borderWidth:1,
    width:'60%'

  }
})

const mapStateToProps = state => ({
  token: state.token,
  heading:state.resume
});


const mapDispatchToProps = dispatch => ({
  postHeading: (data) => dispatch(postHeading(data)),
  getResumeHeading:(token)=>dispatch(getResumeHeading(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Experiance);