"use strict";
// import result from "./data.js"
localStorage.clear()
// const favorites = JSON.parse(localStorage.getItem("favorites"))
// const data = favorites ===null ? [] : favorites
// data.push(...result)
// localStorage.setItem("favorites",JSON.stringify(data))
// function findFilm(ids){
//   for (let i in result){
//     if (result[i].id == ids){
//       let movieID = data[i].id
//       let movieTitle = data[i].title
//       localStorage.setItem("movieID",movieID)
//       localStorage.setItem("movieTitle",movieTitle)
//     }
//   }
// }
// console.log(data);
// findFilm(436270)
// function showFilms(){
//   for (let i in data){
//     for(let j in data[i])
//       console.log(`${j}: ${data[i][j]}`);
//       console.log(' ');
//   }
// }
// showFilms()
// const removeMovie=(id)=>{
//     const fromLS = JSON.parse(localStorage.getItem("favorites"))
//     const movieIndex = fromLS.findIndex((movie)=> movie.id == id)
//     console.log(movieIndex);
//     if(movieIndex>-1){
//         alert(`Istrintas filmas ${fromLS[movieIndex].title}`)
//         fromLS.splice(movieIndex,1)
//         localStorage.setItem("favorites",JSON.stringify(fromLS))
//     }else{
//         alert("movie not found")
//     }
// }
// removeMovie(766507)
// const dataFromLS = JSON.parse(localStorage.getItem("persons"))
// console.log(dataFromLS);
// const data= dataFromLS===null? [] : dataFromLS;
// console.log(data);
// const persons={
//   name: "Petras",
//   name2:"Jonas"
// }
// data.push(persons)
// console.log(data);
// localStorage.setItem("persons",JSON.stringify(data))

// const dataFromLS1 = JSON.parse(localStorage.getItem("persons"))
// console.log(dataFromLS1);
// const data1 = dataFromLS1 === null ? [] : dataFromLS1
// console.log(data1);

// const dataFromLS2 = JSON.parse(localStorage.getItem("persons"))
// console.log(dataFromLS2);
// const persons1={
//   name: "Petras",
//   name2:"karoblis"
// }
// const newArray = dataFromLS2.find((elementas)=> elementas.name==="Petras"&& elementas.name2==="Jonas")
// console.log(newArray);

// console.log(newArray);
// if(newArray){
//   alert("toks jau yra")
// }else{
//   dataFromLS2.push(persons1)
//   localStorage.setItem("persons",JSON.stringify(dataFromLS2))
// }

// const duomenys = localStorage.getItem("persons")
// const atsakymas = duomenys === null ? [] : JSON.parse(duomenys)
// const person = {
//   name: "john",
//   lastname: "doe"
// }
// const ieskoma = atsakymas.find((el)=> el.name === person.name && el.lastname === person.lastname)
// console.log(ieskoma);

// if (ieskoma){
//   alert("Toks jau yra")
// }else{
//   atsakymas.push(person)
//   localStorage.setItem("persons",JSON.stringify(atsakymas))
//   alert("Naujas irasas patalpintas LS")
// }
// const duomenysisLS = JSON.parse(localStorage.getItem("persons"))


// const person2 = {
//   name: "jane",
//   lastname: "doe"
// }
// const ieskoma2 = duomenysisLS.find((el)=> el.name === person2.name && el.lastname === person2.lastname)

// if (ieskoma2){
//   alert("Toks jau yra")
// }else{
//   duomenysisLS.push(person2)
//   localStorage.setItem("persons",JSON.stringify(duomenysisLS))
//   alert("Naujas irasas patalpintas LS")
// }

// let cat = "tom"
// localStorage.setItem("cat",cat)

// let fromLS = localStorage.getItem("cat")
// console.log(fromLS);

// let dog = "pluto"
// localStorage.setItem("dog",dog)

// let fromLS2 = localStorage.getItem("dog")
// console.log(fromLS2);

// const cats ={
//     cat1: "Tom",
//     cat2: "Garfield",
//     cat3: "Pukis"
// }

// const dogs = ["pluto","Winnie","Blnakie"]

// localStorage.setItem("catsArray", JSON.stringify(cats))
// localStorage.setItem("dogsArray", JSON.stringify(dogs))

// let catsFromLS = JSON.parse(localStorage.getItem("catsArray"))
// console.log(catsFromLS);
// console.log(catsFromLS.cat2);

// localStorage.clear()

// let cat = "Tom"
// sessionStorage.setItem("cat",cat)

// let catFromLS = sessionStorage.getItem("cat")
// console.log(catFromLS);

// let dog = "Pluto"
// sessionStorage.setItem("dog",dog)

// let dogFromLS = sessionStorage.getItem("dog")
// console.log(dogFromLS);

// import data from './data.json' assert { type: 'json' };
// console.log(data);

// const patikra = localStorage.getItem("countries")
// const sal = patikra === null ? [] : JSON.parse(patikra)
// data.forEach((el, index) => {
//   if(!el.hasOwnProperty('capital')){
//     const country = {
//       id: index+1,
//       name: el.name.common,
//       capital: 'Data not found'
//     };
//     console.log(country);
//     sal.push(country)
//   }
//   else{
//     const country = {
//       id: index+1,
//       name: el.name.common,
//       capital: el.capital[0]
//     };
//     console.log(country);
//     sal.push(country)
//   }
// });
// console.log(sal);
// localStorage.setItem("countries", JSON.stringify(sal))

