// task 1
console.log("task 1")
var start = 10;
var end = 100;
var exclude = 40;

// Output
for (let i = start; i <= end; i=i+10) {
    if(i===exclude){
        continue;
    }
    console.log(`number: ${i}`)
}

// task 2
console.log("#".repeat(20))
console.log("task 2")
var start = 10;
var end = 0;
var stop = 3;

for (let i = start; i >= stop; i--) {
    if (i<start) {
        console.log(`0${i}`)
    }else {console.log(i)}
}

// task 3
console.log("#".repeat(20))
console.log("task 3")

var start = 1;
var end = 6;
var breaker = 2;

for(let i=start; i<=end ; i++){
    console.log(i)
    for(let j=breaker; j<end ; j=j+breaker){
        console.log(`-- ${j}`)
    }
}

// task 4
console.log("#".repeat(20))
console.log("task 4")

var index = 10;
var jump = 2;

for (;;) {
    if (index==jump) {
        break
    }
    console.log(index)
    index=index-jump
}

// task 5
console.log("#".repeat(20))
console.log("task 5")

var friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
var letter = "a";

var x=1
for (i=0; i<friends.length; i++) {
    if(friends[i][0]==letter.toUpperCase()){
        continue
    }
    console.log(`${x} => ${friends[i]}`)
    x++
}

// task 6
console.log("#".repeat(20))
console.log("task 6")

var start = 0;
var swappedName = "elZerO";
var result=""

// Output -> "ELzERo"
for (let i = start; i < swappedName.length; i++) {
    var char=swappedName[i]
    if(char===char.toUpperCase()){
        result += char.toLowerCase()
    }else{result += char.toUpperCase()}
}
console.log(result)

// task 7
console.log("#".repeat(20))
console.log("task 7")

var start = 0;
var mix = [1, 2, 3, "A", "B", "C", 4];
start++
for (let i = start; i < mix.length; i++) {
    if(typeof mix[i] === "number"){
        console.log(mix[i])
    }
}