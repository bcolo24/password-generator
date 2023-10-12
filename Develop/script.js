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

  var NumofChar = parseInt(prompt("How many characters between 8-128 would you like in your password?"));
  var passwordArr = []

  if (NumofChar < 8 || NumofChar > 128) {
    alert("Please enter a number between 8 and 128.");
  }
  
  else {
    var RandomUpper = confirm("Do you want uppercase letters in your password?");
    var RandomLower = confirm("Do you want lowercase letters in your password?"); 
    var RandomNumber = confirm("Do you want numbers in your password?");
    var RandomSymbol = confirm("Do you want symbols in your password?");
  }

  if (RandomUpper){
    CharArr = CharArr.push(UpperCharArr);
  }

  // if (RandomUpper) {
  //   var RandomUp = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  //  return RandomUp
  // } 

 if (RandomLower) {
  CharArr = CharArr.push(LowerCharArr);
  //return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  } 

  
  if (RandomNumber) {
    CharArr = CharArr.push(NumbersArr);
    return //String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }


  if (RandomSymbol) {
    CharArr = CharArr.push(SymbolsArr);
    return //constsymbol = ".@#$%^&*()<>?/-+=!,";
  }
  // console.log("Hey! You clicked the button!");

// everything will go here! 
// 1. Prompt the user for the password criteria
    //  a. password length between 8 - 128
    // b. lowercase, uppercase, numbers, special characters
// 2. Validate the input- at least one character type selected
// 3. Generate password
// 4. Display the generated password on the page

  // return "Generated password will go here.";
}

// Write password to the #password input

for (var i = 0; i < NumofChar; i++) {
  var chosenChar = (Math.floor(Math.random() * NumofChar));
  passwordArr.push(chosenChar)
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
