import React, { Component } from 'react'

import {ScrollView,Text,TouchableOpacity,View,Image} from 'react-native';
export default class EditProfile extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, paddingTop: 3,backgroundColor:"#ffffff" }}> 
            {console.log(this.props.heading)}
            <View style={{ backgroundColor: "#8cbbf1" }}> 
              <Text style={{ textAlign: "center",fontSize:30, fontWeight: "bold" ,color:'#fff'}}> About Me</Text> 
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
               <Image 
                style={{ width: 100, height: 190 }} 
                source={{ uri: "https://img.icons8.com/plasticine/2x/user.png" }} 
                /> 
            </View> 
            <View style={{ padding: 4 }}> 
              <Text style={{color:""}}>My Information </Text>
            <View style={styles.textInputView}> 
              <TextInput
                placeholderTextColor="black"
                // placeholder={ heading.name.length!=0 ? (heading.name):"Enter Your name"}
                value={this.state.formDate.name}
                onChangeText={(value)=>this.onChangeText("name",value)}  

             style={styles.TextInput} /> 
            </View> 
            <View style={styles.textInputView}>
              <TextInput
                placeholderTextColor="black"
                // placeholder={ heading.mobile.length!=0 ? (heading.mobile):"Enter Your mobile"}
                value={this.state.formDate.mobile}
                placeholder={'Enter your mobile'}
                onChangeText={(value)=>this.onChangeText("mobile",value)} 
                style={styles.TextInput} /> 
            </View> 
            <View style={styles.textInputView}> 
              <Text  style={styles.TextInput}>{heading.email}</Text> 
            </View> 
            <View style={styles.textInputView}> 
              <TextInput 
                placeholderTextColor="black"

                value={this.state.formDate.linkedIn}
                placeholder={"Enter your LinkedIn"}
                // placeholder={ heading.linkedIn.length!=0 ? (heading.linkedIn):"Enter URL of linked account"}
                onChangeText={(value)=>this.onChangeText("linkedIn",value)} 
               multiline style={styles.TextInput} /> 
            </View> 
            <View style={styles.textInputView}> 
              <TextInput 
                placeholderTextColor="black"
                value={this.state.formDate.introduction}
                placeholder={" Write your objective "}
                numberOfLines={4}
                // placeholder={ heading.introduction.length!=0 ? (heading.introduction):"Introduce yourself"}
                onChangeText={(value)=>this.onChangeText("introduction",value)} 
               multiline style={styles.TextInput} /> 
            </View> 
          </View>
          <View style={styles.updateButtonView}>
          <TouchableOpacity
           style={styles.updateButton}
           onPress={()=>this.submit()}
          >
            <Text style={{fontSize:30,textAlign:'center',color:'white'}}> update </Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
          )
    }
}
