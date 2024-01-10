"use strict";
// Unsplash API
const API_KEY = "mBztRHX1zNd3Ozh1JecXHfwIPVNSG1tp25ttNePHSnk"
const searchButton = document.createElement("button")
searchButton.innerText="Search"
const inputField = document.createElement("input")
inputField.style.marginBottom="10px"
searchButton.style.marginBottom="10px"
const gallery = document.createElement("div")
gallery.style.display="flex"
gallery.style.flexWrap="wrap"
gallery.style.justifyContent="space-evenly"
document.body.append(inputField,searchButton,gallery)
inputField.type="text"
const getPhotos = async (search) =>{
    if(search!=true){
        const getData = await fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=10`)
        const result = await getData.json()
        console.log(result);
        const allPhotos = document.querySelectorAll(".image")
        allPhotos.forEach(photo=> photo.remove())
        result.forEach(el => {
            const image = document.createElement("img")
            image.className="image"
            image.style.width="18vw"
            image.style.minWidth="100px"
            image.style.height="22vw"
            image.style.minHeight="200px"
            image.style.objectFit="cover"
            image.style.padding="5px"
            image.src=el.urls.regular
            gallery.append(image)
        });
    }else{
        const getData = await fetch(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${inputField.value}&per_page=10`)
        console.log(getData);
        const result = await getData.json()
        console.log(result,result.results);
        const allPhotos = document.querySelectorAll(".image")
        allPhotos.forEach(photo=> photo.remove())
        if(result.total == 0){
            const errorMesage = document.createElement("p")
            errorMesage.className="image"
            errorMesage.innerText="Images Not Found"
            gallery.append(errorMesage)
        }else{
            result.results.forEach(el => {
                const image = document.createElement("img")
                image.className="image"
                image.style.width="18vw"
                image.style.minWidth="100px"
                image.style.height="22vw"
                image.style.minHeight="200px"
                image.style.objectFit="cover"
                image.style.padding="5px"
                image.src=el.urls.regular
                gallery.append(image)
            });
        }
    }
    
}
getPhotos()
searchButton.addEventListener("click",(event)=>{
    getPhotos(true)
})