// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!");

// everything will go here! 
// 1. Prompt the user for the password criteria
    //  a. password length between 8 - 128
    // b. lowercase, uppercase, numbers, special characters
// 2. Validate the input- at least one character type selected
// 3. Generate password
// 4. Display the generated password on the page

  return "Generated password will go here.";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
