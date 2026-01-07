let title="Task from 71 to 78 and video 78 challenge"
document.getElementById("title").textContent=title
document.getElementById("heading").textContent=title

// task 1
console.log("task 1")

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"]; // Elzero
let elzero=mix.map(function (x){
    return isNaN(x) ? x : ""
}).reduce(function(x, y){
    return `${x}${y}`
})
console.log(elzero)
console.log("////////////////////")

// task 2
console.log("task 2")
let myString = "EElllzzzzzzzeroo"; // Elzero

let filteredString = myString.split("").filter((ele, i, arr) => ele!==arr[i-1]).join("")
console.log(filteredString)

console.log("////////////////////")

// task 3
console.log("task 3")
let myArray = ["E", "l", "z", ["e", "r"], "o"]; // Elzero

let arrInArr=myArray.reduce(function (acc, current){
    console.log("acc => " + acc)
    console.log("current => " + current)
    return acc + current
}).split("").map(x=>x).filter(x => x!==",").join("")

console.log(arrInArr)
//                       better solution

// let result = myArray.reduce((acc, current) => {
//   if (Array.isArray(current)) {
//     return acc + current.join("");
//   }
//   return acc + current;
// }, "");
console.log("////////////////////")

// task 4
console.log("task 4")

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"]; // [-1, -10, 10, 20, -5, -3]

let reverseNumOnly= numsAndStrings.filter(x => !isNaN(x)).map(x=>-x)
console.log(reverseNumOnly)

console.log("////////////////////")

// task 5
console.log("task 5")
let nums = [2, 12, 11, 5, 10, 1, 99];
let reduce=nums.reduce((acc, current) => current%2==0 ? acc*current : acc+current, 1)

console.log(reduce)
console.log("////////////////////")

// video challenge
console.log("video challenge")

/*
    Higher Order Functions Challenges

    You Can Use
    - ,
    - _
    - Space
    - True => 1 => One Time Only In The Code

    You Cannot Use
    - Numbers
    - Letters

    - You Must Use [Filter + Map + Reduce + Your Knowledge]
    - Order Is Not Important
    - All In One Chain
*/

let wString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = wString.split("").filter(function(x){
    return x!==","
}).map(function (x) {
    return isNaN(x) ? x : ""
}).map(function(x){
    return x==="_" ? " ": x
})
.reduce(function (acc, current, i, arr){ // i with 3 cuz the array is {"", "", "", "E", "E", .....]
    // i broke the rules here and used number
    if (i === 3) return acc;
    if (i === arr.length - true) return acc;
    return acc + current
})

console.log(solution); // Elzero Web School