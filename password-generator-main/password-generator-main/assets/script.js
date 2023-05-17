// Assignment Code
var generateBtn = document.querySelector("#generate");

// var of Uppercase letters
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Var of Lowercase letters
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Var of Numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Var of Special characters
var character = ["!", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~"];


var passCharArr = []

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passCharArr = [];
}

generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var password = "";

  var userPassword = Math.ceil(
    prompt("Choose a password length between 8 and 128 characters.")
  );
  // console.log(userPassword);

  if (isNaN(userPassword)) {
    prompt("Please input a number between 8 and 128 in this field.");
    generatePassword();
  }

  // condition if user picks a number outside of conditions
  if (userPassword < 8 || userPassword > 128) {
    confirm("Password needs to be at least 8 characters and no more than 128.");
    return;
  }
  // condition if user picks a number within of conditions
  if (userPassword > 8 || userPassword < 128) {
    console.log(userPassword);
  }

  //condition if user wants to use capital letters
  var passUpper = confirm("Press OK if you want to include capital letters.");
  console.log(passUpper);

  //logic behind capital letters
  if (passUpper === true) {
    
    passCharArr = passCharArr.concat(lettersUpper);
    console.log(password);
  }
  //condition if user wants to use lowercase letters
  var passLower = confirm(
    "Press OK if you want to include lower case letters."
  );
  console.log(passLower);

  //logic behind lowercase letters
  if (passLower === true) {
  
    passCharArr = passCharArr.concat(lettersLower);
    console.log(password);
  }
  //condition if user wants to use numbers
  var passNumber = confirm("Press OK if you want to include numbers.");
  console.log(passNumber);

  //logic behind using numbers
  if (passNumber === true) {
    
    passCharArr = passCharArr.concat(numbers);
    console.log(password);
  }
  //condition if user wants to use special characters
  var passCharacter = confirm(
    "Press OK if you want to include special characters."
  );
  console.log(passCharacter);

  //logic behind using special characters
  if (passCharacter === true) {
    
    passCharArr = passCharArr.concat(character);
    console.log(password);
  }

  //condition if user does not select any conditions
  if (
    passUpper === false &&
    passLower === false &&
    passNumber === false &&
    passCharacter === false
  ) {
    alert("You must select yes to at least one of the conditions");
    generatePassword();
  } else {
    for (let i = 0; i < userPassword; i++)
      password = password.concat(
        passCharArr[Math.floor(Math.random() * passCharArr.length)]
      );
  }

  return password;
}


