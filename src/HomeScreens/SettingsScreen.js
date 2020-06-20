import React,{Component} from 'react'

import Icon from 'react-native-vector-icons/FontAwesome5';
import {View,StyleSheet,Text,TextInput,Picker} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import { setResumeOrder } from '../Redux/actions/resumeOrderActions';

// import Section from './resumeComponents/Section'

Section =(props)=>{
    return(
        
        <View style={styles.section}>
            <View style={{padding:10}}>
                <Text style={{fontSize:20}}>{props.title}</Text>
            </View>
            <View style={{paddingRight:10}}>
                  <Picker
                        selectedValue={props.selectedValue}
                        style={{  width:200 }}
                        onValueChange={(itemValue, itemIndex) => props.onChangeText(props.title,itemValue)}
                    >
                        <Picker.Item label="Education Section" value="Education Section" />
                        <Picker.Item label="Introduction Section" value="Introduction Section" />
                        <Picker.Item label="Experiance Section" value="Experiance Section" />
                        <Picker.Item label="Project Section" value="Project Section" />
                    </Picker>
                    
            </View>
        </View>
    )
}


class SettingsScreen extends Component{
    state={
        order:
        {
          section:[1,2,3,4]
        },
        setOrder:{},
        value:{
            1:"Introduction Section",
            2:"Education Section",
            3:"Experiance Section",
            4:"Project Section"

        }
        // numbers:[]

      }
    onChangeText=(index,value)=>{
        var order=this.state.value;
        order[index]=value;
        // var numbers=this.state.numbers;
        // numbers.append(value)
        // console.log(value,text)
        // order[text]=value;
        // console.log(order)
        this.setState({value:order})
        console.log(this.state.value)
    }
    onSubmit=()=>{
        console.log(this.state.value)
        var val=this.state.value
        var data=[]
        for ( i in val){
            data[i-1]=val[i]
        }
        
        var order={data}
        console.log(data)
        this.props.setResumeOrder(data)
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
                                <Section title={sec} selectedValue={this.state.value[sec]} onChangeText={this.onChangeText}></Section>
                                </View>
                            )
                        })
                }
                <TouchableOpacity 
                    onPress={()=>this.onSubmit()}
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
const mapStateToProps = state => ({
    token: state.token,
  });
  
  
  const mapDispatchToProps = dispatch => ({
        setResumeOrder: (data)=>dispatch(setResumeOrder(data))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);