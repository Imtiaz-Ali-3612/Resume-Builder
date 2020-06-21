import React from "react";
import { TouchableOpacity, Text,StyleSheet } from "react-native";

CustomButton = props => {
  return (
    <TouchableOpacity
    style={[props.style,styles.buttonStyles]}
    disabled={props.disabled} onPress={props.onClick}>
      {props.children}
    </TouchableOpacity>
  );
};
const styles=StyleSheet.create({
    buttonStyles:{
        // borderWidth:1,
        borderRadius:40,
        // borderColor:'green'
    }
})
export default CustomButton;
