// title for the page
    let title="tasks from 94 to 101"
    document.getElementById("title").textContent=title
    document.getElementById("heading").textContent=title


// task 1 js code are in the html head

// task 2

// pseudocode

// 1 - make sure the class is lowercase
// 2 - if the user type 2 words, it count as 2 classes
// 3 - if the user didn't type any words, we make sure it don't accept it
// 4 - when the user enter a word, make sure that the words he puts get deleted
// 5 - make function every time user get out of the input
// 6 - another function to add the div(class) in it's place
// 7 - if there is no classes, show  "No classes to show"
// 8 - function to order the divs in alphabet order

// fixing margin/padding for task 2
document.querySelector(".task-2 .container").style.margin="10px";
document.querySelectorAll(".task-2 input").forEach(function(ele){
    ele.style.padding="5px"
    ele.style.margin="5px"
})


let add = document.querySelector(".add")
let remove = document.querySelector(".remove")

add.addEventListener("blur", function (){
    if(add.value === ""){
        return
    }
    let classname = add.value.toLowerCase()
    classname = classname.split(" ")
    add.value=""
    addClass(classname)
})

function addClass(classname){
    // sorting the name like this will be ideal cuz its sort the input only
    // not the overall classes after many inputs
    classname.sort()
    for (let i = 0; i < classname.length; i++) {
        let div = document.createElement("div")
        div.textContent = classname[i]
        div.className = classname[i]
        let container = document.querySelector(".class-list")
        container.append(div)
        document.querySelectorAll(".class-list div").forEach(function(ele){
            ele.style.cssText = "color:white; padding:10px; background-color:red; margin:5px; border-radius:5px;";
        })
        const classListDiv = document.querySelector('.class-list');
        const hasDiv = !!classListDiv.querySelector('div');
        if(hasDiv){
            let ele = document.querySelector(".class-list p")
            ele.remove()
        }
    }
}

remove.addEventListener("blur", function(){
    if(remove.value === ""){
        return
    }
    let classname = remove.value.toLowerCase()
    classname = classname.split(" ")
    remove.value=""
    removeClass(classname)
    const classListDiv = document.querySelector('.class-list');
    const hasDiv = !!classListDiv.querySelector('div');
    if(!hasDiv){
        let p = document.createElement("p")
        p.textContent="No Classes To Show"
        document.querySelector(".class-list").append(p)
    }
})

function removeClass(classname){
    let ele = document.querySelectorAll(".class-list div")

    for (let i = 0; i < ele.length; i++) {
        for (let j = 0; j < classname.length; j++) {
            if(ele[i].className === classname[j]){
                ele[i].remove()
                continue;
            }
        }
    }
}


// task 3
document.querySelector(".task-3 p").remove()
let start = document.createElement("div")
start.className = "start";
start.title = "Start Element";
start.dataset.value = "Start";
start.textContent = "Start";
let end = document.createElement("div")
end.textContent="End"
end.className = "end";
end.title = "End Element";
end.dataset.value = "End";
document.querySelector(".task-3").append(end)
document.querySelector(".task-3").prepend(start)

// task 4
// i really don't understand what is with not space or new line is.
let task4 = document.querySelector("span").nextSibling.nextSibling.nextSibling.textContent.trim()
console.log(task4)


// task 5
document.addEventListener("click", function(e){
    console.log("this is "+e.target.tagName)
})