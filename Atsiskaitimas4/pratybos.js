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
// const taskContainer = document.createElement("div")
// const submitButton = document.getElementById("submit")
// submitButton.addEventListener("click",(event)=>{
//     const todo = JSON.parse(localStorage.getItem("todoList"))
//     const data = todo === null ? [] : todo
//     event.preventDefault()
//     const taskName = document.getElementById("taskInput").value
//     const taskPriority = document.getElementById("priority").value
//     const task ={
//         name: taskName,
//         priority: taskPriority
//     }
//     data.push(task)
//     localStorage.setItem("todoList",JSON.stringify(data))
//     if(document.getElementById("taskTable")!=null){
//         console.log("test");
//         const tableCheck = document.getElementById("taskTable")
//         tableCheck.remove()
//     }
//     const taskTable = document.createElement("table")
//     taskTable.setAttribute("id","taskTable")
//     document.body.append(taskTable)
//     const cellNames = document.createElement("tr")
//     const taskTableName = document.createElement("th")
//     taskTableName.innerText="Task:"
//     const taskTablePriority = document.createElement("th")
//     taskTablePriority.innerText="Priority:"
//     const taskTableOption = document.createElement("th")
//     taskTableOption.innerText="Option:"
//     cellNames.append(taskTableName,taskTablePriority,taskTableOption)
//     taskTable.appendChild(cellNames)
//     data.forEach((el,index)=>{
//         console.log(el);
//         const taskRow = document.createElement("tr")
//         const taskTableTask = document.createElement("td")
//         const taskTablePriority = document.createElement("td")
//         const taskComplete = document.createElement("input")
//         const taskRemove = document.createElement("button")
//         taskTableTask.innerText=el.name
//         taskTablePriority.innerText=el.priority
//         taskComplete.setAttribute("type","checkbox")
//         taskRemove.innerText="X"
//         taskComplete.addEventListener("click",(event)=>{
//             if(taskComplete.checked){
//                 taskTableTask.style.backgroundColor="lightGreen"
//                 taskTablePriority.style.backgroundColor="lightGreen"
//             }else{
//                 taskTableTask.style.backgroundColor="white"
//                 taskTablePriority.style.backgroundColor="white"
//             }
//         })
//         console.log(todo);
//         taskRemove.addEventListener("click",(event)=>{
//             data.splice(index,1)
//             localStorage.setItem("todoList",JSON.stringify(data))
//             if(document.getElementById("taskTable")!=null){
//                 console.log("test");
//                 const tableCheck = document.getElementById("taskTable")
//                 tableCheck.remove()
//             }
//             const taskTable = document.createElement("table")
//             taskTable.setAttribute("id","taskTable")
//             document.body.append(taskTable)
//             const cellNames = document.createElement("tr")
//             const taskTableName = document.createElement("th")
//             taskTableName.innerText="Task:"
//             const taskTablePriority = document.createElement("th")
//             taskTablePriority.innerText="Priority:"
//             const taskTableOption = document.createElement("th")
//             taskTableOption.innerText="Option:"
//             cellNames.append(taskTableName,taskTablePriority,taskTableOption)
//             taskTable.appendChild(cellNames)
//             data.forEach((el)=>{
//                 console.log(el);
//                 const taskRow = document.createElement("tr")
//                 const taskTableTask = document.createElement("td")
//                 const taskTablePriority = document.createElement("td")
//                 const taskComplete = document.createElement("input")
//                 const taskRemove = document.createElement("button")
//                 taskTableTask.innerText=el.name
//                 taskTablePriority.innerText=el.priority
//                 taskComplete.setAttribute("type","checkbox")
//                 taskRemove.innerText="X"
//             })
//         })
//         taskRow.append(taskTableTask,taskTablePriority,taskComplete,taskRemove)
//         taskTable.append(taskRow)
//         taskTable.setAttribute("border", "1")
//     })
//     document.getElementById("taskInput").value = ""
// })
// console.log(JSON.parse(localStorage.getItem("todoList")));
// if(JSON.parse(localStorage.getItem("todoList"))!=null){
//     const todo = JSON.parse(localStorage.getItem("todoList"))
//     const data = todo === null ? [] : todo
//     console.log(todo);
//     const taskTable = document.createElement("table")
//     taskTable.setAttribute("id","taskTable")
//     document.body.append(taskTable)
//     const cellNames = document.createElement("tr")
//     const taskTableName = document.createElement("th")
//     taskTableName.innerText="Task:"
//     const taskTablePriority = document.createElement("th")
//     taskTablePriority.innerText="Priority:"
//     const taskTableOption = document.createElement("th")
//     taskTableOption.innerText="Option:"
//     cellNames.append(taskTableName,taskTablePriority,taskTableOption)
//     taskTable.appendChild(cellNames)
//     data.forEach((el,index)=>{
//         console.log(el);
//         const taskRow = document.createElement("tr")
//         const taskTableTask = document.createElement("td")
//         const taskTablePriority = document.createElement("td")
//         const taskComplete = document.createElement("input")
//         const taskRemove = document.createElement("button")
//         taskTableTask.innerText=el.name
//         taskTablePriority.innerText=el.priority
//         taskComplete.setAttribute("type","checkbox")
//         taskRemove.innerText="X"
//         taskComplete.addEventListener("click",(event)=>{
//             if(taskComplete.checked){
//                 taskTableTask.style.backgroundColor="lightGreen"
//                 taskTablePriority.style.backgroundColor="lightGreen"
//             }else{
//                 taskTableTask.style.backgroundColor="white"
//                 taskTablePriority.style.backgroundColor="white"
//             }
//         })
//         console.log(todo);
//         taskRemove.addEventListener("click",(event)=>{
//             data.splice(index,1)
//             localStorage.setItem("todoList",JSON.stringify(data))
//             const taskTable = document.createElement("table")
//             taskTable.setAttribute("id","taskTable")
//             document.body.append(taskTable)
//             const cellNames = document.createElement("tr")
//             const taskTableName = document.createElement("th")
//             taskTableName.innerText="Task:"
//             const taskTablePriority = document.createElement("th")
//             taskTablePriority.innerText="Priority:"
//             const taskTableOption = document.createElement("th")
//             taskTableOption.innerText="Option:"
//             cellNames.append(taskTableName,taskTablePriority,taskTableOption)
//             taskTable.appendChild(cellNames)
//             data.forEach((el)=>{
//                 console.log(el);
//                 const taskRow = document.createElement("tr")
//                 const taskTableTask = document.createElement("td")
//                 const taskTablePriority = document.createElement("td")
//                 const taskComplete = document.createElement("input")
//                 const taskRemove = document.createElement("button")
//                 taskTableTask.innerText=el.name
//                 taskTablePriority.innerText=el.priority
//                 taskComplete.setAttribute("type","checkbox")
//                 taskRemove.innerText="X"
//             })
//             console.log(todo.lenght);
//         })
//         taskRow.append(taskTableTask,taskTablePriority,taskComplete,taskRemove)
//         taskTable.append(taskRow)
//     })
//     taskTable.setAttribute("border", "1")
// }

// Komentaras: lentele ir remove mygtukai nelabai veikia 