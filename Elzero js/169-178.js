// title for the page
let title = "tasks from 169 to 178";
document.getElementById("title").textContent = title;
document.getElementById("heading").textContent = title;

// task 2
// console.log("task 2");
// let myRequest = new XMLHttpRequest()
// myRequest.open("GET", "articles.json")
// myRequest.send()
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   if(myRequest.readyState === 4 && myRequest.status === 200){
//     console.log(myRequest.responseText);
//   }
//   myRequest.onload = function () {
//     console.log("data loaded")
//   }
// }


// task 3
// console.log("task 3");

// let objectFromServer = new XMLHttpRequest()
// objectFromServer.open("GET", "articles.json")
// objectFromServer.send()
// objectFromServer.onreadystatechange = function(){
//   if(objectFromServer.status === 200 && objectFromServer.readyState === 4){
//     let objectFromServerAsJS = JSON.parse(this.responseText)
//     for (let index = 0; index < objectFromServerAsJS.length; index++) objectFromServerAsJS[0].aritcleSection = "ALL"
//   for (let i = 0; i < objectFromServerAsJS.length; i++) {
//     console.log(objectFromServerAsJS[i])
//     let updatedData = JSON.stringify(objectFromServerAsJS);
//     console.log(updatedData)
//   }
// }
// }


// task 4
console.log("task 4")
let dataReq = new XMLHttpRequest();
dataReq.open("GET", "articles.json");
dataReq.send();
dataReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let jsData = JSON.parse(this.responseText);
        let mainHolder = document.createElement("div");
        mainHolder.id = "data";
        for (let i = 0; i < jsData.length; i++) {
            let div = document.createElement("div");
            div.className = `article num-${i}`;

            let heading = document.createElement("h2");
            heading.className = "heading";
            heading.innerHTML = `${jsData[i].aritcleTitle}`;
            div.appendChild(heading);

            let artBody = document.createElement("p");
            artBody.className = "article-body";
            artBody.innerHTML = `${jsData[i].aritcleDescription}`;
            div.appendChild(artBody);

            let artAuthor = document.createElement("p");
            artAuthor.className = "author";
            artAuthor.innerHTML = `${jsData[i].author}`;
            div.appendChild(artAuthor);

            let artCat = document.createElement("p");
            artCat.className = "category";
            artCat.innerHTML = `${jsData[i].aritcleSection}`;
            div.appendChild(artCat);

            mainHolder.appendChild(div);
            mainHolder.appendChild(document.createElement("hr"));
        }
        document.querySelector(".container").appendChild(mainHolder);
    }
};