let title="Task from 64 to 70"
document.getElementById("title").textContent=title
document.getElementById("heading").textContent=title
// task 1
console.log("task 1")
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        return`${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}.`
    }
    function ageWithMessage(zAge) {
        return `Your age is ${zAge.split(" ")[0]}`
    }
    function countryTwoLetters(zCountry) {
        return `you live in ${zCountry.slice(0,2).toUpperCase()}`
    }
    function fullDetails(zName, zAge, zCountry) {
        return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(zName, zAge, zCountry)
}
console.log(getDetails("shehap sherif", "20 is my age", "Egypt"))

// task 2
console.log("task 2")
// turn this function to arrow function
// function itsMe() {
//   return `Iam A Normal Function`;
// }
let itsMe = () => "iam a Normal Function"
console.log(itsMe()); // Iam A Normal Function

// turn this function to arrow function
// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }
let urlCreate = (protocol, web, tld) => `${protocol}://${web}.${tld}`
console.log(urlCreate("https", "elzero", "org")); // https://elzero.org/ // i edited in function to transform you to new Elzero site

// task 3
console.log("task 3")
// turn function to arrow function
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Available`;
//     };
//   };
// }
let checker = zName => status => salary =>status === "Available" ? `${zName}, My Salary Is ${salary}` : "Iam Not Available";


console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Available

// task 4
console.log("task 4")

function specialMix(...data) {
    let sum = 0;

    for (let i = 0; i < data.length; i++) {
        let num = parseInt(data[i]);

        if (!isNaN(num)) {
            sum += num;
        }
    }

    if (sum === 0) {
        return "All Is Strings";
    }

    return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings