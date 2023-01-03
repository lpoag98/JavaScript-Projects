//NaN: not a number
document.write("10"+5 +"0");


function my_Function()  {
    document.getElementById("Test1").innerHTML = 0/0 //result: NaN
}


function my_Function2()  {
    document.getElementById("Test2").innerHTML = isNaN('This is a string') //result: true
}


function my_Function3()  {
    document.getElementById("Test3").innerHTML = isNaN('007') //result: false
}
//NaN: not a number


function my_Function4()  {
    document.getElementById("Test4").innerHTML = (2E310) //result: Infinity
}


function my_Function_4()  {
    document.getElementById("Test-4").innerHTML = (-2E310) //result: -Infinity
}

document.write(10 > 2);
document.write(10 < 2);

function my_Function_True()  {
    document.getElementById("True").innerHTML = 10 > 2 //result: True
}

function my_Function_False()  {
    document.getElementById("False").innerHTML = 10 < 2 //result: False
}

function my_Function_Equal()  {
    document.getElementById("Equal").innerHTML = 10==10 //result: True
}

document.write(10==10)

function my_Function_Equal_3()  {
    document.getElementById("Equal_3").innerHTML = 10==="10" //result: False (reason: different type (string vs Snumeral))
}   //Same value different data type

//matching data and matching value
L = 16
P = 16
function my_Function_Equal_4()  {
    document.getElementById("Equal_4").innerHTML = L === P //true
}

//different data different value

S = "25"
T = 14
function my_Function_Equal_5()  {
    document.getElementById("Equal_5").innerHTML = S === T //false

}

//different data matching value
Q = 17
R = 18
function my_Function_Equal_6()  {
    document.getElementById("Equal_6").innerHTML = Q === R //false

}

//LOGICAL OPERATORS

 document.write(10 < 14 || 1 > 9)
function logi_Operator()   {
    document.getElementById("operator1").innerHTML = 10 < 14 || 1 > 9
}

function logi_Operator2()   {
    document.getElementById("operator2").innerHTML = 10 > 14 || 1 > 9
}

//LOGICAL OPERATORS

//NOT OPERATOR

function not_Function_1()   {
    document.getElementById("not_1").innerHTML = !(20 > 10);
}

function not_Function_2()   {
    document.getElementById("not_2").innerHTML = !(5 > 10);
}