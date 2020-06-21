import React from "react";
import { TextInput, View ,StyleSheet} from "react-native";
CustomTextInput = props => {
  return (
    <TextInput
      style={[props.style,styles.textInputStyle]}
      placeholder={props.placeholder}
      // placeholderTextColor="black"
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
    />
  );
};
const styles=StyleSheet.create({
    textInputStyle:{
        fontSize:18,
        borderBottomWidth:1,
    }
})
export default CustomTextInput;
