//For menu-bar icon appearance and disappearance in mobile or tab screen size
var a;
function showmenubar() {
  if (a == 1) {
    document.querySelector(".menu-bar").style.display = "none";
    document.getElementById("menu-icon").classList = "bx bx-menu";
    a = 0;
  } else {
    document.querySelector(".menu-bar").style.display = "flex";
    document.getElementById("menu-icon").classList = "bx bx-x";
    a = 1;
  }
}

//For hide and show the password
var b;
function show() {
  if (b == 1) {
    document.getElementById("password").type = "password";
    document.getElementById("pass-icon").classList = "bx bxs-show";
    b = 0;
  } else {
    document.getElementById("password").type = "text";
    document.getElementById("pass-icon").classList = "bx bxs-hide";
    b = 1;
  }
}

//For hide and show the confirm-password
var c;
function confirm_show() {
  if (c == 1) {
    document.getElementById("confirm-password").type = "password";
    document.getElementById("confirm-pass-icon").classList = "bx bxs-show";
    c = 0;
  } else {
    document.getElementById("confirm-password").type = "text";
    document.getElementById("confirm-pass-icon").classList = "bx bxs-hide";
    c = 1;
  }
}

//For extracting form elements and its inputs

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
const number = document.getElementById("number");
const city = document.getElementById("city");
const qualification = document.getElementById("qualification");

//EventListener for submit button in form

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  
});

function removeerror() {
  setsuccess(username);
}
//Final result alert message

const sendalert = (usernamevalue, srate, count) => {
  if (srate == count) {
      Swal.fire({
      title: "Wellcome " + usernamevalue,
      text: "Successfully registered",
      icon: "success",
      buttons:true,
      dangerMode:true
    }).then((isOkay) => {
      if(isOkay){
        location.reload();
      }
    });
  }
}
//function for set error div

const setError = (element, message) => {
  const inputcontrol = element.parentElement;
  const errordisplay = inputcontrol.querySelector(".error");

  errordisplay.innerText = message;
  inputcontrol.classList.remove("seccuss");
  inputcontrol.classList.add("erro");
};

//function for set error success

const setsuccess = (element) => {
  const inputcontrol = element.parentElement;
  const errordisplay = inputcontrol.querySelector(".error");
  errordisplay.innerText = "";
  inputcontrol.classList.remove("erro");
  inputcontrol.classList.add("seccuss");
};

//function for set the value for comparing the email for validation

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

//function for set the value for comparing the password for validation

const isValidPassword = (password) => {
  const pas = /^( ?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return pas;
};

// function for checking for success div to print final alert

const successmsg = (usernamevalue) => {
  let formcont = document.getElementsByClassName("input-div");
  var count = formcont.length - 2;
  console.log(count)
  for (var i = 0; i < formcont.length; i++) {
    if (formcont[i].className === "input-div seccuss") {
      var srate = 0 + i;
      sendalert(usernamevalue, srate, count);
    } else {
      return false;
    }
  }
};

//function for validation

const validateInputs = () => {
  const usernamevalue = username.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();
  const confirm_passwordvalue = confirm_password.value.trim();
  const numbervalue = number.value.trim();
  const cityvalue = city.value.trim();
  const qualificationvalue = qualification.value.trim();

  //validation for username

  if (usernamevalue === "") {
    setError(username, "Username is required");
  } else if (usernamevalue.length <= 5) {
    setError(username, "Enter full username");
  } else {
    setsuccess(username);
  }

  //validation for email

  if (emailvalue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailvalue)) {
    setError(email, "Enter  valid email ");
  } else {
    setsuccess(email);
  }

  //validation for password

  if (passwordvalue === "") {
    setError(password, "Password is required");
  } else if (
    passwordvalue === "password" ||
    passwordvalue === usernamevalue ||
    passwordvalue=== "123456789" ||
    !isValidPassword(passwordvalue)
  ) {
    setError(password, "Password is not strong");
  } else {
    setsuccess(password);
  }

  //validation for confirmpassword

  if (confirm_passwordvalue === "") {
    setError(confirm_password, "Please confirm your password");
  } else if (confirm_passwordvalue !== passwordvalue) {
    setError(confirm_password, "Passwords doesn't match");
  } else {
    setsuccess(confirm_password);
  }

  //validation for number

  if (numbervalue === "") {
    setError(number, "please enter contact number");
  } else if (
    isNaN(numbervalue) ||
    numbervalue.length > 10 ||
    numbervalue.length < 10
  ) {
    setError(number, "please enter valid mobile number");
  } else {
    setsuccess(number);
  }

  //validation for city

  if (cityvalue === "Select your city") {
    setError(city, "please select one option");
  } else {
    setsuccess(city);
  }

  //validation for qualification

  if (qualificationvalue === "Select one Qualification") {
    setError(qualification, "please select one option");
  } else {
    setsuccess(qualification);
  }

  successmsg(usernamevalue);
}
