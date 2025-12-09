// task 1
console.log("Task 1");
// Test Case 1
var num = 9; // "009"
if (num<10) {
  console.log(`00${num}`)
} else if(num>10 && num<100){
  console.log(`0${num}`)
} else {
  console.log(num)
}

// Test Case 2
var num = 20; // "020"
if (num<10) {
  console.log(`00${num}`)
} else if(num>10 && num<100){
  console.log(`0${num}`)
} else {
  console.log(num)
}

// Test Case 3
var num = 110; // "110"
if (num<10) {
  console.log(`00${num}`)
} else if(num>10 && num<100){
  console.log(`0${num}`)
} else {
  console.log(num)
}

////////////////////

// task 2
console.log("Task 2");
var num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str) {
  console.log(`${num1} Is The Same Value As ${str}`);
}
if (num1 !== str) {
  console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`)
}
if (num1 != str2 || num1 !== str2){
  console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`)
}
if(typeof(str) == typeof(str2)){
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
}

//////////////////////////

// task 3
console.log("Task 3");
var num1 = 10;
var num2 = 30;
var num3 = "30";

// Needed Output
if(num3 > num1 && num3 !== num2) {
  console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}
if(num3 > num1 && num3 == num2 && num3 !== num2){
  console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}
if(num3 !== num1 && typeof(num3) != typeof(num2) ){
  console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`)
}

////////////////////

// task 4
// Edit What You Want Here
console.log("Task 4");

var num1 = 11;
var num2 = 10;
var num3 = 11;
var num4 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}