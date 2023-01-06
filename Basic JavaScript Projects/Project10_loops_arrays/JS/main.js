function Count_to_ten() {
  var Digit="";
  var X = 1;
  while (X < 11) {
    Digit += "<br>" + X;
    X++;
  }
  document.getElementById("Counting_to_ten").innerHTML = Digit;
}
//LOOPS

//FOR
  var Instruments=["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
  var Content = "";
  var Y;
  function Call_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
  }
  document.getElementById("Loop").innerHTML = Content;
}
//FOR

//ARRAYS AND OBJECTS
function cat_pics() {
  var Cat_Picture = [];
  Cat_Picture[0] = "sleeping";
  Cat_Picture[1] = "playing";
  Cat_Picture[1] = "eating";
  Cat_Picture[1] = "purring";
  document.getElementById("Cat").innerHTML = "In this picture the cat is " + 
  Cat_Picture[2] + ".";
}
//ARRAYS AND OBJECTS

//CONST KEYWORD
function constant_function()  {
  const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
  Musical_Instrument.color = "blue";
  Musical_Instrument.price = "$900";
  document.getElementById("Constant").innerHTML = "The cost of the " + 
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}
//CONST KEYWORD

//LET
var X = 82;
document.write(X);
{
  let X = 33;
  document.write("<br>" + X);
}
document.write("<br>" + X);
//LET


//OBJECTS
let car = {
  make: "Dodge ",
  model: "Viper ",
  year: "2021 ",
  color: "red ",
  description : function()  {
    return "The car is a " + this.year + this.color + this.make + this.model;
  }
};
document.getElementById("Car_Object").innerHTML = car.description();
//OBJECTS