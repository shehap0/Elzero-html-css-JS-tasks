/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

var names = function (...data) {
  return `String ${data.map(name => `[${name}]`).join(", ")} => Done !`
}
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

var names = (...data) => `String ${data.map(name => `[${name}]`).join(", ")} => Done !`
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];
// i really dont know how to solve this 

let calc = (one, two, ...nums) => one+two+nums[0];

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80