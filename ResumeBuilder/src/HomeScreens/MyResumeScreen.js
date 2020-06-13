import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView
} from "react-native";
import {connect} from 'react-redux';
import { removeUserToken } from '../Redux/actions/actions';
class MyResumeScreen extends Component{
    logout=()=>{
        this.props.removeUserToken();
    }
    render(){
        return(
            <View style={styles.main}>
                {/* <View >
                    <Text style={{textAlign:'center'}}>  Resume Builder </Text>
                </View> */}

                <TouchableOpacity style={{backgroundColor:'#ff4242'}}
                onPress={()=>this.logout()}>
                    <Text style={{color:'#fff'}}>Logout</Text>
                </TouchableOpacity>
                <ScrollView style={{backgroundColor:'white'}}>
                  <View>
                        <Image
                            style={{width:'100%',height:200,resizeMode:'stretch'}} 
                            source={require('../../static/images/logo.png')}
                        ></Image>
                   </View>
                   <View style={{flex:1,paddingTop:20}}>
                       <View style={{padding:5}}>
                        <TouchableOpacity style={{backgroundColor:'#ff4242'}}>
                            <View>
                                <Text style={{color:'#fff',fontSize:25,textAlign:'center'}}> CONTACT > </Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style={{padding:5}}>
                  
                        <TouchableOpacity style={{backgroundColor:'#ff4242'}}>
                            <View>
                                <Text style={{color:'#fff',fontSize:25,textAlign:'center'}}> EDUCATION > </Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style={{padding:5}}>
                  
                        <TouchableOpacity style={{backgroundColor:'#5cc2f2'}}>
                            <View>
                                <Text style={{color:'#191ba9',fontSize:25,textAlign:'center'}}> EDUCATION > </Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style={{padding:5}}>
                  
                        <TouchableOpacity style={{backgroundColor:'#5cc2f2'}}>
                            <View>
                                <Text style={{color:'#191ba9',fontSize:25,textAlign:'center'}}> EDUCATION > </Text>
                            </View>
                        </TouchableOpacity>
                        </View>

                   </View>
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
const  styles=StyleSheet.create({
      main:{
        padding:4,
        flex:1,
        backgroundColor:'#fff'
      }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyResumeScreen);