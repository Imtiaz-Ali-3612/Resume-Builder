import React,{Component} from 'react'

import { TextInput,Modal,TouchableOpacity,ActivityIndicator,Image,View,Text,StyleSheet,ScrollView} from 'react-native'
import { connect } from 'react-redux';
import {deleteEducationInfo} from '../../Redux/actions/educationActions';
import Icon from 'react-native-vector-icons/FontAwesome5'


const EducationSection=(props)=>{
    console.log(props)
    return(
        <View style={styles.box}>
            <View style={{paddingLeft:20}}>
                <Text style={{fontSize:40,fontWeight:'bold'}}> {props.education.school} </Text>
                <View style={{paddingLeft:10}}>
                    <Text style={{fontSize:20,fontStyle:'italic'}}>{props.education.from} - {props.education.to}</Text>
                    <Text style={{fontSize:20,fontStyle:'italic'}}>{props.education.title}</Text>
                    <Text style={{fontSize:20,fontStyle:'italic'}}>{props.education.grade}</Text>
                </View>
            </View>
        <View style={{flexDirection:'row-reverse',padding:10}}>
            <TouchableOpacity 
                onPress={()=>{
                    props.deleteEducation({token:props.token.token,id:props.education.education_id})
                    
                }}
            >
                <Icon name="trash-alt" size={30} color="red"></Icon>
            </TouchableOpacity>
        </View>
    </View>
    )
}
const mapStateToProps = state => ({
 
    token: state.token,
    // heading:state.resume,
    // education:state.education
  });
  
  
  const mapDispatchToProps = dispatch => ({
        deleteEducationInfo:(data)=>dispatch(deleteEducationInfo(data))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EducationSection);

const styles=StyleSheet.create({
    box:{
        // borderWidth:2,
        marginTop:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5
        ,flex:1,backgroundColor:'#5DADE2',padding:5,paddingTop:20,flexDirection:'column'
      }
    
})