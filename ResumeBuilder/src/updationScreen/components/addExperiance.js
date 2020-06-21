import React,{Component} from 'react'

import { TextInput,TouchableOpacity,Image,View,Text,StyleSheet,ScrollView} from 'react-native'
import { connect } from 'react-redux';
import {getResumeExperiance,postExperiance} from '../../Redux/actions/experianceActions';
// import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
class AddExperiance extends Component{
    state = {
        formDate: {
            job_title:'',
            from:'',
            to:'',
            details:'',
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
            job_title:formDate.job_title,
            from:formDate.from,
            to:formDate.to,
            details:formDate.details
         }
         console.log(data)
         console.log('------here-----')
         this.props.postExperiance(data)
    
         this.props.closeModal();
          // this.updateDetails(data)
      };
      render() {
        console.log('-----in experiance update ----')
        // console.log(this.props.heading)
        // var heading=this.props.heading;
        return (
              <ScrollView style={{ paddingTop: 3,backgroundColor:"#ffffff" }}> 
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
                    placeholder=" Job Title "
                    onChangeText={(value)=>this.onChangeText("job_title",value)}  
                    style={styles.TextInput} /> 
                  </View> 
                  <View style={styles.textInputView}>
                    <TextInput
                      placeholder=" Start Date "
                    onChangeText={(value)=>this.onChangeText("from",value)} 
                     style={styles.TextInput} /> 
                  </View> 
                  <View style={styles.textInputView}> 
                    <TextInput 
                      placeholder="End Date"
                      onChangeText={(value)=>this.onChangeText("to",value)}
                      style={styles.TextInput} /> 
                  </View> 
                  <View style={styles.textInputView}> 
                    <TextInput 
                      placeholder=" What was your experiance ?"
                      numberOfLines={4}
                      multiline
                      onChangeText={(value)=>this.onChangeText("details",value)}
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
    experiance:state.experiance
  });
  
  
  const mapDispatchToProps = dispatch => ({
    postExperiance: (data) => dispatch(postExperiance(data)),
    getResumeExperiance:(data)=>dispatch(getResumeExperiance(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddExperiance);