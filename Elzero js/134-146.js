// title for the page
let title = "tasks from 134 to 146";
document.getElementById("title").textContent = title;
document.getElementById("heading").textContent = title;

// task 1
console.log("task 1")

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(ip.match(/\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig))


// task 2
console.log("task 2")

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/Os(\d+)?O/ig))
// Output
// ['Os10O', 'OsO', 'Os100O']


// task 3
console.log("task 3")
let phone = "+(995)-123 (4567)";
console.log(phone.match(/\+\(\d{3}\)-\d{3} \(\d{4}\)/ig))


// task 4
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// http -> looking for http
// s? -> s is optional
// : -> :
// \/\/ -> looking for //
// (?:[-\w]+\.)? -> ?: is for non-capturing group
// [-\w]+ -> character or more
// \. -> .
// ? -? optional
// ([-\w]+) -> character or more, - is for domains like this my-site
// \.\w+ -> . then word
// (?:\.\w+)? -> ?: non-capturing group, . -> ., \w+ -> word or more, ? -> optional
// \/?.* -> /, ? -> optional, . -> anything, * -> zero or more


// task 5
console.log("task 5")
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reg = /\d{1,2}(\/| | \- )\d{1,2}(\/| | \- )\d{2,4}/ig;

console.log(date1.match(reg)); // "25/10/1982"
console.log(date2.match(reg)); // "25 - 10 - 1982"
console.log(date3.match(reg)); // "25 10 1982"
console.log(date4.match(reg)); // "25 10 82"


// task 6
console.log("task 6")
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?\:)?(\/\/)?(www\.)?\w+\.\w+.*/ig

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));