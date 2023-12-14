// "use strict";
const link = document.querySelector("div")
// console.log(link);

const divas1 = document.querySelector(".divas1")
// console.log(divas1);

const byID = document.getElementById("divas1")
// console.log(byID);

const byClass = document.getElementsByClassName("divas1")
// console.log(byClass);

const all = document.querySelectorAll("div")
// console.log(all);

const byTag = document.getElementsByTagName("div")
// console.log(byTag);

const child = link.querySelector("p")
// console.log(child);

const child1 = document.querySelector("div").childNodes
// console.log(child1);

const child2 = document.querySelectorAll("div>p")
// console.log(child2);

const firstChild = document.querySelector("div>p")
// console.log(firstChild, child2[1]);

firstChild.setAttribute("class","pirmasP")
child2[1].className="antrasP"
// firstChild.removeAttribute("class")
const attr = firstChild.getAttribute("class")
// console.log(attr);

child2[1].classList.add("myClassInCss")
child2[1].classList.remove("myClassInCss")
child2[1].classList.replace("antrasP","myClassInCss")

child2[1].style.color="red"
child2[1].style.backgroundColor="blue"

const myButton = document.createElement("button")
const img = document.createElement("img")
divas1.appendChild(myButton)
divas1.append(img, myButton)

divas1.insertAdjacentElement("beforeend", myButton)

myButton.innerText="click"
// // myButton.textContent="click2"
// // myButton.innerHTML="click3"
// divas1.innerHTML+="<span>cia yra span </span>"

// const span = document.querySelector("span")
// span.remove()

myButton.addEventListener("click",()=>{
    if(myButton.style.backgroundColor==="red"){
        myButton.style.backgroundColor="blue"
    }else{
        myButton.style.backgroundColor="red"
    }
},{once: true});

// myButton.removeEventListener("click",()=>{
//     console.log("event listener removed");
// });

const myButton2 = document.createElement("button")
const myButton3 = document.createElement("button")
divas1.append(myButton2, myButton3)
myButton2.innerText="click2"
myButton3.innerText="click3"

const buttonsGroup = document.querySelectorAll("button")
// console.log(buttonsGroup);

buttonsGroup.forEach((el,ind)=>el.addEventListener("click",()=>{
    console.log(`Clicked button ${el.innerText}`);
}))

// event.value
// event.target

const forma = document.querySelector("form")
const inputas = document.querySelector("input")
const submitas = document.querySelector("form>button")
// console.log(forma,inputas,submitas);

// submitas.addEventListener("click",(event)=>{
//     event.preventDefault()
//     const inputValue = inputas.value
//     console.log(inputValue);
// })
//------Uzd. 1,2,3------
const myEl = document.createElement("div")
divas1.append(myEl)
// myEl.innerText="mano elementas"
const myElChild = document.createElement("h2")
myEl.append(myElChild)
myElChild.innerText="mano elemento child"
myEl.classList.add("myClass")
myElChild.id="myID"
const myElImg = document.createElement("img")
const myElA = document.createElement("a")
myEl.append(myElImg, myElA)
myElImg.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png")
myElImg.style.width="500px"
myElImg.setAttribute("alt","paveiksliukas")
myElA.setAttribute("href","#")
myElA.innerText="A elementas"
//------Uzd. 4------
const myElP1 = document.createElement("p")
const myElP2 = document.createElement("p")
const myElP3 = document.createElement("p")
const myElP4 = document.createElement("p")
myEl.append(myElP1,myElP2,myElP3,myElP4)
const pMasyvas = document.querySelectorAll("p")
pMasyvas.forEach((el,index)=>{
    el.innerText=`${index+1} p elementas`
    if (index%2===0){
        el.style.color="red"
        el.style.backgroundColor="black"
    }else{
        el.style.color="white"
        el.style.backgroundColor="green"
    }
})
//------Uzd. 5------
const inputTxt = document.createElement("h3")
forma.append(inputTxt)
forma.insertAdjacentElement("beforeend",inputTxt)
inputTxt.innerText=" "
submitas.addEventListener("click",(event)=>{
    event.preventDefault()
    const inputDisp = inputas.value
    console.log(inputDisp);
    inputTxt.innerText=inputDisp
})
//------Uzd. 6------
const createButton = document.createElement("button")
const deleteButton = document.createElement("button")
createButton.innerText="Create"
deleteButton.innerText="Delete"
const buttonEl = document.createElement("div")
myEl.append(createButton,deleteButton,buttonEl)
createButton.addEventListener("click",()=>{buttonEl.innerText="I am alive"})
deleteButton.addEventListener("click",()=>{buttonEl.innerText=""})
//------Uzd. 7------
const counterIncrease = document.createElement("button")
const counterDecrease = document.createElement("button")
const counter = document.createElement("div")
let counterTxt = 0
myEl.append(counterIncrease,counter,counterDecrease)
counterIncrease.innerText="+"
counterDecrease.innerText="-"
counter.innerText="0"
counterIncrease.addEventListener("click",()=>{
    counterTxt++
    counter.innerText=counterTxt
})
counterDecrease.addEventListener("click",()=>{
    counterTxt--
    counter.innerText=counterTxt
})


//------Uzd. 1------
const myDiv = document.querySelector(".myDiv")
const myDivChildSpan = document.createElement("span")
const myDivChildP1 = document.createElement("p")
const myDivChildP2 = document.createElement("p")
const myDivChildStrong = document.createElement("strong")
const myDivChildA = document.createElement("a")
myDiv.append(myDivChildSpan,myDivChildP1,myDivChildP2,myDivChildStrong,myDivChildA)
myDivChildSpan.setAttribute("class","divSpan")
myDivChildP1.setAttribute("id","divP")
myDivChildStrong.setAttribute("class","divStrong")
myDivChildA.setAttribute("id","divA")

const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const div4 = document.createElement("div")
const div5 = document.createElement("div")
const div6 = document.createElement("div")

myDiv.append(div1,div2,div3,div4,div5,div6)
const divArray = document.querySelectorAll(".myDiv>div")
divArray.forEach((el,index)=>{
    el.innerText=`${index+1} divas`
    el.style.width="50px"
    el.style.height="50px"
    el.style.backgroundColor=`RGB(${index},${index*10},${index*15})`
    el.style.color="white"
})
const divButton = document.createElement("button")
myDiv.append(divButton)
divButton.innerText="Change"
divButton.addEventListener("click",()=>{
    let rng1 = Math.floor((Math.random() * 255) + 1);
    let rng2 = Math.floor((Math.random() * 255) + 1);
    let rng3 = Math.floor((Math.random() * 255) + 1);
    divArray.forEach((el,index)=>{
        el.style.backgroundColor=`RGB(${index*rng1},${index*rng2},${index*rng3})`
    })
})

const wordContainer = document.getElementById("word")
const wordArray = ['uobuolys','bananas','traukinys','pastatas','zaidimas','kodas']
const random = (array) =>{
    const randIndex =Math.floor(Math.random()*array.length)
    // console.log(randIndex);
    return array[randIndex]
}
for(let i=1;i<=wordArray.length;i++){
    const pElementas = document.createElement("p")
    let randomWord=random(wordArray)
    pElementas.innerText=randomWord
    wordContainer.appendChild(pElementas)
}

const button = document.createElement("button")
button.innerText = "CREATE TABLE: "
const inputRows = document.createElement("input")
inputRows.placeholder = "eilutes"
const inputColumns = document.createElement("input")
inputColumns.placeholder = "stulpeliai"
const container = document.createElement("div")
container.append(button, inputRows, inputColumns)
document.body.append(container)
const tableContainer = document.getElementById("tableContainer")
button.addEventListener("click", (event) => {
    event.preventDefault();
    const tableCheck = document.querySelector("table")
    if(tableCheck){
        tableCheck.remove()
    }
    const table = document.createElement("table")
    const tableBody = document.createElement("tbody")
    const eilSk = inputRows.value // eilSk talpina ivesta value i langelius
    const stulpSk = inputColumns.value // stulpSk talpina ivesta value i langelius
 
    for (let i = 0; i<eilSk; i++){
        const row = document.createElement("tr") // kuria eilutes
   
    for (let j = 0; j<stulpSk; j++){
        const cell = document.createElement("td") // kuria stulpelius
        const cellText = document.createTextNode(`cell in row ${i+1}, column ${j+1}`)
        cell.appendChild(cellText)
        row.appendChild(cell)
    }
    tableBody.appendChild(row)
    }
    table.appendChild(tableBody)
    document.body.appendChild(table)
    table.setAttribute("border", "2") // del vizualo
})