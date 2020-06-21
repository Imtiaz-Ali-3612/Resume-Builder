import React,{Component} from 'react'

import { TextInput,ActivityIndicator,TouchableOpacity,Image,View,Text,StyleSheet,ScrollView} from 'react-native'
import { connect } from 'react-redux';
import { loading, getResumeHeading, postHeading } from '../Redux/actions/resumeActions';

class Heading extends Component{
    state = {
        formDate: {
          name:"",
          mobile: "",
          linkedIn: "",
          introduction:""
        },
        message: ""
      };
      onChangeText = (name, text) => {
        var formDate = this.state.formDate;
        formDate[name] = text;
        this.setState({ formDate: formDate});
      };
      submit = () => {
        var heading=this.props.heading.heading;
        var formDate = this.state.formDate;
        console.log(formDate)
        if(formDate.name.length==0){
          formDate.name=heading.name;
        }
        if(formDate.mobile.length==0){
          formDate.mobile=heading.mobile;
        }
        if(formDate.linkedIn.length==0){
          formDate.linkedIn=heading.linkedIn;
        }
        if(formDate.introduction.length==0){
          formDate.introduction=heading.introduction;
        }
        
        
        var data={       
            token:this.props.token.token,
            name:formDate.name,
            mobile: formDate.mobile,
            linkedIn: formDate.linkedIn,
            introduction:formDate.introduction
         }
        //  this.props.loading(true)
      
         this.props.postHeading(data)
         this.props.navigation.navigate('Home')

          // this.updateDetails(data)
      };
      // componentWillMount=()=>{
      //   this.setState({formDate:this.props.heading.heading})
      //   console.log('===============profile========')
      //   console.log(this.state.formDate)
      // }
      // getData=()=>{
      //   this.props.getResumeHeading(this.props.token.token)
      //   if(!this.props.heading.loading){
      //     this.setState({formDate:this.props.heading.heading})
      //   }
      // }
      
      render() {
        
        console.log('-----in heading update --')
        console.log(this.props.heading)
        var heading=this.props.heading.heading;
        if(this.props.heading.loading){
            // console.log(this.[rp[s.]])
            this.props.getResumeHeading(this.props.token.token)
            return(
              <View>
                  <ActivityIndicator></ActivityIndicator>
              </View>
            )
        }else{
          console.log('--------else-----')
          console.log(this.props.heading.heading)
          var heading=this.props.heading.heading;
      
        return(
         this.props.heading.loading  ? (
           
          <View>
            
            {console.log('-------------here in loaading-----------')}
            <ActivityIndicator size="large"></ActivityIndicator>
          </View>
    
         ):(
          
            // <View style={{padding:20}}></View>
              <ScrollView style={{ padding:10,flex: 1,backgroundColor:"#ffffff" }}> 
                  {console.log(this.props.heading)}
                  <View style={{paddingBottom:40}}>
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

                    <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold'}}>My Information </Text>
                  <View style={styles.textInputView}> 
                    <TextInput
                      placeholderTextColor="black"
                      placeholder={ heading.name===null ? "Enter Your name": heading.name.length!=0 ? (heading.name):"Enter Your name"}
                      // value={this.state.formDate.name}
                      onChangeText={(value)=>this.onChangeText("name",value)}  

                   style={styles.TextInput} /> 
                  </View> 
                  <View style={styles.textInputView}>
                    <TextInput
                      placeholderTextColor="black"
                      placeholder={ heading.mobile===null ? "Enter Your Mobile": heading.mobile.length!=0 ? (heading.mobile):"Enter Your mobile"}
                      // value={this.state.formDate.mobile}
                      // placeholder={'Enter your mobile'}
                      onChangeText={(value)=>this.onChangeText("mobile",value)} 
                      style={styles.TextInput} /> 
                  </View> 
                  <View style={styles.textInputView}> 
                    <Text  style={styles.TextInput}>{heading.email}</Text> 
                  </View> 
                  <View style={styles.textInputView}> 
                    <TextInput 
                      placeholderTextColor="black"

                      // value={this.state.formDate.linkedIn}
                      placeholder={"Enter your LinkedIn"}
                      placeholder={heading.linkedIn===null ? "Enter Your LinkedIn" : heading.linkedIn.length!=0 ? (heading.linkedIn):"Enter URL of linked account"}
                      onChangeText={(value)=>this.onChangeText("linkedIn",value)} 
                     multiline style={styles.TextInput} /> 
                  </View> 
                  <View style={styles.textInputView}> 
                    <TextInput 
                      placeholderTextColor="black"
                      // value={this.state.formDate.introduction}
                      // placeholder={" Write your objective "}
                      numberOfLines={4}
                      placeholder={ heading.name===null ? "Introduce yourself": heading.introduction.length!=0 ? (heading.introduction):"Introduce yourself"}
                      onChangeText={(value)=>this.onChangeText("introduction",value)} 
                     multiline style={styles.TextInput} /> 
                  </View> 
                </View>
                <View style={styles.updateButtonView}>
                <TouchableOpacity
                 style={styles.updateButton}
                 onPress={()=>this.submit()}
                >
                  <Text style={{fontSize:18,textAlign:'center',color:'white'}}> Update </Text>
                </TouchableOpacity>
                </View>
                </View>
              </ScrollView>
              // <View>
              //   <Text>head</Text>
              // </View>
          ));
         }
        }
      }

const styles=StyleSheet.create({
  tinyLogo: { width: 50, height: 50 }, 
  TextInput: { 
    borderRadius:10,

    padding: 9,
     borderWidth: 1,
     margin:10
    //  selectionColor: '#428AF8', 
    //  borderTopLeftRadius:15,
      // borderBottomRightRadius:15,
     }, 
  textInputView:
  {
    // paddingTop:5
  },
  updateButtonView:{
    flex:1,
    alignItems:'center',
    paddingTop:20,
    width:"100%"
    
  },
  updateButton:{
    // borderBottomLeftRadius:20,
    backgroundColor:'#41A950',
    // borderTopRightRadius:20,
    padding:6,
    borderWidth:1,
    width:'90%'

  }
})

const mapStateToProps = state => ({
  token: state.token,
  heading:state.resume
});


const mapDispatchToProps = dispatch => ({
  loading: (data)=>dispatch(loading(data)),
  postHeading: (data) => dispatch(postHeading(data)),
  getResumeHeading:(token)=>dispatch(getResumeHeading(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Heading);