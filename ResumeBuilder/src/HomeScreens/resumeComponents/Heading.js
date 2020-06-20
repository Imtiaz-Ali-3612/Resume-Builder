import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';
class Heading extends Component {
  
  render() {
    console.log(this.props.heading)
    var { name ,mobile ,email,linkedIn}=this.props.heading;
    return (
      <View
        style={{
          // borderBottomWidth: 1,
          padding: 15,
          
          flex: 1,
         
          // flexDirection: "row"
        }}
      >
        <View style={{ flex: 1,alignSelf:"center"}}>
          <Text style={{ fontSize: 50, fontWeight: "bold"}}>{name}</Text>
        </View>

        <View style={{ borderTopWidth:0.5,borderColor:"rgba(255,255,255,0.2)",width:"100%",padding:5, borderColor:"black"}}>
          <View>
            <View style={{ paddingTop:10,paddingBottom:8,flexDirection:'row'}}>
               <Icon name="mobile-alt" size={20}> </Icon><Text style={{paddingLeft:5,fontSize:18}}>{mobile}</Text>  
           </View>
           {/* envelope */}
           <View style={{ paddingBottom:8,flexDirection:'row'}}>
               <Icon name="envelope" size={20}> </Icon><Text style={{paddingLeft:5,fontSize:18}}>{email}</Text>  
           </View>
           {/* linkedin */}
           <View style={{ flexWrap:'wrap',flex:1,paddingBottom:8,flexDirection:'row'}}>
             <View style={{flexDirection:'row',flexGrow:1,flex:1}}>
               <Icon name="linkedin" size={20}> </Icon><Text style={{paddingLeft:5,fontSize:18}}>{linkedIn}</Text>  
               </View>
           </View>

            {/* <Text>{linkedIn}</Text> */}
          </View>
        </View>
      </View>
    );
  }
}
export default Heading;
