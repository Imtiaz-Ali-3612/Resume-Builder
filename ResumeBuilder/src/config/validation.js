import react from "react";
isValid = (name, text) => {
  var valid = false;
  switch (name) {
    case "email":
      valid = validateEmail(text);
      return valid;
    case "password":
      valid = validatePassword(text);
      return valid;
  }
  return valid;
};
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
