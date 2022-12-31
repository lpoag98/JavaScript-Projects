  function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
  }

  function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Subtraction").innerHTML = "5 - 2 = " + subtraction;
  }

  function multiplication_Function() {
    var multiplication = 6 * 8;
    document.getElementById("Multiplication").innerHTML = "6 * 8 = " + multiplication;
  }

  function division_Function() {
    var division = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + division;
  }

  function more_Math() {
    var simple_Math = 48 / 6;
    document.getElementById("Math2").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
  }

  function modules_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math3").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
  }

  function negation_Operator() {
    var x = 10;
    document.getElementById("Math4").innerHTML = -x;
  }

  var A = 5;
  A++;
  document.write(A);

  window.alert(Math.random());

  window.alert(Math.random() * 100);