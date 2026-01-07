let title="tasks from 79 to 85"
document.getElementById("title").textContent=title
document.getElementById("heading").textContent=title

// task 1
console.log("-----task 1-----")

let member={
    name:"Elzero",
    age:38,
    country:"Egypt",
    fullDetails:function (){
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
    }
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt


// task 2
console.log("-----task 2-----")

// Method One
let objMethodOne={
    property:"jeffrey epstein 67"
}
console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo=Object.create({property:"jeffrey epstein 67"})
console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree=Object.assign({},objMethodOne)
console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour=new Object({property:"jeffrey epstein 67"})
console.log(objMethodFour.property); // "Method Four"


// task 3
console.log("-----task 3-----")

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line

let finalObject=Object.assign({} ,{a} ,threeNums ,twoNums)
console.log(finalObject);
/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/


// task 4
console.log("-".repeat(5) + "task 5" + "-".repeat(5))

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  }
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"