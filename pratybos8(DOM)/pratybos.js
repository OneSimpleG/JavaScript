// "use strict";
const link = document.querySelector("div")
console.log(link);

const divas1 = document.querySelector(".divas1")
console.log(divas1);

const byID = document.getElementById("divas1")
console.log(byID);

const byClass = document.getElementsByClassName("divas1")
console.log(byClass);

const all = document.querySelectorAll("div")
console.log(all);

const byTag = document.getElementsByTagName("div")
console.log(byTag);

const child = link.querySelector("p")
console.log(child);

const child1 = document.querySelector("div").childNodes
console.log(child1);

const child2 = document.querySelectorAll("div>p")
console.log(child2);

const firstChild = document.querySelector("div>p")
console.log(firstChild, child2[1]);

firstChild.setAttribute("class","pirmasP")
child2[1].className="antrasP"
// firstChild.removeAttribute("class")
const attr = firstChild.getAttribute("class")
console.log(attr);

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
console.log(buttonsGroup);

buttonsGroup.forEach((el,ind)=>el.addEventListener("click",()=>{
    console.log(`Clicked button ${el.innerText}`);
}))

// event.value
// event.target

const forma = document.querySelector("form")
const inputas = document.querySelector("input")
const submitas = document.querySelector("form>button")
console.log(forma,inputas,submitas);

submitas.addEventListener("click",(event)=>{
    event.preventDefault()
    const inputValue = inputas.value
    console.log(inputValue);
})