// Assignment Code
var generateBtn = document.querySelector("#generate");
var collectionOfValids = [];
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCaseChar = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numberChar = "0123456789" .split ("");
var specialChar = "*&^%$#@!?><{}" .split("");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword () {
    var passLength = prompt("Enter how many characters you want your password to be. Must be between 8 - 30 characters.");
    
    var lengthConfirm = parseInt(passLength);
    console.log(lengthConfirm);
 
    if (passLength < 8 || passLength > 30 || isNaN(passLength)) {
        alert ("Error. Choice is not valid. Please try again.");
        return;
    }

var lowerCaseConfirm = confirm("Do you want lowercase letters?");
    if(lowerCaseConfirm === true) {
        for (var i = 0; i < lowerCaseChar.length; i++) {
            collectionOfValids.push(lowerCaseChar[i]);
        }
    }
var upperCaseConfirm = confirm("Do you want uppercase letters?");
    if (upperCaseConfirm === true) {
        for (var i = 0; i < upperCaseChar.length; i++) {
            collectionOfValids.push(upperCaseChar[i]);
        }
    }
var numberConfirm = confirm("Do you want to include numbers");
    if (numberConfirm === true) {
        for (var i = 0; i < numberChar.length; i++) {
            collectionOfValids.push(numberChar[i]);
        }
    }
var specialConfirm = confirm("Do you want your password to have special characters?");
    if (specialConfirm === true) {
        for (var i = 0; i < specialChar.length; i++) {
            collectionOfValids.push(specialChar[i]);
        }
    }

 var randomPassword = "";
 for (var i = 0; i < lengthConfirm; i++) {
     collectionOfValids[
         Math.floor(Math.random() * collectionOfValids.length)];
     randomPassword +=
        collectionOfValids[
            Math.floor(Math.random() * collectionOfValids.length)
        ];
    }
 return randomPassword;
}

generateBtn.addEventListener("click", writePassword);