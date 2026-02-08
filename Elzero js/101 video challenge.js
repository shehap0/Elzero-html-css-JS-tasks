// pseudocode

// 1 - we have to make the same shape as in the picture all JS, no css or html
// 2 - we have Headers, body and footer
// 3 - we have to make sure that they have classes and use css in js to style them

// header - nav
let header = document.createElement("header")
header.setAttribute("class", "header")
document.body.append(header)
header.style.cssText="display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; background-color: white;"

// title for heading
let title_header = document.createElement("div")
title_header.textContent="Elzero"
title_header.setAttribute("class","logo")
title_header.style.cssText="color:#2ecc71; font-weight: bold; font-size: 20px;"
header.append(title_header)

// Nav for heading
let nav_header = document.createElement("nav")
nav_header.setAttribute("class","nav")
nav_header.style.cssText="display:flex; gap:15px;"
let nav_list = ["Home", "About", "Service", "Content"]
for (let i = 0; i < nav_list.length; i++) {
    let a = document.createElement("a")
    a.setAttribute("href", "#")
    a.textContent=nav_list[i]
    a.style.cssText="text-decoration: none; color: #555;"
    nav_header.append(a)
}
header.append(nav_header)


// body - products cards
// main
let main = document.createElement("main")
main.setAttribute("class","content")
main.style.cssText="display: flex; flex-wrap: wrap; gap: 15px; padding: 20px; background-color:gray;"
document.body.append(main)

// num of cards
let num = [1]
for (let i = 2; i < 16; i++) {
    num.push(i)
}
    // card
for (let i = 1; i <= num.length; i++) {
    let div = document.createElement("div")
    div.setAttribute("class", "product")
    div.style.cssText="background-color: white; flex: calc((90% - 30px) / 3); padding: 10px; text-align: center; border-radius: 5px;"
    let h = document.createElement("h2")
    h.textContent=i
    h.style.cssText="font-size: 30px; margin-bottom: 10px;"
    let p = document.createElement("p")
    p.textContent="Product"
    div.append(h)
    div.append(p)
    main.append(div)
}


// footer
let footer = document.createElement("footer")
footer.setAttribute("class","footer")
footer.textContent="Copyright 2021"
footer.style.cssText="background-color: #2ecc71; color: white; text-align: center; padding: 15px 20px;"
document.body.append(footer)