import React,{Component} from 'react';
import {View,Text,Image,ActivityIndicator} from 'react-native';

class SplashScreen extends Component{
    render(){

      return(
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Image
                style={{width:'80%',height:250}}
              source={{uri:"https://cdn.dribbble.com/users/36126/screenshots/2228873/rb-logo.png"}}
              ></Image>
              <ActivityIndicator size='large'></ActivityIndicator>
          </View>
        )  
    }
  }

  export default SplashScreen;