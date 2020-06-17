import React,{Component} from 'react'

import { TextInput,TouchableOpacity,Image,View,Text,StyleSheet,ScrollView} from 'react-native'
import App from '../../App';
import { connect } from 'react-redux';
import {  getResumeHeading, postHeading } from '../Redux/actions/resumeActions';

class Heading extends Component{
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
      this.setState({formDate:this.props.heading.heading})
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
        console.log('-----in heading update ----')
        console.log(this.props.heading)
        var heading=this.state.formDate;
        return (
              <ScrollView style={{ flex: 1, paddingTop: 3,backgroundColor:"#ffffff" }}> 
                  <View style={{ backgroundColor: "#8cbbf1" }}> 
                    <Text style={{ textAlign: "center",fontSize:30, fontWeight: "bold" ,color:'#fff'}}> About Me</Text> 
                  </View>
                  <View style={{ flex: 1, alignItems: "center" }}>
                     <Image 
                      style={{ width: 100, height: 190 }} 
                      source={{ uri: "https://img.icons8.com/plasticine/2x/user.png" }} 
                      /> 
                  </View> 
                  <View style={{ padding: 4 }}> 
                    <Text style={{color:""}}>My Information </Text>
                  <View style={styles.textInputView}> 
                    <TextInput
                    placeholder="Enter Your Name"
                    onChangeText={(value)=>this.onChangeText("name",value)}  
                    value={heading.name} style={styles.TextInput} /> 
                  </View> 
                  <View style={styles.textInputView}>
                    <TextInput
                      placeholder="Enter Your Mobile"
                    onChangeText={(value)=>this.onChangeText("mobile",value)} 
                     value={heading.mobile} style={styles.TextInput} /> 
                  </View> 
                  <View style={styles.textInputView}> 
                    <Text  style={styles.TextInput}>{heading.heading.email}</Text> 
                  </View> 
                  <View style={styles.textInputView}> 
                    <TextInput 
                      placeholder={"Enter URL of linked account"}
                      onChangeText={(value)=>this.onChangeText("linkedIn",value)} 
                    value={heading.introduction} multiline style={styles.TextInput} /> 
                  </View> 
                  <View style={styles.textInputView}> 
                    <TextInput 
                      placeholder="Place your Introduction"
                      onChangeText={(value)=>this.onChangeText("introduction",value)} 
                    value={heading.introduction} multiline style={styles.TextInput} /> 
                  </View> 
                </View>
                <View style={styles.updateButtonView}>
                <TouchableOpacity
                 style={styles.updateButton}
                 onPress={()=>this.submit()}
                >
                  <Text style={{fontSize:30,textAlign:'center',color:'white'}}> update </Text>
                </TouchableOpacity>
                </View>
              </ScrollView>
              // <View>
              //   <Text>head</Text>
              // </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Heading);