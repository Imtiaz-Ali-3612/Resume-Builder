import React from 'react';
import {StyleSheet,TouchableOpacity,View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

const MainButton =(props)=>{
    return(
        <View style={[styles.button,props.style]}>
        <TouchableOpacity
            onPress={props.onPress}
        >

            <View style={styles.box}>
                {props.children}
            </View>
            </TouchableOpacity>

        </View>
    )    
}
const  styles=StyleSheet.create({
    button:{
        width:'40%',
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
  
export default MainButton;
