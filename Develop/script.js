// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// Assignment Code
function getUserOptions() {
   // set variables for options
   var lowerCaseChosen = false;
   var upperCaseChosen = false;
   var numericChosen = false;
   var specialChosen = false;
   var length = parseInt (
     prompt("How long would you like your password to be?")
   );
  
   lowerCaseChosen = confirm("Would you like to lower case letters in your password?");
   upperCaseChosen = confirm("Would you like to upper case letters in your password?");
   numericChosen = confirm("Would you like to numeric characters in your password?");
   specialChosen = confirm("Would you like to special characters in your password?");
   
   // validation
   if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }
   // length // between 8 - 128
   if (length < 8 || length > 128 ) {
      alert ("please provide a value between 8-128");
      return;
   }
   if (
    specialChosen === false &&
    numericChosen === false &&
    lowerCaseChosen === false &&
    upperCaseChosen === false
  ) {
    alert('Must select at least one character type');
    return;
  }
   // TODO: check for at least one special/number/upper/lower (that not all of them is false)
   // build options
   var userOptions = {
      lowerCaseChosen: lowerCaseChosen,
      upperCaseChosen: upperCaseChosen,
      numericChosen: numericChosen,
      specialChosen: specialChosen,
      length: length,
   }
   // return user options
   return userOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}
// generate password
function generatePassword () {
   var result = [];
   var mustHaveCharacters = [];
   var canHaveCharacters = [];
   var userOptions =  getUserOptions();
   
   
   // if upper 
   if (userOptions.upperCaseChosen) {
     // add to possible characters
     canHaveCharacters = canHaveCharacters.concat(upperCasedCharacters)
     // add to mustHaves 1 upper char
     mustHaveCharacters.push(getRandom(upperCasedCharacters))
   }
   // if lower 
   if (userOptions.lowerCaseChosen) {
     // add possible characters
     canHaveCharacters = canHaveCharacters.concat(lowerCasedCharacters)
     // add to mustHaves 1 lower char
     mustHaveCharacters.push(getRandom(lowerCasedCharacters))
   }
   // if special 
   if (userOptions.specialChosen) {
     canHaveCharacters = canHaveCharacters.concat(specialCharacters)
     // add a random char to the passwordArray from the possible chars
     mustHaveCharacters.push(getRandom(specialCharacters))
     
   }
   // loop through the lengthChosen
   for (var i = 0; i < userOptions.length; i++) {
     var canHaveCharacters = getRandom(canHaveCharacters);
     
     result.push(canHaveCharacters)
   }
   // loop through must haves
      // replace a chare in the password array
   for (var i = 0; i < mustHaveCharacters.length; i++) {
    result[i] = mustHaveCharacters[i];
  }
   // passwordArray to string (join method)
   return result.join('');
}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
