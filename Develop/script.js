// Assignment Code
var generateBtn = document.querySelector("#generate");

// define user criteria variables 
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split(""); 
console.log(lowerCase);
console.log(lowerCase.length);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upperCase);
console.log(upperCase.length);

var specialCharacters = "-_=+:;'/?><*&^%$#@!()".split("");
console.log(specialCharacters);
console.log(specialCharacters.length);

var numeric = "1234567890".split("");
console.log(numeric);
console.log(numeric.length);


// Function to select password length
var selectPwdLength = function() {
  pwdLength = window.prompt("What length would you like your password from 8 - 128 characters?");
  if (pwdLength > 7 && pwdLength < 128) {
    console.log("User select Length: " + pwdLength)
    window.alert("User select Length: " + pwdLength)
  } else selectPwdLength();
}
// Function to select uppercase letters presence in password
var selectPwdUpperCase = function() {
  pwdUpperCase = window.prompt("Would you like your password ot be have uppercase letters? Yes or no")
  if (pwdUpperCase == "yes" || pwdUpperCase == "no") {
    console.log("User select Uppercase: " + pwdUpperCase)
    window.alert("User select Uppercase: " + pwdUpperCase);
  } else (selectPwdUpperCase())
}

// function to select lowercase letters presence in passowrd.
var selectPwdLowerCase = function () {
  pwdLowerCase = window.prompt("Would you like your password to have lowercase letters? yes or no")
  if (pwdLowerCase == "yes" || pwdLowerCase == "no")
  console.log("User select lowercase: " + pwdLowerCase)
  window.alert("User select lowercase: " + pwdLowerCase);
}

// function to select numbers presence in password
var selectPwdNumeric = function () {
  pwdNumeric = window.prompt("Would you like numbers in your password? yes or no")
  if (pwdNumeric == "yes" || pwdNumeric == "no")
  console.log("User select numeric: " + pwdNumeric)
  window.alert("User select numeric: " + pwdNumeric);
}

// function to determine presence of special characters in password
var selectSpecialCharacters = function() {
  pwdSpecialCharacters = window.prompt ("Would you like special characters in your password? yes or no")
  if (pwdSpecialCharacters == "yes" || pwdSpecialCharacters == "no")
  console.log("User select special characters: " + pwdSpecialCharacters)
  window.alert("User select special characters: " + pwdSpecialCharacters);
}

// function to select a random uppercase letter
var randomUpper = function (){
  var randomUpperCaseidx = Math.floor(Math.random() * upperCase.length);
  console.log(randomUpperCaseidx);
  console.log(upperCase[randomUpperCaseidx]);
  return upperCase[randomUpperCaseidx];
}
var testUpper = randomUpper();

// function to select random lowercase letter
var randomLower = function (){
  var randomLowerCaseidx = Math.floor(Math.random() * lowerCase.length);
  console.log(randomLowerCaseidx);
  console.log(lowerCase[randomLowerCaseidx]);
  return lowerCase[randomLowerCaseidx];
}
var testLower = randomLower();

// function to select random special character 
var randomLower = function (){
  var randomSpecialCharidx = Math.floor(Math.random() * specialCharacters.length);
  console.log(randomSpecialCharidx);
  console.log(specialCharacters[randomSpecialCharidx]);
  return specialCharacters[randomSpecialCharidx];
}
var testspecial = randomLower();

// function to select random number
var randomNumber = function (){
  var randomNumberidx = Math.floor(Math.random() * numeric.length);
  console.log(randomNumberidx);
  console.log(numeric[randomNumberidx]);
  return numeric[randomNumberidx];
}
var testnumber = randomNumber();


// Write password to the #password input
function writePassword() {
  selectPwdLength();
  selectPwdUpperCase();
  selectPwdLowerCase();
  selectPwdNumeric();
  selectSpecialCharacters();
}
var passwordText = document.querySelector("#password");

passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
