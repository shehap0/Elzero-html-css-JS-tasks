// task 1
console.log("task 1")
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(Math.round(100000.2)); // 100000
console.log(Math.ceil(99999.2)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.trunc(100000.55)); // 100000
console.log(Math.abs(-100000)); // 100000
console.log(parseInt("100000 nigga")); // 100000
// the rest is for you young man
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000

// task 2
console.log("task 2")
console.log(Math.abs(Number.MIN_SAFE_INTEGER)); // -9007199254740991

// task 3
console.log("task 3")
console.log(Number.MAX_SAFE_INTEGER-9007199254740975); // idk how to solve it

// task 4
console.log("task 4")
let myVar = "100.56789 Views"
console.log(parseInt(myVar)) // 100
console.log(Number(parseFloat(myVar).toFixed(2))) // 100.57

// task 5
console.log("task 5")
let num = 10;
console.log(Number.isInteger(num)+Number.isInteger(num)); // 2

// task 6
console.log("task 6")
let flt = 10.4;
console.log(Number(flt.toFixed(0))); // 10
console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10

// task 7
console.log("task 7")
console.log(Math.floor(Math.random() * 5))