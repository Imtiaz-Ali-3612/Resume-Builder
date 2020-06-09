/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignInScreen from './src/authScreens/SignInScreen';
import SignUpScreen from './src/authScreens/SignUpScreen';
import MyResumeScreen from './src/HomeScreens/MyResumeScreen';
import SettingsScreen from './src/HomeScreens/SettingsScreen'

const Stack = createStackNavigator();
const Tab=createBottomTabNavigator();
 class App extends Component {
   state={
     loggedIn:true,
   }
   render(){
  return (
    <NavigationContainer>
      
      {!this.state.loggedIn ? (
       <Stack.Navigator initialRouteName="SignIn">
         <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
      
       </Stack.Navigator>
      ):(
          <Tab.Navigator>
          <Tab.Screen name="My Resume" component={MyResumeScreen}></Tab.Screen>
          <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
    }
};

export default App;
