// title for the page
    let title="tasks from 102 to 110"
    document.getElementById("title").textContent=title
    document.getElementById("heading").textContent=title

// task 1

// let input = prompt("enter number from x to y")

// let [startStr, endStr] = input.split("-");
// let start = Math.min(+startStr, +endStr);
// let end   = Math.max(+startStr, +endStr);

// while(start <= end){
//     console.log(start)
//     start++
// }


// task 2
let pop = document.querySelector("#task-2");
pop.style.display = "none";

let button = document.querySelector("#task-2 button");
button.style.padding = "10px";

let timeout = setTimeout(() => {
    pop.style.display = "block";
}, 5000);

button.addEventListener("click", function(){
    pop.style.display="none"
});


// task 3

let div = document.querySelector("#task-3");

function count() {
    let num = parseInt(div.innerHTML, 10);  // Convert string to number
    num -= 1;  // Decrement
    div.innerHTML = num;  // Update display
    if (num === 0) {
        clearInterval(counter);
    }
}

let counter = setInterval(count, 1000);  // Pass function reference, no ()

// task 4 and task 5


function count() {
    let num = parseInt(div.innerHTML, 10);  // Convert string to number
    num -= 1;  // Decrement
    div.innerHTML = num;  // Update display
    if (num === 5) {
        // window.open("elzero.org")
    }else if(num === 0){
        clearInterval(counter);
        // window.open("elzero.org")

    }
}

// let counter = setInterval(count, 1000);  // Pass function reference, no ()