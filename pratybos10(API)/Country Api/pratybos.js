"use strict";
// Country API
const searchButton = document.createElement("button")
searchButton.innerText="search"
const textField = document.createElement("input")
textField.type="text"
textField.placeholder="enter a country"
document.body.append(textField,searchButton)

const getData = async(name) =>{
    const result = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    if(result.status === 404){
        const countryName = document.createElement("div")
        countryName.className="card"
        countryName.innerText="Country not Found"
    }else{
        const data = await result.json()
        console.log(data);
        const allCards = document.querySelectorAll(".card")
        allCards.forEach(card=> card.remove())
        data.map((country,index)=>{
            const dataContainer = document.createElement("div")
            const imageContainer = document.createElement("img")
            const countryName = document.createElement("div")
            const capitalName = document.createElement("div")
            dataContainer.style.display="flex"
            dataContainer.style.flexDirection="column"
            dataContainer.className="card"
            imageContainer.src=country.flags.png
            imageContainer.alt=country.flags.alt || country.name.common
            countryName.innerText=country.name.common
            capitalName.innerText=country.capital[0]
            dataContainer.append(imageContainer,countryName,capitalName)
            document.body.append(dataContainer)
        })
    }
} 

searchButton.addEventListener("click",(event)=>{
    event.preventDefault()
    const name = textField.value.trim()
    getData(name)
})

