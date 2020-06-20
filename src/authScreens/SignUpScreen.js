import React,{Component} from 'react'

import {View,Text,StyleSheet} from 'react-native'

import isValid from "../config/validation";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { postSignup } from '../Redux/actions/actions';

class SignUpScreen extends Component{
    state = {
        formDate: {
          email: {
            value: "a@b.cc",
            isValid: true
          },
          password: {
            value: "12345678",
            isValid: true
          },
          valid: false
        },
        message: ""
      };
      onChangeText = (name, text) => {
        var formDate = this.state.formDate;
        formDate[name].value = text;
        var valid = isValid(name, text);
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
            // })
            // .catch((error) => {
            //     this.setState({ error })
            // })
    };
      beforeSubmit=()=>{
          var form=this.state.formDate;
          return form.email.isValid && form.password.isValid;
            
      }
      submit = () => {
        var formDate = this.state.formDate;
        console.log(formDate)
        if (this.beforeSubmit()) {
          console.log(formDate);
          data={email:formDate.email.value,password:formDate.password.value}
          this.signUp(data)
          // this.props.navigation.navigate('My Resume');
        }
      };
      render() {
        return (
          <View style={styles.container}>
              <View style={{shadowOpacity:1000,width:'100%',padding:40,borderRadius:60,backgroundColor:'white'}}>
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
            <CustomButton
              onClick={() => this.submit()}
            //   disabled={!this.state.formDate.valid}
              style={styles.buttonStyle}
            >
              <Text style={{textAlign:'center',fontSize:30}}>Login</Text>
            </CustomButton>
            </View>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('SignUp')}
            >
             <Text>   Make A New Account > </Text>
            </TouchableOpacity>
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
        backgroundColor:'#69bdd2'
        // #eef5fd
    },
    textInputStyle:{
        textAlign:"center",
        fontSize:20,
        color:'black'
    },
    textInputView:{
        paddingBottom:30,
        alignSelf:"center",
        width:"80%"
    },
    buttonStyle:{
        
    }
})
const mapStateToProps = state => ({
  token: state.token,
});


const mapDispatchToProps = dispatch => ({
  postSignup: (data) => dispatch(postSignup(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);