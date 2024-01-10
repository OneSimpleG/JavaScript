"use strict";
// Coffe API
const nextButton = document.createElement("button")
nextButton.innerText="Show next photo"
const image = document.createElement("img")
image.style.width="400px"
image.style.height="400px"
image.style.objectFit="cover"
image.style.display="flex"
image.style.flexDirection="column"
image.style.outline="solid black 1px"
nextButton.style.width="400px"
nextButton.style.marginBottom="10px"
document.body.append(nextButton,image)

const getPhoto = async() =>{
    const result = await fetch("https://coffee.alexflipnote.dev/random.json")
    // console.log(result);
    const data = await result.json()
    // console.log(data);
    image.src=data.file
}
getPhoto()
nextButton.addEventListener("click",(event)=>{
    getPhoto()
})
