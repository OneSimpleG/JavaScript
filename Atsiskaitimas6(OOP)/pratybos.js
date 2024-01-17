"use strict";
class Animal{
    constructor(name,age,legs){
        this.name = name
        this.age = age
        this.legs = legs
    }
}
class Dogs extends Animal{
    constructor(name,age,legs,fur,muzzle){
        super(name,age,legs)
        this.fur = fur
        this.muzzle = muzzle
    }
}
class Cats extends Animal{
    constructor(name,age,legs,fur,wisker){
        super(name,age,legs)
        this.fur = fur
        this.wisker = wisker
    }
}
class Birds extends Animal{
    constructor(name,age,legs,wings,beak){
        super(name,age,legs)
        this.wings = wings
        this.beak = beak
    }
}
document.body.style.backgroundColor="DarkSlateGray"
const buttonBox = document.createElement("div")
const animalButtonCat = document.createElement("button")
animalButtonCat.style.width="180px"
animalButtonCat.style.height="50px"
animalButtonCat.className="animalButton"
animalButtonCat.style.border="2px solid black"
animalButtonCat.style.backgroundColor="cadetBlue"
animalButtonCat.style.borderRadius="5px"
const animalButtonDog = document.createElement("button")
animalButtonDog.style.width="180px"
animalButtonDog.style.height="50px"
animalButtonDog.className="animalButton"
animalButtonDog.style.border="2px solid black"
animalButtonDog.style.backgroundColor="cadetBlue"
animalButtonDog.style.borderRadius="5px"
const animalButtonBird = document.createElement("button")
animalButtonBird.style.width="180px"
animalButtonBird.style.height="50px"
animalButtonBird.className="animalButton"
animalButtonBird.style.border="2px solid black"
animalButtonBird.style.backgroundColor="cadetBlue"
animalButtonBird.style.borderRadius="5px"
animalButtonCat.innerText="Cats"
animalButtonDog.innerText="Dogs"
animalButtonBird.innerText="Birds"
buttonBox.append(animalButtonCat,animalButtonDog,animalButtonBird)
buttonBox.style.display="flex"
buttonBox.style.justifyContent="space-around"
document.body.append(buttonBox)
const formBox = document.createElement("div")
formBox.style.display="flex"
formBox.style.justifyContent="center"
formBox.style.margin="10px"
document.body.append(formBox)
const animalBox = document.createElement("div")
animalBox.style.display="flex"
document.body.append(animalBox)
animalButtonCat.addEventListener("click",(event)=>{
    const removeAnimalBox = document.querySelectorAll(".animalBox")
    removeAnimalBox.forEach(el=>el.remove())
    const animalBox = document.createElement("div")
    animalBox.style.display="flex"
    animalBox.style.flexWrap="wrap"
    animalBox.className="animalBox"
    document.body.append(animalBox)
    const formRemove = document.querySelectorAll(".form")
    formRemove.forEach(el=>el.remove())
    const form = document.createElement("form")
    form.classList="form"
    form.style.padding="10px"
    form.style.border="2px solid black"
    form.style.backgroundColor="cadetBlue"
    form.style.borderRadius="5px"
    form.innerHTML=`<label>Name:</label><input class="name"><label>Age:</label><input class="age"><label>Legs:</label><input class="legs"><label>Fur:</label><input class="fur"><label>Wisker:</label><input class="wisker">`
    const submitButton = document.createElement("button")
    submitButton.addEventListener("click",(event)=>{
        event.preventDefault()
        const cat = {
            name: document.querySelector(".name").value,
            age: document.querySelector(".age").value,
            legs: document.querySelector(".legs").value,
            fur: document.querySelector(".fur").value,
            wisker: document.querySelector(".wisker").value
        }
        const animalInfo = document.createElement("div")
        animalInfo.style.width="120px"
        animalInfo.style.border="2px solid black"
        animalInfo.style.borderRadius="5px"
        animalInfo.style.backgroundColor="cadetBlue"
        animalInfo.style.margin="3px"
        for(let i in cat){
            const infoLine = document.createElement("div")
            infoLine.innerText=`${i}: ${cat[i]}`
            animalInfo.append(infoLine)
        }
        animalBox.append(animalInfo)
    })
    submitButton.innerText="Submit"
    submitButton.style.marginTop="18px"
    form.append(submitButton)
    form.style.display="flex"
    form.style.flexDirection="column"
    form.style.width="180px"
    formBox.append(form)
})
animalButtonDog.addEventListener("click",(event)=>{
    const removeAnimalBox = document.querySelectorAll(".animalBox")
    removeAnimalBox.forEach(el=>el.remove())
    const animalBox = document.createElement("div")
    animalBox.style.display="flex"
    animalBox.style.flexWrap="wrap"
    animalBox.className="animalBox"
    document.body.append(animalBox)
    const formRemove = document.querySelectorAll(".form")
    formRemove.forEach(el=>el.remove())
    const form = document.createElement("form")
    form.classList="form"
    form.style.padding="10px"
    form.style.border="2px solid black"
    form.style.backgroundColor="cadetBlue"
    form.style.borderRadius="5px"
    form.innerHTML=`<label>Name:</label><input class="name"><label>Age:</label><input class="age"><label>Legs:</label><input class="legs"><label>Fur:</label><input class="fur"><label>Muzzle:</label><input class="muzzle">`
    const submitButton = document.createElement("button")
    submitButton.addEventListener("click",(event)=>{
        event.preventDefault()
        const dog = {
            name: document.querySelector(".name").value,
            age: document.querySelector(".age").value,
            legs: document.querySelector(".legs").value,
            fur: document.querySelector(".fur").value,
            muzzle: document.querySelector(".muzzle").value
        }
        const animalInfo = document.createElement("div")
        animalInfo.style.width="120px"
        animalInfo.style.border="2px solid black"
        animalInfo.style.borderRadius="5px"
        animalInfo.style.backgroundColor="cadetBlue"
        animalInfo.style.margin="3px"
        for(let i in dog){
            const infoLine = document.createElement("div")
            infoLine.innerText=`${i}: ${dog[i]}`
            animalInfo.append(infoLine)
        }
        animalBox.append(animalInfo)
    })
    submitButton.innerText="Submit"
    submitButton.style.marginTop="18px"
    form.append(submitButton)
    form.style.display="flex"
    form.style.flexDirection="column"
    form.style.width="180px"
    formBox.append(form)
})
animalButtonBird.addEventListener("click",(event)=>{
    const removeAnimalBox = document.querySelectorAll(".animalBox")
    removeAnimalBox.forEach(el=>el.remove())
    const animalBox = document.createElement("div")
    animalBox.style.display="flex"
    animalBox.style.flexWrap="wrap"
    animalBox.className="animalBox"
    document.body.append(animalBox)
    const formRemove = document.querySelectorAll(".form")
    formRemove.forEach(el=>el.remove())
    const form = document.createElement("form")
    form.classList="form"
    form.style.padding="10px"
    form.style.border="2px solid black"
    form.style.backgroundColor="cadetBlue"
    form.style.borderRadius="5px"
    form.innerHTML=`<label>Name:</label><input class="name"><label>Age:</label><input class="age"><label>Legs:</label><input class="legs"><label>Wings:</label><input class="wings"><label>Beak:</label><input class="beak">`
    const submitButton = document.createElement("button")
    submitButton.addEventListener("click",(event)=>{
        event.preventDefault()
        const bird = {
            name: document.querySelector(".name").value,
            age: document.querySelector(".age").value,
            legs: document.querySelector(".legs").value,
            wings: document.querySelector(".wings").value,
            beak: document.querySelector(".beak").value
        }
        const animalInfo = document.createElement("div")
        animalInfo.style.width="120px"
        animalInfo.style.border="2px solid black"
        animalInfo.style.borderRadius="5px"
        animalInfo.style.backgroundColor="cadetBlue"
        animalInfo.style.margin="3px"
        for(let i in bird){
            const infoLine = document.createElement("div")
            infoLine.innerText=`${i}: ${bird[i]}`
            animalInfo.append(infoLine)
        }
        animalBox.append(animalInfo)
    })
    submitButton.innerText="Submit"
    submitButton.style.marginTop="18px"
    form.append(submitButton)
    form.style.display="flex"
    form.style.flexDirection="column"
    form.style.width="180px"
    formBox.append(form)
})