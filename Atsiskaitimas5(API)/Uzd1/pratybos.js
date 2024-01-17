"use strict";
const nextButton = document.createElement("button")
const imageContainer = document.createElement("img")
nextButton.innerText="Show dog"
nextButton.style.width="400px"
nextButton.style.marginBottom="10px"
imageContainer.style.display="flex"
document.body.style.display="flex"
document.body.style.justifyContent="center"
document.body.style.alignItems="center"
document.body.style.flexDirection="column"
document.body.style.backgroundColor="darkslategray"
document.body.style.height="100vh"
document.body.append(nextButton,imageContainer)
const getPhoto = async () =>{
    const result = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await result.json()
    // console.log(data);
    imageContainer.style.width="400px"
    imageContainer.style.height="400px"
    imageContainer.style.outline="solid black 1px"
    imageContainer.src=data.message
    nextButton.innerText="Show next dog"
}
nextButton.addEventListener("click",(event)=>{
    getPhoto()
})