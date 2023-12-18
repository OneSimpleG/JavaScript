"use strict";
localStorage.clear()
const shop = document.getElementById("shop")
const form = document.getElementById("form")
const fromInput = document.getElementById("formInput")
const shopInput = document.querySelectorAll('#formInput>input')
const formButton = document.getElementById("formButton")
const shopButton = document.querySelectorAll('#formButton>button')
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
shopButton.forEach((el)=>{
    el.addEventListener("click",(event)=>{
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
            if (el.getAttribute("id")=="submitButton"){
                const dataFromLS = JSON.parse(localStorage.getItem("cartList"))
                const data= dataFromLS===null? [] : dataFromLS;
                // console.log(product);
                // console.log(data);
                data.push(product)
                localStorage.setItem("cartList",JSON.stringify(data))
                console.log(JSON.parse(localStorage.getItem("cartList")));
            }
        }
    })
})