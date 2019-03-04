
$(document).ready(function(){


// get data from input form
var originalMessage ;

// empty string to add coded message to
let enCoded = []; 

// the 3rd letter of each element is the coded alphabet
const code = ['starwars', 'jabba', 'escalation', 'midi-chlorians', 'chewbacca', 'officer', 'lego', 'echo-base', 'fbi', 'major', 'azkaban', 'halo', 'dementor', 'finalizer', 'prophets', 'imperial', "d'qar", 'cortana', 'custodian', 'retribution', 'blue-squadron', 'covenant', 'saw-gerrera', "dex's-diner", 'skywalker', 'maz kanata'];
//Other characters   space       '        ?     -           $        !       &
const codeChar = ["boo-eep", "woo-oo", "sith", "boop", "waaaah", "spartan", "unsc", "palmer", "otsd"];
const specialchar = [" ", "'", "?,", "-", "$", "!", "&", ",", "."];

// Function to get input value.
$('#text_value').click(function() {
var originalMessage = $("#text").val();
   $("#text").val(''); // resets the input to blank
   //If nothing is entered
if(originalMessage =='') {
   alert("Hey! I can'y encrypt blank spaces. Gimme some text.");
   // if valid text ius entered
}else{
// encryption starts here

// replace spaces in input message with _
var messageNoSpace = originalMessage.split(' ').join('_');

// convert string to an array
let message = messageNoSpace.toLowerCase().split('');
console.log(message);

// iterate over the input array and the code array to pair them
message.forEach(input => {
   //first check if input includes a number
   if (!isNaN(input)) {
     enCoded.push(input);
   // then check each letter or other character
  } else if (input === "_") {
     enCoded.push(codeChar[0]);
  } else if (input === "'") {
     enCoded.push(codeChar[1]);
  } else if (input === "?") {
     enCoded.push(codeChar[2]);
  } else if (input === "-") {
     enCoded.push(codeChar[3]);
  } else if (input === "$") {
     enCoded.push(codeChar[4]);
  } else if (input === "!") {
     enCoded.push(codeChar[5]);
  } else if (input === "&") {
     enCoded.push(codeChar[6]);
  } else if (input === ",") {
     enCoded.push(codeChar[7]);
  } else if (input === ".") {
     enCoded.push(codeChar[8]);
  } else if (code.forEach(word => {
     if (word[2] === input) {
        // check it
        //console.log(word);
        enCoded.push(word);
  } 
  }));
});
// assign the coded message to a variable
const codedMessage = () => {
   return enCoded.join(' ');
}
console.log(codedMessage());
console.log(enCoded.length);

// Print the coded message to the DOM
$('#encrypted').text(codedMessage); // text function takes value as parameter
          e.preventDefault(); 
   
//end of the encryprtion code
}
});
// end of encryption input & result

// DECRYPTION ///////////////////////////////////////

// get code to decrypt
// var codedMessage ;  // don't need this
// empty string to add coded message to
let deCoded = []; 

// Function to get input value.
$('#code_value').click(function() {
var codedMessage = $("#code").val();
   console.log(codedMessage);
   $("#code").val(''); // resets the input to blank
   //If nothing is entered
if(codedMessage =='') {
   alert("Hey! I can'y encrypt blank spaces. Gimme some text.");
   // if valid text ius entered
}else{
// convert the coded message string to an array
   var decrypt = codedMessage.split(' ');
   console.log(decrypt);

// iterate over the input array and the code array to match them
decrypt.forEach(input => {
   //first check if input includes a number
   if (!isNaN(input)) {
     deCoded.push(input);
   // then check each letter
  } else if (input === codeChar[0]) {
     deCoded.push(specialchar[0]);
  } else if (input === codeChar[1]) {
     deCoded.push(specialchar[1]);
  } else if (input === codeChar[2]) {
     deCoded.push(specialchar[2]);
  } else if (input === codeChar[3]) {
     deCoded.push(specialchar[3]);
  } else if (input === codeChar[4]) {
     deCoded.push(specialchar[4]);
  } else if (input === codeChar[5]) {
     deCoded.push(specialchar[5]);
  } else if (input === codeChar[6]) {
     deCoded.push(specialchar[6]);
  } else if (input === codeChar[7]) {
     deCoded.push(specialchar[7]);
  } else if (input === codeChar[8]) {
     deCoded.push(specialchar[8]);
  } else if (code.forEach(word => {
     if (word === input) {
        // check it
        //console.log(word);
        deCoded.push(word[2]);
  } 
  }));
});

//console.log(deCoded);

const deCodedMessage = () => {
   return deCoded.join('');
}; 
// Print the coded message to the DOM
$('#decrypted').text(deCodedMessage); // text function takes value as parameter
          e.preventDefault();   
console.log(deCodedMessage()); 
//end of decryption code
}
});

// manual coded message <p> reset button 
$('#text_reset').click(function() {
$("#encrypted").text('');
});
// manual decoded message <p> reset button 
$('#code_reset').click(function() {
$("#decrypted").text('');
});

});			


