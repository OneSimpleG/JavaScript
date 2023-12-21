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
const taskContainer = document.createElement("div")
const submitButton = document.getElementById("submit")
submitButton.addEventListener("click",(event)=>{
    const todo = JSON.parse(localStorage.getItem("todoList"))
    const data = todo === null ? [] : todo
    event.preventDefault()
    const taskName = document.getElementById("taskInput").value
    const taskPriority = document.getElementById("priority").value
    const task ={
        name: taskName,
        priority: taskPriority,
        done: false
    }
    data.push(task)
    localStorage.setItem("todoList",JSON.stringify(data))
    if(document.getElementById("taskTable")!=null){
        const tableCheck = document.getElementById("taskTable")
        tableCheck.remove()
    }
    const taskTable = document.createElement("table")
    taskTable.setAttribute("id","taskTable")
    const tableHead = document.createElement("thead")
    const cellNames = document.createElement("tr")
    const taskHeadName = document.createElement("th")
    taskHeadName.innerText="Task:"
    const taskHeadPriority = document.createElement("th")
    taskHeadPriority.innerText="Priority:"
    const taskHeadOption = document.createElement("th")
    taskHeadOption.innerText="Option:"
    cellNames.append(taskHeadName,taskHeadPriority,taskHeadOption)
    tableHead.appendChild(cellNames)
    taskTable.appendChild(tableHead)
    document.body.append(taskTable)
    data.forEach((el,index)=>{
        console.log(el,index);
        const taskRow = document.createElement("tr")
        const taskTableTask = document.createElement("td")
        const taskTablePriority = document.createElement("td")
        const taskTableOption = document.createElement("td")
        taskTableTask.innerText=el.name
        taskTablePriority.innerText=el.priority
        const taskComplete = document.createElement("input")
        const taskRemove = document.createElement("button")
        taskComplete.setAttribute("type","checkbox")
        taskRemove.innerText="X"
        taskTableOption.append(taskComplete,taskRemove)
        taskRow.append(taskTableTask,taskTablePriority,taskTableOption)
        taskTable.append(taskRow)
        taskComplete.addEventListener("click",(event)=>{
            const todo = JSON.parse(localStorage.getItem("todoList"))
            const data = todo === null ? [] : todo
            if(taskComplete.checked){
                el.done = true
                data.splice(index,1,el)
                taskComplete.checked = true
                taskTableTask.style.backgroundColor="lightGreen"
                taskTablePriority.style.backgroundColor="lightGreen"
            }else{
                el.done = false
                data.splice(index,1,el)
                taskComplete.checked = false
                taskTableTask.style.backgroundColor="white"
                taskTablePriority.style.backgroundColor="white"
            }
            localStorage.setItem("todoList",JSON.stringify(data))
        })
        if(el.done){
            taskComplete.checked = true
            taskTableTask.style.backgroundColor="lightGreen"
            taskTablePriority.style.backgroundColor="lightGreen"
        }else{
            taskComplete.checked = false
            taskTableTask.style.backgroundColor="white"
            taskTablePriority.style.backgroundColor="white"
        }
        taskRemove.addEventListener("click",(event)=>{
            const todo = JSON.parse(localStorage.getItem("todoList"))
            const data = todo === null ? [] : todo
            data.splice(index,1)
            localStorage.setItem("todoList",JSON.stringify(data))
            taskRow.remove()
            console.log(todo[0]);
            if(todo[0]==undefined){
                localStorage.removeItem("todoList")
            }
        })
    })
    document.getElementById("taskInput").value = ""
})
if(JSON.parse(localStorage.getItem("todoList"))!=null){
    const todo = JSON.parse(localStorage.getItem("todoList"))
    const data = todo === null ? [] : todo
    if(document.getElementById("taskTable")!=null){
        const tableCheck = document.getElementById("taskTable")
        tableCheck.remove()
    }
    const taskTable = document.createElement("table")
    taskTable.setAttribute("id","taskTable")
    const tableHead = document.createElement("thead")
    const cellNames = document.createElement("tr")
    const taskHeadName = document.createElement("th")
    taskHeadName.innerText="Task:"
    const taskHeadPriority = document.createElement("th")
    taskHeadPriority.innerText="Priority:"
    const taskHeadOption = document.createElement("th")
    taskHeadOption.innerText="Option:"
    cellNames.append(taskHeadName,taskHeadPriority,taskHeadOption)
    tableHead.appendChild(cellNames)
    taskTable.appendChild(tableHead)
    document.body.append(taskTable)
    data.forEach((el,index)=>{
        console.log(el,index);
        const taskRow = document.createElement("tr")
        const taskTableTask = document.createElement("td")
        const taskTablePriority = document.createElement("td")
        const taskTableOption = document.createElement("td")
        taskTableTask.innerText=el.name
        taskTablePriority.innerText=el.priority
        const taskComplete = document.createElement("input")
        const taskRemove = document.createElement("button")
        taskComplete.setAttribute("type","checkbox")
        taskRemove.innerText="X"
        taskTableOption.append(taskComplete,taskRemove)
        taskRow.append(taskTableTask,taskTablePriority,taskTableOption)
        taskTable.append(taskRow)
        taskComplete.addEventListener("click",(event)=>{
            const todo = JSON.parse(localStorage.getItem("todoList"))
            const data = todo === null ? [] : todo
            if(taskComplete.checked){
                el.done = true
                data.splice(index,1,el)
                taskComplete.checked = true
                taskTableTask.style.backgroundColor="lightGreen"
                taskTablePriority.style.backgroundColor="lightGreen"
            }else{
                el.done = false
                data.splice(index,1,el)
                taskComplete.checked = false
                taskTableTask.style.backgroundColor="white"
                taskTablePriority.style.backgroundColor="white"
            }
            localStorage.setItem("todoList",JSON.stringify(data))
        })
        if(el.done){
            taskComplete.checked = true
            taskTableTask.style.backgroundColor="lightGreen"
            taskTablePriority.style.backgroundColor="lightGreen"
        }else{
            taskComplete.checked = false
            taskTableTask.style.backgroundColor="white"
            taskTablePriority.style.backgroundColor="white"
        }
        taskRemove.addEventListener("click",(event)=>{
            const todo = JSON.parse(localStorage.getItem("todoList"))
            const data = todo === null ? [] : todo
            data.splice(index,1)
            localStorage.setItem("todoList",JSON.stringify(data))
            taskRow.remove()
            console.log(todo[0]);
            if(todo[0]==undefined){
                localStorage.removeItem("todoList")
            }
        })
    })
}