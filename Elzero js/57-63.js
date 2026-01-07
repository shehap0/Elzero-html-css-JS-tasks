// task 1
console.log("task 1")

function sayHello(Name, gender) {
    if (gender==="Male") {
        console.log(`Hello Mr ${Name}`)
    }else if(gender ==="Female"){
        console.log(`Hello Miss ${Name}`)
    }else console.log(`hello ${Name}`)
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// task 2
console.log("task 2")
function calculate(firstNum, secondNum="undefined", operation="add") {
    if(secondNum ==="undefined"){ 
        return console.log("Second Number Not Found")
    }
    switch (operation) {
        case "add":
            return console.log(firstNum+secondNum)
        case "subtract":
            return console.log(firstNum-secondNum)
        case "multiply":
            return console.log(firstNum*secondNum)
    }
}

calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

// task 3
console.log("task 3")
function ageInTime(theAge){
    if (theAge>100 || theAge<10) {
        return console.log("Age out of range")
    }

    console.log(`age in month: ${theAge*12}`)
    console.log(`age in weeks: ${theAge*12*4}`)
    console.log(`age in days: ${theAge*12*4*24}`)
    console.log(`age in hours: ${theAge*12*4*24*60}`)
    console.log(`age in seconds: ${theAge*12*4*24*60*60}`)
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// task 4
console.log("task 4")
function checkStatus(a, b, c){
    var Name;
    var age;
    var status;
    // identify the name:
    typeof a === "string" ? Name=a : typeof b === "string" ? Name=b : Name=c
    
    // Identify the age:
    typeof a === "number" ? age=a : typeof b === "number" ? age=b : age=c
    
    // Identify the status:
    typeof a === "boolean" ? status=a : typeof b === "boolean" ? status=b : status=c

    if(status===true){
        status=""
    }else{status="Not "}

    console.log(`Hello ${Name}, Your Age Is ${age}, You Are ${status}Available For Hire`)
}

// Needed Output
checkStatus("codezila", 32, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 27, "ali"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "shehap", 20); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// task 5
console.log("task 5")
function createSelectBox(startYear, endYear) {
    document.write("<select>")
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}">${i}</option>`)
    }
    document.write("</select>")
}
createSelectBox(2000, 2021);

// task 6
console.log("task 6")

function multiply(...numbers) {
    let result = 1; // start with 1 for multiplication

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
            // convert float to integer
            let num = Math.floor(numbers[i]);
            result *= num;
        }
    }

    console.log(result);
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000