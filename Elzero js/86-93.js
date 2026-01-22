// title for the page
    let title="tasks from 86 to 93"
    document.getElementById("title").textContent=title
    document.getElementById("heading").textContent=title

// fixing the css elements before
    document.body.style.flexDirection="column"

    // All .containers
    document.querySelectorAll(".container").forEach(el => {
      el.style.marginBottom = "20px";
    });

    document.querySelectorAll(".container")[2].style.background="black"


// task 1
console.log(`${"-".repeat(5)}task 1${"-".repeat(5)}`)

console.log(document.getElementById("task-1").firstChild)
console.log(document.getElementById("task-1").lastChild)
console.log(document.getElementById("task-1").firstElementChild)
console.log(document.getElementById("elzero"))
console.log(document.getElementsByClassName("element"))
console.log(document.getElementsByTagName("div"))
console.log(document.getElementsByName("js"))
console.log(document.querySelector(".element"))
console.log(document.querySelector("#elzero"))
console.log(document.querySelector("[name='js']"))
console.log(document.querySelector("div"))
console.log(document.querySelectorAll(".element"))
console.log(document.querySelectorAll("#elzero"))
console.log(document.querySelectorAll("[name='js']"))
console.log(document.querySelectorAll("div"))


// task 2
console.log(`${"-".repeat(5)}task 2${"-".repeat(5)}`)

let loop=document.querySelectorAll("#task-2 div img")
console.log(loop)
for (let i = 0; i < loop.length; i++) {
    loop[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    loop[i].alt="Elzero logo"
}


// task 3
console.log(`${"-".repeat(5)}task 3${"-".repeat(5)}`)

const input = document.querySelector("#task-3 form input");
var result = document.querySelector("#task-3 form div");

input.addEventListener("input", function(){
    const value = input.value

    result.textContent = `{${value}} USD Dollar = {${(value * 15.6).toFixed(2)}} Egyptian Pound`;
  }
);

// if the user go lower than 0
input.addEventListener("input", function(){
  if(this.value<=0){
    this.value=0
  }
})


// task 04
console.log(`${"-".repeat(5)}task 4${"-".repeat(5)}`)

let one = document.querySelector("#task-4 .one")
let two = document.querySelector("#task-4 .two")
let help

help = one.textContent
one.textContent=two.textContent
two.textContent=`${help}2`
help = one.title
one.title=two.title
two.title=help

console.log(one)
console.log(two)


// task 05
console.log(`${"-".repeat(5)}task 5${"-".repeat(5)}`)

// loop through images and check if the alt exist
// if yes we change it to Old
// and if not, change it to Elzero New

let task5 = document.querySelectorAll("#task-5 img")

for (let i = 0; i < task5.length; i++) {
  if (task5[i].alt !== "") {
    task5[i].alt="Old"
  }else{
    task5[i].alt="Elzero New"
  }
}


// task 06
console.log(`${"-".repeat(5)}task 6${"-".repeat(5)}`)

document.querySelector("#task-6 form").addEventListener("submit", function(e){
  e.preventDefault()

  let number = document.querySelector("#task-6 form [type='number']").value
  let text = document.querySelector("#task-6 form [type='text']").value
  let type = document.querySelector("#task-6 form select").value
  var result = document.querySelector(".results")

  result.innerHTML = "";

  if (type=="Div") {
    for (let i = 0; i < number; i++) {
      let div = document.createElement("div")
      div.textContent=text
      div.style.padding="20px"
      div.style.background="lightblue"
      div.style.borderRadius="20px"
      div.style.margin="10px"
      div.className="box"
      div.title="Element"
      div.id=i+1
      result.appendChild(div)
    }
  }else{
    for (let i = 0; i < number; i++) {
      let sec = document.createElement("section")
      sec.textContent=text
      sec.style.padding="20px"
      sec.style.background="lightblue"
      sec.style.borderRadius="20px"
      sec.style.margin="10px"
      sec.className="box"
      sec.title="Element"
      sec.id=i+1
      result.appendChild(sec)
    }
  }
})

