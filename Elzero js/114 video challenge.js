// 114 video challenge.js

// ──────────────── Select elements ────────────────
let input = document.querySelector("input");
let addButton = document.querySelector("form button");
let resultDiv = document.querySelector("#result");

// Some simple styling (you can move to CSS file later)
input.style.padding = "12px";
input.style.borderRadius = "6px"; 
input.style.width = "220px";

addButton.style.padding = "12px 20px";
addButton.style.borderRadius = "6px";
addButton.style.backgroundColor = "#8e44ad";
addButton.style.color = "white";
addButton.style.border = "none";
addButton.style.cursor = "pointer";


// ──────────────── Make sure we have an array in localStorage ────────────────
// Only create empty array ONCE (if it doesn't exist yet)
if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify([]));
}

// ──────────────── Show all tasks when page loads ────────────────
displayTasks();

// ──────────────── Add new task when button clicked ────────────────
addButton.addEventListener("click", addTask);

function addTask() {
    let taskText = input.value.trim();   // remove extra spaces

    if (taskText === "") {
        alert("Please write something!");
        return;
    }

    // Get current tasks from storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task
    tasks.push(taskText);

    // Save back to storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear input
    input.value = "";

    // Refresh the list on screen
    displayTasks();
}

// ──────────────── Show all tasks from localStorage ────────────────
function displayTasks() {
    // Clear old content first
    resultDiv.innerHTML = "";

    // Get tasks from storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Create one div + delete button for each task
    tasks.forEach((task, index) => {
        // Create task container
        let taskDiv = document.createElement("div");
        taskDiv.style.padding = "10px";
        taskDiv.style.margin = "8px 0";
        taskDiv.style.backgroundColor = "#f5f5f5";
        taskDiv.style.borderRadius = "6px";
        taskDiv.style.display = "flex";
        taskDiv.style.justifyContent = "space-between";
        taskDiv.style.alignItems = "center";

        // Task text
        let span = document.createElement("span");
        span.textContent = task;
        taskDiv.appendChild(span);

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.backgroundColor = "#e74c3c";
        deleteBtn.style.color = "white";
        deleteBtn.style.border = "none";
        deleteBtn.style.padding = "6px 12px";
        deleteBtn.style.borderRadius = "4px";
        deleteBtn.style.cursor = "pointer";

        // Remember which task this button should delete (using index)
        deleteBtn.dataset.index = index;

        deleteBtn.addEventListener("click", removeTask);
        taskDiv.appendChild(deleteBtn);

        resultDiv.appendChild(taskDiv);
    });
}

// ──────────────── Remove one task ────────────────
function removeTask(event) {
    let indexToDelete = event.target.dataset.index; // the index we stored

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Remove item at that position
    tasks.splice(indexToDelete, 1);

    // Save updated list
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Refresh screen
    displayTasks();
}