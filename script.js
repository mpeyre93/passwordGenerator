//possible input values
var confirmNumbersEl;
var confirmSymbolsEl;
var confirmUppercaseEl;
var confirmLowercaseEl;
var enter;
var possibleElements; 

//possible variables for random password
numbers = [0,1,2,3,4,5,6,7,8,9];
symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "@", "^", "_"];
upper = ["A","B","C","D","E", "F", "G", "H","I","J","K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// generate button will prompt users with a series of password character options
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  passwordEl = generatePassword();
  document.getElementById("password").placeholder = passwordEl;
});


//Generate random password function
function generatePassword(){
  //generate password character length
  enter = parseInt(prompt("Choose a password length between 8 and 128."));

  //if user does not enter any numbers
  if(!enter){
    //alerts user of password criteria
    alert("This needs a value");
  }
  
  //if users inputs numbers outside of 8-128
  else if (enter < 8 || enter > 128){
    //alerts user of password criteria
    enter = parseInt(alert("Your password must be between 8 and 128."));
  }

  //confirm user password criteria 
  else {
    confirmNumbersEl = confirm("Would you like your password to contain numbers?");
    confirmSymbolsEl = confirm ("Would you like your password to contain symbols?");
    confirmUppercaseEl = confirm ("Would you like your password to contain uppercase letters?");
    confirmLowercaseEl = confirm ("Would your like password to contain lowercase letters?");
  };
 
  //if users fails to confirm for all criteria options
  if (!confirmNumbersEl && !confirmSymbolsEl && !confirmUppercaseEl && !confirmLowercaseEl){
    //alerts user of password criteria
    possibelElements = alert("You must choose a criteria to create a password.");
  }

  //generating random password with 4 confirmed user responses
  else if (confirmNumbersEl && confirmSymbolsEl && confirmUppercaseEl && confirmLowercaseEl) {
    possibleElements = numbers.concat(symbols, upper, lower);
  }

  // generating random password with 3 confirmed user responses 
  else if (confirmNumbersEl && confirmSymbolsEl && confirmUppercaseEl) {
    possibleElements = numbers.concat(symbols, upper);
  }

  else if (confirmNumbersEl && confirmSymbolsEl && confirmLowercaseEl){
    possibleElements = numbers.concat(symbols, lower);
  }

  else if (confirmNumbersEl && confirmUppercaseEl && confirmLowercaseEl){
    possibleElements = numbers.concat(upper, lower);
  }

  else if (confirmSymbolsEl && confirmUppercaseEl && confirmLowercaseEl){
    possibleElements = symbols.concat(upper, lower);
  }
  //generating random password with 2 confirmed user responses
  else if (confirmNumbersEl && confirmSymbolsEl) {
    possibleElements = numbers.concat(symbols);
  }

  else if (confirmNumbersEl && confirmUppercaseEl){
    possibleElements = numbers.concat(upper);
  }

  else if (confirmNumbersEl && confirmLowercaseEl){
    possibleElements = numbers.concat(lower);
  }

  else if (confirmSymbolsEl && confirmUppercaseEl){
    possibleElements = symbols.concat(upper);
  } 

  else if (confirmSymbolsEl && confirmLowercaseEl){
    possibleElements = symbols.concat(lower);
  }

  else if (confirmUppercaseEl && confirmLowercaseEl){
    possibleElements = upper.concat(lower);
  }
  
  //generating random password with 1 confirmed user response
  else if (confirmNumbersEl){
    possibleElements = numbers;
  }

  else if (confirmSymbolsEl){
    possibleElements = symbols;
  }

  else if (confirmUppercaseEl){
    possibleElements = upper;
  }

  else if (confirmLowercaseEl){
    possibleElements = lower;
  };

  //possible array variables
  var possibleArray = [];


  //loop for random array with confirmed criteria 
    for(var i = 0; i < enter; i++){
      var pickPossibleElements = possibleElements[Math.floor(Math.random()* possibleElements.length)];
      possibleArray.push(pickPossibleElements);
    }
 
    //join possible array and convert to string
    var passwordEl = possibleArray.join("");
    writePassword(passwordEl);
    return passwordEl;
}

// Write password to text area on html for user to see
function writePassword(passwordEl) {
  document.getElementById("password").textContent = passwordEl;
  
}