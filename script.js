// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Defining variables
var CharArr = [];

var UppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var UpperCharArr = UppercaseLetters.split("");

var LowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
var LowerCharArr = LowercaseLetters.split("");

var Numbers = '1234567890';
var NumbersArr = Numbers.split("");

var Symbols = '!@#$%^&*()_-+=<>?/';
var SymbolsArr = Symbols.split("");

//Declaring the function 
function generatePassword() {  

  //prompting the user to enter desired password length
  var NumofChar = parseInt(prompt("How many characters between 8 and 128 would you like in your password?"));
  var password = "";

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

//adding selected characters to the string
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

//finalizing password and returning to user
  for (var i = 0; i < NumofChar; i++) {
   var randomIndex =  Math.floor(Math.random() * CharArr.length);
    password += CharArr[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);