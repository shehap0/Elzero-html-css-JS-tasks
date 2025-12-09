// intro to array
// video 40

var arr=["ali", "shehap", "mohamed"]

console.log(arr[0])
console.log(`hello ${arr[1]}`)
console.log(`hello ${arr[1][0]}`) // first char at shehap  // s

// array in array
var arr=["ali", "shehap", "mohamed", ["marwan", "Elzero"]]

console.log(arr[3][1]) // Elzero

// editing in array
arr[0]="abo elnga"
console.log(arr)
arr[3]=["lol", "shalaby"]

console.log(typeof arr)
// check if it array
console.log(Array.isArray(arr))




// video 41 - using length in array

var viv =["shehap", "elsoy", "sama"]
console.log(viv.length) // 3


// how to add items to array in dynamic way
viv[viv.length]="soso"
console.log(viv)

// update last value
viv[viv.length-1]="soso"

// if we added item to array in greater length
viv[8]="ali" // it will add it but there will be empty space between (empty slot)
console.log(viv)




// video 42 - add and remove from array

/*
Arrays Methods [Adding And Removing]
- unshift("", "") Add Element To The First
- push("", "") Add Element To The End
- shift() Remove First Element From Array and return it
- pop() Remove Last Element From Array and return it
*/


// video 43 - search in array
var arrow =["ahmed", "mohamed", "sayed", "ahmed"]
console.log(arrow.indexOf("ahmed"))
console.log(arrow.indexOf("ahmed",2))

console.log(arrow.lastIndexOf("ahmed"))
console.log(arrow.lastIndexOf("ahmed",-2))


console.log(arrow.includes("ahmed"))
console.log(arrow.includes("ahmed",2))

if(arrow.includes("shehap") === false){
    console.log("not found")
}
// or
if(arrow.indexOf("shehap") === -1){ // -1 is like false (not found)
    console.log("not found")
}


// video 44 - sorting array
/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

var myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort().reverse());



// video 45 - slicing array
/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/
// slice
var myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -2));
console.log(myFriends);


// splice

myFriends.splice(0, 0, "Sameer", "Samara") // didn't delete thing but added it to first of array
console.log(myFriends);

var myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
myFriends.splice(0, 2, "Sameer", "Samara") // it deleted the 2 items from index 0
console.log(myFriends);

var myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
myFriends.splice(2, 2, "Sameer", "Samara") // it deleted the 2 items from index 2
console.log(myFriends);

// if you print while splicing it return the deleted items not the array as you expected 
console.log(myFriends.splice(2, 2, "Sameer", "Samara")); 


// video 46 - joining arrays
/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());