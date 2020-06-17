import React,{Component} from 'react'

import { TextInput,Modal,TouchableOpacity,Image,View,Text,StyleSheet,ScrollView} from 'react-native'
import App from '../../App';
import { connect } from 'react-redux';
// import {  getResumeHeading, postHeading } from '../Redux/actions/resumeActions';
import {getResumeEducation,postEducation} from '../Redux/actions/educationActions';
import Icon from 'react-native-vector-icons/FontAwesome5'
import AddEducation from './components/addEducation';

const EducationSection=(props)=>{
    return(
        <View style={styles.box}>
        <View style={{flex:4,alignContent:'center',}}>
            <Text style={{textAlign:'center',fontSize:25}}> {props.education.school} </Text>
        </View>
        <View style={{padding:4,flex:4}}>
            <Text style={{fontSize:20}}>Grade</Text>
            <Text style={{fontSize:20}}>Primary Education</Text>
        </View>
        <View style={{flex:1,alignItems:'center',flexDirection:'row-reverse'}}>
            <TouchableOpacity>
                <Icon name="times" size={40} color="red"></Icon>
            </TouchableOpacity>
        </View>
    </View>
    )
}


class Education extends Component{
    state = {
        addModal:false,
        education:[{
            school:'abc',
            grade:'A',
            title:'Primary'
        },{
            school:'abc',
            grade:'A',
            title:'Primary'
        },{
            school:'abc',
            grade:'A',
            title:'Primary'
        }],
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
      
      updateDetails = (data) => {
        this.props.postLogin(data);
        console.log('----signIn--')
        console.log(this.props.token)        
        if(!this.props.token.error){
        
        }else{
          this.setState({message:'Failed to login'})
        }
    };
    componentWillMount(){
      console.log('----component will mount Education ----')
    //   this.props.getResumeHeading(this.props.token.token);
        this.props.getResumeEducation(this.props.token.token)
        // console.log(this.props.education)
    }
    closeModal=()=>{
        this.setState({addModal:false})
    }
      submit = () => {
        var formDate = this.state.formDate;
        console.log(formDate)
        var data={       
            token:this.props.token.token,
            name:formDate.name,
            mobile: formDate.mobile,
            linkedIn: formDate.linkedIn,
            introduction:formDate.introduction
         }
         this.props.postHeading(data)
          // this.updateDetails(data)
      };
      render() {
          console.log('-----render education---')
          console.log(this.props.education)
        return (
            <View style={{flex:1,padding:10,backgroundColor:"#f7f3ff"}}>
                <View style={{flex:1,alignItems:'center'}}>
                    <Icon name="book-open" size={40}></Icon>
                    <Text style={{textAlign:'center',fontSize:30}}> Education Info</Text>
                </View>
                <View style={{borderWidth:1,flex:4}}>
                {/* {this.state.education.length==0  ? (<Text>You have not added any Education detail yet</Text>) :( */}
                    <ScrollView style={{ flex: 1, padding: 2,backgroundColor:"#ffffff" }}> 
                        {/* {
                            this.props.education.education.map((education)=>{
                                return (
                                    <EducationSection education={education}></EducationSection> */}
                                {/* )
                            })
                        }
            */}
                    </ScrollView>

                 {/* )} */}
                 </View>
                 <View style={{alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={()=>this.setState({addModal:true})}
                            style={{borderWidth:1,borderRadius:10,borderColor:'blue'}}
                        >
                            <Icon name="plus" size={50} color="blue" ></Icon>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.addModal}
                                onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                }}
                            >
                                <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                <AddEducation closeModal={()=>this.closeModal()}></AddEducation>
                             
                                </View>
                                </View>
                            </Modal>

                    </View>
            </View>
              );
      }
}
const styles=StyleSheet.create({
  tinyLogo: { width: 50, height: 50 }, 
  TextInput: { 
    padding: 4,
     borderWidth: 1,
    //  selectionColor: '#428AF8', 
     borderTopLeftRadius:15,
      borderBottomRightRadius:15, }, 
  textInputView:{paddingTop:5},
  updateButtonView:{
    flex:1,alignItems:'center',
    paddingTop:20
    
  },
  updateButton:{
    borderBottomLeftRadius:20,
    backgroundColor:'#ff4242',
    borderTopRightRadius:20,
    borderWidth:1,
    width:'60%'

  },
  box:{
    borderWidth:2,
    marginTop:5,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5
    ,flex:1,backgroundColor:'#5DADE2',padding:5,paddingTop:20,flexDirection:'row'
  },
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

})

const mapStateToProps = state => ({
  token: state.token,
  heading:state.resume,
  education:state.education
});


const mapDispatchToProps = dispatch => ({
  postEducation: (data) => dispatch(postEducation(data)),
  getResumeEducation:(data)=>dispatch(getResumeEducation(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Education);