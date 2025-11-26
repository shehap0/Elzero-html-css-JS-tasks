// task 1
console.log("task 1")

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.toLowerCase().split("",1)); // e
console.log(userName.toLowerCase().slice(0,1).repeat(3)); // eee

// task 2
console.log("task 2")

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.substring(2).startsWith(letterZ)); // True
console.log(word.includes(letterZ)); // True
console.log(word.endsWith(letterO.toLowerCase())); // True