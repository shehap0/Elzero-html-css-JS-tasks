/*
    Number Challenge
*/

let a = 100;
let b = 200.5;
let c = 1e2; // 100
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, c)))

// Use Variables a + d One Time To Get The Needed Output
console.log(a**Math.trunc(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(b)/a);
console.log((a+c) / (Math.trunc(b)/Math.trunc(d)));
console.log(a*Math.trunc(d) / c);
console.log(Number(d.toFixed(0)));

// Use Variables b + d To Get This Value
console.log(); // 66.67 => String
console.log(); // 67 => Number