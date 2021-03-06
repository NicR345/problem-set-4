/*
 * Hello. 2 points.
 */

function hello() {

  // WRITE YOUR EXERCISE 1 CODE HERE
var div = document.getElementById ("output1");
div.innerHTML = ("Hello, AP Computer Science Principles!");
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {
  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  // WRITE YOUR EXERCISE 2 CODE HERE
name = prompt("Enter your name");
var div = document.getElementById ("output2");
div.innerHTML = ("Hello, " + name + "!");
  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE
 var farhei = ((cels * (9/5)) + 32).toFixed(2);
var div = document.getElementById ("output3");
div.innerHTML = (cels + " degrees Celsius equals " + farhei +" degrees Fahrenheit.");
  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY
  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
var celsi = ((fahr - (32)) * (5/9)).toFixed(2);
var div = document.getElementById ("output4");
div.innerHTML = (fahr + " degrees Fahrenheit equals " + celsi +" degrees Celsius.");
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
let miles = (inches/63360);
miles = (Math.floor(miles));
let yards = (inches % 63360/36);
yards = (Math.floor(yards));
let feet = (inches % 63360 % 36/12);
feet = (Math.floor(feet));
let inchy = (inches % 63360 % 36 % 12);
inchy = (Math.floor(inchy));
var div = document.getElementById ("output5");
div.innerHTML = ("Miles: " + miles + "<br>Yards: " + yards + "<br>Feet: " + feet + "<br>Inches: " + inchy);
  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
let kilometers = (centimeters/100000);
kilometers = (Math.floor(kilometers));
let meters = (centimeters % 100000/100);
meters = (Math.floor(meters));
let centi = (centimeters % 100000 % 100);
centi = (Math.floor(centi));
var div = document.getElementById("output6");
div.innerHTML = ("Kilometers: " + kilometers + "<br>Meters: " + meters + "<br>Centimeters: " + centi);

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
let gallons = (fluidOunces/128);
gallons = (Math.floor(gallons));
let quarts = (fluidOunces % 128/32);
quarts = (Math.floor(quarts));
let pints = (fluidOunces % 128 % 32/16);
pints = (Math.floor(pints));
let cups = (fluidOunces % 128 % 32 % 16/8);
cups = (Math.floor(cups));
let floz = (fluidOunces % 128 % 32 % 16 % 8);
floz = (Math.floor(floz));
var div = document.getElementById("output7");
div.innerHTML = ("Gallons: " + gallons + "<br>Quarts: " + quarts + "<br>Pints: " + pints + "<br>Cups: " + cups + "<br>Fluid Ounces: " + floz)
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  let tons = (ounces/32000);
  tons = (Math.floor(tons));
  let pounds = (ounces % 32000/16);
  pounds = (Math.floor(pounds));
  let oz = (ounces % 32000 % 16);
  oz = (Math.floor(oz));
  var div = document.getElementById("output8");
  div.innerHTML = ("Tons: " + tons + "<br>Pounds: " + pounds + "<br>Ounces: " + oz);
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE
  let dollars = (pennies/100);
  dollars = (Math.floor(dollars));
  let quarters = (pennies % 100/25);
  quarters = (Math.floor(quarters));
  let dimes = (pennies % 100 % 25/10);
  dimes = (Math.floor(dimes));
  let nickels = (pennies % 100 % 25 % 10/5);
  nickels = (Math.floor(nickels));
  let peni = (pennies % 100 % 25 % 10 % 5);
  peni = (Math.floor(peni));
  var div = document.getElementById("output9");
  div.innerHTML = ("Dollars: " + dollars + "<br>Quarters: " + quarters + "<br>Dimes: " + dimes + "<br>Nickels: " + nickels + "<br>Pennies: " + peni);
  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE
amount = amount * 100;
let q = 0;
let d = 0;
let n = 0;
q = (Math.floor(amount / 25));
amount = (amount % 25);
d = (Math.floor(amount / 10));
amount = (amount % 10);
n = (Math.floor(amount / 5));
amount = (amount % 5);
let change = (q + d + n + amount).toFixed(0);
let thing = change;
if (thing > 1) {
  thing =("coins.")
}
else {
  thing = ("coin.")
}
var div = document.getElementById("output10");
div.innerHTML = (`${change} ${thing}`);
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
