//GLOBAL
var X = 10;
function Add_numbers_1() {
  document.write(20 + X + "<br>");
}
function Add_numbers_2()  {
  document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

//LOCAL
function Add_numbers_1() {
  var X = 10;
  document.write(20 + X + "<br>");
}
function Add_numbers_2()  {
  document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

//LOG (After the console.log 30 110 30 turned into 110110110)
function Add_numbers_1() {
  var X = 10;
  console.log(15 + X);
}
function Add_numbers_2()  {
  document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();


//IF STATEMENT WITH  TIME FUNCTION

if (1 < 2) {
  document.write("<br>" + "The number on the left is smaller than the number on the right.")
}

function get_Date() {
  if (new Date().getHours() < 18 ) {
    document.getElementById("Greeting").innerHTML = "Happy New Year!"
  }
  else {
    document.getElementById("Greeting").innerHTML = "Not yet!"
  }
}

//ELSE STATEMENTS
function Age_Function(){
  age = document.getElementById("Age").value;
  if (Age >= 18) {
      Vote = "You are old enouigh to vote!"
  }
  else {
      Vote = "You are not old enough to vote!";
  }
  document.getElementById("How_old_are_you?").innerHTML = Vote;
}
//ELSE STATEMENTS