// title for the page
let title = "tasks from 147 to 158";
document.getElementById("title").textContent = title;
document.getElementById("heading").textContent = title;

// task 1
console.log("task 1")

class Car{
  constructor(name, model, price){
    this.n = name
    this.m = model
    this.p = price
  }
  run(){
    return "car is now running"
  }
  stop(){
    return "car is stopped"
  }
}
let carOne = new Car("MG", 2022, 1420000)
let carTwo = new Car("BMW", 2014, 320000)
let carThree = new Car("Mercedes", 2025, 2420000)
console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`)
console.log(carOne.run())
// Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"


// task 2
console.log("task 2")

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends Phone{
  constructor(name, serial, price, size){
    super(name, serial, price)
    this.size = size
  }
  fullDetails(){
    return `${this.name} Serial is ${this.serial} and size is ${this.size}`
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown


// task 3
console.log("task 3")
class User {
  #c
  constructor(username, card) {
    this.u = username;
    this.#c = String(card);
  }
  showData(){
    let validCard = this.#c.replace(/\B(?=(\d{4})+(?!\d))/g, '-')
    return `Hello ${this.u} Your Credit Card Number Is ${validCard}`
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData());
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData());
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData());
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined


// task 4
console.log("task 4")
// Write Your Code Here
String.prototype.addLove = function(){
  return "I Love Elzero Web School"
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School


// task 5
console.log("task 5")

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// writable
// enumerable
// configurable

// Write Your Code Here
Object.defineProperties(myObj,{
  id:{
    enumerable:false
  },
  score: {
    writable:false
  }
})
delete myObj.country

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output
// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}