document.write("<h1 style=color:blue; font-size: 80px;font-weight: bold;text-align: center;font-family: Arial>Elzero</h1>");
console.log("%cElzero %cweb %cschool","color:red; font-size:40px;","color:green; font-size:40px font-width:bold;","color:blue;font-size:40px");

console.group("group 1");
console.log("Message One");
console.log("Message two");
console.group("child group");
console.log("Message One");
console.log("Message two");
console.group("grand child group");
console.log("Message One");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group 2")
console.log("Message One");
console.log("Message two");

console.table(["Elzero","ahmed","sameh","gamal","aya"])
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/