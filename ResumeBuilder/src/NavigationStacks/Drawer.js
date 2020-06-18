import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import MyResumeScreen from '../HomeScreens/MyResumeScreen';
import Profile from '../updationScreen/Profile';
import Experiance from '../updationScreen/Experiance';
import Education from '../updationScreen/Education';
import Projects from '../updationScreen/Projects';
import Icon from 'react-native-vector-icons/FontAwesome5';
// Icon=()=>(       <Icon name="home" size={25}  color="#5DADE2" />)

import Pro from '../updationScreen/pro';
const Drawer=createDrawerNavigator();
 
  ResumeStack=()=>{
      return(
        <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#f7f3ff',
          width: 240,
        }}
        >
          <Drawer.Screen name="Home"

             options={{
              title: 'Home',
              drawerIcon:()=>(       <Icon name="home" size={25}  color="#5DADE2" />)
            }}  
          component={MyResumeScreen}></Drawer.Screen>
          <Drawer.Screen 
            options={{
              title: 'Profile',
              drawerIcon:()=>(       <Icon name="user" size={25}  color="#5DADE2" />)
            }}  
            name="Profile" component={Pro}></Drawer.Screen>
          <Drawer.Screen 
            options={{
              title: 'Education',
              drawerIcon:()=>(       <Icon name="book-open" size={25}  color="#5DADE2" />)
            }}  
            name="Education" component={Education}></Drawer.Screen>
          <Drawer.Screen 
             options={{
              title: 'Experiance',
              drawerIcon:()=>(       <Icon name="medal" size={25}  color="#5DADE2" />)
            }}  
            name="Experiance" component={Experiance}></Drawer.Screen>
          <Drawer.Screen 
             options={{
              title: 'Projects',
              drawerIcon:()=>(       <Icon name="file-code" size={25}  color="#5DADE2" />)
            }}  
            name="Projects" component={Projects}></Drawer.Screen>
         
        </Drawer.Navigator>
      )
  }


  export default ResumeStack;