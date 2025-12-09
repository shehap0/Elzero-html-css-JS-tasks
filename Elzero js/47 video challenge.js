/*
  Array Challenge
*/
// you can't use any numbers
let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,counter+true).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(true,counter)); // ["Elham", "Mazero"]

console.log(my[counter-true].slice(zero,counter-true) + my[zero+true].slice(counter-true)); // "Elzero"

console.log(my[zero+true][my[zero+true].indexOf("r")] + my[zero+true][my[zero+true].indexOf("o")].toUpperCase()); // "rO"

//idk how osama mean to not use number (like is true count as number or not)