// Assignment Code
var generateBtn = document.querySelector("#generate");

// define user criteria variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var specialCharacters = "-_=+:;'/?><*&^%$#@!()";

var numeric = "1234567890";

var characterBank = "";

let pwdLength;

var password = "";

// Function to select password length
function selectPwdLength() {
  pwdLength = window.prompt(
    "What length would you like your password from 8 - 128 characters?"
  );
  if (pwdLength > 7 && pwdLength < 128) {
    window.alert("User select Length: " + pwdLength);
  } else selectPwdLength();
}

// Function to select uppercase letters presence in password
function selectPwdUpperCase() {
  window.confirm("Would you like your password ot be have uppercase letters?");
}

// function to select lowercase letters presence in passowrd.
function selectPwdLowerCase() {
  window.confirm("Would you like your password to have lowercase letters?");
}

// function to select numbers presence in password
function selectPwdNumeric() {
  window.confirm("Would you like numbers in your password?");
}

// function to determine presence of special characters in password
function selectSpecialCharacters() {
  pwdSpecialCharacters = window.confirm("Would you like special characters in your password?");
}

function includeCriteria() {
  if (selectPwdLowerCase) {
    characterBank += lowerCase;
  }
  if (selectPwdUpperCase) {
    characterBank += upperCase;
  }
  if (selectSpecialCharacters) {
    characterBank += specialCharacters;
  }
  if (selectPwdNumeric) {
    characterBank += numeric;
  }
  console.log(characterBank);
  createPassword();
}

function createPassword() {
  for (let i = 0; i < pwdLength; i++) {
    password += characterBank.charAt(
      Math.floor(Math.random() * characterBank.length)
    );
  }
  console.log(password);
  passwordText.innerHTML = password;
}

// Write password to the #password input
function getPasswordParams() {
  selectPwdLength();
  selectPwdUpperCase();
  selectPwdLowerCase();
  selectPwdNumeric();
  selectSpecialCharacters();
  includeCriteria();
}
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordParams);

// strings of all characters - done
// ask user which criteria they want - done
// create concatenated string of all selected criteria
// run math.random on concatenated string corresponding to user requested pwd length
// push each loop into "password" variable
