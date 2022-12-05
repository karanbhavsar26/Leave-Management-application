function EmailValidation(email) {
  let validation = /^[a-z0-9]+[@]{1}[a-z]+[.][a-z]{3}$/;
  if (email.match(validation)) {
    return true;
  } else {
    return false;
  }
}
function PasswordValidation(password) {
  let validation = /^[0-9a-zA-Z@$]{5,}$/;
  if (validation.test(password)) {
    return true;
  } else {
    return false;
  }
}
function QciidValidation(Qciid) {
  let validation = /^[0-9]+$/;
  if (validation.test(Qciid)) {
    return true;
  } else {
    return false;
  }
}
function NotnullValidation(Date) {
  
  if (Date!==null) {
    return true;
  } else {
    return false;
  }
}
function NotemptyValidation(value) {
  
  if (value!=="") {
    
    return true;
  } else {
    return false;
  }
}
function NameValidation(value) {
  let validation = /^[a-zA-z]{2,}$/;
  
  if (validation.test(value)) {
    return true;
  } else {
    return false;
  }
}

export { EmailValidation, PasswordValidation, QciidValidation,NotnullValidation,NotemptyValidation,NameValidation };
