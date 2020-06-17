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
import Icon from 'react-native-vector-icons/FontAwesome5';

import MainButton from './components/mainScreenButton';
import { removeUserToken } from '../Redux/actions/actions';
class MyResumeScreen extends Component{
    logout=()=>{
        this.props.removeUserToken();
    }
    onClick=(screen)=>{
        this.props.navigation.navigate(screen)
        console.log(screen)
    }
    render(){
        return(
            <View style={styles.main}>

                {/* <TouchableOpacity style={{backgroundColor:'#ff4242'}}
                onPress={()=>this.logout()}>
                    
                </TouchableOpacity> */}
                <ScrollView >
                  <View style={{flex:1,alignItems:'center'}}>
                        <Image
                            style={{width:'50%',height:150,resizeMode:'stretch'}} 
                            source={require('../../static/images/logo.png')}
                        ></Image>
                   </View>
                   <View style={styles.buttonContainer}>
                        <MainButton onPress={()=>this.onClick('Profile')}>
                                <Icon name="user" size={40}  color="#5DADE2" />
                               <Text style={{fontSize:15,color:'#5DADE2'}}>Profile</Text>
                        </MainButton>
                        <MainButton onPress={()=>this.onClick('Education')}>
                            <Icon name="book-open" size={40}  color="#5DADE2" />
                            <Text style={{color:'#5DADE2',fontSize:15,}}>Education</Text>
                        </MainButton>
                        <MainButton onPress={()=>this.onClick('Experiance')}>
                            <Icon name="medal" size={40}  color="#5DADE2" />
                            <Text style={{color:'#5DADE2',fontSize:15,}}>Experiance</Text>
                        </MainButton>
                        <MainButton onPress={()=>this.onClick('Projects')}>
                            <Icon name="file-code" size={40}  color="#5DADE2" />
                            <Text style={{color:'#5DADE2',fontSize:15}}>Projects</Text>
                        </MainButton>


                        <MainButton 
                            style={{width:'80%'}}
                            onPress={()=>this.onClick('GenerateResume')}
                        >
                            <Icon name="address-card" size={30}  color="#5DADE2" />
                            <Text style={{color:'#5DADE2',fontSize:20}}>Generate Resume</Text>
                        </MainButton>
                        <MainButton
                        style={{width:'80%'}}
                        onPress={()=>this.logout()}>
                            <Icon name="sign-out-alt" size={30}  color="red" />
                            <Text style={{color:'red',fontSize:20}}>Logout</Text>
                        </MainButton>
                        
                        
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
    button:{
        width:'30%',
        padding:10,
        paddingBottom:10
    },
    buttonContainer : {
        flexWrap:"wrap",
        alignItems:"flex-start",
        justifyContent:"center",
        //justifyContent:"space-between",
        flexDirection:"row",
    },
      main:{
        backgroundColor:'#f7f3ff',
        padding:20,
        flex:1
      }
      ,box:{
        padding:10,borderRadius:15,backgroundColor:'#ffffff',flex:1,alignItems:'center',alignContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
            }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyResumeScreen);