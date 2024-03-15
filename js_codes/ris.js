function printError(Id, Msg) {
  document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
  var fname = document.forms["form"]["fname"].value;
  var lname = document.forms["form"]["lname"].value;
  var email = document.forms["form"]["email"].value;
  var password = document.forms["form"]["password"].value;
  var mobile = document.forms["form"]["mobile"].value;

  var fnameErr = lnameErr = emailErr = passwordErr = mobileErr = false;

  if (fname == "") {
      printError("fnameErr", "Please enter the first name");
      fnameErr = true;
  } else {
      var regex = /^[a-zA-Z]+$/;
      if (regex.test(fname) === false) {
          printError("fnameErr", "Please enter a valid name");
          fnameErr = true;
      }
  }

  if (lname == "") {
      printError("lnameErr", "Please enter the last name");
      lnameErr = true;
  } else {
      var regex = /^[a-zA-Z]+$/;
      if (regex.test(lname) === false) {
          printError("lnameErr", "Please enter a valid name");
          lnameErr = true;
      }
  }

  if(email==""){

    printError("emailErr","please enter the email");
    var elem= document.getElementById("email");
    elem.classList.add("input-2");
  elem.classList.remove("input-1");
  }else{
    var regex = /^\S+@\S+\.\S+$/;
    if ( regex.test(fname)===false){
      printError("emailErr","please enter a valid email");
      var elem= document.getElementById("email");
      elem.classList.add("input-2");
    elem.classList.remove("input-1");
  
  
    }else{
  
      printError("emailErr","");
      fnameErr= false;
      var elem= document.getElementById("email");
      elem.classList.add("input-2");
    elem.classList.remove("input-1");
  
  
  
    }
  
  }

  if (password == "") {
      printError("passwordErr", "Please enter the password");
      passwordErr = true;
  } else {
      var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if (regex.test(password) === false) {
          printError("passwordErr", "Please enter a valid password (6-16 characters, alphanumeric, and special characters allowed)");
          passwordErr = true;
      }
  }

  if (mobile == "") {
      printError("mobileErr", "Please enter the mobile number");
      mobileErr = true;
  } else {
      var regex = /^[0-9]{10}$/;
      if (regex.test(mobile) === false) {
          printError("mobileErr", "Please enter a valid 10-digit mobile number");
          mobileErr = true;
      }
  }

  if (fnameErr || lnameErr || emailErr || passwordErr || mobileErr) {
      return false;
  }
}
