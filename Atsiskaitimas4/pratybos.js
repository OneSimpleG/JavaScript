"use strict";
// Uzduotis 1.
// const buttonPlus = document.createElement("button")
// const buttonMinus = document.createElement("button")
// const paragraf = document.createElement("p")
// document.body.append(buttonPlus,buttonMinus,paragraf)
// buttonPlus.innerText="+"
// buttonMinus.innerText="-"
// let buttonCounter = 0
// paragraf.innerText="0"
// buttonPlus.style.backgroundColor="lightGreen"
// buttonMinus.style.backgroundColor="lightBlue"
// buttonPlus.addEventListener("click",(event)=>{
//     buttonCounter++
//     paragraf.innerText=buttonCounter
//     if(buttonCounter%2==0){
//         buttonPlus.style.backgroundColor="red"
//     }else buttonPlus.style.backgroundColor="lightGreen"
// })
// buttonMinus.addEventListener("click",(event)=>{
//     buttonCounter--
//     paragraf.innerText=buttonCounter
//     if(buttonCounter%2==0){
//         buttonMinus.style.backgroundColor="red"
//     }else buttonMinus.style.backgroundColor="lightBlue"
// })
//Uzduotis 2
// const listContainer = document.createElement("div")
// document.body.append(listContainer)
// const listSize = document.createElement("input")
// listSize.setAttribute("placeholder","ul list")
// const listItems = document.createElement("input")
// listItems.setAttribute("placeholder","ol list")
// const listButton = document.createElement("button")
// listButton.innerText="Create LIST"
// listContainer.append(listSize,listItems,listButton)
// listContainer.style.display="grid"
// const listListContainer=document.createElement("div")
// listListContainer.setAttribute("id","listListContainer")
// listContainer.append(listListContainer)
// listButton.addEventListener("click",(event)=>{
//     const unorderedList = listSize.value
//     const orderedList = listItems.value
//     if(document.querySelector("#listListContainer>div")!=null){
//         const list = document.querySelector("#listListContainer>div")
//         list.remove()
//     }
//     const list = document.createElement("div")
//     listListContainer.append(list)
//     const ul = document.createElement("ul")
//     for(let i=0;i<unorderedList;i++){
//         const li = document.createElement("li")
//         li.innerText="Unordered"
//         ul.append(li)
//         const ol = document.createElement("ol")
//         li.append(ol)
//         for(let j=0;j<orderedList;j++){
//             const orderedListListItem = document.createElement("li")
//             orderedListListItem.innerText="Ordered"
//             ol.append(orderedListListItem)
//         }
//     }
//     list.append(ul)
//     listSize.value=""
//     listItems.value=""
// })
// Uzduotis 3
const todo = JSON.parse(localStorage.getItem("todoList"))
const data = todo === null ? [] : todo
localStorage.setItem("todoList",JSON.stringify(data))
