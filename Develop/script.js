// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var CharArr = [];


var UppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var UpperCharArr = UppercaseLetters.split("");

var LowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var LowerCharArr = LowercaseLetters.split("");

var Numbers = '1234567890';
var NumbersArr = Numbers.split("");

var Symbols = '!@#$%^&*()_-+=<>?/';
var SymbolsArr = Symbols.split("");

function generatePassword() {  
  
  var NumofChar = parseInt(prompt("How many characters between 8 and 128 would you like in your password?"));
  var passwordArr = [];

  if (NumofChar < 8 || NumofChar > 128) {
    alert("Please enter a number between 8 and 128.");
  }
  
  else {
    var RandomUpper = confirm("Do you want uppercase letters in your password?");
    var RandomLower = confirm("Do you want lowercase letters in your password?"); 
    var RandomNumber = confirm("Do you want numbers in your password?");
    var RandomSymbol = confirm("Do you want symbols in your password?");
  }

  CharArr = [];

  if (RandomUpper){
    CharArr = CharArr.concat(UpperCharArr);
  }

 if (RandomLower) {
    CharArr = CharArr.concat(LowerCharArr);
  } 

  if (RandomNumber) {
    CharArr = CharArr.concat(NumbersArr);
  }
  
  if (RandomSymbol) {
    CharArr = CharArr.concat(SymbolsArr);
  }

  for (var i = 0; i < NumofChar; i++) {
  var chosenChar = (Math.floor(Math.random() * NumofChar.length));
  passwordArr.concat(chosenChar);
  }

  return chosenChar;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
