"use strict";
const API_KEY = "63084f6f"
const inputField = document.createElement("input")
inputField.type="text"
const searchButton =document.createElement("button")
searchButton.innerText="Find movie"
document.body.append(inputField,searchButton)
const getMovie = async()=>{
    const result = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${inputField.value.trim()}`)
    if(result.status === 404){
        const errorMessage = document.createElement("div")
        errorMessage.className="movieContainer"
        errorMessage.innerText="filmas nerastas"
        document.body.append(errorMessage)
    }else{
        const data = await result.json()
        inputField.value=""
        const allMovieContainers = document.querySelectorAll(".movieContainer")
        allMovieContainers.forEach(movie => movie.remove())
        const movieContainer = document.createElement("div")
        movieContainer.className="movieContainer"
        movieContainer.style.display="flex"
        movieContainer.style.width="300px"
        movieContainer.style.flexWrap="wrap"
        movieContainer.style.justifyContent="space-between"
        document.body.append(movieContainer)
        const poster = document.createElement("img")
        const movieName = document.createElement("div")
        const movieYear = document.createElement("div")
        poster.src=data.Poster
        poster.alt="image not found"
        movieName.innerText=data.Title
        movieYear.innerText=data.Year
        movieContainer.append(poster,movieName,movieYear)
    }
}
searchButton.addEventListener("click",(event)=>{
    getMovie()
})