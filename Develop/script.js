// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {  

  var NumofChar = prompt("How many characters between 8-128 would you like in your password?");

  if (NumofChar < 8 || NumofChar > 128) {
    alert("Please enter a number between 8 and 128.");
  }
  
  else {
    var RandomUpper = confirm("Do you want uppercase letters in your password?");
    var RandomLower = confirm("Do you want lowercase letters in your password?"); 
    var RandomNumber = confirm("Do you want numbers in your password?");
    var RandomSymbol = confirm("Do you want symbols in your password?");
  }

  function getRandomUpper() {
    String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    // return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  if (RandomUpper) {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  } 

  function getRandomLower() {
    String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    // return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

 if (RandomLower) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  } 

  function getRandomNumber() {
     String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    //  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  
  if (RandomNumber) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    constsymbol = ".@#$%^&*()<>?/-+=!,";
  }

  if (RandomSymbol) {
    return constsymbol = ".@#$%^&*()<>?/-+=!,";
  }
  // console.log("Hey! You clicked the button!");
return password

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
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
