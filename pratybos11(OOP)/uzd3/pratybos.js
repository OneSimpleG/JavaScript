"use strict";
// Pratybos 3 /////////////////////////////////////
class Reader{
    constructor(vardas,pavarde,korteles_nr){
        this.name = vardas
        this.lastName = pavarde
        this.card_Num = korteles_nr
        this.book = []
    }
    getInfo(){
        for(let i in this){
            console.log(`${i}: ${this[i]}`);
        }
    }
    setBook(knyga){
        let bookCollection = this.book || []
        bookCollection.push(knyga)
    }
}
const form = document.createElement("form")
document.body.append(form)
const nameInput = document.createElement("input")
nameInput.placeholder="Name"
const lastNameInput = document.createElement("input")
lastNameInput.placeholder="Last Name"
const cardInput = document.createElement("input")
cardInput.placeholder="Card Number"
const bookInput = document.createElement("input")
bookInput.placeholder="Book Name"
const submit = document.createElement("button")
submit.type="submit"
submit.innerText="Submit"
const userList = []
form.append(nameInput,lastNameInput,cardInput,bookInput,submit)
submit.addEventListener("click",(event)=>{
    event.preventDefault()
    const allFields = document.querySelectorAll("form>input")
    let allInfo = []
    allFields.forEach(el=>{
        if(el.value.trim()!=''){
            allInfo.push(el.value)
        }
    })
    if(allInfo.length>=4){
        if(userList.length==0){
            const user = new Reader(nameInput.value,lastNameInput.value,cardInput.value)
            user.setBook(bookInput.value)
            userList.push(user)
        }else{
            let userExist = false
            for(let i in userList){
                if(userList[i].card_Num==cardInput.value){
                    userExist = true
                }
            }
            if(userExist==false){
                const user = new Reader(nameInput.value,lastNameInput.value,cardInput.value)
                user.setBook(bookInput.value)
                userList.push(user)
            }else{
                alert("Vartotojo korteles numeris jau egzistuoja")
            }
        }
        console.log(userList);
        const tableRemove = document.querySelectorAll(".userTable")
        tableRemove.forEach(table=> table.remove())
        const table = document.createElement("table")
        table.className="userTable"
        const cellNameRow = document.createElement("tr")
        const cellNames = ["Name","Last Name","Card Num.","Books","Remove"]
        for(let i of cellNames){
            const cellName = document.createElement("th")
            cellName.innerText=i
            cellNameRow.append(cellName)
        }
        table.append(cellNameRow)
        document.body.append(table)
        for(let i of userList){
            const userRow = document.createElement("tr")
            userRow.className="userRow"
            for(let j in i){
                const userInfo = document.createElement("td")
                if(j=='card_Num'){
                    userInfo.className="cardNum"
                }
                if(j!='book'){
                    userInfo.innerText=i[j]
                }else{
                    const dropdown = document.createElement("select")
                    for(let o in i[j]){
                        const dropdownOption = document.createElement("option")
                        dropdownOption.innerText=i[j][o]
                        dropdown.append(dropdownOption)
                    }
                    userInfo.append(dropdown)
                }
                userRow.append(userInfo)
            }
            const removeButton = document.createElement("button")
            removeButton.innerText="Remove"
            removeButton.addEventListener("click",(event)=>{
                // for(let u in userList){
                //     if(userList[u].card_Num==)
                // }
                userRow.remove()
                if(document.querySelectorAll(".userTable.tr").length<=1){
                    const tableRemove = document.querySelectorAll(".userTable")
                    tableRemove.forEach(table=> table.remove())
                    console.log(userList);
                }
            })
            userRow.append(removeButton)
            table.append(userRow)
        }
    }else{
        alert("truksta duomenu")
    }
})
