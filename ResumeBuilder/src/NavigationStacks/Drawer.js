import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import MyResumeScreen from '../HomeScreens/MyResumeScreen';
import Heading from '../updationScreen/Heading';
const Drawer=createDrawerNavigator();
 
  ResumeStack=()=>{
      return(
        <Drawer.Navigator>
          <Drawer.Screen name="My Resume" component={MyResumeScreen}></Drawer.Screen>
          <Drawer.Screen name="Heading" component={Heading}></Drawer.Screen>
        </Drawer.Navigator>
      )
  }


  export default ResumeStack;