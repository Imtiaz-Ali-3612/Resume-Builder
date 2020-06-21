import react from "react";
isValid = (name, text,state) => {
  var valid = false;
  switch (name) {
    case "email":
      valid = validateEmail(text);
      return valid;
    case "password":
      valid = validatePassword(text);
      return valid;
    case "confirmPassword":
      valid = validateConfirmPassword(text,state.password.value)
  }
  return valid;
};
validateConfirmPassword= (re_enter,password)=>{
  if(re_enter==password){
    return true;
  }
  return false;
}
validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
validatePassword = password => {
  if (password.length > 7) {
    return true;
  }
  return false;
};
export default isValid;
