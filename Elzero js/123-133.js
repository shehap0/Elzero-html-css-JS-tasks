// title for the page
let title = "tasks from 123 to 133";
document.getElementById("title").textContent = title;
document.getElementById("heading").textContent = title;

// task 1
console.log("task 1")

let setOfNumbers = new Set().add(10)
setOfNumbers.add(20).add(2)
console.log(setOfNumbers)

let arr = [...setOfNumbers]
console.log(arr.pop())

// Needed Output
// Set(3) {10, 20, 2}
// 2


// task 2
console.log("task 2")
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let task2 = new Set(myFriends.toSorted())
console.log(task2)

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


// task 3
console.log("task 3")
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let entries = Object.entries(myInfo)
let myMap = new Map(entries)

console.log(myMap)
console.log(myMap.size)
console.log(myMap.has("role"))

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true


// task 4
console.log("task 4")
let theNumber = 100020003000;
let task4 = +[...new Set(theNumber.toString())].sort().join("").slice(-3)
console.log(task4)

// Needed Output
// let theNumber = 100020003000;

// console.log( +[...new Set(theNumber.toString())].sort().join("").slice(-3) );


// task 5
console.log("task 5")
let theName = "Elzero";

let way1 = Array.from(theName)
let way2 = [...theName]
let way3 = theName.split("")

// i only got 3
console.log(way1)
console.log(way2)
console.log(way3)
// console.log(way4)
// console.log(way5)
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']


// task 6
console.log("task 6")
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// we can't use sort cuz it will mess with the order of alphabet

let result = [
  ...chars.filter(x => typeof x === "number"),
  ...chars.filter(x => typeof x !== "number")
];

let numOfNumbers=0
for (let i = 0; i < chars.length; i++) {
    if(chars[i] >= 0 || chars[i] <= 0){
        numOfNumbers++
        console.log(numOfNumbers)
    }
}

result.copyWithin(0,numOfNumbers,numOfNumbers+numOfNumbers)
console.log(result)

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']


// task 7
console.log("task 7")
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let task7_way1 = [...numsOne, ...numsTwo]
let task7_way2 = numsOne.concat(numsTwo)
let task7_way3 = numsOne.slice()
task7_way3.push(...numsTwo)

console.log(task7_way1)
console.log(task7_way2)
console.log(task7_way3)

// Needed Output
// [1, 2, 3, 4, 5, 6]


// task 8
console.log("task 8")
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Math.max(...n1.concat(n2)) * n1.concat(n2).length);
// Needed Output
// 210