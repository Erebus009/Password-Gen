// Password Characters arrays to use in final result.

var specialCharacters = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Global variables.

var valid = [];
var password = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start function to generate password

// window.onload = alert( "Click 'Generate Password' to start!");

// Start of prompts to make password
function generatePassword() {
  // resets array so it's not added on to old user inputs. 
  valid = [];
  password = [];

  // prompt to get length of overall password. 
  passLength = prompt("Please put in a value between 8 and 126");
  
  
  // if user puts in letters. 

  if (isNaN(passLength)) {
    alert("Please input a valid number");
    return generatePassword();

    // if they hit enter without numbers or hit cancel.
  } else if (passLength == 0 || passLength === null) {
    alert("Write a value please.");
    return generatePassword();
  }

  // if user does not enter a valid input it repeats function/ if it is valid from 8 to 126 it moves on. 
  if (parseInt(passLength) <= 7 || passLength >= 128) {
    alert("Please enter a value between 8 and 126.");
    return generatePassword();
  }
// To get prompt values from user
  var numbers = confirm("Do you want to add numbers");
  var lower = confirm("Do you want to add lowercase letters?");
  var upper = confirm("Do you want to add uppercase letter?");
  var special = confirm("Do you want to add special chars?");
// if all canceled it starts the function again. 
  if (!numbers && !lower && !upper && !special) {
    alert("You must at least choose atleast one of the types for your password.");
    return generatePassword();
  }

  // if and else statements for confirms to add to valid array on true and if else does nothing. 
  if (numbers === true) {
    valid = valid.concat(numericCharacters);
  } else {
  }

  if (lower === true) {
    valid = valid.concat(lowerCasedCharacters);
  } else {
  }

  if (upper === true) {
    valid = valid.concat(upperCasedCharacters);
  } else {
  }

  if (special === true) {
    valid = valid.concat(specialCharacters);
  } else {
  }


  // Resets var password and does random math to select from selections by user in valid var confirms plus length of first prompt . 
  var password = "";

  for (var i = 1; i <= passLength; i++) {
    password = password + valid[Math.floor(Math.random() * valid.length)];
  }
  // returns final product to be able to use in write password function. 
  return password;
}
// debugger console logs 
// console.log(password);
// console.log(valid);
// console.log(generatePassword);
``
