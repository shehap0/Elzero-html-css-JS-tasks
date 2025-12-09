// video 39 challenge
console.log("video 39 challenge")
/*
  Switch Challenge
  change the if statement to switch statement
*/

let job = "Manager";
let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

switch (job) {
    case "Manager":
        salary=8000
        console.log(`your job is ${job} and your salary is ${salary}`);
        break;
    case "IT":
    case "Support":
        salary=6000
        console.log(`your job is ${job} and your salary is ${salary}`);
        break;
    case "Developer":
    case "Designer":
        salary=7000
        console.log(`your job is ${job} and your salary is ${salary}`);
        break;
    default:
        salary=4000
        break;
}

/////////////////
/*
  If Challenge
  change the if to switch statement
*/
let holidays = 0;
let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

if (holidays==0) {
    money=5000
    console.log(`my money is ${money}`)
} else if (holidays==1 || holidays==2) {
    money=3000
    console.log(`my money is ${money}`)
} else if (holidays==3) {
    money=2000
    console.log(`my money is ${money}`)
}else if (holidays==4) {
    money=1000
    console.log(`my money is ${money}`)
}else {
    console.log(`my money is ${money}`)
}



/////////////////////////////



// task from 38 - 39
// task 1 
console.log("task 1") // like there is other tasks its the only one

// You Need To Remove Spaces And Make First Letter Capital => Friday
var day = "   friday  ";
switch(day){
    default:
        console.log("You Need To Remove Spaces And Make First Letter Capital -> "+day.trim().charAt(0).toUpperCase() + day.trim().substring(1))
        break;
    }

// Output => "No Appointments Available"
var day = "Friday";
var day = "Saturday";
var day = "Sunday";

switch(day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available")
        break;
    }

// Output => "From 10:00 AM To 5:00 PM"
var day = "Monday";
var day = "Thursday";
switch(day){
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM")
        break;
}

// Output => "From 10:00 AM To 6:00 PM"
var day = "Tuesday";
switch(day){
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM")
        break;
}


// Output => "From 10:00 AM To 7:00 PM"
var day = "Wednesday";
switch(day){
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM")
        break;
}

// Output => "Its Not A Valid Day"
var day = "World";
switch(day){
    default:
        console.log("its not valid day")
        break;
}



// in one block
switch(day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available")
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM")
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM")
        break
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM")
        break;
    default:
        console.log("its not valid day")
        break;
}