//CONCAT() METHOD
function full_Sentence(){
  var part_1 = "I have ";
  var part_2 = "made this ";
  var part_3 = "into a complete ";
  var part_4 = "sentence.";
  var whole_sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//CONCAT() METHOD

//SLICE() METHOD
function slice_Method(){
  var Sentence = "All work and no play makes Johnny a dull boy.";
  var Section = Sentence.slice(27,33);
  document.getElementById("Slice").innerHTML = Section;
}
//SLICE() METHOD

//The toUpperCase() method is a built-in method in JavaScript that is used to 
//convert a string to uppercase letters. This method does not change the original 
//string but returns a new string with all the characters in uppercase.

let message = 'hello world';
let uppercaseMessage = message.toUpperCase();

console.log(uppercaseMessage);  // Output: 'HELLO WORLD'

//The search() method is a string method in JavaScript that searches for a 
//specified value or regular expression within a string, and returns the position 
//of the match. If a match is not found, it returns -1.

let sentence = 'The quick brown fox jumps over the lazy dog.';
let searchResult = sentence.search('fox');

console.log(searchResult);  // Output: 16




//NUMBER METHODS
function string_Method(){
  var X =182;
  document.getElementById("Numbers_to_string").innerHTML = X.toString();
}


//TOPRECISION() METHOD
function precision_Method(){
  var X = 12938.3012987376112;
  document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//The toFixed() method is a method in JavaScript that is used to format a number 
//as a string with a specified number of decimal places. This method does not 
//change the original number but returns a string representation of the number 
//with the specified number of decimal places.

let number = 123.456;
let fixedNumber = number.toFixed(2);

console.log(fixedNumber);  // Output: '123.46'