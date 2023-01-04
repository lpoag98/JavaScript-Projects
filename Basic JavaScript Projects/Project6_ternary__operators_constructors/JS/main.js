
//TYPEOF OPERATOR

function Ride_Function()    {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function checkAge() {
    var age = document.getElementById("ageInput").value;
    var output = (age < 18) ? "You are not old enough to vote" : "You can vote!";
    document.getElementById("output").innerHTML = output;
  }

  function Vehicle(Make, Model, Year, Color)    {
        this.Vehicle_Make = Make;
        this.vehicle_Model = Model;
        this.vehicle_Year = Year;
        this.vehicle_Color = Color;
  }
  var Jack = new Vehicle("Dodge", "Viper", "2020", "Red")
  var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black")
  var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard")
  function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.vehicle_Year;
  }

  
function count_Function()   {
    document.getElementById("Counting").innerHTML = Count();
    function Count()    {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

