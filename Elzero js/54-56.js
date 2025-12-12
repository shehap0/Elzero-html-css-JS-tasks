// loop challenge

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have X Admins</div>`);
// count admins
let count=0
for (let i = 0; i < myAdmins.length; i++) {
    if(myAdmins[i]==="Stop"){
        break;
    }
    count++
}
document.write(`<div>We Have ${count} Admins</div>`);
document.write("<hr>")

for (let i = 0; i < count; i++) {
    document.write("<dev>")
    document.write(`the admin for team ${i+1} is ${myAdmins[i]}`)
    document.write("<h3>team members:</h3>")
    var x=1
    for (let j = 0; j < myEmployees.length; j++) {
        if(myEmployees[j][0]===myAdmins[i][0]){
            document.write(`<p>- ${x} ${myEmployees[j]}`)
            document.write("</p>")
            x++
        }
    }
    document.write("</dev>")
    document.write("<hr>")
}

// task 1
console.log("task 1")
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output

while (index<friends.length) {
    if (typeof friends[index] === "number" || friends[index][0] === "A") {
        index++
        continue
    }
    console.log(friends[index])
    index++
}