"use strict";
// localStorage.clear()
const shop = document.getElementById("shop")
const form = document.getElementById("form")
const fromInput = document.getElementById("formInput")
const shopInput = document.querySelectorAll('#formInput>input')
const formButton = document.getElementById("formButton")
const shopButton = document.querySelectorAll('#formButton>button')
const submitButton = document.getElementById("submitButton")
const removeButton = document.getElementById("removeButton")
const editButton = document.getElementById("editButton")
// localStorage.setItem("listExist",true)
form.style.width="50vw"
fromInput.style.boxSizing="border-box"
shopInput.forEach((el)=>{
    el.style.display="flex"
    el.style.flexDirection="column"
    el.style.width="100%"
    el.style.boxSizing="inherit"
})
formButton.style.display="flex"
formButton.style.justifyContent="space-around"
function getID(id){
    const dataFromLS = JSON.parse(localStorage.getItem("cartList"))
    console.log(dataFromLS);
    let sameID = false
    if(dataFromLS!=null){
        dataFromLS.forEach((el)=>{
            if(el.id == id)sameID = true
        })
    }
    return sameID
}

submitButton.addEventListener("click",(event)=>{
    event.preventDefault()
    let pId = document.getElementById("idField").value
    let pName = document.getElementById("nameField").value
    let pCount = document.getElementById("quantField").value
    if(pId =="" || pName==""|| pCount==""){
        alert("netaip ivesti duomenys")
    }else if (getID(pId)){
        alert("produktas jau egzistuoja")
    }else{
        const product = {
            id: pId,
            name: pName,
            quantity: pCount
        }
        shopInput.forEach((el)=>{
            el.value=""
        })
        const dataFromLS = JSON.parse(localStorage.getItem("cartList"))
        const data= dataFromLS===null? [] : dataFromLS;
        data.push(product)
        localStorage.setItem("cartList",JSON.stringify(data))
        console.log(JSON.parse(localStorage.getItem("cartList")));
    }
})

removeButton.addEventListener("click",(event)=>{
    event.preventDefault()
    let pId = document.getElementById("idField").value
    const dataFromLS = JSON.parse(localStorage.getItem("cartList"))
    if(dataFromLS!=null){
        dataFromLS.forEach((el,index)=>{
            if(el.id == pId){
                dataFromLS.splice(index,1)
                localStorage.setItem("cartList",JSON.stringify(dataFromLS))
                shopInput.forEach((el)=>{
                    el.value=""
                })
            }
        })
    }else alert("Nera ka pasalinti")

})
editButton.addEventListener("click",(event)=>{
    event.preventDefault()
    let pId = document.getElementById("idField").value
    const dataFromLS = JSON.parse(localStorage.getItem("cartList"))
    if(editButton.innerText=="Edit Item"){
        if(dataFromLS!=null){
            dataFromLS.forEach((el,index)=>{
                if(el.id == pId){
                    let pName = document.getElementById("nameField")
                    let pCount = document.getElementById("quantField")
                    pName.value=el.name
                    pCount.value=el.quantity
                    dataFromLS.splice(index,1)
                    localStorage.setItem("cartList",JSON.stringify(dataFromLS))
                    editButton.innerText="Save & Update"
                }
            })
        }
    }else{
        let pId = document.getElementById("idField").value
        let pName = document.getElementById("nameField").value
        let pCount = document.getElementById("quantField").value
        if(pId =="" || pName==""|| pCount==""){
            alert("netaip ivesti duomenys")
        }else if (getID(pId)){
            alert("produktas jau egzistuoja")
        }else{
            const product = {
                id: pId,
                name: pName,
                quantity: pCount
            }
            shopInput.forEach((el)=>{
                el.value=""
            })
            const data= dataFromLS===null? [] : dataFromLS;
            data.push(product)
            localStorage.setItem("cartList",JSON.stringify(data))
            editButton.innerText="Edit Item"
        }
    }
})
// if(JSON.parse(localStorage.getItem("cartList"))!=null){
//     const dataFromLS = JSON.parse(localStorage.getItem("cartList"))
//     let listItems = 0
//     dataFromLS.forEach((el)=>{
//         listItems++
//     })
//     const table = document.createElement("table")
//     const tableBody = document.createElement("tbody")
//     const nameRow = document.createElement("tr")
//     const pin = document.createElement("td")
//     pin.innerText="ID"
//     const pnn = document.createElement("td")
//     pnn.innerText="Name"
//     const pqn = document.createElement("td")
//     pqn.innerText="Quantity"
//     nameRow.append(pin,pnn,pqn)
//     tableBody.appendChild(nameRow)
//     table.appendChild(tableBody)
//     document.body.appendChild(table)
//     for (let i = 0; i<listItems; i++){
//         const row = document.createElement("tr")
//         const pIdCell = document.createElement("td")
//         pIdCell.innerText=dataFromLS[i].id
//         const pNameCell = document.createElement("td")
//         pNameCell.innerText=dataFromLS[i].name
//         const pCountCell = document.createElement("td")
//         pCountCell.innerText=dataFromLS[i].quantity
//         row.append(pIdCell,pNameCell,pCountCell)
//         tableBody.appendChild(row)
//         table.appendChild(tableBody)
//     }
//     table.setAttribute("border", "1")
//     shopButton.forEach((el)=>{
//         addEventListener("click",(event)=>{
//             event.preventDefault()
//             dataFromLS.forEach((el)=>{
//                 listItems++
//             })
//             for (let i = 0; i<listItems; i++){
//                 const tableCheck = document.querySelector("table")
//                 if(tableCheck){
//                     tableCheck.remove()
//                 }
//                 if(dataFromLS!=null){
//                     const table = document.createElement("table")
//                     const tableBody = document.createElement("tbody")
//                     const nameRow = document.createElement("tr")
//                     const pin = document.createElement("td")
//                     pin.innerText="ID"
//                     const pnn = document.createElement("td")
//                     pnn.innerText="Name"
//                     const pqn = document.createElement("td")
//                     pqn.innerText="Quantity"
//                     nameRow.append(pin,pnn,pqn)
//                     tableBody.appendChild(nameRow)
//                     table.appendChild(tableBody)
//                     document.body.appendChild(table)
//                     const row = document.createElement("tr")
//                     const pIdCell = document.createElement("td")
//                     pIdCell.innerText=dataFromLS[i].id
//                     const pNameCell = document.createElement("td")
//                     pNameCell.innerText=dataFromLS[i].name
//                     const pCountCell = document.createElement("td")
//                     pCountCell.innerText=dataFromLS[i].quantity
//                     row.append(pIdCell,pNameCell,pCountCell)
//                     tableBody.appendChild(row)
//                     table.appendChild(tableBody)
//                 }
//             }
//         })
//     })
// }
// shopButton.forEach((el)=>{
//     el.addEventListener("click",(event)=>{
//         event.preventDefault()
//         if(JSON.parse(localStorage.getItem("cartList"))!=null){
//             localStorage.setItem("listExist",true)
//         }else localStorage.setItem("listExist",false)
//     })
// })
// if(JSON.stringify(localStorage.getItem("listExist"))){
//     console.log("test");
//     const dataFromLS = JSON.parse(localStorage.getItem("cartList"))
//     let listItems = 0
//     const tableCheck = document.querySelector("table")
//     if(tableCheck){
//         tableCheck.remove()
//     }
//     const table = document.createElement("table")
//     const tableBody = document.createElement("tbody")
//     const nameRow = document.createElement("tr")
//     const pin = document.createElement("td")
//     pin.innerText="ID"
//     const pnn = document.createElement("td")
//     pnn.innerText="Name"
//     const pqn = document.createElement("td")
//     pqn.innerText="Quantity"
//     nameRow.append(pin,pnn,pqn)
//     tableBody.appendChild(nameRow)
//     table.appendChild(tableBody)
//     shopButton.forEach((el)=>{
//         el.addEventListener("click",(event)=>{
//             event.preventDefault()
//             dataFromLS.forEach((el)=>{
//                 listItems++
//             })
//             for (let i = 0; i<listItems; i++){
//                 const row = document.createElement("tr")
//                 const pIdCell = document.createElement("td")
//                 pIdCell.innerText=dataFromLS[i].id
//                 const pNameCell = document.createElement("td")
//                 pNameCell.innerText=dataFromLS[i].name
//                 const pCountCell = document.createElement("td")
//                 pCountCell.innerText=dataFromLS[i].quantity
//                 row.append(pIdCell,pNameCell,pCountCell)
//                 tableBody.appendChild(row)
//                 table.appendChild(tableBody)
//             }
//             document.body.appendChild(table)
//             table.setAttribute("border", "1")
//         })
//     })
// }