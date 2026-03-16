// title for the page
let title = "tasks from 159 to 168";
document.getElementById("title").textContent = title;
document.getElementById("heading").textContent = title;

// task 1
console.log("task 1")

let now = new Date()
let birth = new Date(2005, 5)
let diff = now - birth

let seconds = diff / 1000
let minutes = seconds / 60
let hours = minutes / 60
let days = hours / 24
let months = days / 30
let years = months / 12

console.log(`seconds ${Math.floor(seconds)}`)
console.log(`minutes ${Math.floor(minutes)}`)
console.log(`hours ${Math.floor(hours)}`)
console.log(`days ${Math.floor(days)}`)
console.log(`months ${Math.floor(months)}`)
console.log(`years ${Math.floor(years)}`)


// task 2
console.log("task 2")

let task2 = new Date("1980-01-01T00:00:01")
console.log(task2)


// task 3
console.log("task 3")

let today = new Date();
let prevLast = new Date(today.getFullYear(), today.getMonth(), 0);

console.log(prevLast.toString());
console.log(`Previous Month Is ${prevLast.toLocaleString('default', { month: 'long' })} And Last Day Is ${prevLast.getDate()}`);


// task 4
console.log("task 4")
console.log(new Date("Oct 25 1982 00:00:00 GMT+0200").toString());
console.log(new Date(1982, 9, 25, 0, 0, 0).toString());
console.log(new Date(402796800000).toString());


// task 5
console.log("task 5")
let start = performance.now();
// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }
let end = performance.now();
console.log(`Loop Took ${end - start} Milliseconds.`) 


// task 6
console.log("task 6")
// Write Your Generator Function Here
function* gen() {
    let num = 14;
    yield num
    num += 140;
    yield num
    num += 400;
    yield num
    num += 540;
    yield num
    num += 740;
    yield num
    num += 940;
    yield num
    num += 1140;
    yield num
    num += 1340;
    yield num
    num += 1540;
    yield num
}


let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}


// task 7
console.log("task 7")

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
  const seen = new Set();

  for (const value of genNumbers()) {
    if (!seen.has(value)) {
      seen.add(value);
      yield value;
    }
  }

  for (const value of genLetters()) {
    if (!seen.has(value)) {
      seen.add(value);
      yield value;
    }
  }
}

let generator2 = genAll();

console.log(generator2.next()); // {value: 1, done: false}
console.log(generator2.next()); // {value: 2, done: false}
console.log(generator2.next()); // {value: 3, done: false}
console.log(generator2.next()); // {value: 4, done: false}
console.log(generator2.next()); // {value: 5, done: false}
console.log(generator2.next()); // {value: "A", done: false}
console.log(generator2.next()); // {value: "B", done: false}
console.log(generator2.next()); // {value: "C", done: false}
console.log(generator2.next()); // {value: "D", done: false}