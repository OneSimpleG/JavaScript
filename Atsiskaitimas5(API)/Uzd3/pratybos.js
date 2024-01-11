"use strict";
const inputField = document.createElement("input")
const searchButton = document.createElement("button")
searchButton.innerText="Search photos"
const photoContainer = document.createElement("div")
photoContainer.style.display="flex"
photoContainer.style.flexWrap="wrap"
document.body.append(inputField,searchButton,photoContainer)
const getRandomPhotos = async(search)=>{
    const randomNumber = (Math.floor(Math.random() * (100 - 0 + 1) + 0)*10)
    if(search === true){
        const result = await fetch(`https://openaccess-api.clevelandart.org/api/artworks?limit=10&has_image=1&q=${inputField.value.trim()}`)
        const data = await result.json()
        console.log(data.data);
        const allCards = document.querySelectorAll(".card")
        allCards.forEach(card => card.remove())
        if(data.data.length == 0){
            const errorMessage = document.createElement("p")
            errorMessage.innerText="nerasta"
            errorMessage.className="card"
            document.body.append(errorMessage)
        }else{
            data.data.forEach(el=>{
                const card = document.createElement("div")
                card.className="card"
                card.style.width="19vw"
                card.style.outline="solid black 1px"
                card.style.margin="5px"
                const photo = document.createElement("img")
                photo.src=el.images.web.url
                photo.style.margin="0 auto 5px auto"
                photo.style.display="block"
                photo.style.width="18vw"
                photo.style.height="19.5vw"
                photo.style.objectFit="contain"
                const author = document.createElement("div")
                if(el.creators[0] != null){
                    author.innerText=el.creators[0].description.replace(/ *\([^)]*\) */g, "")
                }else{
                    author.innerText="unknown"
                }
                author.style.width="18vw"
                author.style.margin="5px 0 5px 0"
                author.style.textAlign="center"
                const name = document.createElement("div")
                name.innerText=el.title
                name.style.textAlign="center"
                name.style.fontWeight="bolder"
                const year = document.createElement("div")
                year.innerText=`${el.creation_date_earliest}-${el.creation_date_latest}`
                year.style.textAlign="center"
                card.append(author,photo,name,year)
                photoContainer.append(card)
            })
        }
    }else{
        const result = await fetch(`https://openaccess-api.clevelandart.org/api/artworks?limit=10&skip=${randomNumber}&has_image=1`)
        const data = await result.json()
        console.log(data.data);
        console.log(randomNumber);
        data.data.forEach(el=>{
            const card = document.createElement("div")
            card.className="card"
            card.style.width="19vw"
            card.style.outline="solid black 1px"
            card.style.margin="5px"
            const photo = document.createElement("img")
            photo.src=el.images.web.url
            photo.style.margin="0 auto 5px auto"
            photo.style.display="block"
            photo.style.width="18vw"
            photo.style.height="19.5vw"
            photo.style.objectFit="contain"
            const author = document.createElement("div")
            if(el.creators[0] != null){
                author.innerText=el.creators[0].description.replace(/ *\([^)]*\) */g, "")
            }else{
                author.innerText="unknown"
            }
            author.style.width="18vw"
            author.style.margin="5px 0 5px 0"
            author.style.textAlign="center"
            const name = document.createElement("div")
            name.innerText=el.title
            name.style.textAlign="center"
            name.style.fontWeight="bolder"
            const year = document.createElement("div")
            year.innerText=`${el.creation_date_earliest}-${el.creation_date_latest}`
            year.style.textAlign="center"
            card.append(author,photo,name,year)
            photoContainer.append(card)
        })
    }
}
getRandomPhotos()
searchButton.addEventListener("click",(event)=>{
    getRandomPhotos(true)
})