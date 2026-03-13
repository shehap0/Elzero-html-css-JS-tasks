// title for the page
let title = "tasks from 115 to 122";
document.getElementById("title").textContent = title;
document.getElementById("heading").textContent = title;

// task 1
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here

// [a, , , , e] = myNumbers

// console.log(a * e); // 5


// task 2
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here

// [a, b, c, [d, e, [f, g]]] = mySkills

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


// task 3
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// arr3.splice(0, 1)
// arr3.push(arr1[0])
// console.log(arr3)
// Write Your Destructuring Assignment Here
// let [a, b, c] = arr3

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed


// task 4
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
// const {
//     age:a,
//     working:w,
//     country:c,
//     hobbies: [h1, , h3]
// } = member

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming


// task 5
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
// const {
//     title: t,
//     developer: d,
//     releases: {
//         "Oath In Felghana":[u,j],
//         "Ark Of Napishtim": {
//             US: u_price,
//             JAP: j_price
//         },
//         Origin: or
//     }
// } = game
// const o = Object.keys(game.releases)[0];
// const a = Object.keys(game.releases)[1];

// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD


// task 6
let chosen = 1;

const myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Get the chosen friend (index = chosen - 1)
const friend = myFriends[chosen - 1];

const {
  title: t,
  age: a,
  available: v,
  skills: [, s2]
} = friend;

// other version, maybe this the one Elzero wants.
// const [
//   { title: t1, age: a1, available: v1, skills: [, s21] },
//   { title: t2, age: a2, available: v2, skills: [, s22] },
//   { title: t3, age: a3, available: v3, skills: [, s23] }
// ] = myFriends;

// Display
display(t, a, v, s2);

function display(t, a, v, s2) {
  console.log(t);
  console.log(a);
  console.log(v ? "Available" : "Not Available");
  console.log(s2);
}

// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"