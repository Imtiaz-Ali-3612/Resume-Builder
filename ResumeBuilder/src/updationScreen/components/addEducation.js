import React,{Component} from 'react'

import { TextInput,TouchableOpacity,Image,View,Text,StyleSheet,ScrollView} from 'react-native'
import { connect } from 'react-redux';
import {getResumeEducation,postEducation} from '../../Redux/actions/educationActions';
// import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
class AddEducation extends Component{
    state = {
        formDate: {
            school:"",
            grade:"",
            title:""
        },
        message: ""
      };
      onChangeText = (name, text) => {
        var formDate = this.state.formDate;
        formDate[name] = text;
        this.setState({ formDate: formDate});
      };
      
      submit = () => {
        var formDate = this.state.formDate;
        console.log(formDate)
        var data={       
            token:this.props.token.token,
            school:formDate.school,
            grade:formDate.grade,
            title:formDate.title
    
         }
         console.log(data)
         console.log('------here-----')
         this.props.postEducation(data)
         this.props.closeModal();
          // this.updateDetails(data)
      };
      render() {
        console.log('-----in heading update ----')
        console.log(this.props.heading)
        var heading=this.props.heading;
        return (
              <View style={{ paddingTop: 3,backgroundColor:"#ffffff" }}> 
                  <View style={{flex:1,flexDirection:'row-reverse'}}>
                        <TouchableOpacity
                          onPress={this.props.closeModal}
                        >
                            <Icon name="times" size={25} color="red"></Icon>

                        </TouchableOpacity>
                  </View>
                  <View style={{flex:4}}>
                  <View style={{ backgroundColor: "#8cbbf1" }}> 
                    <Text style={{ textAlign: "center",fontSize:30, fontWeight: "bold" ,color:'#fff'}}> Enter Details </Text> 
                  </View>
                  <View style={{ padding: 4 }}> 
                    {/* <Text style={{color:""}}>My Information </Text> */}
                  <View style={styles.textInputView}> 
                    <TextInput
                    placeholder=" Degree "
                    onChangeText={(value)=>this.onChangeText("title",value)}  
                    style={styles.TextInput} /> 
                  </View> 
                  <View style={styles.textInputView}>
                    <TextInput
                      placeholder="School Name"
                    onChangeText={(value)=>this.onChangeText("school",value)} 
                     style={styles.TextInput} /> 
                  </View> 
                  <View style={styles.textInputView}> 
                    <TextInput 
                      placeholder="Grade / Percentage"
                      onChangeText={(value)=>this.onChangeText("grade",value)}
                      style={styles.TextInput} /> 
                  </View> 
                </View>
                <View style={styles.updateButtonView}>
                <TouchableOpacity
                 style={styles.updateButton}
                 onPress={()=>this.submit()}
                >
                  <Text style={{fontSize:30,textAlign:'center',color:'white'}}> Add </Text>
                </TouchableOpacity>
                </View>
                </View>
              </View>
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
    alignItems:'center',
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
    heading:state.resume,
    education:state.education
  });
  
  
  const mapDispatchToProps = dispatch => ({
    postEducation: (data) => dispatch(postEducation(data)),
    getResumeEducation:(data)=>dispatch(getResumeEducation(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddEducation);