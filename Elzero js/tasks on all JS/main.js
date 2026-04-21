// task 1
let fileName = "Elzero.php";
let task1 = fileName.split(".")
for (let i = 0; i < task1.length; i++) {
    console.log(task1[i])
}

// task 2
function addEl(str) {
    if(str===""){
        return ""
    }else if(str.match(/\b(El)/)){
        return str
    }else{
        return `El${str}`
    }
}
console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero

// task 3
let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
let second = myString.indexOf("@",myString.indexOf("@")+1)
console.log(myString.slice(0,second))
// Output Needed
"Hello Elzero Web School @ We Love Programming"

// task 4
function checkRange(n1, n2, n3, n4, n5) {
    if((Math.max(n1, n2, n3) <= Math.max(n4, n5)) && (Math.min(n1, n2, n3) >= Math.min(n4, n5))){
        return "yes all the number in range"
    }else{return "Not All Numbers Is In Range"}
}

console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range

// task 5
function replaceFirstWithLast(word) {
    return word[word.length - 1] + word.slice(1, -1) + word[0]
}

console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oelloH

// task 6
function checkBiggestNum(word) {
    return Math.max(...word.split(""))
}

console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9

// task 7
let nums = [20, 100, 50, 10, 15, -20, 30];
let task7 = nums.sort((a, b) => a - b).slice(-2)
console.log(task7)
// Needed Output
// [100, 50]

// task 8
let nums0 = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;
// Initialize a variable to keep track of the closest number found so far
let closest = nums0[0];

for (const num of nums0) {
  // If the current number is closer to the goal than the closest found so far, update it
  if (Math.abs(num - goal) < Math.abs(closest - goal)) {
    closest = num;
  }
}

console.log(closest); // Output: 88
// Closest Number Is 88

// task 9
// swap every 2 char
function swapEveryTwoChars(word) {
    let result=word.split('')
    for (let i = 0; i < result.length; i++) {
        if(i%2==0){
            if(result[i] === result[i].toUpperCase()){
                    result[i] = result[i].toLowerCase()
                }else{
                    result[i] = result[i].toUpperCase()
                }
        }
    }
    return result.join('')
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello

// task 10
// Write Your Function Implementation Here
String.prototype.elzeroRepeat = function (times) {
  return this.repeat(times);
};

console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero

// task 11
let myMoney = 5301503206;

console.log(myMoney.toLocaleString())
// Needed Output
// 5,301,503,206

// task 12
let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];

for (let i = 0; i < names.length; i++) {
    if (names[i].at(0).toLowerCase()===names[i].at(-1).toLowerCase()) {
        result.push(names[i])
    }
}

console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']

// task 13
let theName = "Elzero";
console.log(theName.at(0)+theName.at(-1))
// Line 1 => Eo
console.log(theName.slice(1,-1))
// Line 2 => lzer
console.log(theName.slice(theName.length/2-1,theName.length/2+1))
// Line 3 => ze

// task 14
function repeatWithRules(word) {
    let result=[]
    for(let i = 0; i < word.length; i++){
        for (let index = 0; index <= i; index++) {
                result.push(word[i])
            }
        }
        return result.join('')
    }

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo

// task 15
function concatenateWithoutLast(words) {
    let result = []
    for(let i = 0 ; i < words.length ; i++){
        result.push(words[i].slice(0,-1))
    }
    return result.join(' ')
}

console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School

// task 16
function getCharacters(word, nums) {
    return word.slice(0, nums)+word.slice(-nums)
}

console.log(getCharacters("Elzero School", 2)); // Elol
console.log(getCharacters("Elzero School", 3)); // Elzool

// task 17
function formatName(theName) {
    let arr = theName.split(" ")
    let result=[]
    for (let i = 0; i < arr.length; i++) {
        if(i===0){
            result.push(arr[i].slice(0,1).toUpperCase())
        }else result.push(arr[i].slice(0,1).toLowerCase())
    }
    return result.join(".")
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s

// task 18
let st = "elzero";
console.log(st[0].toUpperCase() + st.slice(1)); // Elzero
console.log(st.charAt(0).toUpperCase() + st.substring(1)); // Elzero
console.log(st.at(0).toUpperCase() + st.substr(1)); // Elzero
console.log(st.split("").map((letter, index) => (index === 0 ? letter.toUpperCase() : letter)).join("")); // Elzero
console.log(st.replace(/^./, st[0].toUpperCase())); // Elzero
console.log(st.split("", 1).join().toUpperCase().concat(st.slice(1))); // Elzero
console.log(st.split("").shift().toUpperCase() + st.substring(1)); // Elzero

// task 19
let sts = "Web SchoolElzero ";

console.log(sts.slice(-7)+sts.slice(0,-7))

// task 20
let stst = "Elzero";
console.log(stst.at(-1)); // o
console.log(stst.charAt(stst.length - 1)); // o
console.log(stst[stst.length - 1]); // o
console.log(stst.slice(-1)); // o
console.log(stst.slice(stst.length - 1)); // o
console.log(stst.split("").pop()); // o
console.log(stst.split("").reverse().shift()); // o
console.log(/.$/.exec(stst)[0]); // o

// task 21
function getLastDigit(num) {
  return num % 10;
}

console.log(getLastDigit(1)); // 1
console.log(getLastDigit(18)); // 8
console.log(getLastDigit(305)); // 5
console.log(getLastDigit(1569)); // 9
console.log(typeof getLastDigit(1569)); // Number

// task 22
let str1 = "AElzero";
let str2 = "ZAcademy";

console.log((str1.slice(1)+str2.slice(1))); // Elzero Academy

// task 23
function reversing(str) {
    return str.replace(/\w+/g, (el) => el.split("").reverse("").join(""));
}

console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl

// task 24
function dashBetweenOdd(num) {
    num = num.toString();

    // Method 1
    result = "";

    for (let i = 0; i < num.length; i++) {
        result += num[i];

        if (i + 1 < num.length && num[i + 1] % 2 !== 0 && num[i] % 2 !== 0) {
            result += "-";
        }
    }

    return result;
}

console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922

// task 25
let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
myArr.length=0
console.log(myArr)
let myArr2 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
while (myArr2.length > 0) {
    myArr2.pop();
}
console.log(myArr2); // []

let myArr3 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
myArr3.splice(0)
console.log(myArr3)

// task 26
let myArr4 = [10, 10, 20, 20, 10, 30, 50, 20, 10];
let unique1 = [...new Set(myArr4)];
console.log(unique1)
// let unique2 = myArr4.filter((value, index) => {
//     return myArr4.indexOf(value) === index;
// });
// console.log("2. Using filter + indexOf:", unique2);
// let unique3 = [];
// for (let i = 0; i < myArr.length; i++) {
//     if (!unique3.includes(myArr[i])) {
//         unique3.push(myArr[i]);
//     }
// }
// console.log("3. Using for loop + includes:", unique3);
// let unique4 = myArr.reduce((acc, current) => {
//     if (!acc.includes(current)) {
//         acc.push(current);
//     }
//     return acc;
// }, []);
// console.log("4. Using reduce:", unique4);

// task 27
// ascii code
let arr = ["69", "108", "122", "101", "114", "111"];
let word = arr.map(num => String.fromCharCode(Number(num))).join("");
console.log(word);

// task 28


// Write Your Function Here
function customMerge(...arrays) {
    let result = [];
    
    // Step 1: Loop through all arrays manually
    for (let i = 0; i < arrays.length; i++) {
        let currentArray = arrays[i];
        
        // Step 2: Add each element one by one
        for (let j = 0; j < currentArray.length; j++) {
            let item = currentArray[j];
            
            // Convert to number (handles strings like "30")
            let num = Number(item);
            
            // Only add if it's a valid number
            if (!isNaN(num)) {
                result.push(num);
            }
        }
    }
    
    // Step 3: Sort the final array ascending
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                // Swap
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    
    return result;
}

console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]));
// Expected: [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]

// task 29
function customCalc(...array){
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if(!isNaN(Number(array[i]))){
            result+=Number(array[i])
        }
    }
    return result * array[0] * array[array.length-1]
}
console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10

// task 30
for (let i = 1; i < 100; i += 5) {
    if(i%2!==0){
        console.log(i);
    }
}
// Output Needed
// 1
// 11
// 21
// 31
// 41
// 51
// 61
// 71
// 81
// 91

// task 31
let myArrayyyyy = [100, 200, 300, 400];

console.log("Original:", myArrayyyyy);

// 1. Spread Operator (Most Popular)
const clone1 = [...myArrayyyyy];

// 2. slice()
const clone2 = myArrayyyyy.slice();

// 3. concat()
const clone3 = myArrayyyyy.concat();

// 4. Array.from()
const clone4 = Array.from(myArrayyyyy);

// 5. JSON method (deep clone for simple arrays)
const clone5 = JSON.parse(JSON.stringify(myArrayyyyy));

// 6. for loop (Manual)
const clone6 = [];
for (let i = 0; i < myArrayyyyy.length; i++) {
    clone6.push(myArrayyyyy[i]);
}

// 7. for...of loop
const clone7 = [];
for (let item of myArrayyyyy) {
    clone7.push(item);
}

// 8. map()
const clone8 = myArrayyyyy.map(item => item);

// 9. reduce()
const clone9 = myArrayyyyy.reduce((acc, item) => {
    acc.push(item);
    return acc;
}, []);

console.log("1. Spread   :", clone1);
console.log("2. slice    :", clone2);
console.log("3. concat   :", clone3);
console.log("4. Array.from:", clone4);
console.log("5. JSON     :", clone5);
console.log("6. for loop :", clone6);
console.log("7. for...of :", clone7);
console.log("8. map      :", clone8);
console.log("9. reduce   :", clone9);

// task 32
let strNumber = "10";
// Method 1
console.log(strNumber * 1); // 10
console.log(strNumber - 0); // 10 <= Same Solution
console.log(strNumber / 1); // 10 <= Same Solution
// Method 2
console.log(Number(strNumber)); // 10
console.log(parseInt(strNumber)); // 10
console.log(parseFloat(strNumber)); // 10
console.log(+strNumber); // 10
// Output Needed
// 10

// task 33
console.log(
    "%cElzero Web School",
    "background-color: #0075FF; color:#fff; padding:20px; font-size: 18px"
);

// task 34
let arr8 = [1, 1, 1, 2, 3, 4, 3];
let uniqueElements1 = [...new Set(arr8)];
let uniqueElements2 = arr8.filter((num, index) => arr8.indexOf(num) === index);
let uniqueElements3 = arr8.reduce((acc, num) => {
    return acc.includes(num) ? acc : [...acc, num];
}, []);
let uniqueElements4 = [];
for (let i = 0; i < arr8.length; i++) {
    if (!uniqueElements4.includes(arr8[i])) {
        uniqueElements4.push(arr8[i]);
    }
}

console.log(uniqueElements1); // [1, 2, 3, 4]
console.log(uniqueElements2); // [1, 2, 3, 4]
console.log(uniqueElements3); // [1, 2, 3, 4]
console.log(uniqueElements4); // [1, 2, 3, 4]

// task 35
function generateSerial(length = 20) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    let serial = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        serial += chars[randomIndex];
    }
    
    return serial;
}
console.log(generateSerial()); // 9cBcrg3kcWF4GZSlWXAM
console.log(generateSerial()); // vPeu6HXBgiXXj6jpch4P
console.log(generateSerial()); // RQuHFBjCdnp0Ghhp0544

// task 36
let smallLetters = ""
for (let i = 97; i <= 122; i++) {
    smallLetters += String.fromCharCode(i)
}
console.log(smallLetters); // abcdefghijklmnopqrstuvwxyz

// task 37
let numOne = 100;
let numTwo = 200;
if (numOne > numTwo) {
  console.log("1st > 2nd");
} else if (numOne < numTwo) {
  console.log("1st < 2nd");
} else {
  console.log("1st = 2nd");
}
// Write Your Ternary Operator Code Here
// Using a ternary operator to achieve the same result
const ternaryResult = numOne > numTwo
    ? "1st > 2nd"
    : numOne < numTwo
    ? "1st < 2nd"
    : "1st = 2nd";
console.log(ternaryResult);

// task 38
let str = "i lovE elzeRO weB schOOL";
str = str.split(" ");
for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1).toLowerCase();
}
str = str.join(" ");

console.log(str);
// Output Needed
// "I Love Elzero Web School"

// task 39
let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];
// Object.freeze(myData);
myData.push("Name");
console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']

// task 40
const task40 = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};
Object.seal(task40);
task40.skill = "Programming";
console.log(task40.user); // Elzero
console.log(task40.age); // 41
console.log(task40.country); // Egypt
console.log(task40.skill); // Undefined

// task 41
const task41 = {
  user: "Elzero",
  age: 41,
  country: "Egypt",
};

const cloned1 = {...task41}
console.log(cloned1); // {user: 'Elzero', age: 41, country: 'Egypt'}

const cloned2 = Object.assign({}, task41)
console.log(cloned2)

const cloned3 = JSON.parse(JSON.stringify(task41))
console.log(cloned3)

const cloned4 = {}
for (const key in task41) {
    if(task41.hasOwnProperty(key)){
        cloned4[key]=task41[key]
    }
}
console.log(cloned4)

// task 42
let printed = false;
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.shiftKey && event.altKey && !printed) {
    console.log("Ctrl + Shift + Alt Pressed");
    printed = true;
  }
});

// task 43
fetch("https://api.github.com/users/ElzeroWebSchool/repos")
  .then((response) => response.json())
  .then((repos) => {
    const top15 = repos.slice(0, 15);

    const table = document.createElement("table");
    table.innerHTML = `
      <thead>
        <tr>
          <th>Repo Name</th>
          <th>Stars</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        ${top15
          .map(
            (repo) => `
          <tr>
            <td>${repo.name}</td>
            <td>${repo.stargazers_count}</td>
            <td><a href="${repo.html_url}" target="_blank">Visit</a></td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    `;

    document.querySelector(".container").appendChild(table);

    const style = document.createElement("style");
    style.textContent = `
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        font-family: Arial, sans-serif;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      th {
        background-color: #0075FF;
        color: white;
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      tr:hover {
        background-color: #e0e0e0;
      }
      a {
        color: #0075FF;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);
  })
  .catch((error) => console.error("Error:", error));

// task 44
let last = 30;
let total = 0;
let skip = true;
while (last > 0) {
    last--;
    if (last % 2 !== 0) {
        if (skip) {
            console.log(last);
            total += last;
        }
        skip = !skip;
    }
}
console.log(total);

// First Request Output Needed
29
25
21
17
13
9
5
1
// Second Request Output Needed
120

// task 45
let rangeEnd = 10;

// Method 1: For loop
let myRange1 = [];
for (let i = 1; i <= rangeEnd; i++) {
    myRange1.push(i);
}
console.log(myRange1);

// Method 2: Array.from()
let myRange2 = Array.from({ length: rangeEnd }, (_, i) => i + 1);
console.log(myRange2);

// Method 3: Spread + keys
let myRange3 = [...Array(rangeEnd + 1).keys()].slice(1);
console.log(myRange3);

// Output Needed
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// task 46
let task46 = [10, -20, 300, 50, 100, -50];

// Method 1: Math.max() with spread
let max1 = Math.max(...task46);
console.log(max1);

// Method 2: sort() method
let max2 = [...task46].sort((a, b) => a - b).pop();
console.log(max2);

// Method 3: reduce()
let max3 = task46.reduce((a, b) => (b > a ? b : a));
console.log(max3);

// Method 4: for loop
let max4 = task46[0];
for (let i = 1; i < task46.length; i++) {
    if (task46[i] > max4) max4 = task46[i];
}
console.log(max4);

// console.log(maxNumber); // 300


// task 47
document.querySelector(".form button").addEventListener("click", function () {
    const text = document.querySelector(".form textarea").value;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "file.txt";
    link.click();
    URL.revokeObjectURL(link.href);
});

// task 48
function createStars1(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += "*".repeat(2 * i - 1) + "\n";
  }
  return result.trim();
}

console.log(createStars1(8));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***************

// task 49
function createStars2(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += "*".repeat(2 * i - 1) + "\n";
  }
  for (let i = num - 1; i >= 1; i--) {
    result += "*".repeat(2 * i - 1) + "\n";
  }
  return result.trim();
}

console.log(createStars2(3));

// Output Needed
// *
// ***
// *****
// ***
// *

console.log(createStars2(7));

// Output Needed
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***********
// *********
// *******
// *****
// ***
// *


// task 50
function createStars3(num) {
  const lines = [];
  // top half
  for (let i = 0; i < num; i++) {
    const spaces = " ".repeat(i);
    const stars = "*".repeat(2 * (num - i) - 1);
    lines.push(spaces + stars);
  }
  // bottom half (mirror)
  for (let i = num - 1; i >= 0; i--) {
    const spaces = " ".repeat(i);
    const stars = "*".repeat(2 * (num - i) - 1);
    lines.push(spaces + stars);
  }
  return lines.join("\n");
}

console.log(createStars3(6));

// Output Needed
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
//      *
//     ***
//    *****
//   *******
//  *********
// ***********