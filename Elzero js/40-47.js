//you can't use numbers on all tasks
// task 1
var myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
var num = 3;

// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

var myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// Method 2
console.log(myFriends.slice(myFriends.indexOf("Ahmed"),myFriends.indexOf("Gamal"))); // ["Ahmed", "Elham", "Osama"];


// task 2
// not allowed yo use slice method
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop()
friends.shift()
console.log(friends); // ["Eman", "Osama"]


// task 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr=arrTwo.reverse().slice(0,1).concat(arrOne.reverse(), arrTwo.reverse().slice(0,2).reverse())); // ["Z", "X", "D", "C", "B", "A"]
// idk what i did above but it works


// task 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.lastIndexOf("Facebook")+true][words.indexOf("Google")].slice(words.lastIndexOf("Facebook")+true).toUpperCase()); // ZERO


// task 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack[1] === needle ){
    console.log("Found")
}
if (haystack.includes(needle)) {
    console.log("Found")
}
if (haystack.indexOf(needle) !== -1) {
    console.log("Found")
}

// task 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs=arr2[arr2.indexOf("F")].toLowerCase()+arr1[arr1.indexOf("X")].toLowerCase()+arr2[arr2.indexOf("Y")].toLowerCase()); // fxy