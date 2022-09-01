// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword()
  selectPwdLength();
}
var passwordText = document.querySelector("#password");

passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Function to select password length
var selectPwdLength = function() {
  pwdLength = window.prompt("What length would you like your password from 8 - 128 characters?");
  if (pwdLength > 7 && pwdLength < 128) {
    console.log("User select Length: " + pwdLength)
    window.alert("User select Length: " + pwdLength)
  } else selectPwdLength();
}
// Function to select uppercase letters in password
var selectPwdUpperCase = function() {
  pwdUpperCase = window.prompt("Would you like your password ot be have uppercase letters? Yes or no")
  if (pwdUpperCase == "yes" || pwdUpperCase == "no") {
    console.log("User select Uppercase: " + pwdUpperCase)
    window.alert("User select Uppercase: " + pwdUpperCase);
  } else (selectPwdUpperCase())
}

var selectPwdLowerCase = function () {
  pwdLowerCase = window.prompt("Would you like your password to have lowercase letters? yes or no")
  if (pwdLowerCase == "yes" || pwdLowerCase == "no")
  console.log("User select lowercase: " + pwdLowerCase)
  window.alert("User select lowercase: " + pwdLowerCase);
}

var selectPwdNumeric = function () {
  pwdNumeric = window.prompt("Would you like numbers in your password? yes or no")
  if (pwdNumeric == "yes" || pwdNumeric == "no")
  console.log("User select numeric: " + pwdNumeric)
  window.alert("User select numeric: " + pwdNumeric);
}

// selectPwdLength();

// selectPwdUpperCase();

// selectPwdLowerCase();

// selectPwdNumeric();