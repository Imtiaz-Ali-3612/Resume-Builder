import React,{Component} from 'react'

import Icon from 'react-native-vector-icons/FontAwesome5';
import {View,StyleSheet,Text,TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Section from './resumeComponents/Section'

Section =(props)=>{
    return(
        
        <View style={styles.section}>
            <View style={{padding:10}}>
                <Text style={{fontSize:20}}>{props.title}</Text>
            </View>
            <View style={{paddingRight:10}}>
                <TextInput
                    style={{fontSize:20}}
                    keyboardType='numeric'
                    placeholder={"Enter Postion"}
                >
                    
                </TextInput>
            </View>
        </View>
    )
}


class SettingsScreen extends Component{
    state={
        order:
        {
          section:["Education Section","Introduction Section","Experiance Section","Project Section"]
        }
      }
    onChangeText=(text,value)=>{
        var sections=thos.state.order.section;
        sections[value]=text;
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#f7f3ff'}}>
                <View style={{alignItems:'center',paddingTop:40}}>
                    <Icon name="cogs" size={120} color="#5DADE2"></Icon>
                </View>
            <View style={styles.main}>
                
                {
                        this.state.order.section.map((sec)=>{
                            return(
                                <View style={{marginTop:10}}>
                                <Section title={sec} onChangeText={()=>this.onChangeText(text,value)}></Section>
                                </View>
                            )
                        })
                }
                <TouchableOpacity 
                    style={{...styles.section,marginTop:10,backgroundColor:'#5DADE2'}}
                >
                    <Text style={{fontSize:30}}> Change </Text>
                </TouchableOpacity>
            </View>
         </View>

        )
    }
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        
    },
    section:{
        width:'100%',
        backgroundColor:'#ffff',
        flexDirection:'row',
        // borderWidth:1,
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
export default SettingsScreen;