import React,{Component} from 'react'

import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

import isValid from "../config/validation";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { connect } from 'react-redux';
import { postSignup } from '../Redux/actions/actions';

class SignUpScreen extends Component{
    state = {
        formDate: {
          email: {
            value: "",
            isValid: true
          },
          password: {
            value: "",
            isValid: true
          },
          confirmPassword: {
            value: "",
            isValid: true
          },
          valid: false
        },
        message: ""
      };
      onChangeText = (name, text) => {
        var formDate = this.state.formDate;
        formDate[name].value = text;
        var valid = isValid(name, text,this.state.formDate);
        formDate[name].isValid = valid;
        console.log(formDate.email.isValid && formDate.password.isValid)
        valid = formDate.email.isValid && formDate.password.isValid;
        this.setState({ formDate: formDate, valid: valid });
      };
      signUp = (data) => {
        console.log('-------Signup----')
        console.log(data)
        this.props.postSignup(data);
            // .then(() => {
        this.props.navigation.navigate('SignIn');
      };
      beforeSubmit=()=>{
          var form=this.state.formDate;
          return form.email.isValid && form.password.isValid && form.confirmPassword.isValid;
            
      }
      submit = () => {
        var formDate = this.state.formDate;
        console.log(formDate)
        if (this.beforeSubmit()) {
          console.log(formDate);
          var data={email:formDate.email.value,password:formDate.password.value}
          this.signUp(data)
          // this.props.navigation.navigate('My Resume');
        }
        else{
          this.setState({message:"Enter Valid credentials"})
        }
      };
      render() {
        return (
          <View style={styles.container}>
              <View style={styles.box}>
            <View style={styles.textInputView}>
            <CustomTextInput
              placeholder="Enter Email"
              style={[styles.textInputStyle,this.state.formDate.email.isValid ? ({borderColor:'green'}):({borderColor:'red',borderRadius:40})]}
              onChangeText={text => this.onChangeText("email", text)}
            />
            </View>
            <View style={styles.textInputView}>
              <CustomTextInput
                placeholder="Enter password"
                secureTextEntry={true}
                style={[styles.textInputStyle,this.state.formDate.password.isValid ? ({borderColor:'green'}):({borderColor:'red',borderRadius:40})]}
                onChangeText={text => this.onChangeText("password", text)}
              />
            </View>
            <View style={styles.textInputView}>
              <CustomTextInput
                placeholder="Confirm password"
                secureTextEntry={true}
                style={[styles.textInputStyle,this.state.formDate.confirmPassword.isValid ? ({borderColor:'green'}):({borderColor:'red',borderRadius:40})]}
                onChangeText={text => this.onChangeText("confirmPassword", text)}
              />
            </View>
            <View style={styles.textInputView}>
            <CustomButton
              onClick={() => this.submit()}
            //   disabled={!this.state.formDate.valid}
              style={styles.buttonStyle}
            >
              <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:18}}>Sign up</Text>
            </CustomButton>
            </View>
            <Text>{this.state.message}</Text>
            
            </View>
          </View>
        );
      }
}
const styles=StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    padding:20,
    // backgroundColor:'#69bdd2'
    backgroundColor:'#f7f3ff'
    // #eef5fd
},
box:{
  shadowOpacity:1000,
  width:'100%',
  padding:40,
  // borderRadius:60,
  // backgroundColor:'#69bdd2',
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
      

},
textInputStyle:{
    textAlign:"center",
    fontSize:20,
    color:'black'
},
textInputView:{
    paddingBottom:15,
    alignSelf:"center",
    width:"90%"
},
buttonStyle:{
  padding:5,
  marginTop:10,
  elevation:10,
  backgroundColor:'#5DADE2'    
}

})
const mapStateToProps = state => ({
  token: state.token,
});


const mapDispatchToProps = dispatch => ({
  postSignup: (data) => dispatch(postSignup(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);